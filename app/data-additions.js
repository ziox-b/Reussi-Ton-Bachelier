// === ADDITIONS AU FICHIER data.js - UE320 Interdisciplinarité ===
// Ces données complètent window.APP_DATA sans écraser les entrées existantes.
(function() {
  const A = window.APP_DATA;
  if (!A) return;

  // ==================== 1. QCMs ADDITIONNELS ====================

  // --- PSYCHOLOGIE (psycho_26 à psycho_37) ---
  A.subjects.psycho.push(
    {
      id: "psycho_26",
      question: "Quelle distinction existe-t-il entre la Théorie de l'Esprit de 1er ordre et de 2nd ordre ?",
      options: [
        "A. La ToM de 1er ordre concerne l'inférence des états affectifs ; la ToM de 2nd ordre concerne l'inférence des intentions communicatives",
        "B. La ToM de 1er ordre est la capacité d'attribuer des états mentaux à autrui ; la ToM de 2nd ordre est la capacité d'inférer ce qu'une personne pense qu'une autre personne pense",
        "C. La ToM de 1er ordre émerge à 3 ans et la ToM de 2nd ordre à 5 ans",
        "D. La ToM de 1er ordre est déficitaire dans le TSA mais la ToM de 2nd ordre y est préservée"
      ],
      correct: 1,
      explanation: "La Théorie de l'Esprit de 1er ordre est la capacité d'attribuer des états mentaux (croyances, désirs, intentions) à autrui (ex. « Je pense que X... »). La ToM de 2nd ordre est la capacité d'inférer ce qu'une personne pense qu'une autre personne pense (ex. « Je pense que A pense que B... »). Dans le TSA, ces deux niveaux sont déficitaires, bien que la ToM de 2nd ordre soit plus complexe.",
      source: "TSA Partie 2 - Communication & Habiletés sociales",
      difficulty: "hard"
    },
    {
      id: "psycho_27",
      question: "Le Profil Sensoriel de Dunn (Dunn Sensory Profile) évalue :",
      options: [
        "A. La sensibilité auditive et tactile des enfants avec TSA",
        "B. Les réponses comportementales aux stimuli sensoriels dans la vie quotidienne en identifiant les patterns d'hyper- et d'hyporéactivité",
        "C. Le développement psychomoteur des enfants présentant des particularités sensorielles",
        "D. La discrimination auditive fréquentielle en cabine insonorisée"
      ],
      correct: 1,
      explanation: "Le Profil Sensoriel de Dunn est un outil standardisé qui évalue les réponses comportementales aux stimuli sensoriels dans la vie quotidienne. Il identifie les patterns d'hyperréactivité (défense sensorielle) et d'hyporéactivité (recherche sensorielle) à travers les 7 systèmes sensoriels, permettant une intervention individualisée. Il ne se limite pas à l'audition (A, D) et n'évalue pas le niveau intellectuel (C).",
      source: "TSA Partie 1",
      difficulty: "medium"
    },
    {
      id: "psycho_28",
      question: "Quelle différence fondamentale existe-t-il entre l'ABLLS-R et le VB-MAPP dans l'évaluation du TSA ?",
      options: [
        "A. L'ABLLS-R évalue le langage réceptif et le jeu ; le VB-MAPP évalue le langage expressif et la cognition",
        "B. L'ABLLS-R couvre 25 domaines de compétences (langage, social, autonomie, moteur, académique) tandis que le VB-MAPP se concentre sur les compétences verbales selon l'analyse de Skinner (mand, tact, intraverbal)",
        "C. L'ABLLS-R est destiné aux adolescents et adultes ; le VB-MAPP aux enfants de moins de 3 ans",
        "D. Ces deux outils évaluent les mêmes domaines mais selon des modalités différentes"
      ],
      correct: 1,
      explanation: "L'ABLLS-R (Assessment of Basic Language and Learning Skills - Revised) couvre 25 domaines incluant langage, social, autonomie, motricité et académique, offrant une vision large des compétences. Le VB-MAPP (Verbal Behavior Milestones Assessment and Placement Program) se concentre sur les compétences verbales selon l'approche de Skinner (mand, tact, intraverbal, etc.). Les deux sont complémentaires.",
      source: "TSA Partie 2 - Communication & Habiletés sociales",
      difficulty: "hard"
    },
    {
      id: "psycho_29",
      question: "L'ECSP (Évaluation de la Communication Sociale Précoce) est un outil qui évalue spécifiquement :",
      options: [
        "A. Les compétences de communication précoce chez les enfants de 3 à 30 mois, en distinguant les fonctions pragmatiques (régulation, interaction sociale, attention conjointe)",
        "B. Les compétences communicatives non verbales chez les enfants de 4 à 10 ans",
        "C. La coordination sensori-motrice et les réflexes archaïques chez le nourrisson",
        "D. Les troubles de l'oralité alimentaire chez l'enfant de 2 à 6 ans"
      ],
      correct: 0,
      explanation: "L'ECSP (Évaluation de la Communication Sociale Précoce) évalue les compétences de communication précoce chez les enfants de 3 à 30 mois. Elle distingue trois fonctions pragmatiques majeures : la régulation du comportement, l'interaction sociale et l'attention conjointe, essentielles dans l'évaluation précoce du TSA.",
      source: "TSA Partie 2 - Communication & Habiletés sociales",
      difficulty: "hard"
    },
    {
      id: "psycho_30",
      question: "Quelle particularité relative à la Théorie de l'Esprit est observée dans le syndrome de Williams/Beuren et la trisomie 21 ?",
      options: [
        "A. La ToM est déficitaire dans le syndrome de Williams mais préservée dans la trisomie 21",
        "B. La ToM est préservée dans ces deux syndromes malgré la déficience intellectuelle, contrairement au TSA où la ToM est déficitaire",
        "C. La ToM est comparable à celle du TSA dans ces deux syndromes",
        "D. La ToM n'a été explorée que dans le cadre de l'autisme, pas dans ces syndromes"
      ],
      correct: 1,
      explanation: "Dans le syndrome de Williams/Beuren et la trisomie 21, la Théorie de l'Esprit est relativement préservée malgré la déficience intellectuelle, ce qui constitue un contraste important avec le TSA où la ToM est spécifiquement déficitaire. Cela suggère une dissociation entre l'intelligence générale et les compétences en ToM.",
      source: "TSA Partie 2 - Communication & Habiletés sociales",
      difficulty: "hard"
    },
    {
      id: "psycho_31",
      question: "Selon Simms & Jin (2015), quelle caractéristique N'EST PAS présente dans le Trouble de la Communication Sociale (Pragmatique) ?",
      options: [
        "A. Une recherche active d'interactions sociales",
        "B. Des difficultés interactionnelles non expliquées par des déficits langagiers structurels",
        "C. Des comportements restreints et répétitifs",
        "D. Des capacités d'imitation et de jeu symbolique intactes"
      ],
      correct: 2,
      explanation: "Selon Simms & Jin (2015), le trouble de la communication sociale (pragmatique) est caractérisé par un intérêt social fort (A), des interactions inappropriées mais non dues à des déficits langagiers de base (B), une imitation et un faire-semblant préservés (D). En revanche, il n'y a PAS de comportements restreints et répétitifs (C) — c'est précisément ce qui le différencie du TSA.",
      source: "Autism, Language Disorder, and Social (Pragmatic) Communication Disorder (Simms & Jin, 2015)",
      difficulty: "hard"
    },
    {
      id: "psycho_32",
      question: "Parmi les propositions suivantes concernant la gestion émotionnelle dans le TSA, laquelle est EXACTE ?",
      options: [
        "A. Les personnes avec TSA présentent une alexithymie dans plus de 80% des cas",
        "B. Les difficultés de gestion émotionnelle sont liées aux déficits de la Théorie de l'Esprit, aux particularités sensorielles et aux troubles de la communication, nécessitant un accompagnement spécifique",
        "C. La gestion émotionnelle est préservée dans les TSA de niveau 1 selon le DSM-5",
        "D. Les émotions positives sont mieux gérées que les émotions négatives dans le TSA"
      ],
      correct: 1,
      explanation: "Les difficultés de gestion émotionnelle dans le TSA sont plurifactorielles : elles résultent des déficits de la Théorie de l'Esprit (difficulté à comprendre ses propres émotions et celles d'autrui), des particularités sensorielles (hyperréactivité générant stress et anxiété), et des troubles de la communication (incapacité à exprimer verbalement ce qui est ressenti). Un accompagnement spécifique est nécessaire.",
      source: "TSA Partie 1 & TSA Partie 2 - Communication & Habiletés sociales",
      difficulty: "medium"
    },
    {
      id: "psycho_33",
      question: "Selon l'ASHA (2016), quelles sont les trois dimensions majeures de la pragmatique ?",
      options: [
        "A. La sémantique, la morphosyntaxe et la phonologie",
        "B. L'usage du langage à des fins sociales, l'adaptation du langage au contexte/interlocuteur, et le respect des règles conversationnelles",
        "C. La mémoire de travail, les fonctions exécutives et la planification",
        "D. Le décodage grapho-phonologique, la compréhension écrite et la production narrative"
      ],
      correct: 1,
      explanation: "Selon l'ASHA (2016), les trois dimensions majeures de la pragmatique sont : (1) l'usage du langage à des fins sociales (saluer, demander, informer, refuser), (2) l'adaptation du langage au contexte et à l'interlocuteur (registre, formalité, ajustements selon l'âge/le statut), et (3) le respect des règles conversationnelles (tours de parole, maintien du thème, réparation des bris de communication).",
      source: "TSA Partie 2 - Communication & Habiletés sociales",
      difficulty: "medium"
    },
    {
      id: "psycho_34",
      question: "Selon Bullinger, les troubles alimentaires dans le TSA impliquent une désorganisation de la sphère orale. Quelle intervention logopédique est recommandée ?",
      options: [
        "A. Une approche médicamenteuse combinée à une prise en charge diététique",
        "B. Un travail axé sur le plaisir du goût, la décontraction de la sphère orale, l'exploration sensorielle des aliments, en groupe si possible",
        "C. L'exclusion progressive des aliments provoquant des réactions sensorielles aversives",
        "D. Une alimentation mixée avec introduction graduelle des textures solides"
      ],
      correct: 1,
      explanation: "Selon le cours, l'intervention logopédique pour les troubles alimentaires dans le TSA vise le plaisir du goût, la décontraction de la sphère orale, l'exploration sensorielle progressive des aliments et le travail en groupe. Il ne s'agit pas d'une approche médicamenteuse exclusive (A), ni d'exclusion des aliments refusés (C), ni de limitation au liquide (D). L'objectif est l'élargissement du répertoire alimentaire.",
      source: "TSA Partie 1",
      difficulty: "medium"
    },
    {
      id: "psycho_35",
      question: "Quelle donnée épidémiologique relative à la concordance entre jumeaux soutient la composante génétique du TSA ?",
      options: [
        "A. La concordance chez les jumeaux monozygotes est d'environ 30% et chez les dizygotes d'environ 10%",
        "B. La concordance est significativement plus élevée chez les jumeaux monozygotes (60-90%) que chez les jumeaux dizygotes (0-30%)",
        "C. Les études de concordance gémellaire ont été réalisées mais leurs résultats sont contradictoires",
        "D. La concordance est proche de 80% chez les jumeaux dizygotes et monozygotes"
      ],
      correct: 1,
      explanation: "Les études de concordance chez les jumeaux montrent un taux nettement plus élevé chez les monozygotes (60-90%) par rapport aux dizygotes (0-30%), ce qui constitue un argument fort en faveur d'une composante génétique. Cependant, la concordance n'étant pas de 100% chez les monozygotes, cela confirme l'implication de facteurs environnementaux dans le modèle intégratif.",
      source: "TSA Partie 1",
      difficulty: "medium"
    },
    {
      id: "psycho_36",
      question: "Quel élément permet de différencier un TSA d'un TDAH selon le cours ?",
      options: [
        "A. Les deux troubles partagent les mêmes critères diagnostiques mais diffèrent par l'âge d'apparition",
        "B. Le TSA se caractérise par des déficits persistants de la communication sociale et des comportements restreints/répétitifs, tandis que le TDAH se caractérise par un pattern d'inattention et/ou d'hyperactivité-impulsivité",
        "C. Le TDAH inclut dans certains sous-types des stéréotypies motrices et des intérêts restreints",
        "D. Le TSA implique des troubles attentionnels dans les formes avec déficit intellectuel associé"
      ],
      correct: 1,
      explanation: "Le TSA se distingue du TDAH par la présence de déficits persistants de la communication sociale (critère A du DSM-5) et de comportements restreints/répétitifs (critère B). Le TDAH se définit par un pattern prédominant d'inattention et/ou d'hyperactivité-impulsivité. Ces deux troubles peuvent être comorbides, mais leurs critères diagnostiques sont distincts.",
      source: "TSA Partie 1",
      difficulty: "medium"
    },
    {
      id: "psycho_37",
      question: "Parmi les signes précoces du TSA entre 12 et 24/30 mois, lequel est le plus caractéristique ?",
      options: [
        "A. Une hyperlexie avec compréhension préservée",
        "B. L'absence de jeu symbolique, l'absence de pointage déclaratif, et l'écholalie",
        "C. Une préférence pour l'interaction avec les adultes plutôt qu'avec les pairs",
        "D. Un retard de la motricité globale avec hypotonie axiale"
      ],
      correct: 1,
      explanation: "Entre 12 et 24/30 mois, les signes précoces caractéristiques du TSA incluent : l'absence de jeu symbolique (faire semblant), l'absence de pointage déclaratif (montrer pour partager l'intérêt), l'écholalie (immédiate ou différée), ainsi que le retard de langage et l'absence d'attention conjointe. La socialisation excessive (C) est contraire au tableau clinique du TSA.",
      source: "TSA Partie 1",
      difficulty: "medium"
    }
  );

  // --- GÉRONTOLOGIE (geronto_26 à geronto_37) ---
  A.subjects.geronto.push(
    {
      id: "geronto_26",
      question: "L'échelle de Katz (ADL) évalue 6 activités de base de la vie quotidienne. Laquelle des propositions suivantes en fait partie ?",
      options: [
        "A. La capacité à préparer ses repas",
        "B. La capacité à utiliser le téléphone",
        "C. La capacité à se laver (hygiène corporelle)",
        "D. La capacité à entretenir le domicile"
      ],
      correct: 2,
      explanation: "L'échelle de Katz évalue 6 AVQ de base (ADL) : (1) se laver, (2) s'habiller, (3) aller aux toilettes, (4) se déplacer (transfert lit-fauteuil), (5) continence, (6) alimentation. Les items comme gérer ses finances (A), utiliser le téléphone (B) et faire les courses (D) relèvent de l'échelle de Lawton (AIVQ/IADL), qui évalue les activités instrumentales.",
      source: "Gériatrie - Notes de cours",
      difficulty: "medium"
    },
    {
      id: "geronto_27",
      question: "L'échelle de Lawton (IADL) évalue les activités instrumentales de la vie quotidienne. Parmi les items suivants, lequel est évalué par l'échelle de Lawton ?",
      options: [
        "A. La capacité à effectuer les transferts lit-fauteuil",
        "B. La capacité à se laver et à assurer son hygiène corporelle",
        "C. La capacité à prendre ses médicaments (gestion du traitement)",
        "D. La capacité à monter les escaliers avec une aide technique"
      ],
      correct: 2,
      explanation: "L'échelle de Lawton évalue les AIVQ/IADL (activités instrumentales) dont : utiliser le téléphone, faire les courses, préparer les repas, entretenir le domicile, faire la lessive, utiliser les transports, prendre ses médicaments, gérer son budget. Les items A, B et D font partie de l'échelle de Katz (AVQ de base).",
      source: "Gériatrie - Notes de cours",
      difficulty: "medium"
    },
    {
      id: "geronto_28",
      question: "À partir de combien de médicaments parle-t-on de polymédication chez la personne âgée ?",
      options: [
        "A. 3 médicaments",
        "B. 5 médicaments",
        "C. 8 médicaments",
        "D. 12 médicaments"
      ],
      correct: 1,
      explanation: "On parle de polymédication à partir de 5 médicaments pris simultanément. La polymédication est un des critères définissant le profil gériatrique. Elle entraîne des risques accrus d'interactions médicamenteuses, d'iatrogénie, de chutes et de confusion. Des molécules comme les benzodiazépines et les anticholinergiques sont particulièrement à risque.",
      source: "Gériatrie - Notes de cours",
      difficulty: "easy"
    },
    {
      id: "geronto_29",
      question: "Quelle est la prévalence approximative de la dysphagie en maison de repos et chez les personnes âgées hospitalisées ?",
      options: [
        "A. 15% en maison de repos et 20% à l'hôpital",
        "B. 40-60% en maison de repos et 30-50% chez les personnes âgées hospitalisées",
        "C. 70% dans les deux contextes",
        "D. Environ 10% dans les deux contextes"
      ],
      correct: 1,
      explanation: "La dysphagie a une prévalence élevée chez la personne âgée : environ 40-60% en maison de repos et 30-50% chez les personnes âgées hospitalisées. Elle correspond à la définition d'un syndrome gériatrique car sa prévalence augmente avec l'âge, elle est plurifactorielle et impacte significativement la qualité de vie.",
      source: "Gériatrie - Notes de cours",
      difficulty: "medium"
    },
    {
      id: "geronto_30",
      question: "Qu'est-ce que la sarcopénie et quel lien entretient-elle avec la fragilité ?",
      options: [
        "A. Une hypertrophie musculaire compensatoire liée à la dénutrition",
        "B. Une perte progressive et généralisée de la masse et de la force musculaires, contribuant directement à la fragilité physique",
        "C. Une pathologie dégénérative du cartilage articulaire",
        "D. Une raréfaction du tissu osseux avec augmentation du risque fracturaire"
      ],
      correct: 1,
      explanation: "La sarcopénie est une perte progressive et généralisée de la masse et de la force musculaires liée au vieillissement. Elle contribue directement à la fragilité physique (critère « faiblesse » et « lenteur » du phénotype de Fried) et augmente le risque de chutes, de dépendance et de mortalité.",
      source: "Gériatrie - Notes de cours",
      difficulty: "medium"
    },
    {
      id: "geronto_31",
      question: "Quel marqueur biologique est couramment utilisé pour objectiver une dénutrition chez la personne âgée ?",
      options: [
        "A. L'hémoglobine glyquée (HbA1c)",
        "B. L'albuminémie (seuil < 35 g/L)",
        "C. La clairance de la créatinine (formule CKD-EPI)",
        "D. La vitamine D (25-OH-D3)"
      ],
      correct: 1,
      explanation: "L'albuminémie est un marqueur biologique clé de la dénutrition : un taux inférieur à 35 g/L signe une dénutrition. La perte de poids (≥5% en 1 mois ou ≥10% en 6 mois) est un critère clinique complémentaire. La glycémie (A) évalue le diabète, la créatinine (C) la fonction rénale, la TSH (D) la fonction thyroïdienne.",
      source: "Gériatrie - Notes de cours",
      difficulty: "easy"
    },
    {
      id: "geronto_32",
      question: "Quel risque spécifique l'anesthésie présente-t-elle chez le patient gériatrique fragile ?",
      options: [
        "A. Un risque comparable à celui de la population adulte non âgée",
        "B. Un risque accru de complications postopératoires : confusion (delirium), déclin fonctionnel, décompensation de comorbidités, et perte d'autonomie prolongée",
        "C. Une amélioration transitoire de l'état fonctionnel par l'immobilisation postopératoire",
        "D. Un risque principalement lié au type d'anesthésie et non au terrain gériatrique"
      ],
      correct: 1,
      explanation: "Chez le patient gériatrique fragile, l'anesthésie comporte un risque accru de complications postopératoires incluant : confusion/delirium, déclin fonctionnel (perte d'autonomie), décompensation de comorbidités, et hospitalisation prolongée. Une EGM préopératoire est recommandée pour anticiper ces risques et adapter la prise en charge périopératoire.",
      source: "Gériatrie - Notes de cours",
      difficulty: "medium"
    },
    {
      id: "geronto_33",
      question: "Pourquoi le pantoprazole (inhibiteur de la pompe à protons) est-il limité à une durée maximale de 6 mois chez la personne âgée ?",
      options: [
        "A. Parce qu'une résistance pharmacologique se développe après 6 mois d'utilisation continue",
        "B. Pour limiter les risques de polymédication et les effets secondaires à long terme (infections, carences, fractures)",
        "C. Parce que les autorités sanitaires recommandent une rotation des IPP chaque semestre",
        "D. Parce qu'il réduit l'absorption intestinale de la plupart des traitements oraux"
      ],
      correct: 1,
      explanation: "Le pantoprazole et les autres IPP sont limités à 6 mois chez la personne âgée pour réduire la polymédication et prévenir les effets secondaires à long terme : risque accru d'infections (C. difficile, pneumopathies), carences (vitamine B12, magnésium), ostéoporose et fractures. Une réévaluation régulière de l'indication est nécessaire.",
      source: "Gériatrie - Notes de cours",
      difficulty: "hard"
    },
    {
      id: "geronto_34",
      question: "L'altération de l'état général (AEG) est un motif fréquent d'admission en gériatrie. Que recouvre ce terme ?",
      options: [
        "A. Une entité nosologique définie par la classification internationale des maladies",
        "B. Un syndrome aspécifique associant asthénie, anorexie, perte de poids et déclin fonctionnel, souvent révélateur d'une pathologie sous-jacente",
        "C. Un épisode dépressif caractérisé du sujet âgé",
        "D. Un processus physiologique lié au ralentissement métabolique du grand âge"
      ],
      correct: 1,
      explanation: "L'AEG (altération de l'état général) est un syndrome aspécifique du sujet âgé associant asthénie, anorexie, perte de poids et déclin fonctionnel. Elle constitue un motif fréquent d'admission et impose une EGM pour identifier la/les pathologie(s) sous-jacente(s) : infection, cancer, dépression, démence, iatrogénie médicamenteuse, etc.",
      source: "Gériatrie - Notes de cours",
      difficulty: "medium"
    },
    {
      id: "geronto_35",
      question: "Pourquoi le concept de « pré-dépendance » est-il central dans l'identification de la fragilité ?",
      options: [
        "A. Parce qu'il constitue un indicateur fiable du risque de chute à court terme",
        "B. Parce que la fragilité précède la perte d'autonomie — identifier la fragilité, c'est identifier la pré-dépendance avant qu'elle ne devienne irréversible",
        "C. Parce qu'il confirme que la personne conserve une autonomie suffisante pour le maintien à domicile",
        "D. Parce que la pré-dépendance est un stade précoce du syndrome confusionnel"
      ],
      correct: 1,
      explanation: "La fragilité précède la perte d'autonomie (dépendance). Identifier la fragilité, c'est donc identifier la « pré-dépendance » à un stade où les interventions sont encore efficaces pour prévenir ou ralentir la transition vers la dépendance irréversible. Ce concept justifie l'importance du dépistage précoce de la fragilité en soins primaires.",
      source: "Gériatrie - Notes de cours",
      difficulty: "medium"
    },
    {
      id: "geronto_36",
      question: "Quel lien physiopathologique existe-t-il entre BPCO et dysphagie chez la personne âgée ?",
      options: [
        "A. Seul un lien indirect via la dénutrition a été documenté",
        "B. La BPCO altère la coordination respiration-déglutition, favorise les fausses routes, et la fatigue respiratoire aggrave la dénutrition, créant un cercle vicieux avec la fragilité",
        "C. La BPCO stimule le réflexe de toux, renforçant la protection des voies aériennes",
        "D. La dysphagie favorise les pneumopathies d'inhalation qui évoluent en BPCO"
      ],
      correct: 1,
      explanation: "La BPCO altère la coordination respiration-déglutition (cycle inspiration-expiration-déglutition), favorisant les fausses routes aux liquides et solides. La fatigue respiratoire réduit la tolérance aux repas, aggravant la dénutrition et la sarcopénie, ce qui crée un cercle vicieux avec la fragilité. L'intervention logopédique est indiquée pour la dysphagie.",
      source: "Gériatrie - Notes de cours",
      difficulty: "hard"
    },
    {
      id: "geronto_37",
      question: "Les chutes constituent un syndrome gériatrique majeur. Leur origine est :",
      options: [
        "A. Principalement accidentelle et liée aux obstacles domestiques",
        "B. Plurifactorielle : intrinsèque (troubles de l'équilibre, sarcopénie, hypotension orthostatique, iatrogénie) et extrinsèque (environnement, chaussage, éclairage)",
        "C. Majoritairement liée aux pathologies neurologiques dégénératives",
        "D. Essentiellement consécutive à une fragilité osseuse avec fracture"
      ],
      correct: 1,
      explanation: "Les chutes chez la personne âgée sont d'origine plurifactorielle, combinant des facteurs intrinsèques (troubles de l'équilibre/marche, sarcopénie, hypotension orthostatique, iatrogénie médicamenteuse, troubles visuels, déclin cognitif) et des facteurs extrinsèques (environnement : obstacles, éclairage, revêtement, chaussage). C'est un syndrome gériatrique car il ne correspond pas à une catégorie de maladie classique.",
      source: "Gériatrie - Notes de cours",
      difficulty: "medium"
    }
  );

  // --- AUDIOLOGIE (audio_28 à audio_39) ---
  A.subjects.audio.push(
    {
      id: "audio_28",
      question: "Quelle particularité ORL et auditive caractérise le syndrome de Treacher-Collins ?",
      options: [
        "A. Une surdité de perception bilatérale évolutive associée à des acouphènes",
        "B. Une dysostose mandibulo-faciale avec surdité de transmission par malformation de l'oreille externe et/ou moyenne (microtie, atrésie du CAE, anomalies ossiculaires)",
        "C. Une atteinte rétrocochléaire avec troubles du traitement auditif central",
        "D. Une audition subnormale avec hyperacousie et acouphènes bilatéraux"
      ],
      correct: 1,
      explanation: "Le syndrome de Treacher-Collins (ou Franceschetti-Klein) est une dysostose mandibulo-faciale associant une surdité de transmission par malformation de l'oreille externe (microtie, atrésie du conduit auditif externe) et/ou de l'oreille moyenne (anomalies ossiculaires). L'appareillage par BAHA ou vibreur osseux est souvent indiqué.",
      source: "Les Surdités - Module 1",
      difficulty: "hard"
    },
    {
      id: "audio_29",
      question: "Quel pourcentage des surdités congénitales d'origine infectieuse est attribuable au cytomégalovirus (CMV) ?",
      options: [
        "A. Le CMV est la première cause infectieuse de surdité congénitale, responsable de 10 à 20% des surdités d'origine infectieuse",
        "B. Le CMV est une cause rare de surdité, réservée aux formes congénitales sévères",
        "C. Le CMV représente environ 2 à 5% des surdités congénitales d'origine infectieuse",
        "D. Le CMV provoque des surdités de transmission par atteinte de l'oreille moyenne"
      ],
      correct: 0,
      explanation: "Le CMV (cytomégalovirus) est la première cause infectieuse de surdité congénitale, responsable de 10 à 20% des surdités d'origine infectieuse. La surdité peut être présente à la naissance ou apparaître plus tardivement (surdité évolutive). Le CMV fait partie des embryopathies au même titre que la rubéole, la toxoplasmose et l'herpès.",
      source: "Les Surdités - Module 1",
      difficulty: "medium"
    },
    {
      id: "audio_30",
      question: "Concernant la presbyacousie, quelle affirmation oriente la pratique clinique logopédique ?",
      options: [
        "A. L'appareillage doit être proposé lorsque le patient exprime une gêne fonctionnelle significative",
        "B. Il faut pousser l'appareillage précoce de la presbyacousie pour prévenir l'isolement social, le déclin cognitif et la fragilité chez la personne âgée",
        "C. La presbyacousie peut être compensée par des stratégies de communication sans appareillage",
        "D. La presbyacousie est une surdité mixte à prédominance transmissionnelle"
      ],
      correct: 1,
      explanation: "Il est recommandé de pousser l'appareillage précoce de la presbyacousie (surdité neurosensorielle liée à l'âge) car une perte auditive non appareillée contribue à l'isolement social, peut mimer ou aggraver un déclin cognitif, et aggrave la fragilité gériatrique. La presbyacousie est une surdité de perception (D incorrect), pas de transmission.",
      source: "Les Surdités - Module 1 & Gériatrie - Notes de cours",
      difficulty: "medium"
    },
    {
      id: "audio_31",
      question: "Qu'est-ce que le phénomène de recrutement (recruitment) dans les surdités endocochléaires ?",
      options: [
        "A. Une perception réduite de l'intensité sonore à toutes les fréquences",
        "B. Une perception anormalement rapide de la croissance de l'intensité sonore (le seuil est élevé mais l'inconfort est atteint pour une faible augmentation au-dessus du seuil), altérant l'audiométrie vocale",
        "C. Une fluctuation des seuils auditifs avec récupération partielle entre les épisodes",
        "D. Une meilleure discrimination de la parole en environnement bruyant qu'en silence"
      ],
      correct: 1,
      explanation: "Le phénomène de recrutement (recruitment) est caractéristique des surdités endocochléaires. Le patient perçoit une croissance anormalement rapide de l'intensité sonore : le seuil d'audition est élevé (surdité), mais une faible augmentation au-dessus du seuil entraîne rapidement une sensation d'inconfort. Ce phénomène altère significativement l'intelligibilité de la parole et complexifie l'appareillage.",
      source: "Les Surdités - Module 1",
      difficulty: "hard"
    },
    {
      id: "audio_32",
      question: "Qu'est-ce qui caractérise l'ANSD (Auditory Neuropathy Spectrum Disorder) ?",
      options: [
        "A. Une surdité de perception endocochléaire avec recrutement",
        "B. Une dissociation entre les otoémissions acoustiques (OEA) présentes (cellules ciliées externes fonctionnelles) et les potentiels évoqués auditifs (PEA) absents ou très altérés, indiquant une atteinte rétrocochléaire",
        "C. Une surdité de perception bilatérale symétrique avec atteinte vestibulaire associée",
        "D. Une surdité de perception légère avec troubles du traitement auditif central"
      ],
      correct: 1,
      explanation: "L'ANSD (neuropathie auditive/désynchronisation auditive) se caractérise par une dissociation entre des OEA présentes (cellules ciliées externes fonctionnelles) et des PEA absents ou très altérés (défaut de synchronisation neurale). L'atteinte est rétrocochléaire (nerf auditif, synapse, ganglion spiral). L'audiométrie tonale peut être normale à profonde, mais la compréhension de la parole est toujours altérée.",
      source: "Les Surdités - Module 1",
      difficulty: "hard"
    },
    {
      id: "audio_33",
      question: "Que signifie l'acronyme CHARGE dans le syndrome CHARGE et quelle est l'atteinte auditive associée ?",
      options: [
        "A. Une dysplasie rénale et une surdité de perception isolée",
        "B. Colobome, Heart defects, Atrésie des choanes, Retard de croissance/développement, Genital hypoplasia, Ear anomalies — l'atteinte auditive est variable (transmission, perception ou mixte)",
        "C. Une surdité de perception bilatérale profonde congénitale",
        "D. Une surdité de transmission unilatérale par aplasie du conduit auditif"
      ],
      correct: 1,
      explanation: "L'acronyme CHARGE signifie : Colobome, Heart defects (cardiopathie), Atrésie des choanes, Retard de croissance/développement, Genital hypoplasia, Ear anomalies (anomalies de l'oreille). L'atteinte auditive est variable : surdité de transmission (malformation de l'oreille externe/moyenne), de perception (oreille interne) ou mixte.",
      source: "Les Surdités - Module 1",
      difficulty: "hard"
    },
    {
      id: "audio_34",
      question: "Quelle est la différence fondamentale entre l'audiométrie tonale et l'audiométrie vocale ?",
      options: [
        "A. L'audiométrie tonale mesure la perception de sons purs à différentes fréquences ; l'audiométrie vocale mesure la capacité de compréhension de la parole (intelligibilité)",
        "B. L'audiométrie tonale évalue les fréquences aiguës et l'audiométrie vocale les fréquences graves",
        "C. Les deux mesures fournissent des informations redondantes sur les seuils auditifs",
        "D. L'audiométrie vocale permet de déterminer le type de surdité sans audiométrie tonale"
      ],
      correct: 0,
      explanation: "L'audiométrie tonale mesure la perception de sons purs (fréquences de 250 à 4000 Hz, intensités de 0 à 120 dB) pour établir les seuils auditifs en conduction aérienne et osseuse. L'audiométrie vocale mesure la capacité de compréhension de la parole (intelligibilité) en présentant des mots à différentes intensités, reflétant mieux l'impact fonctionnel de la perte auditive.",
      source: "Les Surdités - Module 1",
      difficulty: "medium"
    },
    {
      id: "audio_35",
      question: "Pourquoi les fréquences 500, 1000, 2000 et 4000 Hz sont-elles utilisées pour le calcul de la perte auditive moyenne ?",
      options: [
        "A. Parce que ce sont les fréquences correspondant aux sons environnementaux de danger",
        "B. Parce qu'elles correspondent à la bande de fréquences de la parole, essentielle pour la compréhension du langage",
        "C. Parce que ces fréquences présentent la meilleure fiabilité test-retest",
        "D. Parce que les fréquences inférieures à 250 Hz et supérieures à 8000 Hz sont inaudibles chez la majorité des patients"
      ],
      correct: 1,
      explanation: "Ces quatre fréquences (500, 1000, 2000, 4000 Hz) constituent la bande de fréquences de la parole, c'est-à-dire les fréquences les plus importantes pour la perception et la compréhension du langage oral. Le calcul de la perte moyenne sur ces fréquences reflète l'impact fonctionnel de la surdité sur la communication verbale.",
      source: "Les Surdités - Module 1",
      difficulty: "easy"
    },
    {
      id: "audio_36",
      question: "Combien de gènes sont actuellement identifiés comme pouvant causer une surdité non syndromique ?",
      options: [
        "A. Moins de 30 gènes",
        "B. Plus de 200 gènes",
        "C. Environ 100 gènes",
        "D. Deux gènes principaux (GJB2 et SLC26A4)"
      ],
      correct: 1,
      explanation: "Plus de 200 gènes ont été identifiés comme pouvant causer une surdité non syndromique (isolée). La mutation GJB2 (Connexine 26) est la plus fréquente (15-40% des surdités génétiques non syndromiques), mais de nombreux autres gènes sont impliqués, reflétant la grande hétérogénéité génétique des surdités.",
      source: "Les Surdités - Module 1",
      difficulty: "medium"
    },
    {
      id: "audio_37",
      question: "Quelles sont les différences cliniques entre les syndromes de Usher de type II et de type III ?",
      options: [
        "A. Les types II et III partagent la même sévérité auditive que le type I mais diffèrent par l'atteinte vestibulaire",
        "B. Le type II : surdité congénitale modérée à sévère (stable), rétinite pigmentaire à l'adolescence/jeune adulte, pas de trouble vestibulaire. Le type III : surdité progressive postlinguale, rétinite pigmentaire variable, troubles vestibulaires variables",
        "C. Le type II implique une surdité de transmission avec audition fluctuante",
        "D. Le type III présente une rétinite pigmentaire congénitale, contrairement aux types I et II"
      ],
      correct: 1,
      explanation: "Le syndrome de Usher de type II présente une surdité congénitale modérée à sévère stable (contrairement au type I qui est profonde), une rétinite pigmentaire apparaissant à l'adolescence ou chez le jeune adulte, et pas de trouble vestibulaire. Le type III présente une surdité progressive postlinguale, une rétinite pigmentaire d'apparition variable, et des troubles vestibulaires variables. Le type I est le plus sévère.",
      source: "Les Surdités - Module 1",
      difficulty: "hard"
    },
    {
      id: "audio_38",
      question: "Quelle est la particularité d'une surdité pétrilinguale (survenant entre 1 et 3 ans) concernant le développement du langage ?",
      options: [
        "A. Elle a un impact modéré car l'enfant conserve les acquisitions lexicales antérieures",
        "B. L'enfant a déjà été exposé au langage et a commencé à développer le babillage et les premiers mots, mais le langage est encore en pleine acquisition — le risque de régression du langage est significatif sans appareillage rapide",
        "C. Elle entraîne une régression du langage dans les surdités de perception profondes",
        "D. Elle stimule le développement compensatoire de la perception visuelle du langage"
      ],
      correct: 1,
      explanation: "La surdité pétrilinguale (1-3 ans) survient pendant la période critique d'acquisition du langage. L'enfant a déjà été exposé au langage (babillage, premiers mots), mais l'acquisition est encore en cours. Le risque de régression du langage est significatif si l'appareillage n'est pas rapide. Une intervention précoce multidisciplinaire (ORL, logopédie, audioprothèse) est cruciale.",
      source: "Les Surdités - Module 1",
      difficulty: "medium"
    },
    {
      id: "audio_39",
      question: "Quel pourcentage des surdités reste de cause inconnue malgré les investigations étiologiques ?",
      options: [
        "A. 10%",
        "B. 20%",
        "C. 25%",
        "D. 40%"
      ],
      correct: 2,
      explanation: "Environ 25% des surdités restent de cause inconnue malgré un bilan étiologique complet (génétique, infectieux, imagerie). Rappelons que 60% sont d'origine génétique, et les 15% restants correspondent aux causes acquises (infectieuses, traumatiques, médicamenteuses, tumorales). Le bilan étiologique reste indispensable pour le pronostic et le conseil génétique.",
      source: "Les Surdités - Module 1",
      difficulty: "easy"
    }
  );

  // ==================== 2. FICHES MÉMO / AIDE-MÉMOIRE ====================
  A.fichesMemo = {
    psycho: [
      {
        id: "fm_psycho_01",
        title: "Critères DSM-5 du TSA",
        content: "Le DSM-5 (2015) définit le TSA par deux critères diagnostiques. Le critère A exige la présence des 3 sous-critères de déficits persistants de la communication et des interactions sociales : (1) réciprocité socio-émotionnelle, (2) comportements de communication non verbale, (3) développement et maintien des relations. Le critère B exige au moins 2 des 4 sous-critères de comportements restreints et répétitifs : (1) mouvements/parole stéréotypés, (2) intolérance au changement, (3) intérêts restreints, (4) hyper/hypo-réactivité sensorielle. Le TSA est classé parmi les troubles neurodéveloppementaux.",
        keyPoints: [
          "Critère A : 3/3 sous-critères requis (réciprocité, non-verbal, relations)",
          "Critère B : 2/4 sous-critères requis (stéréotypies, sameness, intérêts, sensoriel)",
          "Anciens TED du DSM-IV fusionnés en une appellation unique TSA",
          "Asperger = TSA sans déficits intellectuel et de langage",
          "Niveaux de sévérité : 1 (nécessitant aide), 2 (aide substantielle), 3 (aide très substantielle)"
        ],
        source: "TSA Partie 1"
      },
      {
        id: "fm_psycho_02",
        title: "Signes précoces du TSA",
        content: "Les signes précoces du TSA sont observables dès les premiers mois de vie et évoluent avec l'âge. De 0 à 6 mois : anomalies du dialogue tonique, hypo/hypertonie, absence de poursuite oculaire. De 6 à 12 mois : absence de babillage, évitement du regard, absence de mimiques faciales, expression sérieuse. De 12 à 24/30 mois : absence de pointage (surtout déclaratif), absence de jeu symbolique, retard de langage, écholalie, absence d'attention conjointe. L'attention conjointe est le prérequis à la communication systématiquement déficitaire.",
        keyPoints: [
          "0-6 mois : dialogue tonique altéré, hypo/hypertonie",
          "6-12 mois : absence de babillage, évitement du regard",
          "12-24/30 mois : absence de pointage déclaratif, absence de jeu symbolique",
          "Attention conjointe = prérequis systématiquement déficitaire",
          "Dépistage précoce via CHAT et M-CHAT"
        ],
        source: "TSA Partie 1"
      },
      {
        id: "fm_psycho_03",
        title: "Les 7 systèmes sensoriels dans le TSA",
        content: "Le TSA implique des particularités dans les 7 systèmes sensoriels. Cinq systèmes « classiques » : auditif (hyperacousie, non-réponse au prénom), visuel (évitement/fixation, attirance pour la rotation), tactile (hypo/hyperréactivité, irritations), gustatif (sélectivité alimentaire, néophobie) et olfactif. Deux systèmes moins connus mais essentiels : le système proprioceptif (faiblesse du tonus, motricité atypique, mauvais schéma corporel) et le système vestibulaire (évitement ou recherche de stimulation : balancements, tournoiements). Les stéréotypies motrices peuvent stimuler le système vestibulaire. Selon Grandin (2000), l'hyperesthésie est vécue comme une souffrance entraînant un retrait.",
        keyPoints: [
          "7 systèmes : auditif, visuel, tactile, gustatif, olfactif, proprioceptif, vestibulaire",
          "Proprioceptif : tonus, motricité, schéma corporel",
          "Vestibulaire : balancements, tournoiements (recherche ou évitement)",
          "Grandin (2000) : hyperesthésie = souffrance → retrait",
          "Severité des dysfonctionnements corrélée à la sévérité du TSA (Sanz-Cervera, 2015)"
        ],
        source: "TSA Partie 1"
      },
      {
        id: "fm_psycho_04",
        title: "Outils d'évaluation du TSA",
        content: "Plusieurs outils standardisés permettent l'évaluation diagnostique et fonctionnelle du TSA. Outils de dépistage : CHAT (Checklist for Autism in Toddlers, 18-24 mois), SCQ (Social Communication Questionnaire). Outils diagnostiques : ADOS-2 (Autism Diagnostic Observation Schedule, observation semi-structurée, gold standard). Outils d'évaluation développementale : BECS (Batterie d'Évaluation Cognitive et Socio-émotionnelle, 4-30 mois, 16 secteurs), PEP-3 (Profil Psycho-Éducatif). Outils d'évaluation des compétences : ABLLS-R (25 domaines), VB-MAPP (compétences verbales selon Skinner). Évaluation de la communication réceptive : ComVoor (ComFor-2, pour non-verbaux, oriente la CAA). Évaluation sensorielle : Profil Sensoriel de Dunn. Évaluation de la communication précoce : ECSP (3-30 mois).",
        keyPoints: [
          "Dépistage : CHAT (18-24 mois), SCQ",
          "Diagnostic : ADOS-2 (gold standard)",
          "Développement : BECS (4-30 mois), PEP-3",
          "Compétences : ABLLS-R (25 domaines), VB-MAPP (Skinner)",
          "Communication réceptive : ComVoor (CAA) ; Sensoriel : Dunn ; Précoce : ECSP"
        ],
        source: "TSA Partie 2 - Communication & Habiletés sociales"
      },
      {
        id: "fm_psycho_05",
        title: "Théorie de l'Esprit (ToM) et TSA",
        content: "La Théorie de l'Esprit (ToM) est la capacité cognitive à inférer les états affectifs et cognitifs d'autrui (croyances, désirs, intentions). La ToM de 1er ordre (« Je pense que X... ») s'acquiert normalement vers 4 ans. La ToM de 2nd ordre (« Je pense que A pense que B... ») s'acquiert vers 6-7 ans. Le test classique est le Sally-Anne (fausse croyance). Dans le TSA, les deux niveaux de ToM sont déficitaires. Un lien existe entre développement du langage et acquisition de la ToM. Fait notable : dans le syndrome de Williams/Beuren et la trisomie 21, la ToM est préservée malgré la déficience intellectuelle, contrairement au TSA.",
        keyPoints: [
          "ToM = inférer les états mentaux d'autrui",
          "1er ordre (« Je pense que X... ») : acquis vers 4 ans",
          "2nd ordre (« Je pense que A pense que B... ») : acquis vers 6-7 ans",
          "Test Sally-Anne = test classique de fausse croyance",
          "ToM préservée dans Williams/Beuren et trisomie 21 contrastant avec le TSA"
        ],
        source: "TSA Partie 2 - Communication & Habiletés sociales"
      },
      {
        id: "fm_psycho_06",
        title: "Diagnostic différentiel : TSA vs TDL vs TCSP",
        content: "Selon Simms & Jin (2015), le diagnostic différentiel entre TSA, trouble du langage (TDL) et trouble de la communication sociale/pragmatique (TCSP) repose sur plusieurs éléments. Le TSA se distingue par la présence de déficits de la communication sociale ET de comportements restreints/répétitifs. Le TCSP présente des déficits de la communication sociale SANS comportements restreints/répétitifs, avec un intérêt social fort mais des interactions inappropriées. Le TDL (SLI) présente des déficits structurels du langage (phonologie, morphosyntaxe) sans déficit pragmatique primaire. L'écholalie dans le TDL est communicative, dans le TSA elle peut être non communicative (auto-stimulation).",
        keyPoints: [
          "TSA = déficits communication sociale + comportements restreints/répétitifs",
          "TCSP = déficits communication sociale SANS comportements restreints/répétitifs",
          "TCSP : intérêt social fort, imitation et faire-semblant préservés",
          "TDL : déficits structurels du langage sans déficit pragmatique primaire",
          "Écholalie TDL = communicative ; TSA = peut être non communicative"
        ],
        source: "Autism, Language Disorder, and Social (Pragmatic) Communication Disorder (Simms & Jin, 2015)"
      }
    ],
    geronto: [
      {
        id: "fm_geronto_01",
        title: "Phénotype de Fried — 5 critères",
        content: "Le phénotype de Fried évalue la fragilité physique selon 5 critères objectifs et auto-rapportés. (1) Perte de poids involontaire : >4,5 kg ou ≥5% du poids en 1 an. (2) Épuisement : fatigue auto-rapportée (questionnaire CES-D). (3) Faiblesse : force de préhension au dynamomètre (seuils ajustés au sexe et à l'IMC). (4) Lenteur : vitesse de marche — plus de 4 secondes pour parcourir 4 mètres. (5) Sédentarité : faible niveau d'activité physique. Score : 0 = robuste, 1-2 = pré-fragile, ≥3 = fragile. Durée d'administration : 10-15 minutes. Outil catégoriel à 3 catégories.",
        keyPoints: [
          "Perte de poids : >4,5 kg ou ≥5% en 1 an",
          "Épuisement : fatigue auto-rapportée (CES-D)",
          "Faiblesse : grip strength au dynamomètre",
          "Lenteur : 4 mètres en >4 secondes",
          "Sédentarité : activité physique basse",
          "Score : 0=Robuste, 1-2=Pré-fragile, ≥3=Fragile (10-15 min)"
        ],
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "fm_geronto_02",
        title: "Questionnaire FRAIL",
        content: "Le questionnaire FRAIL est un outil auto-rapporté simple de dépistage de la fragilité. Il évalue 5 items : F — Fatigue (épuisement ressenti). R — Résistance (difficulté à monter 10 marches sans aide). A — Ambulation (difficulté à marcher plusieurs centaines de mètres). I — Illnesses (présence de >5 maladies chroniques). L — Loss of Weight (perte de poids >5% en 6-12 mois). Chaque item = 1 point. Score : 0 = robuste, 1-2 = pré-fragile, 3-5 = fragile. Avantage : rapide, auto-rapporté, ne nécessite pas de matériel.",
        keyPoints: [
          "F — Fatigue : épuisement auto-rapporté",
          "R — Résistance : monter 10 marches",
          "A — Ambulation : marcher plusieurs centaines de mètres",
          "I — Illnesses : >5 maladies chroniques",
          "L — Loss of Weight : perte >5% en 6-12 mois",
          "Score : 0=Robuste, 1-2=Pré-fragile, 3-5=Fragile"
        ],
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "fm_geronto_03",
        title: "Syndromes gériatriques",
        content: "Les syndromes gériatriques sont des conditions cliniques qui ne correspondent PAS aux catégories de maladies classiques. Ils sont plurifactoriels et la plainte principale peut ne pas représenter la condition sous-jacente. Les plus fréquents : (1) Delirium/état confusionnel aigu — urgence diagnostique, souvent iatrogène ou infectieux. (2) Chutes — origine plurifactorielle (intrinsèque + extrinsèque). (3) Incontinence — urinaire et/ou fécale, impact majeur sur la qualité de vie. (4) Hypotension orthostatique — risque de chute et de syncope. La dysphagie répond également à la définition de syndrome gériatrique (prévalence augmentant avec l'âge, plurifactorielle, impact fonctionnel majeur).",
        keyPoints: [
          "Syndromes ≠ catégories de maladies classiques",
          "4 syndromes les plus fréquents : Delirium, Chutes, Incontinence, Hypotension orthostatique",
          "Origine plurifactorielle",
          "La plainte principale peut masquer la condition sous-jacente",
          "La dysphagie répond aussi à la définition de syndrome gériatrique"
        ],
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "fm_geronto_04",
        title: "Composition de l'équipe multidisciplinaire (MDT)",
        content: "L'équipe multidisciplinaire en gériatrie est pierre angulaire de la spécialité. Elle comprend : gériatre (médecin coordinateur), infirmier(ère), aide-soignant(e), kinésithérapeute, ergothérapeute, assistant(e) social(e), logopède/orthophoniste, diététicien(ne), psychologue/neuropsychologue et pharmacien(ne). Les rôles-clés du logopède dans l'équipe : Identifier, Évaluer, Intervenir, Informer, Collaborer, Former/Éduquer. L'association EGM (CGA) + équipe multidisciplinaire a démontré : réduction de la mortalité, réduction de l'institutionnalisation, réduction du déclin fonctionnel et réduction des hospitalisations.",
        keyPoints: [
          "Membres : gériatre, infirmier, aide-soignant, kiné, ergo, AS, logopède, diététicien, psychologue/neuropsy, pharmacien",
          "Rôles-clés logopède : Identifier, Évaluer, Intervenir, Informer, Collaborer, Former/Éduquer",
          "PIL : restaurateur, réorganisateur ou palliatif (direct/indirect)",
          "EGM + MDT → ↓ mortalité, ↓ institutionnalisation, ↓ déclin fonctionnel, ↓ hospitalisations"
        ],
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "fm_geronto_05",
        title: "Fragilité : concept et définitions",
        content: "La fragilité selon la SFGG est une réduction des capacités de réserve et d'adaptation aux événements stressants, partiellement liée au vieillissement. C'est un processus dynamique et potentiellement RÉVERSIBLE. Elle est multidimensionnelle (sociale, physique, psychologique, environnementale). La fragilité PRÉCÈDE la perte d'autonomie : identifier la fragilité = identifier la pré-dépendance. Deux approches principales : Fried (catégoriel, 5 critères, 10-15 min) et Rockwood (continu, 70-100 items sur 9 domaines, 45-60 min). Fried est un outil de dépistage ; Rockwood est une évaluation approfondie sensible aux changements subtils.",
        keyPoints: [
          "SFGG : réduction des réserves et de l'adaptation au stress",
          "Dynamique et potentiellement RÉVERSIBLE",
          "Multidimensionnelle : social, physique, psychologique, environnemental",
          "Fragilité = pré-dépendance (précède la perte d'autonomie)",
          "Fried : dépistage (10-15 min, 5 critères) ; Rockwood : évaluation approfondie (45-60 min, 9 domaines)"
        ],
        source: "Gériatrie - Notes de cours"
      }
    ],
    audio: [
      {
        id: "fm_audio_01",
        title: "Classification BIAP — Degrés de perte auditive",
        content: "La classification BIAP (Bureau International d'Audiophonologie) définit les degrés de perte auditive selon la perte moyenne calculée sur les fréquences 500, 1000, 2000 et 4000 Hz. Audition normale/sub-normale : 0-20 dB. Déficience auditive légère : 21-40 dB. Déficience auditive moyenne du 1er degré : 41-55 dB. Déficience auditive moyenne du 2e degré : 56-70 dB. Déficience auditive sévère du 1er degré : 71-80 dB. Déficience auditive sévère du 2e degré : 81-90 dB. Déficience auditive profonde du 1er degré : 91-100 dB. Déficience auditive profonde du 2e degré : 101-110 dB. Déficience auditive profonde du 3e degré : 111-120 dB. Cophose (surdité totale) : >120 dB.",
        keyPoints: [
          "Normale/sub-normale : 0-20 dB",
          "Légère : 21-40 dB",
          "Moyenne 1er degré : 41-55 dB ; Moyenne 2e degré : 56-70 dB",
          "Sévère 1er degré : 71-80 dB ; Sévère 2e degré : 81-90 dB",
          "Profonde 1er degré : 91-100 dB ; 2e : 101-110 dB ; 3e : 111-120 dB",
          "Cophose (totale) : >120 dB"
        ],
        source: "Les Surdités - Module 1"
      },
      {
        id: "fm_audio_02",
        title: "Les 4 types de perte auditive",
        content: "Il existe 4 types de perte auditive. (1) Surdité de transmission : atteinte de l'oreille externe et/ou moyenne (CAE, tympan, osselets). Perte maximale de 50 dB. Principalement quantitative. Rinne : CO > CA (Rinne absent). Causes : otite séromuqueuse, malformation. (2) Surdité de perception (neurosensorielle) : atteinte de l'oreille interne (cochlée/organe de Corti) ou du nerf auditif. Quantitative ET qualitative. CA et CO affectées. Rinne présent. Causes : Connexine 26, presbyacousie, méningite. (3) Surdité mixte : combine transmission ET perception. (4) Surdité centrale : lésion corticale, défaut de traitement du signal (qualitatif). Entrée du son normale mais transmission au cerveau perturbée. Inclut la neuropathie auditive (ANSD).",
        keyPoints: [
          "Transmission : OE/OM, max 50 dB, quantitative, Rinne absent (CO>CA)",
          "Perception : OI/nerf, quanti+quali, CA et CO affectées, Rinne présent",
          "Mixte : combine transmission + perception",
          "Centrale : lésion corticale, défaut traitement signal, audiométrie vocale souvent très mauvaise",
          "ANSD : dissociation OEA présentes / PEA absents (rétrocochléaire)"
        ],
        source: "Les Surdités - Module 1"
      },
      {
        id: "fm_audio_03",
        title: "Syndromes génétiques et surdité — Résumé",
        content: "30% des surdités génétiques sont syndromiques. Principaux syndromes : Waardenburg (défaut de pigmentation, mèche blanche, mutation PAX3, autosomique dominant, surdité de perception). Usher (surdité + rétinite pigmentaire ; type I = congénitale profonde + troubles vestibulaires, type II = congénitale modérée-sévère sans trouble vestibulaire, type III = progressive postlinguale). Pendred (surdité progressive fluctuante + élargissement aqueduc vestibulaire + goitre thyroïdien). CHARGE (Colobome, Heart, Atrésie choanes, Retard croissance, Genital, Ear). Treacher-Collins (dysostose mandibulo-faciale, surdité de transmission). 70% des surdités génétiques sont NON syndromiques (>200 gènes, GJB2/Connexine 26 = 15-40%).",
        keyPoints: [
          "30% syndromiques : Waardenburg (PAX3, pigmentation), Usher (surdité+rétinite), Pendred (fluctuante+thyroïde), CHARGE, Treacher-Collins",
          "70% non syndromiques : >200 gènes, GJB2/Connexine 26 = 15-40%",
          "Usher I : profonde + vestibulaire ; II : modérée-sévère stable ; III : progressive postlinguale",
          "Pendred : fluctuante → IC pour stabiliser",
          "Connexine 26 : pas de troubles associés, bon pronostic IC"
        ],
        source: "Les Surdités - Module 1"
      },
      {
        id: "fm_audio_04",
        title: "Lecture de l'audiogramme",
        content: "L'audiogramme tonal représente les seuils auditifs en conduction aérienne (CA) et osseuse (CO). Axe horizontal : fréquences de 250 à 4000 Hz (voire 8000 Hz). Axe vertical : intensité de 0 à 120 dB (valeurs descendantes). CA : écouteurs (son passe par OE→OM→OI). CO : vibreur sur mastoïde (son transmet directement à l'OI). Rinne = écart CA-CO : si CO > CA → surdité de transmission (Rinne absent). Si CA et CO abaissées ensemble → surdité de perception (Rinne présent). Masquage (masking) : bruit blanc dans meilleure oreille pour tester l'autre isolément. Perte moyenne = (500+1000+2000+4000)/4, uniquement si courbe uniforme, en CA, par oreille. Banane de la parole : zone >40 dB où se situent la plupart des sons de parole.",
        keyPoints: [
          "Horizontal = fréquences (250-4000 Hz) ; Vertical = intensité (0-120 dB)",
          "CA = écouteurs ; CO = vibreur mastoïde",
          "Rinne = écart CA-CO ; absent si CO>CA (transmission)",
          "Masquage = bruit blanc dans meilleure oreille",
          "Perte moyenne = (500+1000+2000+4000)/4 (si courbe uniforme, CA, par oreille)",
          "Banane de la parole >40 dB"
        ],
        source: "Les Surdités - Module 1"
      },
      {
        id: "fm_audio_05",
        title: "Âge d'apparition de la surdité",
        content: "L'âge de survenue de la surdité conditionne le pronostic langagier. (1) Surdité prélinguale : avant l'acquisition du langage (naissance). Aucune exposition au langage oral. Conséquences : absence de babillage, absence de précurseurs du langage. Appareillage précoce crucial. (2) Surdité pétrilinguale : pendant l'acquisition du langage (1-3 ans). L'enfant a été exposé au langage (babillage, premiers mots) mais l'acquisition est en cours. Risque de régression. (3) Surdité postlinguale/tardive : après acquisition du langage. Peut être brutale ou progressive. L'enfant a acquis le langage oral. L'enjeu est le maintien de l'intelligibilité et de la communication. Remarque : pour les surdités acquises, l'étiologie peut être traumatique, infectieuse, médicamenteuse, tumorale ou liée à l'âge (presbyacousie).",
        keyPoints: [
          "Prélinguale : avant langage (naissance), pas d'exposition → appareillage urgent",
          "Pétrilinguale : pendant acquisition (1-3 ans), risque de régression → appareillage rapide",
          "Postlinguale : après langage, maintien intelligibilité",
          "Étiologies acquises : traumatique, infectieuse, médicamenteuse, tumorale, âge (presbyacousie)",
          "80% enfants sourds profonds reçoivent IC ; 95% ont parents entendants"
        ],
        source: "Les Surdités - Module 1"
      }
    ]
  };

  // ==================== 3. VRAI/FAUX ====================
  A.vraiFaux = {
    psycho: [
      {
        id: "vf_psycho_01",
        statement: "Le syndrome d'Asperger se caractérise par un retard de langage.",
        answer: false,
        explanation: "Le syndrome d'Asperger (désormais TSA sans déficits intellectuel et de langage dans le DSM-5) se caractérise par l'ABSENCE de retard de langage et l'absence de déficit intellectuel. C'est précisément ce qui le distinguait de l'autisme infantile dans le DSM-IV.",
        source: "TSA Partie 1"
      },
      {
        id: "vf_psycho_02",
        statement: "Selon le DSM-5, le critère A du TSA exige la présence de 3 sous-critères sur 3.",
        answer: true,
        explanation: "Le critère A du DSM-5 exige bien la présence des 3 sous-critères : (1) déficits de réciprocité socio-émotionnelle, (2) déficits de communication non verbale, (3) déficits du développement et du maintien des relations.",
        source: "TSA Partie 1"
      },
      {
        id: "vf_psycho_03",
        statement: "La prévalence du TSA est de 1 fille pour 3-4 garçons.",
        answer: true,
        explanation: "Le sex-ratio du TSA est de 3 à 4 garçons pour 1 fille. La prévalence globale est d'environ 1/100 enfants.",
        source: "TSA Partie 1"
      },
      {
        id: "vf_psycho_04",
        statement: "La théorie de la cohérence centrale de Frith (1989) décrit une capacité supérieure d'intégration globale dans le TSA.",
        answer: false,
        explanation: "La théorie de la cohérence centrale de Frith (1989) décrit au contraire une DIFFICULTÉ à intégrer les informations globales (voir l'ensemble) avec une analyse fine des détails isolés. Il s'agit d'un déficit de traitement global.",
        source: "TSA Partie 1"
      },
      {
        id: "vf_psycho_05",
        statement: "L'attention conjointe est systématiquement déficitaire dans le TSA.",
        answer: true,
        explanation: "L'attention conjointe (capacité à partager un focus d'attention avec autrui sur un objet/événement) est systématiquement déficitaire dans le TSA et constitue un signe clinique précoce majeur.",
        source: "TSA Partie 2 - Communication & Habiletés sociales"
      },
      {
        id: "vf_psycho_06",
        statement: "Dans le TSA, la phonologie et la syntaxe sont généralement les domaines les plus sévèrement atteints.",
        answer: false,
        explanation: "Dans le TSA, la phonologie et la syntaxe sont généralement MOINS affectées que la sémantique et la pragmatique. Les déficits touchent principalement la compréhension verbale, le langage idiosyncrasique, et l'usage social du langage.",
        source: "TSA Partie 2 - Communication & Habiletés sociales"
      },
      {
        id: "vf_psycho_07",
        statement: "Le Test de Sally-Anne évalue la Théorie de l'Esprit de 1er ordre et est normalement réussi vers 4 ans.",
        answer: true,
        explanation: "Le test de Sally-Anne est un test classique de fausse croyance évaluant la ToM de 1er ordre. Les enfants au développement typique le réussissent vers 4 ans. Il est déficitaire dans le TSA.",
        source: "TSA Partie 2 - Communication & Habiletés sociales"
      },
      {
        id: "vf_psycho_08",
        statement: "Le ComVoor (ComFor-2) est un outil de dépistage précoce du TSA à 18 mois.",
        answer: false,
        explanation: "Le ComVoor (ComFor-2) est un outil d'évaluation de la communication réceptive chez les personnes non verbales ou à faible niveau verbal avec autisme. Il cible le niveau de représentation visuelle et oriente le choix de la CAA. L'outil de dépistage précoce à 18 mois est le CHAT.",
        source: "TSA Partie 2 - Communication & Habiletés sociales"
      },
      {
        id: "vf_psycho_09",
        statement: "L'étiologie du TSA est multifactorielle, impliquant environ 40% de facteurs génétiques et 60% de facteurs environnementaux.",
        answer: true,
        explanation: "Selon le modèle intégratif actuel, le TSA résulte d'une combinaison de facteurs génétiques (~40%) et environnementaux (~60% : prématurité, CMV, toxoplasmose, rubéole). La concordance chez les jumeaux monozygotes (60-90%) vs dizygotes (0-30%) soutient la composante génétique.",
        source: "TSA Partie 1"
      },
      {
        id: "vf_psycho_10",
        statement: "Le trouble de la communication sociale (pragmatique) se distingue du TSA par la présence de comportements restreints et répétitifs.",
        answer: false,
        explanation: "Le trouble de la communication sociale (pragmatique) se distingue du TSA par l'ABSENCE de comportements restreints et répétitifs. Les personnes avec TCSP présentent un intérêt social fort, une imitation et un faire-semblant préservés.",
        source: "Autism, Language Disorder, and Social (Pragmatic) Communication Disorder (Simms & Jin, 2015)"
      },
      {
        id: "vf_psycho_11",
        statement: "Selon Grandin (2000), les sensations auditives et tactiles peuvent être vécues comme une souffrance entraînant un retrait chez certaines personnes avec TSA.",
        answer: true,
        explanation: "Grandin (2000) décrit que l'hyperesthésie auditive et tactile est vécue comme une souffrance chez certaines personnes TSA, entraînant un retrait du monde extérieur. Cela explique en partie les comportements de repli.",
        source: "TSA Partie 1"
      },
      {
        id: "vf_psycho_12",
        statement: "La BECS (Batterie d'Évaluation Cognitive et Socio-émotionnelle) est destinée aux enfants de 6 à 12 ans.",
        answer: false,
        explanation: "La BECS est conçue pour les enfants de 4 à 30 mois. Elle couvre 16 secteurs de développement répartis en 4 niveaux (4-8, 8-12, 12-18, 18-24 mois), dans les domaines cognitif et socio-émotionnel.",
        source: "TSA Partie 2 - Communication & Habiletés sociales"
      },
      {
        id: "vf_psycho_13",
        statement: "La mémoire autobiographique et épisodique est typique dans le TSA.",
        answer: false,
        explanation: "Selon le cours, la mémoire autobiographique et la mémoire épisodique sont ATYPIQUES dans le TSA. La mémoire de travail et d'autres formes de mémoire peuvent être variables selon les individus.",
        source: "TSA Partie 1"
      },
      {
        id: "vf_psycho_14",
        statement: "Les enfants avec TSA recourent principalement au jeu symbolique (faire semblant) selon les catégories de Piaget.",
        answer: false,
        explanation: "Selon Piaget, les enfants avec TSA recourent principalement au jeu SENSORI-MOTEUR, qui est pauvre et stéréotypé. Le jeu symbolique (faire semblant) est déficitaire dans le TSA.",
        source: "TSA Partie 1"
      },
      {
        id: "vf_psycho_15",
        statement: "La Théorie de l'Esprit est préservée dans le syndrome de Williams/Beuren malgré la déficience intellectuelle.",
        answer: true,
        explanation: "Dans le syndrome de Williams/Beuren et la trisomie 21, la ToM est relativement préservée malgré la déficience intellectuelle, contrastant avec le TSA où la ToM est spécifiquement déficitaire.",
        source: "TSA Partie 2 - Communication & Habiletés sociales"
      },
      {
        id: "vf_psycho_16",
        statement: "L'intervention précoce permet de réduire l'apparition des troubles du comportement dans le TSA.",
        answer: true,
        explanation: "Le cours indique clairement que l'intervention précoce permet de réduire l'apparition des troubles du comportement (sautes d'humeur, crises, automutilation, hyperactivité) dans le TSA.",
        source: "TSA Partie 1"
      },
      {
        id: "vf_psycho_17",
        statement: "L'écholalie dans le trouble du langage (SLI) est toujours non communicative, comme dans le TSA.",
        answer: false,
        explanation: "Selon Simms & Jin (2015), l'écholalie dans le trouble du langage (SLI) est COMMUNICATIVE. Dans le TSA, elle peut être non communicative et servir d'auto-stimulation. C'est une distinction clinique importante.",
        source: "Autism, Language Disorder, and Social (Pragmatic) Communication Disorder (Simms & Jin, 2015)"
      }
    ],
    geronto: [
      {
        id: "vf_geronto_01",
        statement: "La gériatrie et la gérontologie sont deux termes interchangeables.",
        answer: false,
        explanation: "La gériatrie est une spécialité médicale qui traite les maladies des personnes âgées. La gérontologie est la science qui étudie le vieillissement sous tous ses aspects (sociaux, démographiques, économiques, culturels, médicaux). Ces termes ne sont PAS interchangeables.",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_02",
        statement: "L'âgisme est une discrimination ou préjugé basé sur l'âge.",
        answer: true,
        explanation: "L'âgisme est bien une discrimination ou un préjugé basé sur l'âge, avec des stéréotypes négatifs sur l'incapacité et l'inutilité des personnes âgées. L'étude d'Adam (2016) a démontré la présence d'âgisme chez les professionnels de santé.",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_03",
        statement: "Le patient gériatrique est défini exclusivement par un âge supérieur à 75 ans.",
        answer: false,
        explanation: "L'âge n'est PAS le critère définissant le patient gériatrique. Le profil est défini par la coexistence de comorbidités, altération fonctionnelle, troubles cognitifs/psychologiques, polymédication, fragilité et syndromes gériatriques.",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_04",
        statement: "Le delirium (état confusionnel aigu) est un syndrome gériatrique.",
        answer: true,
        explanation: "Le delirium (état confusionnel aigu) est l'un des 4 syndromes gériatriques les plus fréquents, avec les chutes, l'incontinence et l'hypotension orthostatique. C'est une condition clinique qui ne correspond pas à une catégorie de maladie classique.",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_05",
        statement: "La fragilité est un processus irréversible.",
        answer: false,
        explanation: "Selon la SFGG, la fragilité est un processus dynamique et potentiellement RÉVERSIBLE. C'est pourquoi son identification précoce (pré-dépendance) est cruciale.",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_06",
        statement: "Un score de 3 critères sur 5 au phénotype de Fried correspond au statut « fragile ».",
        answer: true,
        explanation: "Selon le phénotype de Fried : 0 critère = robuste, 1-2 critères = pré-fragile, ≥3 critères = fragile. Un score de 3/5 correspond donc au statut « fragile ».",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_07",
        statement: "L'indice de fragilité de Rockwood est plus rapide à administrer que le phénotype de Fried.",
        answer: false,
        explanation: "L'indice de Rockwood (45-60 minutes pour 70-100 items) est significativement PLUS LONG que le phénotype de Fried (10-15 minutes pour 5 critères). Fried est un outil de dépistage, Rockwood une évaluation approfondie.",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_08",
        statement: "L'association EGM + équipe multidisciplinaire réduit la mortalité et l'institutionnalisation.",
        answer: true,
        explanation: "Les données probantes démontrent que l'association de l'Évaluation Gériatrique Multidimensionnelle (EGM/CGA) et du travail en équipe multidisciplinaire réduit significativement la mortalité, l'institutionnalisation, le déclin fonctionnel et les hospitalisations.",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_09",
        statement: "Le logopède en gériatrie intervient uniquement sur les troubles du langage oral.",
        answer: false,
        explanation: "Le logopède en gériatrie intervient sur la psychopathologie du langage et de la communication, ainsi que sur les troubles de la DÉGLUTITION (dysphagie). Ses rôles incluent identifier, évaluer, intervenir, informer, collaborer, former/éduquer.",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_10",
        statement: "L'échelle de Katz évalue les activités instrumentales de la vie quotidienne (utiliser le téléphone, gérer ses finances).",
        answer: false,
        explanation: "L'échelle de Katz évalue les AVQ de BASE (ADL) : se laver, s'habiller, aller aux toilettes, se déplacer, continence, alimentation. Les activités instrumentales (téléphone, finances, courses) sont évaluées par l'échelle de Lawton (IADL).",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_11",
        statement: "On parle de polymédication à partir de 5 médicaments.",
        answer: true,
        explanation: "La polymédication est définie par la prise simultanée de 5 médicaments ou plus. Elle est un critère du profil gériatrique et entraîne des risques accrus d'iatrogénie, de chutes et de confusion.",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_12",
        statement: "Le questionnaire FRAIL est un outil auto-rapporté de dépistage de la fragilité.",
        answer: true,
        explanation: "Le questionnaire FRAIL est un outil auto-rapporté simple évaluant 5 items : Fatigue, Résistance (monter 10 marches), Ambulation, Illnesses (>5 maladies), Loss of Weight (>5% en 6-12 mois).",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_13",
        statement: "La dysphagie répond à la définition d'un syndrome gériatrique.",
        answer: true,
        explanation: "La dysphagie répond à la définition d'un syndrome gériatrique car sa prévalence augmente avec l'âge, elle est plurifactorielle, impacte la qualité de vie, et la plainte principale peut ne pas représenter la condition sous-jacente.",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_14",
        statement: "L'albuminémie est un marqueur de dénutrition chez la personne âgée (seuil < 35 g/L).",
        answer: true,
        explanation: "L'albuminémie inférieure à 35 g/L est un marqueur biologique clé de dénutrition protéino-énergétique chez la personne âgée, aux côtés de la perte de poids (≥5% en 1 mois, ≥10% en 6 mois).",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_15",
        statement: "Le vieillissement est une maladie qu'il faut traiter médicalement.",
        answer: false,
        explanation: "Le vieillissement N'EST PAS une maladie. C'est un processus universel, irréversible, inéluctable, lent et progressif, influencé par la génétique et l'environnement.",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_16",
        statement: "La sarcopénie est une perte progressive de la masse et de la force musculaires contribuant à la fragilité.",
        answer: true,
        explanation: "La sarcopénie est une perte progressive et généralisée de la masse et de la force musculaires liée au vieillissement. Elle contribue directement à la fragilité physique (critères « faiblesse » et « lenteur » de Fried).",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_17",
        statement: "Le pantoprazole (IPP) peut être prescrit sans limite de durée chez la personne âgée.",
        answer: false,
        explanation: "Le pantoprazole et les IPP sont limités à une durée maximale de 6 mois chez la personne âgée pour prévenir les effets secondaires à long terme (infections, carences, fractures). Une réévaluation régulière est nécessaire.",
        source: "Gériatrie - Notes de cours"
      },
      {
        id: "vf_geronto_18",
        statement: "L'AEG (altération de l'état général) est un syndrome aspécifique révélateur d'une pathologie sous-jacente.",
        answer: true,
        explanation: "L'AEG est un syndrome aspécifique du sujet âgé (asthénie, anorexie, perte de poids, déclin fonctionnel) qui impose une EGM pour identifier la pathologie sous-jacente : infection, cancer, dépression, démence, iatrogénie.",
        source: "Gériatrie - Notes de cours"
      }
    ],
    audio: [
      {
        id: "vf_audio_01",
        statement: "La surdité de transmission peut atteindre une perte maximale de 80 dB.",
        answer: false,
        explanation: "La surdité de transmission (atteinte de l'oreille externe ou moyenne) est limitée à une perte maximale de 50 dB. Au-delà, il s'agit d'une surdité de perception ou mixte.",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_02",
        statement: "La surdité de perception est à la fois quantitative et qualitative.",
        answer: true,
        explanation: "La surdité de perception (neurosensorielle) touche l'oreille interne (cochlée) ou le nerf auditif. Elle est à la fois quantitative (perte en dB) et qualitative (distorsion, recrutement, mauvaise intelligibilité).",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_03",
        statement: "Selon la classification BIAP, une perte moyenne de 45 dB correspond à une surdité légère.",
        answer: false,
        explanation: "Une perte de 45 dB correspond à une surdité moyenne du 1er degré (41-55 dB). La surdité légère est définie de 21 à 40 dB.",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_04",
        statement: "60% des surdités sont d'origine génétique.",
        answer: true,
        explanation: "60% des surdités sont d'origine génétique (70% non syndromiques, 30% syndromiques). Les causes acquises représentent 15%, et 25% restent de cause inconnue.",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_05",
        statement: "La mutation GJB2 (Connexine 26) est associée à des troubles neurologiques sévères.",
        answer: false,
        explanation: "La mutation GJB2 (Connexine 26) est la plus fréquente des surdités non syndromiques (15-40%). Elle n'est PAS associée à d'autres troubles — seul l'organe de Corti est affecté. Le pronostic d'implant cochléaire est bon.",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_06",
        statement: "Le syndrome de Usher de type I associe une surdité congénitale profonde, des troubles de l'équilibre et une rétinite pigmentaire.",
        answer: true,
        explanation: "Le syndrome de Usher de type I associe : surdité congénitale profonde, troubles vestibulaires (marche vers 22 mois), et rétinite pigmentaire (difficultés de vision nocturne dès 7-8 ans). C'est la cause génétique la plus fréquente de surdi-cécité.",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_07",
        statement: "L'otite séromuqueuse contre-indique l'intervention logopédique.",
        answer: false,
        explanation: "L'otite séromuqueuse NE contre-indique PAS l'intervention logopédique — au contraire ! L'enfant a besoin de stimulation langagière, car la perte auditive (max 50 dB, transmission) entraîne un retard des représentations phonologiques.",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_08",
        statement: "La formule de calcul de la perte auditive moyenne est (500+1000+2000+4000)/4.",
        answer: true,
        explanation: "La perte auditive moyenne se calcule par (seuil 500 Hz + seuil 1000 Hz + seuil 2000 Hz + seuil 4000 Hz) / 4, en conduction aérienne, uniquement si la courbe est uniforme, et par oreille séparément.",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_09",
        statement: "Le taux de TSA est 4 fois plus élevé dans la population sourde (4%) que dans la population entendante (1%).",
        answer: true,
        explanation: "Selon Meinzen-Derr (2013), le taux de TSA est de 4% dans la population sourde contre 1% dans la population entendante, soit 4 fois plus. Le diagnostic de TSA chez l'enfant sourd est tardif et délicat.",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_10",
        statement: "Le Rinne correspond à la différence entre la conduction aérienne et la conduction osseuse.",
        answer: true,
        explanation: "Le Rinne correspond à l'écart entre la conduction aérienne (CA) et la conduction osseuse (CO). Si CO > CA → surdité de transmission (Rinne absent). Si CA et CO sont abaissées ensemble → surdité de perception (Rinne présent).",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_11",
        statement: "La méningite peut entraîner une ossification rapide de la cochlée, constituant une urgence pour l'implantation cochléaire.",
        answer: true,
        explanation: "La méningite peut entraîner une ossification rapide de la cochlée (labyrinthite ossifiante), ce qui constitue une URGENCE pour l'implantation cochléaire avant que l'ossification ne rende l'intervention impossible.",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_12",
        statement: "En Belgique, l'appareillage auditif est remboursé à partir d'une perte de 20 dB.",
        answer: false,
        explanation: "En Belgique, l'appareillage auditif est remboursé à partir d'une perte de 35 dB. Le remboursement logopédique (trouble de l'ouïe) nécessite une perte d'au moins 40 dB aux DEUX oreilles.",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_13",
        statement: "La banane de la parole se situe généralement au-dessus de 40 dB sur l'audiogramme.",
        answer: true,
        explanation: "La « banane de la parole » est la zone de l'audiogramme où se situent la plupart des sons de la parole, généralement au-dessus de 40 dB. Cela signifie qu'avec une perte auditive moyenne, les sons de la parole ne sont pas perçus.",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_14",
        statement: "L'ANSD (neuropathie auditive) se caractérise par des OEA absentes et des PEA présents.",
        answer: false,
        explanation: "L'ANSD se caractérise par une DISSOCIATION entre des OEA PRÉSENTES (cellules ciliées externes fonctionnelles) et des PEA ABSENTS ou très altérés (défaut de synchronisation neurale rétrocochléaire).",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_15",
        statement: "La convention « langage oral » exige une perte auditive ne dépassant pas 40 dB à la meilleure oreille.",
        answer: true,
        explanation: "La convention « langage oral » exige que la perte auditive ne dépasse pas 40 dB à la meilleure oreille. Au-delà de 40 dB aux deux oreilles, l'enfant relève de la convention « trouble de l'ouïe ».",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_16",
        statement: "Le syndrome de Pendred entraîne une surdité progressive avec fluctuations.",
        answer: true,
        explanation: "Le syndrome de Pendred se caractérise par une surdité progressive avec fluctuations, un élargissement de l'aqueduc vestibulaire et une atteinte thyroïdienne. Les fluctuations entraînent un mauvais ancrage auditif et un mauvais repérage temporo-spatial.",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_17",
        statement: "30% des enfants sourds profonds présentent une atteinte vestibulaire partielle selon Jacot et al. (2009).",
        answer: true,
        explanation: "Selon Jacot et al. (2009), 30% des enfants sourds profonds présentent une atteinte vestibulaire partielle et 20% une aréflexie bilatérale. Les conséquences incluent retard psychomoteur et troubles visuo-attentionnels.",
        source: "Les Surdités - Module 1"
      },
      {
        id: "vf_audio_18",
        statement: "La surdité centrale est causée par une lésion de l'oreille moyenne.",
        answer: false,
        explanation: "La surdité centrale est causée par une lésion CORTICALE ou du tronc cérébral, non par une lésion de l'oreille moyenne. L'entrée du son est normale mais la transmission au cerveau est perturbée (défaut de traitement du signal).",
        source: "Les Surdités - Module 1"
      }
    ]
  };

  // ==================== 4. GLOSSAIRE ====================
  A.glossaire = [
    { term: "TSA", definition: "Trouble du Spectre de l'Autisme. Trouble neurodéveloppemental caractérisé par des déficits persistants de la communication sociale (critère A) et des comportements/intérêts restreints et répétitifs (critère B), selon le DSM-5." },
    { term: "TED", definition: "Troubles Envahissants du Développement. Ancienne terminologie du DSM-IV regroupant l'autisme, le syndrome d'Asperger, le TED non spécifié et le trouble désintégratif de l'enfance. Fusionnés sous l'appellation TSA dans le DSM-5." },
    { term: "DSM-5", definition: "Diagnostic and Statistical Manual of Mental Disorders, 5e édition (2015). Manuel diagnostique de référence classant le TSA parmi les troubles neurodéveloppementaux." },
    { term: "Cohérence centrale", definition: "Théorie de Frith (1989) décrivant la difficulté des personnes avec TSA à intégrer les informations globales tout en présentant une analyse fine des détails isolés. Déficit de traitement global au profit du traitement local." },
    { term: "Théorie de l'Esprit (ToM)", definition: "Capacité cognitive à inférer les états affectifs et cognitifs d'autrui (croyances, désirs, intentions). La ToM de 1er ordre (« Je pense que X... ») s'acquiert vers 4 ans. La ToM de 2nd ordre (« Je pense que A pense que B... ») vers 6-7 ans. Déficitaire dans le TSA." },
    { term: "Attention conjointe", definition: "Capacité à partager un focus d'attention avec autrui sur un objet ou événement. Prérequis à la communication systématiquement déficitaire dans le TSA. Signe clinique précoce majeur." },
    { term: "Écholalie", definition: "Répétition en écho de mots ou phrases entendus. Peut être immédiate ou différée. Dans le TDL, l'écholalie est communicative ; dans le TSA, elle peut être non communicative (auto-stimulation) selon Simms & Jin (2015)." },
    { term: "TCSP", definition: "Trouble de la Communication Sociale (Pragmatique). Nouvelle entité du DSM-5 caractérisée par des déficits de la communication sociale SANS comportements restreints/répétitifs. Intérêt social fort, imitation et faire-semblant préservés." },
    { term: "Habiletés sociales", definition: "Selon Baghdadli & Brisot-Dubois (2011) : ensemble de capacités permettant de percevoir et comprendre les messages, choisir une réponse et l'émettre de façon appropriée. Se subdivisent en habiletés de communication, d'affirmation de soi, personnelles/émotionnelles, interpersonnelles et liées au contexte." },
    { term: "Pragmatique (ASHA 2016)", definition: "Trois dimensions majeures : (1) usage du langage à des fins sociales, (2) adaptation au contexte et à l'interlocuteur, (3) respect des règles conversationnelles (tours de parole, maintien du thème, réparation)." },
    { term: "Fragilité (SFGG)", definition: "Réduction des capacités de réserve et d'adaptation aux événements stressants, partiellement liée au vieillissement. Processus dynamique et potentiellement réversible. Concept multidimensionnel (social, physique, psychologique, environnemental)." },
    { term: "Fragilité (Fried)", definition: "Phénotype de fragilité physique évaluant 5 critères : perte de poids involontaire, épuisement, faiblesse (grip strength), lenteur (vitesse de marche), sédentarité. Score 0 = robuste, 1-2 = pré-fragile, ≥3 = fragile. Durée : 10-15 min." },
    { term: "Indice de Rockwood", definition: "Indice de fragilité multidimensionnel continu (score 0 à 1) couvrant 9 domaines (cognition, humeur, motivation, motricité, équilibre, AVQ, nutrition, social, comorbidités) avec 70-100 variables. Sensible aux changements subtils. Durée : 45-60 min." },
    { term: "Syndrome gériatrique", definition: "Condition clinique ne correspondant pas aux catégories de maladies classiques. Origine plurifactorielle. La plainte principale peut ne pas représenter la condition sous-jacente. Principaux : delirium, chutes, incontinence, hypotension orthostatique, dysphagie." },
    { term: "Delirium", definition: "État confusionnel aigu. Syndrome gériatrique fréquent, souvent d'origine iatrogène ou infectieuse. Urgence diagnostique chez la personne âgée." },
    { term: "Âgisme", definition: "Discrimination ou préjugé basé sur l'âge, avec stéréotypes négatifs sur l'incapacité et l'inutilité des personnes âgées. L'âgisme « bienveillant » (excès de politesse, parole ralentie/forte) peut paradoxalement diminuer les performances." },
    { term: "EGM / CGA", definition: "Évaluation Gériatrique Multidimensionnelle / Comprehensive Geriatric Assessment. Évaluation globale déterminant l'admission en service gériatrique et identifiant l'accumulation de facteurs de risque du profil gériatrique." },
    { term: "Polymédication", definition: "Prise simultanée de ≥5 médicaments. Un des critères du profil gériatrique. Risques accrus d'interactions médicamenteuses, iatrogénie, chutes et confusion." },
    { term: "Sarcopénie", definition: "Perte progressive et généralisée de la masse et de la force musculaires liée au vieillissement. Contribue directement à la fragilité physique (critères faiblesse et lenteur de Fried)." },
    { term: "Dénutrition", definition: "État de carence protéino-énergétique objectivé par une perte de poids (≥5% en 1 mois, ≥10% en 6 mois) et/ou une albuminémie < 35 g/L. Fréquente chez la personne âgée fragile." },
    { term: "AEG", definition: "Altération de l'État Général. Syndrome aspécifique du sujet âgé associant asthénie, anorexie, perte de poids et déclin fonctionnel. Motif fréquent d'admission en gériatrie." },
    { term: "PIL", definition: "Projet d'Intervention Logopédique. Peut être restaurateur (récupération), réorganisateur (compensation) ou palliatif (maintien/confort), en intervention directe (patient) ou indirecte (entourage/équipe)." },
    { term: "Surdité de transmission", definition: "Perte auditive par atteinte de l'oreille externe et/ou moyenne (CAE, tympan, osselets). Perte maximale de 50 dB. Principalement quantitative. Rinne : CO > CA (Rinne absent)." },
    { term: "Surdité de perception", definition: "Perte auditive neurosensorielle par atteinte de l'oreille interne (cochlée/organe de Corti) ou du nerf auditif. Quantitative ET qualitative. CA et CO affectées. Peut être endocochléaire ou rétrocochléaire (ANSD)." },
    { term: "Surdité centrale", definition: "Perte auditive par lésion corticale ou du tronc cérébral entraînant un défaut de traitement du signal. Entrée du son normale mais transmission au cerveau perturbée. Audiométrie vocale très mauvaise malgré courbe tonale modérée." },
    { term: "Presbyacousie", definition: "Surdité neurosensorielle liée au vieillissement (cause acquise). Appareillage précoce recommandé pour prévenir isolement social, déclin cognitif et fragilité." },
    { term: "ANSD", definition: "Auditory Neuropathy Spectrum Disorder. Neuropathie/désynchronisation auditive caractérisée par une dissociation OEA présentes / PEA absents. Atteinte rétrocochléaire (nerf, synapse, ganglion spiral). Compréhension de la parole toujours altérée." },
    { term: "BIAP", definition: "Bureau International d'Audiophonologie. Classification des degrés de perte auditive : normale 0-20 dB, légère 21-40 dB, moyenne 41-70 dB, sévère 71-90 dB, profonde 91-120 dB, cophose >120 dB." },
    { term: "Rinne", definition: "Différence entre la conduction aérienne (CA) et la conduction osseuse (CO) sur l'audiogramme. Rinne absent (CO > CA) = surdité de transmission. Rinne présent (CA et CO abaissées) = surdité de perception." },
    { term: "Banane de la parole", definition: "Zone de l'audiogramme (>40 dB) où se situent la plupart des sons de la parole. Une perte auditive moyenne signifie que les sons de la parole ne sont pas ou mal perçus." }
  ];

  // ==================== 5. CAS CLINIQUES ADDITIONNELS ====================

  // --- INTER (inter_04, inter_05) ---
  A.clinicalCases.inter.push(
    {
      id: "inter_04",
      title: "Amine, 3 ans : trouble du langage, suspicion de TSA et otite séromuqueuse chronique",
      subject: "Psychologie / Audiologie",
      patient: { age: "3 ans", sexe: "M", description: "Enfant adressé pour retard sévère de langage et suspicion de TSA. Antécédents d'otites séromuqueuses récurrentes." },
      anamnese: "Amine, 3 ans, est adressé en bilan par la crèche pour un retard sévère de langage. Il prononce moins de 10 mots, ne fait pas de phrases, et a arrêté de babiller vers 18 mois. Il a présenté 4 épisodes d'otite séromuqueuse depuis l'âge de 12 mois, le dernier datant d'il y a 2 mois. Les parents rapportent qu'Amine « ne répond pas toujours à son prénom », « semble dans sa bulle », aligne ses petites voitures pendant des heures sans jouer avec, et fait des crises quand on change ses routines. Il ne pointe pas du doigt pour montrer. En revanche, il recherche les câlins de sa mère et sourit en la voyant. Un audiogramme récent montre une perte de transmission bilatérale de 35 dB, compatible avec des séquelles d'otites séromuqueuses.",
      questions: [
        {
          question: "Quels signes chez Amine pourraient être attribuables aux otites séromuqueuses et non à un TSA ?",
          options: [
            "A. L'alignement répétitif d'objets et l'intolérance à la modification des routines",
            "B. Le retard de langage et l'absence de réponse au prénom (inconstante)",
            "C. L'absence de pointage protodéclaratif et d'attention conjointe",
            "D. Les crises et l'agitation lors de modifications de l'environnement familier"
          ],
          correct: 1,
          explanation: "L'otite séromuqueuse chronique entraîne une perte auditive fluctuante de type transmission (max 50 dB) qui a des conséquences directes sur le développement du langage : retard des représentations phonologiques, arrêt de l'évolution du langage, absence de perception des conversations parallèles. Par ailleurs, l'enfant réagit aux sons et à la voix, mais de manière inconstante (réponse au prénom fluctuante). L'alignement stéréotypé (A), l'absence de pointage (C) et l'intolérance au changement (D) sont davantage évocateurs d'un TSA.",
          source: "Les Surdités - Module 1 & TSA Partie 1"
        },
        {
          question: "L'absence de pointage déclaratif, l'alignement stéréotypé des voitures et l'intolérance au changement chez Amine évoquent :",
          options: [
            "A. Des conséquences typiques d'une privation auditive fluctuante liée aux otites",
            "B. Des signes évoquant un possible TSA, car ces comportements ne sont pas expliqués par la perte auditive de transmission",
            "C. Un trouble développemental du langage sans particularité comportementale associée",
            "D. Un trouble de la relation et de l'attachement"
          ],
          correct: 1,
          explanation: "L'absence de pointage déclaratif (critère A du DSM-5), l'alignement stéréotypé des voitures (intérêts restreints, critère B) et l'intolérance au changement (sameness, critère B) sont des signes cardinaux du TSA qui NE sont PAS expliqués par une perte auditive de transmission de 35 dB. Ces comportements justifient une évaluation diagnostique approfondie incluant un ADOS-2.",
          source: "TSA Partie 1"
        },
        {
          question: "Sachant que les altérations auditives peuvent persister jusqu'à 3 mois après la résolution d'une otite séromuqueuse, quelle attitude clinique est la plus appropriée ?",
          options: [
            "A. Attendre la stabilisation de la perte auditive avant d'initier un suivi logopédique",
            "B. Poursuivre le bilan diagnostique TSA tout en maintenant une stimulation langagière adaptée, l'otite séromuqueuse ne contre-indiquant PAS l'intervention logopédique",
            "C. Traiter les otites séromuqueuses en priorité et réévaluer les signes comportementaux après normalisation auditive",
            "D. Proposer une pose d'aérateurs tympaniques et surseoir au bilan diagnostique TSA"
          ],
          correct: 1,
          explanation: "L'otite séromuqueuse NE contre-indique PAS l'intervention logopédique — au contraire, l'enfant a besoin de stimulation langagière pendant cette période. Il est essentiel de poursuivre le bilan diagnostique TSA en parallèle (ADOS-2, bilan sensoriel, évaluation développementale) car les signes comportementaux (pointage, stéréotypies, intolérance au changement) persistent indépendamment de la fluctuation auditive.",
          source: "Les Surdités - Module 1 & TSA Partie 1"
        }
      ],
      analysis: "Le cas d'Amine illustre la complexité du diagnostic différentiel entre trouble du langage secondaire à une privation auditive fluctuante (otites séromuqueuses) et TSA. La perte de transmission de 35 dB explique partiellement le retard de langage et la fluctuation de la réponse au prénom. Cependant, l'absence de pointage déclaratif, les stéréotypies (alignement), les intérêts restreints et l'intolérance au changement sont des signes cardinaux du TSA non expliqués par la perte auditive. L'otite séromuqueuse étant bénigne et non douloureuse, elle ne contre-indique PAS l'intervention logopédique. Le bilan doit être mené en parallèle : audiologique (suivi de la perte), diagnostique (ADOS-2), développemental (BECS/ECSP) et sensoriel (Dunn). L'attention conjointe et le pointage déclaratif sont des cibles prioritaires d'intervention précoce, que le diagnostic de TSA soit confirmé ou non.",
      sources: ["TSA Partie 1", "Les Surdités - Module 1", "TSA Partie 2 - Communication & Habiletés sociales"]
    },
    {
      id: "inter_05",
      title: "Mme Chevalier, 84 ans : presbyacousie non appareillée, chutes à répétition et suspicion de déclin cognitif",
      subject: "Gérontologie / Audiologie",
      patient: { age: "84 ans", sexe: "F", description: "Veuve depuis 10 ans. AVC ischémique mineur il y a 3 ans sans séquelle motrice notable. Chutes à répétition (3 en 6 mois)." },
      anamnese: "Mme Chevalier, 84 ans, vit seule en appartement au 3e étage avec ascenseur. Elle est veuve depuis 10 ans. Antécédents : HTA, AVC ischémique mineur il y a 3 ans (sans séquelle motrice notable), arthrose lombaire. Elle a chuté 3 fois en 6 mois : une fois en se levant la nuit, une fois dans la rue, une fois dans sa salle de bain. Son fils rapporte qu'elle « entend de moins en moins bien », fait répéter constamment, ne répond plus au téléphone, a cessé ses activités sociales (chorale, club de lecture). La télévision est réglée très fort. Le médecin traitant évoque un possible déclin cognitif. Audiogramme : perte neurosensorielle bilatérale de 58 dB en moyenne (presbyacousie), non appareillée. Fried : perte de poids de 3 kg en 1 an, fatigue, sédentarité. Albumine à 34 g/L. MMSE : 24/30 (dont plusieurs items échoués semblant liés à la compréhension auditive).",
      questions: [
        {
          question: "Quel score de Fried Mme Chevalier présente-t-elle et quel est son statut ?",
          options: [
            "A. 1/5 — Robuste",
            "B. 2/5 — Pré-fragile",
            "C. 3/5 — Fragile",
            "D. 5/5 — Fragile"
          ],
          correct: 2,
          explanation: "Mme Chevalier présente 3 critères de Fried : (1) perte de poids de 3 kg en 1 an (proche du seuil mais combinée à l'albumine basse), (2) fatigue auto-rapportée, (3) sédentarité (arrêt de la chorale et des activités). La lenteur et la faiblesse ne sont pas documentées, mais ≥3 critères suffisent au diagnostic de fragilité. Score 3/5 = fragile.",
          source: "Gériatrie - Notes de cours"
        },
        {
          question: "Quel lien peut-on établir entre la presbyacousie non appareillée (58 dB) et les chutes à répétition de Mme Chevalier ?",
          options: [
            "A. Les chutes sont principalement d'origine mécanique et posturale, sans lien avec la surdité",
            "B. La perte auditive neurosensorielle bilatérale altère le système vestibulaire et les repères spatiaux (30% des surdités ont une atteinte vestibulaire), contribuant au risque de chute, tandis que l'isolement auditif aggrave la fragilité",
            "C. La presbyacousie stimule la proprioception et améliore l'équilibre compensatoire",
            "D. Les chutes sont essentiellement liées aux séquelles vestibulaires de l'AVC ancien"
          ],
          correct: 1,
          explanation: "La presbyacousie non appareillée altère potentiellement le système vestibulaire (30% des surdités de perception ont une atteinte vestibulaire partielle). La perte d'informations auditives spatiales (repères sonores environnementaux) contribue au risque de chute. De plus, l'isolement social induit par la surdité non appareillée aggrave la fragilité physique, créant un cercle vicieux. Les chutes sont plurifactorielles (B) et non exclusivement mécaniques (A) ou liées à l'AVC (D).",
          source: "Les Surdités - Module 1 & Gériatrie - Notes de cours"
        },
        {
          question: "Quel biais diagnostique le MMSE à 24/30 peut-il refléter chez Mme Chevalier ?",
          options: [
            "A. Un score dans la norme pour une personne de 84 ans, sans signification clinique particulière",
            "B. Une possible sous-estimation des capacités cognitives réelles due à la perte auditive non appareillée (items mal entendus = réponses erronées), nécessitant une évaluation neuropsychologique adaptée APRÈS appareillage",
            "C. Un indicateur fiable de démence de type Alzheimer au stade modéré",
            "D. Un syndrome dépressif sévère avec ralentissement psychomoteur"
          ],
          correct: 1,
          explanation: "Le MMSE à 24/30 peut refléter une sous-estimation des capacités cognitives réelles de Mme Chevalier : certains items peuvent être échoués non par déficit cognitif mais par mauvaise perception auditive des consignes (58 dB de perte non appareillée). Une évaluation neuropsychologique adaptée APRÈS appareillage est indispensable pour distinguer un véritable déclin cognitif d'une pseudo-démence par privation sensorielle. L'âgisme pourrait conduire à un diagnostic hâtif de démence (C).",
          source: "Gériatrie - Notes de cours & Les Surdités - Module 1"
        }
      ],
      analysis: "Le cas de Mme Chevalier illustre le concept de « cascade gériatrique » : une presbyacousie non appareillée (58 dB, moyenne 2e degré BIAP) entraîne un isolement social (arrêt des activités), une perte de repères spatiaux contribuant aux chutes (3 en 6 mois), une possible sous-estimation cognitive (MMSE 24/30 biaisé par la perte auditive), et une fragilité physique (3 critères de Fried, albumine basse). Les chutes sont plurifactorielles : vestibulaires, sensorielles, environnementales, sarcopéniques. L'appareillage auditif précoce est une intervention gériatrique à part entière, au même titre que la kinésithérapie, le bilan de déglutition et l'adaptation du domicile. L'EGM en équipe multidisciplinaire (gériatre, ORL, audioprothésiste, logopède, neuropsychologue, kiné, ergothérapeute) permettra une réversibilité partielle de la fragilité.",
      sources: ["Gériatrie - Notes de cours", "Les Surdités - Module 1"]
    }
  );

  // --- AUDIORÉÉDUCATION (audio_reed_03, audio_reed_04) ---
  A.clinicalCases.audioReed.push(
    {
      id: "audio_reed_03",
      title: "Inès, 4 ans : surdité de perception bilatérale profonde post-méningite (ossification cochléaire débutante)",
      audiogramDescription: "Audiométrie tonale post-méningite : absence de réponse à 250, 500, 1000, 2000, 4000 Hz jusqu'à 100 dB en CA et CO bilatérale. PEA absents à 95 dB. OEA absentes. Scanner des rochers : ossification débutante de la cochlée droite, cochlée gauche perméable. Diagnostic : surdité de perception bilatérale profonde post-méningite (pétrilinguale).",
      hearingLoss: { type: "Perception (neurosensorielle) bilatérale post-méningite", degree: "Profonde", ear: "Bilatérale", averageLoss: ">100 dB" },
      questions: [
        {
          question: "Pourquoi l'ossification cochléaire débutante chez Inès constitue-t-elle une URGENCE thérapeutique ?",
          options: [
            "A. Parce que l'ossification stabilise la cochlée et facilite l'insertion du porte-électrodes",
            "B. Parce que l'ossification progressive de la cochlée peut rendre l'implantation cochléaire impossible ou moins efficace si elle est trop avancée",
            "C. Parce que l'ossification requiert une mastoïdectomie préalable à l'implantation",
            "D. Parce que l'implantation cochléaire est plus efficace une fois l'ossification stabilisée"
          ],
          correct: 1,
          explanation: "L'ossification cochléaire post-méningite (labyrinthite ossifiante) progresse rapidement et peut obstruer la cochlée, rendant l'insertion du porte-électrodes de l'implant cochléaire difficile voire impossible. C'est une URGENCE chirurgicale : il faut implanter AVANT que l'ossification ne devienne trop étendue. Les résultats de l'IC post-méningite sont mitigés, d'où l'importance de la précocité.",
          source: "Les Surdités - Module 1"
        },
        {
          question: "Inès avait 3 ans et demi lors de la méningite et avait déjà développé du langage (babillage, 50 mots, début de phrases). De quel type de surdité s'agit-il selon l'âge de survenue ?",
          options: [
            "A. Surdité prélinguale congénitale",
            "B. Surdité pétrilinguale — l'enfant a déjà été exposé au langage, le langage était en pleine acquisition, le risque de régression est majeur sans IC rapide",
            "C. Surdité postlinguale précoce",
            "D. Surdité postlinguale tardive de l'enfance"
          ],
          correct: 1,
          explanation: "La surdité d'Inès est pétrilinguale (entre 1 et 3-4 ans). Elle avait déjà développé du babillage et environ 50 mots avec début de phrases, ce qui signifie qu'elle a été exposée au langage. Le risque de régression du langage est majeur sans implantation cochléaire rapide. Une prise en charge logopédique intensive post-IC est indispensable pour réactiver et développer les acquis langagiers.",
          source: "Les Surdités - Module 1"
        }
      ],
      reeducation: {
        goals: [
          "Implantation cochléaire bilatérale en urgence avant progression de l'ossification",
          "Réactiver et maintenir le stock lexical acquis avant la méningite (50 mots, débuts de phrases)",
          "Stimuler la discrimination auditive et la perception phonémique post-IC",
          "Prévenir la régression du langage et favoriser la reprise de l'évolution langagière",
          "Soutien psychologique de l'enfant et de la famille face au traumatisme de la méningite et de la perte auditive brutale"
        ],
        methods: [
          "Stimulation auditive intensive post-IC : hiérarchie détection → discrimination → identification → compréhension",
          "Travail phonologique ciblé sur les confusions potentielles liées à l'IC",
          "Utilisation du LPC en phase de réglages pour sécuriser la réception phonologique",
          "Approche multimodale temporaire : gestes, pictogrammes, LPC en attendant la stabilisation des réglages",
          "Séances conjointes parents-enfant pour le bain de langage et la stimulation naturelle",
          "Coordination étroite ORL-audioprothésiste-logopède pour les réglages successifs de l'IC"
        ],
        adaptations: [
          "Environnement calme avec réduction maximale du bruit de fond (tapis, rideaux, portes fermées)",
          "Positionnement face à l'enfant avec appui visuel (lecture labiale, expressions faciales, gestes)",
          "Vérification pluriquotidienne du bon fonctionnement du processeur et des antennes",
          "Création d'un « carnet de communication » transitoire pour les moments sans IC (bain, nuit)",
          "Sensibilisation de l'entourage familial et scolaire (si scolarisation) au fonctionnement de l'IC",
          "Surveillance régulière de l'absence de progression de l'ossification par imagerie"
        ]
      }
    },
    {
      id: "audio_reed_04",
      title: "Sarah, 7 ans : surdité de perception bilatérale sévère dans le cadre d'un syndrome de Usher de type II",
      audiogramDescription: "Audiométrie tonale : surdité de perception bilatérale descendante symétrique. Seuils CA/CO : 40 dB à 250 Hz, 55 dB à 500 Hz, 65 dB à 1000 Hz, 75 dB à 2000 Hz, 85 dB à 4000 Hz. Perte moyenne = (55+65+75+85)/4 = 70 dB. Surdité moyenne du 2e degré (56-70 dB), proche de la limite sévère. Rinne présent. Pas de réponse vestibulaire altérée (pas de trouble de l'équilibre). Diagnostic génétique : syndrome de Usher de type II (mutation USH2A).",
      hearingLoss: { type: "Perception (neurosensorielle) bilatérale", degree: "Moyenne 2e degré (70 dB)", ear: "Bilatérale, symétrique, descendante", averageLoss: "70 dB" },
      questions: [
        {
          question: "Quelle est la particularité clinique du syndrome de Usher de type II par rapport au type I concernant l'audition et l'équilibre ?",
          options: [
            "A. Le type II présente une surdité de perception progressive avec troubles vestibulaires modérés",
            "B. Le type II présente une surdité congénitale modérée à sévère STABLE, SANS trouble vestibulaire, avec rétinite pigmentaire d'apparition plus tardive (adolescence/jeune adulte)",
            "C. Le type II présente une atteinte auditive fluctuante avec épisodes de récupération",
            "D. Le type II présente une surdité de transmission par atteinte ossiculaire associée"
          ],
          correct: 1,
          explanation: "Le syndrome de Usher de type II se caractérise par une surdité congénitale modérée à sévère STABLE (non progressive), SANS trouble vestibulaire (pas de retard de marche, bon équilibre), avec une rétinite pigmentaire apparaissant à l'adolescence ou chez le jeune adulte (vision nocturne, réduction du champ visuel). Le type I présente une surdité profonde AVEC troubles vestibulaires.",
          source: "Les Surdités - Module 1"
        },
        {
          question: "Quel enjeu spécifique la rétinite pigmentaire du syndrome de Usher de type II pose-t-elle pour la rééducation logopédique à long terme ?",
          options: [
            "A. La communication reste possible par les canaux auditifs, la vision n'étant pas indispensable",
            "B. La perte visuelle progressive impose d'anticiper la transition vers des moyens de communication non visuels (tactiles, auditifs purs) avant que la vision ne soit trop dégradée, tout en optimisant au maximum l'audition par l'appareillage",
            "C. La rétinite impose l'apprentissage de la langue des signes française comme mode de communication principal",
            "D. La rétinite pigmentaire limite les bénéfices de l'appareillage auditif conventionnel"
          ],
          correct: 1,
          explanation: "Dans le syndrome de Usher, la double atteinte auditive et visuelle (surdi-cécité évolutive) impose une anticipation de la perte visuelle progressive. Il faut optimiser l'audition au maximum (appareillage performant, éventuellement IC si la perte évolue), tout en introduisant PROGRESSIVEMENT des supports tactiles (LPC tactile, langue des signes tactile) pour préparer la transition quand la vision ne suffira plus. La LSFB visuelle reste utile tant que la vision le permet.",
          source: "Les Surdités - Module 1"
        }
      ],
      reeducation: {
        goals: [
          "Optimiser la perception auditive avec l'appareillage prothétique bilatéral (perte 70 dB)",
          "Développer la discrimination phonémique fine des consonnes aiguës (courbe descendante : fricatives /f/, /s/, /ch/ à 4000 Hz les plus affectées)",
          "Enrichir le stock lexical et les compétences narratives à l'oral",
          "Anticiper la déficience visuelle progressive : introduire le LPC et des supports tactiles en complément",
          "Coordination avec l'ophtalmologue pour le suivi de la rétinite pigmentaire et l'adaptation des supports visuels (taille, contraste, éclairage)"
        ],
        methods: [
          "Entraînement auditif ciblé sur les fréquences aiguës (consonnes fricatives /f/, /s/, /ch/)",
          "Travail phonologique intensif par paires minimales exploitant la courbe descendante",
          "Apprentissage du LPC (Langue française Parlée Complétée) comme soutien phonologique et anticipation de la baisse visuelle",
          "Exercices de compréhension en bruit de fond (déficit de filtrage fréquent dans la surdité neurosensorielle)",
          "Lecture labiale renforcée et optimisation des conditions visuelles (éclairage, distance, contraste)",
          "Introduction progressive de la LSFB comme langue seconde en prévision de l'évolution visuelle à long terme"
        ],
        adaptations: [
          "Placement en classe : devant, proche de l'enseignant, avec éclairage optimal du visage de l'enseignant",
          "Système MF (microphone-émetteur) pour l'enseignant afin de pallier la distance et le bruit de fond",
          "Supports écrits en gros caractères et contrastes élevés (police ≥14, fond blanc texte noir)",
          "Vérification quotidienne du fonctionnement des appareils auditifs",
          "Environnement visuel adapté : bon éclairage, réduction de l'éblouissement, contraste des supports",
          "Sensibilisation de l'équipe éducative au double handicap sensoriel évolutif",
          "Orientation et mobilité à travailler avec un instructeur spécialisé dès l'apparition des difficultés visuelles"
        ]
      }
    }
  );

})();
