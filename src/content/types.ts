export type Locale = "en" | "ru" | "pl" | "be";

export type BadgeVariant = "default" | "primary" | "secondary" | "success" | "muted";

export type StatusKey =
  | "open-to-work"
  | "open-to-projects"
  | "open-to-offers"
  | "not-looking"
  | "available-remote"
  | "available-hybrid"
  | "available-onsite"
  | "consulting"
  | "freelance"
  | "mentoring"
  | "relocatable";

export interface StatusEntry {
  key: StatusKey;
  enabled: boolean;
}

export type Theme = "light" | "dark" | "system";

export type SocialType = "email" | "linkedin" | "github" | "telegram" | "location" | "mentoring";

export interface SeoModel {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

export interface BadgeModel {
  label: string;
  variant?: BadgeVariant;
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
  /** Concise role for structured data (schema.org jobTitle); not the long headline. */
  jobTitle: string;
  location: string;
  summary: string;
  statuses: StatusEntry[];
  highlights: string[];
  /** Data rendered inside the decorative hero code card. */
  codeCard: {
    fileName: string;
    role: string;
    also: string;
    location: string;
    focus: string[];
  };
  cv: {
    label: string;
    ariaLabel: string;
    fileUrl: string;
    fileName: string;
  };
  cta: {
    contact: string;
    experience: string;
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
  label: string;
}

export interface ExperienceItemModel {
  company: string;
  role: string;
  period: PeriodModel;
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
  /** Headline stat for the section card (e.g. "500+" / "Students trained"). */
  stat?: {
    value: string;
    label: string;
  };
  courses: string[];
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  links?: LinkModel[];
}

export interface SkillItemModel {
  name: string;
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

export interface SectionHeadingModel {
  eyebrow: string;
  title: string;
}

/** UI chrome copy: section headings, micro-labels, and a11y strings. */
export interface UiModel {
  sections: {
    about: SectionHeadingModel;
    experience: SectionHeadingModel;
    leadership: SectionHeadingModel;
    projects: SectionHeadingModel;
    principles: SectionHeadingModel;
    teaching: SectionHeadingModel;
    testimonials: SectionHeadingModel;
    skills: SectionHeadingModel;
    certifications: SectionHeadingModel;
    education: SectionHeadingModel;
    /** Contact title comes from `contacts.title`; only the eyebrow lives here. */
    contact: Pick<SectionHeadingModel, "eyebrow">;
  };
  labels: {
    highlights: string;
    outcome: string;
    role: string;
    context: string;
    action: string;
    impact: string;
    principle: string;
    courses: string;
    topics: string;
    viewCredential: string;
  };
  statusLabels: Record<StatusKey, string>;
  leadershipStatus: Record<LeadershipStoryStatus, string>;
  testimonialsNote: {
    prefix: string;
    linkLabel: string;
    suffix: string;
  };
  localeSwitcher: {
    /** aria-label for the switcher nav landmark. */
    ariaLabel: string;
    /** Short display names keyed by locale (e.g. "EN", "RU"). */
    names: Record<Locale, string>;
  };
  viewMode: {
    label: string;
    vertical: string;
    horizontal: string;
    switchToVertical: string;
    switchToHorizontal: string;
  };
  a11y: {
    primaryNav: string;
    mobileNav: string;
    openMenu: string;
    switchToLightTheme: string;
    switchToDarkTheme: string;
    /** Template; `{title}` is replaced with the credential title. */
    viewCredential: string;
  };
}

export interface LocaleContent {
  profile: ProfileModel;
  ui: UiModel;
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
