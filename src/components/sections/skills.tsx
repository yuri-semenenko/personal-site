import { ChevronRight } from "lucide-react";
import { Reveal, StaggeredItem, StaggeredList } from "@/components/reveal";
import { Section } from "@/components/section";
import type { SkillGroupModel } from "@/content/types";

type Props = {
  groups: SkillGroupModel[];
};

export function SkillsSection({ groups }: Props) {
  const coreGroup = groups.find((g) => g.emphasis === "core");
  const standardGroups = groups.filter((g) => g.emphasis === "standard");
  const collapsibleGroups = groups.filter((g) => g.emphasis === "muted" && g.collapsible);
  const languagesGroup = groups.find((g) => g.emphasis === "languages");

  return (
    <Section id="skills" eyebrow="08 / Skills" title="Skills & Expertise">
      <div className="space-y-10">
        {coreGroup && (
          <Reveal>
            <div className="rounded-xl border border-primary/30 bg-primary/4 p-6 sm:p-8">
              <h3 className="font-mono text-sm uppercase tracking-wide text-primary">{coreGroup.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {coreGroup.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-sm text-foreground"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        {standardGroups.length > 0 && (
          <StaggeredList className="grid gap-8 sm:grid-cols-2">
            {standardGroups.map((group) => (
              <StaggeredItem key={group.title}>
                <h3 className="font-mono text-sm uppercase tracking-wide text-primary">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </StaggeredItem>
            ))}
          </StaggeredList>
        )}

        {collapsibleGroups.map((group) => (
          <Reveal key={group.title}>
            <details className="group">
              <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-md px-1.5 py-1 -ml-1.5 font-mono text-xs uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
                <ChevronRight
                  aria-hidden
                  className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-open:rotate-90"
                />
                <span className="underline decoration-dotted underline-offset-4 decoration-muted-foreground/40 group-hover:decoration-foreground/60">
                  {group.title}
                </span>
              </summary>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="rounded-md border border-border/60 bg-card/40 px-2.5 py-1 font-mono text-xs text-muted-foreground/70"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </details>
          </Reveal>
        ))}

        {languagesGroup && (
          <Reveal>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-t border-border/60 pt-6">
              <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                {languagesGroup.title}
              </span>
              <p className="text-sm text-muted-foreground">
                {languagesGroup.items.map((skill, index) => (
                  <span key={skill.name}>
                    {index > 0 && (
                      <span aria-hidden className="mx-2 text-muted-foreground/40">
                        ·
                      </span>
                    )}
                    {skill.name}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
