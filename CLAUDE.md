# CLAUDE.md

Project-level guidance for Claude Code working in this repository. Global user preferences live in `~/.claude/CLAUDE.md`.

## What this is

Personal CV / portfolio website for **Yuri Semenenko** (Senior Frontend Engineer & Mentor, based in Krakow). Single-page landing with anchored sections, dark-first design, multi-locale ready. Current architecture, theming, typography, and conventions live in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — keep it in sync when structure changes.

## Stack

- **Next.js 16** (App Router, RSC, `src/` directory)
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (CSS-first config via `@theme`, no `tailwind.config.js`)
- **shadcn/ui** — primitives only, restyled aggressively. The site must NOT look like a default shadcn template.
- **next-themes** for dark/light with system default and no flash
- **Motion One** for animations; Framer Motion only when `AnimatePresence` / orchestration is genuinely needed (bundle cost is high)
- Hosted on **Vercel**

## Important: Next.js 16 has breaking changes from training data

Before writing or modifying anything that touches:

- Server Components / Server Actions
- Caching (`fetch`, `cache()`, `unstable_cache`, route segment config)
- Route handlers / middleware
- Image / Font optimization APIs
- `next.config.ts` flags

...read the relevant guide in `node_modules/next/dist/docs/` and heed deprecation notices in build output. Do not assume Next.js 14/15 behavior.

## Commands

```bash
npm run dev      # local dev server on :3000
npm run build    # production build
npm run lint     # eslint
```

## Layout conventions

- `src/app/` — App Router pages, layouts, route handlers
- `src/content/{locale}/` — typed content modules (`profile`, `experience`, `skills`, `projects`, `teaching`, `education`, `contacts`, `navigation`). Models defined in `src/content/types.ts`.
- `src/components/` — reusable UI components
- `public/files/` — downloadable assets (CV PDF)
- `docs/ARCHITECTURE.md` — architecture snapshot, color scheme, typography, conventions

## Decision principles

- **No hardcoded text in components** outside of technical fallbacks. All copy comes from `src/content/`.
- **Phase 1 ships EN only.** The content loader (`getContent(locale)`) must accept a locale arg so Phase 2 can plug `next-intl` in without touching components.
- **Lighthouse is a gate**, not an aspiration: Performance ≥ 95, A11y ≥ 95, Best Practices ≥ 95, SEO ≥ 90 (Phase 1). Animations or dependencies that put this at risk get rejected.
- **shadcn/ui is a building block, not a visual style.** Pull primitives, override aggressively via CSS variables.
- **No CMS, no backend, no contact form** in Phase 1. Content is committed code.

## Phases

- **Phase 1 (in progress):** MVP — EN-only landing, dark/light theme, animations, Vercel deploy.
- **Phase 2:** RU/PL/BY locales via `next-intl`, custom domain (`yuri-semenenko.dev`), sitemap/robots/canonical, structured data, analytics dashboards.
