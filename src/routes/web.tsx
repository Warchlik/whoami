import { type Context, Hono } from 'hono'
import RootPage from '../components/features/RootPage'
import { LOCALES, localePath } from '../i18n'

const web = new Hono()

for (const locale of LOCALES) {
  web.get(localePath(locale), (c: Context) => c.render(<RootPage locale={locale} />))
}

export default web
