# Contributing

Workflow notes for this repository. This is a solo project, so "contributor" mostly means the author plus AI assistants — but the discipline is the same as a team project, and that's intentional.

## Branching model

**Trunk-based with short-lived feature branches.** No `develop`, no `release`, no `hotfix`.

```
main (protected, always deployable)
  ├── feat/short-description       # new capability
  ├── fix/short-description        # bug fix
  ├── chore/short-description      # tooling, infra, deps
  ├── docs/short-description       # documentation only
  ├── test/short-description       # tests
  ├── refactor/short-description   # internal change, no behaviour delta
  ├── ci/short-description         # CI/CD pipeline
  └── perf/short-description       # performance
```

Rules:

- Branches live ≤ 3 days. Older than that: rebase onto `main` or close.
- One logical change per branch. If the PR diff explains more than one thing, split it.
- Branch name prefix matches the Conventional Commit type used in the PR title.

## Commits

[Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).

Format:

```
<type>: <imperative summary in lowercase>

<optional body — what & why, not how>
```

Allowed types: `feat`, `fix`, `chore`, `docs`, `test`, `refactor`, `ci`, `perf`, `style`.

Breaking changes: add `!` after type (`feat!: drop locale fallback`) or a `BREAKING CHANGE:` footer.

Local commits inside a feature branch can be noisy — they get squashed on merge, so the only commit message that lands on `main` is the **PR title** (which must follow this format).

## Pull requests

- PR title = the squash-merge commit message. Make it count.
- Fill in the PR template — every section, including how you tested.
- Required CI checks must be green before merge.
- Self-review is fine for solo work — open the PR, read your own diff, then merge.
- Merge strategy: **Squash merge** only. Keeps `main` history linear and one-commit-per-PR.

## Local commands

```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # production build
npm run start          # serve the production build
npm run lint           # ESLint
npm run format         # Prettier write
npm run format:check   # Prettier check (CI-friendly)
ANALYZE=true npm run build   # bundle analyzer report
```

Run `npm run format` before staging — there is no formatter hook yet.

## Repository settings (one-time, in GitHub UI)

These are enforced by GitHub, not by code. Settings → … :

1. **Branches → Branch protection on `main`**
   - Require a pull request before merging
   - Require status checks to pass (add CI jobs as they exist)
   - Require branches to be up to date before merging
   - No force-pushes, no deletions
2. **General → Pull Requests**
   - Allow squash merging — only this option enabled
   - Default commit message: "Pull request title"
3. **General → Pull Requests → Automatically delete head branches** — on.

## Architecture and conventions

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for stack, structure, theming, typography, and engineering conventions specific to the codebase.
