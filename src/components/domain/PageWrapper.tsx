import type { PropsWithChildren } from 'hono/jsx'

const PageWrapper = ({ children }: PropsWithChildren) => {
  return <main class={'mx-auto justify-center'}>{children}</main>
}

export default PageWrapper
