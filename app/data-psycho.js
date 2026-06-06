// === PSYCHOLOGIE - QCMs COMPLÉMENTAIRES (psycho_38 à psycho_52) ===
// Couvre les sujets psycho sous-représentés : jeux & Caillois, profils interactionnels
// Prizant/Peeters, MIA/H2M/GEHS, Syndrome de Rett, troubles somatiques, PEP-3/VABS/E.S.S.A.,
// Snoezelen/Sherborne, AOSI/ECA, ADI-R/ADOS-2, Winnicott, médias virtuels,
// diagnostic différentiel, comorbidité TND, facteurs environnementaux, plasticité cérébrale.
(function() {
  const A = window.APP_DATA;
  if (!A) return;

  A.subjects.psycho.push(
    {
      id: "psycho_38",
      question: "Selon la classification de Caillois, les enfants avec Trouble du Spectre de l'Autisme (TSA) présentent quelles particularités dans leur rapport aux différentes catégories de jeux ?",
      options: [
        "A. Ils préfèrent systématiquement les jeux de compétition (agôn) et de hasard (alea)",
        "B. Ils rejettent le hasard, préfèrent la répétition et aiment l'ilinx (vertige, balancements, tournoiements), tout en ayant des difficultés avec le simulacre (« faire comme si »)",
        "C. Ils privilégient exclusivement le simulacre (mimicry) et le jeu symbolique",
        "D. Ils ne manifestent aucune préférence particulière entre les différentes catégories de jeux"
      ],
      correct: 1,
      explanation: "Selon les catégories de Caillois (compétition/agôn, hasard/alea, simulacre/mimicry, vertige/ilinx), les enfants avec TSA rejettent les jeux de hasard car ils préfèrent la répétition prévisible. Ils aiment particulièrement l'ilinx (vertige procuré par le balancement et le tournoiement, qui stimule le système vestibulaire). Le simulacre (« faire comme si ») est déficitaire car il repose sur la symbolisation et l'imitation. Cette typologie complète celle de Piaget et éclaire le profil ludique particulier des enfants avec TSA.",
      source: "TSA Partie 1",
      difficulty: "hard"
    },
    {
      id: "psycho_39",
      question: "Selon Prizant (1987) et Peeters (2014), que signifie le concept de « pairing » (appariement) dans l'approche des profils interactionnels du TSA ?",
      options: [
        "A. Exiger de l'enfant qu'il s'adapte au canal de communication de l'adulte avant toute intervention",
        "B. Faire pair avec l'autre, c'est-à-dire s'ajuster au canal de communication préféré du patient avant de proposer de nouvelles modalités interactives",
        "C. Apparier systématiquement l'enfant avec TSA à un pair neurotypique du même âge",
        "D. Évaluer l'enfant exclusivement en binôme avec son parent sans observation directe du clinicien"
      ],
      correct: 1,
      explanation: "Le pairing consiste à faire pair avec le patient en privilégiant d'abord son canal de communication préféré (visuel, gestuel, sonore, tactile, etc.). Cette approche s'inscrit dans l'identification des trois profils interactionnels décrits par Prizant (1987) et Peeters (2014). Déterminer le profil interactionnel de chaque personne avec TSA permet de fixer des objectifs propres à son fonctionnement. L'idée centrale est de rejoindre l'enfant « là où il est » avant d'introduire de nouvelles modalités de communication.",
      source: "TSA Partie 2 - Communication & Habiletés sociales",
      difficulty: "medium"
    },
    {
      id: "psycho_40",
      question: "Parmi les programmes d'entraînement aux habiletés sociales destinés aux personnes avec TSA, que sont le MIA (Module d'Intervention appliqué à l'Autisme), le programme H2M et le GEHS (Groupe d'Entraînement aux Habiletés Sociales) ?",
      options: [
        "A. Des tests psychométriques évaluant l'intelligence sociale",
        "B. Des médicaments psychotropes régulant les comportements sociaux",
        "C. Des programmes structurés de développement des compétences socio-communicatives utilisant des groupes de pairs, des exercices de communication et des mises en situation",
        "D. Des techniques de modification comportementale basées sur le renforcement négatif"
      ],
      correct: 2,
      explanation: "Le MIA, le programme H2M et le GEHS sont des programmes structurés d'intervention visant à développer les habiletés sociales des personnes avec TSA. Ils utilisent des groupes de pairs, des exercices de communication et des mises en situation concrètes. Le cours souligne leurs bénéfices particuliers à l'adolescence, période durant laquelle le rejet par les pairs peut entraîner une dépression chez les jeunes avec TSA. Ces programmes s'appuient sur l'identification préalable des déficits en pragmatique et en cognition sociale.",
      source: "TSA Partie 2 - Communication & Habiletés sociales",
      difficulty: "hard"
    },
    {
      id: "psycho_41",
      question: "Le Syndrome de Rett est mentionné dans le DSM-5 comme une catégorie diagnostique distincte aux côtés du TSA et du Trouble de la Communication Sociale Pragmatique (TCSP). Quelle en est la caractéristique principale ?",
      options: [
        "A. Un trouble exclusivement comportemental sans base génétique identifiée",
        "B. Une condition génétique rare liée à une mutation du gène MECP2 sur le chromosome X, touchant quasi exclusivement les filles et caractérisée par une régression développementale après une période initialement normale",
        "C. Une forme sévère de Trouble du Déficit de l'Attention avec/sans Hyperactivité (TDAH)",
        "D. Un trouble du langage oral sans déficit intellectuel associé"
      ],
      correct: 1,
      explanation: "Le Syndrome de Rett est une condition génétique rare causée par une mutation du gène MECP2 sur le chromosome X. Il touche quasi exclusivement les filles et se caractérise par un développement initial normal (6-18 mois) suivi d'une régression développementale (perte du langage, de la motricité fine intentionnelle, apparition de stéréotypies manuelles caractéristiques). Dans le DSM-5, il constitue une catégorie distincte du TSA et du TCSP au sein du chapitre des Troubles Neurodéveloppementaux (TND).",
      source: "TSA Partie 1",
      difficulty: "hard"
    },
    {
      id: "psycho_42",
      question: "Quels troubles somatiques sont fréquemment associés au TSA, incluant les aspects touchant le système nerveux ?",
      options: [
        "A. Uniquement des troubles digestifs bénins et transitoires",
        "B. Des troubles du sommeil (difficultés à initier et maintenir le sommeil, perturbation du rythme circadien), des troubles immunitaires, des troubles neurologiques (activation atypique des neurones miroirs, traitement cortical atypique des émotions au niveau du cortex cingulaire) et des troubles moteurs",
        "C. Des troubles exclusivement dermatologiques sans autre atteinte systémique",
        "D. Une absence totale de comorbidités somatiques documentées dans la littérature"
      ],
      correct: 1,
      explanation: "Les troubles somatiques associés au TSA incluent les troubles digestifs, les troubles du sommeil (difficultés d'endormissement, réveils nocturnes, perturbation du rythme circadien), les troubles immunitaires et les troubles neurologiques. Sur le plan neurologique, on observe une activation atypique des neurones miroirs et un traitement cortical atypique des émotions, impliquant notamment le cortex cingulaire. Des troubles moteurs sont également fréquents : posture atypique, troubles de la coordination, marche sur la pointe des pieds, latéralisation lente, maladresse et dyspraxie.",
      source: "TSA Partie 1",
      difficulty: "medium"
    },
    {
      id: "psycho_43",
      question: "Parmi les outils d'évaluation suivants, lesquels sont mentionnés dans le cours comme outils complémentaires aux instruments diagnostiques classiques du TSA ?",
      options: [
        "A. Uniquement le bilan orthophonique standardisé",
        "B. Le PEP-3 (Profil Psycho-Éducatif, 3e édition) de Schopler et al. (2008), le VABS (Vineland Adaptive Behavior Scales) de Sparrow et al. (1984), et l'E.S.S.A. (Évaluation Sensorielle de l'Adulte avec Autisme)",
        "C. L'Échelle d'Intelligence de Wechsler pour enfants (WISC-V) exclusivement",
        "D. Le seul bilan neuropsychologique standardisé"
      ],
      correct: 1,
      explanation: "Le PEP-3 (Profil Psycho-Éducatif, 3e édition, Schopler et al., 2008) évalue le profil développemental psycho-éducatif des enfants avec TSA. Le VABS (Vineland Adaptive Behavior Scales, Sparrow et al., 1984) mesure le comportement adaptatif dans la vie quotidienne. L'E.S.S.A. (Évaluation Sensorielle de l'Adulte avec Autisme) explore les sept modalités sensorielles chez l'adulte avec TSA. Ces trois outils complètent les instruments diagnostiques (ADOS-2, ADI-R) sans les remplacer, en apportant des informations sur le fonctionnement quotidien et sensoriel.",
      source: "TSA Partie 1",
      difficulty: "hard"
    },
    {
      id: "psycho_44",
      question: "Le Snoezelen et l'Atelier Sherborne sont deux approches d'intervention sensorielle évoquées dans le cours. En quoi consistent-elles ?",
      options: [
        "A. Des thérapies médicamenteuses ciblant le système nerveux autonome",
        "B. Des méthodes d'enseignement académique intensif de type Applied Behavior Analysis (ABA)",
        "C. Le Snoezelen offre un espace multisensoriel de détente et d'exploration contrôlée (lumières, textures, sons, odeurs) ; l'Atelier Sherborne est une approche basée sur le mouvement et la relation corporelle par le jeu moteur partagé",
        "D. Des techniques de conditionnement basées sur le renforcement négatif et l'exposition forcée aux stimuli"
      ],
      correct: 2,
      explanation: "Le Snoezelen propose un espace multisensoriel de détente et d'exploration contrôlée combinant lumières douces, textures variées, sons apaisants et odeurs. Il est particulièrement adapté à la régulation sensorielle des personnes avec TSA. L'Atelier Sherborne utilise le mouvement et le jeu moteur partagé pour développer la conscience corporelle, la confiance en soi et la relation à l'autre. Ces deux approches s'inscrivent dans les recommandations du cours concernant l'adaptation de l'environnement et les activités sensorielles/calmantes.",
      source: "TSA Partie 1",
      difficulty: "medium"
    },
    {
      id: "psycho_45",
      question: "L'AOSI (Autism Observation Scale for Infants) et l'ECA (Évaluation des Comportements Autistiques) sont des outils d'observation complémentaires dans le TSA. Quelle est leur spécificité respective ?",
      options: [
        "A. L'AOSI est une échelle d'observation conçue pour les nourrissons présentant un risque de TSA (dépistage précoce) ; l'ECA est une échelle française évaluant les comportements autistiques par observation directe",
        "B. L'AOSI évalue spécifiquement les seuils auditifs et l'ECA évalue l'acuité visuelle",
        "C. Les deux outils sont exclusivement des questionnaires parentaux sans observation clinique directe",
        "D. L'AOSI et l'ECA sont deux instruments parfaitement identiques et interchangeables"
      ],
      correct: 0,
      explanation: "L'AOSI (Autism Observation Scale for Infants) est une échelle d'observation conçue pour un repérage très précoce chez les nourrissons à risque de TSA (notamment les fratries d'enfants déjà diagnostiqués). L'ECA (Évaluation des Comportements Autistiques) est une échelle française qui évalue les comportements autistiques par l'observation directe du clinicien. Ces outils sont complémentaires à l'ADOS-2 (Autism Diagnostic Observation Schedule-2) et s'inscrivent dans la démarche de dépistage et de diagnostic précoce recommandée par le cours.",
      source: "TSA Partie 2 - Communication & Habiletés sociales",
      difficulty: "hard"
    },
    {
      id: "psycho_46",
      question: "Quelle distinction fondamentale existe-t-il entre l'ADI-R (Autism Diagnostic Interview-Revised) et l'ADOS-2 (Autism Diagnostic Observation Schedule-2) dans la démarche diagnostique du TSA ?",
      options: [
        "A. L'ADI-R évalue uniquement les habiletés motrices ; l'ADOS-2 évalue uniquement le langage expressif",
        "B. Les deux outils sont identiques dans leur conception et peuvent être utilisés de manière interchangeable",
        "C. L'ADI-R est un entretien structuré approfondi administré aux parents recueillant l'histoire développementale de l'enfant ; l'ADOS-2 est une observation directe semi-structurée de l'enfant par un clinicien formé à travers des activités standardisées",
        "D. L'ADI-R s'adresse exclusivement aux adultes ; l'ADOS-2 est réservé aux nourrissons de moins de 12 mois"
      ],
      correct: 2,
      explanation: "L'ADI-R (Autism Diagnostic Interview-Revised) est un entretien standardisé approfondi mené avec les parents ou les aidants, qui explore l'histoire développementale précoce de l'enfant dans les domaines de la communication, des interactions sociales réciproques et des comportements restreints/répétitifs. L'ADOS-2 (Autism Diagnostic Observation Schedule-2) est une observation directe semi-structurée durant laquelle un clinicien formé propose des activités standardisées conçues pour susciter des comportements de communication sociale. Utilisés conjointement, ces deux outils constituent la référence (gold standard) pour le diagnostic du TSA.",
      source: "TSA Partie 2 - Communication & Habiletés sociales",
      difficulty: "medium"
    },
    {
      id: "psycho_47",
      question: "Selon le concept de Winnicott, quelle particularité présente l'objet transitionnel chez l'enfant avec TSA ?",
      options: [
        "A. L'enfant avec TSA développe systématiquement un attachement intense à une peluche ou un doudou classique",
        "B. L'enfant avec TSA ne développe généralement pas ou peu d'attachement à un objet transitionnel conventionnel ; lorsqu'il s'attache à un objet, celui-ci est souvent dur, non câlin et inhabituel, ce qui témoigne de difficultés de symbolisation",
        "C. L'objet transitionnel est identique en tous points à celui observé chez les enfants neurotypiques",
        "D. L'enfant avec TSA utilise systématiquement plusieurs dizaines d'objets transitionnels de façon simultanée"
      ],
      correct: 1,
      explanation: "Selon Winnicott, l'objet transitionnel (doudou, peluche) permet au jeune enfant de symboliser l'absence de la mère et d'opérer la transition entre le monde intérieur et la réalité extérieure. L'enfant avec TSA ne développe généralement pas ou peu d'attachement à un tel objet transitionnel classique. Lorsqu'un attachement à un objet existe, celui-ci est souvent dur, non câlin et inhabituel (par exemple un caillou, une petite voiture tenue constamment), ce qui reflète les difficultés de symbolisation et la pauvreté du jeu symbolique caractéristiques du TSA.",
      source: "TSA Partie 1",
      difficulty: "hard"
    },
    {
      id: "psycho_48",
      question: "Pourquoi les médias virtuels (ordinateurs, tablettes) sont-ils considérés comme particulièrement adaptés aux personnes avec TSA selon le cours ?",
      options: [
        "A. Parce qu'ils stimulent simultanément tous les systèmes sensoriels de manière intense",
        "B. Parce qu'ils n'offrent qu'un seul canal de communication à la fois, laissent le temps à l'analyse de l'information, et sont moins anxiogènes que les interactions humaines directes",
        "C. Parce qu'ils remplacent définitivement et intégralement les interactions sociales réelles",
        "D. Parce qu'ils ne présentent strictement aucun intérêt spécifique pour les personnes avec TSA"
      ],
      correct: 1,
      explanation: "Les médias virtuels sont adaptés car ils présentent les informations via un seul canal à la fois (pas d'entrée sensorielle multiple simultanée), ce qui correspond au besoin de traitement séquentiel. Ils laissent un temps prolongé pour analyser l'information sans la pression temporelle de l'interaction en face à face. Ils sont également moins anxiogènes car ils n'imposent pas les exigences multiples de l'interaction sociale directe (regard, prosodie, tour de rôle, décodage des expressions faciales). Le cours souligne cependant l'importance d'aider l'enfant à sortir des stéréotypies et à développer l'imitation, l'interaction et le tour de rôles.",
      source: "TSA Partie 1",
      difficulty: "medium"
    },
    {
      id: "psycho_49",
      question: "Dans le diagnostic différentiel du TSA, pourquoi est-il essentiel d'éliminer une surdité ou un déficit visuel avant de poser le diagnostic ?",
      options: [
        "A. Parce qu'un enfant sourd ou malvoyant peut présenter des comportements mimant certains signes du TSA (absence de réponse au prénom, évitement du regard, retard de langage) sans que le TSA soit présent ; un bilan ORL et ophtalmologique est donc indispensable",
        "B. Parce que le TSA est systématiquement et exclusivement causé par une surdité congénitale",
        "C. Parce que le diagnostic de TSA exclut automatiquement et définitivement tout trouble sensoriel périphérique concomitant",
        "D. Parce que tous les enfants atteints de surdité développent inévitablement un TSA"
      ],
      correct: 0,
      explanation: "Une surdité non diagnostiquée peut mimer certains signes évocateurs du TSA : l'enfant ne répond pas à son prénom (car il n'entend pas), présente un retard de langage oral et des difficultés de communication. De même, un déficit visuel peut expliquer un évitement du regard ou une fixation atypique. Il est donc indispensable de réaliser un bilan ORL (Oto-Rhino-Laryngologique) et ophtalmologique complet en première intention dans la démarche diagnostique différentielle du TSA. Cette étape fait partie intégrante du bilan interdisciplinaire recommandé.",
      source: "TSA Partie 1",
      difficulty: "medium"
    },
    {
      id: "psycho_50",
      question: "La comorbidité est fréquente entre les Troubles Neurodéveloppementaux (TND). Parmi les propositions suivantes concernant le TSA, laquelle est EXACTE ?",
      options: [
        "A. Le TSA est toujours un diagnostic isolé, jamais associé à un autre TND",
        "B. Le TSA peut être comorbide avec un Trouble du Développement Intellectuel (TDI), un TDAH, ou un Trouble Spécifique du Langage et des Apprentissages (TSLA), ce qui justifie une approche multidisciplinaire",
        "C. Le diagnostic de TSA exclut automatiquement et systématiquement tout diagnostic de TDI",
        "D. Le TDAH et le TSA sont deux diagnostics mutuellement exclusifs qui ne peuvent jamais coexister chez un même patient"
      ],
      correct: 1,
      explanation: "La comorbidité entre TND est fréquente et documentée. Environ 50 % des personnes avec TSA présentent également un TDI. Près de 42 % des enfants avec TSA présentent un TDAH concomitant (bien que parfois sous-évalué). Un TSLA peut également coexister avec le TSA. Les TND partagent des bases neurobiologiques communes et leurs frontières diagnostiques peuvent être floues. Cette complexité clinique justifie une approche multidisciplinaire et interdisciplinaire pour évaluer l'ensemble des troubles présents et leurs interactions réciproques.",
      source: "TSA Partie 1",
      difficulty: "medium"
    },
    {
      id: "psycho_51",
      question: "Parmi les facteurs de risque environnementaux prénatals et néonataux associés au TSA, lesquels sont mentionnés dans le cours ?",
      options: [
        "A. La vaccination infantile, comme seul facteur environnemental documenté",
        "B. La prématurité, les infections congénitales (Cytomégalovirus ou CMV, toxoplasmose, rubéole), la neuro-inflammation, l'exposition à certains toxiques ou médicaments antiépileptiques, ainsi que des facteurs psychosociaux tels que la pauvreté, la migration et la dépression maternelle",
        "C. L'alimentation riche en gluten, comme unique facteur environnemental causal",
        "D. Le stress parental postnatal, comme seul et unique facteur de risque identifié"
      ],
      correct: 1,
      explanation: "Les facteurs de risque environnementaux incluent les perturbations prénatales et néonatales : prématurité, infections congénitales comme le Cytomégalovirus (CMV), la toxoplasmose et la rubéole, ainsi que la neuro-inflammation. L'exposition à certains virus, toxiques ou médicaments antiépileptiques est également évoquée. Des facteurs psychosociaux (pauvreté, migration, dépression maternelle) sont mentionnés comme facteurs de risque. Le rôle des polluants environnementaux et du gluten reste en question et n'est pas établi. Le modèle actuel est intégratif, combinant facteurs génétiques et environnementaux.",
      source: "TSA Partie 1",
      difficulty: "medium"
    },
    {
      id: "psycho_52",
      question: "Pourquoi la plasticité cérébrale constitue-t-elle un argument majeur en faveur d'une Prise En Charge (PEC) précoce dans le TSA ?",
      options: [
        "A. La plasticité cérébrale n'existe que chez l'adulte et ne concerne pas la petite enfance",
        "B. La plasticité cérébrale étant maximale durant les premières années de vie, une PEC précoce permet de tirer parti de cette fenêtre développementale pour réorganiser les circuits neuronaux, favoriser l'acquisition des compétences communicationnelles et sociales, et réduire l'apparition des troubles du comportement",
        "C. La plasticité cérébrale n'a aucun lien documenté avec le développement du TSA",
        "D. La PEC précoce est inefficace car la plasticité cérébrale est totalement figée et immuable dès la naissance"
      ],
      correct: 1,
      explanation: "La plasticité cérébrale — capacité du cerveau à se réorganiser et à créer de nouvelles connexions synaptiques en réponse aux expériences — est maximale durant les premières années de vie. Une PEC précoce exploitant cette fenêtre de plasticité développementale permet de réorganiser les circuits neuronaux avant que les patterns de fonctionnement atypiques ne se rigidifient. Le cours indique que les PEC précoces permettent de diminuer l'apparition des troubles du comportement et de favoriser l'acquisition des compétences communicationnelles et sociales. Cet argument neurodéveloppemental justifie l'importance cruciale du dépistage et de l'intervention dès l'âge de 18-24 mois.",
      source: "TSA Partie 1 & TSA Partie 2 - Communication & Habiletés sociales",
      difficulty: "medium"
    }
  );
})();
