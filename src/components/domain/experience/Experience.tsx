import type { CodeLanguage } from "../../../utils/code_language"
import type { Dictionary } from "../../../i18n"
import SectionLabel from "../../base/SectionLabel"

const Experience = ({ codeLanguage, t }: { codeLanguage: CodeLanguage; t: Dictionary['experience'] }) => {
  return (
    <section id="experience" data-nav-theme="dark" class={"w-full min-h-dvh flex items-center bg-gray-800 text-white"}>
      <div class={"w-full max-w-3xl mx-auto px-6 py-32 flex flex-col gap-8"}>
        <SectionLabel codeLanguage={codeLanguage} name={t.label} />

        <h2 data-reveal class={"text-3xl md:text-4xl font-bold leading-tight"}>
          {t.heading}
        </h2>

        <div class={"flex flex-col gap-4"}>
          {t.jobs.map((job) => (
            <article
              data-exp-block
              data-reveal="fade"
              data-hover
              class={"flex flex-col gap-2 border border-white/10 bg-white/5 p-6 transition-colors duration-200 hover:bg-white/10"}
            >
              <header class={"flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between"}>
                <h3 class={"font-bold"}>
                  {job.role} <span class={"text-gray-400"}>@ {job.company}</span>
                </h3>
                <span class={"text-sm text-gray-400 whitespace-nowrap"}>{job.period}</span>
              </header>

              <p class={"text-sm text-gray-400"}>{job.summary}</p>

              <div
                data-exp-card
                class={"mt-2 flex flex-col gap-4 pointer-fine:fixed pointer-fine:top-0 pointer-fine:left-0 pointer-fine:z-40 pointer-fine:mt-0 pointer-fine:w-96 pointer-fine:border pointer-fine:border-gray-800 pointer-fine:bg-white pointer-fine:p-5 pointer-fine:text-gray-800 pointer-fine:opacity-0 pointer-fine:pointer-events-none"}
              >
                <p class={"text-sm leading-relaxed"}>{job.description}</p>

                <ul class={"flex flex-row flex-wrap gap-2"}>
                  {job.tags.map((tag) => (
                    <li class={"bg-gray-800 text-white px-2 py-0.5 text-xs pointer-coarse:bg-white/10"}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
