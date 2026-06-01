<!--
  Pull request title MUST follow Conventional Commits:
    feat: …    fix: …    chore: …    docs: …    test: …    refactor: …    ci: …    perf: …    style: …
  This title becomes the squash-merge commit message on main.
-->

## Summary

<!-- One short paragraph: what changed and why. Link issue if any. -->

## Type of change

- [ ] feat — new user-facing capability
- [ ] fix — bug fix
- [ ] chore — tooling / infra / non-code housekeeping
- [ ] docs — documentation only
- [ ] test — adding or refining tests
- [ ] refactor — internal change, no behaviour delta
- [ ] ci — CI/CD pipeline
- [ ] perf — performance
- [ ] style — formatting / lint
- [ ] BREAKING CHANGE (describe in summary)

## How was it tested

<!-- Be specific. "Tested locally" is not enough. -->
<!-- Examples:
  - npm run lint, npm run build — both pass
  - Opened http://localhost:3000, verified theme toggle, navigated all anchors
  - Printed page to PDF, checked page breaks
  - Lighthouse run: Perf 97 / A11y 100 / BP 100 / SEO 100
-->

## Screenshots / recordings

<!-- Required for any UI-visible change. Before / after if applicable. -->

## Checklist

- [ ] PR title follows Conventional Commits
- [ ] Branch name uses a valid prefix (`feat/`, `fix/`, `chore/`, `docs/`, `test/`, `refactor/`, `ci/`, `perf/`)
- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes
- [ ] `npm run format:check` passes
- [ ] `npm run build` passes
- [ ] No new copy hardcoded in components (content goes to `src/content/`)
- [ ] Updated `docs/ARCHITECTURE.md` if structure / theming / conventions changed
- [ ] Lighthouse gate respected (Perf ≥ 95, A11y ≥ 95, BP ≥ 95, SEO ≥ 90)
