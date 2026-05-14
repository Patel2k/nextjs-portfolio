export const resume = {
  name: {
    first: 'Ajay',
    last: 'Patel K A',
    full: 'Ajay Patel K A',
    initials: 'AP',
  },
  contact: {
    email: 'ajaypatelka2002@gmail.com',
    phone: '+91 80732 00479',
    linkedin: 'https://linkedin.com/in/patel-k-a-',
    github: 'https://github.com/Patel2k',
    location: 'Bangalore, India',
  },
  tagline:
    'I build production-grade AI applications and scalable web platforms. Two seasons in, one trophy cabinet, and a relentless work-rate from box-to-box — frontend through backend.',
  stats: [
    { target: 2,     unit: '+', label: 'Years shipping prod AI'  },
    { target: 1000,  unit: '+', label: 'Active users served'     },
    { target: 35000, unit: '+', label: 'Data points scraped'     },
    { target: 97,    unit: '%', label: 'Workflow time reduced'   },
  ],
  chips: [
    'React · Python · Azure · GenAI',
  ],
  playerCard: {
    rating: 92,
    position: 'FSE',
    stats: [
      { val: 94, lbl: 'CODE' },
      { val: 96, lbl: 'DRI'  },
      { val: 91, lbl: 'PAS'  },
      { val: 93, lbl: 'SHO'  },
      { val: 88, lbl: 'DEF'  },
      { val: 95, lbl: 'PHY'  },
    ],
  },
  skills: [
    { name: 'Frontend',      rating: 94, tags: 'React · TypeScript · Tailwind · Vite'         },
    { name: 'Backend',       rating: 93, tags: 'Python · Django · Flask · Node · REST'         },
    { name: 'GenAI / LLM',   rating: 96, tags: 'GPT-4/5 · RAG · MCP · Prompt + Context Eng.'  },
    { name: 'Cloud',         rating: 88, tags: 'Azure AI · Functions · AWS · Docker'           },
    { name: 'Data & Systems',rating: 86, tags: 'SQL · MongoDB · Celery · Multi-threading'      },
    { name: 'Leadership',    rating: 90, tags: 'Mentor 500+ engineers · Cross-functional'      },
  ],
  experience: [
    {
      company:  'First American (India)',
      role:     'Software Development Engineer',
      period:   'Aug 2023 — Present',
      location: 'Bangalore, India',
      live:     true,
      highlights: [
        { minute: "12'",   bold: 'Architected & deployed production-grade AI applications', rest: ' using React, Vite, Tailwind + Python + Azure — serving 1,000+ active users and driving 80% customer acquisition growth.' },
        { minute: "34'",   bold: 'Built high-performance REST APIs in Django for HiveSight Document Intelligence', rest: ', with GPT-based entity extraction that lifted processing efficiency by 60%. Shipped to production in 15 days.' },
        { minute: "58'",   bold: 'Engineered automated scraping pipelines', rest: ' extracting 35,000+ structured data points across 4 sites with robust error handling.' },
        { minute: "71'",   bold: 'Led end-to-end development of a client-facing AI UI', rest: ' from concept to production in 2 months, with sub-2s load times.' },
        { minute: "90+3'", bold: 'Won the company-wide Prompt Engineering Hackathon', rest: ', outperforming every AI team. Earned Q3 Top Performer & Star of the Quarter.' },
      ],
    },
  ],
  projects: [
    {
      title:       'Open Order Automation',
      meta:        'Nov 2024 · AI Agent',
      description: 'An intelligent AI agent that automates a 2-hour manual order processing workflow by autonomously reading inbox emails & attachments, extracting 7 critical data fields using Azure Form Recognizer and GPT models, and submitting to the FAST system API.',
      highlight:   '97% time reduction',
      stack:       ['Django', 'Azure Form Recognizer', 'Celery', 'GPT-4/5', 'Agentic'],
    },
    {
      title:       'HiveSight — Document Intelligence',
      meta:        'Apr 2024 · Platform',
      description: 'Scalable REST APIs processing 10,000+ documents monthly at 92% extraction accuracy across Payoff, Deed & PSA types. Responsive React UI with real-time feedback that onboarded 1,000+ POC users and lifted engagement 250%.',
      highlight:   '250% engagement lift',
      stack:       ['Python', 'Django', 'React', 'GPT-3.5/4/5', 'Azure'],
    },
  ],
  honors: [
    { num: '01', title: 'Hackathon Winner — Prompt Engineering',  desc: 'First American company-wide, outperforming all AI-focused teams.' },
    { num: '02', title: 'Q3 Top Performer · Star of the Quarter', desc: 'Recognised for exceptional AI/ML innovation and rapid delivery.'  },
    { num: '03', title: 'Technical Head · BIET (2 years)',         desc: 'Led Information Science department — applications & tech events.' },
    { num: '04', title: 'Mentor · 500+ engineers',                desc: 'Guided peers on AI integration, prompt engineering & system design.' },
  ],
  education: {
    institution: 'Bapuji Institute of Engineering & Technology',
    degree:      'B.E. Information Science',
    gpa:         '8.5/10',
    period:      'Aug 2019 – May 2023',
    location:    'Davangere, Karnataka',
  },
} as const;

export type Resume = typeof resume;
