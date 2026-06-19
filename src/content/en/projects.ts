import type { ProjectItemModel } from "../types";

export const projects: ProjectItemModel[] = [
  {
    title: "Legacy CMS Migration Platform",
    company: "StoneX",
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
    company: "Epam Systems",
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
    company: "Belitsoft",
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
