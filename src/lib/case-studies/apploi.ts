import { CaseStudy } from '@/types/case-study';

export const apploi: CaseStudy = {
  id: 'apploi',
  title: 'Apploi OnCall',
  description: 'Redesigning the staffing experience for healthcare facilities',
  previewImage: '/images/apploi/preview.png',
  categories: ['Product Design', 'UX Research', 'UI Design'],
  className: 'case-study-container',
  frames: [
    {
      type: 'intro',
      title: 'Apploi OnCall',
      subtitle: 'Understanding the Challenge',
      className: 'case-study-frame case-study-frame--intro',
      content: {
        sections: [
          {
            heading: 'The Challenge',
            text: 'Apploi is building out a new staffing tool they just acquired (OnCall). Their goal is to help care facilities optimize their bottom line. But most users don\'t understand the tool without hand holding and extensive onboarding.',
            className: 'case-study-section'
          }
        ],
        bulletPoints: [
          { text: 'Complex onboarding process', className: 'case-study-bullet-point' },
          { text: 'User confusion with core features', className: 'case-study-bullet-point' },
          { text: 'Low adoption rate', className: 'case-study-bullet-point' },
          { text: 'High support ticket volume', className: 'case-study-bullet-point' }
        ],
        team: [
          { role: 'Product Designer', highlight: true, className: 'case-study-team-member case-study-team-member--highlight' },
          { role: 'Product Manager', className: 'case-study-team-member' },
          { role: 'Engineering Lead', className: 'case-study-team-member' },
          { role: 'Frontend Engineer', className: 'case-study-team-member' }
        ],
        timeline: [
          { phase: 'Research', activity: '2 weeks', className: 'case-study-timeline-item' },
          { phase: 'Design', activity: '4 weeks', className: 'case-study-timeline-item' },
          { phase: 'Development', activity: '6 weeks', className: 'case-study-timeline-item' }
        ]
      },
      layout: 'full-width',
      layoutClassName: 'case-study-layout--full-width'
    },
    {
      type: 'research',
      title: 'Understanding Users',
      className: 'case-study-frame case-study-frame--research',
      content: {
        sections: [
          {
            heading: 'Research Findings',
            text: 'Through user interviews and analytics, we identified several key pain points in the current workflow.',
            className: 'case-study-section'
          }
        ],
        bulletPoints: [
          { text: 'Users struggle with the initial setup', className: 'case-study-bullet-point' },
          { text: 'Core features are not intuitive', className: 'case-study-bullet-point' },
          { text: 'Workflow is too complex', className: 'case-study-bullet-point' },
          { text: 'Important information is hard to find', className: 'case-study-bullet-point' }
        ]
      },
      layout: 'right-image',
      layoutClassName: 'case-study-layout--right-image',
      image: {
        src: '/images/apploi/research.png',
        alt: 'Research findings and user insights',
        className: 'case-study-image'
      }
    },
    {
      type: 'solution',
      title: 'The Solution',
      className: 'case-study-frame case-study-frame--solution',
      content: {
        sections: [
          {
            heading: 'Our Approach',
            text: 'We redesigned the core workflow to be more intuitive and user-friendly, while maintaining all the powerful features that make OnCall valuable.',
            className: 'case-study-section'
          }
        ],
        bulletPoints: [
          { text: 'Simplified onboarding flow', className: 'case-study-bullet-point' },
          { text: 'Redesigned navigation', className: 'case-study-bullet-point' },
          { text: 'Clear status indicators', className: 'case-study-bullet-point' },
          { text: 'Contextual help system', className: 'case-study-bullet-point' }
        ]
      },
      layout: 'left-image',
      layoutClassName: 'case-study-layout--left-image',
      image: {
        src: '/images/apploi/solution.png',
        alt: 'Solution mockups and design iterations',
        className: 'case-study-image'
      }
    },
    {
      type: 'impact',
      title: 'The Impact',
      className: 'case-study-frame case-study-frame--impact',
      content: {
        sections: [
          {
            heading: 'Results',
            text: 'The redesigned OnCall platform has significantly improved user adoption and satisfaction.',
            className: 'case-study-section'
          }
        ],
        bulletPoints: [
          { text: '45% reduction in support tickets', className: 'case-study-bullet-point' },
          { text: '72% increase in user activation', className: 'case-study-bullet-point' },
          { text: '89% positive feedback from new users', className: 'case-study-bullet-point' },
          { text: '3x increase in feature adoption', className: 'case-study-bullet-point' }
        ]
      },
      layout: 'full-width',
      layoutClassName: 'case-study-layout--full-width',
      image: {
        src: '/images/apploi/impact.png',
        alt: 'Impact metrics and results',
        className: 'case-study-image'
      }
    }
  ]
};
