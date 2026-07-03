import type { Locale, LocaleContent } from "./types";
import { enContent } from "./en";
import { ruContent } from "./ru";

const contentByLocale: Record<Locale, LocaleContent> = {
  en: enContent,
  ru: ruContent,
  pl: enContent,
  be: enContent,
};

export function getContent(locale: Locale = "en"): LocaleContent {
  return contentByLocale[locale] ?? enContent;
}

export type { Locale, LocaleContent };
