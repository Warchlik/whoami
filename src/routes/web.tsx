import { type Context, Hono } from 'hono'
import RootPage from '../components/features/RootPage'
import { DEFAULT_LOCALE, LOCALES, localePath, localeUrl } from '../i18n'

const web = new Hono()

for (const locale of LOCALES) {
  web.get(localePath(locale), (c: Context) => c.render(<RootPage locale={locale} />))
}

web.get('/robots.txt', (c: Context) =>
  c.text(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', c.req.url).href}\n`),
)

web.get('/sitemap.xml', (c: Context) => {
  const alternates = [
    ...LOCALES.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${localeUrl(l, c.req.url)}"/>`),
    `<xhtml:link rel="alternate" hreflang="x-default" href="${localeUrl(DEFAULT_LOCALE, c.req.url)}"/>`,
  ].join('')
  const urls = LOCALES.map((l) => `<url><loc>${localeUrl(l, c.req.url)}</loc>${alternates}</url>`).join('')

  return c.body(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    200,
    { 'content-type': 'application/xml; charset=utf-8' },
  )
})

export default web
