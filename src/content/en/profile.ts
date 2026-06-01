import type { ProfileModel } from "../types";

export const profile: ProfileModel = {
  name: "Yuri Semenenko",
  headline: "Senior Frontend Engineer, Mentor & Trainer — Tech Lead Scope",
  location: "Based in Krakow, Poland",
  summary:
    "I help teams modernise frontend platforms, raise engineering quality, and ship scalable React applications. Fourteen years across FinTech, SaaS, CMS, and enterprise products — combining hands-on engineering with technical leadership, mentoring, and frontend education.",
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
  cta: {
    contact: "Contact me",
    experience: "View experience",
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
