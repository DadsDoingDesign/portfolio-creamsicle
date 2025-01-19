import { Frame, ContentBlock } from './apploi';

export const umba = {
  id: 'umba',
  title: 'Umba',
  description: 'Using analytics to incentivize user behavior with secondary product features to drive business KPIs',
  categories: ['Product Strategy', 'Analytics', 'UX Design'],
  previewImage: '/images/umba-preview.png',
  frames: [
    {
      title: 'The Challenge',
      subtitle: 'Understanding the Problem',
      content: [
        {
          type: 'paragraph',
          content: 'Umba needed to increase user engagement with secondary features that were crucial for business growth. The main challenges were:'
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
        caption: 'Key challenges identified through user research'
      }
    },
    {
      title: 'The Approach',
      subtitle: 'Data-Driven Strategy',
      content: [
        {
          type: 'paragraph',
          content: 'We developed a data-driven strategy to understand and influence user behavior:'
        },
        {
          type: 'number-list',
          content: [
            'Analytics Implementation',
            'Behavioral Analysis',
            'Incentive Design'
          ]
        },
        {
          type: 'bullet-list',
          content: [
            'Set up comprehensive tracking',
            'Identified key metrics',
            'Created user segments',
            'Established baselines',
            'User flow mapping',
            'Drop-off point identification',
            'Feature usage patterns',
            'Engagement metrics',
            'Reward system development',
            'Progress visualization',
            'Achievement unlocks',
            'Social proof elements'
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
      title: 'The Solution',
      subtitle: 'Cohesive User Experience',
      content: [
        {
          type: 'paragraph',
          content: 'Our solution focused on creating a cohesive user experience that naturally guided users to key features:'
        },
        {
          type: 'number-list',
          content: [
            'User Interface Updates',
            'Engagement Features',
            'Analytics Integration'
          ]
        },
        {
          type: 'bullet-list',
          content: [
            'Redesigned navigation',
            'Enhanced visibility of key features',
            'Added progress indicators',
            'Implemented rewards dashboard',
            'Achievement system',
            'Progress tracking',
            'Social sharing',
            'Personalized recommendations',
            'Real-time tracking',
            'A/B testing framework',
            'User behavior analysis',
            'Performance monitoring'
          ]
        }
      ],
      image: {
        src: '/images/umba/solution.png',
        alt: 'Umba solution showcase',
        caption: 'The redesigned interface with enhanced engagement features'
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
        },
        {
          type: 'paragraph',
          content: 'Long-term Impact:'
        },
        {
          type: 'bullet-list',
          content: [
            'Sustainable user growth',
            'Reduced acquisition costs',
            'Improved user satisfaction',
            'Higher lifetime value'
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
} as const;
