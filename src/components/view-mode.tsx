"use client";

import { createContext, useContext, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { Columns3, Rows3 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ViewMode = "vertical" | "horizontal";

export type ViewModeCopy = {
  label: string;
  vertical: string;
  horizontal: string;
  switchToVertical: string;
  switchToHorizontal: string;
};

type ViewModeContextValue = {
  preference: ViewMode;
  effectiveMode: ViewMode;
  isDesktop: boolean;
  setPreference: (mode: ViewMode) => void;
};

const DESKTOP_MEDIA_QUERY = "(min-width: 64rem)";
const STORAGE_KEY = "view-mode";
const STORAGE_CHANGE_EVENT = "view-mode-change";
const ViewModeContext = createContext<ViewModeContextValue | null>(null);

function readStoredPreference(): ViewMode {
  if (typeof window === "undefined") return "vertical";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "horizontal" || stored === "vertical" ? stored : "vertical";
}

function subscribePreference(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(STORAGE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(STORAGE_CHANGE_EVENT, onStoreChange);
  };
}

function getDesktopSnapshot() {
  return window.matchMedia(DESKTOP_MEDIA_QUERY).matches;
}

function subscribeDesktop(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
  mediaQuery.addEventListener("change", onStoreChange);

  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const preference = useSyncExternalStore<ViewMode>(subscribePreference, readStoredPreference, () => "vertical");
  const isDesktop = useSyncExternalStore(subscribeDesktop, getDesktopSnapshot, () => false);

  const setPreference = (mode: ViewMode) => {
    window.localStorage.setItem(STORAGE_KEY, mode);
    window.dispatchEvent(new Event(STORAGE_CHANGE_EVENT));
  };

  const effectiveMode: ViewMode = isDesktop ? preference : "vertical";
  const value = useMemo(
    () => ({ preference, effectiveMode, isDesktop, setPreference }),
    [effectiveMode, isDesktop, preference],
  );

  return (
    <ViewModeContext.Provider value={value}>
      <div data-view-mode={effectiveMode}>{children}</div>
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  const value = useContext(ViewModeContext);
  if (!value) {
    throw new Error("useViewMode must be used within ViewModeProvider");
  }
  return value;
}

export function ViewModeToggle({ copy }: { copy: ViewModeCopy }) {
  const { preference, setPreference } = useViewMode();

  return (
    <div
      className="hidden items-center rounded-md border border-border bg-card p-0.5 text-muted-foreground lg:inline-flex"
      role="group"
      aria-label={copy.label}
    >
      <button
        type="button"
        aria-label={copy.switchToVertical}
        aria-pressed={preference === "vertical"}
        onClick={() => setPreference("vertical")}
        className={cn(
          "inline-flex h-7 w-7 items-center justify-center rounded-[calc(var(--radius-sm)*0.9)] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          preference === "vertical" && "bg-primary text-primary-foreground hover:text-primary-foreground",
        )}
      >
        <Rows3 className="h-3.5 w-3.5" />
        <span className="sr-only">{copy.vertical}</span>
      </button>
      <button
        type="button"
        aria-label={copy.switchToHorizontal}
        aria-pressed={preference === "horizontal"}
        onClick={() => setPreference("horizontal")}
        className={cn(
          "inline-flex h-7 w-7 items-center justify-center rounded-[calc(var(--radius-sm)*0.9)] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          preference === "horizontal" && "bg-primary text-primary-foreground hover:text-primary-foreground",
        )}
      >
        <Columns3 className="h-3.5 w-3.5" />
        <span className="sr-only">{copy.horizontal}</span>
      </button>
    </div>
  );
}
