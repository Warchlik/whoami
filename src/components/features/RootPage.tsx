import About from "../domain/about/About"
import Contact from "../domain/contact/Contact"
import Experience from "../domain/experience/Experience"
import Hero from "../domain/hero/Hero"
import Stack from "../domain/stack/Stack"

const RootPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Contact />
    </>
  )
}

export default RootPage
