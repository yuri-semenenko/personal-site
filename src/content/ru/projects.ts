import type { ProjectItemModel } from "../types";

// The Projects section is currently hidden on the page (see [locale]/page.tsx),
// but the module is part of the LocaleContent contract and stays translated.
export const projects: ProjectItemModel[] = [
  {
    title: "Миграция legacy CMS-платформы",
    company: "StoneX",
    summary:
      "Миграция legacy CMS-продукта с Sitecore, нативного JavaScript и Preact на современный стек React и Next.js.",
    role: "Frontend Engineer",
    responsibilities: [
      "Поддерживал и улучшал legacy-фронтенд.",
      "Участвовал в миграции на React, Next.js, Tailwind CSS, Storybook, Uniform.dev и Kontent.ai.",
      "Разрабатывал переиспользуемые компоненты и ревьюил POC.",
      "Участвовал в Scrum-активностях и демо-сессиях.",
    ],
    impact: [
      "Повышена масштабируемость и скорость разработки.",
      "Помог наладить CI/CD на GitHub и Vercel.",
      "Поддерживал стабильность продукта во время миграции.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Storybook",
      "Sitecore CMS",
      "Preact",
      "Uniform.dev",
      "Kontent.ai",
      "GitHub",
      "Vercel",
    ],
    badges: [{ label: "Коммерческий проект" }, { label: "Без публичной ссылки" }],
    featured: true,
  },
  {
    title: "Мультипродуктовый SaaS-фронтенд",
    company: "Synder",
    summary:
      "Фронтенд-разработка в четырёх SaaS-продуктах разной сложности с фокусом на React, Redux, RTK Query, качество кода и консистентность UI.",
    role: "Senior Frontend Engineer",
    responsibilities: [
      "Разрабатывал новые страницы и фронтенд-сервисы.",
      "Работал с продакт-оунерами, бэкенд-разработчиками и дизайнерами.",
      "Участвовал в груминге, планировании спринтов и оценке задач.",
      "Проводил код-ревью.",
      "Улучшил конфигурацию ESLint и предложил направление кастомного UI-кита.",
    ],
    impact: [
      "Повышено качество кодовой базы.",
      "Улучшена консистентность разработки.",
      "Улучшены функциональность и пользовательский опыт.",
    ],
    technologies: ["React", "Redux", "RTK Query", "TypeScript", "ESLint"],
    badges: [{ label: "SaaS" }, { label: "Без публичной ссылки" }],
    featured: true,
  },
  {
    title: "Модернизация core-платформы",
    company: "Monterosa",
    summary:
      "Модернизация и оптимизация производительности core-платформы на legacy Ember.js и современных React-модулях.",
    role: "Frontend Engineer",
    responsibilities: [
      "Разрабатывал и поддерживал удобные пользовательские интерфейсы.",
      "Строил и интегрировал модули на Ember.js и React.js.",
      "Рефакторил legacy-код фронтенда.",
      "Проводил код-ревью и писал тесты.",
    ],
    impact: [
      "Улучшен пользовательский опыт.",
      "Производительность платформы выросла на 20%.",
      "Положительные отзывы пользователей и стейкхолдеров.",
    ],
    technologies: ["Ember.js", "React", "Zustand", "TypeScript", "JavaScript", "CoffeeScript", "SCSS", "Handlebars"],
    badges: [{ label: "Производительность" }, { label: "Рефакторинг legacy" }],
    featured: true,
  },
  {
    title: "Контент-платформа на Drupal / CMS",
    company: "Epam Systems",
    summary:
      "Фронтенд-разработка на CMS: Drupal, компоненты админ-панели, переиспользуемые модули и интеграции CKEditor.",
    role: "Frontend Developer",
    responsibilities: [
      "Разрабатывал ключевые компоненты проекта на Drupal CMF.",
      "Создавал и стилизовал части админ-панели.",
      "Писал модули и адаптировал плагины CKEditor 4.x через CKEditor API.",
      "Создавал переиспользуемые компоненты и кроссбраузерные интерфейсы.",
    ],
    impact: [
      "Повышена удовлетворённость клиентов на CMS-проектах.",
      "Расширены возможности управления контентом.",
      "Участвовал в развитии проектов WebMD и Lundberg Design.",
    ],
    technologies: ["Drupal", "CKEditor API", "HTML", "CSS", "JavaScript"],
    badges: [{ label: "CMS" }, { label: "Коммерческий проект" }],
  },
  {
    title: "E-commerce платформа",
    company: "Belitsoft",
    summary: "Разработка и поддержка фронтенда австралийского интернет-магазина и смежных коммерческих веб-проектов.",
    role: "Frontend Developer",
    responsibilities: [
      "Разрабатывал фронтенд-интерфейсы для сайтов разной сложности.",
      "Поддерживал и развивал австралийский интернет-магазин.",
      "Создавал переиспользуемые компоненты и модули.",
      "Занимался кроссбраузерной вёрсткой.",
    ],
    impact: [
      "Улучшены производительность и удобство использования.",
      "Обеспечена долгосрочная поддержка продукта.",
      "Выполнено множество клиентских фронтенд-задач.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Переиспользуемые компоненты"],
    badges: [{ label: "E-commerce" }, { label: "В архиве" }],
  },
  {
    title: "Образовательная программа по фронтенду",
    company: "IT-Academy.by",
    summary:
      "Образовательная и менторская программа по фронтенду с фокусом на HTML, CSS, JavaScript и разработку веб-приложений.",
    role: "Тренер и ментор по фронтенду",
    responsibilities: [
      "Вёл курсы по фронтенд-разработке.",
      "Менторил студентов на всём пути обучения.",
      "Обновлял учебные материалы в соответствии с современными фронтенд-трендами.",
      "Вёл Telegram-канал с учебными материалами по фронтенду.",
    ],
    impact: [
      "Обучил и отменторил 500+ студентов.",
      "Помог многим студентам найти работу в технологических компаниях.",
      "Построил и поддерживал сообщество изучающих фронтенд.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Менторинг", "Обучение"],
    badges: [{ label: "Преподавание" }, { label: "500+ студентов" }],
    featured: true,
  },
];
