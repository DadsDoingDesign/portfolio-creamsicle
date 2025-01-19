export interface ContentBlock {
  type: 'paragraph' | 'bullet-list' | 'number-list' | 'stat' | 'quote';
  content: string | string[];
  highlight?: boolean;
}

export interface Frame {
  title: string;
  subtitle?: string;
  content: ContentBlock[];
  image: {
    src: string;
    alt: string;
    caption?: string;
  };
}

export const apploi = {
  id: 'apploi',
  title: 'Apploi',
  description: 'Apploi is building out a new staffing tool they just acquired (OnCall). Their goal is to help care facilities optimize their bottom line. But most users don\'t understand the tool without hand holding and extensive onboarding.',
  categories: ['Product Design', 'UX Research', 'UI Design'],
  previewImage: '/images/apploi-preview.png',
  frames: [
    {
      title: 'Why not?',
      subtitle: 'Understanding the Challenge',
      content: [
        {
          type: 'paragraph',
          content: 'Apploi is building out a new staffing tool they just acquired (OnCall). Their goal is to help care facilities optimize their bottom line. But most users don\'t understand the tool without hand holding and extensive onboarding.'
        },
        {
          type: 'bullet-list',
          content: [
            'Complex onboarding process',
            'User confusion with core features',
            'High support ticket volume',
            'Low user retention'
          ]
        }
      ],
      image: {
        src: '/images/apploi/why-not.png',
        alt: 'Apploi challenge visualization',
        caption: 'User journey pain points identified through research'
      }
    },
    {
      title: 'What\'s the impact',
      subtitle: 'Measurable Results',
      content: [
        {
          type: 'stat',
          content: '90% reduction in onboarding time',
          highlight: true
        },
        {
          type: 'stat',
          content: '85% decrease in support tickets',
          highlight: true
        },
        {
          type: 'bullet-list',
          content: [
            '8 new facilities added with existing clients',
            'Onboarding reduced to 1 day from 1 week',
            'Users had near perfect task completion'
          ]
        }
      ],
      image: {
        src: '/images/apploi/impact.png',
        alt: 'Impact metrics visualization'
      }
    },
    {
      title: 'The Process',
      subtitle: 'Our Approach',
      content: [
        {
          type: 'number-list',
          content: [
            'User Research',
            'Design Solutions',
            'Implementation'
          ]
        },
        {
          type: 'bullet-list',
          content: [
            'Conducted interviews with 20+ facilities',
            'Analyzed support ticket patterns',
            'Created user journey maps',
            'Identified key pain points'
          ]
        },
        {
          type: 'quote',
          content: 'The new interface has dramatically reduced our onboarding time and improved user satisfaction.',
          highlight: true
        }
      ],
      image: {
        src: '/images/apploi/process.png',
        alt: 'Process diagram',
        caption: 'Our iterative design and development process'
      }
    }
  ]
}
