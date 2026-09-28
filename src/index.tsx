import { Hono } from 'hono'
import { layout } from './utils/layout'
import { languageDetector } from 'hono/language'
import { DEFAULT_LOCALE, LOCALES } from './i18n'
import web from './routes/web'
import api from './routes/api'

const app = new Hono()

app.use(layout)
app.use(languageDetector({
  supportedLanguages: [...LOCALES],
  fallbackLanguage: DEFAULT_LOCALE,
  order: ['path'],
  lookupFromPathIndex: 0,
  caches: false,
}))

app.route("/", web)
app.route("/api", api)

export default app
