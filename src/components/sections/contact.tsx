import { MapPin, Mail } from "lucide-react";
import type { ComponentType } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
} from "@/components/icons/social";
import { Reveal, StaggeredItem, StaggeredList } from "@/components/reveal";
import { Section } from "@/components/section";
import type { ContactsModel, SocialType } from "@/content/types";

type IconComp = ComponentType<{ className?: string }>;

const iconMap: Record<SocialType, IconComp> = {
  email: Mail,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  telegram: TelegramIcon,
  location: MapPin,
};

type Props = {
  contacts: ContactsModel;
};

export function ContactSection({ contacts }: Props) {
  const visibleItems = contacts.items.filter((item) => item.visible);

  return (
    <Section id="contact" eyebrow="07 / Contact" title={contacts.title}>
      <Reveal delay={0.08}>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          {contacts.description}
        </p>
      </Reveal>
      <StaggeredList as="ul" className="mt-8 grid gap-3 sm:grid-cols-2">
        {visibleItems.map((item) => {
          const Icon = iconMap[item.type];
          const content = (
            <>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </span>
                <span className="truncate text-sm text-foreground transition-colors group-hover:text-primary">
                  {item.value}
                </span>
              </span>
            </>
          );

          if (!item.href) {
            return (
              <StaggeredItem
                as="li"
                key={item.type}
                className="group flex items-center gap-3 rounded-lg border border-border bg-card p-3"
              >
                {content}
              </StaggeredItem>
            );
          }

          return (
            <StaggeredItem as="li" key={item.type}>
              <a
                href={item.href}
                aria-label={item.ariaLabel}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {content}
              </a>
            </StaggeredItem>
          );
        })}
      </StaggeredList>
    </Section>
  );
}
