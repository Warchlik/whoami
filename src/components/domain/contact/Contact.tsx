type ContactLink = {
  label: string
  value: string
  href: string
  external: boolean
}

const links = [
  { label: 'email', value: 'szymonw.2004@wp.pl', href: 'mailto:szymonw.2004@wp.pl', external: false },
  { label: 'github', value: 'github.com/Warchlik', href: 'https://github.com/Warchlik', external: true },
] as const satisfies ContactLink[]

const Contact = () => {
  return (
    <section id="contact" data-nav-theme="light" class={"w-full min-h-dvh flex items-center bg-white text-gray-800"}>
      <div class={"w-full max-w-3xl mx-auto px-6 py-32 flex flex-col gap-8"}>
        <span class={"text-sm text-gray-400"}>// contact</span>

        <h2 class={"text-3xl md:text-4xl font-bold leading-tight"}>
          Got a project or a role in mind? Let's talk.
        </h2>

        <p class={"max-w-xl text-gray-600 leading-relaxed"}>
          Open to full-time roles and freelance work. Email is the fastest way to reach me.
        </p>

        <ul class={"flex flex-col border border-gray-800"}>
          {links.map((link) => (
            <li class={"border-b border-gray-800 last:border-b-0"}>
              <a
                href={link.href}
                data-hover
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                class={"group/link flex flex-row items-center gap-4 px-5 py-4 text-sm transition-colors duration-200 hover:bg-gray-800 hover:text-white focus-visible:bg-gray-800 focus-visible:text-white focus-visible:outline-none"}
              >
                <span class={"size-1.5 shrink-0 bg-current"} />
                <span class={"w-16 text-gray-400"}>{link.label}</span>
                <span class={"flex-1 font-bold"}>{link.value}</span>
                <span class={"transition-transform duration-200 group-hover/link:translate-x-1"}>→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
