import { Hono } from 'hono'
import { layout } from './utils/layout'
import { languageDetector } from 'hono/language'
import web from './routes/web'
import api from './routes/api'

const app = new Hono()

app.use(layout)
app.use(languageDetector({
  supportedLanguages: ["pl", "en"],
  fallbackLanguage: "en",
  order: ['path', 'cookie', 'querystring', 'header'],
  lookupFromPathIndex: 0,
}))

app.route("/", web)
app.route("/api", api)

export default app
