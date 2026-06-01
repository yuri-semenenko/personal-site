import { ArrowUpRight, GraduationCap, MessagesSquare } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import type { MentoringModel, TeachingItemModel } from "@/content/types";

type Props = {
  items: TeachingItemModel[];
  mentoring?: MentoringModel;
};

export function TeachingSection({ items, mentoring }: Props) {
  return (
    <Section id="teaching" eyebrow="06 / Teaching" title="Teaching & Mentoring">
      <Reveal delay={0.08} className="grid gap-6">
        {items.map((item) => (
          <article key={item.organization} className="overflow-hidden rounded-lg border border-primary/30 bg-card">
            <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
              <div className="flex flex-col justify-center gap-3 border-b border-primary/30 bg-highlight/10 p-6 lg:border-b-0 lg:border-r">
                <GraduationCap className="h-6 w-6 text-highlight" />
                <p className="font-mono text-7xl leading-none text-highlight">500+</p>
                <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">Students trained</p>
              </div>
              <div className="p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{item.period.label}</p>
                <h3 className="mt-2 text-2xl leading-tight text-foreground">{item.organization}</h3>
                <p className="mt-1 font-mono text-sm text-primary">{item.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                {item.achievements.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2 text-sm text-foreground">
                        <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
                {item.courses.length > 0 && (
                  <div className="mt-5">
                    <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">Courses</p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {item.courses.map((course) => (
                        <li
                          key={course}
                          className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.links && item.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        aria-label={link.ariaLabel ?? link.label}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </Reveal>

      {mentoring && (
        <Reveal delay={0.12} className="mt-8">
          <div className="rounded-lg border border-primary/30 bg-primary/4 p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2">
                  <MessagesSquare aria-hidden className="h-5 w-5 text-primary" />
                  <p className="font-mono text-xs uppercase tracking-wide text-primary">{mentoring.platform}</p>
                </div>
                <h3 className="mt-3 text-2xl leading-tight text-foreground">{mentoring.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{mentoring.description}</p>
              </div>
              <a
                href={mentoring.cta.href}
                aria-label={mentoring.cta.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary/20 px-4 py-2.5 font-mono text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:bg-highlight/20 dark:hover:bg-highlight dark:hover:text-secondary-foreground"
              >
                {mentoring.cta.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            {mentoring.topics.length > 0 && (
              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">Topics</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {mentoring.topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Reveal>
      )}
    </Section>
  );
}
