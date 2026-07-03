import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import type { ProfileModel, UiModel } from "@/content/types";

type Props = {
  profile: ProfileModel;
  ui: UiModel;
};

export function AboutSection({ profile, ui }: Props) {
  return (
    <Section id="about" eyebrow={ui.sections.about.eyebrow} title={ui.sections.about.title}>
      <Reveal delay={0.08} className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{profile.summary}</p>
        {profile.highlights.length > 0 && (
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-wide text-primary">{ui.labels.highlights}</p>
            <ul className="mt-3 space-y-2">
              {profile.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm text-foreground">
                  <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-highlight" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Reveal>
    </Section>
  );
}
