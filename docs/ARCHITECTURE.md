# Architecture

Snapshot of how this site is actually built. Pragmatic, descriptive, current. If the code disagrees with this doc — the code wins; fix the doc.

## Overview

Single-page personal CV / portfolio. Static landing with anchored sections, dark-first design, multi-locale ready (Phase 1 ships EN only). No backend, no CMS, no contact form — content is committed code.

Hosted on Vercel. Custom domain: `yuri-semenenko.dev`.

## Tech stack

| Layer      | Choice                                                                               |
| ---------- | ------------------------------------------------------------------------------------ |
| Framework  | Next.js 16 (App Router, RSC, `src/` dir)                                             |
| UI runtime | React 19                                                                             |
| Language   | TypeScript (strict)                                                                  |
| Styling    | Tailwind CSS v4 — CSS-first config (`@theme`, no `tailwind.config.js`)               |
| Primitives | shadcn/ui + `@base-ui/react` (Radix successor) — restyled, not "shadcn-default" look |
| Theme      | `next-themes` (system / light / dark, no FOUC)                                       |
| Animation  | Motion (`motion/react`, ex-Framer Motion)                                            |
| Icons      | `lucide-react` + hand-rolled SVGs in `src/components/icons/`                         |
| Analytics  | `@vercel/analytics`, `@vercel/speed-insights`                                        |
| Hosting    | Vercel                                                                               |

Browserslist drops legacy: `chrome ≥ 110`, `edge ≥ 110`, `firefox ≥ 115`, `safari ≥ 16`, `ios_saf ≥ 16`. No IE/legacy polyfills.

## Project structure

```
src/
  app/                     # App Router — pages, layouts, route handlers
    layout.tsx             # Root layout: fonts, theme provider, JSON-LD, analytics, metadata
    page.tsx               # Single landing page — composes all sections
    globals.css            # Tailwind v4 @theme + CSS variables (light/dark)
    print.css              # @media print rules + beforeprint motion kill-switch
    icon.tsx               # Favicon (dynamic OG-style)
    apple-icon.tsx         # Apple touch icon
    opengraph-image.tsx    # OG/Twitter card image (1200x630)
    manifest.ts            # PWA manifest
    sitemap.ts             # sitemap.xml
    robots.ts              # robots.txt
  components/
    ui/                    # shadcn primitives (button, sheet) — locally owned, restyled
    icons/                 # Inline SVG icon components
    sections/              # One file per section on the landing page
    header.tsx             # Sticky nav, active-section highlight, mobile menu trigger
    footer.tsx
    hero.tsx               # Hero block with avatar / headline / CTAs
    hero-code-card.tsx     # Decorative "code card" in hero
    section.tsx            # <Section> primitive — title + eyebrow + Reveal wrapper
    reveal.tsx             # <Reveal>, <StaggeredList>, <StaggeredItem> — Motion wrappers
    scroll-progress.tsx    # Top reading-progress bar
    theme-provider.tsx     # next-themes wrapper
    theme-toggle.tsx       # Light/dark switcher
    mobile-menu.tsx        # Drawer nav (Sheet primitive)
    print-handler.tsx      # beforeprint/afterprint → sets data-printing on <html>
  content/
    types.ts               # All locale-content TypeScript models
    statuses.ts            # StatusKey catalog (open-to-work, mentoring, etc.)
    index.ts               # getContent(locale) loader
    en/                    # English content — one module per domain concept
      profile.ts, contacts.ts, navigation.ts, experience.ts, leadership.ts,
      principles.ts, teaching.ts, mentoring.ts, testimonials.ts, skills.ts,
      certifications.ts, education.ts, projects.ts, index.ts (aggregator)
  hooks/
    use-active-section.ts  # IntersectionObserver — highlights nav for current section
  lib/
    utils.ts               # cn() and small helpers
tests/
  unit/                    # Vitest — content validators, use-active-section, print-handler
  e2e/                     # Playwright smoke + a11y (Chromium, headless)
public/
  files/                   # Downloadable CV PDF
docs/
  ARCHITECTURE.md          # This file
next.config.ts             # Security headers + bundle analyzer toggle
playwright.config.ts       # Playwright config — webServer + projects + reporters
vitest.config.ts           # Vitest config — happy-dom + @/* alias
lighthouserc.json          # @lhci/cli config — assertions + collect settings
```

### Routing & rendering

- Single route (`/`). Sections are anchors (`#about`, `#experience`, …), not separate pages.
- Fully static. `getContent("en")` runs at build time inside RSCs — page renders to HTML at build, hydrates only for client islands (header, reveal, theme toggle, print handler).
- No route handlers, no middleware, no Server Actions.
- No `images` config — content is text-first; CV PDF served as a static asset.

## Content model

All copy lives in `src/content/{locale}/*.ts` as typed modules. Components receive content as props from `page.tsx` — they never import strings directly.

```ts
// src/content/index.ts
export function getContent(locale: Locale = "en"): LocaleContent;
```

Phase 1: `ru | pl | by` all alias to `enContent`. Phase 2 plugs in `next-intl` and per-locale modules without touching components.

Models live in `src/content/types.ts`. Notable ones:
`ProfileModel`, `ExperienceItemModel`, `LeadershipStoryModel` (C/R/O: context-action-outcome), `TestimonialModel`, `SkillGroupModel`, `CertificationModel`, `MentoringModel`, `PrincipleModel`, `ContactsModel`, `NavigationModel`.

Status flags (`StatusKey`: `open-to-work`, `mentoring`, etc.) are catalog-driven — the profile lists which keys are enabled, the catalog provides labels.

## Color scheme

CSS variables defined in `src/app/globals.css`, declared in **OKLCH** for perceptually uniform tone control across light/dark. Tailwind v4 `@theme inline` maps them to utility classes (`bg-background`, `text-foreground`, `text-primary`, …).

| Token                | Light (`:root`)                        | Dark (`.dark`)                     | Used for                     |
| -------------------- | -------------------------------------- | ---------------------------------- | ---------------------------- |
| `--background`       | `0.985 0 0` (near-white)               | `0.13 0.005 240` (deep navy-black) | Page background              |
| `--foreground`       | `0.14 0.005 240`                       | `0.96 0 0`                         | Body text                    |
| `--card`             | `1 0 0`                                | `0.17 0.005 240`                   | Cards, callouts              |
| `--muted`            | `0.96 0.005 240`                       | `0.22 0.005 240`                   | Subtle panels                |
| `--muted-foreground` | `0.4 0.005 240`                        | `0.65 0.005 240`                   | Secondary text               |
| `--border`           | `0.9 0.005 240`                        | `1 0 0 / 10%`                      | Hairlines                    |
| `--primary`          | `0.5 0.18 245` (blue)                  | `0.68 0.16 245` (lifted blue)      | CTAs, accents, ring          |
| `--highlight`        | `0.5 0.22 340` (magenta)               | `0.65 0.21 340`                    | Secondary accent (chart-2)   |
| `--destructive`      | `0.577 0.245 27.325`                   | `0.704 0.191 22.216`               | Errors (rare)                |
| `--chart-{1..5}`     | blue / magenta / teal / amber / violet | lifted versions                    | Reserved for future data viz |

**Dark mode is the default** (`next-themes` with `defaultTheme="system"`, but design tuned for dark first).

Light-theme accents (`--primary`, `--highlight`, `--muted-foreground`) sit at lower lightness than the original shadcn palette so `text-primary` / `bg-primary` clear the WCAG 2.1 AA 4.5:1 threshold on `--background`. Re-tune in OKLCH if these tokens move — keep the axe a11y suite green.

Section striping: every even `<section>` inside `<main>` gets `color-mix(in oklch, var(--foreground) 4%, var(--background))` — a 4% tint, theme-aware via OKLCH mixing. See `globals.css` `@layer components`.

## Typography

Two Google fonts, loaded via `next/font/google` in `src/app/layout.tsx`:

| Role             | Family                     | CSS variable                     | Tailwind utility                  |
| ---------------- | -------------------------- | -------------------------------- | --------------------------------- |
| Body / sans      | **Inter**                  | `--font-sans`                    | `font-sans` (default on `<html>`) |
| Code / mono      | **JetBrains Mono**         | `--font-mono`                    | `font-mono`                       |
| Headings (h1–h6) | **JetBrains Mono** (alias) | `--font-heading` → `--font-mono` | applied in `@layer base`          |

Both use `display: swap`, latin subset. No FOUT mitigation beyond Next.js defaults.

Base size: `html { font-size: 18px }` — slightly larger than 16px default, eases dense CV copy.

Heading character variants: `font-feature-settings: "ss01", "cv01"` — pulls JetBrains Mono's tweaked alternates for a more editorial feel than the default mono.

Section-level scale is set inline at each section (`text-3xl sm:text-4xl` for `h2` in `Section`, eyebrow uses `font-mono text-xs uppercase tracking-widest`).

## Component layers

Four-tier hierarchy, simplest to most specific:

1. **Primitives (`components/ui/`)** — `button`, `sheet`. Sourced from shadcn; restyled via CSS variables. Owned locally, not imported from a library.
2. **Atoms (`components/icons/`, `reveal.tsx`)** — pure presentational. `<Reveal>` and `<StaggeredList>`/`<StaggeredItem>` are the only standardized animation surfaces.
3. **Section primitive (`components/section.tsx`)** — `<Section id title eyebrow>` wraps every landing section. Provides consistent vertical rhythm, `aria-labelledby`, eyebrow + heading, and a `Reveal` for the heading block.
4. **Sections (`components/sections/`)** — one file per anchored section. Pure render functions that take typed content props.

Page chrome (`Header`, `Footer`, `Hero`, `ScrollProgress`, `MobileMenu`, `ThemeToggle`, `PrintHandler`) lives directly under `components/`.

## Animations

- **Library:** `motion/react` (formerly Framer Motion). Used because `Reveal` / `StaggeredList` benefit from `AnimatePresence`-style orchestration; Motion One was deemed insufficient for the stagger pattern.
- **Default motion:** `<Reveal>` — opacity 0→1 + 28px translateY, `whileInView` triggers once at viewport margin `-120px`, ease `cubic-bezier(0.22, 1, 0.36, 1)`, 700ms.
- **Scroll progress bar** — top fixed bar bound to `useScroll().scrollYProgress`.
- **`prefers-reduced-motion: reduce`** — global CSS in `globals.css` collapses all animation/transition durations to 0.01ms and disables smooth scroll.
- **Print** — `print-handler.tsx` registers `beforeprint`/`afterprint` and sets `data-printing` on `<html>`. `print.css` then force-overrides Motion's inline WAAPI styles (CSS `@media print` alone can't reach WAAPI). This is the only reason for a separate `print.css`.

## SEO & metadata

Centralized in `src/app/layout.tsx`:

- **`metadata` export** — title template, description, keywords, canonical, OpenGraph (`type: "profile"`), Twitter card, robots config, format detection (no auto-link for email/address/phone).
- **JSON-LD** — `Person` schema injected via inline `<script type="application/ld+json">` in `<body>`. Pulls from `profile.seo` + `contacts` (auto-derived `sameAs`).
- **`opengraph-image.tsx`** — dynamic 1200×630 OG image generated at build.
- **`icon.tsx` / `apple-icon.tsx` / `manifest.ts`** — PWA icons + manifest.
- **`sitemap.ts` / `robots.ts`** — App Router conventions.

Security headers configured in `next.config.ts`: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, restrictive `Permissions-Policy`, `X-DNS-Prefetch-Control: on`.

## Accessibility

- Semantic landmarks: `<header>`, `<main>`, `<footer>`, each section uses `<section aria-labelledby>`.
- Skip-to-content not implemented (single page, header is sticky).
- All interactive elements keyboard-reachable; focus ring uses `outline-ring/50` (defined in `@layer base`).
- Underlined inline links (testimonials, contact) — explicit affordance, not color-only (WCAG 1.4.1).
- Contrast tuned in OKLCH against AA at 18px base — re-check with a tool, not memory.

## Performance

Lighthouse is a **gate**, not an aspiration (Phase 1):

| Metric         | Target |
| -------------- | ------ |
| Performance    | ≥ 95   |
| Accessibility  | ≥ 95   |
| Best Practices | ≥ 95   |
| SEO            | ≥ 90   |

Levers in place:

- Static rendering — page is HTML at build.
- Modern browserslist — fewer polyfills.
- Font `display: swap` + variable fonts (Inter, JetBrains Mono).
- Motion runs only on visible elements; reduced-motion respected.
- `@next/bundle-analyzer` available via `ANALYZE=true npm run build`.

A new dependency or animation that risks the gate gets rejected, period.

The gate is **enforced**, not aspirational — Lighthouse CI runs against the production server on every push to `main` (see Testing § Lighthouse CI). A score drop turns the build red on `main`; resolve via revert PR, then a follow-up that doesn't regress.

We deliberately don't run LHCI on every PR: ~60–70% of PRs touch docs / tests / CI meta and physically can't move the score, so the post-merge model is signal-rich and cost-light. To check a specific PR locally before merging, run `npm run lhci`.

## Build & deploy

```bash
npm run dev          # Next dev server on :3000
npm run build        # Production build
npm run start        # Serve production build locally
npm run lint         # ESLint (eslint-config-next + prettier compat)
npm run typecheck    # tsc --noEmit
npm run format       # Prettier write
npm run format:check # Prettier check (CI-friendly)
npm run test:e2e     # Playwright smoke tests
ANALYZE=true npm run build   # Bundle analyzer report
```

Vercel:

- Auto-deploy on push to `main`.
- Preview deploys for any branch / PR.
- Analytics + Speed Insights wired through `@vercel/analytics` and `@vercel/speed-insights`.

## Testing

Pragmatic, narrow surface. Tests target real risk areas, not coverage %.

- **Vitest unit (`tests/unit/`)** — happy-dom env, `@/*` alias. Three suites:
  - `content.test.ts` — invariants on typed content: nav `href` ↔ `sectionId` consistency, contact URL schemes, status keys match `STATUS_CATALOG`, profile CV file exists on disk, testimonials use HTTPS. Catches molecular bugs that strict TS can't (e.g. valid-but-wrong values).
  - `use-active-section.test.tsx` — covers the `IntersectionObserver` hook with a fake observer: initial state, multi-entry resolution (highest ratio wins), missing DOM nodes, cleanup on unmount, observer init params (rootMargin / threshold).
  - `print-handler.test.tsx` — covers the beforeprint/afterprint state machine: `data-printing` toggling, `<details>` open/restore, atomic break wrap and unwrap, WAAPI `finish()` invocation, listener cleanup. `document.getAnimations` stubbed since happy-dom doesn't ship it.
- **Playwright smoke (`tests/e2e/smoke.spec.ts`)** — Chromium-only, headless. Covers: page loads with key landmarks, primary nav anchors scroll to sections, theme toggle flips `html.dark`, CV PDF responds 200, mobile menu opens on small viewport.
- **Playwright A11y (`tests/e2e/a11y.spec.ts`)** — `@axe-core/playwright` scans against WCAG 2.0/2.1 A & AA tags on the main page in both themes plus the mobile menu open state. Theme is forced via `localStorage` `addInitScript` before navigation; the mobile-menu test waits for the Sheet's opacity transition to settle (Base UI animates `opacity 0→1`, scanning mid-transition reads partially-transparent pixels and trips contrast).
- **CI** — separate jobs: `unit` (Vitest, ~30s), `e2e` (Playwright + browser caching, ~1min), `lighthouse` (post-merge only). Reports archived as GitHub artifacts.
- **Not tested** — pure presentation components (display from typed props), Tailwind classes, snapshot of RSC output. RTL tests for `(props) => <jsx>` would be noise, not signal.

- **Lighthouse CI (`lighthouserc.json`)** — `@lhci/cli` runs Lighthouse 3 times against the production server, asserts category scores against the perf/a11y/best-practices/seo gate, and uploads reports to LHCI's temporary public storage (URLs printed in the job log; expire after ~7 days). Desktop preset; `--headless=new` Chrome. Reports also archived as a GitHub artifact for 7 days. **Runs only on push to `main`** — see Performance section for the rationale. Run `npm run lhci` to validate a specific PR locally before merge.

Run locally with `npm test` (Vitest), `npm run test:e2e` (Playwright + axe), `npm run lhci` (Lighthouse).

## Dependencies

**Policy: manual, batched, deliberate.** No Dependabot version updates, no Dependabot security updates, no Renovate.

Why this and not auto-PRs:

- **Lockfile is the source of truth.** `package-lock.json` pins exact versions for the full dep tree (incl. transitive). `npm ci` in CI is strict against the lockfile — the `^` ranges in `package.json` have no practical effect on installed code.
- **PR-noise budget is small** on a solo repo. Daily/weekly automated PRs would dominate the PR tab without proportional benefit.
- **CVE response is covered separately** (see below).

What is enabled:

- **Dependabot alerts** (Settings → Code security) — notifications only, no PRs. Surfaces CVEs in dependencies as they're published.
- **Dependabot malware alerts** — same channel, specifically for malware-flagged packages.

What is explicitly **not** enabled (and was a considered choice, not an oversight):

- Dependabot version updates
- Dependabot security updates
- Grouped security updates

### Manual upgrade workflow

```bash
npx npm-check-updates             # see what's outdated
npx npm-check-updates -u          # apply to package.json
npm install                       # refresh lockfile
npm run lint && npm run typecheck && npm test && npm run test:e2e
npm run build                     # final smoke
```

Cadence: monthly or quarterly, plus immediate response to any CVE alert that affects this codebase. Each upgrade batch lands as a single PR (`chore/deps-YYYY-MM`) with the changelog of the batch in the PR body.

### Trade-off accepted

The clear cost of this policy is **slower CVE response than auto-PR security updates would give**. The user accepts that risk because:

1. This is a static, no-backend, no-auth, no-user-input site — the attack surface for a typical npm CVE is minimal.
2. Dependabot alerts arrive immediately and are reviewable in seconds.
3. Discipline is enforced by the alert channel, not by automation.

If you find yourself ignoring alerts or postponing batches for >3 months, that's the signal to revisit and turn Dependabot security updates on.

## Roadmap

- **Phase 1 (active)** — EN landing, dark/light, animations, print, SEO baseline, Vercel deploy.
- **Phase 2** — RU/PL/BY locales via `next-intl`, custom domain hardening, expanded structured data, possibly Blog / extended Projects.

## Conventions

- **No hardcoded copy in components.** All strings come from `src/content/`. Aria labels and CV PDF filename are the only allowed inline fallbacks.
- **shadcn primitives are seeds, not styles.** Override aggressively via CSS variables — the site must not look like a default shadcn template.
- **`getContent(locale)` always accepts a locale arg**, even in Phase 1, so Phase 2 doesn't touch components.
- **Section anchors are part of the URL contract.** Don't rename `#about`, `#experience`, etc. without updating `navigation.ts`.
- **Animations gated by reduced-motion preference.** No exceptions.
- **Run `npm run format` before committing.** Hooks don't enforce it yet.
