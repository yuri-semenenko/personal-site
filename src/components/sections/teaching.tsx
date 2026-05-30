import { GraduationCap } from "lucide-react";
import { Section } from "@/components/section";
import type { TeachingItemModel } from "@/content/types";

type Props = {
  items: TeachingItemModel[];
};

export function TeachingSection({ items }: Props) {
  return (
    <Section
      id="teaching"
      eyebrow="06 / Teaching"
      title="Teaching & Mentoring"
    >
      <div className="grid gap-6">
        {items.map((item) => (
          <article
            key={item.organization}
            className="overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
              <div className="flex flex-col justify-center gap-3 border-b border-border bg-highlight/10 p-6 lg:border-b-0 lg:border-r">
                <GraduationCap className="h-6 w-6 text-highlight" />
                <p className="font-mono text-7xl leading-none text-highlight">
                  500+
                </p>
                <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  Students trained
                </p>
              </div>
              <div className="p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {item.period.label}
                </p>
                <h3 className="mt-2 text-2xl leading-tight text-foreground">
                  {item.organization}
                </h3>
                <p className="mt-1 font-mono text-sm text-primary">
                  {item.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                {item.achievements.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
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
                )}
                {item.courses.length > 0 && (
                  <div className="mt-5">
                    <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                      Courses
                    </p>
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
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
