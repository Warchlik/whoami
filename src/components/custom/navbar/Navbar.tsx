
type NavItem = {
  label: string
  href: string
}

const items = [
  { label: '!Main', href: '#' },
  { label: '@Exp', href: '#experience' },
  { label: '#About', href: '#about' },
  { label: '$Stack', href: '#stack' },
  { label: '%Repo', href: '#projects' },
  { label: '^Con', href: '#contact' },
] as const satisfies NavItem[]

const Navbar = () => {
  return (
    <div class={"group fixed top-0 inset-x-0 z-50 mx-auto w-fit px-10 pt-5 pb-8"}>
      <nav data-navbar data-theme="light" class={"flex flex-row items-center gap-3 bg-gray-800 text-white data-[theme=dark]:bg-white data-[theme=dark]:text-gray-800 text-sm p-1 transition-all duration-300 ease-out group-hover:gap-4 group-hover:px-4 group-hover:py-2 group-focus-within:gap-4 group-focus-within:px-4 group-focus-within:py-2"}>
        {items.map((item) => (
          <a
            href={item.href}
            data-hover
            class={"flex flex-row items-center"}
          >
            <span class={"size-1.5 shrink-0 bg-current transition-all duration-300 ease-out group-hover:size-0 group-hover:opacity-0 group-focus-within:size-0 group-focus-within:opacity-0"} />
            <span class={"grid grid-cols-[0fr] grid-rows-[0fr] transition-all duration-300 ease-out group-hover:grid-cols-[1fr] group-hover:grid-rows-[1fr] group-focus-within:grid-cols-[1fr] group-focus-within:grid-rows-[1fr]"}>
              <span class={"min-w-0 min-h-0 overflow-hidden whitespace-nowrap"}>
                {item.label}
              </span>
            </span>
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Navbar
