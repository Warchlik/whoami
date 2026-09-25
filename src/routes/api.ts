import { Context, Hono } from "hono"

const api = new Hono()

// INFO: Endpoint only for working test
api.get("/", (c: Context) => {
  return c.json({
    status: "ok"
  }, 200)
})

export default api
