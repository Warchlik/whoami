import jetbrainsMonoUrl from '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2?url'
import { jsxRenderer, useRequestContext } from 'hono/jsx-renderer'
import { Link, Script, ViteClient } from 'vite-ssr-components/hono'
import CursorDot from '../components/custom/cursor_dot/CursorDot'
import Footer from '../components/global/footer/Footer'
import Navbar from '../components/global/navbar/Navbar'
import { DEFAULT_LOCALE, dictionaries, LOCALES, localeUrl, toLocale } from '../i18n'

declare module 'hono' {
  interface ContextRenderer {
    // biome-ignore lint/style/useShorthandFunctionType: module augmentation must be an interface to merge with Hono's ContextRenderer
    (content: string | Promise<string>, props?: { navbar?: boolean; footer?: boolean }): Response | Promise<Response>
  }
}

export const layout = jsxRenderer(({ children, navbar = true, footer = true }) => {
  const c = useRequestContext()
  const locale = toLocale(c.get('language'))
  const t = dictionaries[locale]

  return (
    <html lang={locale} class={'has-[dialog[open]]:overflow-hidden'}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href={new URL(c.req.path, c.req.url).href} />

        {LOCALES.map((l) => (
          <link rel="alternate" hreflang={l} href={localeUrl(l, c.req.url)} />
        ))}

        <link rel="alternate" hreflang="x-default" href={localeUrl(DEFAULT_LOCALE, c.req.url)} />

        <ViteClient />
        <Link href="/src/style.css" rel="stylesheet" />
        <link rel="preload" href={jetbrainsMonoUrl} as="font" type="font/woff2" crossorigin="anonymous" />
      </head>
      <body class={'bg-white font-mono'}>
        <CursorDot />
        {navbar && <Navbar locale={locale} t={t.nav} />}
        <main>{children}</main>
        {footer && <Footer />}
        <Script src="/src/script.ts" />
      </body>
    </html>
  )
})
