import { CaseStudy, ContentSection } from '@/types/case-study';
import { Project } from '@/lib/data';

// Helper function to convert CaseStudy to Project
export function toProject(caseStudy: CaseStudy): Project {
  return {
    ...caseStudy,
    frames: caseStudy.frames.map(frame => ({
      ...frame,
      content: {
        ...frame.content,
        sections: frame.content.sections?.filter((section): section is ContentSection => 'heading' in section)
      }
    }))
  };
}
