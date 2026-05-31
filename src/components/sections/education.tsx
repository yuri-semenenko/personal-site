import { StaggeredItem, StaggeredList } from "@/components/reveal";
import { Section } from "@/components/section";
import type { EducationItemModel } from "@/content/types";

type Props = {
  items: EducationItemModel[];
};

export function EducationSection({ items }: Props) {
  return (
    <Section id="education" eyebrow="10 / Education" title="Education">
      <StaggeredList as="ul" className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <StaggeredItem
            as="li"
            key={`${item.institution}-${item.period.start}`}
            className="rounded-lg border border-border bg-card p-5"
          >
            <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              {item.period.label}
            </p>
            <h3 className="mt-2 text-lg leading-tight text-foreground">
              {item.institution}
            </h3>
            {item.faculty && (
              <p className="mt-2 text-sm text-muted-foreground">
                {item.faculty}
              </p>
            )}
            {item.department && (
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {item.department}
              </p>
            )}
          </StaggeredItem>
        ))}
      </StaggeredList>
    </Section>
  );
}
