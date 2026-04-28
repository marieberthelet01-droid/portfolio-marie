import { useEffect, useMemo, useRef, useState } from 'react';
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
        title: 'APEC',
        summary: 'Conception produit et amelioration de l’experience pour des parcours d’accompagnement et de service.',
        tags: ['UX', 'UI', 'Service design'],
        image: '/assets/apec.jpg'
      },
      {
        title: 'Banque Francaise Mutualiste',
        summary: 'Refonte de parcours bancaires et amelioration de la lisibilite des ecrans.',
        tags: ['UX', 'UI', 'Design System'],
        image: '/assets/banque-francaise-mutualiste.png'
      },
      {
        title: 'Caisse des Depots',
        summary: 'Conception d’une application metier pour les gestionnaires afin de liquider la retraite des mineurs, en reunissant plusieurs outils dans une plateforme simple, intuitive et accessible.',
        tags: ['UX/UI', 'Accessibilite RGAA', 'Tests utilisateurs'],
        image: '/assets/cdc.png'
      },
      {
        title: 'Resiliation en 3 clics',
        summary: 'Conception d’un tunnel court et conforme pour simplifier la resiliation.',
        tags: ['Parcours', 'Legal UX', 'Conversion'],
        image: '/assets/resiliation-3-clics.png'
      },
      {
        title: 'Spotify app',
        summary: 'Exploration d’une nouvelle fonctionnalite autour du blind test dans l’experience mobile.',
        tags: ['Concept', 'Mobile', 'Feature design'],
        image: '/assets/spotify-blind-test.jpg'
      },
      {
        title: 'Yoha online project',
        summary: 'Direction produit et interface pour une experience bien-etre orientee usage et engagement.',
        tags: ['Wellness', 'UX/UI', 'Product design'],
        image: '/assets/yoha-home.jpg'
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
        title: 'APEC',
        summary: 'Product design and experience improvements for coaching and service-oriented journeys.',
        tags: ['UX', 'UI', 'Service design'],
        image: '/assets/apec.jpg'
      },
      {
        title: 'Banque Francaise Mutualiste',
        summary: 'Redesign of banking journeys and clearer, easier-to-read interfaces.',
        tags: ['UX', 'UI', 'Design System'],
        image: '/assets/banque-francaise-mutualiste.png'
      },
      {
        title: 'Caisse des Depots',
        summary: 'Design of a business application for administrators to process miners’ retirement claims by merging several tools into one platform that is simple, intuitive, and accessible.',
        tags: ['UX/UI', 'RGAA accessibility', 'User testing'],
        image: '/assets/cdc.png'
      },
      {
        title: '3-click cancellation',
        summary: 'Design of a short, compliant funnel to simplify cancellation.',
        tags: ['Journey', 'Legal UX', 'Conversion'],
        image: '/assets/resiliation-3-clics.png'
      },
      {
        title: 'Spotify app',
        summary: 'Exploration of a new blind-test feature within the mobile experience.',
        tags: ['Concept', 'Mobile', 'Feature design'],
        image: '/assets/spotify-blind-test.jpg'
      },
      {
        title: 'Yoha online project',
        summary: 'Product direction and interface design for a wellness experience focused on usage and engagement.',
        tags: ['Wellness', 'UX/UI', 'Product design'],
        image: '/assets/yoha-home.jpg'
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
  return hash === '#about' ? 'resume' : 'home';
}

export default function App() {
  const [language, setLanguage] = useState('fr');
  const [theme, setTheme] = useState(() => window.localStorage.getItem('theme') || 'light');
  const [currentPage, setCurrentPage] = useState(() => getPageFromHash(window.location.hash));
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formMessage, setFormMessage] = useState('');
  const resumeProjectsRef = useRef(null);
  const homeProjectsRef = useRef(null);
  const year = useMemo(() => new Date().getFullYear(), []);

  const profile = useMemo(() => ({
    ...baseProfile,
    ...content[language]
  }), [language]);

  useEffect(() => {
    function handleHashChange() {
      setCurrentPage(getPageFromHash(window.location.hash));
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
                  <article key={project.title} className="project-card project-card-scroll">
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
                  </article>
                ))}
              </div>
              <button type="button" className="project-arrow project-arrow-right" onClick={() => scrollProjects(resumeProjectsRef, 1)} aria-label="Projet suivant">
                →
              </button>
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
                          <article key={`hero-${project.title}`} className="hero-project-card">
                            <div className="hero-project-thumb">
                              <img className="hero-project-image" src={project.image} alt={`Apercu du projet ${project.title}`} />
                            </div>
                            <div className="hero-project-body">
                              <h3>{project.title}</h3>
                              <p>{project.summary}</p>
                            </div>
                          </article>
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
                  <article
                    key={project.title}
                    id={`project-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="project-card project-card-scroll"
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
                  </article>
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
