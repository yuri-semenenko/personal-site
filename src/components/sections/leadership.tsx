import { cn } from "@/lib/utils";
import { StaggeredItem, StaggeredList } from "@/components/reveal";
import { Section } from "@/components/section";
import type { LeadershipStoryModel } from "@/content/types";

type Props = {
  items: LeadershipStoryModel[];
};

const statusLabels: Record<LeadershipStoryModel["status"], string> = {
  ongoing: "In flight",
  delivered: "Delivered",
};

export function LeadershipSection({ items }: Props) {
  return (
    <Section
      id="leadership"
      eyebrow="03 / Leadership"
      title="Leadership & Engineering Impact"
    >
      <StaggeredList className="grid gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <StaggeredItem
            key={item.title}
            className="flex flex-col rounded-lg border border-border bg-card p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-xs uppercase tracking-wide text-primary">
                {item.organization}
              </p>
              <span
                className={cn(
                  "rounded-md border px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wide",
                  item.status === "ongoing"
                    ? "border-highlight/40 bg-highlight/10 text-highlight"
                    : "border-primary/40 bg-primary/10 text-primary",
                )}
              >
                {statusLabels[item.status]}
              </span>
            </div>
            <h3 className="mt-3 text-lg leading-snug text-foreground">
              {item.title}
            </h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-mono text-[0.6875rem] uppercase tracking-wide text-muted-foreground">
                  Context
                </dt>
                <dd className="mt-1 leading-relaxed text-muted-foreground">
                  {item.context}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.6875rem] uppercase tracking-wide text-muted-foreground">
                  Action
                </dt>
                <dd className="mt-1 leading-relaxed text-muted-foreground">
                  {item.action}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.6875rem] uppercase tracking-wide text-foreground">
                  Outcome
                </dt>
                <dd className="mt-1 leading-relaxed text-foreground">
                  {item.outcome}
                </dd>
              </div>
            </dl>
          </StaggeredItem>
        ))}
      </StaggeredList>
    </Section>
  );
}
