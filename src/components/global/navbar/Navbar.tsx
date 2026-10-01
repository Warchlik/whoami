import { type Dictionary, LOCALES, type Locale, localePath } from '../../../i18n'

const SYMBOLS = '!@#$%^&*'

const sections: { key: keyof Dictionary['nav']; href: string }[] = [
  { key: 'main', href: '#' },
  { key: 'about', href: '#about' },
  { key: 'stack', href: '#stack' },
  { key: 'experience', href: '#experience' },
  // { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
]

const BOX =
  'flex flex-row items-center gap-3 bg-gray-800 text-white group-data-[theme=dark]/bar:bg-white group-data-[theme=dark]/bar:text-gray-800 text-sm p-1 transition-all duration-300 ease-out group-hover:gap-4 group-hover:px-4 group-hover:py-2 group-focus-within:gap-4 group-focus-within:px-4 group-focus-within:py-2'

const Navbar = ({ locale, t }: { locale: Locale; t: Dictionary['nav'] }) => {
  const items: { label: string; href: string; lang?: Locale; symbol: string }[] = [
    ...sections.map((section) => ({ label: t[section.key], href: section.href })),
    ...LOCALES.filter((l) => l !== locale).map((l) => ({ label: l.toUpperCase(), href: localePath(l), lang: l })),
  ].map((item, i) => ({ ...item, symbol: SYMBOLS[i] }))

  const groups = [items.slice(0, sections.length), items.slice(sections.length)]

  return (
    <div class={'group fixed top-0 inset-x-0 z-50 mx-auto w-fit px-10 pt-5 pb-8'}>
      <nav
        data-navbar
        data-theme="light"
        class={
          'group/bar flex flex-row items-center gap-1.5 transition-all duration-300 ease-out group-hover:gap-3 group-focus-within:gap-3'
        }
      >
        {groups.map((group) => (
          <div class={BOX}>
            {group.map((item) => (
              <a href={item.href} hreflang={item.lang} lang={item.lang} data-hover class={'flex flex-row items-center'}>
                <span
                  class={
                    'size-1.5 shrink-0 bg-current transition-all duration-300 ease-out group-hover:size-0 group-hover:opacity-0 group-focus-within:size-0 group-focus-within:opacity-0'
                  }
                />
                <span
                  class={
                    'grid grid-cols-[0fr] grid-rows-[0fr] transition-all duration-300 ease-out group-hover:grid-cols-[1fr] group-hover:grid-rows-[1fr] group-focus-within:grid-cols-[1fr] group-focus-within:grid-rows-[1fr]'
                  }
                >
                  <span class={'min-w-0 min-h-0 overflow-hidden whitespace-nowrap'}>
                    {item.symbol}
                    {item.label}
                  </span>
                </span>
              </a>
            ))}
          </div>
        ))}
      </nav>
    </div>
  )
}

export default Navbar
