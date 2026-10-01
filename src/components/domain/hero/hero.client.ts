import { scroll } from 'motion'

const MAX_SHIFT = 120

export const hero = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const section = document.querySelector<HTMLElement>('[data-hero]')
  const title = section?.querySelector<HTMLElement>('[data-hero-title]')
  if (!section || !title) return

  scroll(
    (progress: number) => {
      title.style.transform = `translateY(${-MAX_SHIFT * progress}px)`
      title.style.opacity = String(1 - progress)
    },
    { target: section, offset: ['start start', 'end start'] },
  )
}
