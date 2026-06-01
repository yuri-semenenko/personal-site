"use client";

import { useEffect } from "react";

export function PrintHandler() {
  useEffect(() => {
    const root = document.documentElement;

    const before = () => {
      root.dataset.printing = "true";
      // CSS alone can't force-open <details> in Chrome 131+ (content hidden
      // via ::details-content internal pseudo, not display:none on children).
      // Adding the open attribute is the only cross-browser reliable approach.
      document.querySelectorAll("details:not([open])").forEach((el) => {
        el.setAttribute("open", "");
        el.setAttribute("data-print-opened", "");
      });
    };

    const after = () => {
      delete root.dataset.printing;
      document.querySelectorAll("details[data-print-opened]").forEach((el) => {
        el.removeAttribute("open");
        el.removeAttribute("data-print-opened");
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
