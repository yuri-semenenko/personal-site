# Personal Site — Yuri Semenenko

Personal CV / portfolio website. Senior Frontend Engineer & Mentor, based in Krakow, Poland.

**Live:** _pending Vercel deployment_

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui · next-themes · Motion One · Vercel

## Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build
npm run lint
```

Requires Node 20+.

## Project structure

```
src/
  app/               # Next.js App Router routes and layouts
  content/           # Typed content modules per locale
  components/        # UI components
public/
  files/             # Downloadable assets (CV PDF)
docs/
  spec.md            # Full project specification
```

## Roadmap

- **Phase 1:** MVP — EN-only landing page with all sections (Hero, About, Experience, Skills, Education, Projects, Teaching, Contact), dark/light theme, animations, Vercel deploy.
- **Phase 2:** RU/PL/BY locales, custom domain, SEO (sitemap, robots, canonical, structured data), analytics, possible Blog or extended Projects section.

Full requirements and acceptance criteria: [`docs/spec.md`](docs/spec.md).

## License

Personal project. Content © Yuri Semenenko.
