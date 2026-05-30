import type { Locale, LocaleContent } from "./types";
import { enContent } from "./en";

const contentByLocale: Record<Locale, LocaleContent> = {
  en: enContent,
  ru: enContent,
  pl: enContent,
  by: enContent,
};

export function getContent(locale: Locale = "en"): LocaleContent {
  return contentByLocale[locale] ?? enContent;
}

export type { Locale, LocaleContent };
