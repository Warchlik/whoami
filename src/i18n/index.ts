import en, { type Dictionary } from './en'
import pl from './pl'

export type { Dictionary }

export const LOCALES = ['en', 'pl'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'en'

export const dictionaries: Record<Locale, Dictionary> = { en, pl }

export const localePath = (locale: Locale) => (locale === DEFAULT_LOCALE ? '/' : `/${locale}`)

export const toLocale = (value: string): Locale =>
  (LOCALES as readonly string[]).includes(value) ? (value as Locale) : DEFAULT_LOCALE
