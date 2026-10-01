type LifeProps = {
  class: string
}

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
