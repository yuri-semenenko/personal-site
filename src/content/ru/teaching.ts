import type { TeachingItemModel } from "../types";

export const teaching: TeachingItemModel[] = [
  {
    organization: "IT-Academy.by",
    role: "Тренер курсов по фронтенд-разработке",
    period: { start: "2017-04", label: "Апр 2017 — Июл 2025" },
    summary:
      "Вёл курсы по фронтенд-разработке, менторил студентов и поддерживал учебное сообщество вокруг HTML, CSS, JavaScript и разработки веб-приложений.",
    stat: { value: "500+", label: "Студентов обучено" },
    courses: ["Веб-разработка на HTML, CSS и JavaScript", "Разработка веб-приложений на JavaScript"],
    responsibilities: [
      "Вёл курсы по фронтенд-разработке.",
      "Создавал инклюзивную и поддерживающую учебную среду.",
      "Менторил студентов на всём пути обучения.",
      "Разрабатывал и обновлял учебные материалы в соответствии с современными фронтенд-практиками.",
      "Вёл Telegram-канал с полезными ссылками и материалами по фронтенду.",
    ],
    achievements: [
      "Обучил и отменторил более 500 студентов.",
      "Помог многим студентам получить позиции в крупных технологических компаниях.",
      "Получал отличные отзывы о качестве преподавания и менторинга.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Фронтенд-разработка", "Менторинг"],
    links: [
      {
        label: "Открыть курс",
        href: "https://www.it-academy.by/course/front-end-developer/",
        external: true,
        ariaLabel: "Открыть страницу курса Front-end Developer на IT-Academy.by",
      },
      {
        label: "Читать отзывы",
        href: "https://www.it-academy.by/review/front-end-developer/",
        external: true,
        ariaLabel: "Читать отзывы студентов о курсе Front-end Developer на IT-Academy.by",
      },
    ],
  },
];
