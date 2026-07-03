"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import type { UiModel } from "@/content/types";

type Props = {
  a11y: Pick<UiModel["a11y"], "switchToLightTheme" | "switchToDarkTheme">;
};

export function ThemeToggle({ a11y }: Props) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? a11y.switchToLightTheme : a11y.switchToDarkTheme}
      suppressHydrationWarning
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-accent hover:text-accent-foreground hover:cursor-pointer"
    >
      <Sun className="h-4 w-4 dark:hidden" />
      <Moon className="hidden h-4 w-4 dark:inline" />
    </button>
  );
}
