import type { LeadershipStoryModel } from "../types";

export const leadership: LeadershipStoryModel[] = [
  {
    title: "Building a cross-squad frontend community",
    organization: "StoneX Group Inc.",
    status: "ongoing",
    context:
      "Three frontend squads across multiple geographies, with limited horizontal communication. Duplicate work and inconsistent review standards were creeping in.",
    action:
      "Currently organising an internal frontend community across squads and countries to share patterns, align review standards, and create a shared space for engineers across the org.",
    outcome: "In flight.",
  },
  {
    title: "Pitching and shipping a Component Library",
    organization: "Synder",
    status: "delivered",
    context:
      "Four microfrontend products on different React versions and no shared UI primitives. Every team was rebuilding the same components from scratch.",
    action:
      "Scoped a Component Library proposal end-to-end: research, pitch to leadership, design-team alignment, first demo components.",
    outcome:
      "Proposal accepted as a multi-quarter initiative. Working channel between frontend and design established. First demo components delivered against the accepted spec.",
  },
  {
    title: "Rewriting the design system",
    organization: "Monterosa",
    status: "delivered",
    context:
      "Legacy Ember.js platform with an inconsistent UI and a slow build. Needed both visual consolidation and structural cleanup.",
    action:
      "Owned the design-system rewrite to the new visual language, restructured the component file layout, and accelerated build time — in parallel with progressive React migration.",
    outcome:
      "Full design-system rewrite shipped. 20% performance gain on the legacy codebase through targeted refactoring. 80-85%+ unit test coverage on the new React modules.",
  },
];
