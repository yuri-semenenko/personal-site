import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { StaggeredItem, StaggeredList } from "@/components/reveal";
import { Section } from "@/components/section";
import type { CertificationModel } from "@/content/types";

type Props = {
  items: CertificationModel[];
};

export function CertificationsSection({ items }: Props) {
  return (
    <Section id="certifications" eyebrow="09 / Certifications" title="Certifications">
      <StaggeredList className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <StaggeredItem
            key={`${item.title}-${item.issued}`}
            className="flex flex-col rounded-lg border border-border bg-card p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <ShieldCheck aria-hidden className="h-5 w-5 shrink-0 text-primary" />
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                {item.issuedLabel}
                {item.expiresLabel ? ` — ${item.expiresLabel}` : ""}
              </p>
            </div>
            <h3 className="mt-3 text-base leading-snug text-foreground">{item.title}</h3>
            <p className="mt-1 font-mono text-xs text-primary">{item.issuer}</p>
            {item.skills && item.skills.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {item.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-[0.6875rem] text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            )}
            {item.credentialUrl && (
              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${item.title} credential`}
                className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View credential
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
          </StaggeredItem>
        ))}
      </StaggeredList>
    </Section>
  );
}
