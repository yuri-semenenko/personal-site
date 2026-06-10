/**
 * Canonical production origin. Single source of truth for every place that
 * needs the absolute site URL: metadata (`metadataBase`, canonical, OG),
 * JSON-LD, sitemap, robots, and the OG image footer. Changing the domain
 * (Phase 2) happens here, once.
 */
export const SITE_URL = "https://yuri-semenenko.dev";

/** Bare host (no scheme), e.g. for display labels. */
export const SITE_HOST = new URL(SITE_URL).host;
