import { CaseStudy } from '@/types/case-study';

export const umba: CaseStudy = {
  id: 'umba',
  title: 'Umba',
  description: 'Creating alignment between the users, business, and product',
  previewImage: '/case-studies/umba/umba_image_frame_1.png',
  categories: ['Product Strategy', 'Analytics', 'UX Design'],
  frames: [
    {
      type: 'intro',
      title: 'Umba',
      content: {
        mainText: 'With a stricter approval target on the lending algorithm, many new and existing users were getting declined for loan applications. This lead to most new users dropping off shortly after the loan decline. I was tasked with finding a way to reduce this dropoff.',
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
        alt: 'Umba app interface'
      },
      layout: 'right-image'
    },
    {
      type: 'problem',
      title: 'I got declined... Now what?',
      content: {
        mainText: 'The current loan decline flow forces users out of the app, with little context on what they can do to become qualified for a loan.',
        bulletPoints: [
          'Graphic is frustrating to users',
          'Users rarely have a second account',
          'Unclear what to do to qualify'
        ]
      },
      image: {
        src: '/case-studies/umba/umba_image_frame_2.png',
        alt: 'Loan decline screen'
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
      content: {
        mainText: 'With a fake door test we were able to see what users were most inclined to interact with when if came to growing their loan eligibility.',
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
        mainText: 'Our data analyst showed the team that more than half the users were clicking into the rewards tab after loan decline.',
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
    }
  ]
};
