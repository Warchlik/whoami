type Job = {
  role: string
  company: string
  period: string
  summary: string
  description: string
  tags: string[]
}

// Newest first.
const jobs = [
  {
    role: 'Full Stack Software Developer',
    company: 'CodeFellow',
    period: '2024 — Present',
    summary: 'SaaS & CRM systems, moving step by step to microservices.',
    description:
      'Developing and maintaining SaaS and CRM systems while migrating them step by step to microservices. Building new business features in PHP and Python, optimizing MySQL/PostgreSQL queries and refactoring legacy code. Designing REST APIs, tuning scraping algorithms and shipping React frontends. Containerizing dev and production environments with Docker and administering Linux servers.',
    tags: ['PHP', 'Python', 'React', 'MySQL', 'PostgreSQL', 'Docker', 'Linux'],
  },
  {
    role: 'Full Stack Software Developer',
    company: 'Freelance',
    period: '2024 — Present',
    summary: 'Custom web apps, and the servers they run on.',
    description:
      'Designing and shipping custom web applications with React/Next.js on the front and Python/PHP on the back. Setting up and securing Linux VPS servers with Nginx, and automating ops with bash scripts and cron.',
    tags: ['React', 'Next.js', 'Python', 'PHP', 'Nginx', 'Linux', 'Bash'],
  },
] as const satisfies Job[]

const Experience = () => {
  return (
    <section id="experience" data-nav-theme="dark" class={"w-full min-h-dvh flex items-center bg-gray-800 text-white"}>
      <div class={"w-full max-w-3xl mx-auto px-6 py-32 flex flex-col gap-8"}>
        <span class={"text-sm text-gray-400"}>// experience</span>

        <h2 class={"text-3xl md:text-4xl font-bold leading-tight"}>
          Where I've been shipping code.
        </h2>

        <div class={"flex flex-col gap-4"}>
          {jobs.map((job) => (
            <article
              data-exp-block
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

              {/* Details card. With a mouse it floats next to the cursor (see experience.ts); on touch screens it stays inline. */}
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
