import { Context, Hono } from "hono";
import RootPage from "../components/features/RootPage";

const web = new Hono()

web.get(
  "/",
  (c: Context) => c.render(<RootPage />)
)

export default web
