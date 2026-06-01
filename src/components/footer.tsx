import { Mail } from "lucide-react";
import type { ComponentType } from "react";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/icons/social";
import type { ContactItemModel, SocialType } from "@/content/types";

type IconComp = ComponentType<{ className?: string }>;

const iconMap: Partial<Record<SocialType, IconComp>> = {
  email: Mail,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  telegram: TelegramIcon,
};

type Props = {
  contacts: ContactItemModel[];
  logo: string;
  name: string;
};

export function Footer({ contacts, logo, name }: Props) {
  const socialItems = contacts.filter((item) => item.href && iconMap[item.type] && item.visible);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6">
        <span className="font-mono text-xs text-muted-foreground">{logo}</span>
        <div className="flex items-center gap-3">
          {socialItems.map((item) => {
            const Icon = iconMap[item.type]!;
            return (
              <a
                key={item.type}
                href={item.href}
                aria-label={item.ariaLabel}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {name}
        </p>
      </div>
    </footer>
  );
}
