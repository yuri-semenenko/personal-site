# ТЗ v1.0: Personal CV / Portfolio Website — Yuri Semenenko

## 1. Цель проекта

Разработать персональный CV/portfolio-сайт для **Yuri Semenenko** — **Senior Frontend Engineer & Mentor and Trainer**, базирующегося в **Krakow, Poland**.

Основные цели проекта:

1. Усилить личный бренд frontend-инженера senior-уровня.
2. Упростить поиск работы и коммуникацию с рекрутерами.
3. Представить опыт, стек, проекты, образование и преподавательскую деятельность.
4. Дать возможность скачать CV в PDF.
5. Создать сайт, который визуально демонстрирует высокий frontend-уровень: аккуратный UI, адаптивность, анимации, производительность, качественная архитектура.

Референс: `https://guilhermebasto.com/en`.

Сайт должен быть близок к референсу по структуре, но выглядеть более живым, современным и оригинальным.

---

# 2. Функциональные требования

## 2.1. Формат сайта

Сайт реализуется в гибридном формате:

- основная страница — landing/CV page с секциями;
- навигация по секциям через якоря;
- архитектурно предусмотреть возможность добавления отдельных страниц в будущем.

Фаза 1:

```text
/
```

или

```text
/en
```

Фаза 2 / расширение:

```text
/en
/ru
/pl
/by
/projects
/experience
/blog
```

Основной язык первой версии: **English**.

Архитектура должна позволять быстро добавить:

- RU;
- PL;
- BY.

---

## 2.2. Основные секции

Сайт должен содержать:

1. Header / Navigation
2. Hero
3. About
4. Experience
5. Skills / Expertise
6. Education
7. Projects
8. Teaching / Mentoring
9. Contact
10. Footer

---

## 2.3. Header / Navigation

Header должен содержать:

- текстовый логотип/айдентику без фото, например:

```text
<YURI SEMENENKO />
```

или

```text
YS.dev
```

- навигацию:
  - About;
  - Experience;
  - Skills;
  - Education;
  - Projects;
  - Teaching;
  - Contact;

- кнопку `Download CV`;
- переключатель темы;
- задел под переключатель языка;
- адаптивное мобильное меню.

Поведение:

- sticky/fixed header;
- плавный переход к секциям;
- подсветка активной секции при скролле;
- мобильное burger-menu;
- внешние ссылки открываются в новой вкладке;
- все интерактивные элементы доступны с клавиатуры.

---

## 2.4. Hero section

Hero должен быть главным имиджевым блоком сайта.

Обязательное содержимое:

```text
Yuri Semenenko
Senior Frontend Engineer & Mentor and Trainer
Based in Krakow, Poland
```

Статусы:

```text
Open to work
Available for remote roles
```

Статусы должны отображаться как badges/chips и задаваться через конфиг, чтобы их можно было комбинировать, добавлять или скрывать.

CTA:

- `Download CV`;
- `Contact me`;
- `View experience`;
- `LinkedIn`.

Фото не используется.

Визуальный элемент hero-блока:

- animated code block;
- terminal-like component;
- developer profile object;
- animated gradient/card;
- subtle grid/glow background.

Пример идеи для code card:

```ts
const yuri = {
  role: "Senior Frontend Engineer",
  location: "Krakow, Poland",
  focus: ["React", "Next.js", "TypeScript", "Performance"],
  also: ["Mentor", "Trainer"],
  status: ["Open to work", "Available for remote roles"],
};
```

---

## 2.5. About

Блок должен кратко описывать профессиональный профиль.

Смысловой акцент:

- Senior Frontend Engineer;
- React / Next.js / TypeScript;
- performance optimisation;
- UI architecture;
- reusable components;
- legacy modernization;
- design systems / UI kits;
- code review;
- mentoring and teaching;
- collaboration with product owners, backend developers, designers and QA.

Текст должен быть написан на английском языке в профессиональном, но живом стиле.

---

## 2.6. Experience

Блок Experience отображается в формате timeline или карточек.

Каждая позиция должна содержать:

- company;
- role;
- period;
- responsibilities;
- achievements;
- technologies;
- NDA-safe project description, если нужно.

Позиции из CV:

### StoneX

**Front-end Developer**
**Nov 2024 — Nov 2025**

Ключевые акценты:

- legacy project на Sitecore CMS, .NET, native JS, Preact;
- работа в squad-команде;
- code review;
- помощь PM с estimations и coordination;
- миграция на React, Next.js, Tailwind CSS;
- Storybook;
- Uniform.dev;
- Kontent.ai;
- reusable components;
- POCs;
- Scrum и demo sessions;
- CI/CD pipeline with GitHub and Vercel.

### Synder

**Front-end Developer**
**Nov 2023 — Sep 2024**

Ключевые акценты:

- senior front-end engineer;
- четыре проекта разной сложности;
- React.js;
- Redux;
- RTK Query;
- взаимодействие с product owners, backend developers, designers;
- grooming и sprint planning;
- code review;
- ESLint improvements;
- custom UI-kit proposal;
- новые страницы и сервисы.

### Monterosa

**Front-end Developer**
**Jan 2019 — Sep 2023**

Ключевые акценты:

- SCSS;
- Handlebars;
- CoffeeScript;
- JavaScript;
- TypeScript;
- Ember.js;
- React.js;
- Zustand;
- code reviews;
- tests;
- transformation of core platform;
- 20% performance improvement through optimization and refactoring of old Ember.js codebase.

### Belitsoft

**Front-end Developer**
**Aug 2014 — Dec 2018**

Ключевые акценты:

- long-term and short-term projects;
- Bossrevolution project;
- cross-browser web applications;
- reusable components;
- complex animations;
- tests;
- Drupal CMF;
- admin panel components;
- CKEditor 4.x plugin adaptation;
- WebMD project;
- Lundberg Design website.

### EPAM Systems

**Front-end Developer**
**Dec 2013 — Aug 2014**

Ключевые акценты:

- corporate websites;
- advertising websites;
- email templates;
- HTML coder / frontend developer responsibilities;
- Fishpond website;
- Australian online store support.

### Startup Labs, Inc.

**Front-end Developer**
**Apr 2012 — Dec 2013**

Ключевые акценты:

- websites of different complexity;
- HTML pages and web applications;
- Australian online store support;
- reusable components and modules;
- client-facing delivery.

### Belitsoft

**Front-end Developer**
**Jul 2011 — Apr 2013**

Отображать как отдельный период, не объединять с Belitsoft 2014-2018.

---

## 2.7. Teaching / Mentoring

Teaching experience нужно выделить отдельным блоком, так как это усиливает личный бренд.

### IT-Academy.by

**Trainer of Front-end Development Courses**
**Apr 2017 — Jul 2025**

Содержимое:

- teaching HTML, CSS and JavaScript;
- teaching JavaScript web application development;
- mentoring students;
- 500+ students trained;
- many students secured positions in big tech companies;
- course materials update;
- Telegram channel with frontend materials;
- supportive learning environment.

Блок может называться:

```text
Teaching & Mentoring
```

или

```text
Mentorship
```

---

## 2.8. Skills / Expertise

Навыки сгруппировать по категориям.

### Markup & Styling

- HTML;
- Handlebars;
- CSS;
- SCSS;
- BEM;
- CSS Modules.

### JavaScript / TypeScript

- JavaScript ES6+;
- TypeScript;
- CoffeeScript;
- jQuery.

### Frontend

- React.js;
- Next.js;
- Redux;
- RTK Query;
- Ember.js;
- Zustand.

### UI / Component Libraries

- Tailwind CSS;
- shadcn/ui;
- MUI;
- Chakra UI;
- Bootstrap.

### Testing & Documentation

- Jest;
- React Testing Library;
- Storybook.

### Backend / Data

- Node.js;
- Express.js;
- Firebase;
- Supabase;
- MongoDB.

### API

- REST API;
- Swagger.

### Tooling

- Webpack;
- Vite;
- Parcel;
- EsBuild.

### Version Control & Workflow

- GitHub;
- GitLab;
- Bitbucket;
- Jira;
- Confluence;
- Trello;
- Slack.

### Languages

- Russian — Native;
- English — B2+.

---

## 2.9. Education

### Belarusian State University of Informatics and Radioelectronics

Faculty of Information Technologies and Management
Department: Intellectual Information Technologies
**2002 — 2007**

### Belarusian National Technical University

Institute of Improvement of Professional Skills and Staff Retraining
Department: Web Design and Computer Graphics
**2008 — 2010**

---

## 2.10. Projects

Проекты формируются на основе CV.

Так как ссылки могут быть недоступны из-за NDA или устаревания, карточки проектов не обязаны содержать внешние ссылки.

Каждая карточка проекта должна содержать:

- project title;
- context/company, если можно;
- role;
- description;
- responsibilities;
- technologies;
- result/impact;
- NDA-safe badge, если ссылка недоступна.

Предварительный список проектов:

### Legacy CMS Migration Platform

Основано на опыте StoneX.

Стек/акценты:

- Sitecore CMS;
- .NET;
- native JS;
- Preact;
- React;
- Next.js;
- Tailwind CSS;
- Storybook;
- Uniform.dev;
- Kontent.ai;
- GitHub;
- Vercel.

### Multi-project SaaS Frontend

Основано на опыте Synder.

Стек/акценты:

- React;
- Redux;
- RTK Query;
- ESLint;
- custom UI-kit;
- frontend services;
- product collaboration.

### Core Platform Modernization

Основано на опыте Monterosa.

Стек/акценты:

- Ember.js;
- React.js;
- Zustand;
- TypeScript;
- SCSS;
- performance optimization;
- legacy refactoring;
- 20% performance improvement.

### Drupal / CMS Content Platform

Основано на опыте Belitsoft.

Стек/акценты:

- Drupal CMF;
- admin panel components;
- CKEditor 4.x API;
- WebMD;
- Lundberg Design;
- reusable modules.

### E-commerce Frontend Platform

Основано на опыте Startup Labs / EPAM.

Стек/акценты:

- Fishpond;
- Australian online store;
- cross-browser frontend;
- reusable components;
- performance and usability improvements.

### Frontend Education Program

Основано на IT-Academy.by.

Стек/акценты:

- HTML;
- CSS;
- JavaScript;
- mentoring;
- 500+ students;
- frontend education;
- course materials.

---

## 2.11. Contact

Форма обратной связи не нужна.

Контакты:

```text
Email: no1dor.job@gmail.com
LinkedIn: https://www.linkedin.com/in/yuri-semenenko/
GitHub: https://github.com/yuri-semenenko
Telegram: @frontdev85
Location: Krakow, Poland
```

Требования:

- email через `mailto:`;
- телефон не показывать;
- внешние ссылки открываются в новой вкладке;
- у иконок должны быть `aria-label`;
- форма, backend и CAPTCHA не нужны.

---

## 2.12. CV Download

Требования:

- CV доступен как PDF;
- кнопка `Download CV` есть в header и hero;
- файл хранится в `/public/files/`;
- файл открывается/скачивается без ошибок.

Рекомендуемое имя файла:

```text
yuri-semenenko-senior-frontend-engineer-cv.pdf
```

Задел под локализации:

```text
cv-en.pdf
cv-ru.pdf
cv-pl.pdf
cv-by.pdf
```

---

# 3. Нефункциональные требования

## 3.1. Дизайн

Сайт должен быть:

- dark-first;
- современным;
- техническим;
- аккуратным;
- не перегруженным;
- визуально демонстрирующим frontend-экспертизу.

Фото не используется.

Визуальный стиль строится на:

- typography;
- code-like элементах;
- cards;
- badges;
- terminal/code blocks;
- gradients;
- animated borders;
- subtle glow effects;
- developer-inspired UI.

---

## 3.2. Темы

Сайт должен иметь полноценные:

- dark theme;
- light theme.

Требования:

- по умолчанию тема определяется через системные настройки браузера;
- ручной переключатель темы обязателен;
- выбранная тема сохраняется в `localStorage`;
- не должно быть flash of incorrect theme;
- обе темы должны быть визуально полноценными;
- dark theme остаётся основной по характеру сайта, но light theme не должна выглядеть второстепенно или сломанно.

---

## 3.3. Цветовая палитра

Основные направления:

### Dark theme

- фон: dark gray / near black;
- основной текст: white / light gray;
- secondary text: muted gray;
- primary accent: blue или green;
- secondary accent: burgundy-purple / magenta.

### Light theme

- фон: white / soft gray;
- основной текст: dark gray / near black;
- secondary text: medium gray;
- primary accent: blue или green;
- secondary accent: burgundy-purple / magenta.

---

## 3.4. Typography

Основной шрифт:

- JetBrains Mono.

Допустимая комбинация:

- JetBrains Mono для заголовков, code blocks, badges, UI accents;
- Inter или system font для длинных текстов, если это улучшит читаемость.

---

## 3.5. Анимации

Выбран уровень анимаций: **B — заметные frontend-анимации без перегруза**.

Требования:

- анимации должны быть оригинальными;
- анимации должны хорошо работать на мобильных устройствах;
- performance не должен страдать;
- использовать `prefers-reduced-motion`;
- избегать тяжёлого WebGL/canvas в первой версии;
- анимации должны быть реализованы через CSS, Framer Motion или Motion One.

Рекомендованные анимации:

- animated hero code block;
- staggered section reveal;
- animated cards;
- hover glow;
- gradient borders;
- active navigation indicator;
- timeline reveal;
- smooth scrolling;
- subtle background grid animation.

---

## 3.6. Адаптивность

Сайт должен корректно работать на:

- mobile от 320px;
- tablet от 768px;
- desktop от 1024px;
- large desktop от 1440px.

Требования:

- отсутствие горизонтального скролла;
- mobile-first подход;
- адаптивное меню;
- удобные tap targets;
- readable typography;
- оптимизированные анимации на mobile;
- карточки перестраиваются в одну колонку на небольших экранах.

---

## 3.7. Performance

Целевые Lighthouse-метрики:

```text
Performance: 95-100
Accessibility: 95-100
Best Practices: 95-100
SEO: 90+ на фазе 1
SEO: 95+ на фазе 2
```

Требования:

- static generation, где возможно;
- минимальный JS bundle;
- оптимизация шрифтов;
- отсутствие лишних библиотек;
- lazy loading;
- dynamic imports для тяжёлых компонентов;
- оптимизированные изображения, если появятся;
- bundle analysis перед релизом;
- отсутствие ошибок в browser console.

---

## 3.8. Accessibility

Требования:

- semantic HTML;
- корректная heading hierarchy;
- keyboard navigation;
- visible focus states;
- aria-label для icon links;
- достаточный contrast ratio;
- поддержка `prefers-reduced-motion`;
- корректное поведение mobile menu для screen readers.

---

## 3.9. SEO

Фаза 1:

- title;
- meta description;
- Open Graph;
- favicon;
- semantic HTML;
- корректные heading levels;
- readable URLs/anchors.

Фаза 2:

- sitemap.xml;
- robots.txt;
- canonical URLs;
- multilingual SEO;
- structured data;
- Google Search Console;
- custom domain;
- extended social previews.

---

# 4. Ограничения и зависимости

## 4.1. Контент

Контент первой версии формируется из:

- CV;
- LinkedIn;
- дополнительных правок владельца сайта.

Контент должен храниться в простом формате, без CMS.

---

## 4.2. NDA

Для проектов без публичных ссылок использовать нейтральные описания.

Нельзя раскрывать:

- закрытые клиентские данные;
- внутренние URL;
- конфиденциальные метрики;
- непубличные детали архитектуры;
- приватные названия проектов.

---

## 4.3. Бюджет

Решение должно быть недорогим в реализации и поддержке.

Фаза 1 не включает:

- CMS;
- backend;
- contact form;
- paid services;
- analytics;
- custom domain;
- legal pages.

---

## 4.4. Домен

Фаза 1:

- дефолтный Vercel domain.

Фаза 2:

- покупка и подключение custom domain.

---

## 4.5. Юридические требования

Фаза 1:

- privacy policy не нужна;
- cookie banner не нужен;
- обработка персональных данных через форму отсутствует.

Фаза 2:

- privacy policy;
- cookie notice;
- cookie banner при аналитике;
- юридические страницы при необходимости.

---

# 5. Технологический стек

## 5.1. Основной стек

```text
Next.js
React
TypeScript
Tailwind CSS
shadcn/ui
Framer Motion или Motion One
next-intl
GitHub
Vercel
```

## 5.2. UI

Использовать:

- shadcn/ui как базу для компонентов;
- Tailwind CSS для кастомной стилизации;
- кастомные компоненты для:
  - hero;
  - timeline;
  - skill cards;
  - project cards;
  - theme switcher;
  - animated code block.

Важно: сайт не должен выглядеть как стандартный shadcn template. shadcn/ui используется как строительная база, а не как готовый визуальный стиль.

---

## 5.3. Контентная структура

Рекомендуемый вариант — TypeScript-файлы с типизацией:

```text
/src/content
  /en
    profile.ts
    experience.ts
    skills.ts
    education.ts
    projects.ts
    contacts.ts
  /ru
  /pl
  /by
```

Фаза 1:

- заполнен только `/en`.

Фаза 2:

- добавляются `/ru`, `/pl`, `/by`.

---

## 5.4. Deployment

Требования:

- GitHub repository;
- production branch: `main`;
- Vercel deployment;
- automatic production deploy после merge в `main`;
- preview deployments для Pull Requests;
- README с инструкциями запуска.

---

# 6. Acceptance Criteria

## 6.1. General

- [ ] Сайт доступен по Vercel URL.
- [ ] Сайт реализован на Next.js, React и TypeScript.
- [ ] Используются Tailwind CSS и shadcn/ui.
- [ ] Основной язык первой версии — English.
- [ ] Контент хранится в простой структуре без CMS.
- [ ] Архитектура позволяет быстро добавить RU, PL и BY.
- [ ] Сайт не использует backend.
- [ ] Сайт не использует contact form.
- [ ] Сайт не показывает телефон.

## 6.2. Structure

- [ ] Есть Header.
- [ ] Есть Hero.
- [ ] Есть About.
- [ ] Есть Experience.
- [ ] Есть Skills.
- [ ] Есть Education.
- [ ] Есть Projects.
- [ ] Есть Teaching / Mentoring.
- [ ] Есть Contact.
- [ ] Есть Footer.
- [ ] Навигация ведёт к соответствующим секциям.
- [ ] Архитектура допускает добавление отдельных страниц в будущем.

## 6.3. Hero

- [ ] Hero содержит `Yuri Semenenko`.
- [ ] Hero содержит `Senior Frontend Engineer & Mentor and Trainer`.
- [ ] Hero содержит `Based in Krakow, Poland`.
- [ ] Hero отображает статус `Open to work`.
- [ ] Hero отображает статус `Available for remote roles`.
- [ ] Hero не использует фото.
- [ ] Hero содержит кнопку `Download CV`.
- [ ] Hero содержит кнопку перехода к контактам, опыту или LinkedIn.
- [ ] Hero содержит оригинальный developer visual element.

## 6.4. Contacts

- [ ] Email работает через `mailto:no1dor.job@gmail.com`.
- [ ] LinkedIn ведёт на `https://www.linkedin.com/in/yuri-semenenko/`.
- [ ] GitHub ведёт на `https://github.com/yuri-semenenko`.
- [ ] Telegram отображается как `@frontdev85`.
- [ ] Телефон не отображается.
- [ ] Внешние ссылки открываются в новой вкладке.
- [ ] У иконок есть доступные `aria-label`.

## 6.5. CV

- [ ] CV PDF доступен для скачивания.
- [ ] Кнопка `Download CV` есть в Header.
- [ ] Кнопка `Download CV` есть в Hero.
- [ ] PDF открывается корректно.
- [ ] Имя файла понятно пользователю.
- [ ] Ссылка на CV не ведёт на 404.

## 6.6. Experience

- [ ] StoneX отображается как отдельная позиция.
- [ ] Synder отображается как отдельная позиция.
- [ ] Monterosa отображается как отдельная позиция.
- [ ] Belitsoft 2014-2018 отображается как отдельная позиция.
- [ ] EPAM Systems отображается как отдельная позиция.
- [ ] Startup Labs отображается как отдельная позиция.
- [ ] Belitsoft 2011-2013 отображается как отдельная позиция.
- [ ] Для каждой позиции есть роль, компания, период и описание.
- [ ] Описание опыта не перегружает страницу.
- [ ] Достижения визуально отделены от обязанностей.

## 6.7. Teaching / Mentoring

- [ ] IT-Academy.by отображается как отдельный блок или отдельная выделенная experience-card.
- [ ] Указан период Apr 2017 — Jul 2025.
- [ ] Указана роль Trainer of Front-end Development Courses.
- [ ] Указано 500+ trained students.
- [ ] Блок подчёркивает mentoring/training expertise.

## 6.8. Skills

- [ ] Навыки сгруппированы по категориям.
- [ ] Есть frontend skills.
- [ ] Есть styling/UI skills.
- [ ] Есть testing skills.
- [ ] Есть tooling skills.
- [ ] Есть API/backend basics.
- [ ] Есть workflow/tools.
- [ ] Есть languages.
- [ ] Skills-секция не выглядит как длинный plain list.

## 6.9. Projects

- [ ] Проекты сформированы на основе CV.
- [ ] Проекты можно показывать без внешних ссылок.
- [ ] Для NDA-проектов используется нейтральное описание.
- [ ] Карточки содержат роль, стек, задачи и результат.
- [ ] Отсутствие ссылок не ухудшает UX.
- [ ] Project section помогает понять инженерный уровень.

## 6.10. Theme

- [ ] Реализована dark theme.
- [ ] Реализована полноценная light theme.
- [ ] Тема определяется через системные настройки браузера.
- [ ] Есть ручной theme switcher.
- [ ] Выбранная тема сохраняется.
- [ ] Нет flash of incorrect theme при загрузке.
- [ ] Обе темы выглядят завершённо.

## 6.11. Animations

- [ ] Есть оригинальные frontend-анимации.
- [ ] Анимации не перегружают интерфейс.
- [ ] Анимации плавно работают на desktop.
- [ ] Анимации плавно работают на mobile.
- [ ] Поддерживается `prefers-reduced-motion`.
- [ ] Анимации не снижают Lighthouse Performance ниже 95.

## 6.12. Responsive

- [ ] Сайт корректно работает от 320px.
- [ ] Нет горизонтального скролла.
- [ ] Header адаптируется в mobile menu.
- [ ] Карточки перестраиваются в одну колонку на mobile.
- [ ] Текст читаемый на маленьких экранах.
- [ ] Tap targets удобные.

## 6.13. Performance

- [ ] Lighthouse Performance — минимум 95.
- [ ] Lighthouse Accessibility — минимум 95.
- [ ] Lighthouse Best Practices — минимум 95.
- [ ] Lighthouse SEO — минимум 90 на фазе 1.
- [ ] Нет критических ошибок в console.
- [ ] Шрифты оптимизированы.
- [ ] Bundle не содержит очевидно лишних зависимостей.

## 6.14. Deployment

- [ ] Код хранится в GitHub.
- [ ] Настроен Vercel deployment.
- [ ] Production deploy идёт из `main`.
- [ ] Pull Requests получают preview deployments.
- [ ] README содержит инструкции по запуску проекта.

# 7. Контентные модели

## 7.1. Рекомендуемая структура файлов

```txt
/src/content
  /types.ts
  /en
    profile.ts
    contacts.ts
    experience.ts
    skills.ts
    education.ts
    projects.ts
    navigation.ts
    index.ts
  /ru
  /pl
  /by
```

Фаза 1:

```txt
/src/content/en/*
```

Фаза 2:

```txt
/src/content/ru/*
/src/content/pl/*
/src/content/by/*
```

---

# 7.2. Общие типы

```ts
// src/content/types.ts

export type Locale = "en" | "ru" | "pl" | "by";

export type Theme = "light" | "dark" | "system";

export type SocialType = "email" | "linkedin" | "github" | "telegram" | "location";

export type SkillLevel = "basic" | "intermediate" | "advanced" | "expert";

export type ProjectVisibility = "public" | "nda" | "archived" | "internal";

export type WorkMode = "remote" | "hybrid" | "onsite";

export interface SeoModel {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export interface BadgeModel {
  label: string;
  variant?: "default" | "primary" | "secondary" | "success" | "muted";
}

export interface LinkModel {
  label: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
}
```

---

# 7.3. Profile model

```ts
// src/content/types.ts

export interface ProfileModel {
  name: string;
  headline: string;
  location: string;
  summary: string;
  statuses: BadgeModel[];
  highlights: string[];
  cv: {
    label: string;
    fileUrl: string;
    fileName: string;
  };
  seo: SeoModel;
}
```

```ts
// src/content/en/profile.ts

import type { ProfileModel } from "../types";

export const profile: ProfileModel = {
  name: "Yuri Semenenko",
  headline: "Senior Frontend Engineer & Mentor and Trainer",
  location: "Based in Krakow, Poland",
  summary:
    "Senior Frontend Engineer focused on building scalable, performant, and maintainable web applications with React, Next.js, TypeScript, and modern UI tooling. Experienced in legacy modernization, reusable components, UI architecture, performance optimization, code review, mentoring, and frontend education.",
  statuses: [
    {
      label: "Open to work",
      variant: "success",
    },
    {
      label: "Available for remote roles",
      variant: "primary",
    },
  ],
  highlights: [
    "React, Next.js and TypeScript expertise",
    "Performance optimization and legacy modernization",
    "Reusable components and UI architecture",
    "Frontend mentor and trainer with 500+ students trained",
  ],
  cv: {
    label: "Download CV",
    fileUrl: "/files/yuri-semenenko-senior-frontend-engineer-cv.pdf",
    fileName: "yuri-semenenko-senior-frontend-engineer-cv.pdf",
  },
  seo: {
    title: "Yuri Semenenko — Senior Frontend Engineer",
    description:
      "Personal portfolio and CV website of Yuri Semenenko, Senior Frontend Engineer based in Krakow, Poland.",
    keywords: [
      "Yuri Semenenko",
      "Senior Frontend Engineer",
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript",
      "Krakow",
      "Frontend Mentor",
    ],
  },
};
```

---

# 7.4. Contacts model

```ts
// src/content/types.ts

export interface ContactItemModel {
  type: SocialType;
  label: string;
  value: string;
  href?: string;
  visible: boolean;
  external?: boolean;
  ariaLabel: string;
}

export interface ContactsModel {
  title: string;
  description: string;
  items: ContactItemModel[];
}
```

```ts
// src/content/en/contacts.ts

import type { ContactsModel } from "../types";

export const contacts: ContactsModel = {
  title: "Get in touch",
  description:
    "Feel free to contact me for frontend engineering roles, mentoring, collaboration, or professional opportunities.",
  items: [
    {
      type: "email",
      label: "Email",
      value: "no1dor.job@gmail.com",
      href: "mailto:no1dor.job@gmail.com",
      visible: true,
      external: false,
      ariaLabel: "Send email to Yuri Semenenko",
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/yuri-semenenko",
      href: "https://www.linkedin.com/in/yuri-semenenko/",
      visible: true,
      external: true,
      ariaLabel: "Open Yuri Semenenko LinkedIn profile",
    },
    {
      type: "github",
      label: "GitHub",
      value: "github.com/yuri-semenenko",
      href: "https://github.com/yuri-semenenko",
      visible: true,
      external: true,
      ariaLabel: "Open Yuri Semenenko GitHub profile",
    },
    {
      type: "telegram",
      label: "Telegram",
      value: "@frontdev85",
      href: "https://t.me/frontdev85",
      visible: true,
      external: true,
      ariaLabel: "Contact Yuri Semenenko on Telegram",
    },
    {
      type: "location",
      label: "Location",
      value: "Krakow, Poland",
      visible: true,
      external: false,
      ariaLabel: "Yuri Semenenko location",
    },
  ],
};
```

Телефон намеренно не включён в модель как публичный контакт.

---

# 7.5. Navigation model

```ts
// src/content/types.ts

export interface NavigationItemModel {
  label: string;
  href: string;
  sectionId?: string;
  external?: boolean;
}

export interface NavigationModel {
  logo: string;
  items: NavigationItemModel[];
  actions: LinkModel[];
}
```

```ts
// src/content/en/navigation.ts

import type { NavigationModel } from "../types";

export const navigation: NavigationModel = {
  logo: "<YURI SEMENENKO />",
  items: [
    {
      label: "About",
      href: "#about",
      sectionId: "about",
    },
    {
      label: "Experience",
      href: "#experience",
      sectionId: "experience",
    },
    {
      label: "Skills",
      href: "#skills",
      sectionId: "skills",
    },
    {
      label: "Education",
      href: "#education",
      sectionId: "education",
    },
    {
      label: "Projects",
      href: "#projects",
      sectionId: "projects",
    },
    {
      label: "Teaching",
      href: "#teaching",
      sectionId: "teaching",
    },
    {
      label: "Contact",
      href: "#contact",
      sectionId: "contact",
    },
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
```

---

# 7.6. Experience model

```ts
// src/content/types.ts

export interface ExperienceItemModel {
  company: string;
  role: string;
  period: {
    start: string;
    end: string;
    label: string;
  };
  location?: string;
  type?: "full-time" | "part-time" | "contract" | "freelance";
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  links?: LinkModel[];
  featured?: boolean;
}
```

```ts
// src/content/en/experience.ts

import type { ExperienceItemModel } from "../types";

export const experience: ExperienceItemModel[] = [
  {
    company: "StoneX",
    role: "Front-end Developer",
    period: {
      start: "2024-11",
      end: "2025-11",
      label: "Nov 2024 — Nov 2025",
    },
    summary:
      "Led frontend development in one of three squads for a legacy product and participated in migration to a modern React and Next.js stack.",
    responsibilities: [
      "Led frontend development for a legacy project built on Sitecore CMS, .NET, native JavaScript, and Preact.",
      "Collaborated with backend engineers, frontend engineers, QA engineers, and project management.",
      "Conducted code reviews and supported task estimation and coordination.",
      "Participated in migration to React, Next.js, Tailwind CSS, Storybook, Uniform.dev, and Kontent.ai.",
      "Developed reusable components, reviewed and created POCs, and contributed to Scrum and demo sessions.",
    ],
    achievements: [
      "Maintained and improved legacy product performance and stability.",
      "Contributed to platform migration, improving scalability and development speed.",
      "Helped establish a CI/CD pipeline using GitHub and Vercel.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Storybook",
      "Sitecore CMS",
      ".NET",
      "Preact",
      "Uniform.dev",
      "Kontent.ai",
      "GitHub",
      "Vercel",
    ],
    featured: true,
  },
  {
    company: "Synder",
    role: "Front-end Developer",
    period: {
      start: "2023-11",
      end: "2024-09",
      label: "Nov 2023 — Sep 2024",
    },
    summary:
      "Worked as a senior frontend engineer across four projects of varying complexity using React, Redux, and RTK Query.",
    responsibilities: [
      "Worked on four projects of varying complexity using React.js, Redux, and RTK Query.",
      "Collaborated with product owners, backend developers, and designers to define tasks and provide reliable estimates.",
      "Participated in grooming sessions, sprint planning, and task discussions.",
      "Conducted code reviews and contributed to frontend best practices.",
    ],
    achievements: [
      "Optimized ESLint configuration to improve codebase quality and automate import sorting.",
      "Analyzed UI/UX and proposed actions for creating a custom UI-kit.",
      "Fixed bugs and developed new pages and services to improve product functionality and user experience.",
    ],
    technologies: ["React", "Redux", "RTK Query", "TypeScript", "ESLint"],
    featured: true,
  },
  {
    company: "Monterosa",
    role: "Front-end Developer",
    period: {
      start: "2019-01",
      end: "2023-09",
      label: "Jan 2019 — Sep 2023",
    },
    summary:
      "Developed and maintained user-friendly interfaces and participated in the transformation of a core platform.",
    responsibilities: [
      "Developed and maintained user-friendly interfaces.",
      "Used SCSS, Handlebars, CoffeeScript, JavaScript, and TypeScript.",
      "Built and integrated modules using Ember.js and React.js.",
      "Conducted code reviews and wrote tests to ensure code quality.",
      "Managed tasks and coordinated with team members to meet project deadlines.",
    ],
    achievements: [
      "Led transformation of the core project platform, improving user experience.",
      "Increased platform performance by 20% through optimization and refactoring of an old Ember.js codebase.",
      "Received positive feedback from users and stakeholders for improved interface and functionality.",
    ],
    technologies: [
      "Ember.js",
      "React",
      "Zustand",
      "TypeScript",
      "JavaScript",
      "CoffeeScript",
      "SCSS",
      "Handlebars",
      "Testing",
    ],
    featured: true,
  },
  {
    company: "Belitsoft",
    role: "Front-end Developer",
    period: {
      start: "2014-08",
      end: "2018-12",
      label: "Aug 2014 — Dec 2018",
    },
    summary:
      "Worked on long-term and short-term frontend projects, including CMS-based platforms and reusable frontend components.",
    responsibilities: [
      "Developed maintainable, cross-browser web applications.",
      "Created reusable components for faster integration of similar features.",
      "Developed and styled UI according to mockups.",
      "Added complex animations and wrote tests.",
      "Developed Drupal-based components, admin panel parts, modules, and CKEditor 4.x integrations.",
    ],
    achievements: [
      "Played a key role in the Bossrevolution project, improving user experience.",
      "Trained and supervised junior colleagues.",
      "Contributed to WebMD and Lundberg Design projects.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Drupal", "CKEditor API", "Animations", "Testing"],
  },
  {
    company: "EPAM Systems",
    role: "Front-end Developer",
    period: {
      start: "2013-12",
      end: "2014-08",
      label: "Dec 2013 — Aug 2014",
    },
    summary:
      "Developed corporate and advertising websites, email templates, and frontend features for client projects.",
    responsibilities: [
      "Developed corporate and advertising websites.",
      "Created email templates.",
      "Worked as an HTML coder and frontend developer across multiple projects.",
    ],
    achievements: [
      "Contributed to the Fishpond website.",
      "Supported and enhanced an Australian online store.",
      "Developed and maintained high-quality web applications.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Email templates"],
  },
  {
    company: "Startup Labs, Inc.",
    role: "Front-end Developer",
    period: {
      start: "2012-04",
      end: "2013-12",
      label: "Apr 2012 — Dec 2013",
    },
    summary: "Developed websites of different complexity levels and supported an Australian online store.",
    responsibilities: [
      "Developed websites from simple HTML pages to complex web applications.",
      "Supported and enhanced a prominent Australian online store.",
      "Created reusable components and modules.",
    ],
    achievements: [
      "Improved development efficiency through reusable components.",
      "Successfully completed multiple client-facing tasks.",
      "Received positive feedback from clients and users.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Reusable components"],
  },
  {
    company: "Belitsoft",
    role: "Front-end Developer",
    period: {
      start: "2011-07",
      end: "2013-04",
      label: "Jul 2011 — Apr 2013",
    },
    summary: "Early frontend engineering role focused on markup, styling, JavaScript, and delivery of web interfaces.",
    responsibilities: [
      "Developed frontend interfaces for commercial projects.",
      "Worked with HTML, CSS, JavaScript, and reusable UI parts.",
      "Supported delivery of client-facing websites and web applications.",
    ],
    achievements: [
      "Built a foundation for long-term frontend engineering experience.",
      "Contributed to multiple commercial frontend projects.",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
```

---

# 7.7. Teaching model

```ts
// src/content/types.ts

export interface TeachingItemModel {
  organization: string;
  role: string;
  period: {
    start: string;
    end: string;
    label: string;
  };
  summary: string;
  courses: string[];
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}
```

```ts
// src/content/en/teaching.ts

import type { TeachingItemModel } from "../types";

export const teaching: TeachingItemModel[] = [
  {
    organization: "IT-Academy.by",
    role: "Trainer of Front-end Development Courses",
    period: {
      start: "2017-04",
      end: "2025-07",
      label: "Apr 2017 — Jul 2025",
    },
    summary:
      "Conducted frontend development courses, mentored students, and supported a learning community focused on HTML, CSS, JavaScript, and web application development.",
    courses: ["Web Development with HTML, CSS, and JavaScript", "Web Application Development with JavaScript"],
    responsibilities: [
      "Conducted frontend development courses.",
      "Created an inclusive and supportive learning environment.",
      "Mentored students throughout their learning journey.",
      "Developed and updated course materials according to modern frontend practices.",
      "Maintained a Telegram channel with useful frontend links and materials.",
    ],
    achievements: [
      "Trained and mentored over 500 students.",
      "Helped many students secure positions in big tech companies.",
      "Received excellent feedback and testimonials for teaching and mentoring quality.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Frontend Development", "Mentoring"],
  },
];
```

---

# 7.8. Skills model

```ts
// src/content/types.ts

export interface SkillItemModel {
  name: string;
  level?: SkillLevel;
  featured?: boolean;
}

export interface SkillGroupModel {
  title: string;
  description?: string;
  items: SkillItemModel[];
}
```

```ts
// src/content/en/skills.ts

import type { SkillGroupModel } from "../types";

export const skills: SkillGroupModel[] = [
  {
    title: "Markup & Styling",
    items: [
      { name: "HTML", level: "expert", featured: true },
      { name: "Handlebars", level: "advanced" },
      { name: "CSS", level: "expert", featured: true },
      { name: "SCSS", level: "expert" },
      { name: "BEM", level: "advanced" },
      { name: "CSS Modules", level: "advanced" },
    ],
  },
  {
    title: "JavaScript & TypeScript",
    items: [
      { name: "JavaScript ES6+", level: "expert", featured: true },
      { name: "TypeScript", level: "advanced", featured: true },
      { name: "CoffeeScript", level: "intermediate" },
      { name: "jQuery", level: "advanced" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", level: "expert", featured: true },
      { name: "Next.js", level: "advanced", featured: true },
      { name: "Redux", level: "advanced" },
      { name: "RTK Query", level: "advanced" },
      { name: "Ember.js", level: "advanced" },
      { name: "Zustand", level: "advanced" },
    ],
  },
  {
    title: "UI & Component Libraries",
    items: [
      { name: "Tailwind CSS", level: "advanced", featured: true },
      { name: "shadcn/ui", level: "advanced", featured: true },
      { name: "MUI", level: "advanced" },
      { name: "Chakra UI", level: "advanced" },
      { name: "Bootstrap", level: "advanced" },
    ],
  },
  {
    title: "Testing & Documentation",
    items: [
      { name: "Jest", level: "advanced" },
      { name: "React Testing Library", level: "advanced" },
      { name: "Storybook", level: "advanced", featured: true },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Node.js", level: "intermediate" },
      { name: "Express.js", level: "intermediate" },
      { name: "Firebase", level: "intermediate" },
      { name: "Supabase", level: "intermediate" },
      { name: "MongoDB", level: "intermediate" },
    ],
  },
  {
    title: "API",
    items: [
      { name: "REST API", level: "advanced" },
      { name: "Swagger", level: "advanced" },
    ],
  },
  {
    title: "Build Tools",
    items: [
      { name: "Webpack", level: "advanced" },
      { name: "Vite", level: "advanced" },
      { name: "Parcel", level: "intermediate" },
      { name: "EsBuild", level: "intermediate" },
    ],
  },
  {
    title: "Version Control & Workflow",
    items: [
      { name: "GitHub", level: "advanced", featured: true },
      { name: "GitLab", level: "advanced" },
      { name: "Bitbucket", level: "advanced" },
      { name: "Jira", level: "advanced" },
      { name: "Confluence", level: "advanced" },
      { name: "Trello", level: "advanced" },
      { name: "Slack", level: "advanced" },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "Russian — Native", level: "expert" },
      { name: "English — B2+", level: "advanced" },
    ],
  },
];
```

---

# 7.9. Education model

```ts
// src/content/types.ts

export interface EducationItemModel {
  institution: string;
  faculty?: string;
  department?: string;
  period: {
    start: string;
    end: string;
    label: string;
  };
  description?: string;
}
```

```ts
// src/content/en/education.ts

import type { EducationItemModel } from "../types";

export const education: EducationItemModel[] = [
  {
    institution: "Belarusian State University of Informatics and Radioelectronics",
    faculty: "Faculty of Information Technologies and Management",
    department: "Intellectual Information Technologies",
    period: {
      start: "2002",
      end: "2007",
      label: "2002 — 2007",
    },
  },
  {
    institution: "Belarusian National Technical University",
    faculty: "Institute of Improvement of Professional Skills and Staff Retraining",
    department: "Web Design and Computer Graphics",
    period: {
      start: "2008",
      end: "2010",
      label: "2008 — 2010",
    },
  },
];
```

---

# 7.10. Projects model

```ts
// src/content/types.ts

export interface ProjectItemModel {
  title: string;
  company?: string;
  period?: string;
  visibility: ProjectVisibility;
  summary: string;
  role: string;
  responsibilities: string[];
  impact: string[];
  technologies: string[];
  links?: LinkModel[];
  badges?: BadgeModel[];
  featured?: boolean;
}
```

```ts
// src/content/en/projects.ts

import type { ProjectItemModel } from "../types";

export const projects: ProjectItemModel[] = [
  {
    title: "Legacy CMS Migration Platform",
    company: "StoneX",
    visibility: "internal",
    summary:
      "A legacy CMS-based product migration from Sitecore, native JavaScript, and Preact to a modern React and Next.js stack.",
    role: "Frontend Engineer",
    responsibilities: [
      "Maintained and improved the legacy frontend.",
      "Participated in migration to React, Next.js, Tailwind CSS, Storybook, Uniform.dev, and Kontent.ai.",
      "Developed reusable components and reviewed POCs.",
      "Contributed to Scrum activities and demo sessions.",
    ],
    impact: [
      "Improved scalability and development speed.",
      "Helped establish CI/CD with GitHub and Vercel.",
      "Supported product stability during migration.",
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
    badges: [{ label: "Commercial project" }, { label: "No public link" }],
    featured: true,
  },
  {
    title: "Multi-project SaaS Frontend",
    company: "Synder",
    visibility: "internal",
    summary:
      "Frontend development across four SaaS projects of varying complexity with a focus on React, Redux, RTK Query, code quality, and UI consistency.",
    role: "Senior Frontend Engineer",
    responsibilities: [
      "Developed new pages and frontend services.",
      "Collaborated with product owners, backend developers, and designers.",
      "Participated in grooming, sprint planning, and task estimation.",
      "Conducted code reviews.",
      "Improved ESLint configuration and proposed a custom UI-kit direction.",
    ],
    impact: [
      "Improved codebase quality.",
      "Enhanced development consistency.",
      "Improved functionality and user experience.",
    ],
    technologies: ["React", "Redux", "RTK Query", "TypeScript", "ESLint"],
    badges: [{ label: "SaaS" }, { label: "No public link" }],
    featured: true,
  },
  {
    title: "Core Platform Modernization",
    company: "Monterosa",
    visibility: "internal",
    summary:
      "Modernization and performance optimization of a core frontend platform built with legacy Ember.js and modern React modules.",
    role: "Frontend Engineer",
    responsibilities: [
      "Developed and maintained user-friendly interfaces.",
      "Built and integrated modules with Ember.js and React.js.",
      "Refactored legacy frontend code.",
      "Conducted code reviews and wrote tests.",
    ],
    impact: [
      "Improved user experience.",
      "Increased platform performance by 20%.",
      "Received positive feedback from users and stakeholders.",
    ],
    technologies: ["Ember.js", "React", "Zustand", "TypeScript", "JavaScript", "CoffeeScript", "SCSS", "Handlebars"],
    badges: [{ label: "Performance" }, { label: "Legacy refactoring" }],
    featured: true,
  },
  {
    title: "Drupal / CMS Content Platform",
    company: "Belitsoft",
    visibility: "internal",
    summary:
      "CMS-based frontend development involving Drupal, admin panel components, reusable modules, and CKEditor integrations.",
    role: "Frontend Developer",
    responsibilities: [
      "Developed key project components using Drupal CMF.",
      "Created and styled admin panel parts.",
      "Wrote modules and adapted CKEditor 4.x plugins using CKEditor API.",
      "Created reusable components and cross-browser frontend interfaces.",
    ],
    impact: [
      "Improved client satisfaction on CMS-based projects.",
      "Enhanced content management capabilities.",
      "Supported development of projects such as WebMD and Lundberg Design.",
    ],
    technologies: ["Drupal", "CKEditor API", "HTML", "CSS", "JavaScript"],
    badges: [{ label: "CMS" }, { label: "Commercial project" }],
  },
  {
    title: "E-commerce Frontend Platform",
    company: "Startup Labs / EPAM Systems",
    visibility: "archived",
    summary: "Frontend development and support for an Australian online store and related commercial web projects.",
    role: "Frontend Developer",
    responsibilities: [
      "Developed frontend interfaces for websites of different complexity.",
      "Supported and enhanced an Australian online store.",
      "Created reusable components and modules.",
      "Worked on cross-browser frontend implementation.",
    ],
    impact: [
      "Improved performance and usability.",
      "Supported long-term product maintenance.",
      "Delivered multiple client-facing frontend tasks.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Reusable components"],
    badges: [{ label: "E-commerce" }, { label: "Archived" }],
  },
  {
    title: "Frontend Education Program",
    company: "IT-Academy.by",
    visibility: "public",
    summary:
      "Frontend education and mentoring program focused on HTML, CSS, JavaScript, and web application development.",
    role: "Frontend Trainer and Mentor",
    responsibilities: [
      "Conducted frontend development courses.",
      "Mentored students throughout their learning journey.",
      "Updated course materials according to modern frontend trends.",
      "Maintained a Telegram channel with frontend learning materials.",
    ],
    impact: [
      "Trained and mentored 500+ students.",
      "Helped many students secure jobs in tech companies.",
      "Built and supported a frontend learning community.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Mentoring", "Education"],
    badges: [{ label: "Teaching" }, { label: "500+ students" }],
    featured: true,
  },
];
```

---

# 7.11. Aggregated locale export

```ts
// src/content/en/index.ts

import { profile } from "./profile";
import { contacts } from "./contacts";
import { navigation } from "./navigation";
import { experience } from "./experience";
import { teaching } from "./teaching";
import { skills } from "./skills";
import { education } from "./education";
import { projects } from "./projects";

export const enContent = {
  profile,
  contacts,
  navigation,
  experience,
  teaching,
  skills,
  education,
  projects,
};
```

---

# 7.12. Root content loader

```ts
// src/content/index.ts

import type { Locale } from "./types";
import { enContent } from "./en";

const contentByLocale = {
  en: enContent,
  ru: enContent,
  pl: enContent,
  by: enContent,
};

export function getContent(locale: Locale = "en") {
  return contentByLocale[locale] ?? enContent;
}
```

На фазе 1 `ru`, `pl`, `by` временно могут fallback-иться на `en`. На фазе 2 для них добавляются отдельные файлы.

---

# 7.13. Дополнение к Acceptance Criteria

Добавить в раздел Acceptance Criteria:

## Content Models

- [ ] Все данные сайта вынесены в `/src/content`.
- [ ] Контент типизирован через TypeScript.
- [ ] Нет захардкоженных текстов в UI-компонентах, кроме технических fallback-значений.
- [ ] EN-контент полностью заполнен.
- [ ] RU, PL, BY предусмотрены архитектурно.
- [ ] При отсутствии локализации используется fallback на EN.
- [ ] Контактные данные управляются через `contacts.ts`.
- [ ] Статусы в Hero управляются через `profile.ts`.
- [ ] Навигация управляется через `navigation.ts`.
- [ ] Опыт, проекты, навыки и образование управляются отдельными файлами.
- [ ] Телефон не отображается в публичном контенте.
- [ ] CV-ссылка управляется через `profile.cv`.

---

# Рекомендуемые фазы разработки

## Фаза 1 — MVP / Public Version

Включает:

- Next.js-проект;
- EN-версию;
- все основные секции;
- dark и light theme;
- theme switcher;
- адаптивность;
- анимации уровня B;
- CV download;
- контакты без формы;
- GitHub + Vercel CI/CD;
- базовое SEO;
- Lighthouse optimization.

## Фаза 2 — Growth / SEO / Localization

Включает:

- RU, PL, BY;
- custom domain;
- sitemap.xml;
- robots.txt;
- canonical URLs;
- structured data;
- Google Search Console;
- analytics;
- legal pages при необходимости;
- расширение Projects или Blog.

---
