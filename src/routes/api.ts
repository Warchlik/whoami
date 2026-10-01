import { type Context, Hono } from 'hono'

const api = new Hono()

api.get('/', (c: Context) => c.json({ status: 'ok' }))

export default api
