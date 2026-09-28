import { measureGrid } from './ascii_grid.client'

const DENSITY = '#WX?*:÷×+=-· '
const RADIUS = 0.2
const SMOOTHNESS = 0.7
const FALLOFF = 5

const smoothUnion = (d1: number, d2: number, k: number) => {
  const h = Math.min(Math.max(0.5 + 0.5 * (d2 - d1) / k, 0), 1)
  return d2 * (1 - h) + d1 * h - k * h * (1 - h)
}

export const hero_field = () => {
  const section = document.querySelector<HTMLElement>('[data-hero]')
  const field = section?.querySelector<HTMLElement>('[data-hero-field]')
  if (!section || !field) return

  let cols = 0
  let rows = 0
  let aspect = 1
  let cellWidth = 1
  let cellHeight = 1
  let pointer: { x: number; y: number } | null = null
  let frame = 0

  const measure = () => {
    ; ({ cols, rows, cellWidth, cellHeight } = measureGrid(section, field))
    aspect = cellWidth / cellHeight
  }

  const render = () => {
    frame = 0
    const m = Math.min(cols, rows)
    const px = pointer ? (2 * (pointer.x - cols / 2)) / m * aspect : 0
    const py = pointer ? (2 * (pointer.y - rows / 2)) / m : 0

    let out = ''
    for (let y = 0; y < rows; y++) {
      const sy = (2 * (y - rows / 2)) / m
      for (let x = 0; x < cols; x++) {
        const sx = (2 * (x - cols / 2)) / m * aspect
        const d1 = Math.hypot(sx, sy) - RADIUS
        const d2 = Math.hypot(sx - px, sy - py) - RADIUS
        const d = smoothUnion(d1, d2, SMOOTHNESS)
        const c = 1 - Math.exp(-FALLOFF * Math.abs(d))
        out += DENSITY[Math.floor(c * DENSITY.length)]
      }
      out += '\n'
    }
    field.textContent = out
  }

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(render)
  }

  window.addEventListener('pointermove', (e) => {
    const rect = section.getBoundingClientRect()
    if (rect.bottom <= 0) return
    pointer = {
      x: (e.clientX - rect.left) / cellWidth,
      y: (e.clientY - rect.top) / cellHeight,
    }
    schedule()
  }, { passive: true })

  new ResizeObserver(() => {
    measure()
    schedule()
  }).observe(section)

  document.fonts.ready.then(() => {
    measure()
    schedule()
  })
}
