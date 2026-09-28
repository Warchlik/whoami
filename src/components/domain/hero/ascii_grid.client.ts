export type AsciiGrid = {
  cols: number
  rows: number
  cellWidth: number
  cellHeight: number
}

export const measureGrid = (section: HTMLElement, field: HTMLElement): AsciiGrid => {
  const probe = document.createElement('span')
  probe.textContent = 'X'.repeat(100)
  field.append(probe)
  const cellWidth = probe.getBoundingClientRect().width / 100
  probe.remove()
  const cellHeight = parseFloat(getComputedStyle(field).lineHeight)

  return {
    cols: Math.ceil(section.clientWidth / cellWidth),
    rows: Math.ceil(section.clientHeight / cellHeight),
    cellWidth,
    cellHeight,
  }
}
