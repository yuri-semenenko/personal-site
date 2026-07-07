"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function ScrollProgress() {
  const progress = useMotionValue(0);
  const scaleX = useSpring(progress, {
    stiffness: 160,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    let horizontalMain: HTMLElement | null = null;

    const update = () => {
      horizontalMain = document.querySelector<HTMLElement>('main[data-view-mode-main="horizontal"]');

      if (horizontalMain) {
        const maxScrollLeft = horizontalMain.scrollWidth - horizontalMain.clientWidth;
        progress.set(maxScrollLeft > 0 ? horizontalMain.scrollLeft / maxScrollLeft : 0);
        return;
      }

      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      progress.set(maxScrollTop > 0 ? window.scrollY / maxScrollTop : 0);
    };

    const bindHorizontalMain = () => {
      horizontalMain?.removeEventListener("scroll", update);
      horizontalMain = document.querySelector<HTMLElement>('main[data-view-mode-main="horizontal"]');
      horizontalMain?.addEventListener("scroll", update, { passive: true });
      update();
    };

    const observer = new MutationObserver(bindHorizontalMain);
    observer.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ["data-view-mode-main"],
    });

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", bindHorizontalMain);
    bindHorizontalMain();

    return () => {
      observer.disconnect();
      horizontalMain?.removeEventListener("scroll", update);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", bindHorizontalMain);
    };
  }, [progress]);

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-0.75 origin-left bg-linear-to-r from-primary to-highlight"
    />
  );
}
