import type { ExperienceItemModel } from "../types";

export const experience: ExperienceItemModel[] = [
  {
    company: "StoneX",
    role: "Front-end Developer",
    period: { start: "2024-11", end: "2025-11", label: "Nov 2024 — Nov 2025" },
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
    period: { start: "2023-11", end: "2024-09", label: "Nov 2023 — Sep 2024" },
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
    period: { start: "2019-01", end: "2023-09", label: "Jan 2019 — Sep 2023" },
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
    period: { start: "2014-08", end: "2018-12", label: "Aug 2014 — Dec 2018" },
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
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Drupal",
      "CKEditor API",
      "Animations",
      "Testing",
    ],
  },
  {
    company: "EPAM Systems",
    role: "Front-end Developer",
    period: { start: "2013-12", end: "2014-08", label: "Dec 2013 — Aug 2014" },
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
    period: { start: "2012-04", end: "2013-12", label: "Apr 2012 — Dec 2013" },
    summary:
      "Developed websites of different complexity levels and supported an Australian online store.",
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
    period: { start: "2011-07", end: "2013-04", label: "Jul 2011 — Apr 2013" },
    summary:
      "Early frontend engineering role focused on markup, styling, JavaScript, and delivery of web interfaces.",
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
