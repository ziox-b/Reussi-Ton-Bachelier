// Réussis Ton Bachelier - UE320 Interdisciplinarité
// Application QCM + Cas cliniques + Fiches Mémo + Vrai/Faux + Glossaire + Profils

(function() {
  const DATA = window.APP_DATA;
  if (!DATA) { document.getElementById('app').innerHTML = '<p style="padding:20px;color:red;">Erreur: data.js non chargé.</p>'; return; }

  const app = document.getElementById('app');
  let state = { screen: 'home', subject: null, mode: null, qIndex: 0, answers: [], score: 0, answered: false, shuffled: [] };

  // === NORMALISATION : redistribuer aléatoirement les réponses correctes ===
  (function normalizeQuestions() {
    function reshuffleOptions(item) {
      if (!item.options || item.correct === undefined) return;
      const correctAnswer = item.options[item.correct];
      // Mélanger les options
      const shuffled = [...item.options];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      // Retrouver la nouvelle position de la réponse correcte
      const newCorrect = shuffled.indexOf(correctAnswer);
      item.options = shuffled;
      item.correct = newCorrect;
    }
    // Parcourir tous les QCMs
    for (const subj in DATA.subjects) {
      DATA.subjects[subj].forEach(q => reshuffleOptions(q));
    }
    // Parcourir les questions des cas cliniques
    for (const key in DATA.clinicalCases) {
      DATA.clinicalCases[key].forEach(c => {
        if (c.questions) c.questions.forEach(q => reshuffleOptions(q));
      });
    }
    // Vrai/Faux n'a que 2 options (VRAI/FAUX), pas besoin
    console.log('Questions normalisées - distribution aléatoire des réponses A/B/C/D');
  })();

  // === GESTION DES PROFILS ===
  const PROFILES_KEY = 'rtb_profiles';
  const CURRENT_PROFILE_KEY = 'rtb_current_profile';

  function getProfiles() { try { return JSON.parse(localStorage.getItem(PROFILES_KEY) || '[]'); } catch(e) { return []; } }
  function saveProfiles(list) { localStorage.setItem(PROFILES_KEY, JSON.stringify(list)); }
  function getCurrentProfile() { return localStorage.getItem(CURRENT_PROFILE_KEY) || ''; }
  function setCurrentProfile(name) { localStorage.setItem(CURRENT_PROFILE_KEY, name); }

  function createProfile(name) {
    const nameTrimmed = name.trim();
    if (!nameTrimmed) return false;
    const profiles = getProfiles();
    if (profiles.includes(nameTrimmed)) return false;
    profiles.push(nameTrimmed);
    saveProfiles(profiles);
    setCurrentProfile(nameTrimmed);
    return true;
  }

  function deleteProfile(name) {
    // Supprimer le profil et ses erreurs
    let profiles = getProfiles();
    profiles = profiles.filter(p => p !== name);
    saveProfiles(profiles);
    localStorage.removeItem('rtb_errors_v2_' + name);
    if (getCurrentProfile() === name) {
      setCurrentProfile(profiles.length > 0 ? profiles[0] : '');
    }
  }

  // === GESTION PERSISTANTE DES ERREURS (par profil) ===
  function getErrorsKey() { const p = getCurrentProfile(); return p ? 'rtb_errors_v2_' + p : 'rtb_errors_v2_shared'; }
  function loadErrors() { try { return JSON.parse(localStorage.getItem(getErrorsKey()) || '{}'); } catch(e) { return {}; } }
  function saveErrors(errors) { localStorage.setItem(getErrorsKey(), JSON.stringify(errors)); }
  function recordError(questionData, subject) {
    const errors = loadErrors();
    if (!errors[subject]) errors[subject] = {};
    if (!errors[subject][questionData.id]) {
      errors[subject][questionData.id] = { ...questionData, subject, wrongCount: 1, correctStreak: 0, addedAt: Date.now() };
    } else {
      errors[subject][questionData.id].wrongCount++;
      errors[subject][questionData.id].correctStreak = 0; // reset streak on new error
    }
    saveErrors(errors);
  }
  function recordCorrect(subject, questionId) {
    const errors = loadErrors();
    if (errors[subject] && errors[subject][questionId]) {
      errors[subject][questionId].correctStreak = (errors[subject][questionId].correctStreak || 0) + 1;
      if (errors[subject][questionId].correctStreak >= 7) {
        delete errors[subject][questionId];
        if (Object.keys(errors[subject]).length === 0) delete errors[subject];
        saveErrors(errors);
        return true; // Erreur supprimée
      }
      saveErrors(errors);
      return false; // Encore en cours
    }
    return false;
  }
  function removeError(subject, questionId) {
    const errors = loadErrors();
    if (errors[subject] && errors[subject][questionId]) {
      delete errors[subject][questionId];
      if (Object.keys(errors[subject]).length === 0) delete errors[subject];
      saveErrors(errors);
    }
  }
  function getErrorCount() {
    const errors = loadErrors();
    let count = 0;
    for (const subj in errors) count += Object.keys(errors[subj]).length;
    return count;
  }
  function getErrorsForSubject(subject) {
    const errors = loadErrors();
    return errors[subject] ? Object.values(errors[subject]) : [];
  }
  function getAllErrors() {
    const errors = loadErrors();
    const all = [];
    for (const subj in errors) all.push(...Object.values(errors[subj]));
    return all;
  }

  const breathing = [
    "Prends une grande inspiration... expire doucement. Tu progresses, chaque question te rapproche de la réussite.",
    "Pause. Respire. Tu as déjà parcouru un beau chemin. Chaque réponse, juste ou fausse, est un pas en avant.",
    "Tu n'es pas seule dans cette préparation. Ce que tu apprends aujourd'hui aidera tes futurs patients.",
    "La logopédie est un métier de cœur. Ta persévérance est ta plus grande force.",
    "Erreur = Apprentissage. Chaque mémo que tu lis renforce ta mémoire à long terme.",
    "Fais une pause, bois un peu d'eau. Ton cerveau a besoin d'hydratation pour bien fonctionner.",
  ];

  const moods = {
    perfect: ["Excellent ! Tu maîtrises parfaitement cette matière !", "Impressionnant ! Continue comme ça !", "Sans faute ! Tu es prête pour l'examen !"],
    good: ["Très bien ! Encore un petit effort et ce sera parfait.", "Bon travail ! Les révisions portent leurs fruits.", "Tu progresses bien, continue !"],
    ok: ["Pas mal du tout. Relis les mémos pour consolider.", "Tu tiens le bon bout. Les explications vont t'aider.", "Continue, la répétition est la clé de la mémorisation."],
    low: ["Ne te décourage pas. Chaque erreur est une opportunité d'apprendre.", "Prends le temps de bien lire les explications.", "L'examen n'est pas encore là. Tu as le temps de progresser."]
  };

  const subjLabels = { psycho: 'Psychologie — TSA', geronto: 'Gérontologie', audio: 'Audiologie' };
  const subjIcons = { psycho: '🧠', geronto: '👴', audio: '👂' };

  function shuffle(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function getMood(score, total) { if (total === 0) return moods.low; const pct = score / total; if (pct >= 0.9) return moods.perfect; if (pct >= 0.7) return moods.good; if (pct >= 0.5) return moods.ok; return moods.low; }
  function randomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function sourcePath(srcKey) { return DATA.sources[srcKey] || ''; }

  // ==================== HOME ====================
  function renderHome() {
    // Si aucun profil, afficher l'écran de création
    const profile = getCurrentProfile();
    if (!profile) {
      renderProfileSetup();
      return;
    }

    state = { screen: 'home', subject: null, mode: null, qIndex: 0, answers: [], score: 0, answered: false, shuffled: [] };
    const totalQCM = DATA.subjects.psycho.length + DATA.subjects.geronto.length + DATA.subjects.audio.length;
    const totalInter = DATA.clinicalCases.inter.length;
    const totalAudioReed = DATA.clinicalCases.audioReed.length;
    const totalFrag = DATA.clinicalCases.fragilite.length;
    const totalVF = (DATA.vraiFaux ? DATA.vraiFaux.psycho.length + DATA.vraiFaux.geronto.length + DATA.vraiFaux.audio.length : 0);
    const totalFiches = (DATA.fichesMemo ? DATA.fichesMemo.psycho.length + DATA.fichesMemo.geronto.length + DATA.fichesMemo.audio.length : 0);
    const totalGlossaire = (DATA.glossaire || []).length;
    const errCount = getErrorCount();

    app.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin:8px 0 16px;flex-wrap:wrap;gap:8px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:0.85rem;color:var(--muted);">👤 <strong>${profile.split('|')[0]}</strong></span>
          <button class="btn btn-outline btn-sm" onclick="App.showProfiles()">🔄 Changer</button>
        </div>
        ${errCount > 0 ? `<span style="font-size:0.8rem;background:var(--accent);color:white;padding:3px 10px;border-radius:12px;">${errCount} erreur(s) en attente</span>` : ''}
      </div>
      <div style="text-align:center;margin:4px 0 12px;">
        <span style="font-size:0.85rem;color:var(--muted);">📊 <strong>${totalQCM}</strong> QCM · <strong>${totalInter + totalAudioReed + totalFrag}</strong> cas cliniques · <strong>${totalVF}</strong> Vrai/Faux · <strong>${totalFiches}</strong> fiches · <strong>${totalGlossaire}</strong> termes</span>
      </div>
      <div class="tabs">
        <button class="tab active" onclick="document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');App.showHomeTab('quiz')">📝 QCM</button>
        <button class="tab" onclick="document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');App.showHomeTab('cases')">🏥 Cas cliniques</button>
        <button class="tab" onclick="document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');App.showHomeTab('revision')">📚 Révision</button>
      </div>
      <div id="homeTabContent"></div>
    `;
    showHomeTab('quiz');
  }

  // === PROFILS ===
  function renderProfileSetup() {
    const profiles = getProfiles();
    app.innerHTML = `
      <div style="text-align:center;padding:30px 16px;max-width:500px;margin:0 auto;">
        <h2 style="margin-bottom:8px;">👤 Bienvenue sur Réussis Ton Bachelier !</h2>
        <p style="color:var(--muted);margin-bottom:24px;">Crée ton profil pour sauvegarder tes erreurs et ta progression.</p>
        ${profiles.length > 0 ? `
          <div style="margin-bottom:20px;">
            <h3 style="margin-bottom:12px;">Profils existants</h3>
            ${profiles.map(p => { const parts = p.split('|'); const name = parts[0]; return `
              <div class="card" style="margin-bottom:8px;text-align:left;display:flex;justify-content:space-between;align-items:center;">
                <strong>👤 ${name}</strong>
                <button class="btn btn-outline btn-sm" onclick="App.selectProfile('${p}')">Choisir</button>
              </div>
            `; }).join('')}
          </div>
        ` : '<p style="color:var(--muted);margin-bottom:16px;">Aucun profil pour le moment.</p>'}
        <div style="margin:0 auto;">
          <h3 style="margin-bottom:8px;">Nouveau profil</h3>
          <div style="display:flex;gap:8px;margin-bottom:8px;">
            <input type="text" id="newProfileName" placeholder="Ton prénom..." style="flex:1;padding:10px 12px;border:2px solid var(--border);border-radius:8px;font-size:0.95rem;" maxlength="30" onkeydown="if(event.key==='Enter')App.createNewProfile()">
            <button class="btn btn-primary" onclick="App.createNewProfile()">Créer</button>
          </div>
          <p id="profileError" style="color:var(--accent);font-size:0.85rem;margin-top:4px;display:none;"></p>
        </div>
        <div style="margin-top:24px;padding-top:16px;border-top:1px solid var(--border);">
          <h3 style="margin-bottom:8px;">🔄 Changer d'appareil ?</h3>
          <p style="font-size:0.85rem;color:var(--muted);margin-bottom:12px;">Exporte tes données (copier-coller) depuis ton autre appareil, puis colle-les ici.</p>
          <div style="display:flex;gap:8px;justify-content:center;">
            <button class="btn btn-outline btn-sm" onclick="App.exportAllData()">📤 Exporter (copier)</button>
            <button class="btn btn-outline btn-sm" onclick="App.importAllData()">📥 Importer (coller)</button>
          </div>
        </div>
      </div>`;
  }

  function createNewProfile() {
    const input = document.getElementById('newProfileName');
    const error = document.getElementById('profileError');
    const name = input ? input.value.trim() : '';
    if (!name || name.length < 2) { if (error) { error.textContent = 'Entre un nom (min. 2 caractères).'; error.style.display = 'block'; } return; }
    // Générer un code unique à 6 caractères
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    const fullName = name + '|' + code;
    if (!createProfile(fullName)) {
      if (error) { error.textContent = 'Ce profil existe déjà.'; error.style.display = 'block'; }
      return;
    }
    // Montrer le code à l'utilisateur
    app.innerHTML = `
      <div style="text-align:center;padding:30px 16px;max-width:500px;margin:0 auto;">
        <h2>✅ Profil créé !</h2>
        <p style="margin:12px 0;">👤 <strong>${name}</strong></p>
        <div style="background:#fef9e7;border:2px solid #f39c12;border-radius:12px;padding:20px;margin:16px 0;">
          <p style="font-size:0.85rem;color:var(--muted);margin-bottom:8px;">⚠️ <strong>Note bien ce code</strong> — il te servira si tu changes d'appareil :</p>
          <p style="font-size:2rem;font-weight:700;letter-spacing:4px;font-family:monospace;">${code}</p>
          <p style="font-size:0.8rem;color:var(--muted);margin-top:4px;">Tu pourras aussi exporter tes données depuis la gestion des profils.</p>
        </div>
        <button class="btn btn-primary" onclick="App.renderHome()">Accéder à l'app →</button>
      </div>`;
  }

  function selectProfile(name) {
    setCurrentProfile(name);
    renderHome();
  }

  function showProfiles() {
    const profiles = getProfiles();
    const current = getCurrentProfile();
    app.innerHTML = `
      <div style="margin-bottom:12px;"><button class="btn btn-outline btn-sm" onclick="App.renderHome()">← Retour</button></div>
      <h2 style="margin:16px 0;">👤 Gestion des profils</h2>
      <p style="color:var(--muted);margin-bottom:16px;">Chaque profil a ses propres erreurs sauvegardées. Exporte tes données pour les transférer sur un autre appareil.</p>
      ${profiles.map(p => { const parts = p.split('|'); const name = parts[0]; return `
        <div class="card" style="margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
          <div>
            <strong>👤 ${name}</strong> ${p === current ? '<span style="color:var(--success);font-weight:700;">(actif)</span>' : ''}
          </div>
          <div style="display:flex;gap:6px;">
            ${p !== current ? `<button class="btn btn-outline btn-sm" onclick="App.selectProfile('${p}')">Activer</button>` : ''}
            <button class="btn btn-outline btn-sm" onclick="App.exportProfileData('${p}')">📤</button>
            <button class="btn btn-outline btn-sm" style="color:var(--accent);border-color:var(--accent);" onclick="if(confirm('Supprimer le profil ${name} et toutes ses erreurs ?')){App.deleteProfileAndRefresh('${p}')}">🗑️</button>
          </div>
        </div>
      `; }).join('')}
      <div style="max-width:400px;margin:20px auto 0;">
        <h3 style="margin-bottom:8px;">Nouveau profil</h3>
        <div style="display:flex;gap:8px;">
          <input type="text" id="newProfileName" placeholder="Ton prénom..." style="flex:1;padding:10px 12px;border:2px solid var(--border);border-radius:8px;font-size:0.95rem;" maxlength="30" onkeydown="if(event.key==='Enter')App.createNewProfile()">
          <button class="btn btn-primary" onclick="App.createNewProfile()">Créer</button>
        </div>
        <p id="profileError" style="color:var(--accent);font-size:0.85rem;margin-top:8px;display:none;"></p>
      </div>
      <div style="margin-top:24px;padding-top:16px;border-top:1px solid var(--border);text-align:center;">
        <p style="font-size:0.85rem;color:var(--muted);margin-bottom:8px;">🔁 Changer d'appareil ?</p>
        <button class="btn btn-outline btn-sm" onclick="App.exportAllData()">📤 Exporter (copier)</button>
        <button class="btn btn-outline btn-sm" style="margin-left:8px;" onclick="App.importAllData()">📥 Importer (coller)</button>
      </div>`;
  }

  // === EXPORT / IMPORT (copier-coller, sans fichier) ===
  function exportProfileData(profileName) {
    const exportKey = 'rtb_errors_v2_' + profileName;
    const errors = JSON.parse(localStorage.getItem(exportKey) || '{}');
    const data = { v: 2, p: profileName, d: new Date().toISOString(), e: errors };
    const text = JSON.stringify(data);
    // Afficher dans une modale avec copie automatique
    app.innerHTML = `
      <div style="margin-bottom:12px;"><button class="btn btn-outline btn-sm" onclick="App.showProfiles()">← Retour</button></div>
      <div style="text-align:center;padding:20px;max-width:550px;margin:0 auto;">
        <h2>📤 Exporter le profil</h2>
        <p style="color:var(--muted);margin:12px 0;">Copie ce texte ci-dessous et envoie-le sur ton autre appareil (mail, WhatsApp, Notes...).</p>
        <textarea id="exportText" readonly style="width:100%;height:200px;padding:12px;border:2px solid var(--border);border-radius:8px;font-size:0.8rem;font-family:monospace;resize:vertical;">${text}</textarea>
        <div style="margin-top:12px;display:flex;gap:8px;justify-content:center;">
          <button class="btn btn-primary" onclick="navigator.clipboard.writeText(document.getElementById('exportText').value).then(()=>alert('✅ Copié dans le presse-papier ! Colle-le sur ton autre appareil.')).catch(()=>{document.getElementById('exportText').select();document.execCommand('copy');alert('✅ Copié !')})">📋 Copier dans le presse-papier</button>
          <button class="btn btn-outline" onclick="App.showProfiles()">Retour</button>
        </div>
      </div>`;
  }

  function exportAllData() {
    const allData = { v: 2, d: new Date().toISOString(), pl: getProfiles(), cp: getCurrentProfile(), pr: {} };
    getProfiles().forEach(p => {
      allData.pr[p] = JSON.parse(localStorage.getItem('rtb_errors_v2_' + p) || '{}');
    });
    const text = JSON.stringify(allData);
    app.innerHTML = `
      <div style="margin-bottom:12px;"><button class="btn btn-outline btn-sm" onclick="App.showProfiles()">← Retour</button></div>
      <div style="text-align:center;padding:20px;max-width:550px;margin:0 auto;">
        <h2>📤 Exporter tous les profils</h2>
        <p style="color:var(--muted);margin:12px 0;">Copie ce texte et envoie-le sur ton autre appareil.</p>
        <textarea id="exportText" readonly style="width:100%;height:200px;padding:12px;border:2px solid var(--border);border-radius:8px;font-size:0.8rem;font-family:monospace;resize:vertical;">${text}</textarea>
        <div style="margin-top:12px;display:flex;gap:8px;justify-content:center;">
          <button class="btn btn-primary" onclick="navigator.clipboard.writeText(document.getElementById('exportText').value).then(()=>alert('✅ Copié !')).catch(()=>{document.getElementById('exportText').select();document.execCommand('copy');alert('✅ Copié !')})">📋 Copier dans le presse-papier</button>
          <button class="btn btn-outline" onclick="App.showProfiles()">Retour</button>
        </div>
      </div>`;
  }

  function importAllData() {
    app.innerHTML = `
      <div style="margin-bottom:12px;"><button class="btn btn-outline btn-sm" onclick="App.showProfiles()">← Retour</button></div>
      <div style="text-align:center;padding:20px;max-width:550px;margin:0 auto;">
        <h2>📥 Importer des données</h2>
        <p style="color:var(--muted);margin:12px 0;">Colle ici le texte copié depuis ton autre appareil.</p>
        <textarea id="importText" placeholder="Colle le texte ici..." style="width:100%;height:200px;padding:12px;border:2px solid var(--border);border-radius:8px;font-size:0.8rem;font-family:monospace;resize:vertical;"></textarea>
        <div style="margin-top:12px;display:flex;gap:8px;justify-content:center;">
          <button class="btn btn-primary" id="doImportBtn" onclick="App.doImport()">📥 Importer</button>
          <button class="btn btn-outline" onclick="App.showProfiles()">Retour</button>
        </div>
        <p id="importMsg" style="margin-top:12px;font-size:0.85rem;"></p>
      </div>`;
  }

  function doImport() {
    const textarea = document.getElementById('importText');
    const msg = document.getElementById('importMsg');
    if (!textarea || !textarea.value.trim()) {
      if (msg) { msg.style.color = 'var(--accent)'; msg.textContent = 'Colle d\'abord le texte exporté.'; }
      return;
    }
    try {
      const data = JSON.parse(textarea.value.trim());
      let imported = 0;

      if (data.pr) {
        // Full backup
        const existingProfiles = getProfiles();
        if (data.pl) {
          data.pl.forEach(p => {
            if (!existingProfiles.includes(p)) existingProfiles.push(p);
            if (data.pr[p]) localStorage.setItem('rtb_errors_v2_' + p, JSON.stringify(data.pr[p]));
            imported++;
          });
          saveProfiles(existingProfiles);
          if (data.cp) setCurrentProfile(data.cp);
        }
      } else if (data.e && data.p) {
        // Single profile
        const existing = JSON.parse(localStorage.getItem('rtb_errors_v2_' + data.p) || '{}');
        localStorage.setItem('rtb_errors_v2_' + data.p, JSON.stringify({ ...existing, ...data.e }));
        const profiles = getProfiles();
        if (!profiles.includes(data.p)) { profiles.push(data.p); saveProfiles(profiles); }
        setCurrentProfile(data.p);
        imported = 1;
      }

      if (imported > 0) {
        if (msg) { msg.style.color = 'var(--success)'; msg.textContent = '✅ ' + imported + ' profil(s) importé(s) ! Redirection...'; }
        setTimeout(() => renderHome(), 1000);
      } else {
        if (msg) { msg.style.color = 'var(--accent)'; msg.textContent = '❌ Format non reconnu.'; }
      }
    } catch(e) {
      if (msg) { msg.style.color = 'var(--accent)'; msg.textContent = '❌ Erreur : ' + e.message; }
    }
  }

  function deleteProfileAndRefresh(name) {
    deleteProfile(name);
    if (!getCurrentProfile()) {
      renderProfileSetup();
    } else {
      showProfiles();
    }
  }

  function showHomeTab(tab) {
    const ct = document.getElementById('homeTabContent');
    if (!ct) return;
    if (tab === 'quiz') {
      ct.innerHTML = `
        <div class="home-grid">
          <div class="card special" style="border-left:4px solid var(--accent);background:linear-gradient(135deg,#fff5f5,#fff);" onclick="App.startCrashTest()"><div class="icon">⚡</div><h3>Crash Test — 25 questions</h3><p>Quiz express mélangeant Psycho, Gériatrie et Audiologie. 25 questions aléatoires, résultat à la fin.</p><small>⏱ ~10 min</small></div>
          <div class="card subject-psycho" onclick="App.startQuiz('psycho')"><div class="icon">🧠</div><h3>Psychologie — TSA</h3><p>DSM-5, sensoriel, communication, habiletés sociales, ToM, évaluation</p><small>${DATA.subjects.psycho.length} QCM</small></div>
          <div class="card subject-geronto" onclick="App.startQuiz('geronto')"><div class="icon">👴</div><h3>Gérontologie</h3><p>Vieillissement, âgisme, fragilité (Fried), syndromes gériatriques, EGM, MDT</p><small>${DATA.subjects.geronto.length} QCM</small></div>
          <div class="card subject-audio" onclick="App.startQuiz('audio')"><div class="icon">👂</div><h3>Audiologie</h3><p>Types de surdité, degrés BIAP, étiologies, syndromes, audiogramme, troubles associés</p><small>${DATA.subjects.audio.length} QCM</small></div>
        </div>`;
    } else if (tab === 'cases') {
      ct.innerHTML = `
        <div class="home-grid">
          <div class="card special" onclick="App.showClinicalCases()"><div class="icon">🔗</div><h3>Cas Interdisciplinaires</h3><p>Cas reliant Psycho, Gériatrie et Audiologie</p><small>${DATA.clinicalCases.inter.length} cas</small></div>
          <div class="card special" onclick="App.showFrailVignettes()"><div class="icon">📋</div><h3>Vignettes Fragilité</h3><p>Repérage de la fragilité (Fried) en contexte clinique</p><small>${DATA.clinicalCases.fragilite.length} vignettes</small></div>
          <div class="card special" onclick="App.showAudioReed()"><div class="icon">🎧</div><h3>Audiologie & Rééducation</h3><p>Cas cliniques avec propositions de rééducation par type de surdité</p><small>${DATA.clinicalCases.audioReed.length} cas</small></div>
          <div class="card special" onclick="App.showAllCases()"><div class="icon">📖</div><h3>Tous les cas cliniques</h3><p>Parcourir l'ensemble des ${DATA.clinicalCases.inter.length + DATA.clinicalCases.audioReed.length + DATA.clinicalCases.fragilite.length} cas</p><small>Vue complète</small></div>
        </div>`;
    } else if (tab === 'revision') {
      ct.innerHTML = `
        <div class="home-grid">
          <div class="card special" style="border-left:4px solid var(--accent);" onclick="App.showMyErrors()"><div class="icon">🔄</div><h3>Mes Erreurs <span id="errBadge" style="background:var(--accent);color:white;padding:2px 8px;border-radius:10px;font-size:0.75rem;"></span></h3><p>Révise uniquement les questions que tu as ratées — une bonne réponse la retire de la liste !</p><small>Persistant (localStorage)</small></div>
          <div class="card special" onclick="App.startVF()"><div class="icon">✅</div><h3>Vrai ou Faux</h3><p>Quiz rapide — choisis VRAI ou FAUX pour chaque affirmation</p><small>${(DATA.vraiFaux||{}).psycho ? DATA.vraiFaux.psycho.length : 0} + ${(DATA.vraiFaux||{}).geronto ? DATA.vraiFaux.geronto.length : 0} + ${(DATA.vraiFaux||{}).audio ? DATA.vraiFaux.audio.length : 0} questions</small></div>
          <div class="card special" onclick="App.showFichesMemo()"><div class="icon">📋</div><h3>Fiches Mémo</h3><p>Synthèses par thème : DSM-5, Fried, BIAP, syndromes génétiques...</p><small>${(DATA.fichesMemo||{}).psycho ? DATA.fichesMemo.psycho.length : 0} + ${(DATA.fichesMemo||{}).geronto ? DATA.fichesMemo.geronto.length : 0} + ${(DATA.fichesMemo||{}).audio ? DATA.fichesMemo.audio.length : 0} fiches</small></div>
          <div class="card special" onclick="App.showGlossaire()"><div class="icon">📖</div><h3>Glossaire & Sigles</h3><p>Définitions des termes clés + tous les sigles et acronymes développés (TSA, TDAH, BIAP, IC...)</p><small>${(DATA.glossaire||[]).length} entrées</small></div>
        </div>`;
      // Update error badge
      setTimeout(() => {
        const badge = document.getElementById('errBadge');
        if (badge) {
          const count = getErrorCount();
          badge.textContent = count > 0 ? count + ' erreur(s)' : 'Aucune';
          badge.style.display = count > 0 ? 'inline' : 'none';
        }
      }, 50);
    }
  }

  // ==================== QUIZ MODE ====================
  function startQuiz(subject) {
    state.subject = subject; state.mode = 'quiz'; state.qIndex = 0; state.answers = []; state.score = 0; state.answered = false;
    state.shuffled = shuffle([...DATA.subjects[subject]]);
    renderQuestion();
  }

  function renderQuestion() {
    if (state.qIndex >= state.shuffled.length) { renderResults(); return; }
    const q = state.shuffled[state.qIndex];
    const total = state.shuffled.length;
    const current = state.qIndex + 1;

    app.innerHTML = `
      <div style="margin-bottom:12px;">
        <button class="btn btn-outline btn-sm" onclick="App.renderHome()">← Retour</button>
        <div class="breathing" style="display:block;margin:8px 0;font-style:italic;color:var(--muted);">${randomItem(breathing)}</div>
      </div>
      <div class="quiz-header">
        <span class="badge">${subjLabels[state.subject]}</span>
        <span class="badge">${q.difficulty === 'easy' ? '⭐' : q.difficulty === 'medium' ? '⭐⭐' : '⭐⭐⭐'}</span>
        <span class="progress">Q ${current}/${total}</span>
        <span class="score">Score: ${state.score}/${state.answers.length}</span>
      </div>
      <div class="question-card">
        <div class="q-number">Q${current}</div>
        <h3>${q.question}</h3>
        <div class="options" id="optionsContainer">
          ${q.options.map((opt, i) => `
            <div class="option" data-index="${i}" onclick="App.selectAnswer(${i})">
              <span class="letter">${String.fromCharCode(65 + i)}</span>
              <span>${(opt||'').substring(3)}</span>
            </div>`).join('')}
        </div>
        <div id="feedbackArea"></div>
      </div>
      <div class="actions">
        ${state.qIndex < total - 1 ? '<button class="btn btn-primary" id="nextBtn" disabled onclick="App.nextQuestion()">Suivante →</button>' : '<button class="btn btn-success" id="nextBtn" disabled onclick="App.nextQuestion()">Voir les résultats</button>'}
      </div>`;
  }

  function selectAnswer(index) {
    if (state.answered) return;
    state.answered = true;
    const q = state.shuffled[state.qIndex];
    const isCorrect = index === q.correct;
    state.answers.push({ questionId: q.id, selected: index, correct: q.correct, isCorrect });
    if (isCorrect) state.score++;

    // Enregistrer les erreurs dans localStorage
    if (!isCorrect && state.mode === 'quiz') {
      recordError({ id: q.id, question: q.question, options: q.options, correct: q.correct, explanation: q.explanation, source: q.source, difficulty: q.difficulty }, state.subject);
    }

    document.querySelectorAll('.option').forEach((opt, i) => {
      opt.classList.add('disabled');
      if (i === q.correct) opt.classList.add('correct');
      if (i === index && !isCorrect) opt.classList.add('wrong');
    });

    const fb = document.getElementById('feedbackArea');
    if (isCorrect) {
      fb.innerHTML = '<div class="memo" style="background:#d5f5e3;border-color:#27ae60;"><strong>✓ ' + randomItem(["Bravo ! Bonne réponse !", "Exact ! Tu assures !", "Parfait ! Continue !", "Oui, c'est ça !"]) + '</strong></div>';
    } else {
      const sp = sourcePath(q.source);
      fb.innerHTML = `<div class="memo"><strong>⚠ Pas tout à fait. Bonne réponse : ${String.fromCharCode(65 + q.correct)}</strong><br><br><strong>📝 Explication :</strong> ${q.explanation}<br><br><span class="source">📂 Source : ${q.source}${sp ? ' — <em>' + sp + '</em>' : ''}</span></div>`;
    }
    const nb = document.getElementById('nextBtn'); if (nb) nb.disabled = false;
  }

  function nextQuestion() { state.qIndex++; state.answered = false; state.qIndex >= state.shuffled.length ? renderResults() : (renderQuestion(), window.scrollTo({top:0,behavior:'smooth'})); }

  function renderResults() {
    const total = state.shuffled.length; const pct = total > 0 ? Math.round((state.score / total) * 100) : 0;
    const mood = randomItem(getMood(state.score, total));
    const wrong = state.answers.filter(a => !a.isCorrect);

    let wrongHtml = '';
    if (wrong.length > 0) {
      wrongHtml = `<div style="text-align:left;margin-top:20px;"><h3 style="margin-bottom:12px;">📝 Révision des erreurs (${wrong.length})</h3>`;
      wrong.forEach((a, i) => {
        const q = state.shuffled.find(sq => sq.id === a.questionId); if (!q) return;
        const sp = sourcePath(q.source);
        wrongHtml += `<div class="accordion"><div class="accordion-header" onclick="this.nextElementSibling.classList.toggle('open')"><span>Q${i+1}. ${q.question.substring(0,80)}...</span><span style="font-size:0.8rem;">${q.difficulty==='hard'?'⭐⭐⭐':q.difficulty==='medium'?'⭐⭐':'⭐'}</span></div><div class="accordion-content"><p><strong>Ta réponse :</strong> ${String.fromCharCode(65+a.selected)} — <strong>Correcte :</strong> ${String.fromCharCode(65+q.correct)}</p><p style="margin-top:8px;">${q.explanation}</p><p style="font-size:0.8rem;color:var(--muted);margin-top:8px;font-style:italic;">📂 ${q.source}${sp?' — '+sp:''}</p></div></div>`;
      });
      wrongHtml += '</div>';
    }

    app.innerHTML = `
      <div class="results">
        <h2>${pct>=70?'🎉':pct>=50?'👍':'💪'} ${mood}</h2>
        <div class="final-score">${state.score}/${total}</div>
        <p style="font-size:1.2rem;color:var(--muted);">${pct}% de réussite</p>
        <div class="stats">
          <div class="stat"><div class="num" style="color:var(--success)">${state.score}</div><div class="label">Correctes</div></div>
          <div class="stat"><div class="num" style="color:var(--accent)">${wrong.length}</div><div class="label">Incorrectes</div></div>
          <div class="stat"><div class="num">${total}</div><div class="label">Total</div></div>
        </div>
        ${wrongHtml}
        <div class="actions" style="margin-top:24px;">
          <button class="btn btn-primary" onclick="App.startQuiz('${state.subject}')">🔄 Recommencer</button>
          <button class="btn btn-outline" onclick="App.renderHome()">🏠 Accueil</button>
        </div>
      </div>`;
  }

  // ==================== VRAI / FAUX ====================
  function startVF(subject) {
    if (!subject) {
      app.innerHTML = `<div style="margin-bottom:12px;"><button class="btn btn-outline btn-sm" onclick="App.renderHome()">← Retour</button></div><h2 style="margin:16px 0;">✅ Vrai ou Faux — Choisis ta matière</h2><div class="home-grid">
        ${['psycho','geronto','audio'].map(s => `<div class="card subject-${s}" onclick="App.startVF('${s}')"><div class="icon">${subjIcons[s]}</div><h3>${subjLabels[s]}</h3><p>Vrai/Faux rapide</p><small>${(DATA.vraiFaux||{})[s] ? DATA.vraiFaux[s].length : 0} questions</small></div>`).join('')}
      </div>`;
      return;
    }
    state.subject = subject; state.mode = 'vf'; state.qIndex = 0; state.answers = []; state.score = 0; state.answered = false;
    state.shuffled = shuffle([...(DATA.vraiFaux||{})[subject] || []]);
    renderVFQuestion();
  }

  function renderVFQuestion() {
    if (state.qIndex >= state.shuffled.length) { renderVFResults(); return; }
    const q = state.shuffled[state.qIndex];
    const total = state.shuffled.length;
    app.innerHTML = `
      <div style="margin-bottom:12px;"><button class="btn btn-outline btn-sm" onclick="App.renderHome()">← Retour</button></div>
      <div class="quiz-header"><span class="badge">${subjLabels[state.subject]} — Vrai/Faux</span><span class="progress">Q ${state.qIndex+1}/${total}</span><span class="score">Score: ${state.score}/${state.answers.length}</span></div>
      <div class="question-card">
        <h3 style="font-size:1.1rem;">${q.statement}</h3>
        <p style="color:var(--muted);font-size:0.9rem;text-align:center;margin:12px 0;">Cette affirmation est-elle vraie ou fausse ?</p>
        <div class="options">
          <div class="option" onclick="App.selectVFAnswer(true)"><span class="letter" style="background:var(--success);color:white;">V</span><span>VRAI</span></div>
          <div class="option" onclick="App.selectVFAnswer(false)"><span class="letter" style="background:var(--accent);color:white;">F</span><span>FAUX</span></div>
        </div>
        <div id="feedbackArea"></div>
      </div>
      <div class="actions">
        ${state.qIndex < total - 1 ? '<button class="btn btn-primary" id="nextBtn" disabled onclick="App.nextVFQuestion()">Suivante →</button>' : '<button class="btn btn-success" id="nextBtn" disabled onclick="App.nextVFQuestion()">Voir les résultats</button>'}
      </div>`;
  }

  function selectVFAnswer(userAnswer) {
    if (state.answered) return;
    state.answered = true;
    const q = state.shuffled[state.qIndex];
    const isCorrect = userAnswer === q.answer;
    state.answers.push({ questionId: q.id, selected: userAnswer, correct: q.answer, isCorrect });
    if (isCorrect) state.score++;

    // Enregistrer les erreurs VF dans localStorage
    if (!isCorrect && state.mode === 'vf') {
      recordError({ id: q.id, question: q.statement, options: ['VRAI', 'FAUX'], correct: q.answer ? 0 : 1, explanation: q.explanation, source: q.source, difficulty: 'easy' }, state.subject);
    }

    document.querySelectorAll('.option').forEach(opt => opt.classList.add('disabled'));
    const opts = document.querySelectorAll('.option');
    const correctIdx = q.answer ? 0 : 1;
    const selectedIdx = userAnswer ? 0 : 1;
    if (opts[correctIdx]) opts[correctIdx].classList.add('correct');
    if (!isCorrect && opts[selectedIdx]) opts[selectedIdx].classList.add('wrong');

    const fb = document.getElementById('feedbackArea');
    const sp = sourcePath(q.source);
    if (isCorrect) {
      fb.innerHTML = '<div class="memo" style="background:#d5f5e3;border-color:#27ae60;"><strong>✓ Exact !</strong></div>';
    } else {
      fb.innerHTML = `<div class="memo"><strong>⚠ ${q.answer ? 'VRAI' : 'FAUX'} !</strong> ${q.explanation}<br><span class="source">📂 ${q.source}${sp?' — '+sp:''}</span></div>`;
    }
    const nb = document.getElementById('nextBtn'); if (nb) nb.disabled = false;
  }

  function nextVFQuestion() { state.qIndex++; state.answered = false; state.qIndex >= state.shuffled.length ? renderVFResults() : (renderVFQuestion(), window.scrollTo({top:0,behavior:'smooth'})); }

  function renderVFResults() {
    const total = state.shuffled.length; const pct = total > 0 ? Math.round((state.score / total) * 100) : 0;
    const wrong = state.answers.filter(a => !a.isCorrect);
    let wrongHtml = '';
    if (wrong.length > 0) {
      wrongHtml = `<div style="text-align:left;margin-top:20px;"><h3>📝 Révision (${wrong.length})</h3>`;
      wrong.forEach((a, i) => {
        const q = state.shuffled.find(sq => sq.id === a.questionId); if (!q) return;
        const sp = sourcePath(q.source);
        wrongHtml += `<div class="accordion"><div class="accordion-header" onclick="this.nextElementSibling.classList.toggle('open')"><span>Q${i+1}. ${q.statement.substring(0,80)}...</span></div><div class="accordion-content"><p><strong>Réponse :</strong> ${q.answer ? 'VRAI' : 'FAUX'} — Tu as répondu : ${a.selected ? 'VRAI' : 'FAUX'}</p><p style="margin-top:8px;">${q.explanation}</p><p style="font-size:0.8rem;color:var(--muted);margin-top:8px;font-style:italic;">📂 ${q.source}${sp?' — '+sp:''}</p></div></div>`;
      });
      wrongHtml += '</div>';
    }
    app.innerHTML = `<div class="results"><h2>${pct>=70?'🎉':pct>=50?'👍':'💪'} ${randomItem(getMood(state.score, total))}</h2><div class="final-score">${state.score}/${total}</div><p style="font-size:1.2rem;color:var(--muted);">${pct}%</p><div class="stats"><div class="stat"><div class="num" style="color:var(--success)">${state.score}</div><div class="label">Correctes</div></div><div class="stat"><div class="num" style="color:var(--accent)">${wrong.length}</div><div class="label">Incorrectes</div></div><div class="stat"><div class="num">${total}</div><div class="label">Total</div></div></div>${wrongHtml}<div class="actions" style="margin-top:24px;"><button class="btn btn-primary" onclick="App.startVF('${state.subject}')">🔄 Recommencer</button><button class="btn btn-outline" onclick="App.renderHome()">🏠 Accueil</button></div></div>`;
  }

  // ==================== FICHES MÉMO ====================
  function showFichesMemo(subject) {
    if (!subject) {
      app.innerHTML = `<div style="margin-bottom:12px;"><button class="btn btn-outline btn-sm" onclick="App.renderHome()">← Retour</button></div><h2 style="margin:16px 0;">📋 Fiches Mémo — Choisis ta matière</h2><div class="home-grid">
        ${['psycho','geronto','audio'].map(s => `<div class="card subject-${s}" onclick="App.showFichesMemo('${s}')"><div class="icon">${subjIcons[s]}</div><h3>${subjLabels[s]}</h3><p>Fiches de synthèse</p><small>${(DATA.fichesMemo||{})[s] ? DATA.fichesMemo[s].length : 0} fiches</small></div>`).join('')}
      </div>`;
      return;
    }
    const fiches = (DATA.fichesMemo||{})[subject] || [];
    app.innerHTML = `<div style="margin-bottom:12px;"><button class="btn btn-outline btn-sm" onclick="App.showFichesMemo()">← Matières</button></div><h2 style="margin:16px 0;">📋 Fiches Mémo — ${subjLabels[subject]}</h2>`;
    fiches.forEach(f => {
      const div = document.createElement('div'); div.className = 'clinical-case';
      div.innerHTML = `<h2>${f.title}</h2><div style="white-space:pre-line;line-height:1.7;font-size:0.95rem;margin:12px 0;">${f.content||''}</div>${f.keyPoints ? '<div class="reeducation"><h3>🔑 Points clés</h3>' + f.keyPoints.map(p => '• ' + p).join('<br>') + '</div>' : ''}${f.source ? '<p style="font-size:0.8rem;color:var(--muted);margin-top:8px;font-style:italic;">📂 ' + f.source + (sourcePath(f.source)?' ('+sourcePath(f.source)+')':'') + '</p>' : ''}`;
      app.appendChild(div);
    });
  }

  // ==================== GLOSSAIRE ====================
  function showGlossaire() {
    const terms = DATA.glossaire || [];
    app.innerHTML = `<div style="margin-bottom:12px;display:flex;gap:8px;align-items:center;"><button class="btn btn-outline btn-sm" onclick="App.renderHome()">← Retour</button><input type="text" id="glossaireSearch" placeholder="🔍 Rechercher un terme..." style="flex:1;padding:8px 12px;border:2px solid var(--border);border-radius:8px;font-size:0.95rem;" oninput="App.filterGlossaire()"></div><h2 style="margin:16px 0;">📖 Glossaire (${terms.length} termes)</h2><div id="glossaireList"></div>`;
    renderGlossaireList(terms);
  }

  function renderGlossaireList(terms) {
    const list = document.getElementById('glossaireList'); if (!list) return;
    list.innerHTML = terms.map(t => `<div class="accordion"><div class="accordion-header" onclick="this.nextElementSibling.classList.toggle('open')"><span><strong>${t.term}</strong></span><span style="font-size:0.8rem;color:var(--muted);">${t.categorie||''}</span></div><div class="accordion-content"><p>${t.definition}</p>${t.source ? '<p style="font-size:0.8rem;color:var(--muted);margin-top:8px;font-style:italic;">📂 '+t.source+(sourcePath(t.source)?' ('+sourcePath(t.source)+')':'')+'</p>' : ''}</div></div>`).join('');
  }

  function filterGlossaire() {
    const q = (document.getElementById('glossaireSearch')?.value || '').toLowerCase();
    const terms = (DATA.glossaire || []).filter(t => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q));
    renderGlossaireList(terms);
  }

  // ==================== CLINICAL CASES ====================
  function showClinicalCases() {
    const cases = DATA.clinicalCases.inter;
    app.innerHTML = `<div style="margin-bottom:12px;"><button class="btn btn-outline btn-sm" onclick="App.renderHome()">← Retour</button></div><h2 style="margin:16px 0;">🔗 Cas Cliniques Interdisciplinaires (${cases.length})</h2>`;
    cases.forEach(c => renderCase(c));
  }

  function showAudioReed() {
    const cases = DATA.clinicalCases.audioReed;
    app.innerHTML = `<div style="margin-bottom:12px;"><button class="btn btn-outline btn-sm" onclick="App.renderHome()">← Retour</button></div><h2 style="margin:16px 0;">🎧 Audiologie & Rééducation (${cases.length})</h2>`;
    cases.forEach(c => renderAudioReedCase(c));
  }

  function showFrailVignettes() {
    const cases = DATA.clinicalCases.fragilite;
    app.innerHTML = `<div style="margin-bottom:12px;"><button class="btn btn-outline btn-sm" onclick="App.renderHome()">← Retour</button></div><h2 style="margin:16px 0;">📋 Vignettes Fragilité (${cases.length})</h2>`;
    cases.forEach(c => renderCase(c));
  }

  function showAllCases() {
    const all = [...DATA.clinicalCases.inter, ...DATA.clinicalCases.audioReed, ...DATA.clinicalCases.fragilite];
    app.innerHTML = `<div style="margin-bottom:12px;"><button class="btn btn-outline btn-sm" onclick="App.renderHome()">← Retour</button></div><h2 style="margin:16px 0;">📖 Tous les cas cliniques (${all.length})</h2>`;
    all.forEach(c => {
      if (c.hearingLoss) renderAudioReedCaseInt(c); else renderCase(c);
    });
  }

  function renderCase(c) {
    const div = document.createElement('div'); div.className = 'clinical-case';
    let html = `<h2>${c.title}</h2><p style="color:var(--muted);font-size:0.85rem;">${c.subject}</p>`;
    html += `<div class="case-content"><p><strong>Patient :</strong> ${c.patient ? (c.patient.description || c.patient.age + ', ' + c.patient.sexe) : ''}</p><p>${c.anamnese||''}</p></div>`;
    html = addCaseQuestions(html, c);
    if (c.analysis) html += `<div class="case-analysis" style="margin-top:12px;"><h3>🔍 Analyse</h3><p>${c.analysis}</p></div>`;
    if (c.reeducation) html += buildReeducationHtml(c.reeducation);
    if (c.sources) html += buildSourcesHtml(c.sources);
    div.innerHTML = html; app.appendChild(div);
  }

  function renderAudioReedCase(c) {
    const div = document.createElement('div'); div.className = 'clinical-case';
    let html = `<h2>${c.title}</h2><p style="color:var(--muted);font-size:0.85rem;">Audiologie clinique</p>`;
    if (c.hearingLoss) html += `<div class="case-content"><p><strong>Type de surdité :</strong> ${c.hearingLoss.type||''} | <strong>Degré :</strong> ${c.hearingLoss.degree||''}${c.hearingLoss.averageLoss ? ' | <strong>Perte moyenne :</strong> '+c.hearingLoss.averageLoss : ''}${c.hearingLoss.ear ? ' | <strong>Oreille :</strong> '+c.hearingLoss.ear : ''}</p>`;
    if (c.anamnese) html += `<p>${c.anamnese}</p></div>`;
    html = addCaseQuestions(html, c);
    if (c.analysis) html += `<div class="case-analysis" style="margin-top:12px;"><h3>🔍 Analyse</h3><p>${c.analysis}</p></div>`;
    if (c.reeducation) html += buildReeducationHtml(c.reeducation);
    if (c.sources) html += buildSourcesHtml(c.sources);
    div.innerHTML = html; app.appendChild(div);
  }

  function renderAudioReedCaseInt(c) { renderAudioReedCase(c); }

  function addCaseQuestions(html, c) {
    if (!c.questions) return html;
    html += '<div class="case-analysis"><h3>📋 Questions d\'analyse</h3>';
    c.questions.forEach((q, qi) => {
      const qId = `${c.id}_q${qi}`;
      html += `<div style="margin-top:12px;"><p><strong>${qi+1}. ${q.question}</strong></p><div class="options" style="margin-top:6px;">`;
      q.options.forEach((opt, oi) => {
        html += `<div class="option" onclick="App.toggleCaseAnswer('${qId}',${oi},${q.correct},this)"><span class="letter">${String.fromCharCode(65+oi)}</span><span>${(opt||'').substring(3)}</span></div>`;
      });
      html += `<div id="feedback_${qId}" style="margin-top:8px;"></div></div>`;
    });
    html += '</div>';
    return html;
  }

  function buildReeducationHtml(r) {
    let h = '<div class="reeducation"><h3>🎯 Proposition de rééducation</h3>';
    if (r.goals) h += '<p><strong>Objectifs :</strong><br>' + (Array.isArray(r.goals) ? r.goals.map(g=>'• '+g).join('<br>') : r.goals) + '</p>';
    if (r.methods) h += '<p style="margin-top:8px;"><strong>Méthodes :</strong><br>' + (Array.isArray(r.methods) ? r.methods.map(m=>'• '+m).join('<br>') : r.methods) + '</p>';
    if (r.adaptations) h += '<p style="margin-top:8px;"><strong>Adaptations :</strong><br>' + (Array.isArray(r.adaptations) ? r.adaptations.map(a=>'• '+a).join('<br>') : r.adaptations) + '</p>';
    h += '</div>'; return h;
  }

  function buildSourcesHtml(sources) {
    return `<div style="margin-top:8px;font-size:0.8rem;color:var(--muted);">📂 Sources : ${sources.map(s=>s+(sourcePath(s)?' ('+sourcePath(s)+')':'')).join(' ; ')}</div>`;
  }

  function toggleCaseAnswer(qId, selected, correct, el) {
    const container = el.parentElement;
    if (container.classList.contains('disabled-answers')) return;
    container.classList.add('disabled-answers');
    container.querySelectorAll('.option').forEach((opt, i) => {
      opt.style.pointerEvents = 'none';
      if (i === correct) opt.classList.add('correct');
      if (i === selected && i !== correct) opt.classList.add('wrong');
    });
    const fb = document.getElementById('feedback_' + qId); if (!fb) return;
    if (selected === correct) {
      fb.innerHTML = '<div class="memo" style="background:#d5f5e3;border-color:#27ae60;"><strong>✓ Correct !</strong></div>';
    } else {
      const qObj = findCaseQuestion(qId);
      const sp = qObj ? sourcePath(qObj.source) : '';
      fb.innerHTML = `<div class="memo"><strong>⚠ Réponse correcte : ${String.fromCharCode(65+correct)}</strong><br>${qObj?qObj.explanation:''}${sp?'<br><span class="source">📂 '+(qObj.source||'')+' — '+sp+'</span>':''}</div>`;
    }
  }

  function findCaseQuestion(qId) {
    for (const key of ['inter','audioReed','fragilite']) {
      for (const c of DATA.clinicalCases[key]) {
        if (c.questions) for (let qi=0; qi<c.questions.length; qi++) if (qId===`${c.id}_q${qi}`) return c.questions[qi];
      }
    }
    return null;
  }

  // ==================== MES ERREURS (révision persistante) ====================
  function showMyErrors() {
    const all = getAllErrors();
    if (all.length === 0) {
      app.innerHTML = `<div style="margin-bottom:12px;"><button class="btn btn-outline btn-sm" onclick="App.renderHome()">← Retour</button></div><div style="text-align:center;padding:40px;"><h2>🎉 Aucune erreur enregistrée !</h2><p style="color:var(--muted);margin-top:8px;">Continue tes QCMs, les erreurs s'enregistreront automatiquement.</p></div>`;
      return;
    }
    // Group by subject
    const bySubj = {};
    for (const e of all) {
      if (!bySubj[e.subject]) bySubj[e.subject] = [];
      bySubj[e.subject].push(e);
    }
    app.innerHTML = `<div style="margin-bottom:12px;"><button class="btn btn-outline btn-sm" onclick="App.renderHome()">← Retour</button></div><h2 style="margin:16px 0;">🔄 Mes Erreurs (${all.length})</h2><p style="color:var(--muted);margin-bottom:16px;">Clique sur une matière pour refaire uniquement les questions où tu t'es trompé(e). Une bonne réponse la retire de la liste.</p>`;
    for (const [subj, errs] of Object.entries(bySubj)) {
      const label = subjLabels[subj] || subj;
      const icon = subjIcons[subj] || '📝';
      const div = document.createElement('div');
      div.className = 'card special';
      div.style.marginBottom = '12px';
      div.innerHTML = `<div class="icon">${icon}</div><h3>${label}</h3><p>${errs.length} question(s) à revoir</p><small>Cliquer pour réviser</small>`;
      div.onclick = () => retryErrors(subj);
      app.appendChild(div);
    }
    // Add reset button
    const resetDiv = document.createElement('div');
    resetDiv.style.cssText = 'text-align:center;margin-top:20px;';
    resetDiv.innerHTML = '<button class="btn btn-outline btn-sm" onclick="if(confirm(\'Supprimer toutes les erreurs enregistrées ?\')){localStorage.removeItem(\''+ERRORS_KEY+'\');App.showMyErrors();}">🗑️ Réinitialiser toutes les erreurs</button>';
    app.appendChild(resetDiv);
  }

  function retryErrors(subject) {
    const errs = getErrorsForSubject(subject);
    if (errs.length === 0) {
      showMyErrors();
      return;
    }
    state.subject = subject;
    state.mode = 'retry';
    state.qIndex = 0;
    state.answers = [];
    state.score = 0;
    state.answered = false;
    state.shuffled = shuffle(errs);
    state.retryTotal = errs.length;
    renderRetryQuestion();
  }

  function renderRetryQuestion() {
    if (state.qIndex >= state.shuffled.length) {
      renderRetryResults();
      return;
    }
    const q = state.shuffled[state.qIndex];
    const total = state.shuffled.length;
    const current = state.qIndex + 1;

    app.innerHTML = `
      <div style="margin-bottom:12px;">
        <button class="btn btn-outline btn-sm" onclick="App.showMyErrors()">← Retour aux erreurs</button>
        <div class="breathing" style="display:block;margin:8px 0;font-style:italic;color:var(--muted);">${randomItem(breathing)}</div>
      </div>
      <div class="quiz-header">
        <span class="badge">🔄 Rattrapage — ${subjLabels[state.subject]}</span>
        <span class="progress">Q ${current}/${total}</span>
        <span class="score">Corrigées: ${state.score}/${state.answers.length}</span>
        <span class="badge" style="background:var(--accent);">❌ ${state.retryTotal - current} restantes</span>
      </div>
      <div class="question-card">
        <div class="q-number">Q${current} — déjà ${q.wrongCount || 1} erreur(s)</div>
        <h3>${q.question}</h3>
        <div class="options" id="optionsContainer">
          ${q.options.map((opt, i) => `
            <div class="option" data-index="${i}" onclick="App.selectRetryAnswer(${i})">
              <span class="letter">${String.fromCharCode(65 + i)}</span>
              <span>${(opt||'').substring ? (opt||'').substring(3) : (opt||'')}</span>
            </div>`).join('')}
        </div>
        <div id="feedbackArea"></div>
      </div>
      <div class="actions">
        ${state.qIndex < total - 1 ? '<button class="btn btn-primary" id="nextBtn" disabled onclick="App.nextRetryQuestion()">Suivante →</button>' : '<button class="btn btn-success" id="nextBtn" disabled onclick="App.nextRetryQuestion()">Terminer</button>'}
        <button class="btn btn-outline btn-sm" id="skipBtn" onclick="App.skipRetryQuestion()" style="margin-left:8px;">Passer ⏭</button>
      </div>`;
  }

  function selectRetryAnswer(index) {
    if (state.answered) return;
    state.answered = true;
    const q = state.shuffled[state.qIndex];
    const isCorrect = index === q.correct;

    state.answers.push({ questionId: q.id, selected: index, correct: q.correct, isCorrect });

    document.querySelectorAll('.option').forEach((opt, i) => {
      opt.classList.add('disabled');
      if (i === q.correct) opt.classList.add('correct');
      if (i === index && !isCorrect) opt.classList.add('wrong');
    });

    const fb = document.getElementById('feedbackArea');
    if (isCorrect) {
      state.score++;
      q.correctStreak = (q.correctStreak || 0) + 1;
      const removed = recordCorrect(state.subject, q.id);
      const need = 7;
      const streak = q.correctStreak;
      if (removed || streak >= need) {
        fb.innerHTML = `<div class="memo" style="background:#d5f5e3;border-color:#27ae60;"><strong>✓ Bravo ! ${need}/${need} bonnes réponses — erreur définitivement corrigée et retirée ! 🎉</strong></div>`;
      } else {
        fb.innerHTML = `<div class="memo" style="background:#d5f5e3;border-color:#27ae60;"><strong>✓ Correct !</strong> Progression : <strong>${streak}/${need}</strong> bonnes réponses. Encore <strong>${need - streak}</strong> avant de valider définitivement.<br><div style="background:#ddd;border-radius:4px;height:8px;margin-top:8px;"><div style="background:var(--success);height:100%;border-radius:4px;width:${Math.round(streak/need*100)}%;transition:width 0.3s;"></div></div></div>`;
      }
    } else {
      const prevStreak = q.correctStreak || 0;
      q.correctStreak = 0;
      recordError({ id: q.id, question: q.question, options: q.options, correct: q.correct, explanation: q.explanation, source: q.source, difficulty: q.difficulty }, state.subject);
      const sp = sourcePath(q.source);
      fb.innerHTML = `<div class="memo"><strong>⚠ Encore raté. Bonne réponse : ${String.fromCharCode(65 + q.correct)}</strong><br><br><strong>📝 Rappel :</strong> ${q.explanation}<br><br><span class="source">📂 ${q.source}${sp ? ' — <em>' + sp + '</em>' : ''}</span><br><br><em>${prevStreak > 0 ? 'Tu avais ' + prevStreak + '/7 bonnes réponses, le compteur est remis à zéro. 🔄' : 'Cette question reste dans ta liste d\'erreurs.'}</em></div>`;
    }
    const nb = document.getElementById('nextBtn'); if (nb) { nb.disabled = false; nb.focus(); }
  }

  function skipRetryQuestion() {
    // Keep in errors, move to next
    state.qIndex++;
    state.answered = false;
    if (state.qIndex >= state.shuffled.length) {
      renderRetryResults();
    } else {
      renderRetryQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function nextRetryQuestion() {
    state.qIndex++;
    state.answered = false;
    if (state.qIndex >= state.shuffled.length) {
      renderRetryResults();
    } else {
      renderRetryQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function renderRetryResults() {
    const total = state.retryTotal;
    const remaining = getErrorsForSubject(state.subject).length;
    app.innerHTML = `
      <div class="results">
        <h2>${remaining === 0 ? '🎉 Félicitations !' : '💪 Continue !'}</h2>
        <div class="final-score">${state.score}/${total} corrigées</div>
        <p style="font-size:1.2rem;color:var(--muted);">${remaining === 0 ? 'Toutes les erreurs de cette matière sont résolues !' : 'Encore ' + remaining + ' erreur(s) à corriger.'}</p>
        <div class="stats">
          <div class="stat"><div class="num" style="color:var(--success)">${state.score}</div><div class="label">Corrigées ✓</div></div>
          <div class="stat"><div class="num" style="color:var(--accent)">${remaining}</div><div class="label">Restantes ❌</div></div>
          <div class="stat"><div class="num">${total}</div><div class="label">Total</div></div>
        </div>
        <div class="actions" style="margin-top:24px;">
          ${remaining > 0 ? '<button class="btn btn-primary" onclick="App.retryErrors(\''+state.subject+'\')">🔄 Continuer le rattrapage</button>' : ''}
          <button class="btn btn-outline" onclick="App.showMyErrors()">📋 Voir mes erreurs</button>
          <button class="btn btn-outline" onclick="App.renderHome()">🏠 Accueil</button>
        </div>
      </div>`;
  }

  // ==================== GLOSSAIRE LATÉRAL (panneau coulissant) ====================
  function toggleGlossary() {
    const panel = document.getElementById('glossaryPanel');
    const overlay = document.getElementById('glossaryOverlay');
    if (!panel || !overlay) return;
    const isOpen = panel.classList.contains('open');
    if (isOpen) {
      panel.classList.remove('open');
      overlay.classList.remove('open');
    } else {
      panel.classList.add('open');
      overlay.classList.add('open');
      renderGlossaryPanelList();
    }
  }

  function renderGlossaryPanelList() {
    const list = document.getElementById('glossaryPanelList');
    if (!list) return;
    const searchVal = (document.getElementById('glossaryPanelSearch')?.value || '').toLowerCase();
    let terms = DATA.glossaire || [];
    if (searchVal) {
      terms = terms.filter(t => (t.term||'').toLowerCase().includes(searchVal) || (t.definition||'').toLowerCase().includes(searchVal));
    } else {
      terms = terms.sort((a,b) => (a.term||'').localeCompare(b.term||''));
    }
    if (terms.length === 0) {
      list.innerHTML = '<p style="color:var(--muted);text-align:center;padding:20px;">Aucun résultat.</p>';
    } else {
      list.innerHTML = terms.map(t => {
        const catTag = t.categorie ? '<span class="cat">[' + t.categorie + ']</span>' : '';
        return '<div class="item"><div class="term">' + catTag + ' ' + (t.term||'') + '</div><div class="def">' + (t.definition||'') + '</div></div>';
      }).join('');
    }
  }

  function filterGlossaryPanel() { renderGlossaryPanelList(); }

  // Raccourci clavier Alt+G pour ouvrir le glossaire, Échap pour fermer
  document.addEventListener('keydown', function(e) {
    if (e.altKey && e.key === 'g') { e.preventDefault(); toggleGlossary(); }
    if (e.key === 'Escape') {
      const panel = document.getElementById('glossaryPanel');
      if (panel && panel.classList.contains('open')) {
        panel.classList.remove('open');
        document.getElementById('glossaryOverlay')?.classList.remove('open');
      }
    }
  });

  // ==================== CRASH TEST (25 questions aléatoires tous sujets) ====================
  function startCrashTest() {
    const allQuestions = [...DATA.subjects.psycho, ...DATA.subjects.geronto, ...DATA.subjects.audio];
    const picked = shuffle(allQuestions).slice(0, 25);
    state.subject = 'crash';
    state.mode = 'quiz';
    state.qIndex = 0;
    state.answers = [];
    state.score = 0;
    state.answered = false;
    state.shuffled = picked;
    renderCrashQuestion();
  }

  function renderCrashQuestion() {
    if (state.qIndex >= state.shuffled.length) { renderCrashResults(); return; }
    const q = state.shuffled[state.qIndex];
    const total = state.shuffled.length;
    const current = state.qIndex + 1;

    app.innerHTML = `
      <div style="margin-bottom:12px;">
        <button class="btn btn-outline btn-sm" onclick="App.renderHome()">← Retour</button>
        <div class="breathing" style="display:block;margin:8px 0;font-style:italic;color:var(--muted);">${randomItem(breathing)}</div>
      </div>
      <div class="quiz-header">
        <span class="badge">⚡ Crash Test</span>
        <span class="progress">Q ${current}/${total}</span>
      </div>
      <div class="question-card">
        <div class="q-number">Q${current}</div>
        <h3>${q.question}</h3>
        <div class="options" id="optionsContainer">
          ${q.options.map((opt, i) => `
            <div class="option" data-index="${i}" onclick="App.selectCrashAnswer(${i})">
              <span class="letter">${String.fromCharCode(65 + i)}</span>
              <span>${(opt||'').substring(3)}</span>
            </div>`).join('')}
        </div>
        <div id="feedbackArea" style="display:none;"></div>
      </div>
      <div class="actions" style="justify-content:center;">
        <span style="color:var(--muted);font-size:0.85rem;">Clique sur ta réponse pour passer à la question suivante</span>
      </div>`;
  }

  function selectCrashAnswer(index) {
    if (state.answered) return;
    state.answered = true;
    const q = state.shuffled[state.qIndex];
    const isCorrect = index === q.correct;
    state.answers.push({ questionId: q.id, selected: index, correct: q.correct, isCorrect });
    if (isCorrect) state.score++;
    if (!isCorrect) {
      let qSubject = 'psycho';
      if (DATA.subjects.geronto.some(gq => gq.id === q.id)) qSubject = 'geronto';
      else if (DATA.subjects.audio.some(aq => aq.id === q.id)) qSubject = 'audio';
      recordError({ id: q.id, question: q.question, options: q.options, correct: q.correct, explanation: q.explanation, source: q.source, difficulty: q.difficulty }, qSubject);
    }
    // Pas de feedback immédiat, juste passer à la suivante après un court délai
    document.querySelectorAll('.option').forEach((opt, i) => {
      opt.classList.add('disabled');
      if (i === index) opt.classList.add('selected');
    });
    setTimeout(() => nextCrashQuestion(), 400);
  }

  function nextCrashQuestion() {
    state.qIndex++; state.answered = false;
    state.qIndex >= state.shuffled.length ? renderCrashResults() : (renderCrashQuestion(), window.scrollTo({top:0,behavior:'smooth'}));
  }

  function renderCrashResults() {
    const total = state.shuffled.length;
    const pct = total > 0 ? Math.round((state.score / total) * 100) : 0;
    const mood = randomItem(getMood(state.score, total));
    const wrong = state.answers.filter(a => !a.isCorrect);
    let wrongHtml = '';
    if (wrong.length > 0) {
      wrongHtml = `<div style="text-align:left;margin-top:20px;"><h3 style="margin-bottom:12px;">📝 Révision des erreurs (${wrong.length})</h3>`;
      wrong.forEach((a, i) => {
        const q = state.shuffled.find(sq => sq.id === a.questionId); if (!q) return;
        const sp = sourcePath(q.source);
        wrongHtml += `<div class="accordion"><div class="accordion-header" onclick="this.nextElementSibling.classList.toggle('open')"><span>Q${i+1}. ${q.question.substring(0,80)}...</span></div><div class="accordion-content"><p><strong>Ta réponse :</strong> ${String.fromCharCode(65+a.selected)} — <strong>Correcte :</strong> ${String.fromCharCode(65+q.correct)}</p><p style="margin-top:8px;">${q.explanation}</p><p style="font-size:0.8rem;color:var(--muted);margin-top:8px;font-style:italic;">📂 ${q.source}${sp?' — '+sp:''}</p></div></div>`;
      });
      wrongHtml += '</div>';
    }
    app.innerHTML = `
      <div class="results">
        <h2>⚡ ${pct>=70?'🎉':pct>=50?'👍':'💪'} ${mood}</h2>
        <div class="final-score">${state.score}/${total}</div>
        <p style="font-size:1.2rem;color:var(--muted);">${pct}% de réussite</p>
        <div class="stats">
          <div class="stat"><div class="num" style="color:var(--success)">${state.score}</div><div class="label">Correctes</div></div>
          <div class="stat"><div class="num" style="color:var(--accent)">${wrong.length}</div><div class="label">Incorrectes</div></div>
          <div class="stat"><div class="num">${total}</div><div class="label">Total</div></div>
        </div>
        ${wrongHtml}
        <div class="actions" style="margin-top:24px;">
          <button class="btn btn-primary" onclick="App.startCrashTest()">🔄 Nouveau Crash Test</button>
          <button class="btn btn-outline" onclick="App.renderHome()">🏠 Accueil</button>
        </div>
      </div>`;
  }

  window.App = { renderHome, showHomeTab, startQuiz, selectAnswer, nextQuestion, startVF, selectVFAnswer, nextVFQuestion, showFichesMemo, showGlossaire, filterGlossaire, showClinicalCases, showFrailVignettes, showAudioReed, showAllCases, toggleCaseAnswer, showMyErrors, retryErrors, selectRetryAnswer, skipRetryQuestion, nextRetryQuestion, createNewProfile, selectProfile, showProfiles, deleteProfileAndRefresh, exportProfileData, exportAllData, importAllData, doImport, toggleGlossary, filterGlossaryPanel, startCrashTest, selectCrashAnswer, nextCrashQuestion };
  renderHome();
})();
