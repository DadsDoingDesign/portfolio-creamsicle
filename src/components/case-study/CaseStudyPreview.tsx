'use client';

import { Project } from '@/lib/data';
import { CaseStudyFrame } from '@/types/case-study';
import CaseStudyContainer from './CaseStudyContainer';

interface CaseStudyPreviewProps {
  project: Project;
  frames: CaseStudyFrame[];
  isOpen: boolean;
  onClose: () => void;
  onViewCaseStudy?: (viewing: boolean) => void;
}

export default function CaseStudyPreview(props: CaseStudyPreviewProps) {
  return <CaseStudyContainer {...props} />;
}
