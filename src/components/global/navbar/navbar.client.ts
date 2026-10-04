export const navbar = () => {
  const nav = document.querySelector<HTMLElement>('[data-navbar]')

  if (!nav) return

  const sections = [...document.querySelectorAll<HTMLElement>('[data-nav-theme]')]
  const links = [...nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')]
  let frame = 0

  const update = () => {
    frame = 0
    const navRect = nav.getBoundingClientRect()
    const navLine = navRect.top + navRect.height / 2
    const middle = window.innerHeight / 2
    let behindNav: HTMLElement | undefined
    let active: HTMLElement | undefined

    for (const section of sections) {
      const rect = section.getBoundingClientRect()
      if (rect.top <= navLine && rect.bottom > navLine) behindNav = section
      if (rect.top <= middle && rect.bottom > middle) active = section
    }

    nav.dataset.theme = behindNav?.dataset.navTheme ?? 'light'

    if (!active) return

    const href = active.id ? `#${active.id}` : '#'
    for (const link of links) link.toggleAttribute('data-open', link.getAttribute('href') === href)
  }

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(update)
  }

  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
  update()
}
