import type { CodeLanguage } from '../../utils/code_language'

type SectionLabelProps = {
  codeLanguage: CodeLanguage
  name: string
}

const SectionLabel = ({ codeLanguage, name }: SectionLabelProps) => {
  return (
    <span data-reveal title={codeLanguage.name} class={'text-sm text-gray-400'}>
      <span aria-hidden="true">{codeLanguage.prefix} </span>
      {name}
    </span>
  )
}

export default SectionLabel
