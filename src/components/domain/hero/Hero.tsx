const PROGRAMER_NAME = "Szymon Wardak" satisfies string
const LABEL = "FULL STACK SOFTWARE ENGINEER" satisfies string
const NICK_NAMES = "AKA OCG / AKA WARCHLIK" satisfies string

const Hero = () => {
  return (
    <section data-hero data-nav-theme="light" class={"relative overflow-hidden flex flex-col mx-auto min-h-dvh justify-center items-center"}>
      <pre
        data-hero-life
        aria-hidden="true"
        class={"pointer-events-none absolute inset-0 overflow-hidden select-none text-xs leading-none text-gray-400"}
      />
      <div data-hero-title class={"relative flex flex-col"}>
        <span class={"self-start text-xs text-gray-400"}>{NICK_NAMES}</span>
        <span class={"text-8xl font-bold text-gray-900"}>{PROGRAMER_NAME}</span>
        <span class={"self-end text-xs text-gray-400"}>{LABEL}</span>
      </div>
    </section>
  )
}

export default Hero
