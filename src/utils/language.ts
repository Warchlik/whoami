export type Language = {
  name: string
  prefix: string
  suffix?: string
}

const LANGUAGES = [
  { name: 'typescript', prefix: '//' },
  { name: 'python', prefix: '#' },
  { name: 'sql', prefix: '--' },
  { name: 'lisp', prefix: ';;' },
  { name: 'erlang', prefix: '%' },
  { name: 'visual basic', prefix: "'" },
  { name: 'batch', prefix: 'REM' },
  { name: 'css', prefix: '/*', suffix: '*/' },
  { name: 'html', prefix: '<!--', suffix: '-->' },
] as const satisfies Language[]

// Called once per request render, so every section label on a page shares the same comment syntax.
export const randomLanguage = (): Language =>
  LANGUAGES[Math.floor(Math.random() * LANGUAGES.length)]
