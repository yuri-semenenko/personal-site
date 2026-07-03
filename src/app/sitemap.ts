import type { MetadataRoute } from "next";
import { SITE_URL, SITE_LAST_MODIFIED } from "@/lib/site";
import { ACTIVE_LOCALES, DEFAULT_LOCALE, localeAlternates, localeUrl } from "@/lib/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    Object.entries(localeAlternates()).map(([hreflang, path]) => [hreflang, new URL(path, SITE_URL).toString()]),
  );

  return ACTIVE_LOCALES.map((locale) => ({
    url: localeUrl(locale),
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: locale === DEFAULT_LOCALE ? 1 : 0.8,
    alternates: { languages },
  }));
}
