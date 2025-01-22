import { CaseStudy } from '@/types/case-study';

const umba: CaseStudy = {
  id: 'umba',
  title: 'Umba',
  description: 'Using analytics to incentivize user behavior',
  frames: [
    {
      content: {
        title: 'Umba',
        sections: [
          {
            title: "What's the issue?",
            text: "With a stricter approval target on the lending algorithim, many new and existing users were getting declined for loan applications. This lead to most new users dropping off shortly after the loan decline. I was tasked with finding a way to reduce this dropoff."
          },
          {
            title: "What was my impact?",
            text: "40% increase in the # of users retained after loan decline."
          },
          {
            title: "Team",
            highlights: [
              "Product Designer",
              "Product Manager",
              "2 Engineers",
              "Data Analyst",
              "QA Analyst"
            ]
          },
          {
            title: "Timeline",
            items: [
              "Week 1: Design",
              "Week 2: Develop",
              "Week 3: QA & Launch"
            ]
          }
        ]
      },
      image: {
        src: '/images/umba/frame1.png',
        alt: 'Umba mobile app interface showing user balance and transaction details'
      }
    },
    {
      content: {
        title: "I got declined... Now what?",
        sections: [
          {
            title: "So why should I stay?",
            text: "The current loan decline flow forces users out of the app, with little context on what they can do to become qualified for a loan."
          },
          {
            title: "What was the negative impact?",
            text: "We see 70% of users deleting the app after a loan decline."
          },
          {
            title: "What could be happening?",
            items: [
              "Graphic is frustrating to users",
              "Users rarely have a second account",
              "Unclear what to do to qualify"
            ]
          }
        ]
      },
      image: {
        src: '/images/umba/frame2.png',
        alt: 'Umba loan decline screen showing user feedback'
      }
    }
  ]
};

export default umba;
