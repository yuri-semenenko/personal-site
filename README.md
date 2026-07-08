# Personal Site — Yuri Semenenko

[![CI](https://github.com/yuri-semenenko/personal-site/actions/workflows/ci.yml/badge.svg)](https://github.com/yuri-semenenko/personal-site/actions/workflows/ci.yml)

Personal CV / portfolio website. Senior Frontend Engineer & Mentor, based in Krakow, Poland.

**Live:** https://yuri-semenenko.dev

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui · next-themes · Motion One · Vercel

## Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build
npm run lint
npm run typecheck
npm run format:check
npm test             # Vitest unit tests
npm run test:e2e     # Playwright smoke + a11y
npm run lhci         # Lighthouse CI (Perf ≥95 / A11y ≥95 / BP ≥95 / SEO ≥90)
```

Requires **Node 24 LTS** (see `.nvmrc`). This matches Vercel's current default runtime and what CI runs on.

## Project structure

```
src/
  app/               # Next.js App Router routes and layouts
  content/           # Typed content modules per locale
  components/        # UI components
tests/
  unit/              # Vitest unit tests (content validators, hooks, print handler)
  e2e/               # Playwright smoke + a11y
public/
  files/             # Downloadable assets (CV PDF)
docs/
  ARCHITECTURE.md    # Architecture, theming, typography, conventions
```

## Roadmap

- **Phase 1 — shipped.** EN single-page landing with all sections, dark/light theme (system default, no flash), Motion One animations, deployed to Vercel.
- **Phase 2 — mostly shipped; PL/BE translations remaining.** Native `[locale]` routing with EN canonical at the unprefixed root (EN and RU live; PL and BE — BCP-47 `be`, not `by` — pending translations), custom domain `yuri-semenenko.dev`, SEO (sitemap, robots, canonical + hreflang, JSON-LD structured data), analytics (Vercel Analytics + Speed Insights), and a desktop horizontal view mode.
- **Later.** Re-enable or extend the Projects section (parked) and a possible writing/blog area.

Architecture and conventions: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

Workflow (branches, commits, PRs): [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

Personal project. Content © Yuri Semenenko.
