// Game of Life at double vertical resolution, ported from play.core "Golgol" (ertdfgcvb, Apache-2.0).

const FPS = 24
const BRUSH = 5

const run = (field: HTMLElement) => {
  const container = field.parentElement
  if (!container) return

  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let grid = { cols: 0, rows: 0, cellWidth: 1, cellHeight: 1 }
  let width = 0
  let height = 0
  let cells = new Uint8Array(0)
  let scratch = new Uint8Array(0)
  let pointer: { x: number; y: number } | null = null
  let visible = false
  let frame = 0
  let last = 0

  const draw = () => {
    let out = ''
    for (let row = 0; row < grid.rows; row++) {
      const upperRow = 2 * row * width
      const lowerRow = upperRow + width
      for (let x = 0; x < width; x++) {
        const upper = cells[upperRow + x]
        const lower = cells[lowerRow + x]
        out += upper ? (lower ? '█' : '▀') : lower ? '▄' : ' '
      }
      out += '\n'
    }
    field.textContent = out
  }

  const step = () => {
    if (pointer) {
      const cx = Math.floor(pointer.x)
      const cy = Math.floor(pointer.y)
      for (let y = Math.max(cy - BRUSH, 0); y <= Math.min(cy + BRUSH, height - 1); y++) {
        for (let x = Math.max(cx - BRUSH, 0); x <= Math.min(cx + BRUSH, width - 1); x++) {
          cells[y * width + x] = Math.random() < 0.5 ? 1 : 0
        }
      }
    }

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let neighbors = 0
        for (let dy = -1; dy <= 1; dy++) {
          const ny = y + dy
          if (ny < 0 || ny >= height) continue
          for (let dx = -1; dx <= 1; dx++) {
            const nx = x + dx
            if ((dx === 0 && dy === 0) || nx < 0 || nx >= width) continue
            neighbors += cells[ny * width + nx]
          }
        }
        const i = y * width + x
        scratch[i] = neighbors === 3 || (cells[i] === 1 && neighbors === 2) ? 1 : 0
      }
    }
    ;[cells, scratch] = [scratch, cells]
  }

  const tick = (time: number) => {
    frame = requestAnimationFrame(tick)
    if (time - last < 1000 / FPS) return
    last = time
    step()
    draw()
  }

  const updateLoop = () => {
    const running = visible && !still
    if (running && !frame) frame = requestAnimationFrame(tick)
    if (!running && frame) {
      cancelAnimationFrame(frame)
      frame = 0
    }
  }

  const resize = () => {
    const probe = document.createElement('span')
    probe.textContent = 'X'.repeat(100)
    field.append(probe)
    const cellWidth = probe.getBoundingClientRect().width / 100
    probe.remove()
    const cellHeight = parseFloat(getComputedStyle(field).lineHeight)
    grid = {
      cols: Math.ceil(container.clientWidth / cellWidth),
      rows: Math.ceil(container.clientHeight / cellHeight),
      cellWidth,
      cellHeight,
    }
    if (grid.cols === width && grid.rows * 2 === height) return
    width = grid.cols
    height = grid.rows * 2
    cells = new Uint8Array(width * height).map(() => (Math.random() > 0.5 ? 1 : 0))
    scratch = new Uint8Array(width * height)
    draw()
  }

  const toCells = (e: PointerEvent) => {
    const rect = container.getBoundingClientRect()
    return {
      x: (e.clientX - rect.left) / grid.cellWidth,
      y: ((e.clientY - rect.top) / grid.cellHeight) * 2,
    }
  }

  container.addEventListener('pointerdown', (e) => {
    pointer = toCells(e)
  })
  container.addEventListener('pointermove', (e) => {
    if (pointer) pointer = toCells(e)
  })
  for (const type of ['pointerup', 'pointercancel', 'blur'] as const) {
    window.addEventListener(type, () => {
      pointer = null
    })
  }

  new ResizeObserver(resize).observe(container)
  document.fonts.ready.then(resize)

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    updateLoop()
  }).observe(container)
}

// Every <Life /> layer runs its own automaton sized to its parent element.
export const life = () => {
  document.querySelectorAll<HTMLElement>('[data-life]').forEach(run)
}
