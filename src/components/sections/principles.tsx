import { StaggeredItem, StaggeredList } from "@/components/reveal";
import { Section } from "@/components/section";
import type { PrincipleModel, UiModel } from "@/content/types";

type Props = {
  items: PrincipleModel[];
  ui: UiModel;
};

export function PrinciplesSection({ items, ui }: Props) {
  return (
    <Section id="principles" eyebrow={ui.sections.principles.eyebrow} title={ui.sections.principles.title}>
      <StaggeredList className="grid gap-6 sm:grid-cols-2">
        {items.map((item, index) => (
          <StaggeredItem key={item.title} className="rounded-lg border border-border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-wide text-primary">
              {String(index + 1).padStart(2, "0")} /{" "}
              <span className="text-muted-foreground">{ui.labels.principle}</span>
            </p>
            <h3 className="mt-3 text-lg leading-snug text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </StaggeredItem>
        ))}
      </StaggeredList>
    </Section>
  );
}
