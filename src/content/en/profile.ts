import type { ProfileModel } from "../types";

export const profile: ProfileModel = {
  name: "Yuri Semenenko",
  headline: "Senior Frontend Engineer & Mentor and Trainer",
  location: "Based in Krakow, Poland",
  summary:
    "Senior Frontend Engineer focused on building scalable, performant, and maintainable web applications with React, Next.js, TypeScript, and modern UI tooling. Experienced in legacy modernization, reusable components, UI architecture, performance optimization, code review, mentoring, and frontend education.",
  statuses: [
    { label: "Open to work", variant: "success" },
    { label: "Available for remote roles", variant: "primary" },
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
