import { getContent } from "@/content";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { EducationSection } from "@/components/sections/education";
import { ProjectsSection } from "@/components/sections/projects";
import { TeachingSection } from "@/components/sections/teaching";
import { ContactSection } from "@/components/sections/contact";

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
        <Hero profile={profile} emailContact={emailContact} />
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
