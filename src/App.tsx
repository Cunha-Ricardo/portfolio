import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Download,
  Github,
  Globe2,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  Menu,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  X
} from "lucide-react";
import { LanguageToggle } from "./components/LanguageToggle";
import { SectionHeader } from "./components/SectionHeader";
import {
  caseStudies,
  content,
  education,
  experiences,
  languages,
  profile,
  projects,
  techStack,
  type Locale
} from "./data/portfolio";

const stackIcons = [ServerCog, Cloud, Database, Code2, Bot, ShieldCheck];

export function App() {
  const [locale, setLocale] = useState<Locale>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "pt-BR";
  }, [locale]);

  const navItems = useMemo(
    () => [
      { label: t.nav[0], href: "#about" },
      { label: t.nav[1], href: "#experience" },
      { label: t.nav[2], href: "#stack" },
      { label: t.nav[3], href: "#projects" },
      { label: t.nav[4], href: "#contact" }
    ],
    [t.nav]
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="topbar">
        <a className="brand" href="#hero" aria-label="Ricardo Cunha home">
          <span>RC</span>
          <strong>Ricardo Cunha</strong>
        </a>

        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <LanguageToggle locale={locale} onChange={setLocale} />
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="main">
        <section id="hero" className="hero section-grid">
          <div className="hero-copy reveal">
            <span className="availability">
              <span aria-hidden="true" />
              {profile.location}
            </span>
            <p className="role">{profile.title[locale]}</p>
            <h1>{profile.name}</h1>
            <h2>{profile.subtitle[locale]}</h2>
            <p className="hero-summary">{t.heroSummary}</p>
            <div className="hero-tags" aria-label="Professional focus">
              {t.heroMeta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {t.ctas.projects}
                <ArrowUpRight size={18} />
              </a>
              <a className="button" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                {t.ctas.linkedin}
              </a>
              <a className="button" href={profile.links.github} target="_blank" rel="noreferrer">
                <Github size={18} />
                {t.ctas.github}
              </a>
              <a className="button" href={profile.links.cv} target="_blank" rel="noreferrer">
                <Download size={18} />
                {t.ctas.cv}
              </a>
            </div>
          </div>

          <div className="hero-panel reveal" aria-label="Professional summary card">
            <div className="panel-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="status-card">
              <span className="eyebrow">{t.labels.sourceNote}</span>
              <h3>Full Stack / Backend</h3>
              <p>Node.js, Python, REST APIs, AWS, automation and AI integrations.</p>
            </div>
            <div className="signal-grid" aria-label="Core capabilities">
              <div>
                <ServerCog size={22} />
                <strong>APIs</strong>
                <span>REST services</span>
              </div>
              <div>
                <Workflow size={22} />
                <strong>Automation</strong>
                <span>n8n / Make</span>
              </div>
              <div>
                <Cloud size={22} />
                <strong>Cloud</strong>
                <span>AWS / Vercel</span>
              </div>
              <div>
                <Bot size={22} />
                <strong>AI</strong>
                <span>OpenAI / Gemini</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <SectionHeader kicker="01" title={t.aboutTitle} />
          <div className="about-layout reveal">
            <p>{t.about}</p>
            <div className="about-list">
              {t.aboutHighlights.map((item) => (
                <div key={item}>
                  <Sparkles size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHeader kicker={t.sectionKicker.experience} title={t.experienceTitle} />
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item reveal" key={`${experience.company}-${experience.role.en}`}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-card">
                  <div className="card-heading">
                    <div>
                      <span>{experience.company}</span>
                      <h3>{experience.role[locale]}</h3>
                    </div>
                    <time>{experience.period[locale]}</time>
                  </div>
                  <div className="responsibility-list">
                    <strong>{t.labels.responsibilities}</strong>
                    <ul>
                      {experience.responsibilities[locale].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <TagList items={experience.technologies} label={t.labels.technologies} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="section">
          <SectionHeader kicker={t.sectionKicker.stack} title={t.stackTitle} />
          <div className="stack-grid">
            {techStack.map((group, index) => {
              const Icon = stackIcons[index] ?? Code2;
              return (
                <article className="stack-card reveal" key={group.category}>
                  <Icon size={24} />
                  <h3>{group.category}</h3>
                  <TagList items={group.items} label={group.category} />
                </article>
              );
            })}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionHeader kicker={t.sectionKicker.projects} title={t.projectsTitle} description={t.githubText} />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.name}>
                <div className="project-topline">
                  <span>{project.name}</span>
                  <div className="project-links">
                    <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub`}>
                      <Github size={18} />
                    </a>
                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`}>
                        <Globe2 size={18} />
                      </a>
                    ) : null}
                  </div>
                </div>
                <p>{project.description[locale]}</p>
                <div className="project-problem">
                  <strong>{t.labels.problem}</strong>
                  <span>{project.problem[locale]}</span>
                </div>
                <TagList items={project.technologies} label={t.labels.technologies} />
              </article>
            ))}
          </div>
        </section>

        <section id="case-studies" className="section">
          <SectionHeader kicker={t.sectionKicker.cases} title={t.casesTitle} />
          <div className="case-grid">
            {caseStudies.map((study) => (
              <article className="case-card reveal" key={study.title}>
                <span>{study.project}</span>
                <h3>{study.title}</h3>
                <CaseRow label={t.labels.problem} value={study.problem[locale]} />
                <CaseRow label={t.labels.solution} value={study.solution[locale]} />
                <div className="case-row">
                  <strong>{t.labels.architecture}</strong>
                  <TagList items={study.architecture} label={t.labels.architecture} />
                </div>
                <CaseRow label={t.labels.result} value={study.result[locale]} />
              </article>
            ))}
          </div>
        </section>

        <section id="github" className="github-band reveal" aria-labelledby="github-title">
          <div>
            <span className="eyebrow">{t.sectionKicker.projects}</span>
            <h2 id="github-title">{t.githubTitle}</h2>
            <p>{t.githubText}</p>
          </div>
          <a className="button button-primary" href={profile.links.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            github.com/Cunha-Ricardo
          </a>
        </section>

        <section className="section education-section">
          <div>
            <SectionHeader kicker={t.sectionKicker.education} title={t.educationTitle} />
            <div className="info-card reveal">
              <GraduationCap size={24} />
              {education.map((item) => (
                <div key={item.institution}>
                  <h3>{item.degree[locale]}</h3>
                  <p>{item.institution}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader kicker="Languages" title={t.languagesTitle} />
            <div className="info-card reveal">
              <Languages size={24} />
              {languages.map((item) => (
                <div key={item.name.en}>
                  <h3>{item.name[locale]}</h3>
                  <p>{item.level[locale]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section reveal">
          <span className="eyebrow">{t.sectionKicker.contact}</span>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              {profile.email}
            </a>
            <a className="button" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a className="button" href={profile.links.github} target="_blank" rel="noreferrer">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>{profile.fullName}</span>
        <span>Software Developer - Backend, APIs, Cloud & Automation</span>
      </footer>
    </div>
  );
}

function TagList({ items, label }: { items: string[]; label: string }) {
  return (
    <div className="tag-list" aria-label={label}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function CaseRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="case-row">
      <strong>{label}</strong>
      <p>{value}</p>
    </div>
  );
}
