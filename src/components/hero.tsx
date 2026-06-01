"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { HeroCodeCard } from "@/components/hero-code-card";
import { STATUS_CATALOG } from "@/content/statuses";
import type { ContactItemModel, ProfileModel } from "@/content/types";

const statusDotVariants: Record<string, string> = {
  success: "bg-emerald-500",
  primary: "bg-primary",
  secondary: "bg-highlight",
  default: "bg-muted-foreground",
  muted: "bg-muted-foreground",
};

type Props = {
  profile: ProfileModel;
  emailContact?: ContactItemModel;
};

export function Hero({ profile, emailContact }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;
    const handle = (event: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const nx = (x - rect.width / 2) / rect.width;
        const ny = (y - rect.height / 2) / rect.height;
        el.style.setProperty("--mouse-x", `${x}px`);
        el.style.setProperty("--mouse-y", `${y}px`);
        el.style.setProperty("--mx", nx.toFixed(3));
        el.style.setProperty("--my", ny.toFixed(3));
      });
    };

    const handleLeave = () => {
      cancelAnimationFrame(raf);
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };

    el.addEventListener("pointermove", handle, { passive: true });
    el.addEventListener("pointerleave", handleLeave);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", handle);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="group/hero relative isolate overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_70%_60%_at_50%_40%,#000_30%,transparent_100%)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out"
        style={{
          transform: "translate3d(calc(var(--mx, 0) * -8px), calc(var(--my, 0) * -8px), 0)",
          willChange: "transform",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] bg-size-[28px_28px]" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/hero:opacity-100 motion-reduce:hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, color-mix(in oklch, var(--primary) 80%, transparent) 2px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(180px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #000 10%, rgba(0,0,0,0.45) 45%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(180px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #000 10%, rgba(0,0,0,0.45) 45%, transparent 80%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out sm:h-96 sm:w-96"
        style={{
          transform: "translate3d(calc(var(--mx, 0) * -20px), calc(var(--my, 0) * -20px), 0)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-highlight/10 blur-3xl motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out"
        style={{
          transform: "translate(0, -50%) translate3d(calc(var(--mx, 0) * 24px), calc(var(--my, 0) * 24px), 0)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/hero:opacity-100 motion-reduce:hidden"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in oklch, var(--primary) 14%, transparent), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <p className="font-mono text-sm text-muted-foreground">{profile.location}</p>
            <h1 className="mt-4 text-5xl tracking-tight text-foreground sm:text-6xl lg:text-7xl">{profile.name}</h1>
            <p className="mt-4 max-w-xl text-xl text-muted-foreground sm:text-2xl">{profile.headline}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {profile.statuses
                .filter((s) => s.enabled)
                .map((s) => {
                  const { label, variant } = STATUS_CATALOG[s.key];
                  return (
                    <span
                      key={s.key}
                      className="inline-flex items-center gap-2 rounded-md border border-border bg-card/80 px-3 py-1.5 font-mono text-xs text-foreground backdrop-blur-sm"
                    >
                      <span aria-hidden className={cn("h-1.5 w-1.5 rounded-full", statusDotVariants[variant])} />
                      {label}
                    </span>
                  );
                })}
            </div>

            <div className="no-print mt-10 flex flex-wrap items-center gap-3">
              <a
                href={profile.cv.fileUrl}
                aria-label={`Download ${profile.name}'s CV`}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Download className="h-4 w-4" />
                {profile.cv.label}
              </a>
              {emailContact && (
                <a
                  href={emailContact.href}
                  aria-label={emailContact.ariaLabel}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card/80 px-4 py-2.5 font-mono text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Mail className="h-4 w-4" />
                  Contact me
                </a>
              )}
              <a
                href="#experience"
                className="group inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View experience
                <ArrowRight
                  aria-hidden
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          <HeroCodeCard
            className="lg:justify-self-end"
            name={profile.name}
            role="Senior Frontend Engineer"
            also="Mentor & Trainer"
            location="Krakow, Poland"
            focus={["React", "Next.js", "TypeScript", "Performance"]}
            statuses={profile.statuses.filter((s) => s.enabled).map((s) => STATUS_CATALOG[s.key].label)}
          />
        </div>
      </div>
    </section>
  );
}
