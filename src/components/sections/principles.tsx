import { StaggeredItem, StaggeredList } from "@/components/reveal";
import { Section } from "@/components/section";
import type { PrincipleModel } from "@/content/types";

type Props = {
  items: PrincipleModel[];
};

export function PrinciplesSection({ items }: Props) {
  return (
    <Section id="principles" eyebrow="05 / Principles" title="How I Build Software">
      <StaggeredList className="grid gap-6 sm:grid-cols-2">
        {items.map((item, index) => (
          <StaggeredItem key={item.title} className="rounded-lg border border-border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-wide text-primary">
              {String(index + 1).padStart(2, "0")} / <span className="text-muted-foreground">Principle</span>
            </p>
            <h3 className="mt-3 text-lg leading-snug text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </StaggeredItem>
        ))}
      </StaggeredList>
    </Section>
  );
}
