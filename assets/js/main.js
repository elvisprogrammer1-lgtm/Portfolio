var FORMSPREE_ENDPOINT = 'https://formspree.io/f/maeqbzlp';

var translations = {
  fr: {
    navProjects: 'Projets',
    navExperience: 'Expérience',
    navSkills: 'Compétences',
    navContact: 'Contact',
    downloadCv: 'Télécharger mon CV (FR)',
    downloadCvPrimary: 'Télécharger mon CV (FR)',
    emailMe: 'Me contacter',
    navAbout: 'À propos',
    expertiseLabel: 'Expertise',
    filterLabel: 'Filtres du portfolio',
    aboutKicker: 'Expertise',
    aboutTitle: 'Je transforme des idées complexes en produits utiles et évolutifs.',
    value1Title: 'Architecture d\'entreprise',
    value1Text: 'Systèmes multi-tenant, workflows de validation, sécurité, gouvernance et évolutivité dès le départ.',
    value2Title: 'Applications web premium',
    value2Text: 'Interfaces modernes, performances optimisées, dashboards, back-office, APIs robustes et intégrations claires.',
    value3Title: 'IA & vision par ordinateur',
    value3Text: 'Détection d\'objets, OCR, ANPR/LPR, vidéos, pipelines d\'inférence et automations orientées décision.',
    filterAll: 'Tous',
    filterWeb: 'Web',
    filterMobile: 'Mobile',
    filterAi: 'IA',
    filterSaas: 'SaaS',
    projectWeb: 'Application web',
    mobileNavLabel: 'Navigation mobile',
    mobileNavHome: 'Accueil',
    mobileNavProjects: 'Projets',
    mobileNavExperience: 'Parcours',
    mobileNavContact: 'Contact',
    portfolioNote: 'Solutions conçues pour les institutions, la finance, la santé et les opérateurs publics.',
    formName: 'Nom complet',
    formEmail: 'Email',
    formProject: 'Type de projet',
    formSelectDefault: 'Choisissez une option',
    formTypeWeb: 'Application web',
    formTypeMobile: 'Application mobile',
    formTypeAi: 'IA / Vision par ordinateur',
    formTypeSaas: 'SaaS / plateforme',
    formMessage: 'Message',
    formSubmit: 'Envoyer le message',
    formSending: 'Envoi en cours...',
    formSuccess: 'Message envoyé. Merci, je vous répondrai bientôt.',
    formFailure: 'L’envoi a échoué. Réessayez ou écrivez-moi directement par email.',
    formNotConfigured: 'Le formulaire doit encore être connecté. Écrivez-moi directement par email.',
    formMissing: 'Veuillez compléter tous les champs avant l\'envoi.',
    formError: 'Veuillez fournir une adresse email valide.',
    availabilityTitle: 'Disponible pour de nouvelles opportunités',
    availabilityText: 'Missions freelance, collaboration à distance et postes en développement logiciel ou architecture.',
    projectDisclosure: 'Les statuts distinguent le projet déployé, les applications en développement, les prototypes et les concepts. Aucun détail opérationnel ni donnée sensible des systèmes institutionnels n’est présenté.',
    projectContext: 'Périmètre présenté',
    projectApproach: 'Approche',
    projectStack: 'Technologies',
    projectSmartContext: 'Plateforme multi-organisation de vision par ordinateur',
    projectSmartApproach: 'Cycle de vie des modèles, inférence vidéo, événements temps réel et gouvernance par organisation.',
    projectPortaixContext: 'Concept de digitalisation des opérations portuaires',
    projectPortaixApproach: 'Relier l’accès des véhicules, la pesée, la traçabilité et la facturation dans un flux opérationnel.',
    projectDevelopment: 'En développement',
    projectStatusDeployed: 'Déployé en environnement institutionnel',
    sigafDesc: 'Système intégré de gestion administrative et financière conçu pour la Primature et déployé sur son infrastructure institutionnelle.',
    sigafAreaBudget: 'Budget & dépenses',
    sigafAreaPayroll: 'Paie & ressources humaines',
    sigafAreaMission: 'Missions & parc automobile',
    sigafAreaGovernance: 'Rôles, validations & audit',
    sigafContext: 'Application métier institutionnelle couvrant plusieurs processus administratifs et financiers.',
    sigafApproach: 'Workflows de validation, gestion des accès par rôle, suivi des opérations et vérification des documents.',
    socouDesc: 'Plateforme web de gestion destinée à une organisation coopérative, avec un espace public et des outils d’administration.',
    socouContext: 'Site institutionnel et back-office pour les projets de développement rural et social.',
    socouApproach: 'Gestion de projets, bénéficiaires, coopératives, formations, actualités, messages et rapports.',
    ecivilDesc: 'Application web de gestion des dossiers d’état civil, présentée comme un prototype et non comme un service public officiellement déployé.',
    ecivilContext: 'Gestion des citoyens et des actes de naissance, mariage, décès et divorce.',
    ecivilApproach: 'Interfaces d’administration, gestion des documents, des comptes utilisateurs et des notifications.',
    techMvc: 'Architecture MVC',
    icoDesc: 'Application Flutter pour mettre en relation des clients avec des prestataires et leur permettre de découvrir des services.',
    icoContext: 'Marketplace privé de services et outil de gestion destiné aux clients et aux professionnels.',
    icoApproach: 'Parcours de découverte et de recherche, profils, demandes de service et interfaces dédiées aux clients et prestataires.',
    burundiDesc: 'Application mobile destinée à faciliter la découverte et les démarches autour des services publics au Burundi.',
    burundiContext: 'Application citoyenne : catalogue de services et accompagnement des demandes.',
    burundiApproach: 'Détails des services, parcours de demande, pièces justificatives et suivi des dossiers, avec prise en charge du français, de l’anglais et du kirundi.',
    techFlutter: 'Flutter',
    techDart: 'Dart',
    techLaravelApi: 'API Laravel',
    techRiverpod: 'Riverpod',
    techSqlite: 'SQLite / cache',
    techLocalization: 'FR • EN • Kirundi',
    projectNexusContext: 'Prototype technique de plateforme SaaS multi-tenant',
    projectNexusApproach: 'Architecture par tenant, rôles et permissions, MFA, audit et isolation sectorielle des données.',
    projectGovContext: 'Concept GovTech — identité numérique et services publics',
    projectGovApproach: 'Pistes de réflexion autour de la prévention de fraude et de l’interopérabilité institutionnelle.',
    projectStatusConcept: 'Concept',
    projectStatusPrototype: 'Prototype technique',
    projectStatusAppPrototype: 'Prototype applicatif',
    projectStatusArchitecture: 'Architecture / périmètre',
    metricModel: 'Cycle des modèles',
    metricVideo: 'Inférence vidéo',
    metricGovernance: 'RBAC / audit',
    moduleEducation: 'Éducation',
    moduleBanking: 'Banque',
    moduleEnterprise: 'Entreprise',
    moduleHealth: 'Santé',
    moduleAgriculture: 'Agriculture',
    caseFraud: 'Prévention de la fraude',
    caseInteroperability: 'Interopérabilité',
    casePublicService: 'Service public',
    availabilityEmail: 'Me contacter',
    whatsappCta: 'Écrire sur WhatsApp',
    whatsappLabel: 'Écrire à Elvis Programmer sur WhatsApp',
    whatsappPrefill: 'Bonjour Elvis, j’ai découvert votre portfolio et souhaiterais échanger avec vous au sujet d’un projet.',
    heroEyebrow: 'Architecte logiciel • Développeur Full-Stack',
    heroTitle: 'Je conçois des plateformes sécurisées, multi-tenant et des systèmes IA qui font avancer les institutions.',
    heroSubtitle: 'Je suis Elvis, architecte logiciel et développeur full-stack au Burundi. Je conçois aujourd\'hui des systèmes numériques pour les processus administratifs et financiers au Bureau du Premier Ministre, et je suis ouvert aux missions à distance.',
    statYears: 'expérience en conception et développement',
    statProjects: 'web • SaaS • mobile • IA',
    statSecurity: 'sécurité, rôles et gouvernance',
    projectKicker: 'Portfolio',
    projectsTitle: 'Projets',
    projectAi: 'IA / Vision par ordinateur',
    projectMobile: 'Application mobile',
    smartVisionDesc: 'Une plateforme d\'IA et de vision par ordinateur pensée pour plusieurs organisations. Elle gère le cycle de vie des modèles, déploie et supervise les modèles, puis exécute des inférences sur des flux caméra et vidéo.',
    portaixDesc: 'Concept de port intelligent pour gérer véhicules, marchandises et flux logistiques.',
    portaixItem1: 'Contrôle et automatisation des barrières',
    portaixItem2: 'Identification de véhicules avec ANPR/LPR et OCR',
    portaixItem3: 'Pesage intelligent et intégration des ponts-bascule',
    portaixItem4: 'Facturation et paiements automatisés',
    mobilePayDesc: 'Application mobile de paiement et de gestion financière pour utilisateurs et services.',
    mobileHealthDesc: 'Prototype de gestion médicale pour suivi des patients, consultations et rappels.',
    nexusDesc: 'Prototype technique d’une plateforme SaaS multi-secteurs avec isolation des données par tenant et modules évolutifs.',
    govtechDesc: 'Recherche et concept sur la détection des fraudes, la prévention et l\'interopérabilité entre institutions publiques.',
    experienceKicker: 'Parcours',
    experienceTitle: 'Expérience',
    expWhen1: 'Fév 2026 à aujourd\'hui',
    expRole1Title: 'Bureau du Premier Ministre',
    expRole1: 'Architecte & Développeur de systèmes numériques',
    exp1Item1: 'Conception et développement de systèmes numériques pour digitaliser les processus administratifs et financiers.',
    exp1Item2: 'Mise en place de workflows de validation, gestion des utilisateurs, rôles, permissions et bases de données associées.',
    exp1Item3: 'Déploiement, maintenance et amélioration continue des applications et de leur infrastructure.',
    expWhen2: 'Oct 2025 à Jan 2026',
    expRole2: 'Fondateur & Lead Developer',
    exp2Item1: 'Conception d\'architectures logicielles d\'entreprise pour systèmes multi-utilisateurs, multi-tenant et multi-secteurs.',
    exp2Item2: 'Développement de solutions IA et Vision par ordinateur : détection d\'objets, OCR, ANPR/LPR, analyse vidéo et pipelines d\'inférence.',
    exp2Item3: 'Backend PHP/Laravel et Python/FastAPI ; interfaces React/Next.js, Vue.js, Tailwind CSS ; déploiements Linux et Nginx.',
    expWhen3: 'Avr 2024 à Sep 2025',
    expRole3Title: 'Freelance',
    expRole3: 'Développeur Full Stack',
    exp3Item1: 'Développement complet d\'applications web et mobiles avec architectures sécurisées.',
    exp3Item2: 'Bases de données relationnelles et NoSQL, optimisation des performances et sécurisation applicative.',
    skillsKicker: 'Expertise',
    skillsTitle: 'Compétences',
    skillArchitecture: 'Architecture & backend',
    skillArchitectureText: 'Architecture logicielle, systèmes d\'entreprise, multi-tenant, APIs REST, PHP/Laravel, Python/FastAPI, WebSockets, systèmes distribués.',
    skillFrontend: 'Frontend',
    skillFrontendText: 'React/Next.js, Vue.js, JavaScript/TypeScript, Tailwind CSS.',
    skillDatabase: 'Bases de données',
    skillDatabaseText: 'PostgreSQL, MySQL, NoSQL.',
    skillAi: 'IA & Vision par ordinateur',
    skillAiText: 'Intelligence artificielle, vision par ordinateur, détection d\'objets, OCR, ANPR/LPR, analyse vidéo.',
    skillSecurity: 'Sécurité & infrastructure',
    skillSecurityText: 'Cybersécurité, RBAC, Linux/Ubuntu Server, Nginx, déploiement, monitoring, Android MDM.',
    educationTitle: 'Formation',
    educationDegree: 'Licence en informatique, 2026.',
    educationDiploma: 'Diplôme A2, 2021.',
    languagesTitle: 'Langues',
    languagesText: 'Kirundi (natif), Français (avancé), Anglais (avancé), Kiswahili (intermédiaire).',
    contactKicker: 'Contact',
    contactTitle: 'Vous avez un projet ou un rôle en tête ?',
    contactSubtitle: 'Envoyez-moi un court message sur ce que vous construisez. Je réponds par email.',
    copyButton: 'Copier l\'email',
    copyDone: 'Email copié.',
    copyFail: 'Impossible de copier. L\'adresse est ',
    siteTitle: 'Elvis Programmer | Architecte logiciel & Développeur Full-Stack'
  },
  en: {
    navProjects: 'Projects',
    navExperience: 'Experience',
    navSkills: 'Skills',
    navContact: 'Contact',
    downloadCv: 'Download my CV (EN)',
    downloadCvPrimary: 'Download my CV (EN)',
    emailMe: 'Contact me',
    navAbout: 'About',
    expertiseLabel: 'Areas of expertise',
    filterLabel: 'Portfolio filters',
    aboutKicker: 'Expertise',
    aboutTitle: 'I turn complex ideas into useful, scalable products.',
    value1Title: 'Enterprise architecture',
    value1Text: 'Multi-tenant systems, validation flows, security, governance and scalability from day one.',
    value2Title: 'Premium web applications',
    value2Text: 'Modern interfaces, optimized performance, dashboards, back-office tooling, robust APIs and clean integrations.',
    value3Title: 'AI & computer vision',
    value3Text: 'Object detection, OCR, ANPR/LPR, video workflows, inference pipelines and decision-focused automation.',
    filterAll: 'All',
    filterWeb: 'Web',
    filterMobile: 'Mobile',
    filterAi: 'AI',
    filterSaas: 'SaaS',
    projectWeb: 'Web application',
    mobileNavLabel: 'Mobile navigation',
    mobileNavHome: 'Home',
    mobileNavProjects: 'Projects',
    mobileNavExperience: 'Experience',
    mobileNavContact: 'Contact',
    portfolioNote: 'Solutions built for institutions, finance, healthcare and public operators.',
    formName: 'Full name',
    formEmail: 'Email',
    formProject: 'Project type',
    formSelectDefault: 'Choose an option',
    formTypeWeb: 'Web application',
    formTypeMobile: 'Mobile application',
    formTypeAi: 'AI / Computer Vision',
    formTypeSaas: 'SaaS / platform',
    formMessage: 'Message',
    formSubmit: 'Send message',
    formSending: 'Sending...',
    formSuccess: 'Message sent. Thank you — I will get back to you soon.',
    formFailure: 'Message could not be sent. Please try again or email me directly.',
    formNotConfigured: 'The form still needs to be connected. Please email me directly.',
    formMissing: 'Please complete all fields before submitting.',
    formError: 'Please provide a valid email address.',
    availabilityTitle: 'Open to new opportunities',
    availabilityText: 'Freelance engagements, remote collaboration, and software development or architecture roles.',
    projectDisclosure: 'Statuses distinguish the deployed project, applications in development, prototypes, and concepts. No operational details or sensitive institutional data are shown.',
    projectContext: 'Scope',
    projectApproach: 'Approach',
    projectStack: 'Technologies',
    projectSmartContext: 'Multi-organization computer vision platform',
    projectSmartApproach: 'Model lifecycle, video inference, real-time events, and organization-level governance.',
    projectPortaixContext: 'Concept for digitizing port operations',
    projectPortaixApproach: 'Connect vehicle access, weighing, traceability, and billing in one operational flow.',
    projectDevelopment: 'In development',
    projectStatusDeployed: 'Deployed in an institutional environment',
    sigafDesc: 'Integrated administrative and financial management system built for the Office of the Prime Minister and deployed on its institutional infrastructure.',
    sigafAreaBudget: 'Budget & expenses',
    sigafAreaPayroll: 'Payroll & human resources',
    sigafAreaMission: 'Missions & vehicle fleet',
    sigafAreaGovernance: 'Roles, approvals & audit',
    sigafContext: 'Institutional business application covering multiple administrative and financial processes.',
    sigafApproach: 'Approval workflows, role-based access, operational traceability, and document verification.',
    socouDesc: 'Management platform for a cooperative organization, combining a public-facing website with administration tools.',
    socouContext: 'Institutional website and back office for rural and social development projects.',
    socouApproach: 'Management of projects, beneficiaries, cooperatives, training, news, messages, and reports.',
    ecivilDesc: 'Civil-registry case management web application, presented as a prototype—not as an officially deployed public service.',
    ecivilContext: 'Management of citizens and birth, marriage, death, and divorce records.',
    ecivilApproach: 'Administrative interfaces, document management, user accounts, and notifications.',
    techMvc: 'MVC architecture',
    icoDesc: 'Flutter application connecting customers with service providers and helping people discover local services.',
    icoContext: 'Private service marketplace and management tool for customers and professionals.',
    icoApproach: 'Service discovery and search, profiles, service requests, and dedicated customer and provider experiences.',
    burundiDesc: 'Mobile application designed to make public services in Burundi and related application processes easier to discover.',
    burundiContext: 'Citizen app: service catalog and guided application flows.',
    burundiApproach: 'Service details, application flow, supporting documents, and request tracking, with French, English, and Kirundi localization.',
    techFlutter: 'Flutter',
    techDart: 'Dart',
    techLaravelApi: 'Laravel API',
    techRiverpod: 'Riverpod',
    techSqlite: 'SQLite / cache',
    techLocalization: 'FR • EN • Kirundi',
    projectNexusContext: 'Technical prototype of a multi-tenant SaaS platform',
    projectNexusApproach: 'Tenant architecture, roles and permissions, MFA, audit, and sector-level data isolation.',
    projectGovContext: 'GovTech concept — digital identity and public services',
    projectGovApproach: 'Exploration of fraud prevention and interoperability across public institutions.',
    projectStatusConcept: 'Concept',
    projectStatusPrototype: 'Technical prototype',
    projectStatusAppPrototype: 'Application prototype',
    projectStatusArchitecture: 'Architecture / scope',
    metricModel: 'Model lifecycle',
    metricVideo: 'Video inference',
    metricGovernance: 'RBAC / audit',
    moduleEducation: 'Education',
    moduleBanking: 'Banking',
    moduleEnterprise: 'Enterprise',
    moduleHealth: 'Healthcare',
    moduleAgriculture: 'Agriculture',
    caseFraud: 'Fraud prevention',
    caseInteroperability: 'Interoperability',
    casePublicService: 'Public service',
    availabilityEmail: 'Get in touch',
    whatsappCta: 'Message me on WhatsApp',
    whatsappLabel: 'Message Elvis Programmer on WhatsApp',
    whatsappPrefill: 'Hello Elvis, I found your portfolio and would like to discuss a project with you.',
    heroEyebrow: 'Software Architect • Full-Stack Developer',
    heroTitle: 'I design secure, multi-tenant platforms and AI systems that move institutions forward.',
    heroSubtitle: 'I\'m Elvis, a software architect and full-stack developer based in Burundi. I build digital systems for administrative and financial processes at the Office of the Prime Minister and I\'m open to remote work.',
    statYears: 'software design and delivery',
    statProjects: 'web • SaaS • mobile • AI',
    statSecurity: 'security, access control and governance',
    projectKicker: 'Portfolio',
    projectsTitle: 'Projects',
    projectAi: 'AI / Computer Vision',
    projectMobile: 'Mobile application',
    smartVisionDesc: 'An AI and computer vision platform built for multiple organizations. It manages model lifecycle, deploys and supervises models, and runs inferencing on camera and video streams.',
    portaixDesc: 'Concept for a smart port to manage vehicles, cargo and logistics flows.',
    portaixItem1: 'Barrier control and automation',
    portaixItem2: 'Vehicle identification using ANPR/LPR and OCR',
    portaixItem3: 'Smart weighing and weighbridge integration',
    portaixItem4: 'Automated billing and payments',
    mobilePayDesc: 'Mobile payment and financial management application for users and services.',
    mobileHealthDesc: 'Medical management prototype for patient follow-up, consultations and reminders.',
    nexusDesc: 'Technical prototype of a multi-sector SaaS platform with tenant-level data isolation and scalable modules.',
    govtechDesc: 'Research and concept for fraud detection, prevention and interoperability across public institutions.',
    experienceKicker: 'Journey',
    experienceTitle: 'Experience',
    expWhen1: 'Feb 2026 to now',
    expRole1Title: 'Office of the Prime Minister',
    expRole1: 'Architect & Digital Systems Developer',
    exp1Item1: 'Design and development of digital systems to streamline administrative and financial processes.',
    exp1Item2: 'Implementation of validation workflows, user management, roles, permissions, and related database design.',
    exp1Item3: 'Deployment, maintenance and continuous improvement of applications and their infrastructure.',
    expWhen2: 'Oct 2025 to Jan 2026',
    expRole2: 'Founder & Lead Developer',
    exp2Item1: 'Design of enterprise software architectures for multi-user, multi-tenant and multi-sector systems.',
    exp2Item2: 'Development of AI and Computer Vision solutions: object detection, OCR, ANPR/LPR, video analysis and inference pipelines.',
    exp2Item3: 'PHP/Laravel and Python/FastAPI backend; React/Next.js, Vue.js and Tailwind CSS interfaces; Linux and Nginx deployments.',
    expWhen3: 'Apr 2024 to Sep 2025',
    expRole3Title: 'Freelance',
    expRole3: 'Full Stack Developer',
    exp3Item1: 'End-to-end development of web and mobile apps with secure architectures.',
    exp3Item2: 'Relational and NoSQL databases, performance optimization and stronger application security.',
    skillsKicker: 'Expertise',
    skillsTitle: 'Skills',
    skillArchitecture: 'Architecture & backend',
    skillArchitectureText: 'Software architecture, enterprise systems, multi-tenant platforms, REST APIs, PHP/Laravel, Python/FastAPI, WebSockets, distributed systems.',
    skillFrontend: 'Frontend',
    skillFrontendText: 'React/Next.js, Vue.js, JavaScript/TypeScript, Tailwind CSS.',
    skillDatabase: 'Databases',
    skillDatabaseText: 'PostgreSQL, MySQL, NoSQL.',
    skillAi: 'AI & Computer Vision',
    skillAiText: 'Artificial intelligence, computer vision, object detection, OCR, ANPR/LPR, video analysis.',
    skillSecurity: 'Security & infrastructure',
    skillSecurityText: 'Cybersecurity, RBAC, Linux/Ubuntu Server, Nginx, deployment, monitoring, Android MDM.',
    educationTitle: 'Education',
    educationDegree: 'Bachelor of Computer Science, 2026.',
    educationDiploma: 'Diploma A2, 2021.',
    languagesTitle: 'Languages',
    languagesText: 'Kirundi (native), French (advanced), English (advanced), Kiswahili (intermediate).',
    contactKicker: 'Contact',
    contactTitle: 'Have a project or a role in mind?',
    contactSubtitle: 'Send me a short message about what you are building. I read everything and reply by email.',
    copyButton: 'Copy email',
    copyDone: 'Email copied.',
    copyFail: 'Could not copy. The address is ',
    siteTitle: 'Elvis Programmer | Software Architect & Full-Stack Developer'
  }
};

var currentLang = 'fr';
var cvDownloads = {
  fr: { href: 'assets/Elvis_Niyomwungere_CV_FR.pdf', filename: 'Elvis_Niyomwungere_CV_FR.pdf' },
  en: { href: 'assets/Elvis_Niyomwungere_CV_EN.pdf', filename: 'Elvis_Niyomwungere_CV_EN.pdf' }
};

function updateCvDownloads() {
  var cv = cvDownloads[currentLang];
  document.querySelectorAll('[data-cv-download]').forEach(function (link) {
    link.href = cv.href;
    link.setAttribute('download', cv.filename);
  });
}

function updateWhatsAppLinks() {
  var message = encodeURIComponent(translations[currentLang].whatsappPrefill);
  document.querySelectorAll('[data-whatsapp-link]').forEach(function (link) {
    link.href = 'https://wa.me/25765101118?text=' + message;
  });
}

function setLanguage(lang) {
  currentLang = lang in translations ? lang : 'fr';
  var items = document.querySelectorAll('[data-i18n]');
  items.forEach(function (element) {
    var key = element.getAttribute('data-i18n');
    var text = translations[currentLang][key];
    if (text) element.textContent = text;
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(function (element) {
    var label = translations[currentLang][element.getAttribute('data-i18n-aria-label')];
    if (label) element.setAttribute('aria-label', label);
  });

  document.documentElement.lang = currentLang;
  document.title = translations[currentLang].siteTitle;

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === currentLang);
  });

  updateCvDownloads();
  updateWhatsAppLinks();
  updateFormPlaceholders();
}

updateCvDownloads();
updateWhatsAppLinks();

var year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

var copy = document.getElementById('copy');
var copyStatus = document.getElementById('copy-status');
if (copy && copyStatus) {
  copy.addEventListener('click', function () {
    var email = copy.getAttribute('data-email');
    var done = function () { copyStatus.textContent = translations[currentLang].copyDone; setTimeout(function () { copyStatus.textContent = ''; }, 2500); };
    var fail = function () { copyStatus.textContent = translations[currentLang].copyFail + email + '.'; };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(done, fail);
    } else {
      fail();
    }
  });
}

var form = document.getElementById('contactForm');
var formStatus = document.getElementById('form-status');
if (form && formStatus) {
  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    var formData = new FormData(form);
    var email = (formData.get('email') || '').toString().trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formStatus.textContent = translations[currentLang].formError;
      formStatus.dataset.state = 'error';
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      formStatus.textContent = translations[currentLang].formNotConfigured;
      formStatus.dataset.state = 'error';
      return;
    }

    var submitButton = form.querySelector('[type="submit"]');
    submitButton.disabled = true;
    formStatus.textContent = translations[currentLang].formSending;
    formStatus.dataset.state = 'pending';

    try {
      var response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) {
        throw new Error('Form submission failed with status ' + response.status);
      }

      form.reset();
      formStatus.textContent = translations[currentLang].formSuccess;
      formStatus.dataset.state = 'success';
    } catch (error) {
      console.error('Contact form submission failed:', error);
      formStatus.textContent = translations[currentLang].formFailure;
      formStatus.dataset.state = 'error';
    } finally {
      submitButton.disabled = false;
    }
  });
}

document.querySelectorAll('.filter-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    var filter = button.getAttribute('data-filter');
    document.querySelectorAll('.filter-btn').forEach(function (item) {
      item.classList.toggle('is-active', item === button);
    });

    document.querySelectorAll('.project-card').forEach(function (card) {
      var show = filter === 'all' || card.getAttribute('data-category') === filter;
      card.classList.toggle('is-hidden', !show);
    });
  });
});

document.querySelectorAll('.lang-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    setLanguage(button.getAttribute('data-lang'));
  });
});

var mobileSections = Array.from(document.querySelectorAll('[data-mobile-nav]')).map(function (link) {
  return {
    link: link,
    section: document.getElementById(link.getAttribute('href').slice(1))
  };
}).filter(function (item) {
  return item.section;
});

function setActiveMobileSection(section) {
  mobileSections.forEach(function (item) {
    if (item.section === section) {
      item.link.setAttribute('aria-current', 'location');
    } else {
      item.link.removeAttribute('aria-current');
    }
  });
}

mobileSections.forEach(function (item) {
  item.link.addEventListener('click', function () {
    setActiveMobileSection(item.section);
  });
});

if ('IntersectionObserver' in window && mobileSections.length) {
  var mobileSectionObserver = new IntersectionObserver(function (entries) {
    var visible = entries.filter(function (entry) {
      return entry.isIntersecting;
    }).sort(function (a, b) {
      return b.intersectionRatio - a.intersectionRatio;
    });

    if (!visible.length) return;
    setActiveMobileSection(visible[0].target);
  }, {
    rootMargin: '-15% 0px -65% 0px',
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
  });

  mobileSections.forEach(function (item) {
    mobileSectionObserver.observe(item.section);
  });
}

function updateFormPlaceholders() {
  var name = document.querySelector('#contactForm input[name="name"]');
  var email = document.querySelector('#contactForm input[name="email"]');
  var textarea = document.querySelector('#contactForm textarea[name="message"]');

  if (name) name.placeholder = currentLang === 'fr' ? 'Votre nom' : 'Your name';
  if (email) email.placeholder = currentLang === 'fr' ? 'vous@email.com' : 'you@email.com';
  if (textarea) textarea.placeholder = currentLang === 'fr' ? 'Décrivez votre besoin ...' : 'Describe your need ...';
}

setLanguage(currentLang);
updateFormPlaceholders();
