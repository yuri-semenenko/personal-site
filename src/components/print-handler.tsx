"use client";

import { useEffect } from "react";

const PRINT_WRAP_ATTR = "data-print-wrap";

export function PrintHandler() {
  useEffect(() => {
    const root = document.documentElement;

    const before = () => {
      // Finish every WAAPI animation — CSS !important cannot override them
      // (animations sit above author !important in the cascade). finish()
      // jumps to the end state so Reveals stay visible if print is cancelled;
      // cancel() would revert to Motion's initial opacity:0.
      // finish() throws InvalidStateError on infinite animations, so isolate
      // each call — one looping animation must not abort the rest of prep.
      document.getAnimations().forEach((a) => {
        try {
          a.finish();
        } catch {
          // Infinite/uncommitted animation — nothing to jump to; skip it.
        }
      });

      root.dataset.printing = "true";

      // Force-open all collapsed <details> — CSS display:block alone doesn't
      // work in Chrome 131+ which uses ::details-content to hide content.
      document.querySelectorAll("details:not([open])").forEach((el) => {
        el.setAttribute("open", "");
        el.setAttribute("data-print-opened", "");
      });

      // Wrap each section's heading + first content block into a single box
      // with break-inside:avoid. Chromium honors break-after/before:avoid on
      // siblings unreliably; merging both nodes into one atomic block forces
      // them onto the same page. Scoped to the explicit [data-print-section]
      // marker (set by <Section>) rather than a structural "section > div"
      // selector, so hand-rolled sections like the hero are not mangled.
      document.querySelectorAll<HTMLElement>("[data-print-section]").forEach((sectionDiv) => {
        // Skip if a prior beforeprint without an intervening afterprint already
        // wrapped this section — re-wrapping would nest wrappers and corrupt the
        // afterprint restore. The wrapper is always inserted as the first child.
        if ((sectionDiv.firstElementChild as HTMLElement | null)?.hasAttribute(PRINT_WRAP_ATTR)) return;

        const heading = sectionDiv.firstElementChild as HTMLElement | null;
        const firstContent = heading?.nextElementSibling as HTMLElement | null;
        if (!heading || !firstContent) return;

        const wrapper = document.createElement("div");
        wrapper.style.breakInside = "avoid";
        wrapper.setAttribute(PRINT_WRAP_ATTR, "");
        sectionDiv.insertBefore(wrapper, heading);
        wrapper.appendChild(heading);
        wrapper.appendChild(firstContent);
      });
    };

    const after = () => {
      delete root.dataset.printing;

      document.querySelectorAll("details[data-print-opened]").forEach((el) => {
        el.removeAttribute("open");
        el.removeAttribute("data-print-opened");
      });

      document.querySelectorAll<HTMLElement>(`[${PRINT_WRAP_ATTR}]`).forEach((wrapper) => {
        const parent = wrapper.parentNode;
        if (!parent) return;
        while (wrapper.firstChild) {
          parent.insertBefore(wrapper.firstChild, wrapper);
        }
        wrapper.remove();
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
