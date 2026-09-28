import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script, ViteClient } from 'vite-ssr-components/hono'
import PageWrapper from '../components/domain/PageWrapper'
import CursorDot from '../components/custom/coursor_dot/CursorDot'

import jetbrainsMonoUrl from '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2?url'
import Navbar from '../components/custom/navbar/Navbar'

export const layout = jsxRenderer(({ children }) => {
  return (
    <html lang='en'>
      <head>
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
        {/* <ScrollProgress /> */}
        <PageWrapper>
          {children}
        </PageWrapper>
        {/* Footer component  */}
      </body>
      <Script
        src='/src/script.ts'
      />
    </html>
  )
})
