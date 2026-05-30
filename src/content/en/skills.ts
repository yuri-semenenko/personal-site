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
