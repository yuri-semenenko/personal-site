"use client";

import { useMemo, useState } from "react";
import { Download } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import { LocaleSwitcher } from "@/components/locale-switcher";
import type { Locale, NavigationModel, UiModel } from "@/content/types";

type Props = {
  navigation: NavigationModel;
  a11y: UiModel["a11y"];
  locale: Locale;
  localeSwitcher: UiModel["localeSwitcher"];
};

export function Header({ navigation, a11y, locale, localeSwitcher }: Props) {
  const sectionIds = useMemo(
    () => navigation.items.map((item) => item.sectionId).filter((id): id is string => Boolean(id)),
    [navigation.items],
  );

  const activeId = useActiveSection(sectionIds);
  const downloadAction = navigation.actions[0];
  const [previewId, setPreviewId] = useState<string | undefined>();
  const indicatorId = previewId ?? activeId;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div data-slot="header-top-row" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-mono text-sm font-medium text-foreground transition-colors hover:text-primary">
          {navigation.logo}
        </a>

        <div className="flex items-center gap-2 whitespace-nowrap">
          {downloadAction && (
            <a
              href={downloadAction.href}
              aria-label={downloadAction.ariaLabel}
              className="hidden items-center gap-2 rounded-md bg-primary px-3 py-2 font-mono text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5" />
              {downloadAction.label}
            </a>
          )}
          <LocaleSwitcher locale={locale} localeSwitcher={localeSwitcher} />
          <ThemeToggle a11y={a11y} />
          <MobileMenu navigation={navigation} a11y={a11y} className="lg:hidden" />
        </div>
      </div>

      <div data-slot="header-navigation-row" className="hidden border-t border-border/70 bg-background/35 lg:block">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav
            className="flex h-11 items-center justify-center gap-4 2xl:gap-8"
            aria-label={a11y.primaryNav}
            onPointerLeave={() => setPreviewId(undefined)}
          >
            {navigation.items.map((item) => {
              const isActive = activeId === item.sectionId;
              const isHighlighted = indicatorId === item.sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onFocus={() => setPreviewId(item.sectionId)}
                  onBlur={() => setPreviewId(undefined)}
                  onPointerEnter={() => setPreviewId(item.sectionId)}
                  className={cn(
                    "relative font-mono text-xs uppercase tracking-wide transition-colors whitespace-nowrap",
                    isActive || isHighlighted ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isHighlighted && (
                    <motion.span
                      aria-hidden
                      data-slot="primary-nav-indicator"
                      layoutId="primary-nav-indicator"
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute -bottom-1 left-0 h-px w-full bg-primary"
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
