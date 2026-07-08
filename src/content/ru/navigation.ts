import type { NavigationModel } from "../types";

export const navigation: NavigationModel = {
  logo: "<YURI SEMENENKO />",
  items: [
    { label: "Обо мне", href: "#about", sectionId: "about" },
    { label: "Опыт", href: "#experience", sectionId: "experience" },
    { label: "Лидерство", href: "#leadership", sectionId: "leadership" },
    { label: "Преподавание", href: "#teaching", sectionId: "teaching" },
    { label: "Отзывы", href: "#testimonials", sectionId: "testimonials" },
    { label: "Навыки", href: "#skills", sectionId: "skills" },
    { label: "Контакты", href: "#contact", sectionId: "contact" },
  ],
  horizontalItems: [
    { label: "Сертификаты", href: "#certifications", sectionId: "certifications" },
    { label: "Образование", href: "#education", sectionId: "education" },
  ],
  actions: [
    {
      label: "Скачать CV",
      href: "/files/yuri-semenenko-senior-frontend-engineer-cv.pdf",
      external: false,
      ariaLabel: "Скачать CV",
    },
  ],
};
