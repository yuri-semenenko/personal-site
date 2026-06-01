"use client";

import { useEffect } from "react";

export function PrintHandler() {
  useEffect(() => {
    const el = document.documentElement;
    const before = () => {
      el.dataset.printing = "true";
    };
    const after = () => {
      delete el.dataset.printing;
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
