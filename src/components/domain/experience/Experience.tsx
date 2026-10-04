import type { Dictionary } from '../../../i18n'
import type { CodeLanguage } from '../../../utils/code_language'
import SectionLabel from '../../base/SectionLabel'

const Experience = ({ codeLanguage, t }: { codeLanguage: CodeLanguage; t: Dictionary['experience'] }) => {
  return (
    <section id="experience" data-nav-theme="dark" class={'w-full min-h-dvh flex items-center bg-gray-800 text-white'}>
      <div class={'w-full max-w-3xl mx-auto px-6 py-32 flex flex-col gap-8'}>
        <SectionLabel codeLanguage={codeLanguage} name={t.label} />

        <h2 data-reveal class={'text-3xl md:text-4xl font-bold leading-tight'}>
          {t.heading}
        </h2>

        <div class={'flex flex-col gap-4'}>
          {t.jobs.map((job, i) => (
            <article
              data-exp-block
              data-reveal="fade"
              data-hover
              class={
                'relative flex flex-col gap-2 border border-white/10 bg-white/5 p-6 transition-colors duration-200 hover:bg-white/10 has-focus-visible:outline-2 has-focus-visible:outline-white'
              }
            >
              <header class={'flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between'}>
                <h3 class={'font-bold'}>
                  <button
                    type="button"
                    data-exp-open
                    aria-haspopup="dialog"
                    aria-controls={`exp-${i}`}
                    class={'text-left font-bold after:absolute after:inset-0 focus-visible:outline-none'}
                  >
                    {job.role} <span class={'text-gray-400'}>@ {job.company}</span>
                  </button>
                </h3>
                <span class={'text-sm text-gray-400 whitespace-nowrap'}>{job.period}</span>
              </header>

              <p class={'text-sm text-gray-400'}>{job.summary}</p>

              <div
                data-exp-card
                class={
                  'mt-2 flex flex-col gap-4 pointer-fine:fixed pointer-fine:top-0 pointer-fine:left-0 pointer-fine:z-40 pointer-fine:mt-0 pointer-fine:w-96 pointer-fine:border pointer-fine:border-gray-800 pointer-fine:bg-white pointer-fine:p-5 pointer-fine:text-gray-800 pointer-fine:opacity-0 pointer-fine:pointer-events-none'
                }
              >
                <p class={'text-sm leading-relaxed'}>{job.short}</p>

                <ul class={'flex flex-row flex-wrap gap-2'}>
                  {job.tags.map((tag) => (
                    <li class={'bg-gray-800 text-white px-2 py-0.5 text-xs pointer-coarse:bg-white/10'}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {t.jobs.map((job, i) => (
          <dialog
            id={`exp-${i}`}
            aria-labelledby={`exp-${i}-title`}
            class={
              'm-auto w-[min(42rem,calc(100%-3rem))] max-h-[85dvh] border border-gray-800 bg-white p-0 text-sm text-gray-800 backdrop:bg-gray-900/60 transition-opacity duration-200 starting:open:opacity-0 motion-reduce:transition-none'
            }
          >
            <div class={'sticky top-0 flex flex-row items-center gap-3 bg-gray-800 text-white px-4 py-2'}>
              <span class={'flex flex-row gap-1.5'}>
                <span class={'size-1.5 bg-current'} />
                <span class={'size-1.5 bg-current'} />
                <span class={'size-1.5 bg-current'} />
              </span>
              <span class={'flex-1 text-gray-400'}>~/experience/{job.company.toLowerCase()}</span>
              <form method="dialog">
                <button
                  type="submit"
                  data-hover
                  aria-label={t.close}
                  class={'px-1 hover:text-gray-400 focus-visible:text-gray-400'}
                >
                  [x]
                </button>
              </form>
            </div>

            <div class={'flex flex-col gap-4 p-6'}>
              <header class={'flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between'}>
                <h3 id={`exp-${i}-title`} class={'text-base font-bold'}>
                  {job.role} <span class={'text-gray-400'}>@ {job.company}</span>
                </h3>
                <span class={'text-gray-400 whitespace-nowrap'}>{job.period}</span>
              </header>

              {job.long.map((paragraph) => (
                <p class={'leading-relaxed'}>{paragraph}</p>
              ))}

              <ul class={'flex flex-row flex-wrap gap-2'}>
                {job.tags.map((tag) => (
                  <li class={'bg-gray-800 text-white px-2 py-0.5 text-xs'}>{tag}</li>
                ))}
              </ul>
            </div>
          </dialog>
        ))}
      </div>
    </section>
  )
}

export default Experience
