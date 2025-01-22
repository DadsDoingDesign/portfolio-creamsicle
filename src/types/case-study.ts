export interface TeamMember {
  role: string;
  highlight?: boolean;
}

export interface Timeline {
  phase: string;
  activity: string;
}

export interface ContentSection {
  heading: string;
  text: string;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
}

export interface CaseStudyContent {
  sections?: ContentSection[];
  team?: TeamMember[];
  timeline?: Timeline[];
  bulletPoints?: string[];
}

export interface CaseStudyFrame {
  type: 'intro' | 'problem' | 'solution' | 'impact' | 'metrics' | 'research';
  title: string;
  subtitle?: string;
  content: CaseStudyContent;
  image?: CaseStudyImage;
  layout?: 'left-image' | 'right-image' | 'full-width' | 'three-column';
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  previewImage: string;
  categories: string[];
  frames: CaseStudyFrame[];
}
