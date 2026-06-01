"use client";

import { Download, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetClose, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { NavigationModel } from "@/content/types";

type Props = {
  navigation: NavigationModel;
  className?: string;
};

export function MobileMenu({ navigation, className }: Props) {
  const downloadAction = navigation.actions[0];

  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
        aria-label="Open menu"
      >
        <Menu className="h-4 w-4" />
      </SheetTrigger>
      <SheetContent side="right" className="w-72 border-l-border bg-card">
        <SheetHeader>
          <SheetTitle className="font-mono">{navigation.logo}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
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
