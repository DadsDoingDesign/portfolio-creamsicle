'use client';

import { Project } from '@/lib/data';
import CaseStudyContainer from './CaseStudyContainer';

interface CaseStudyPreviewProps {
  project: Project;
}

export function CaseStudyPreview({ project }: CaseStudyPreviewProps) {
  return <CaseStudyContainer project={project} />;
}
