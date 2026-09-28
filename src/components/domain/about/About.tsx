import type { CodeLanguage } from "../../../utils/code_language"
import type { Dictionary } from "../../../i18n"
import SectionLabel from "../../base/SectionLabel"

const About = ({ codeLanguage, t }: { codeLanguage: CodeLanguage; t: Dictionary['about'] }) => {
  return (
    <section id="about" data-nav-theme="dark" class={"w-full min-h-dvh flex items-center bg-gray-800 text-white"}>
      <div class={"w-full max-w-3xl mx-auto px-6 py-32 flex flex-col gap-8"}>
        <SectionLabel codeLanguage={codeLanguage} name={t.label} />

        <h2 data-reveal class={"text-3xl md:text-4xl font-bold leading-tight"}>
          {t.heading}
        </h2>

        <p data-reveal class={"max-w-xl text-gray-300 leading-relaxed"}>
          {t.body}
        </p>

        <ul data-reveal-group class={"flex flex-row flex-wrap gap-2"}>
          {t.facts.map((fact) => (
            <li data-reveal-item class={"rounded-full bg-white/10 px-3 py-1 text-sm"}>{fact}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
