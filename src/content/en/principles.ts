import type { PrincipleModel } from "../types";

export const principles: PrincipleModel[] = [
  {
    title: "Refactor before you rewrite",
    body: "Large rewrites are political projects, not engineering ones. Show the code can be improved incrementally first. At Monterosa, refactoring the legacy Ember.js codebase delivered a 20% performance gain — more than any first-year rewrite would have promised.",
  },
  {
    title: "Code review is mentorship, not gatekeeping",
    body: 'Replace "fix this" with "what trade-off did you weigh here?" That\'s the difference between reviewing for code quality and reviewing for engineer growth. On a long enough timeline, the second matters more. After 8 years at IT Academy, I stopped distinguishing review from teaching.',
  },
  {
    title: "A reusable component is an architecture decision, not a tooling one",
    body: "Storybook doesn't solve a design system — the contract between frontend, design and product does. Storybook documents the decision you already made. At Synder I pitched a custom UI kit not as a set of components, but as a way to lock in that contract.",
  },
  {
    title: "Migration without a working legacy is fantasy",
    body: "Every migration is two parallel stories: how we build the new thing, and how we keep the old one alive. At StoneX the legacy production system cannot break for a single day while migration to React / Next.js is running. Forget the second story and it returns as incidents.",
  },
];
