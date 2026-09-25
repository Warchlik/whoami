import { PropsWithChildren } from "hono/jsx"

type ButtonProps = PropsWithChildren<{
  class?: string
  onClick?: () => void
}>

const Button = ({ children, class: className, onClick }: ButtonProps) => {
  return (
    <button
      data-hover
      onClick={onClick}
      class={`inline-flex items-center justify-center rounded-full bg-slate-100 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-900/20 transition-colors duration-200 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${className ?? ""}`}
    >
      {children}
    </button>
  )
}

export default Button
