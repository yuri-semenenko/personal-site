import { getContent } from "@/content";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { LeadershipSection } from "@/components/sections/leadership";
import { ProjectsSection } from "@/components/sections/projects";
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
    navigation,
    contacts,
    experience,
    leadership,
    projects,
    principles,
    teaching,
    testimonials,
    skills,
    certifications,
    education,
  } = getContent("en");
  const emailContact = contacts.items.find((item) => item.type === "email");

  return (
    <div className="min-h-full flex flex-col">
      <Header navigation={navigation} />

      <main className="flex-1">
        <Hero profile={profile} emailContact={emailContact} />
        <AboutSection profile={profile} />
        <ExperienceSection items={experience} />
        <LeadershipSection items={leadership} />
        <ProjectsSection items={projects} />
        <PrinciplesSection items={principles} />
        <TeachingSection items={teaching} />
        <TestimonialsSection items={testimonials} />
        <SkillsSection groups={skills} />
        <CertificationsSection items={certifications} />
        <EducationSection items={education} />
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
