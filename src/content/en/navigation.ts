import type { NavigationModel } from "../types";

export const navigation: NavigationModel = {
  logo: "<YURI SEMENENKO />",
  items: [
    { label: "About", href: "#about", sectionId: "about" },
    { label: "Experience", href: "#experience", sectionId: "experience" },
    { label: "Skills", href: "#skills", sectionId: "skills" },
    { label: "Education", href: "#education", sectionId: "education" },
    { label: "Projects", href: "#projects", sectionId: "projects" },
    { label: "Teaching", href: "#teaching", sectionId: "teaching" },
    { label: "Contact", href: "#contact", sectionId: "contact" },
  ],
  actions: [
    {
      label: "Download CV",
      href: "/files/yuri-semenenko-senior-frontend-engineer-cv.pdf",
      external: false,
      ariaLabel: "Download Yuri Semenenko CV",
    },
  ],
};
