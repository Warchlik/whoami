import { scroll } from 'motion'

const MAX_SHIFT = 120

export const hero = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const section = document.querySelector<HTMLElement>('[data-hero]')
  const title = section?.querySelector<HTMLElement>('[data-hero-title]')
  if (!section || !title) return

  // Animate the inner title only; the section itself must stay put for navbar theme detection.
  // Callback form on purpose: scroll(animate(...)) in motion 13.4 ignores `offset` for the JS-driven `y`.
  scroll((progress: number) => {
    title.style.transform = `translateY(${-MAX_SHIFT * progress}px)`
    title.style.opacity = String(1 - progress)
  }, { target: section, offset: ['start start', 'end start'] })
}
