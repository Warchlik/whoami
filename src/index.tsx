import { Hono } from 'hono'
import { languageDetector } from 'hono/language'
import ErrorPage from './components/features/ErrorPage'
import { DEFAULT_LOCALE, dictionaries, LOCALES, toLocale } from './i18n'
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

app.notFound((c) => {
  const locale = toLocale(c.get('language'))
  c.status(404)
  return c.render(<ErrorPage status={404} locale={locale} path={c.req.path} t={dictionaries[locale].errors} />, {
    navbar: false,
    footer: false,
  })
})

app.onError((err, c) => {
  console.error(err)
  const locale = toLocale(c.get('language'))
  c.status(500)
  return c.render(<ErrorPage status={500} locale={locale} path={c.req.path} t={dictionaries[locale].errors} />, {
    navbar: false,
    footer: false,
  })
})

export default app
