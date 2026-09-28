export const navbar = () => {
  const nav = document.querySelector<HTMLElement>('[data-navbar]')
  if (!nav) return

  const sections = [...document.querySelectorAll<HTMLElement>('[data-nav-theme]')]
  let frame = 0

  const update = () => {
    frame = 0
    const navRect = nav.getBoundingClientRect()
    const line = navRect.top + navRect.height / 2
    const current = sections.find((section) => {
      const rect = section.getBoundingClientRect()
      return rect.top <= line && rect.bottom > line
    })
    nav.dataset.theme = current?.dataset.navTheme ?? 'light'
  }

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(update)
  }

  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
  update()
}
