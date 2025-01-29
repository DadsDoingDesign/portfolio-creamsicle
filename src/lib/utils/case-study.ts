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
        sections: frame.content.sections?.map(section => {
          if ('heading' in section) {
            // Preserve ContentSection as is
            return section;
          }
          // Convert BulletPointHeader to ContentSection format
          return {
            heading: '',  // Empty heading for bullet point headers
            text: '',    // Empty text for bullet point headers
            subtitle: section.subtitle, // Preserve the subtitle
            className: section.className // Preserve the className
          };
        }),
        // Convert complex bullet points to simple strings
        bulletPoints: frame.content.bulletPoints?.map(point => 
          typeof point === 'string' ? point : point.text
        )
      }
    }))
  };
}
