import type { MentoringModel } from "../types";

export const mentoring: MentoringModel = {
  title: "Записаться на менторинг",
  description:
    "Открыт к менторинг-сессиям по фронтенд-архитектуре, карьерному росту, техническому лидерству и React/Next.js. Запись через ADPList.",
  platform: "ADPList",
  cta: {
    label: "Записаться на менторинг",
    href: "https://adplist.org/mentors/yuri-semenenko",
    ariaLabel: "Записаться на менторинг-сессию с Юрием Семененко на ADPList",
  },
  topics: [
    "Фронтенд-архитектура",
    "React и Next.js",
    "Карьерный рост",
    "Подготовка к собеседованиям",
    "Техническое лидерство",
    "Код-ревью",
    "Системный дизайн",
    "Developer Experience",
  ],
};
