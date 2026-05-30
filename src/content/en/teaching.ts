import type { TeachingItemModel } from "../types";

export const teaching: TeachingItemModel[] = [
  {
    organization: "IT-Academy.by",
    role: "Trainer of Front-end Development Courses",
    period: { start: "2017-04", end: "2025-07", label: "Apr 2017 — Jul 2025" },
    summary:
      "Conducted frontend development courses, mentored students, and supported a learning community focused on HTML, CSS, JavaScript, and web application development.",
    courses: [
      "Web Development with HTML, CSS, and JavaScript",
      "Web Application Development with JavaScript",
    ],
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
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Frontend Development",
      "Mentoring",
    ],
  },
];
