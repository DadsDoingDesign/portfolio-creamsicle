'use client';

import { Project } from '@/lib/data';
import CaseStudyContainer from './CaseStudyContainer';

export default function CaseStudyPreview({ project }: { project: Project }) {
  return <CaseStudyContainer project={project} />;
}
