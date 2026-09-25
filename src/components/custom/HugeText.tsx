
import { PropsWithChildren } from "hono/jsx"

const HugeText = ({ children }: PropsWithChildren) => {
  return (
    <span class={"text-8xl font-bold text-gray-900"}>
      {children}
    </span>
  )
}

export default HugeText
