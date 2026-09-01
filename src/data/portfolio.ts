export type Locale = "en" | "pt";

export type Localized<T> = Record<Locale, T>;

export const profile = {
  name: "Ricardo Cunha",
  fullName: "Ricardo Dantas Cunha",
  title: {
    en: "Software Developer",
    pt: "Desenvolvedor de Software"
  },
  subtitle: {
    en: "Backend, APIs, Cloud & Scalable Systems",
    pt: "Backend, APIs, Cloud e Sistemas Escalaveis"
  },
  location: "Sao Paulo, Brazil",
  email: "ricardodc@hotmail.com",
  links: {
    github: "https://github.com/Cunha-Ricardo",
    linkedin: "https://www.linkedin.com/in/ricardo-dantas-cunha-a4aa9b216/",
    cv: "/Cunha-Ricardo-github.io-Portifolio/Ricardo-Dantas-Cunha-CV.pdf"
  }
};

export const content = {
  en: {
    nav: ["About", "Experience", "Stack", "Projects", "Contact"],
    heroSummary:
      "Full Stack Developer with strong backend work in Node.js and Python, modern frontend experience with React, Vue and Angular, and hands-on delivery of REST APIs, automation workflows, AI integrations and cloud deployments.",
    heroMeta: ["Full Stack / Backend", "AWS Cloud", "Automation", "AI APIs"],
    ctas: {
      projects: "View Projects",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Download CV"
    },
    aboutTitle: "About",
    about:
      "I build web applications and backend services that connect business workflows, data and user-facing products. My recent work spans end-to-end applications, corporate automation, generative AI assistants, system integrations and cloud deployments, with a focus on practical software that is maintainable, scalable and useful in production contexts.",
    aboutHighlights: [
      "Backend development with Node.js, Python and REST APIs",
      "Automation and system integrations with n8n, Make.com and IAM environments",
      "Frontend delivery with React, Vue, Angular and responsive interfaces",
      "Cloud deployment experience with AWS services and Vercel"
    ],
    sectionKicker: {
      experience: "Professional background",
      stack: "Technical range",
      projects: "Selected GitHub work",
      cases: "How I think",
      education: "Education",
      contact: "Contact"
    },
    experienceTitle: "Experience",
    stackTitle: "Tech Stack",
    projectsTitle: "Projects",
    casesTitle: "Featured Work / Case Studies",
    githubTitle: "GitHub",
    githubText:
      "My public GitHub includes newer TypeScript applications, dashboards, AI experiments and earlier frontend/API projects. The portfolio highlights the repositories with the clearest professional signal.",
    educationTitle: "Education",
    languagesTitle: "Languages",
    contactTitle: "Let's build something together.",
    contactText:
      "Open to software development opportunities in Brazil and Europe, especially roles involving backend systems, integrations, cloud and full stack delivery.",
    labels: {
      responsibilities: "Responsibilities",
      technologies: "Technologies",
      problem: "Problem",
      solution: "Solution",
      architecture: "Architecture / Stack",
      result: "Result",
      sourceNote: "Based on CV and public GitHub repositories",
      githubLink: "GitHub",
      demoLink: "Live demo",
      periodNotListed: "Period not listed in CV"
    }
  },
  pt: {
    nav: ["Sobre", "Experiencia", "Stack", "Projetos", "Contato"],
    heroSummary:
      "Desenvolvedor Full Stack com forte atuacao em backend com Node.js e Python, experiencia em frontend moderno com React, Vue e Angular, e entrega pratica de APIs REST, automacoes, integracoes com IA e deploys em nuvem.",
    heroMeta: ["Full Stack / Backend", "AWS Cloud", "Automacao", "APIs de IA"],
    ctas: {
      projects: "Ver Projetos",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Baixar CV"
    },
    aboutTitle: "Sobre",
    about:
      "Eu desenvolvo aplicacoes web e servicos backend que conectam fluxos de negocio, dados e produtos digitais. Minha atuacao recente inclui aplicacoes ponta a ponta, automacoes corporativas, assistentes com IA generativa, integracoes de sistemas e deploys em nuvem, com foco em software pratico, escalavel e facil de manter.",
    aboutHighlights: [
      "Backend com Node.js, Python e APIs REST",
      "Automacao e integracoes com n8n, Make.com e ambientes IAM",
      "Frontend com React, Vue, Angular e interfaces responsivas",
      "Deploy em nuvem com servicos AWS e Vercel"
    ],
    sectionKicker: {
      experience: "Trajetoria profissional",
      stack: "Alcance tecnico",
      projects: "Projetos selecionados",
      cases: "Como eu penso",
      education: "Formacao",
      contact: "Contato"
    },
    experienceTitle: "Experiencia",
    stackTitle: "Tech Stack",
    projectsTitle: "Projetos",
    casesTitle: "Featured Work / Estudos de Caso",
    githubTitle: "GitHub",
    githubText:
      "Meu GitHub publico inclui aplicacoes TypeScript recentes, dashboards, experimentos com IA e projetos anteriores de frontend/API. O portfolio destaca os repositorios com sinal profissional mais forte.",
    educationTitle: "Formacao",
    languagesTitle: "Idiomas",
    contactTitle: "Vamos construir algo juntos.",
    contactText:
      "Aberto a oportunidades de desenvolvimento de software no Brasil e na Europa, principalmente em backend, integracoes, cloud e entrega full stack.",
    labels: {
      responsibilities: "Responsabilidades",
      technologies: "Tecnologias",
      problem: "Problema",
      solution: "Solucao",
      architecture: "Arquitetura / Stack",
      result: "Resultado",
      sourceNote: "Baseado no curriculo e repositorios publicos do GitHub",
      githubLink: "GitHub",
      demoLink: "Demo",
      periodNotListed: "Periodo nao informado no curriculo"
    }
  }
} satisfies Localized<{
  nav: string[];
  heroSummary: string;
  heroMeta: string[];
  ctas: Record<"projects" | "linkedin" | "github" | "cv", string>;
  aboutTitle: string;
  about: string;
  aboutHighlights: string[];
  sectionKicker: Record<"experience" | "stack" | "projects" | "cases" | "education" | "contact", string>;
  experienceTitle: string;
  stackTitle: string;
  projectsTitle: string;
  casesTitle: string;
  githubTitle: string;
  githubText: string;
  educationTitle: string;
  languagesTitle: string;
  contactTitle: string;
  contactText: string;
  labels: Record<
    | "responsibilities"
    | "technologies"
    | "problem"
    | "solution"
    | "architecture"
    | "result"
    | "sourceNote"
    | "githubLink"
    | "demoLink"
    | "periodNotListed",
    string
  >;
}>;

export const experiences = [
  {
    company: "MyFlux",
    role: {
      en: "Full Stack Developer / Automation Specialist",
      pt: "Desenvolvedor Full Stack / Especialista em Automacao"
    },
    period: {
      en: "February 2026 - Present",
      pt: "Fevereiro de 2026 - Presente"
    },
    responsibilities: {
      en: [
        "Build and maintain complete web applications using Node.js for backend services and React/Vue for responsive interfaces.",
        "Develop corporate automation workflows and system integrations using n8n and Make.com.",
        "Implement and consume generative AI APIs, including OpenAI Assistants API and Gemini Pro, to create autonomous agents and intelligent assistants.",
        "Deploy, monitor and support applications on Vercel and cloud environments."
      ],
      pt: [
        "Criacao e manutencao de aplicacoes web completas usando Node.js no backend e React/Vue em interfaces responsivas.",
        "Desenvolvimento de automacoes corporativas e integracoes entre sistemas com n8n e Make.com.",
        "Implementacao e consumo de APIs de IA generativa, incluindo OpenAI Assistants API e Gemini Pro.",
        "Deploy, monitoramento e sustentacao de aplicacoes em Vercel e ambientes em nuvem."
      ]
    },
    technologies: ["Node.js", "React", "Vue", "n8n", "Make.com", "OpenAI API", "Gemini Pro", "Vercel"]
  },
  {
    company: "Pass",
    role: {
      en: "Backend / AI Developer",
      pt: "Desenvolvedor Backend / IA"
    },
    period: {
      en: "Period not listed in CV",
      pt: "Periodo nao informado no curriculo"
    },
    responsibilities: {
      en: [
        "Develop scalable backend applications with Node.js.",
        "Create and integrate custom AI solutions for web and mobile platforms.",
        "Work with performance, security and user experience as delivery priorities."
      ],
      pt: [
        "Desenvolvimento de aplicacoes backend escalaveis com Node.js.",
        "Criacao e integracao de solucoes de IA para plataformas web e mobile.",
        "Foco em performance, seguranca e experiencia do usuario."
      ]
    },
    technologies: ["Node.js", "AI integrations", "Web", "Mobile"]
  },
  {
    company: "NicolaSec",
    role: {
      en: "Python / Automation Developer",
      pt: "Desenvolvedor Python / Automacao"
    },
    period: {
      en: "Period not listed in CV",
      pt: "Periodo nao informado no curriculo"
    },
    responsibilities: {
      en: [
        "Automate corporate processes with Python and Java.",
        "Integrate systems in IAM environments using Broadcom IDM.",
        "Implement log pipelines, monitoring and auditing workflows."
      ],
      pt: [
        "Automacao de processos corporativos com Python e Java.",
        "Integracoes com sistemas IAM usando Broadcom IDM.",
        "Implementacao de pipelines de logs, monitoramento e auditoria."
      ]
    },
    technologies: ["Python", "Java", "Broadcom IDM", "IAM", "Logs", "Monitoring"]
  },
  {
    company: "Marketdata",
    role: {
      en: "Development Intern",
      pt: "Estagiario de Desenvolvimento"
    },
    period: {
      en: "Period not listed in CV",
      pt: "Periodo nao informado no curriculo"
    },
    responsibilities: {
      en: [
        "Develop high-conversion landing pages with HTML, CSS and JavaScript.",
        "Work on Google Cloud and WordPress projects with attention to SEO and performance."
      ],
      pt: [
        "Desenvolvimento de landing pages de alta conversao com HTML, CSS e JavaScript.",
        "Atuacao em projetos Google Cloud e WordPress com foco em SEO e performance."
      ]
    },
    technologies: ["HTML", "CSS", "JavaScript", "Google Cloud", "WordPress", "SEO"]
  }
];

export const techStack = [
  {
    category: "Backend",
    items: ["Node.js", "Python", "Java", "PHP", "Laravel", "APIs REST"]
  },
  {
    category: "Cloud / DevOps",
    items: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS IAM", "AWS RDS", "CloudFront", "CI/CD", "Vercel"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "Firebase Firestore"]
  },
  {
    category: "Frontend",
    items: ["React", "Vue", "Angular", "TypeScript", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Automation / AI",
    items: ["n8n", "Make.com", "OpenAI API", "OpenAI Assistants API", "Gemini Pro", "IAM"]
  },
  {
    category: "Methods",
    items: ["Git", "GitHub", "Scrum", "Kanban", "SEO", "Performance"]
  }
];

export const projects = [
  {
    name: "Desafio Flugo",
    repo: "https://github.com/Cunha-Ricardo/desafio_flugo",
    demo: "https://desafio-flugo-lac.vercel.app",
    description: {
      en: "Employee management application with multi-step registration, validation, paginated listing and real persistence with Firebase Firestore.",
      pt: "Aplicacao de gestao de funcionarios com cadastro em etapas, validacao, listagem paginada e persistencia real com Firebase Firestore."
    },
    problem: {
      en: "Organize employee registration and operational data in a clean, testable flow.",
      pt: "Organizar cadastro de funcionarios e dados operacionais em um fluxo claro e testavel."
    },
    technologies: ["React", "TypeScript", "Firebase Firestore", "Material UI", "Vercel", "GitHub"]
  },
  {
    name: "DashBet",
    repo: "https://github.com/Cunha-Ricardo/DashBet",
    demo: "https://dash-bet.vercel.app/dashboard",
    description: {
      en: "Dashboard for tracking betting performance, statistics, recent records, distribution charts and export-oriented workflows.",
      pt: "Dashboard para acompanhamento de desempenho em apostas, estatisticas, registros recentes, graficos de distribuicao e fluxos de exportacao."
    },
    problem: {
      en: "Turn scattered bet records into readable statistics and decision-oriented views.",
      pt: "Transformar registros dispersos de apostas em estatisticas legiveis e visoes orientadas a decisao."
    },
    technologies: ["Next.js", "TypeScript", "React", "Recharts", "shadcn/ui", "jsPDF"]
  },
  {
    name: "Voice AI App",
    repo: "https://github.com/Cunha-Ricardo/Chat_audio",
    demo: "",
    description: {
      en: "Voice and text chat interface with browser audio recording, transcription flow, OpenAI-powered responses and text-to-speech playback.",
      pt: "Interface de chat por voz e texto com gravacao de audio no navegador, fluxo de transcricao, respostas com OpenAI e reproducao por texto-para-fala."
    },
    problem: {
      en: "Make AI interaction more accessible through voice input, transcription and audible responses.",
      pt: "Tornar a interacao com IA mais acessivel por entrada de voz, transcricao e respostas audiveis."
    },
    technologies: ["Next.js", "TypeScript", "AI SDK", "OpenAI", "MediaRecorder", "Tailwind CSS"]
  },
  {
    name: "TravelPlanner",
    repo: "https://github.com/Cunha-Ricardo/TravelPlanner",
    demo: "",
    description: {
      en: "Travel planning product with itinerary, destination, currency, checklist and AI assistant surfaces.",
      pt: "Produto de planejamento de viagens com roteiros, destinos, conversao de moeda, checklist e assistente de IA."
    },
    problem: {
      en: "Centralize trip planning tasks into a guided experience backed by app routes and service integrations.",
      pt: "Centralizar tarefas de planejamento de viagem em uma experiencia guiada com rotas de app e integracoes de servico."
    },
    technologies: ["React", "TypeScript", "Vite", "Express", "OpenAI", "Drizzle ORM", "PostgreSQL"]
  },
  {
    name: "Idea to Task Hub",
    repo: "https://github.com/Cunha-Ricardo/idea-to-task-hub",
    demo: "",
    description: {
      en: "Project and task management interface with dashboards, ideas, tasks and project organization flows.",
      pt: "Interface de gestao de projetos e tarefas com dashboards, ideias, tarefas e fluxos de organizacao."
    },
    problem: {
      en: "Move ideas into trackable projects and tasks with clearer prioritization and status visibility.",
      pt: "Transformar ideias em projetos e tarefas acompanhaveis, com priorizacao e visibilidade de status."
    },
    technologies: ["React", "TypeScript", "Vite", "shadcn/ui", "React Router", "TanStack Query"]
  },
  {
    name: "HelpNow",
    repo: "https://github.com/Cunha-Ricardo/HelpNow",
    demo: "https://help-now-delta.vercel.app",
    description: {
      en: "Multilingual React application with structured sections, language context and production deployment on Vercel.",
      pt: "Aplicacao React multilingue com secoes estruturadas, contexto de idioma e deploy em producao na Vercel."
    },
    problem: {
      en: "Present a web product with language switching and reusable section architecture.",
      pt: "Apresentar um produto web com troca de idioma e arquitetura de secoes reutilizaveis."
    },
    technologies: ["React", "TypeScript", "Vite", "Language Context", "Tailwind CSS", "Vercel"]
  }
];

export const caseStudies = [
  {
    title: "Employee Management Workflow",
    project: "Desafio Flugo",
    problem: {
      en: "A technical challenge required a clear employee registration flow with persistent data and a polished admin experience.",
      pt: "Um desafio tecnico exigia um fluxo claro de cadastro de funcionarios com dados persistentes e experiencia administrativa bem acabada."
    },
    solution: {
      en: "Built a modular React/TypeScript app with step-based forms, validation, employee listing and Firestore integration.",
      pt: "Construiu uma aplicacao modular em React/TypeScript com formularios em etapas, validacao, listagem e integracao com Firestore."
    },
    architecture: ["React", "TypeScript", "Firebase Firestore", "Material UI", "Vercel"],
    result: {
      en: "A production-deployed application that demonstrates clean component structure, external service integration and UX for operational data.",
      pt: "Uma aplicacao publicada em producao que demonstra estrutura limpa de componentes, integracao externa e UX para dados operacionais."
    }
  },
  {
    title: "Voice AI Interface",
    project: "Chat_audio",
    problem: {
      en: "Typing is not always the best interface for AI-assisted workflows.",
      pt: "Digitar nem sempre e a melhor interface para fluxos assistidos por IA."
    },
    solution: {
      en: "Implemented browser recording, transcription, conversational responses and speech synthesis in a single chat experience.",
      pt: "Implementou gravacao no navegador, transcricao, respostas conversacionais e sintese de voz em uma experiencia unica de chat."
    },
    architecture: ["Next.js", "TypeScript", "OpenAI", "AI SDK", "MediaRecorder"],
    result: {
      en: "A practical AI application pattern that connects frontend media APIs with backend AI routes.",
      pt: "Um padrao pratico de aplicacao de IA que conecta APIs de midia do frontend com rotas backend de IA."
    }
  }
];

export const education = [
  {
    degree: {
      en: "Bachelor's Degree in Computer Science",
      pt: "Bacharelado em Ciencia da Computacao"
    },
    institution: "Universidade Sao Judas Tadeu"
  }
];

export const languages = [
  {
    name: {
      en: "English",
      pt: "Ingles"
    },
    level: {
      en: "Advanced",
      pt: "Avancado"
    }
  },
  {
    name: {
      en: "Spanish",
      pt: "Espanhol"
    },
    level: {
      en: "Advanced",
      pt: "Avancado"
    }
  }
];
