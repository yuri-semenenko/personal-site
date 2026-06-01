"use client";

import { useEffect } from "react";

export function PrintHandler() {
  useEffect(() => {
    const root = document.documentElement;

    const before = () => {
      // Cancel every WAAPI animation — CSS !important cannot override them
      // (animations sit above author !important in the cascade).
      document.querySelectorAll<Element>("*").forEach((el) => {
        el.getAnimations().forEach((a) => a.cancel());
      });

      root.dataset.printing = "true";

      // Force-open all collapsed <details> — CSS display:block alone doesn't
      // work in Chrome 131+ which uses ::details-content to hide content.
      document.querySelectorAll("details:not([open])").forEach((el) => {
        el.setAttribute("open", "");
        el.setAttribute("data-print-opened", "");
      });

      // Double-constrain heading→content page breaks via inline styles.
      // Inline styles have higher specificity than any stylesheet rule, so
      // this is the last resort when CSS break-after/before is ignored.
      document.querySelectorAll<HTMLElement>("section > div > *:first-child").forEach((heading) => {
        heading.style.breakAfter = "avoid";
        heading.style.pageBreakAfter = "avoid";
        const content = heading.nextElementSibling as HTMLElement | null;
        if (content) {
          content.style.breakBefore = "avoid";
          content.style.pageBreakBefore = "avoid";
        }
      });
    };

    const after = () => {
      delete root.dataset.printing;

      document.querySelectorAll("details[data-print-opened]").forEach((el) => {
        el.removeAttribute("open");
        el.removeAttribute("data-print-opened");
      });

      // Clean up inline break styles
      document.querySelectorAll<HTMLElement>("section > div > *:first-child").forEach((heading) => {
        heading.style.breakAfter = "";
        heading.style.pageBreakAfter = "";
        const content = heading.nextElementSibling as HTMLElement | null;
        if (content) {
          content.style.breakBefore = "";
          content.style.pageBreakBefore = "";
        }
      });
    };

    window.addEventListener("beforeprint", before);
    window.addEventListener("afterprint", after);
    return () => {
      window.removeEventListener("beforeprint", before);
      window.removeEventListener("afterprint", after);
    };
  }, []);
  return null;
}
