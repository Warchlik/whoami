import jetbrainsMonoUrl from '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2?url'
import { jsxRenderer, useRequestContext } from 'hono/jsx-renderer'
import { Link, Script, ViteClient } from 'vite-ssr-components/hono'
import CursorDot from '../components/custom/coursor_dot/CursorDot'
import Footer from '../components/global/footer/Footer'
import Navbar from '../components/global/navbar/Navbar'
import PageWrapper from '../components/domain/PageWrapper'
import { DEFAULT_LOCALE, dictionaries, LOCALES, localePath, toLocale } from '../i18n'

declare module 'hono' {
  interface ContextRenderer {
    // biome-ignore lint/style/useShorthandFunctionType: module augmentation must be an interface to merge with Hono's ContextRenderer
    (content: string | Promise<string>, props?: { navbar?: boolean, footer?: boolean }): Response | Promise<Response>
  }
}


export const layout = jsxRenderer(({ children, navbar = true, footer = true }) => {
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
        <Link href="/src/style.css" rel="stylesheet" />
        <Link rel="preload" href={jetbrainsMonoUrl} as="font" type="font/woff2" crossorigin="anonymous" />
      </head>
      <body class={'bg-white font-mono'}>
        <CursorDot />
        {navbar && <Navbar locale={locale} t={t.nav} />}
        <PageWrapper>{children}</PageWrapper>
        {footer && <Footer />}
        <Script src="/src/script.ts" />
      </body>
    </html>
  )
})
