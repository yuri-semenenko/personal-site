import type { BadgeVariant, StatusKey } from "./types";

export const STATUS_CATALOG: Record<StatusKey, { label: string; variant: BadgeVariant }> = {
  "open-to-work": { label: "Open to work", variant: "success" },
  "open-to-projects": { label: "Looking for interesting projects", variant: "success" },
  "open-to-offers": { label: "Open to offers", variant: "primary" },
  "not-looking": { label: "Not looking for work", variant: "muted" },
  "available-remote": { label: "Available for remote", variant: "primary" },
  "available-hybrid": { label: "Available for hybrid", variant: "primary" },
  "available-onsite": { label: "Available for on-site", variant: "secondary" },
  consulting: { label: "Available for consulting", variant: "secondary" },
  freelance: { label: "Available for freelance / contract", variant: "secondary" },
  mentoring: { label: "Open to mentoring", variant: "secondary" },
  relocatable: { label: "Open to relocation", variant: "secondary" },
};
