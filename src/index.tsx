import { Hono } from 'hono'
import { layout } from './utils/layout'
import web from './routes/web'
import api from './routes/api'

const app = new Hono()

app.use(layout)

app.route("/", web)
app.route("/api", api)

export default app
