"use client";

import { useMemo } from "react";
import { Download } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import type { NavigationModel } from "@/content/types";

type Props = {
  navigation: NavigationModel;
};

export function Header({ navigation }: Props) {
  const sectionIds = useMemo(
    () =>
      navigation.items
        .map((item) => item.sectionId)
        .filter((id): id is string => Boolean(id)),
    [navigation.items],
  );

  const activeId = useActiveSection(sectionIds);
  const downloadAction = navigation.actions[0];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#"
          className="font-mono text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          {navigation.logo}
        </a>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary"
        >
          {navigation.items.map((item) => {
            const isActive = activeId === item.sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative font-mono text-xs uppercase tracking-wide transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-current={isActive ? "true" : undefined}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-px w-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
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
          <ThemeToggle />
          <MobileMenu navigation={navigation} className="md:hidden" />
        </div>
      </div>
    </header>
  );
}
