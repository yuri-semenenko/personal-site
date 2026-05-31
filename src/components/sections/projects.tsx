import { cn } from "@/lib/utils";
import { StaggeredItem, StaggeredList } from "@/components/reveal";
import { Section } from "@/components/section";
import type { ProjectItemModel } from "@/content/types";

type Props = {
  items: ProjectItemModel[];
};

export function ProjectsSection({ items }: Props) {
  return (
    <Section id="projects" eyebrow="04 / Projects" title="Projects">
      <StaggeredList as="ul" className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <StaggeredItem
            as="li"
            key={`${item.title}-${item.company ?? "x"}`}
            className={cn(
              "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-colors",
              item.featured
                ? "border-primary/30"
                : "border-border hover:border-primary/30",
            )}
          >
            <div>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <h3 className="text-lg leading-tight text-foreground">
                  {item.title}
                </h3>
                {item.company && (
                  <span className="font-mono text-xs text-muted-foreground">
                    · {item.company}
                  </span>
                )}
              </div>
              <p className="mt-1 font-mono text-xs text-primary">{item.role}</p>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.summary}
            </p>

            {item.impact.length > 0 && (
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-foreground">
                  Impact
                </p>
                <ul className="mt-2 space-y-1">
                  {item.impact.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                      />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.technologies.length > 0 && (
              <ul className="flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-[0.6875rem] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}

            {item.badges && item.badges.length > 0 && (
              <ul className="mt-auto flex flex-wrap gap-1.5 border-t border-border/50 pt-3">
                {item.badges.map((badge) => (
                  <li
                    key={badge.label}
                    className="font-mono text-[0.625rem] uppercase tracking-wider text-muted-foreground"
                  >
                    {badge.label}
                  </li>
                ))}
              </ul>
            )}
          </StaggeredItem>
        ))}
      </StaggeredList>
    </Section>
  );
}
