
const ScrollProgress = () => {
  return (
    <div
      data-scroll-progress
      class={"pointer-events-none fixed top-0 inset-x-0 z-50 h-0.5 origin-left bg-[#e5e5e5] mix-blend-difference"}
      style={{ transform: 'scaleX(0)' }}
    />
  )
}

export default ScrollProgress
