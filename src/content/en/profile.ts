import type { ProfileModel } from "../types";

export const profile: ProfileModel = {
  name: "Yuri Semenenko",
  headline: "Senior Frontend Engineer — Tech Lead Scope",
  location: "Based in Krakow, Poland",
  summary:
    "I help teams modernise frontend platforms, raise engineering quality, and ship scalable React applications. Fourteen years across FinTech, SaaS, CMS, and enterprise products — combining hands-on engineering with technical leadership, mentoring, and frontend education.",
  statuses: [
    { label: "Open to work", variant: "success" },
    { label: "Available for remote roles", variant: "primary" },
  ],
  highlights: [
    "14+ years building production React platforms",
    "20% perf gain refactoring legacy Ember.js at Monterosa",
    "500+ students trained over 8 years at IT Academy",
    "Manager-vouched by CTOs and Engineering Leads",
  ],
  cv: {
    label: "Download CV",
    fileUrl: "/files/yuri-semenenko-senior-frontend-engineer-cv.pdf",
    fileName: "yuri-semenenko-senior-frontend-engineer-cv.pdf",
  },
  seo: {
    title: "Yuri Semenenko — Senior Frontend Engineer & Tech Lead",
    description:
      "Senior Frontend Engineer with Tech Lead scope, based in Krakow. Building scalable React and Next.js platforms, improving engineering quality, and mentoring 500+ developers since 2017.",
    keywords: [
      "Yuri Semenenko",
      "Senior Frontend Engineer",
      "Tech Lead",
      "Frontend Architect",
      "React Engineer",
      "Next.js Engineer",
      "TypeScript Engineer",
      "Frontend Mentor",
      "Frontend Consultant",
      "Krakow",
    ],
  },
};
