export type Language = {
  name: string
  prefix: string
}

const LANGUAGES = [
  { name: 'python', prefix: '#' },
  { name: 'typescript', prefix: '//' },
  { name: 'sql', prefix: '--' },
  { name: 'php', prefix: '//' },
  { name: 'golang', prefix: '//' },
  { name: 'batch', prefix: 'REM' },
] as const satisfies Language[]

// Called once per request render, so the hero and every section label on a page share one language.
export const randomLanguage = (): Language =>
  LANGUAGES[Math.floor(Math.random() * LANGUAGES.length)]
