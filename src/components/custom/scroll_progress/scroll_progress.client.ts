import { animate, scroll } from 'motion'

export const scroll_progress = () => {
  const bar = document.querySelector<HTMLElement>('[data-scroll-progress]')
  if (!bar) return

  scroll(animate(bar, { scaleX: [0, 1] }, { ease: 'linear' }))
}
