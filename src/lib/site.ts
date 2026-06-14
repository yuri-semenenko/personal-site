/**
 * Canonical production origin. Single source of truth for every place that
 * needs the absolute site URL: metadata (`metadataBase`, canonical, OG),
 * JSON-LD, sitemap, robots, and the OG image footer. Changing the domain
 * (Phase 2) happens here, once.
 */
export const SITE_URL = "https://yuri-semenenko.dev";

/** Bare host (no scheme), e.g. for display labels. */
export const SITE_HOST = new URL(SITE_URL).host;

/**
 * Stable last-modified date for sitemap freshness. Hardcoded rather than
 * `new Date()` so a build doesn't report the page as freshly changed on every
 * deploy — that churns `lastModified` and dilutes the signal to crawlers. Bump
 * this (YYYY-MM-DD) when content changes in a way worth re-crawling.
 */
export const SITE_LAST_MODIFIED = "2026-06-14";
