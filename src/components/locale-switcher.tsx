import { cn } from "@/lib/utils";
import { ACTIVE_LOCALES, localePath } from "@/lib/locales";
import type { Locale, UiModel } from "@/content/types";

type Props = {
  locale: Locale;
  localeSwitcher: UiModel["localeSwitcher"];
};

/**
 * Plain anchors (not next/link): switching locale crosses root layouts, which
 * is a full document load anyway, and MPA navigation keeps the switcher free
 * of client state.
 */
export function LocaleSwitcher({ locale, localeSwitcher }: Props) {
  if (ACTIVE_LOCALES.length < 2) return null;

  return (
    <nav aria-label={localeSwitcher.ariaLabel} className="flex items-center gap-1">
      {ACTIVE_LOCALES.map((target) => {
        const isCurrent = target === locale;
        return (
          <a
            key={target}
            href={localePath(target)}
            aria-current={isCurrent ? "page" : undefined}
            className={cn(
              "rounded-md px-2 py-1 font-mono text-xs uppercase tracking-wide transition-colors",
              isCurrent ? "text-primary" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {localeSwitcher.names[target]}
          </a>
        );
      })}
    </nav>
  );
}
