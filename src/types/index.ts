export interface NavLink {
  label: string;
  href: string;
  /** Hidden below the `sm` breakpoint to keep the mobile header compact. */
  hideOnMobile?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "x" | "linkedin" | "github";
}

export interface Highlight {
  title: string;
  description: string;
}

export interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface CertBadge {
  name: string;
  src: string;
  width: number;
  height: number;
  /** Optional verification link (e.g. Credly). */
  href?: string;
}

export interface EducationEntry {
  degree: string;
  institute: string;
  duration: string;
  performance: string;
  /** Image beside the card. Without `src`, a labelled placeholder is shown. */
  media?: { src?: string; label: string };
}

export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  /** Company logo path. Without it, a placeholder slot is shown. */
  logo?: string;
  /** Short summary shown when there are no bullet points. */
  description?: string;
  highlights?: string[];
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  year: string;
  detail?: string;
  /** Issuer logo path, shown on a white tile. */
  logo?: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
  /** Tag colour for the whole group. */
  color: string;
}

export interface AboutData {
  aboutMe: string[];
  education: EducationEntry[];
  hardSkills: SkillGroup[];
  experience: ExperienceEntry[];
  certifications: CertificationEntry[];
}

export interface AboutSectionMeta {
  /** DOM id of the section and key for the side navigation. */
  id: string;
  title: string;
}

export interface Project {
  name: string;
  image: { src: string; width: number; height: number };
  /** Rendered after the bold project name, e.g. "is a desktop app that...". */
  description: string;
  repo: string;
  tech: { frontend: string[]; backend: string[] };
  achievement?: string;
}
