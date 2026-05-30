import { Download, Mail } from "lucide-react";
import { getContent } from "@/content";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { EducationSection } from "@/components/sections/education";
import { ProjectsSection } from "@/components/sections/projects";
import { TeachingSection } from "@/components/sections/teaching";
import { ContactSection } from "@/components/sections/contact";

const statusDotVariants: Record<string, string> = {
  success: "bg-emerald-500",
  primary: "bg-primary",
  secondary: "bg-highlight",
  default: "bg-muted-foreground",
  muted: "bg-muted-foreground",
};

export default function Home() {
  const {
    profile,
    navigation,
    contacts,
    experience,
    skills,
    education,
    projects,
    teaching,
  } = getContent("en");
  const emailContact = contacts.items.find((item) => item.type === "email");

  return (
    <div className="min-h-full flex flex-col">
      <Header navigation={navigation} />

      <main className="flex-1">
        <section
          id="hero"
          className="relative px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24"
        >
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-sm text-muted-foreground">
              {profile.location}
            </p>
            <h1 className="mt-4 text-5xl tracking-tight text-foreground sm:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-muted-foreground sm:text-2xl">
              {profile.headline}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {profile.statuses.map((status) => (
                <span
                  key={status.label}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      statusDotVariants[status.variant ?? "default"],
                    )}
                  />
                  {status.label}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={profile.cv.fileUrl}
                aria-label={`Download ${profile.name}'s CV`}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Download className="h-4 w-4" />
                {profile.cv.label}
              </a>
              {emailContact && (
                <a
                  href={emailContact.href}
                  aria-label={emailContact.ariaLabel}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 font-mono text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Mail className="h-4 w-4" />
                  Contact me
                </a>
              )}
            </div>
          </div>
        </section>

        <AboutSection profile={profile} />
        <ExperienceSection items={experience} />
        <SkillsSection groups={skills} />
        <EducationSection items={education} />
        <ProjectsSection items={projects} />
        <TeachingSection items={teaching} />
        <ContactSection contacts={contacts} />
      </main>

      <Footer
        contacts={contacts.items}
        logo={navigation.logo}
        name={profile.name}
      />
    </div>
  );
}
