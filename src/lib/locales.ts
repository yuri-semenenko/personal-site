// Relative imports (not "@/") so Playwright specs can consume this module
// without depending on tsconfig path-alias resolution.
import type { Locale } from "../content/types";
import { SITE_URL } from "./site";

/**
 * Locales with published translations. Drives `generateStaticParams`,
 * hreflang alternates, the sitemap, and the header locale switcher.
 * Adding a locale here (plus its `src/content/{locale}/` modules) is the
 * whole rollout switch — see docs/ARCHITECTURE.md "Localization".
 */
export const ACTIVE_LOCALES: Locale[] = ["en", "ru"];

/** English is canonical and served unprefixed at `/` (rewrite in next.config.ts). */
export const DEFAULT_LOCALE: Locale = "en";

export function isActiveLocale(value: string): value is Locale {
  return (ACTIVE_LOCALES as string[]).includes(value);
}

/** Root-relative path for a locale: `/` for the default, `/{locale}` otherwise. */
export function localePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
}

/** Absolute URL for a locale's landing page. */
export function localeUrl(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? SITE_URL : `${SITE_URL}/${locale}`;
}

/**
 * hreflang map over active locales plus `x-default` (both point the default
 * locale at the unprefixed root). Values are root-relative; metadata resolves
 * them against `metadataBase`, the sitemap prefixes `SITE_URL` itself.
 */
export function localeAlternates(): Record<string, string> {
  return Object.fromEntries([
    ...ACTIVE_LOCALES.map((locale) => [locale, localePath(locale)]),
    ["x-default", localePath(DEFAULT_LOCALE)],
  ]);
}

/** schema.org / Open Graph locale codes (og:locale). */
export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
  pl: "pl_PL",
  be: "be_BY",
};
