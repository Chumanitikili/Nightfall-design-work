# Nightfall Cape

A design portfolio and case-study showcase featuring concept-driven digital work, including projects for **KasiLink** and **Moya House**.

**Live site:** [designporty.ctikili.workers.dev](https://designporty.ctikili.workers.dev/)

## About

Nightfall Cape presents visual design and brand case studies through an interactive component showcase and dedicated project pages, highlighting layout, interaction, and responsive design work across multiple brands.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** — build tooling and dev server
- **Tailwind CSS** + **Radix UI / shadcn-style components** — styling and accessible primitives
- **tRPC** + **TanStack Query** — typed client/server data layer
- **Drizzle ORM** (MySQL) — database access
- **Express** — server, bundled with esbuild for production
- **Framer Motion** — animation

## Project structure

```
client/
  src/
    pages/       # Home, Discover, CaseStudy, KasiLink, Moya, ComponentShowcase, 404
    components/  # Shared UI components
    hooks/       # Custom hooks
    lib/         # Utilities (trpc client, etc.)
  public/
    manus-storage/  # Static images (marks, hero photos, textures)
  index.html
server/
  _core/         # Express entrypoint
shared/
  const.ts       # Shared constants
  types.ts       # Shared types
```

## Getting started

Install dependencies (this project uses `pnpm`):

```bash
pnpm install
```

Run the dev server:

```bash
pnpm dev
```

Type-check:

```bash
pnpm check
```

Run tests:

```bash
pnpm test
```

Build for production:

```bash
pnpm build
```

Start the production build:

```bash
pnpm start
```

## Notes

- Database access is via Drizzle ORM against MySQL; run `pnpm db:push` to generate and apply migrations after changing the schema.
- Images live in `client/public/manus-storage/` and are referenced with absolute paths in the page components.
