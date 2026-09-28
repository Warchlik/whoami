import type { Language } from "../../../utils/language"
import SectionLabel from "../../base/SectionLabel"

type ContactLink = {
  label: string
  value: string
  href: string
  external: boolean
}

const links = [
  { label: 'email', value: 'szymonw.2004@wp.pl', href: 'mailto:szymonw.2004@wp.pl', external: false },
  { label: 'linkedin', value: 'linkedin.com/in/szymon-wardak-376108335', href: 'https://www.linkedin.com/in/szymon-wardak-376108335/', external: true },
  { label: 'github', value: 'github.com/Warchlik', href: 'https://github.com/Warchlik', external: true },
  { label: 'cv', value: 'szymon-wardak-cv-pl.pdf', href: '/szymon-wardak-cv-pl.pdf', external: true },
] as const satisfies ContactLink[]

const Contact = ({ language }: { language: Language }) => {
  return (
    <section id="contact" data-nav-theme="light" class={"w-full min-h-dvh flex items-center bg-white text-gray-800"}>
      <div class={"w-full max-w-3xl mx-auto px-6 py-32 flex flex-col gap-8"}>
        <SectionLabel language={language} name="contact" />

        <h2 data-reveal class={"text-3xl md:text-4xl font-bold leading-tight"}>
          Got a project or a role in mind? Let's talk.
        </h2>

        <p data-reveal class={"max-w-xl text-gray-600 leading-relaxed"}>
          Open to full-time roles and freelance work. Email is the fastest way to reach me.
        </p>

        <ul data-reveal-group class={"flex flex-col border border-gray-800"}>
          {links.map((link) => (
            <li data-reveal-item class={"border-b border-gray-800 last:border-b-0"}>
              <a
                href={link.href}
                data-hover
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                class={"group/link flex flex-row items-center gap-4 px-5 py-4 text-sm transition-colors duration-200 hover:bg-gray-800 hover:text-white focus-visible:bg-gray-800 focus-visible:text-white focus-visible:outline-none"}
              >
                <span class={"size-1.5 shrink-0 bg-current"} />
                <span class={"w-20 shrink-0 text-gray-400"}>{link.label}</span>
                <span class={"min-w-0 flex-1 font-bold [overflow-wrap:anywhere]"}>{link.value}</span>
                <span class={"shrink-0 transition-transform duration-200 group-hover/link:translate-x-1"}>→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
