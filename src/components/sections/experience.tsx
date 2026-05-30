import { cn } from "@/lib/utils";
import { Section } from "@/components/section";
import type { ExperienceItemModel } from "@/content/types";

type Props = {
  items: ExperienceItemModel[];
};

export function ExperienceSection({ items }: Props) {
  return (
    <Section id="experience" eyebrow="02 / Experience" title="Experience">
      <ol className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
        {items.map((item, index) => (
          <li key={`${item.company}-${item.period.start}`} className="relative">
            <span
              aria-hidden
              className={cn(
                "absolute -left-[calc(2rem+0.375rem)] top-2 h-3 w-3 rounded-full border-2 sm:-left-[calc(2.5rem+0.375rem)]",
                item.featured
                  ? "border-primary bg-background"
                  : "border-border bg-card",
              )}
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl text-foreground">{item.company}</h3>
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                {item.period.label}
              </p>
            </div>
            <p className="mt-1 font-mono text-sm text-primary">{item.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.summary}
            </p>

            {item.achievements.length > 0 && (
              <div className="mt-4">
                <p className="font-mono text-xs uppercase tracking-wide text-foreground">
                  Achievements
                </p>
                <ul className="mt-2 space-y-1.5">
                  {item.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.responsibilities.length > 0 && (
              <details className="mt-3 group" {...(index === 0 ? { open: true } : {})}>
                <summary className="cursor-pointer font-mono text-xs uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground">
                  Responsibilities
                  <span className="ml-2 inline-block transition-transform group-open:rotate-180">▾</span>
                </summary>
                <ul className="mt-2 space-y-1.5">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50"
                      />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </details>
            )}

            {item.technologies.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-card px-2 py-0.5 font-mono text-[0.6875rem] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
