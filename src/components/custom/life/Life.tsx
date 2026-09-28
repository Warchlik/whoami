type LifeProps = {
  // Text color class for the cells, e.g. "text-gray-400".
  class: string
}

// Game of Life background layer, animated by life.client.ts.
// The parent element must be `relative overflow-hidden`; content on top of it needs `relative`.
const Life = ({ class: className }: LifeProps) => {
  return (
    <pre
      data-life
      aria-hidden="true"
      class={`pointer-events-none absolute inset-0 overflow-hidden select-none text-xs leading-none ${className}`}
    />
  )
}

export default Life
