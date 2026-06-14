import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { getContent } from "@/content";
import { STATUS_CATALOG } from "@/content/statuses";
import type { LinkModel } from "@/content/types";

const content = getContent("en");

describe("Content invariants", () => {
  describe("navigation", () => {
    it("every item href and sectionId stay in sync", () => {
      for (const item of content.navigation.items) {
        if (item.external) continue;
        if (item.sectionId) {
          expect(item.href, `nav item "${item.label}" href`).toBe(`#${item.sectionId}`);
        } else {
          // No sectionId — should be a real route, anchor to top, or external. "#" alone is allowed.
          expect(item.href === "#" || item.href.startsWith("/"), `nav item "${item.label}" href`).toBe(true);
        }
      }
    });

    it("logo is non-empty", () => {
      expect(content.navigation.logo.trim()).not.toBe("");
    });

    it("primary action has a valid relative href and ariaLabel", () => {
      const action = content.navigation.actions[0];
      expect(action.href.startsWith("/")).toBe(true);
      expect(action.ariaLabel?.trim() ?? "").not.toBe("");
    });
  });

  describe("contacts", () => {
    it("external contacts use https:, mailto:, or tel: schemes", () => {
      for (const item of content.contacts.items) {
        if (!item.external) continue;
        expect(item.href, `contact "${item.label}" href`).toBeTruthy();
        expect(/^(https?:|mailto:|tel:)/.test(item.href!), `contact "${item.label}" scheme`).toBe(true);
      }
    });

    it("non-external contacts without href are non-actionable rows (e.g. location)", () => {
      for (const item of content.contacts.items) {
        if (item.external) continue;
        if (item.href === undefined) {
          // Allowed for read-only rows like "location".
          expect(item.value.trim()).not.toBe("");
        }
      }
    });

    it("every contact has a non-empty aria-label", () => {
      for (const item of content.contacts.items) {
        expect(item.ariaLabel.trim(), `contact "${item.label}" ariaLabel`).not.toBe("");
      }
    });

    it("contact types are unique", () => {
      const types = content.contacts.items.map((c) => c.type);
      expect(new Set(types).size).toBe(types.length);
    });
  });

  describe("profile", () => {
    it("every status key references the catalog", () => {
      for (const status of content.profile.statuses) {
        expect(STATUS_CATALOG[status.key], `status "${status.key}"`).toBeDefined();
      }
    });

    it("status keys are unique within the profile", () => {
      const keys = content.profile.statuses.map((s) => s.key);
      expect(new Set(keys).size).toBe(keys.length);
    });

    it("CV file is present on disk under public/files/", () => {
      const cvPath = resolve(process.cwd(), "public", content.profile.cv.fileUrl.replace(/^\//, ""));
      expect(existsSync(cvPath), `CV file at ${cvPath}`).toBe(true);
    });

    it("seo title, description, and at least one keyword are non-empty", () => {
      expect(content.profile.seo.title.trim()).not.toBe("");
      expect(content.profile.seo.description.trim()).not.toBe("");
      expect((content.profile.seo.keywords ?? []).length).toBeGreaterThan(0);
    });
  });

  describe("testimonials", () => {
    it("sourceUrl (when present) is https", () => {
      for (const t of content.testimonials) {
        if (!t.sourceUrl) continue;
        expect(t.sourceUrl.startsWith("https://"), `testimonial by ${t.author}`).toBe(true);
      }
    });
  });

  describe("status catalog", () => {
    it("every label is non-empty", () => {
      for (const [key, entry] of Object.entries(STATUS_CATALOG)) {
        expect(entry.label.trim(), `status "${key}" label`).not.toBe("");
      }
    });
  });

  describe("URL-bearing content fields", () => {
    const isHttps = (u: string) => u.startsWith("https://");
    const isLocal = (u: string) => u.startsWith("/") || u.startsWith("#");

    function checkLinks(links: LinkModel[] | undefined, where: string) {
      for (const link of links ?? []) {
        expect(link.href, `${where} link "${link.label}" href`).toBeTruthy();
        if (link.external) {
          expect(isHttps(link.href), `${where} link "${link.label}" external scheme`).toBe(true);
        } else {
          expect(isLocal(link.href), `${where} link "${link.label}" local scheme`).toBe(true);
        }
      }
    }

    it("experience, teaching, and project links are https when external, local otherwise", () => {
      content.experience.forEach((e, i) => checkLinks(e.links, `experience[${i}] ${e.company}`));
      content.teaching.forEach((t, i) => checkLinks(t.links, `teaching[${i}] ${t.organization}`));
      content.projects.forEach((p, i) => checkLinks(p.links, `projects[${i}] ${p.title}`));
    });

    it("certification credentialUrl (when present) is https", () => {
      for (const c of content.certifications) {
        if (!c.credentialUrl) continue;
        expect(isHttps(c.credentialUrl), `certification "${c.title}" credentialUrl`).toBe(true);
      }
    });

    it("mentoring CTA href is https or a local path", () => {
      const { href, label } = content.mentoring.cta;
      expect(href, `mentoring cta "${label}" href`).toBeTruthy();
      expect(isHttps(href) || isLocal(href), `mentoring cta "${label}" scheme`).toBe(true);
    });

    it("profile CV fileUrl is a root-relative local path", () => {
      expect(content.profile.cv.fileUrl.startsWith("/"), "profile.cv.fileUrl").toBe(true);
    });

    it("profile seo ogImage and canonicalUrl (when present) are https or local", () => {
      const { ogImage, canonicalUrl } = content.profile.seo;
      if (ogImage) expect(isHttps(ogImage) || isLocal(ogImage), "seo.ogImage").toBe(true);
      if (canonicalUrl) expect(isHttps(canonicalUrl) || isLocal(canonicalUrl), "seo.canonicalUrl").toBe(true);
    });
  });
});
