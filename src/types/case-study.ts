export interface TeamMember {
  role: string;
  highlight?: boolean;
}

export interface Timeline {
  phase: string;
  activity: string;
}

export interface ContentSection {
  heading?: string;
  text?: string;
  subtitle?: string;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
}

export interface CaseStudyContent {
  sections?: ContentSection[];
  bulletPoints?: string[];
  team?: TeamMember[];
  timeline?: Timeline[];
}

export interface CaseStudyFrame {
  type: 'intro' | 'problem' | 'solution' | 'impact' | 'metrics' | 'research';
  title: string;
  subtitle?: string;
  content: CaseStudyContent;
  layout?: 'left-image' | 'right-image' | 'full-width' | 'three-column';
  image?: CaseStudyImage;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  previewImage: string;
  categories: string[];
  frames: CaseStudyFrame[];
}
