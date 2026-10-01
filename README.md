# whoami

Personal portfolio of Szymon Wardak. Server-rendered with [Hono](https://hono.dev) JSX, bundled by Vite, styled with Tailwind CSS and deployed to Cloudflare Workers. Available in English (`/`) and Polish (`/pl`).

## Scripts

```sh
pnpm install
pnpm dev        # dev server on http://localhost:3000
pnpm build      # production build
pnpm deploy     # build + wrangler deploy
pnpm typecheck  # tsc -b (worker + client projects)
pnpm check      # biome lint + format check
```

## Structure

```
src/
  index.tsx        app entry: layout, language detection, 404/500 handlers
  routes/          web pages (web.tsx) and JSON API (api.ts)
  utils/           layout renderer and helpers
  i18n/            en/pl dictionaries; pl is typed against en
  components/
    base/          small shared building blocks
    custom/        visual effects (cursor dot, game of life, reveal)
    domain/        page sections (hero, about, stack, experience, contact)
    features/      full pages (root, error)
    global/        navbar and footer
  script.ts        client entry, runs every *.client.ts module
  style.css        Tailwind entry
public/            static files (CVs, favicon)
```

Files named `*.client.ts` run in the browser and are type-checked by `tsconfig.client.json`; everything else runs on the Worker (`tsconfig.worker.json`).
