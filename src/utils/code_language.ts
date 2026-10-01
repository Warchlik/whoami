export type CodeLanguage = {
  name: string
  prefix: string
}

const CODE_LANGUAGES = [
  { name: 'python', prefix: '#' },
  { name: 'typescript', prefix: '//' },
  { name: 'sql', prefix: '--' },
  { name: 'php', prefix: '//' },
  { name: 'golang', prefix: '//' },
  { name: 'batch', prefix: 'REM' },
] as const satisfies CodeLanguage[]

export const randomCodeLanguage = (): CodeLanguage => CODE_LANGUAGES[Math.floor(Math.random() * CODE_LANGUAGES.length)]
