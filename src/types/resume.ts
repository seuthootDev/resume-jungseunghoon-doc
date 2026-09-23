export type Lang = 'en' | 'ko';
export type ThemeMode = 'light' | 'dark';

export interface LocalizedText {
  en: string;
  ko: string;
}

export interface ExperienceItem {
  company: LocalizedText;
  date: string;
  role: LocalizedText;
  subtitle?: LocalizedText;
  bullets: LocalizedText[];
}

export interface SkillGroup {
  title: string;
  tags: string[];
}

export interface EducationItem {
  school: LocalizedText;
  major: LocalizedText;
  date: string;
  description: LocalizedText;
}

export interface CredentialItem {
  name: LocalizedText;
  issuer: LocalizedText;
  date: string;
}

export interface LanguageItem {
  name: LocalizedText;
  level: LocalizedText | string;
  certification?: string;
}

export interface CommunityItem {
  name: LocalizedText;
  organization: LocalizedText;
  hours: LocalizedText | string;
}

/** 인쇄(한국어)에만 표시되는 연봉 정보 — 빈 값은 인쇄에서 제외 */
export interface Compensation {
  currentSalary: string;
  bonus: string;
  benefits: string;
  desiredSalary: string;
}

export interface ResumeData {
  profile: {
    name: LocalizedText;
    subtitle: LocalizedText;
    summary: LocalizedText;
    photo: string;
    email: string;
    location: LocalizedText;
    links: { label: string; href: string; icon: 'web' | 'github' | 'linkedin' }[];
  };
  sections: {
    experience: LocalizedText;
    skills: LocalizedText;
    education: LocalizedText;
    credentials: LocalizedText;
    language: LocalizedText;
    languageLevel: LocalizedText;
    languageCert: LocalizedText;
    community: LocalizedText;
  };
  experience: ExperienceItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  credentials: CredentialItem[];
  languages: LanguageItem[];
  community: CommunityItem[];
  compensation: Compensation;
}
