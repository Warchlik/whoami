import { localePath, type Dictionary, type Locale } from '../../i18n'
import Life from '../custom/life/Life'

const ErrorPage = ({
  locale,
  status,
  path,
  t
}: {
  locale: Locale
  status: 404 | 500
  path: string
  t: Dictionary['errors']
}) => {
  const e = t[status]
  return (
    <section class="relative overflow-hidden flex flex-col min-h-dvh justify-center items-center px-6">
      <Life class="text-gray-400" />
      <div class="relative flex flex-col">
        <h1 class="text-7xl sm:text-8xl lg:text-9xl font-bold text-gray-900">{status}</h1>
      </div>
      <div class="relative mt-12 w-full max-w-md bg-white/90 border border-gray-200 p-4 text-sm">
        <div><span class="text-gray-500">$</span> {e.cmd(path)}</div>
        <div class="text-gray-500">{e.err}</div>
      </div>
      <a href={localePath(locale)} data-hover class="relative mt-6 px-4 py-2 bg-gray-800 text-white">cd ~/</a>
    </section>
  )
}

export default ErrorPage
