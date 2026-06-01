import type { MentoringModel } from "../types";

export const mentoring: MentoringModel = {
  title: "Book a Mentoring Session",
  description:
    "Open to mentoring sessions on frontend architecture, career progression, technical leadership, and React/Next.js. Booking via ADPList.",
  platform: "ADPList",
  cta: {
    label: "Book a Mentoring Session",
    href: "https://adplist.org/mentors/yuri-semenenko",
    ariaLabel: "Book a mentoring session with Yuri Semenenko on ADPList",
  },
  topics: [
    "Frontend Architecture",
    "React & Next.js",
    "Career Growth",
    "Interview Preparation",
    "Technical Leadership",
    "Code Reviews",
    "System Design",
    "Developer Experience",
  ],
};
