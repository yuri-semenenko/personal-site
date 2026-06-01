export type Locale = "en" | "ru" | "pl" | "by";

export type Theme = "light" | "dark" | "system";

export type SocialType = "email" | "linkedin" | "github" | "telegram" | "location" | "mentoring";

export type SkillLevel = "basic" | "intermediate" | "advanced" | "expert";

export type ProjectVisibility = "public" | "nda" | "archived" | "internal";

export type WorkMode = "remote" | "hybrid" | "onsite";

export interface SeoModel {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export interface BadgeModel {
  label: string;
  variant?: "default" | "primary" | "secondary" | "success" | "muted";
}

export interface LinkModel {
  label: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
}

export interface ProfileModel {
  name: string;
  headline: string;
  location: string;
  summary: string;
  statuses: BadgeModel[];
  highlights: string[];
  cv: {
    label: string;
    fileUrl: string;
    fileName: string;
  };
  seo: SeoModel;
}

export interface ContactItemModel {
  type: SocialType;
  label: string;
  value: string;
  href?: string;
  visible: boolean;
  external?: boolean;
  ariaLabel: string;
}

export interface ContactsModel {
  title: string;
  description: string;
  items: ContactItemModel[];
}

export interface NavigationItemModel {
  label: string;
  href: string;
  sectionId?: string;
  external?: boolean;
}

export interface NavigationModel {
  logo: string;
  items: NavigationItemModel[];
  actions: LinkModel[];
}

export interface PeriodModel {
  start: string;
  end: string;
  label: string;
}

export interface ExperienceItemModel {
  company: string;
  role: string;
  period: PeriodModel;
  location?: string;
  type?: "full-time" | "part-time" | "contract" | "freelance";
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  links?: LinkModel[];
  featured?: boolean;
}

export interface TeachingItemModel {
  organization: string;
  role: string;
  period: PeriodModel;
  summary: string;
  courses: string[];
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  links?: LinkModel[];
}

export interface SkillItemModel {
  name: string;
  level?: SkillLevel;
  featured?: boolean;
}

export type SkillGroupEmphasis = "core" | "standard" | "muted" | "languages";

export interface SkillGroupModel {
  title: string;
  description?: string;
  emphasis?: SkillGroupEmphasis;
  collapsible?: boolean;
  items: SkillItemModel[];
}

export interface EducationItemModel {
  institution: string;
  faculty?: string;
  department?: string;
  period: PeriodModel;
  description?: string;
}

export interface ProjectItemModel {
  title: string;
  company?: string;
  period?: string;
  visibility: ProjectVisibility;
  summary: string;
  role: string;
  responsibilities: string[];
  impact: string[];
  technologies: string[];
  links?: LinkModel[];
  badges?: BadgeModel[];
  featured?: boolean;
}

export interface CertificationModel {
  title: string;
  issuer: string;
  issued: string;
  issuedLabel: string;
  expires?: string;
  expiresLabel?: string;
  credentialUrl?: string;
  skills?: string[];
}

export type TestimonialRelationship = "direct-manager" | "peer" | "cross-functional" | "mentee";

export interface TestimonialModel {
  quote: string;
  author: string;
  role: string;
  relationship: TestimonialRelationship;
  relationshipLabel: string;
  date: string;
  sourceUrl?: string;
}

export type LeadershipStoryStatus = "ongoing" | "delivered";

export interface LeadershipStoryModel {
  title: string;
  organization: string;
  status: LeadershipStoryStatus;
  context: string;
  action: string;
  outcome: string;
}

export interface PrincipleModel {
  title: string;
  body: string;
}

export interface MentoringModel {
  title: string;
  description: string;
  platform: string;
  cta: {
    label: string;
    href: string;
    ariaLabel: string;
  };
  topics: string[];
}

export interface LocaleContent {
  profile: ProfileModel;
  contacts: ContactsModel;
  navigation: NavigationModel;
  experience: ExperienceItemModel[];
  teaching: TeachingItemModel[];
  mentoring: MentoringModel;
  skills: SkillGroupModel[];
  education: EducationItemModel[];
  projects: ProjectItemModel[];
  certifications: CertificationModel[];
  testimonials: TestimonialModel[];
  leadership: LeadershipStoryModel[];
  principles: PrincipleModel[];
}
