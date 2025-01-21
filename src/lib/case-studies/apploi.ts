import { CaseStudy } from '@/types/case-study';

export const apploi: CaseStudy = {
  id: 'apploi',
  title: 'Apploi',
  description: 'Apploi is building out a new staffing tool they just acquired (OnCall). Their goal is to help care facilities optimize their bottom line. But most users don\'t understand the tool without hand holding and extensive onboarding.',
  categories: ['Product Design', 'UX Research', 'UI Design'],
  previewImage: '/images/apploi-preview.png',
  frames: [
    {
      type: 'intro',
      title: 'Why not?',
      subtitle: 'Understanding the Challenge',
      content: {
        mainText: 'Apploi is building out a new staffing tool they just acquired (OnCall). Their goal is to help care facilities optimize their bottom line. But most users don\'t understand the tool without hand holding and extensive onboarding.',
        bulletPoints: [
          'Complex onboarding process',
          'User confusion with core features',
          'High support ticket volume',
          'Low user retention'
        ]
      },
      image: {
        src: '/images/apploi/why-not.png',
        alt: 'Apploi challenge visualization',
        caption: 'User journey pain points identified through research'
      },
      layout: 'right-image'
    },
    {
      type: 'impact',
      title: 'What\'s the impact',
      subtitle: 'Measurable Results',
      content: {
        metrics: [
          {
            label: 'Reduction in Support Tickets',
            value: '45%',
            description: 'Fewer tickets related to basic functionality'
          },
          {
            label: 'Increase in User Retention',
            value: '30%',
            description: 'More users staying active after 3 months'
          },
          {
            label: 'Onboarding Time',
            value: '50%',
            description: 'Less time needed for user onboarding'
          }
        ]
      },
      layout: 'three-column'
    },
    {
      type: 'research',
      title: 'The Process',
      subtitle: 'User-Centered Approach',
      content: {
        mainText: 'Through extensive research and user interviews, we identified key pain points in the user journey.',
        bulletPoints: [
          'Conducted 20+ user interviews',
          'Analyzed support ticket patterns',
          'Created user journey maps',
          'Tested prototypes with users'
        ]
      },
      layout: 'full-width'
    }
  ]
};
