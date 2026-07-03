import type { ProfileModel } from "../types";

export const profile: ProfileModel = {
  name: "Юрий Семененко",
  headline: "Senior Frontend Engineer, ментор и тренер — с зоной ответственности техлида",
  jobTitle: "Senior Frontend Engineer",
  location: "Живу в Кракове, Польша",
  summary:
    "Помогаю командам модернизировать фронтенд-платформы, повышать инженерное качество и выпускать масштабируемые React-приложения. Четырнадцать лет в FinTech, SaaS, CMS и enterprise-продуктах — сочетаю практическую разработку с техническим лидерством, менторингом и обучением фронтенду.",
  statuses: [
    { key: "open-to-work", enabled: false },
    { key: "available-remote", enabled: true },
    { key: "open-to-projects", enabled: true },
    { key: "open-to-offers", enabled: false },
    { key: "not-looking", enabled: false },
    { key: "available-hybrid", enabled: false },
    { key: "available-onsite", enabled: false },
    { key: "consulting", enabled: false },
    { key: "freelance", enabled: false },
    { key: "mentoring", enabled: true },
    { key: "relocatable", enabled: false },
  ],
  highlights: [
    "14+ лет разработки production-платформ на React",
    "+20% производительности после рефакторинга legacy Ember.js в Monterosa",
    "500+ студентов за 8 лет преподавания в IT Academy",
    "Рекомендации от CTO и инженерных лидов",
  ],
  codeCard: {
    fileName: "profile.ts",
    role: "Senior Frontend Engineer",
    also: "Ментор и тренер",
    location: "Краков, Польша",
    focus: ["React", "Next.js", "TypeScript", "Performance"],
  },
  cv: {
    label: "Скачать CV",
    ariaLabel: "Скачать CV Юрия Семененко",
    fileUrl: "/files/yuri-semenenko-senior-frontend-engineer-cv.pdf",
    fileName: "yuri-semenenko-senior-frontend-engineer-cv.pdf",
  },
  cta: {
    contact: "Связаться со мной",
    experience: "Смотреть опыт",
  },
  seo: {
    title: "Юрий Семененко — Senior Frontend Engineer и Tech Lead",
    description:
      "Senior Frontend Engineer с зоной ответственности техлида, Краков. Строю масштабируемые платформы на React и Next.js, повышаю инженерное качество, с 2017 года отменторил 500+ разработчиков.",
    keywords: [
      "Юрий Семененко",
      "Yuri Semenenko",
      "Senior Frontend Engineer",
      "Tech Lead",
      "фронтенд-архитектор",
      "React разработчик",
      "Next.js разработчик",
      "TypeScript разработчик",
      "фронтенд-ментор",
      "фронтенд-консультант",
      "Краков",
    ],
  },
};
