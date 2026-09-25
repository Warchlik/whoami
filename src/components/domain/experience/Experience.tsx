type Job = {
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}

// Newest first.
const jobs = [
  {
    role: 'Full Stack Software Developer',
    company: 'CodeFellow',
    period: '2024 — Present',
    description:
      'Developing and maintaining SaaS and CRM systems while migrating them step by step to microservices. Building new business features in PHP and Python, optimizing MySQL/PostgreSQL queries and refactoring legacy code. Designing REST APIs, tuning scraping algorithms and shipping React frontends. Containerizing dev and production environments with Docker and administering Linux servers.',
    tags: ['PHP', 'Python', 'React', 'MySQL', 'PostgreSQL', 'Docker', 'Linux'],
  },
  {
    role: 'Full Stack Software Developer',
    company: 'Freelance',
    period: '2024 — Present',
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
            <article class={"flex flex-col gap-4 border border-white/10 bg-white/5 p-6"}>
              <header class={"flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between"}>
                <h3 class={"font-bold"}>
                  {job.role} <span class={"text-gray-400"}>@ {job.company}</span>
                </h3>
                <span class={"text-sm text-gray-400 whitespace-nowrap"}>{job.period}</span>
              </header>

              <p class={"text-sm text-gray-300 leading-relaxed"}>{job.description}</p>

              <ul class={"flex flex-row flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400"}>
                {job.tags.map((tag) => (
                  <li>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
