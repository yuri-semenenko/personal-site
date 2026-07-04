import { Quote } from "lucide-react";
import { StaggeredItem, StaggeredList } from "@/components/reveal";
import { Section } from "@/components/section";
import type { TestimonialModel, UiModel } from "@/content/types";

type Props = {
  items: TestimonialModel[];
  ui: UiModel;
  /** Sourced from contacts so the URL is not duplicated; the note is hidden without it. */
  moreHref?: string;
};

export function TestimonialsSection({ items, ui, moreHref }: Props) {
  return (
    <Section id="testimonials" eyebrow={ui.sections.testimonials.eyebrow} title={ui.sections.testimonials.title}>
      <StaggeredList className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <StaggeredItem
            key={`${item.author}-${item.date}`}
            className="flex flex-col justify-evenly rounded-lg border border-border bg-card p-6"
          >
            <Quote aria-hidden className="h-5 w-5 shrink-0 text-primary/60" />
            <blockquote className="mt-3 text-sm leading-relaxed text-foreground mb-auto">{item.quote}</blockquote>
            <footer className="mt-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 border-t border-border/60 pt-4">
              <div>
                <p className="text-sm text-foreground">{item.author}</p>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">{item.role}</p>
              </div>
              <span className="shrink-0 rounded-md border border-border px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wide text-muted-foreground">
                {item.relationshipLabel}
              </span>
            </footer>
          </StaggeredItem>
        ))}
      </StaggeredList>
      {moreHref && (
        <p className="mt-8 text-center font-mono text-xs text-muted-foreground">
          {ui.testimonialsNote.prefix}{" "}
          <a
            href={moreHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {ui.testimonialsNote.linkLabel}
          </a>
          {ui.testimonialsNote.suffix}
        </p>
      )}
    </Section>
  );
}
