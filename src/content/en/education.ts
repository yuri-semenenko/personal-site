import type { EducationItemModel } from "../types";

export const education: EducationItemModel[] = [
  {
    institution: "Belarusian State University of Informatics and Radioelectronics",
    faculty: "Faculty of Information Technologies and Management",
    department: "Artificial Intelligence",
    period: { start: "2002", end: "2007", label: "2002 — 2007" },
    description:
      "Five-year specialist degree (graduate) in Artificial Intelligence.",
  },
  {
    institution: "Belarusian National Technical University",
    faculty: "Institute of Improvement of Professional Skills and Staff Retraining",
    department: "Web Design and Computer Graphics",
    period: { start: "2008", end: "2010", label: "2008 — 2010" },
    description:
      "Professional retraining programme in Web Design and Computer Graphics.",
  },
];
