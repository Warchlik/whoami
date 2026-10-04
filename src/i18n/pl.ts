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
    experience: 'Doświadczenie',
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
    close: 'Zamknij',
    jobs: [
      {
        role: 'Full-stack Developer',
        company: 'Codefellow',
        period: '2024 — obecnie',
        summary: 'Systemy SaaS i CRM, krok po kroku przenoszone na mikroserwisy.',
        short:
          'Rozwijam i utrzymuję aplikacje biznesowe — od ustalenia wymagań z klientem po testy, wdrożenie i monitoring. Tworzę frontend w JS/TS, backend w PHP oraz mikroserwisy w Pythonie i Go. Optymalizuję bazy danych, buduję integracje z urządzeniami i zarządzam infrastrukturą serwerową.',
        long: [
          'Samodzielnie realizuję zadania obejmujące cały cykl rozwoju aplikacji: od rozmów z klientem i ustalenia wymagań, przez planowanie prac i implementację, po testy, wdrożenie i utrzymanie. Rozwijam frontend w JavaScript i TypeScript, backend w PHP oraz mikroserwisy w Pythonie i Go.',
          'Pracuję zarówno nad istniejącymi systemami, jak i rozwiązaniami budowanymi od podstaw. Optymalizuję wydajność aplikacji poprzez usprawnianie zapytań SQL i dobór indeksów. Tworzę integracje z urządzeniami, mechanizmy przetwarzania i przesyłania danych przez MQTT oraz rozwiązania do uwierzytelniania instancji aplikacji i obsługi certyfikatów.',
          'Odpowiadam również za infrastrukturę serwerową, konfigurację brokerów MQTT, konteneryzację i automatyzację wdrożeń przez GitHub Actions. Piszę testy jednostkowe i integracyjne oraz wdrażam monitoring błędów wspierający utrzymanie systemów.',
        ],
        tags: ['PHP', 'Python', 'Go', 'JS/TS', 'SQL', 'MQTT', 'Docker', 'GitHub Actions', 'Linux'],
      },
      {
        role: 'Full-stack Developer',
        company: 'Freelance',
        period: '2024 — obecnie',
        summary: 'Aplikacje webowe na zamówienie i serwery, na których działają.',
        short:
          'Projektuję, buduję i wdrażam strony oraz aplikacje w ekosystemie JS/TS — od landing page’y po panele administracyjne i integracje. Korzystam z React, Next.js, TanStack Start i Hono, wdrażając rozwiązania także w środowisku edge. Tworzę również modele ML do przewidywania cen, automatyzując przygotowanie danych i retrening.',
        long: [
          'Pomagam klientom przełożyć potrzeby biznesowe na działające strony i aplikacje. Odpowiadam za ustalenie wymagań, projekt interfejsu, implementację, wdrożenie oraz późniejsze utrzymanie. Tworzę landing page’e, strony firmowe, integracje i panele administracyjne — wykorzystując WordPress lub budując własne rozwiązania dopasowane do projektu.',
          'Pracuję głównie w JavaScript i TypeScript, korzystając z React, Next.js, TanStack Start i Hono. Dobieram technologię i sposób wdrożenia do potrzeb aplikacji, wykorzystując zarówno środowiska edge, jak i samodzielnie konfigurowane serwery.',
          'Rozwijam również rozwiązania ML do przewidywania cen na podstawie samodzielnie pozyskiwanych i przygotowywanych zbiorów danych. Buduję procesy okresowego sprawdzania zmian w danych i automatycznego retreningu modeli. Pracuję także nad wersjonowaniem modeli oraz oceną ich jakości przed zastąpieniem używanej wersji.',
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
    label: 'kontakt',
    heading: 'Masz projekt albo ofertę pracy? Porozmawiajmy.',
    body: 'Jestem otwarty na pracę na etat i zlecenia freelance. Najszybciej złapiesz mnie mailowo.',
    cv: 'szymon-wardak-cv-pl.pdf',
  },
  errors: {
    404: {
      cmd: (path: string) => `cd ${path}`,
      err: 'bash: Nie ma takiej strony ani trasy',
    },
    500: {
      cmd: (path: string) => `curl ${path}`,
      err: 'Naruszenie ochrony pamięci (zrzut pamięci). Spróbuj ponownie za chwilę.',
    },
  },
  footer: {},
}

export default pl
