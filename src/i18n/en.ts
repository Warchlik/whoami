const en = {
  meta: {
    title: 'Szymon Wardak — Full Stack Software Engineer',
    description:
      'Full Stack Software Engineer from Warsaw, focused on backend and system architecture. PHP, Python and React, running in Docker on Linux.',
  },
  nav: {
    main: 'Main',
    about: 'About',
    stack: 'Stack',
    experience: 'Exp',
    contact: 'Con',
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
    jobs: [
      {
        role: 'Full Stack Software Developer',
        company: 'CodeFellow',
        period: '2024 — Present',
        summary: 'SaaS & CRM systems, moving step by step to microservices.',
        description:
          'Developing and maintaining SaaS and CRM systems while migrating them step by step to microservices. Building new business features in PHP and Python, optimizing MySQL/PostgreSQL queries and refactoring legacy code. Designing REST APIs, tuning scraping algorithms and shipping React frontends. Containerizing dev and production environments with Docker and administering Linux servers.',
        tags: ['PHP', 'Python', 'React', 'MySQL', 'PostgreSQL', 'Docker', 'Linux'],
      },
      {
        role: 'Full Stack Software Developer',
        company: 'Freelance',
        period: '2024 — Present',
        summary: 'Custom web apps, and the servers they run on.',
        description:
          'Designing and shipping custom web applications with React/Next.js on the front and Python/PHP on the back. Setting up and securing Linux VPS servers with Nginx, and automating ops with bash scripts and cron.',
        tags: ['React', 'Next.js', 'Python', 'PHP', 'Nginx', 'Linux', 'Bash'],
      },
    ],
  },
  contact: {
    label: 'contact',
    heading: "Got a project or a role in mind? Let's talk.",
    body: 'Open to full-time roles and freelance work. Email is the fastest way to reach me.',
    cv: 'szymon-wardak-cv-en.pdf',
  },
  footer: {},
}

export type Dictionary = typeof en

export default en
