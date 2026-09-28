import type { Language } from "../../utils/language"

type SectionLabelProps = {
  language: Language
  name: string
}

const SectionLabel = ({ language, name }: SectionLabelProps) => {
  return (
    <span data-reveal title={language.name} class={"text-sm text-gray-400"}>
      <span aria-hidden="true">{language.prefix} </span>
      {name}
    </span>
  )
}

export default SectionLabel
