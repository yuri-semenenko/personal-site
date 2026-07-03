import type { BadgeVariant, StatusKey } from "./types";

// Presentation only — status labels are locale content (`ui.statusLabels`).
export const STATUS_VARIANTS: Record<StatusKey, BadgeVariant> = {
  "open-to-work": "success",
  "open-to-projects": "success",
  "open-to-offers": "primary",
  "not-looking": "muted",
  "available-remote": "primary",
  "available-hybrid": "primary",
  "available-onsite": "secondary",
  consulting: "secondary",
  freelance: "secondary",
  mentoring: "secondary",
  relocatable: "secondary",
};
