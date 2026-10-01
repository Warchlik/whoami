import { type Context, Hono } from 'hono'
import ErrorPage from '../components/features/ErrorPage'
import NotFoundPage from '../components/features/NotFoundPage'
import RootPage from '../components/features/RootPage'
import { LOCALES, dictionaries, localePath, toLocale } from '../i18n'

const web = new Hono()

for (const locale of LOCALES) {
  web.get(localePath(locale), (c: Context) => c.render(<RootPage locale={toLocale(c.get('language'))} />))
}

web.notFound((c) => {
  const locale = toLocale(c.get('language'))
  c.status(404)
  return c.render(<NotFoundPage status={404} locale={locale} path={c.req.path} t={dictionaries[locale].errors} />)
})

web.onError((err, c) => {
  console.error(err)
  const locale = toLocale(c.get('language'))
  c.status(500)
  return c.render(<ErrorPage status={500} locale={locale} path={c.req.path} t={dictionaries[locale].errors} />)
})

export default web
