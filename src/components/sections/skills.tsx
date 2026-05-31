import { cn } from "@/lib/utils";
import { StaggeredItem, StaggeredList } from "@/components/reveal";
import { Section } from "@/components/section";
import type { SkillGroupModel } from "@/content/types";

type Props = {
  groups: SkillGroupModel[];
};

export function SkillsSection({ groups }: Props) {
  return (
    <Section id="skills" eyebrow="08 / Skills" title="Skills & Expertise">
      <StaggeredList className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <StaggeredItem key={group.title}>
            <h3 className="font-mono text-sm uppercase tracking-wide text-primary">
              {group.title}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((skill) => (
                <li
                  key={skill.name}
                  className={cn(
                    "rounded-md border px-2.5 py-1 font-mono text-xs transition-colors",
                    skill.featured
                      ? "border-primary/40 bg-primary/10 text-foreground"
                      : "border-border bg-card text-muted-foreground",
                  )}
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </StaggeredItem>
        ))}
      </StaggeredList>
    </Section>
  );
}
