"use client";

import { useEffect } from "react";

export function PrintHandler() {
  useEffect(() => {
    const root = document.documentElement;

    const before = () => {
      // Cancel every WAAPI animation on the page BEFORE the browser captures
      // the print layout. CSS !important cannot override WAAPI — animations sit
      // above author !important in the cascade. cancel() removes the effect so
      // CSS (opacity:1 default + [data-printing] rules) takes over immediately.
      document.querySelectorAll<Element>("*").forEach((el) => {
        el.getAnimations().forEach((a) => a.cancel());
      });

      root.dataset.printing = "true";

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
