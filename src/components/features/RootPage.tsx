import { dictionaries, type Locale } from '../../i18n'
import { randomCodeLanguage } from '../../utils/code_language'
import About from '../domain/about/About'
import Contact from '../domain/contact/Contact'
import Experience from '../domain/experience/Experience'
import Hero from '../domain/hero/Hero'
import Stack from '../domain/stack/Stack'

const RootPage = ({ locale }: { locale: Locale }) => {
  const t = dictionaries[locale]
  const codeLanguage = randomCodeLanguage()

  return (
    <>
      <Hero />
      <About codeLanguage={codeLanguage} t={t.about} />
      <Stack codeLanguage={codeLanguage} t={t.stack} />
      <Experience codeLanguage={codeLanguage} t={t.experience} />
      <Contact codeLanguage={codeLanguage} t={t.contact} />
    </>
  )
}

export default RootPage
