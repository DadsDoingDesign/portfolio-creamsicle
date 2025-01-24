import { CaseStudy } from '@/types/case-study';

export const apploi: CaseStudy = {
  id: 'apploi',
  title: 'Apploi OnCall',
  description: 'Redesigning the staffing experience for healthcare facilities',
  previewImage: '/images/apploi/preview.png',
  categories: ['Product Design', 'UX Research', 'UI Design'],
  frames: [
    {
      type: 'intro',
      title: 'Apploi OnCall',
      subtitle: 'Understanding the Challenge',
      content: {
        sections: [
          {
            heading: 'The Challenge',
            text: 'Apploi is building out a new staffing tool they just acquired (OnCall). Their goal is to help care facilities optimize their bottom line. But most users don\'t understand the tool without hand holding and extensive onboarding.'
          }
        ],
        bulletPoints: [
          'Complex onboarding process',
          'User confusion with core features',
          'Low adoption rate',
          'High support ticket volume'
        ],
        team: [
          { role: 'Product Designer', highlight: true },
          { role: 'Product Manager' },
          { role: 'Engineering Lead' },
          { role: 'Frontend Engineer' }
        ],
        timeline: [
          { phase: 'Research', activity: '2 weeks' },
          { phase: 'Design', activity: '4 weeks' },
          { phase: 'Development', activity: '6 weeks' }
        ]
      },
      layout: 'full-width'
    },
    {
      type: 'research',
      title: 'Understanding Users',
      content: {
        sections: [
          {
            heading: 'Research Findings',
            text: 'Through user interviews and analytics, we identified several key pain points in the current workflow.'
          }
        ],
        bulletPoints: [
          'Users struggle with the initial setup',
          'Core features are not intuitive',
          'Workflow is too complex',
          'Important information is hard to find'
        ]
      },
      layout: 'right-image',
      image: {
        src: '/images/apploi/research.png',
        alt: 'Research findings and user insights'
      }
    },
    {
      type: 'solution',
      title: 'The Solution',
      content: {
        sections: [
          {
            heading: 'Our Approach',
            text: 'We redesigned the core workflow to be more intuitive and user-friendly, while maintaining all the powerful features that make OnCall valuable.'
          }
        ],
        bulletPoints: [
          'Simplified onboarding flow',
          'Redesigned navigation',
          'Clear status indicators',
          'Contextual help system'
        ]
      },
      layout: 'left-image',
      image: {
        src: '/images/apploi/solution.png',
        alt: 'Solution mockups and design iterations'
      }
    },
    {
      type: 'impact',
      title: 'The Impact',
      content: {
        sections: [
          {
            heading: 'Results',
            text: 'The redesigned OnCall platform has significantly improved user adoption and satisfaction.'
          }
        ],
        bulletPoints: [
          '45% reduction in support tickets',
          '72% increase in user activation',
          '89% positive feedback from new users',
          '3x increase in feature adoption'
        ]
      },
      layout: 'full-width',
      image: {
        src: '/images/apploi/impact.png',
        alt: 'Impact metrics and results'
      }
    }
  ]
};
