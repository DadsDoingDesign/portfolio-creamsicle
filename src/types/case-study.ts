export interface TeamMember {
  role: string;
  highlight?: boolean;
  className?: string;
}

export interface Timeline {
  phase: string;
  activity: string;
  className?: string;
}

export interface ContentSection {
  heading: string;
  text: string;
  subtitle?: string;
  className?: string;
}

export interface BulletPointHeader {
  subtitle: string;
  className?: string;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
  className?: string;
}

export interface CaseStudyContent {
  sections?: (ContentSection | BulletPointHeader)[];
  bulletPoints?: (string | { text: string; className?: string })[];
  team?: TeamMember[];
  timeline?: Timeline[];
  className?: string;
}

export interface CaseStudyFrame {
  type: 'intro' | 'problem' | 'solution' | 'impact' | 'metrics' | 'research';
  title: string;
  subtitle?: string;
  content: CaseStudyContent;
  layout?: 'left-image' | 'right-image' | 'full-width' | 'three-column';
  image?: CaseStudyImage;
  className?: string;
  layoutClassName?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  previewImage: string;
  categories: string[];
  frames: CaseStudyFrame[];
  className?: string;
}
