import { CaseStudy } from '@/types/case-study';

export const umba: CaseStudy = {
  id: 'umba',
  title: 'Umba',
  description: 'Why not?',
  previewImage: '/case-studies/umba/umba_image_frame_1.png',
  categories: ['Product Strategy', 'Analytics', 'UX Design'],
  frames: [
    {
      type: 'intro',
      title: 'Umba',
      subtitle: 'Why not?',
      content: {
        mainText: "With a stricter approval target on the lending algorithm, many new and existing users were getting declined for loan applications. This lead to most new users dropping off shortly after the loan decline. I was tasked with finding a way to reduce this dropoff.",
        team: [
          { role: 'Product Designer', highlight: true },
          { role: 'Product Manager' },
          { role: '2 Engineers' },
          { role: 'Data Analyst' },
          { role: 'QA Analyst' }
        ],
        timeline: [
          { phase: 'Week 1', duration: 'Design' },
          { phase: 'Week 2', duration: 'Develop' },
          { phase: 'Week 3', duration: 'QA & Launch' }
        ]
      },
      image: {
        src: '/case-studies/umba/umba_image_frame_1.png',
        alt: 'Umba app interface showing balance, account details, and transaction history'
      },
      layout: 'right-image'
    },
    {
      type: 'problem',
      title: 'The Challenge',
      subtitle: 'Understanding the Problem',
      content: {
        mainText: "Umba needed to increase user engagement with secondary features that were crucial for business growth.",
        bulletPoints: [
          'Low adoption of key features',
          'Unclear user incentives',
          'Disconnected user journey',
          'Limited analytics insights'
        ]
      },
      image: {
        src: '/case-studies/umba/umba_image_frame_2.png',
        alt: 'Visualization of key challenges identified through research'
      },
      layout: 'right-image'
    },
    {
      type: 'metrics',
      title: 'Creating alignment between the users, business, and product',
      content: {
        metrics: [
          {
            label: "What's important to users",
            value: "Clear Path",
            description: "Have a clear path for how to get a loan."
          },
          {
            label: "What's important to the business",
            value: "Risk Management",
            description: "Curbing risky loans through the ML based algorithm."
          },
          {
            label: "What's important for the product",
            value: "Trust",
            description: "Build and keep trust with users through reliable service."
          }
        ],
        bulletPoints: [
          'Users voice there concerns in reviews, to customer support, and during interviews',
          'The business metrics are set during leadership meetings to align with investors',
          'Product works cross team to determine what is indicative of a good experience'
        ]
      },
      layout: 'three-column'
    },
    {
      type: 'research',
      title: 'Testing user motivations',
      subtitle: 'What are people willing to do?',
      content: {
        mainText: "With a fake door test we were able to see what users were most inclined to interact with when if came to growing their loan eligibility.",
        bulletPoints: [
          'Users are interested in becoming eligible',
          'Not all users engage with the same features',
          'We need more incentive to retain more users'
        ]
      },
      image: {
        src: '/case-studies/umba/umba_image_frame_4.png',
        alt: 'User testing results'
      },
      layout: 'left-image'
    },
    {
      type: 'solution',
      title: 'Looking at the data',
      subtitle: 'Some surprises are good!',
      content: {
        mainText: "Our data analyst showed the team that more than half the users were clicking into the rewards tab after loan decline.",
        bulletPoints: [
          'We have a clear user incentive',
          'We can utilize organic movement',
          'The rewards tab is a blank slate'
        ]
      },
      image: {
        src: '/case-studies/umba/umba_image_frame_5.png',
        alt: 'Data analysis results'
      },
      layout: 'right-image'
    },
    {
      type: 'solution',
      title: 'Leveraging organic movement',
      subtitle: 'Combining our learnings',
      content: {
        mainText: "We know users are open to trying other features to grow their loan eligibility. We also know users are organically moving to the rewards tab in hopes of some money.",
        bulletPoints: [
          'Creates user habits around banking features',
          'Leaves the users with a positive experience',
          'Give users a head start to grow eligibility'
        ]
      },
      image: {
        src: '/case-studies/umba/umba_image_frame_6.png',
        alt: 'Final solution design'
      },
      layout: 'right-image'
    },
    {
      type: 'impact',
      title: 'Halved losses for the month and planned for long term growth',
      content: {
        metrics: [
          {
            label: "Users impact",
            value: "40% of users retained",
            description: "Features like bill pay & airtime turned out to be sticky features"
          },
          {
            label: "Business impact",
            value: "<5% of loans defaulted",
            description: "We set key levers that users can pull to affect our algorithm"
          },
          {
            label: "Product impact",
            value: "2 week ticket backlog cut to 1 day",
            description: "CE & Product set shared metrics that aligned our teams"
          }
        ],
        bulletPoints: [
          'Released in stages of users by 10%, 30%, 100%',
          'Worked with finance to set reward amounts relative to average acquisition & retention costs',
          'Partnered with CE to get support ticket data and consistent reporting on ticket backlog'
        ]
      },
      layout: 'three-column'
    }
  ]
};
