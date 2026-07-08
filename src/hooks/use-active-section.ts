"use client";

import { useEffect, useState } from "react";
import type { ViewMode } from "@/components/view-mode";

export function useActiveSection(sectionIds: readonly string[], mode: ViewMode = "vertical") {
  const [activeId, setActiveId] = useState<string | undefined>(sectionIds[0]);

  useEffect(() => {
    if (typeof window === "undefined" || sectionIds.length === 0) return;

    if (mode === "horizontal") {
      const main = document.querySelector<HTMLElement>('main[data-view-mode-main="horizontal"]');
      if (!main) return;

      let frame = 0;
      const update = () => {
        const viewportCenter = main.scrollLeft + main.clientWidth / 2;
        let bestId: string | undefined;
        let bestDistance = Number.POSITIVE_INFINITY;

        for (const id of sectionIds) {
          const panel = document.getElementById(id)?.closest("[data-view-mode-panel]");
          if (!(panel instanceof HTMLElement)) continue;

          const panelCenter = panel.offsetLeft + panel.offsetWidth / 2;
          const distance = Math.abs(panelCenter - viewportCenter);
          if (distance < bestDistance) {
            bestDistance = distance;
            bestId = id;
          }
        }

        if (bestId) setActiveId(bestId);
      };

      const scheduleUpdate = () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(update);
      };

      main.addEventListener("scroll", scheduleUpdate, { passive: true });
      window.addEventListener("resize", scheduleUpdate);
      update();

      return () => {
        cancelAnimationFrame(frame);
        main.removeEventListener("scroll", scheduleUpdate);
        window.removeEventListener("resize", scheduleUpdate);
      };
    }

    // Track the latest ratio for every observed section across callbacks.
    // IntersectionObserver only reports the entries that changed in a given
    // tick, so picking the max within a single callback batch can miss the
    // section that actually dominates the viewport (and leaves the active id
    // stale on fast scrolls). Resolving over the full map fixes that.
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let bestId: string | undefined;
        let bestRatio = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestId) {
          setActiveId(bestId);
        }
      },
      {
        rootMargin: "-25% 0% -65% 0%",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    const elements = sectionIds.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [mode, sectionIds]);

  return activeId;
}
