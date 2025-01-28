'use client';

import { Project } from '@/lib/data';
import CaseStudyContainer from './CaseStudyContainer';

interface CaseStudyPreviewProps {
  project: Project;
}

export default function CaseStudyPreview({ project }: CaseStudyPreviewProps) {
  return <CaseStudyContainer project={project} />;
}
