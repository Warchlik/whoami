import { animate } from 'motion'

const OFFSET = 24 // gap between cursor and card
const EDGE = 16 // min distance from viewport edges
const FOLLOW_SPRING = { type: 'spring', stiffness: 500, damping: 40 } as const

// Attaches each experience block's details card to the cursor while hovering the block.
export const experience = () => {
  if (!window.matchMedia('(pointer: fine)').matches) return

  document.querySelectorAll<HTMLElement>('[data-exp-block]').forEach((block) => {
    const card = block.querySelector<HTMLElement>('[data-exp-card]')
    if (!card) return

    // Card sits bottom-right of the cursor; flips left / shifts up when it would leave the viewport.
    const position = (e: MouseEvent) => {
      const width = card.offsetWidth
      const height = card.offsetHeight
      const x = e.clientX + OFFSET + width > window.innerWidth - EDGE
        ? e.clientX - OFFSET - width
        : e.clientX + OFFSET
      const y = Math.min(e.clientY + OFFSET, window.innerHeight - height - EDGE)
      return { x, y }
    }

    block.addEventListener('mouseenter', (e) => {
      // Jump to the cursor first so the card doesn't fly in from its previous spot.
      animate(card, position(e), { duration: 0 })
      animate(card, { opacity: 1, scale: 1 }, { duration: 0.2 })
    })
    block.addEventListener('mousemove', (e) => {
      animate(card, position(e), FOLLOW_SPRING)
    })
    block.addEventListener('mouseleave', () => {
      animate(card, { opacity: 0, scale: 0.95 }, { duration: 0.15 })
    })
  })
}
