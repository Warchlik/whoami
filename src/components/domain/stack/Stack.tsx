import type { CodeLanguage } from "../../../utils/code_language"
import type { Dictionary } from "../../../i18n"
import SectionLabel from "../../base/SectionLabel"

type Folder = {
  name: string
  files: string[]
}

const folders = [
  { name: 'ts-js', files: ['react.js', 'next.js', 'hono.js', 'tailwind.css', 'express.js', 'tanstack-start.ts'] },
  { name: 'python', files: ['fastapi.py', 'django.py', 'pandas.py', 'drf.py', 'scikit-learn.py', 'pytorch.py'] },
  { name: 'golang', files: ['chi.go', 'gin.go'] },
  { name: 'php', files: ['laravel.php', 'yii2.php'] },
] as const satisfies Folder[]

const Stack = ({ codeLanguage, t }: { codeLanguage: CodeLanguage; t: Dictionary['stack'] }) => {
  return (
    <section id="stack" data-nav-theme="light" class={"w-full min-h-dvh flex items-center bg-white text-gray-800"}>
      <div class={"w-full max-w-3xl mx-auto px-6 py-32 flex flex-col gap-8"}>
        <SectionLabel codeLanguage={codeLanguage} name={t.label} />

        <h2 data-reveal class={"text-3xl md:text-4xl font-bold leading-tight"}>
          {t.heading}
        </h2>

        <div data-reveal class={"border border-gray-800 text-sm"}>
          <div class={"flex flex-row items-center gap-3 bg-gray-800 text-white px-4 py-2"}>
            <span class={"flex flex-row gap-1.5"}>
              <span class={"size-1.5 bg-current"} />
              <span class={"size-1.5 bg-current"} />
              <span class={"size-1.5 bg-current"} />
            </span>
            <span class={"text-gray-400"}>~/stack</span>
          </div>

          <div class={"p-4"}>
            <span class={"text-gray-400"}>EXPLORER</span>

            <ul data-reveal-group class={"mt-3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1"}>
              {folders.map((folder) => (
                <li data-reveal-item>
                  <details open class={"group/folder"}>
                    <summary
                      data-hover
                      class={"flex flex-row items-center gap-2 py-1 list-none [&::-webkit-details-marker]:hidden"}
                    >
                      <span class={"ml-1 size-1.5 shrink-0 bg-gray-800 transition-transform duration-200 group-open/folder:rotate-90"} />
                      <span class={"font-bold"}>{folder.name}/</span>
                    </summary>

                    <ul class={"ml-1.5 border-l border-gray-200 pl-4"}>
                      {folder.files.map((file) => (
                        <li class={"flex flex-row items-center gap-2 py-1 text-gray-600"}>
                          <span class={"size-1.5 shrink-0 bg-current"} />
                          {file}
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stack
