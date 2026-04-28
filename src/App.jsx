import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import heroImage from './assets/Marie Berthelet photo pro.png';
import resumePdf from './assets/Marie_Berthelet_CV.pdf';

const content = {
  fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      contact: 'Contact',
      resume: 'A propos'
    },
    theme: {
      light: 'Clair',
      dark: 'Sombre',
      switchLabel: 'Activer le mode sombre'
    },
    role: 'Product designer',
    greeting: 'Bonjour, Marie Berthelet',
    companyIntroBefore: 'Je suis',
    companyRole: 'product designer',
    companyIntroAfter: 'chez',
    description:
      'Je conçois des experiences produit centrees utilisateur, de la strategie a l’interface, pour creer de la valeur business.',
    contactCta: 'Ecrire un message',
    linkedIn: 'LinkedIn',
    skillsLabel: 'Competences',
    skillsTitle: 'Ce que j’apporte aux produits',
    skillsDescription: 'Un equilibre entre recherche, design et parcours utilisateur durable.',
    projectsLabel: 'Projets',
    projectsTitle: 'Projets selectionnes',
    projectsDescription: '',
    projectPage: {
      back: 'Retour aux projets',
      eyebrow: 'Etude de cas',
      role: 'Role',
      period: 'Periode',
      overview: 'Contexte',
      focus: 'Approche',
      outcome: 'Impact',
      constraints: 'Contraintes',
      related: 'Autres projets',
      gallery: 'Visuels du parcours'
    },
    experiencesTitle: 'Mes experiences',
    projectsMiniTitle: 'Mes projets',
    experiences: [
      { company: 'Daxium', period: '2021' },
      { company: 'Caisse des depots', period: '2022 - 2023' },
      { company: 'Banque Francaise Mutualiste', period: '2024 - 2025' },
      { company: 'APEC', period: '2025 - 2026' }
    ],
    contactLabel: 'Contact',
    contactTitle: 'Echangeons sur votre prochain produit',
    contactDescription: 'Je suis disponible pour des missions freelance, design systems et experiences digitales.',
    form: {
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      submit: 'Envoyer',
      success: (name) => `Merci${name ? ` ${name}` : ''} ! Ton message a bien ete envoye (simulation).`
    },
    resume: {
      eyebrow: 'A propos',
      title: 'Marie Berthelet, Product Designer',
      intro:
        'Portfolio et CV concus comme une synthese claire de mes competences en UX, UI et conception de services.',
      summaryTitle: 'Profil',
      summary:
        'Product designer orientee impact, j’accompagne la conception de produits et services digitaux de la strategie a l’interface finale.',
      sections: {
        expertise: 'Expertise',
        tools: 'Methodes et outils',
        highlights: 'Projets marquants',
        contact: 'Coordonnees'
      },
      tools: ['Figma', 'Design systems', 'Prototypage', 'Recherche utilisateur', 'Ateliers', 'Tests utilisateurs'],
      contactText: 'Disponible pour des missions produit, UX/UI et design systems.',
      print: 'Imprimer ce CV',
      openPdf: 'Ouvrir le CV en PDF',
      embeddedTitle: 'Mon CV'
    },
    projects: [
      {
        slug: 'apec',
        title: 'APEC',
        summary: 'Conception produit et amelioration de l’experience pour des parcours d’accompagnement et de service.',
        tags: ['UX', 'UI', 'Service design'],
        image: '/assets/apec.jpg',
        role: 'Product design, UX/UI',
        period: '2025 - 2026',
        heroHeadline: 'Conception d’un simulateur d’entretien conversationnel IA',
        overview: 'Conception de parcours et d’interfaces pour mieux accompagner les usagers dans leurs demarches et rendre les services plus clairs.',
        focus: 'Travail sur la structure des ecrans, la priorisation de l’information et la fluidite des parcours avec une approche orientee service.',
        outcome: 'Une experience plus lisible, plus coherente entre les points de contact et plus simple a prendre en main.',
        gallery: [
          { src: '/assets/apec/apec-step-1.png', alt: 'Ecran de personnalisation de l’entretien APEC' },
          { src: '/assets/apec/apec-step-2.png', alt: 'Ecran de verification du microphone et de la camera APEC' },
          { src: '/assets/apec/apec-step-3.png', alt: 'Ecran d’entretien virtuel APEC' },
          { src: '/assets/apec/apec-step-4.png', alt: 'Ecran de synthese finale APEC' }
        ],
        sections: [
          {
            title: 'Contexte',
            text: 'Dans le cadre du developpement d’un nouvel outil innovant de simulateur d’entretien base sur l’intelligence artificielle, j’ai ete en charge du cadrage et de la conception du projet, depuis la comprehension des besoins utilisateurs jusqu’a la definition des parcours et des premieres solutions de design, en lien etroit avec les enjeux produit et techniques.'
          },
          {
            title: 'Objectifs :',
            bullets: [
              'Cadrer une experience utile et alignee avec les besoins des utilisateurs APEC',
              'Concevoir et structurer des parcours pedagogiques et interactifs',
              'Valoriser le contenu et le feedback (UX writing)',
              'Assurer la coherence UI et l’accessibilite',
              'Concevoir une experience conversationnelle basee sur l’IA'
            ]
          },
          {
            title: 'Realisations',
            subtitle: 'Taches',
            columns: [
              [
                'Exploration & comprehension du contexte: analyser l’existant, collecter les besoins metiers, interroger les parties prenantes',
                'Participer aux specifications fonctionnelles: priorisation des fonctionnalites et definition des objectifs',
                'Conception UX: wireframes, flows et creation des user flows detailles pour toutes les actions'
              ],
              [
                'Concevoir les maquettes haute-fidelite: assurer la coherence UI sur desktop, mobile, tablette, travailler les etats',
                'Tests utilisateurs & validation: preparer les scripts de tests, organiser et animer des sessions',
                'Structuration des interactions utilisateur / IA',
                'Conception des contenus et feedbacks (UX writing)'
              ]
            ]
          },
          {
            title: 'Realisations',
            subtitle: 'Contraintes',
            bullets: [
              'Concevoir une experience comprehensible pour des profils varies: jeunes diplomes, cadres experimentes',
              'Contraintes techniques: integration avec des briques IA, temps de reponse, performance, stabilite',
              'Contraintes ethiques et reglementaires: protection des donnees utilisateurs (RGPD) et transparence sur l’usage de l’IA'
            ]
          }
        ]
      },
      {
        slug: 'banque-francaise-mutualiste',
        title: 'Banque Francaise Mutualiste',
        summary: 'Refonte de parcours bancaires et amelioration de la lisibilite des ecrans.',
        tags: ['UX', 'UI', 'Design System'],
        image: '/assets/banque-francaise-mutualiste.png',
        role: 'UX/UI, design system',
        period: '2024 - 2025',
        heroHeadline: 'Refonte de l’espace client et harmonisation des parcours bancaires',
        overview: 'Refonte de parcours bancaires pour simplifier la comprehension des services et harmoniser les interfaces.',
        focus: 'Reprise des parcours cles, clarification des contenus et alignement avec des composants UI plus robustes.',
        outcome: 'Des ecrans plus nets, une meilleure lisibilite et une base plus fiable pour faire evoluer le produit.',
        gallery: [
          { src: '/assets/bfm/bfm-1.png', alt: 'Ecran documents Banque Francaise Mutualiste' },
          { src: '/assets/bfm/bfm-2.png', alt: 'Ecran detail credit Banque Francaise Mutualiste' },
          { src: '/assets/bfm/bfm-3.png', alt: 'Ecran RIB livret Banque Francaise Mutualiste' },
          { src: '/assets/bfm/bfm-4.png', alt: 'Ecran accueil espace client Banque Francaise Mutualiste' },
          { src: '/assets/bfm/bfm-5.png', alt: 'Ecran modification de date de prelevement Banque Francaise Mutualiste' },
          { src: '/assets/bfm/bfm-6.png', alt: 'Ecran remboursement anticipe Banque Francaise Mutualiste' },
          { src: '/assets/bfm/bfm-7.png', alt: 'Ecran modification de compte de prelevement Banque Francaise Mutualiste' },
          { src: '/assets/bfm/bfm-8.png', alt: 'Menu credits Banque Francaise Mutualiste' },
          { src: '/assets/bfm/bfm-9.png', alt: 'Formulaire mon compte de prelevement Banque Francaise Mutualiste' }
        ],
        sections: [
          {
            title: 'Contexte',
            text: 'Dans le cadre de la modernisation de l’espace client Banque Francaise Mutualiste, j’ai travaille sur plusieurs parcours a forte valeur d’usage: accueil, credits, epargne, documents et demandes de gestion. L’objectif etait de rendre l’experience plus claire, plus rassurante et plus coherente sur l’ensemble des ecrans.'
          },
          {
            title: 'Objectifs :',
            bullets: [
              'Clarifier la lecture des informations bancaires et contractuelles',
              'Uniformiser les composants et les patterns d’interface entre les parcours',
              'Faciliter la consultation, le telechargement et les actions de gestion courantes',
              'Moderniser l’espace client sans perdre les reperes des utilisateurs existants',
              'Poser une base plus solide pour les evolutions futures du produit'
            ]
          },
          {
            title: 'Realisations',
            subtitle: 'Interventions',
            columns: [
              [
                'Refonte d’ecrans cles de l’espace client: page d’accueil, consultation de credits, historique, documents et epargne',
                'Reprise de la hierarchie visuelle pour mieux faire ressortir les informations importantes, les statuts et les actions disponibles',
                'Travail sur la structure des tableaux, des blocs de synthese et des formulaires pour fluidifier les usages'
              ],
              [
                'Harmonisation UI des composants: cartes, onglets, tableaux, champs, boutons, barres de progression et messages de feedback',
                'Amelioration de la lisibilite, des espacements et de la coherence d’ensemble entre les pages',
                'Conception d’interfaces plus robustes pour des parcours de consultation comme pour des demandes de gestion'
              ]
            ]
          },
          {
            title: 'Realisations',
            subtitle: 'Impact',
            bullets: [
              'Une experience plus moderne et plus homogene sur l’espace client',
              'Des ecrans plus lisibles pour consulter rapidement soldes, echeances, documents et informations de compte',
              'Une base UI plus stable pour faire evoluer les parcours bancaires dans le temps'
            ]
          }
        ]
      },
      {
        slug: 'caisse-des-depots',
        title: 'Caisse des Depots',
        summary: 'Conception d’une application metier pour les gestionnaires afin de liquider la retraite des mineurs, en reunissant plusieurs outils dans une plateforme simple, intuitive et accessible.',
        tags: ['UX/UI', 'Accessibilite RGAA', 'Tests utilisateurs'],
        image: '/assets/cdc.png',
        role: 'UX/UI, accessibilite RGAA',
        period: '2022 - 2023',
        overview: 'Creation d’une application metier unifiee pour remplacer plusieurs outils et simplifier le traitement de dossiers complexes.',
        focus: 'Organisation des parcours, travail sur les cas metier, prototypage et prise en compte des contraintes d’accessibilite.',
        outcome: 'Une plateforme plus intuitive pour les gestionnaires, avec moins de friction entre les etapes du traitement.'
      },
      {
        slug: 'resiliation-en-3-clics',
        title: 'Resiliation en 3 clics',
        summary: 'Conception d’un tunnel court et conforme pour simplifier la resiliation.',
        tags: ['Parcours', 'Legal UX', 'Conversion'],
        image: '/assets/resiliation-3-clics.png',
        role: 'Legal UX, parcours',
        period: '2024',
        overview: 'Conception d’un parcours de resiliation conforme aux exigences legales tout en restant simple pour l’utilisateur.',
        focus: 'Reduction du nombre d’etapes, clarification des messages et design d’un tunnel court centre sur l’action.',
        outcome: 'Un parcours plus direct, plus transparent et plus facile a finaliser.'
      },
      {
        slug: 'spotify-app',
        title: 'Spotify app',
        summary: 'Exploration d’une nouvelle fonctionnalite autour du blind test dans l’experience mobile.',
        tags: ['Concept', 'Mobile', 'Feature design'],
        image: '/assets/spotify-blind-test.jpg',
        role: 'Concept produit, mobile',
        period: 'Concept',
        overview: 'Exploration d’une fonctionnalite de blind test imaginee pour enrichir l’experience sociale et ludique de l’app.',
        focus: 'Scenario d’usage, mecanique de jeu, interaction mobile et mise en scene de la fonctionnalite.',
        outcome: 'Un concept clair et engageant, pense pour stimuler l’usage et la decouverte musicale.'
      },
      {
        slug: 'yoha-online-project',
        title: 'Yoha online project',
        summary: 'Direction produit et interface pour une experience bien-etre orientee usage et engagement.',
        tags: ['Wellness', 'UX/UI', 'Product design'],
        image: '/assets/yoha-home.jpg',
        role: 'Product direction, UX/UI',
        period: '2023',
        overview: 'Definition d’une experience digitale bien-etre structuree autour de la clarte du parcours et de l’engagement dans le temps.',
        focus: 'Vision produit, hierarchie des contenus et articulation entre promesse, usage et interface.',
        outcome: 'Une base produit plus coherente, avec une experience plus fluide et plus motivante pour l’utilisateur.'
      }
    ],
    competencies: [
      'UX Research',
      'UI Design',
      'Design Systems',
      'Accessibilite',
      'Service Design',
      'Prototypage rapide'
    ]
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'About'
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
      switchLabel: 'Enable dark mode'
    },
    role: 'Product designer',
    greeting: 'Hello, Marie Berthelet',
    companyIntroBefore: 'I am a',
    companyRole: 'product designer',
    companyIntroAfter: 'at',
    description:
      'I design user-centered product experiences, from strategy to interface, to create meaningful business value.',
    contactCta: 'Send a message',
    linkedIn: 'LinkedIn',
    skillsLabel: 'Skills',
    skillsTitle: 'What I bring to products',
    skillsDescription: 'A balanced approach combining research, design, and sustainable user journeys.',
    projectsLabel: 'Projects',
    projectsTitle: 'Selected projects',
    projectsDescription: '',
    projectPage: {
      back: 'Back to projects',
      eyebrow: 'Case study',
      role: 'Role',
      period: 'Period',
      overview: 'Context',
      focus: 'Approach',
      outcome: 'Impact',
      constraints: 'Constraints',
      related: 'More projects',
      gallery: 'Journey visuals'
    },
    experiencesTitle: 'My experience',
    projectsMiniTitle: 'My projects',
    experiences: [
      { company: 'Daxium', period: '2021' },
      { company: 'Caisse des Depots', period: '2022 - 2023' },
      { company: 'Banque Francaise Mutualiste', period: '2024 - 2025' },
      { company: 'APEC', period: '2025 - 2026' }
    ],
    contactLabel: 'Contact',
    contactTitle: 'Let’s talk about your next product',
    contactDescription: 'Available for freelance missions, design systems, and digital product experiences.',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send',
      success: (name) => `Thank you${name ? ` ${name}` : ''}! Your message has been sent (simulation).`
    },
    resume: {
      eyebrow: 'Resume',
      title: 'Marie Berthelet, Product Designer',
      intro:
        'This portfolio and resume page offer a clear overview of my UX, UI, and service design capabilities.',
      summaryTitle: 'Profile',
      summary:
        'Impact-driven product designer, supporting digital products and services from early strategy to final interface.',
      sections: {
        expertise: 'Expertise',
        tools: 'Methods and tools',
        highlights: 'Highlighted projects',
        contact: 'Contact details'
      },
      tools: ['Figma', 'Design systems', 'Prototyping', 'User research', 'Workshops', 'User testing'],
      contactText: 'Available for product design, UX/UI, and design system missions.',
      print: 'Print this resume',
      openPdf: 'Open PDF resume',
      embeddedTitle: 'My resume'
    },
    projects: [
      {
        slug: 'apec',
        title: 'APEC',
        summary: 'Product design and experience improvements for coaching and service-oriented journeys.',
        tags: ['UX', 'UI', 'Service design'],
        image: '/assets/apec.jpg',
        role: 'Product design, UX/UI',
        period: '2025 - 2026',
        heroHeadline: 'Designing an AI conversational interview simulator',
        overview: 'Design of journeys and interfaces to better support users in their tasks and make services easier to understand.',
        focus: 'Work on screen structure, information prioritization, and journey fluidity through a service design lens.',
        outcome: 'A clearer, more consistent experience across touchpoints and easier onboarding for users.',
        gallery: [
          { src: '/assets/apec/apec-step-1.png', alt: 'APEC interview personalization screen' },
          { src: '/assets/apec/apec-step-2.png', alt: 'APEC microphone and camera check screen' },
          { src: '/assets/apec/apec-step-3.png', alt: 'APEC virtual interview screen' },
          { src: '/assets/apec/apec-step-4.png', alt: 'APEC final summary screen' }
        ],
        sections: [
          {
            title: 'Context',
            text: 'As part of the development of a new interview simulator powered by artificial intelligence, I led the framing and design of the project, from understanding user needs to defining journeys and the first design directions, in close connection with both product and technical constraints.'
          },
          {
            title: 'Objectives',
            bullets: [
              'Frame an experience aligned with APEC user needs',
              'Design and structure pedagogical and interactive journeys',
              'Bring more value to content and feedback through UX writing',
              'Ensure UI consistency and accessibility',
              'Design a conversational experience powered by AI'
            ]
          },
          {
            title: 'Execution',
            subtitle: 'Tasks',
            columns: [
              [
                'Context exploration and discovery: audit the existing experience, collect business needs, interview stakeholders',
                'Contribute to functional specifications: prioritize features and define objectives',
                'UX design: wireframes, flows, and detailed user journeys for all key actions'
              ],
              [
                'High-fidelity mockups: ensure UI consistency across desktop, tablet, and mobile',
                'User testing and validation: prepare scripts, organize and facilitate testing sessions',
                'Structure user / AI interactions',
                'Design content and feedback patterns through UX writing'
              ]
            ]
          },
          {
            title: 'Execution',
            subtitle: 'Constraints',
            bullets: [
              'Design an understandable experience for varied profiles, from young graduates to senior executives',
              'Technical constraints: AI integration, response time, performance, stability',
              'Ethical and regulatory constraints: data protection, GDPR compliance, and transparency around AI usage'
            ]
          }
        ]
      },
      {
        slug: 'banque-francaise-mutualiste',
        title: 'Banque Francaise Mutualiste',
        summary: 'Redesign of banking journeys and clearer, easier-to-read interfaces.',
        tags: ['UX', 'UI', 'Design System'],
        image: '/assets/banque-francaise-mutualiste.png',
        role: 'UX/UI, design system',
        period: '2024 - 2025',
        heroHeadline: 'Redesigning the client area and harmonizing core banking journeys',
        overview: 'Redesign of banking journeys to simplify service understanding and create more coherent interfaces.',
        focus: 'Reworking key journeys, clarifying content, and aligning the UI with stronger reusable components.',
        outcome: 'Cleaner screens, better readability, and a more reliable foundation for future product changes.',
        gallery: [
          { src: '/assets/bfm/bfm-1.png', alt: 'Banque Francaise Mutualiste documents screen' },
          { src: '/assets/bfm/bfm-2.png', alt: 'Banque Francaise Mutualiste credit detail screen' },
          { src: '/assets/bfm/bfm-3.png', alt: 'Banque Francaise Mutualiste savings account details screen' },
          { src: '/assets/bfm/bfm-4.png', alt: 'Banque Francaise Mutualiste client area home screen' },
          { src: '/assets/bfm/bfm-5.png', alt: 'Banque Francaise Mutualiste direct debit date change screen' },
          { src: '/assets/bfm/bfm-6.png', alt: 'Banque Francaise Mutualiste early repayment screen' },
          { src: '/assets/bfm/bfm-7.png', alt: 'Banque Francaise Mutualiste direct debit account change screen' },
          { src: '/assets/bfm/bfm-8.png', alt: 'Banque Francaise Mutualiste credits menu screen' },
          { src: '/assets/bfm/bfm-9.png', alt: 'Banque Francaise Mutualiste direct debit account form screen' }
        ],
        sections: [
          {
            title: 'Context',
            text: 'As part of the modernization of the Banque Francaise Mutualiste client area, I worked on several high-value journeys: home, loans, savings, documents, and account management requests. The goal was to create a clearer, more reassuring, and more consistent experience across the platform.'
          },
          {
            title: 'Objectives',
            bullets: [
              'Make banking and contractual information easier to read',
              'Standardize interface components and patterns across journeys',
              'Simplify consultation, document download, and common management actions',
              'Modernize the client area while preserving familiar user landmarks',
              'Create a stronger foundation for future product evolution'
            ]
          },
          {
            title: 'Execution',
            subtitle: 'Contributions',
            columns: [
              [
                'Redesign of key client-area screens: homepage, loan consultation, history, documents, and savings',
                'Reworked visual hierarchy to better highlight important information, statuses, and available actions',
                'Improved the structure of tables, summary blocks, and forms to support smoother use'
              ],
              [
                'UI harmonization of components: cards, tabs, tables, fields, buttons, progress bars, and feedback states',
                'Improved readability, spacing, and overall consistency across pages',
                'Designed more robust interfaces for both consultation journeys and account-management requests'
              ]
            ]
          },
          {
            title: 'Execution',
            subtitle: 'Impact',
            bullets: [
              'A more modern and more consistent experience across the client area',
              'Clearer screens for quickly reviewing balances, due dates, documents, and account information',
              'A more stable UI foundation for evolving banking journeys over time'
            ]
          }
        ]
      },
      {
        slug: 'caisse-des-depots',
        title: 'Caisse des Depots',
        summary: 'Design of a business application for administrators to process miners’ retirement claims by merging several tools into one platform that is simple, intuitive, and accessible.',
        tags: ['UX/UI', 'RGAA accessibility', 'User testing'],
        image: '/assets/cdc.png',
        role: 'UX/UI, accessibility',
        period: '2022 - 2023',
        overview: 'Creation of a unified business application to replace multiple tools and simplify the handling of complex files.',
        focus: 'Journey design, business-case mapping, prototyping, and accessibility constraints built into the process.',
        outcome: 'A more intuitive platform for administrators, with less friction between each processing step.'
      },
      {
        slug: 'resiliation-en-3-clics',
        title: '3-click cancellation',
        summary: 'Design of a short, compliant funnel to simplify cancellation.',
        tags: ['Journey', 'Legal UX', 'Conversion'],
        image: '/assets/resiliation-3-clics.png',
        role: 'Legal UX, journey design',
        period: '2024',
        overview: 'Design of a compliant cancellation flow that still feels simple and direct for users.',
        focus: 'Reducing the number of steps, clarifying messaging, and shaping a short action-driven funnel.',
        outcome: 'A more direct, transparent journey that is easier for users to complete.'
      },
      {
        slug: 'spotify-app',
        title: 'Spotify app',
        summary: 'Exploration of a new blind-test feature within the mobile experience.',
        tags: ['Concept', 'Mobile', 'Feature design'],
        image: '/assets/spotify-blind-test.jpg',
        role: 'Product concept, mobile',
        period: 'Concept',
        overview: 'Exploration of a blind-test feature imagined to enrich the social and playful side of the app.',
        focus: 'Usage scenario, game mechanics, mobile interaction, and overall feature storytelling.',
        outcome: 'A clear, engaging concept designed to drive usage and music discovery.'
      },
      {
        slug: 'yoha-online-project',
        title: 'Yoha online project',
        summary: 'Product direction and interface design for a wellness experience focused on usage and engagement.',
        tags: ['Wellness', 'UX/UI', 'Product design'],
        image: '/assets/yoha-home.jpg',
        role: 'Product direction, UX/UI',
        period: '2023',
        overview: 'Definition of a wellness digital experience structured around journey clarity and long-term engagement.',
        focus: 'Product vision, content hierarchy, and alignment between promise, usage, and interface.',
        outcome: 'A more coherent product foundation with a smoother and more motivating user experience.'
      }
    ],
    competencies: [
      'UX Research',
      'UI Design',
      'Design Systems',
      'Accessibility',
      'Service Design',
      'Rapid prototyping'
    ]
  }
};

const baseProfile = {
  name: 'Marie Berthelet',
  heroImage,
  socialLinks: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/marieberthelet/' }
  ]
};

function getPageFromHash(hash) {
  if (hash === '#about') {
    return 'resume';
  }

  if (hash.startsWith('#project/')) {
    return 'project';
  }

  return 'home';
}

function getProjectSlugFromHash(hash) {
  return hash.startsWith('#project/') ? decodeURIComponent(hash.slice('#project/'.length)) : '';
}

function getDefaultProjectSections(project, labels) {
  return [
    {
      title: labels.overview,
      text: project.overview
    },
    {
      title: labels.focus,
      text: project.focus
    },
    {
      title: labels.outcome,
      text: project.outcome
    }
  ];
}

export default function App() {
  const [language, setLanguage] = useState('fr');
  const [theme, setTheme] = useState(() => window.localStorage.getItem('theme') || 'light');
  const [currentPage, setCurrentPage] = useState(() => getPageFromHash(window.location.hash));
  const [currentProjectSlug, setCurrentProjectSlug] = useState(() => getProjectSlugFromHash(window.location.hash));
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formMessage, setFormMessage] = useState('');
  const resumeProjectsRef = useRef(null);
  const homeProjectsRef = useRef(null);
  const year = useMemo(() => new Date().getFullYear(), []);

  const profile = useMemo(() => ({
    ...baseProfile,
    ...content[language]
  }), [language]);
  const currentProject = useMemo(
    () => profile.projects.find((project) => project.slug === currentProjectSlug) || null,
    [profile, currentProjectSlug]
  );
  const relatedProjects = useMemo(
    () => profile.projects.filter((project) => project.slug !== currentProjectSlug).slice(0, 3),
    [profile, currentProjectSlug]
  );
  const projectSections = useMemo(
    () => (currentProject ? currentProject.sections || getDefaultProjectSections(currentProject, profile.projectPage) : []),
    [currentProject, profile]
  );

  useEffect(() => {
    function handleHashChange() {
      setCurrentPage(getPageFromHash(window.location.hash));
      setCurrentProjectSlug(getProjectSlugFromHash(window.location.hash));
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const cleanName = formData.name.trim();
    setFormMessage(profile.form.success(cleanName));
    setFormData({ name: '', email: '', message: '' });
  }

  function showHomeSection(sectionId) {
    if (currentPage !== 'home') {
      window.location.hash = '';
      setCurrentPage('home');
      setCurrentProjectSlug('');
      window.setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function scrollProjects(containerRef, direction) {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const offset = Math.min(container.clientWidth * 0.9, 420) * direction;
    container.scrollBy({ left: offset, behavior: 'smooth' });
  }

  function openProject(projectSlug) {
    window.location.hash = `#project/${projectSlug}`;
    setCurrentProjectSlug(projectSlug);
    setCurrentPage('project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" onClick={() => showHomeSection('top')}>
            {baseProfile.name}
          </a>
          <nav className="site-nav" aria-label="Navigation principale">
            <button type="button" className="nav-link" onClick={() => showHomeSection('top')}>
              {profile.nav.home}
            </button>
            <button type="button" className="nav-link" onClick={() => showHomeSection('work')}>
              {profile.nav.projects}
            </button>
            <button type="button" className="nav-link" onClick={() => showHomeSection('contact')}>
              {profile.nav.contact}
            </button>
            <a
              className={`nav-link${currentPage === 'resume' ? ' is-active' : ''}`}
              href="#about"
              onClick={() => setCurrentPage('resume')}
            >
              {profile.nav.resume}
            </a>
          </nav>
          <div className="header-controls">
            <button
              type="button"
              className="lang-switch"
              onClick={() => setLanguage((previous) => (previous === 'fr' ? 'en' : 'fr'))}
              aria-label={language === 'fr' ? 'Switch to English' : 'Passer en francais'}
            >
              <span className={language === 'fr' ? 'is-active' : ''}>FR</span>
              <span>/</span>
              <span className={language === 'en' ? 'is-active' : ''}>EN</span>
            </button>
          </div>
        </div>
      </header>

      {currentPage === 'resume' ? (
        <main className="resume-page">
          <section className="resume-hero container">
            <div className="resume-copy">
              <span className="eyebrow">{profile.resume.eyebrow}</span>
              <h1>{profile.resume.title}</h1>
              <p className="resume-intro">{profile.resume.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href={baseProfile.socialLinks[0].url} target="_blank" rel="noreferrer">
                  {profile.linkedIn}
                </a>
                <a className="button button-outline" href={resumePdf} target="_blank" rel="noreferrer">
                  {profile.resume.openPdf}
                </a>
                <button type="button" className="button button-outline" onClick={() => window.print()}>
                  {profile.resume.print}
                </button>
              </div>
            </div>
            <div className="resume-photo-wrap">
              <img className="resume-photo" src={profile.heroImage} alt={`${baseProfile.name} portrait`} />
            </div>
          </section>

          <section className="container resume-grid">
            <article className="resume-card">
              <span className="section-label">{profile.resume.summaryTitle}</span>
              <p>{profile.resume.summary}</p>
            </article>
            <article className="resume-card">
              <span className="section-label">{profile.resume.sections.expertise}</span>
              <ul className="resume-list">
                {profile.competencies.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
            <article className="resume-card">
              <span className="section-label">{profile.resume.sections.tools}</span>
              <ul className="resume-list">
                {profile.resume.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </article>
            <article className="resume-card">
              <span className="section-label">{profile.resume.sections.contact}</span>
              <p>{profile.resume.contactText}</p>
              <a className="resume-link" href={baseProfile.socialLinks[0].url} target="_blank" rel="noreferrer">
                {baseProfile.socialLinks[0].url}
              </a>
            </article>
          </section>

          <section className="container resume-document-section">
            <div className="resume-document-head">
              <span className="section-label">{profile.resume.embeddedTitle}</span>
            </div>
            <div className="resume-document-frame">
              <iframe src={resumePdf} title={profile.resume.embeddedTitle} className="resume-document" />
            </div>
          </section>

          <section className="section section-projects">
            <div className="container section-top">
              <div className="section-head">
                <span className="section-label">{profile.resume.sections.highlights}</span>
                <h2>{profile.projectsTitle}</h2>
              </div>
            </div>
            <div className="container project-carousel" aria-label="Navigation des projets">
              <button type="button" className="project-arrow project-arrow-left" onClick={() => scrollProjects(resumeProjectsRef, -1)} aria-label="Projet precedent">
                ←
              </button>
              <div ref={resumeProjectsRef} className="project-scroll">
                {profile.projects.map((project) => (
                  <button
                    key={project.title}
                    type="button"
                    className="project-card project-card-scroll project-card-button"
                    onClick={() => openProject(project.slug)}
                  >
                    <div className="project-thumb">
                      <img className="project-image" src={project.image} alt={`Preview ${project.title}`} />
                    </div>
                    <div className="project-body">
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                      <ul className="tag-list">
                        {project.tags.map((tag) => (
                          <li key={`${project.title}-${tag}`}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </button>
                ))}
              </div>
              <button type="button" className="project-arrow project-arrow-right" onClick={() => scrollProjects(resumeProjectsRef, 1)} aria-label="Projet suivant">
                →
              </button>
            </div>
          </section>
        </main>
      ) : currentPage === 'project' && currentProject ? (
        <main className="project-page">
          <section className="project-page-hero">
            <div className="container project-page-hero-inner">
              <a className="project-back-link" href="#work" onClick={() => showHomeSection('work')}>
                ← {profile.projectPage.back}
              </a>
              <div className="project-page-grid">
                <div className="project-page-visual">
                  <img className="project-page-image project-page-image-hero" src={currentProject.image} alt={`Preview ${currentProject.title}`} />
                </div>
                <div className="project-page-copy">
                  <span className="project-page-kicker">{currentProject.title}</span>
                  <h1>{currentProject.heroHeadline || currentProject.summary}</h1>
                </div>
              </div>
            </div>
            <div className="project-page-wave" aria-hidden="true" />
          </section>

          {currentProject.gallery ? (
            <section className="project-story-section project-gallery-section">
              <div className="container project-gallery-shell">
                <div className="project-story-title project-gallery-title">
                  <h2>{profile.projectPage.gallery}</h2>
                </div>
                <div className="project-gallery-grid">
                  {currentProject.gallery.map((visual, index) => (
                    <Fragment key={visual.src}>
                      {currentProject.slug === 'banque-francaise-mutualiste' && index === 5 ? (
                        <div className="project-gallery-divider">
                          <h3>L'espace client BFM partie crédit : AVANT</h3>
                        </div>
                      ) : null}
                      <figure className="project-gallery-card">
                        <img className="project-gallery-image" src={visual.src} alt={visual.alt} />
                      </figure>
                    </Fragment>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {projectSections.map((section, index) => (
            <section key={`${currentProject.slug}-${section.title}-${index}`} className="project-story-section">
              <div className="container project-story-grid">
                <div className="project-story-title">
                  <h2>{section.title}</h2>
                  {section.subtitle ? <h3>{section.subtitle}</h3> : null}
                </div>
                <div className="project-story-content">
                  {section.text ? <p>{section.text}</p> : null}
                  {section.bullets ? (
                    <ul className="project-story-list">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.columns ? (
                    <div className="project-story-columns">
                      {section.columns.map((column, columnIndex) => (
                        <ul key={`${section.title}-col-${columnIndex}`} className="project-story-list">
                          {column.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
          ))}

          <section className="section section-projects">
            <div className="container section-top">
              <div className="section-head">
                <span className="section-label">{profile.projectsLabel}</span>
                <h2>{profile.projectPage.related}</h2>
              </div>
            </div>
            <div className="container project-grid project-grid-related">
              {relatedProjects.map((project) => (
                <button
                  key={`related-${project.slug}`}
                  type="button"
                  className="project-card project-card-button"
                  onClick={() => openProject(project.slug)}
                >
                  <div className="project-thumb">
                    <img className="project-image" src={project.image} alt={`Preview ${project.title}`} />
                  </div>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <ul className="tag-list">
                      {project.tags.map((tag) => (
                        <li key={`${project.slug}-${tag}`}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </main>
      ) : (
        <main id="top">
          <section className="hero">
            <div className="hero-left">
              <div className="hero-right-copy">
                <div className="hero-meta">
                  <a className="hero-meta-link" href={baseProfile.socialLinks[0].url} target="_blank" rel="noreferrer">
                    {baseProfile.socialLinks[0].label}
                  </a>
                </div>
                <div className="hero-heading-block">
                  <div className="hero-greeting">
                    <span className="hero-greeting-text">{profile.greeting}</span>
                    <img className="hero-avatar" src={profile.heroImage} alt={`${baseProfile.name} portrait`} />
                  </div>
                  <p className="hero-role-line">
                    <span className="hero-role-soft">{profile.companyIntroBefore}</span>{' '}
                    <span className="hero-role-strong">{profile.companyRole}</span>{' '}
                    <span className="hero-role-soft">{profile.companyIntroAfter}</span>
                  </p>
                  <div className="hero-company">
                    <span className="hero-company-name">Listen too</span>
                    <img className="hero-company-logo" src="/assets/listen-too-logo.png" alt="Listen too" />
                  </div>
                </div>
                <div className="hero-cta-row">
                  <div className="hero-actions">
                    <a className="button button-primary" href="#contact" onClick={() => showHomeSection('contact')}>
                      {profile.contactCta}
                    </a>
                    <a className="button button-outline" href={baseProfile.socialLinks[0].url} target="_blank" rel="noreferrer">
                      {profile.linkedIn}
                    </a>
                  </div>
                  <p className="hero-description hero-description-inline">{profile.description}</p>
                </div>
                <div className="hero-experience-block">
                  <div className="hero-highlight-grid">
                    <div className="hero-experiences-group">
                      <h2 className="hero-experience-title">{profile.experiencesTitle}</h2>
                      <div className="experience-card experience-card-compact">
                        <ul className="experience-timeline">
                          {profile.experiences.map((experience) => (
                            <li key={`${experience.company}-${experience.period}`} className="experience-item">
                              <span className="experience-dot" aria-hidden="true" />
                              <div className="experience-content">
                                <span className="experience-company">{experience.company}</span>
                                <span className="experience-period">{experience.period}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="hero-projects-group">
                      <h2 className="hero-experience-title">{profile.projectsMiniTitle}</h2>
                      <div className="hero-project-cards">
                        {profile.projects.slice(0, 2).map((project) => (
                          <button
                            key={`hero-${project.title}`}
                            type="button"
                            className="hero-project-card hero-project-card-button"
                            onClick={() => openProject(project.slug)}
                          >
                            <div className="hero-project-thumb">
                              <img className="hero-project-image" src={project.image} alt={`Apercu du projet ${project.title}`} />
                            </div>
                            <div className="hero-project-body">
                              <h3>{project.title}</h3>
                              <p>{project.summary}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="section section-skills">
            <div className="container">
              <div className="section-head">
                <span className="section-label">{profile.skillsLabel}</span>
                <h2>{profile.skillsTitle}</h2>
                <p>{profile.skillsDescription}</p>
              </div>
              <div className="skills-grid">
                {profile.competencies.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          </section>

          <section id="work" className="section section-projects">
            <div className="container section-top">
              <div className="section-head">
                <span className="section-label">{profile.projectsLabel}</span>
                <h2>{profile.projectsTitle}</h2>
                <p>{profile.projectsDescription}</p>
              </div>
            </div>
            <div className="container project-carousel" aria-label="Project navigation">
              <button type="button" className="project-arrow project-arrow-left" onClick={() => scrollProjects(homeProjectsRef, -1)} aria-label="Previous project">
                ←
              </button>
              <div ref={homeProjectsRef} className="project-scroll">
                {profile.projects.map((project) => (
                  <button
                    key={project.title}
                    id={`project-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    type="button"
                    className="project-card project-card-scroll project-card-button"
                    onClick={() => openProject(project.slug)}
                  >
                    <div className="project-thumb">
                      <img className="project-image" src={project.image} alt={`Apercu du projet ${project.title}`} />
                    </div>
                    <div className="project-body">
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                      <ul className="tag-list">
                        {project.tags.map((tag) => (
                          <li key={`${project.title}-${tag}`}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </button>
                ))}
              </div>
              <button type="button" className="project-arrow project-arrow-right" onClick={() => scrollProjects(homeProjectsRef, 1)} aria-label="Next project">
                →
              </button>
            </div>
          </section>

          <section id="contact" className="section section-contact">
            <div className="container contact-panel">
              <div className="contact-info">
                <span className="section-label">{profile.contactLabel}</span>
                <h2>{profile.contactTitle}</h2>
                <p>{profile.contactDescription}</p>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">{profile.form.name}</label>
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} />

                <label htmlFor="email">{profile.form.email}</label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />

                <label htmlFor="message">{profile.form.message}</label>
                <textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleChange} />

                <button type="submit">{profile.form.submit}</button>
                <p className="form-message" aria-live="polite">{formMessage}</p>
              </form>
            </div>
          </section>
        </main>
      )}

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {year} {baseProfile.name}</p>
          <div className="social-links-footer">
            {baseProfile.socialLinks.map((link) => (
              <a key={`footer-${link.label}`} href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <button
        type="button"
        className={`theme-toggle-fab${theme === 'dark' ? ' is-dark' : ''}`}
        onClick={() => setTheme((previous) => (previous === 'light' ? 'dark' : 'light'))}
        aria-label={profile.theme.switchLabel}
        aria-pressed={theme === 'dark'}
      >
        <span className="theme-toggle-track" aria-hidden="true">
          <span className="theme-toggle-thumb" />
        </span>
      </button>
    </>
  );
}
