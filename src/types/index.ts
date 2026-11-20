// =============================================================================
// SHARED TYPES — Portfolio Data Interfaces
// =============================================================================

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  year: number;
  featured?: boolean;
  overview: string;
  problem: string;
  solution: string;
  architecture?: string[];
  keyFeatures: string[];
  implementation: string[];
  contributions: string[];
  technologies: string[];
  image?: string;
  logo?: string;
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  period: string;
  location?: string;
  type: 'Internship' | 'Full-time' | 'Education' | 'Fellowship';
  logo?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  icon?: string;
  description: string;
  practicalUsage: string;
  relatedProjects?: string[];
}

export type SkillCategory =
  | 'Languages'
  | 'Frontend'
  | 'Mobile'
  | 'Backend'
  | 'Databases'
  | 'AI / ML'
  | 'Computer Vision'
  | 'Cloud & DevOps'
  | 'Tools & Platforms'
  | 'Design';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  image?: string;
  pdfUrl?: string;
  category?: 'nptel' | 'professional' | 'hackathon' | 'foundational';
  grade?: 'Elite + Gold' | 'Elite + Silver' | 'Elite' | 'Completion' | 'Certificate of Achievement' | 'Certificate of Participation' | 'Qualified' | 'Verified';
  medal?: 'gold' | 'silver' | 'bronze' | 'elite';
  verified?: boolean;
}

export interface TechnologyInterest {
  category: string;
  items: string[];
  description: string;
  icon?: string;
}

export interface LinkedInPost {
  id: string;
  date: string;
  content: string;
  url: string;
  likes?: number;
  comments?: number;
  mediaUrl?: string;
  mediaType?: 'image' | 'article';
}

export interface PersonalInfo {
  name: string;
  monogram: string;
  avatarUrl?: string;
  title: string;
  subtitle: string;
  headline: string[];
  bio: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  interests: string[];
  techInterests: TechnologyInterest[];
  languages: { language: string; proficiency: string }[];
  status: {
    available: boolean;
    label: string;
  };
}
