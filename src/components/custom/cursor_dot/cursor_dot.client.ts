import { animate } from 'motion'

const DEFAULT_SIZE = 7
const HOVER_SIZE = 24
const MOVE_SPRING = { type: 'spring', stiffness: 1000, damping: 50 } as const
const SIZE_SPRING = { type: 'spring', stiffness: 400, damping: 20 } as const

export const cursor_dot = () => {
  const dot = document.querySelector<HTMLElement>('[data-cursor-dot]')
  if (!dot) return
  if (window.matchMedia('(pointer: coarse)').matches) return

  let isHovering = false

  animate(dot, { width: DEFAULT_SIZE, height: DEFAULT_SIZE, opacity: 1 }, { duration: 0 })

  const onMouseMove = (e: MouseEvent) => {
    const host = (e.target as Element).closest('dialog[open]') ?? document.body
    if (dot.parentElement !== host) host.append(dot)
    animate(dot, { x: e.clientX, y: e.clientY }, MOVE_SPRING)
  }

  const setHovering = (hovering: boolean) => {
    if (hovering === isHovering) return
    isHovering = hovering
    const size = hovering ? HOVER_SIZE : DEFAULT_SIZE
    animate(dot, { width: size, height: size }, SIZE_SPRING)
  }

  const onMouseOver = (e: Event) => {
    if ((e.target as HTMLElement).closest('[data-hover]')) setHovering(true)
  }
  const onMouseOut = (e: Event) => {
    if ((e.target as HTMLElement).closest('[data-hover]')) setHovering(false)
  }

  const onWindowLeave = () => animate(dot, { opacity: 0 }, { duration: 0.2 })
  const onWindowEnter = () => animate(dot, { opacity: 1 }, { duration: 0.2 })

  window.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseover', onMouseOver)
  document.addEventListener('mouseout', onMouseOut)
  document.documentElement.addEventListener('mouseleave', onWindowLeave)
  document.documentElement.addEventListener('mouseenter', onWindowEnter)
}
