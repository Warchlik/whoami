const facts = ['Warsaw, PL', 'Full Stack Engineer', 'Commercial since 2024']

const stack = ['Python', 'TypeScript', 'PHP', 'React', 'Next.js', 'FastAPI', 'Laravel', 'PostgreSQL', 'Docker', 'Linux']

const About = () => {
  return (
    <section id="about" class={"w-full bg-gray-800 text-white"}>
      <div class={"max-w-3xl mx-auto px-6 py-32 flex flex-col gap-8"}>
        <span class={"text-sm text-gray-400"}>// about</span>

        <h2 class={"text-3xl md:text-4xl font-bold leading-tight"}>
          I build web systems end to end, with a soft spot for the backend.
        </h2>

        <p class={"max-w-xl text-gray-300 leading-relaxed"}>
          Full Stack Software Engineer focused on backend and system architecture.
          I ship production apps in PHP, Python and React, running in Docker on Linux.
          Currently chasing distributed systems, and on the side exploring data science and AI.
        </p>

        <ul class={"flex flex-row flex-wrap gap-2"}>
          {facts.map((fact) => (
            <li class={"rounded-full bg-white/10 px-3 py-1 text-sm"}>{fact}</li>
          ))}
        </ul>

        <ul class={"flex flex-row flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400"}>
          {stack.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
