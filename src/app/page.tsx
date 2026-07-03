import { getContent } from "@/content";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { LeadershipSection } from "@/components/sections/leadership";
// Projects section temporarily hidden — see comment near the JSX usage below.
// import { ProjectsSection } from "@/components/sections/projects";
import { PrinciplesSection } from "@/components/sections/principles";
import { TeachingSection } from "@/components/sections/teaching";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { SkillsSection } from "@/components/sections/skills";
import { CertificationsSection } from "@/components/sections/certifications";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  const {
    profile,
    ui,
    navigation,
    contacts,
    experience,
    leadership,
    // Projects content kept in src/content/en/projects.ts but not rendered;
    // see the commented <ProjectsSection /> below for the reason.
    // projects,
    principles,
    teaching,
    mentoring,
    testimonials,
    skills,
    certifications,
    education,
  } = getContent("en");
  const emailContact = contacts.items.find((item) => item.type === "email");
  const linkedinContact = contacts.items.find((item) => item.type === "linkedin");

  return (
    <div className="min-h-full flex flex-col">
      <Header navigation={navigation} />

      <main className="flex-1">
        <Hero profile={profile} emailContact={emailContact} />
        <AboutSection profile={profile} ui={ui} />
        <ExperienceSection items={experience} ui={ui} />
        <LeadershipSection items={leadership} ui={ui} />
        {/*
          Projects section hidden (2026-05-31).
          After C/R/O rewrite of Experience, the Projects cards largely
          duplicated the same companies, outcomes and tech. Will re-enable
          when there is non-overlapping content to show — OSS, side
          projects, talks, or named platforms outside the employment
          history. Data lives in src/content/en/projects.ts and is still
          exported from the locale aggregator so re-enabling is one line.
        */}
        {/* <ProjectsSection items={projects} ui={ui} /> */}
        <PrinciplesSection items={principles} ui={ui} />
        <TeachingSection items={teaching} mentoring={mentoring} ui={ui} />
        <TestimonialsSection items={testimonials} ui={ui} moreHref={linkedinContact?.href} />
        <SkillsSection groups={skills} ui={ui} />
        <CertificationsSection items={certifications} ui={ui} />
        <EducationSection items={education} ui={ui} />
        <ContactSection contacts={contacts} ui={ui} />
      </main>

      <Footer contacts={contacts.items} logo={navigation.logo} name={profile.name} />
    </div>
  );
}
