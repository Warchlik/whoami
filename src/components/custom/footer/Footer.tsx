import type { Dictionary } from '../../../i18n'
import Life from '../life/Life'

const Footer = ({ t }: { t: Dictionary['footer'] }) => {
  return (
    <footer class={'relative overflow-hidden w-full border-t border-gray-200 bg-white'}>
      <Life class={'text-gray-400'} />
      <div
        class={
          'relative w-full max-w-3xl mx-auto px-6 py-8 flex gap-2 text-xs font-semibold text-gray-800 flex-row justify-center items-center'
        }
      >
        <span>© {new Date().getFullYear()} Szymon Wardak</span>
      </div>
    </footer>
  )
}

export default Footer
