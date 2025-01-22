import { CaseStudy } from '@/types/case-study';

export const umba: CaseStudy = {
  id: 'umba',
  title: 'Umba',
  description: 'Using analytics to incentivize user behavior',
  previewImage: '/case-studies/umba/preview.png',
  categories: ['Product Strategy', 'Analytics', 'UX Design'],
  frames: [
    {
      type: 'intro',
      title: 'Umba',
      content: {
        sections: [
          {
            heading: "What's the issue?",
            text: "With a stricter approval target on the lending algorithim, many new and existing users were getting declined for loan applications. This lead to most new users dropping off shortly after the loan decline. I was tasked with finding a way to reduce this dropoff."
          },
          {
            heading: "What was my impact?",
            text: "40% increase in the # of users retained after loan decline."
          }
        ],
        team: [
          { role: "Product Designer" },
          { role: "Product Manager" },
          { role: "2 Engineers" },
          { role: "Data Analyst" },
          { role: "QA Analyst" }
        ],
        timeline: [
          { phase: "Week 1", activity: "Design" },
          { phase: "Week 2", activity: "Develop" },
          { phase: "Week 3", activity: "QA & Launch" }
        ]
      },
      layout: 'right-image',
      image: {
        src: '/case-studies/umba/frame1.png',
        alt: 'Umba mobile app interface showing user balance and transaction details'
      }
    },
    {
      type: 'problem',
      title: "I got declined... Now what?",
      content: {
        sections: [
          {
            heading: "So why should I stay?",
            text: "The current loan decline flow forces users out of the app, with little context on what they can do to become qualified for a loan."
          },
          {
            heading: "What was the negative impact?",
            text: "We see 70% of users deleting the app after a loan decline."
          }
        ],
        bulletPoints: [
          "Graphic is frustrating to users",
          "Users rarely have a second account",
          "Unclear what to do to qualify"
        ]
      },
      layout: 'left-image',
      image: {
        src: '/case-studies/umba/frame2.png',
        alt: 'Umba loan decline screen showing user feedback'
      }
    }
  ]
};
