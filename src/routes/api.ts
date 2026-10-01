import { type Context, Hono } from 'hono'

const api = new Hono()

api.get('/', (c: Context) => {
  return c.json(
    {
      status: 'ok',
    },
    200,
  )
})

export default api
