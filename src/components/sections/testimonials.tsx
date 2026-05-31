import { Quote } from "lucide-react";
import { StaggeredItem, StaggeredList } from "@/components/reveal";
import { Section } from "@/components/section";
import type { TestimonialModel } from "@/content/types";

type Props = {
  items: TestimonialModel[];
};

export function TestimonialsSection({ items }: Props) {
  return (
    <Section
      id="testimonials"
      eyebrow="07 / Testimonials"
      title="What People Say"
    >
      <StaggeredList className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <StaggeredItem
            key={`${item.author}-${item.date}`}
            className="flex flex-col rounded-lg border border-border bg-card p-6"
          >
            <Quote
              aria-hidden
              className="h-5 w-5 shrink-0 text-primary/60"
            />
            <blockquote className="mt-3 text-sm leading-relaxed text-foreground">
              {item.quote}
            </blockquote>
            <footer className="mt-5 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
              <div>
                <p className="text-sm text-foreground">{item.author}</p>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                  {item.role}
                </p>
              </div>
              <span className="shrink-0 rounded-md border border-border px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wide text-muted-foreground">
                {item.relationshipLabel}
              </span>
            </footer>
          </StaggeredItem>
        ))}
      </StaggeredList>
      <p className="mt-8 text-center font-mono text-xs text-muted-foreground">
        More recommendations available on{" "}
        <a
          href="https://www.linkedin.com/in/yuri-semenenko/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          LinkedIn
        </a>
        .
      </p>
    </Section>
  );
}
