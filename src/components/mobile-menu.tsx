"use client";

import { useEffect, useState } from "react";
import { Download, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetClose, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { NavigationModel, UiModel } from "@/content/types";

const TAILWIND_LG_BREAKPOINT = "64rem";
const DESKTOP_MEDIA_QUERY = `(min-width: ${TAILWIND_LG_BREAKPOINT})`;

type Props = {
  navigation: NavigationModel;
  a11y: Pick<UiModel["a11y"], "openMenu" | "mobileNav">;
  className?: string;
};

export function MobileMenu({ navigation, a11y, className }: Props) {
  const [open, setOpen] = useState(false);
  const downloadAction = navigation.actions[0];

  useEffect(() => {
    if (!open) return;

    const desktopQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const animationFrameId = window.requestAnimationFrame(() => {
      if (desktopQuery.matches) setOpen(false);
    });

    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
        aria-label={a11y.openMenu}
      >
        <Menu className="h-4 w-4" />
      </SheetTrigger>
      <SheetContent side="right" className="w-72 border-l-border bg-card">
        <SheetHeader>
          <SheetTitle className="font-mono">{navigation.logo}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4" aria-label={a11y.mobileNav}>
          {navigation.items.map((item) => (
            <SheetClose
              key={item.href}
              render={
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 font-mono text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {item.label}
                </a>
              }
            />
          ))}
        </nav>
        {downloadAction && (
          <div className="mt-auto p-4">
            <SheetClose
              render={
                <a
                  href={downloadAction.href}
                  aria-label={downloadAction.ariaLabel}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Download className="h-4 w-4" />
                  {downloadAction.label}
                </a>
              }
            />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
