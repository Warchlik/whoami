import { animate, inView, stagger } from 'motion'

const SLIDE = { opacity: [0, 1], y: [24, 0] }
const FADE = { opacity: [0, 1] }
const OPTIONS = { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as const

export const reveal = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  inView('[data-reveal]', (el) => {
    const keyframes = (el as HTMLElement).dataset.reveal === 'fade' ? FADE : SLIDE
    animate(el, keyframes, OPTIONS)
  }, { amount: 0.3 })

  inView('[data-reveal-group]', (group) => {
    animate(group.querySelectorAll('[data-reveal-item]'), SLIDE, {
      ...OPTIONS,
      delay: stagger(0.08),
    })
  }, { amount: 0.2 })
}
