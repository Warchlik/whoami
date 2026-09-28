import About from "../domain/about/About"
import Contact from "../domain/contact/Contact"
import Experience from "../domain/experience/Experience"
import Hero from "../domain/hero/Hero"
import Stack from "../domain/stack/Stack"
import { randomLanguage } from "../../utils/language"

const RootPage = () => {
  const language = randomLanguage()

  return (
    <>
      <Hero />
      <About language={language} />
      <Stack language={language} />
      <Experience language={language} />
      <Contact language={language} />
    </>
  )
}

export default RootPage
