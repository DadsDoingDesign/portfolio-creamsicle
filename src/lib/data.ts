import { Frame } from './case-studies/apploi';

export interface Project {
  id: string;
  title: string;
  description: string;
  previewImage: string;
  frames: Frame[];
  categories: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Apploi',
    description: 'Healthcare recruitment platform revolutionizing the hiring process',
    previewImage: '/case-studies/apploi/preview.png',
    categories: ['Product Design', 'UX Research', 'UI Design'],
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
          caption: 'Key pain points in the user journey'
        }
      },
      {
        title: 'What\'s the impact',
        subtitle: 'Measurable Results',
        content: [
          {
            type: 'paragraph',
            content: 'Our solutions led to significant improvements across all key metrics:'
          },
          {
            type: 'bullet-list',
            content: [
              '8 new facilities added with existing clients',
              'Onboarding reduced to 1 day from 1 week',
              'Users had near perfect task completion',
              'Support tickets reduced by 60%'
            ]
          }
        ],
        image: {
          src: '/images/apploi/impact.png',
          alt: 'Apploi impact metrics',
          caption: 'Key performance improvements after implementation'
        }
      },
      {
        title: 'The Process',
        subtitle: 'User-Centered Design',
        content: [
          {
            type: 'paragraph',
            content: 'Through extensive user research and iterative design, we identified key pain points in the user journey and developed intuitive solutions that drastically reduced the learning curve.'
          },
          {
            type: 'number-list',
            content: [
              'User Research',
              'Journey Mapping',
              'Iterative Design',
              'Usability Testing'
            ]
          }
        ],
        image: {
          src: '/images/apploi/process.png',
          alt: 'Apploi design process',
          caption: 'Our systematic approach to improving the user experience'
        }
      }
    ]
  },
  {
    id: '2',
    title: 'Umba',
    description: 'Using analytics to incentivize user behavior with secondary product features to drive business KPIs',
    previewImage: '/case-studies/umba/preview.png',
    categories: ['Product Strategy', 'Analytics', 'UX Design'],
    frames: [
      {
        title: 'The Challenge',
        subtitle: 'Understanding the Problem',
        content: [
          {
            type: 'paragraph',
            content: 'Umba needed to increase user engagement with secondary features that were crucial for business growth.'
          },
          {
            type: 'bullet-list',
            content: [
              'Low adoption of key features',
              'Unclear user incentives',
              'Disconnected user journey',
              'Limited analytics insights'
            ]
          }
        ],
        image: {
          src: '/images/umba/challenge.png',
          alt: 'Umba challenge visualization',
          caption: 'Key challenges identified through research'
        }
      },
      {
        title: 'The Approach',
        subtitle: 'Data-Driven Strategy',
        content: [
          {
            type: 'paragraph',
            content: 'We developed a data-driven strategy to understand and influence user behavior.'
          },
          {
            type: 'number-list',
            content: [
              'Analytics Implementation',
              'Behavioral Analysis',
              'Incentive Design'
            ]
          }
        ],
        image: {
          src: '/images/umba/approach.png',
          alt: 'Umba approach diagram',
          caption: 'Our systematic approach to solving the engagement challenge'
        }
      },
      {
        title: 'The Results',
        subtitle: 'Measurable Impact',
        content: [
          {
            type: 'paragraph',
            content: 'The implementation led to significant improvements across all key metrics:'
          },
          {
            type: 'bullet-list',
            content: [
              '65% increase in feature adoption',
              '40% higher user engagement',
              '35% improvement in retention',
              '50% increase in key business KPIs'
            ]
          }
        ],
        image: {
          src: '/images/umba/results.png',
          alt: 'Umba results visualization',
          caption: 'Key results and long-term impact'
        }
      }
    ]
  }
] as const;
