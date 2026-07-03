import type { ProfileModel } from "../types";

export const profile: ProfileModel = {
  name: "Юрий Семененко",
  headline: "Senior Frontend Engineer, ментор и тренер — с опытом технического лидерства и развития команд",
  jobTitle: "Senior Frontend Engineer",
  location: "Краков, Польша",
  summary:
    "Проектирую и развиваю фронтенд-платформы, помогаю командам безопасно модернизировать legacy-системы и выстраивать инженерные практики. Более 14 лет работаю с FinTech, SaaS, CMS и enterprise-продуктами, сочетая разработку, архитектуру, код-ревью, менторство и развитие инженерных команд.",
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
    "14+ лет коммерческой разработки веб-приложений",
    "Повысил производительность legacy-платформы на Ember.js примерно на 20%",
    "Обучил и отменторил более 500 разработчиков за 8 лет преподавания",
    "Развиваю инженерные практики и Frontend Community в международных командах",
  ],
  codeCard: {
    fileName: "profile.ts",
    role: "Senior Frontend Engineer",
    also: "Ментор и тренер",
    location: "Краков, Польша",
    focus: ["React", "Next.js", "TypeScript", "Architecture", "Performance"],
  },
  cv: {
    label: "Скачать CV",
    ariaLabel: "Скачать резюме Юрия Семененко",
    fileUrl: "/files/yuri-semenenko-senior-frontend-engineer-cv.pdf",
    fileName: "yuri-semenenko-senior-frontend-engineer-cv.pdf",
  },
  cta: {
    contact: "Связаться со мной",
    experience: "Смотреть опыт",
  },
  seo: {
    title: "Юрий Семененко — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer с более чем 14-летним опытом разработки крупных веб-платформ. Специализируюсь на React, Next.js, TypeScript, модернизации legacy-систем, архитектуре фронтенд-приложений, инженерных практиках и техническом лидерстве.",
    keywords: [
      "Юрий Семененко",
      "Yuri Semenenko",
      "Senior Frontend Engineer",
      "Frontend Architect",
      "Tech Lead",
      "React разработчик",
      "Next.js разработчик",
      "TypeScript разработчик",
      "Frontend Engineer",
      "Frontend Mentor",
      "ментор по Frontend",
      "архитектура фронтенда",
      "Краков",
      "Польша",
    ],
  },
};
