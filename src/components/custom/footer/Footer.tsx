import Life from "../life/Life"

const Footer = () => {
  return (
    <footer class={"relative overflow-hidden w-full border-t border-gray-200 bg-white"}>
      <Life class={"text-gray-400"} />
      <div class={"relative w-full max-w-3xl mx-auto px-6 py-8 flex flex-col gap-2 text-xs text-gray-600 sm:flex-row sm:justify-between"}>
        <span>© {new Date().getFullYear()} Szymon Wardak</span>
        <span>built with hono · cloudflare workers</span>
      </div>
    </footer>
  )
}

export default Footer
