const en = {
  meta: {
    title: '$szymon_wardak = "Full Stack Software Engineer"',
    description:
      'Full Stack Software Engineer from Warsaw, focused on backend and system architecture. JS/TS, Python, Golang and PHP, running in Docker on Linux.',
  },
  nav: {
    main: 'Main',
    about: 'About',
    stack: 'Stack',
    experience: 'Experience',
    contact: 'Contact',
  },
  about: {
    label: 'about',
    heading: 'I build web systems end to end, with a soft spot for the backend.',
    body: 'Full Stack Software Engineer focused on backend and system architecture. I ship production apps in PHP, Python and React, running in Docker on Linux. Currently chasing distributed systems, and on the side exploring data science and AI.',
    facts: ['Warsaw, PL', 'Full Stack Engineer', 'Commercial since 2024'],
  },
  stack: {
    label: 'stack',
    heading: 'Languages I work in, and what I build with them.',
  },
  experience: {
    label: 'experience',
    heading: "Where I've been shipping code.",
    close: 'Close',
    jobs: [
      {
        role: 'Full-stack Developer',
        company: 'Codefellow',
        period: '2024 - Present',
        summary: 'SaaS & CRM systems, moving step by step to microservices.',
        short:
          'I develop and maintain business applications - from gathering requirements with the client to testing, deployment and monitoring. I build frontends in JS/TS, backends in PHP and microservices in Python and Go. I optimize databases, build device integrations and manage server infrastructure.',
        long: [
          'I own tasks across the full application lifecycle: from talking with the client and defining requirements, through planning and implementation, to testing, deployment and maintenance. I build frontends in JavaScript and TypeScript, backends in PHP and microservices in Python and Go.',
          'I work both on existing systems and on solutions built from scratch. I improve application performance by tuning SQL queries and choosing the right indexes. I build device integrations, data processing and transfer over MQTT, and mechanisms for authenticating application instances and handling certificates.',
          "I'm also responsible for server infrastructure, MQTT broker configuration, containerization and deployment automation with GitHub Actions. I write unit and integration tests and set up error monitoring that supports system maintenance.",
        ],
        tags: ['PHP', 'Python', 'Go', 'JS/TS', 'SQL', 'MQTT', 'Docker', 'GitHub Actions', 'Linux'],
      },
      {
        role: 'Full-stack Developer',
        company: 'Freelance',
        period: '2024 - Present',
        summary: 'Custom web apps, and the servers they run on.',
        short:
          'I design, build and deploy websites and applications in the JS/TS ecosystem - from landing pages to admin panels and integrations. I use React, Next.js, TanStack Start and Hono, deploying to the edge as well. I also build ML models for price prediction, automating data preparation and retraining.',
        long: [
          'I help clients turn business needs into working websites and applications. I handle requirements, interface design, implementation, deployment and ongoing maintenance. I build landing pages, company websites, integrations and admin panels - using WordPress or building custom solutions tailored to the project.',
          "I work mainly in JavaScript and TypeScript, using React, Next.js, TanStack Start and Hono. I match the technology and deployment model to each application's needs, using both edge environments and self-managed servers.",
          'I also develop ML solutions for price prediction based on datasets I collect and prepare myself. I build pipelines that periodically check for data changes and automatically retrain models. I also work on model versioning and on evaluating model quality before replacing the version in use.',
        ],
        tags: [
          'React',
          'Next.js',
          'TanStack Start',
          'Hono',
          'Cloudflare',
          'WordPress',
          'Python',
          'FastAPI',
          'Django',
          'DRF',
          'PHP',
          'Laravel',
          'Go',
          'Docker',
          'GitHub Actions',
          'ML',
        ],
      },
    ],
  },
  contact: {
    label: 'contact',
    heading: "Got a project or a role in mind? Let's talk.",
    body: 'Open to full-time roles and freelance work. Email is the fastest way to reach me.',
    cv: 'szymon-wardak-cv-en.pdf',
  },
  errors: {
    404: {
      cmd: (path: string) => `cd ${path}`,
      err: 'bash: No such page or route',
    },
    500: {
      cmd: (path: string) => `curl ${path}`,
      err: 'Segmentation fault (core dumped). Try again in a moment.',
    },
  },
  footer: {},
}

export type Dictionary = typeof en

export default en
