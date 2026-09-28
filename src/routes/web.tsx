import { Context, Hono } from "hono";
import RootPage from "../components/features/RootPage";
import { LOCALES, localePath, toLocale } from "../i18n";

const web = new Hono()

// '/' and '/pl' render the same page; the language comes from the path via languageDetector.
for (const locale of LOCALES) {
  web.get(
    localePath(locale),
    (c: Context) => c.render(
      <RootPage locale={toLocale(c.get('language'))} />
    )
  )
}

export default web
