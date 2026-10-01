import Life from '../../custom/life/Life'

const PROGRAMER_NAME = 'Szymon Wardak' satisfies string
const LABEL = 'FULL STACK SOFTWARE ENGINEER' satisfies string
const NICK_NAMES = 'AKA OCG / AKA WARCHLIK' satisfies string

const Hero = () => {
  return (
    <section
      data-hero
      data-nav-theme="light"
      class={'relative overflow-hidden flex flex-col mx-auto min-h-dvh justify-center items-center'}
    >
      <Life class={'text-gray-400'} />
      <div data-hero-title class={'relative flex flex-col'}>
        <span class={'self-start text-xs text-gray-400'}>{NICK_NAMES}</span>
        <h1 class={'text-4xl sm:text-6xl lg:text-8xl font-bold text-gray-900'}>{PROGRAMER_NAME}</h1>
        <span class={'self-end text-xs text-gray-400'}>{LABEL}</span>
      </div>
    </section>
  )
}

export default Hero
