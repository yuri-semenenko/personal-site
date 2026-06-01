import type { CertificationModel } from "../types";

export const certifications: CertificationModel[] = [
  {
    title: "Secure SDLC",
    issuer: "SecureFlag",
    issued: "2026-03",
    issuedLabel: "Mar 2026",
    expires: "2027-03",
    expiresLabel: "Mar 2027",
    credentialUrl: "https://www.secureflag.com/s?fd01b0c8-2b1d-42b1-b53c-6ce28d97a3d6",
    skills: ["Software Development Life Cycle (SDLC)"],
  },
  {
    title: "OWASP Top 10:2021 in NodeJS with TypeScript",
    issuer: "SecureFlag",
    issued: "2025-04",
    issuedLabel: "Apr 2025",
    expires: "2026-04",
    expiresLabel: "Apr 2026",
    credentialUrl: "https://www.secureflag.com/s?f1307cb0-59c1-4c5e-af07-c4ce9e2ab6a3",
    skills: ["Web Application Security Assessment", "TypeScript", "Node.js"],
  },
];
