import { jsxRenderer, useRequestContext } from 'hono/jsx-renderer'
import { Link, Script, ViteClient } from 'vite-ssr-components/hono'
import PageWrapper from '../components/domain/PageWrapper'
import CursorDot from '../components/custom/coursor_dot/CursorDot'

import jetbrainsMonoUrl from '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2?url'
import Navbar from '../components/custom/navbar/Navbar'
import Footer from '../components/custom/footer/Footer'
import { DEFAULT_LOCALE, LOCALES, dictionaries, localePath, toLocale } from '../i18n'

export const layout = jsxRenderer(({ children }) => {
  const c = useRequestContext()
  const locale = toLocale(c.get('language'))
  const t = dictionaries[locale]

  return (
    <html lang={locale}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />

        {LOCALES.map((l) => (
          <link rel="alternate" hreflang={l} href={new URL(localePath(l), c.req.url).href} />
        ))}

        <link rel="alternate" hreflang="x-default" href={new URL(localePath(DEFAULT_LOCALE), c.req.url).href} />

        <ViteClient />
        <Link
          href="/src/style.css"
          rel="stylesheet"
        />
        <Link
          rel="preload"
          href={jetbrainsMonoUrl}
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
      </head>
      <body class={"bg-white font-mono"}>
        <CursorDot />
        <Navbar locale={locale} t={t.nav} />
        <PageWrapper>
          {children}
        </PageWrapper>
        <Footer t={t.footer} />
      </body>
      <Script
        src='/src/script.ts'
      />
    </html>
  )
})
