import type { Dictionary } from './en'

const pl: Dictionary = {
  meta: {
    title: 'Szymon Wardak — Full Stack Software Engineer',
    description:
      'Full Stack Software Engineer z Warszawy, skupiony na backendzie i architekturze systemów. PHP, Python i React, uruchamiane w Dockerze na Linuksie.',
  },
  nav: {
    main: 'Start',
    about: 'O mnie',
    stack: 'Stack',
    experience: 'Dośw',
    contact: 'Kontakt',
  },
  about: {
    label: 'o mnie',
    heading: 'Buduję systemy webowe od początku do końca, ze słabością do backendu.',
    body: 'Full Stack Software Engineer skupiony na backendzie i architekturze systemów. Wdrażam produkcyjne aplikacje w PHP, Pythonie i React, działające w Dockerze na Linuksie. Obecnie zgłębiam systemy rozproszone, a po godzinach eksploruję data science i AI.',
    facts: ['Warszawa, PL', 'Full Stack Engineer', 'Komercyjnie od 2024'],
  },
  stack: {
    label: 'stack',
    heading: 'Języki, w których piszę, i co w nich buduję.',
  },
  experience: {
    label: 'doświadczenie',
    heading: 'Gdzie dowożę kod.',
    jobs: [
      {
        role: 'Full Stack Software Developer',
        company: 'CodeFellow',
        period: '2024 — obecnie',
        summary: 'Systemy SaaS i CRM, krok po kroku przenoszone na mikroserwisy.',
        description:
          'Rozwijam i utrzymuję systemy SaaS i CRM, stopniowo migrując je na mikroserwisy. Tworzę nowe funkcje biznesowe w PHP i Pythonie, optymalizuję zapytania MySQL/PostgreSQL i refaktoryzuję kod legacy. Projektuję REST API, dostrajam algorytmy scrapujące i dowożę frontendy w React. Konteneryzuję środowiska deweloperskie i produkcyjne w Dockerze i administruję serwerami Linux.',
        tags: ['PHP', 'Python', 'React', 'MySQL', 'PostgreSQL', 'Docker', 'Linux'],
      },
      {
        role: 'Full Stack Software Developer',
        company: 'Freelance',
        period: '2024 — obecnie',
        summary: 'Aplikacje webowe na zamówienie i serwery, na których działają.',
        description:
          'Projektuję i wdrażam aplikacje webowe na zamówienie: React/Next.js na froncie, Python/PHP na backendzie. Stawiam i zabezpieczam serwery VPS z Linuksem i Nginx, a operacje automatyzuję skryptami bash i cronem.',
        tags: ['React', 'Next.js', 'Python', 'PHP', 'Nginx', 'Linux', 'Bash'],
      },
    ],
  },
  contact: {
    label: 'kontakt',
    heading: 'Masz projekt albo ofertę pracy? Porozmawiajmy.',
    body: 'Jestem otwarty na pracę na etat i zlecenia freelance. Najszybciej złapiesz mnie mailowo.',
    cv: 'szymon-wardak-cv-pl.pdf',
  },
  footer: {
    builtWith: 'zbudowane na hono · cloudflare workers',
  },
}

export default pl
