import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script, ViteClient } from 'vite-ssr-components/hono'
import PageWrapper from '../components/domain/PageWrapper'
import CursorDot from '../components/custom/coursor_dot/CursorDot'

import jetbrainsMonoUrl from '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2?url'
import Navbar from '../components/custom/navbar/Navbar'
import Footer from '../components/custom/footer/Footer'

const TITLE = 'Szymon Wardak — Full Stack Software Engineer'
const DESCRIPTION = 'Full Stack Software Engineer from Warsaw, focused on backend and system architecture. PHP, Python and React, running in Docker on Linux.'

export const layout = jsxRenderer(({ children }) => {
  return (
    <html lang='en'>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
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
        <Navbar />
        <PageWrapper>
          {children}
        </PageWrapper>
        <Footer />
      </body>
      <Script
        src='/src/script.ts'
      />
    </html>
  )
})
