import { Hono } from 'hono'
import { languageDetector } from 'hono/language'
import { DEFAULT_LOCALE, LOCALES } from './i18n'
import api from './routes/api'
import web from './routes/web'
import { layout } from './utils/layout'

const app = new Hono()

app.use(layout)
app.use(
  languageDetector({
    supportedLanguages: [...LOCALES],
    fallbackLanguage: DEFAULT_LOCALE,
    order: ['path'],
    lookupFromPathIndex: 0,
    caches: false,
  }),
)

app.route('/', web)
app.route('/api', api)

export default app
