export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  description: string;
}

export interface TeamMember {
  role: string;
  highlight?: boolean;
}

export interface Timeline {
  phase: string;
  duration: string;
}

export interface CaseStudyFrame {
  type: 'intro' | 'problem' | 'metrics' | 'research' | 'solution' | 'impact';
  title?: string;
  subtitle?: string;
  content: {
    mainText?: string;
    metrics?: CaseStudyMetric[];
    bulletPoints?: string[];
    team?: TeamMember[];
    timeline?: Timeline[];
  };
  image?: CaseStudyImage;
  layout: 'left-image' | 'right-image' | 'full-width' | 'three-column';
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  previewImage: string;
  categories: string[];
  frames: CaseStudyFrame[];
}
