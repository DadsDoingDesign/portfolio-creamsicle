import { CaseStudy, ContentSection } from '@/types/case-study';
import { Project } from '@/lib/data';

// Helper function to convert CaseStudy to Project
export function toProject(caseStudy: CaseStudy): Project {
  return {
    ...caseStudy,
    frames: caseStudy.frames.map(frame => ({
      ...frame,
      content: {
        ...frame.content,
        sections: frame.content.sections?.filter((section): section is ContentSection => 'heading' in section)
      }
    }))
  };
}

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
          { role: "Product Designer", highlight: true },
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
        src: '/case-studies/umba/umba_image_frame_1.png',
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
          },
          {
            subtitle: "What could be happening?"
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
        src: '/case-studies/umba/umba_image_frame_2.png',
        alt: 'Umba loan decline screen showing user feedback'
      }
    },
    {
      type: 'solution',
      title: "Creating alignment between the users, business, and product",
      layout: 'three-column',
      content: {
        sections: [
          {
            heading: "What's important to users",
            text: "Have a clear path for how to get a loan."
          },
          {
            heading: "What's important to the business",
            text: "Curbing risky loans through the ML based algorithm."
          },
          {
            heading: "What's important for the product",
            text: "Build and keep trust with users through reliable service."
          },
          {
            subtitle: "How did we set these metrics?"
          }
        ],
        bulletPoints: [
          "Users voice there concerns in reviews, to customer support, and during interviews",
          "The business metrics are set during leadership meetings to align with investors",
          "Product works cross team to determine what is indicative of a good experience"
        ]
      }
    },
    {
      type: 'research',
      title: "Testing user motivations",
      layout: 'right-image',
      content: {
        sections: [
          {
            heading: "What are people willing to do?",
            text: "With a fake door test we were able to see what users were most inclined to interact with when if came to growing their loan eligibility."
          },
          {
            heading: "What were the results",
            text: "We see 20% of users completed other feature flows such as bill pay & buying airtime."
          },
          {
            subtitle: "What did we learn?"
          }
        ],
        bulletPoints: [
          "Users are interested in becoming eligible",
          "Not all users engage with the same features",
          "We need more incentive to retain more users"
        ]
      },
      image: {
        src: '/case-studies/umba/umba_image_frame_4.png',
        alt: 'Testing user motivations and interactions'
      }
    },
    {
      type: 'research',
      title: "Looking at the data",
      layout: 'left-image',
      content: {
        sections: [
          {
            heading: "Some surprises are good!",
            text: "Our data analyst showed the team that more than half the users were clicking into the rewards tab after loan decline."
          },
          {
            heading: "But we were dropping the ball",
            text: "The current 'rewards' tab was nothing more than analytics on most likely empty data. No wonder users deleted the app afterwards."
          },
          {
            subtitle: "What's the opportunity?"
          }
        ],
        bulletPoints: [
          "We have a clear user incentive",
          "We can utilize organic movement",
          "The rewards tab is a blank slate"
        ]
      },
      image: {
        src: '/case-studies/umba/umba_image_frame_5.png',
        alt: 'Data analysis and insights'
      }
    },
    {
      type: 'solution',
      title: "Leveraging organic movement",
      layout: 'right-image',
      content: {
        sections: [
          {
            heading: "Combining our learnings",
            text: "We know users are open to trying other features to grow their loan eligibility. We also know users are organically moving to the rewards tab in hopes of some money."
          },
          {
            heading: "Creating a symbiotic system",
            text: "Using the incentive of monetary rewards, I developed a First Time User Experience that exposes users to all features within Umba."
          },
          {
            subtitle: "What do we hope this accomplishes?"
          }
        ],
        bulletPoints: [
          "Creates user habits around banking features",
          "Leaves the users with a positive experience",
          "Give users a head start to grow eligibility"
        ]
      },
      image: {
        src: '/case-studies/umba/umba_image_frame_6.png',
        alt: 'New user experience and rewards system'
      }
    },
    {
      type: 'impact',
      title: "The results",
      layout: 'three-column',
      content: {
        sections: [
          {
            heading: "Retention",
            text: "We see a 40% increase in users who keep the app after loan decline."
          },
          {
            heading: "Feature adoption",
            text: "Users who complete the rewards program are 3x more likely to use other features."
          },
          {
            heading: "Loan eligibility",
            text: "20% of users who complete the rewards program become eligible for a loan."
          },
          {
            subtitle: "How did we launch & validate?"
          }
        ],
        bulletPoints: [
          "Released in stages of users by 10%, 30%, 100%",
          "Monitored user feedback and support tickets",
          "Tracked key metrics: retention, feature adoption, loan eligibility"
        ]
      }
    },
    {
      type: 'metrics',
      title: "Halved losses for the month and planned for long term growth",
      layout: 'three-column',
      content: {
        sections: [
          {
            heading: "Users impact",
            text: "Features like bill pay & airtime turned out to be sticky features",
            subtitle: "40% of users retained"
          },
          {
            heading: "Business impact",
            text: "We set key levers that users can pull to affect our algorithm",
            subtitle: "<5% of loans defaulted"
          },
          {
            heading: "Product impact",
            text: "CE & Product set shared metrics that aligned our teams",
            subtitle: "2 week ticket backlog cut to 1 day"
          },
          {
            subtitle: "How did we launch & validate?"
          }
        ],
        bulletPoints: [
          "Released in stages of users by 10%, 30%, 100%",
          "Worked with finance to set reward amounts relative to average acquisition & retention costs",
          "Partnered with CE to get support ticket data and consistent reporting on ticket backlog"
        ]
      }
    }
  ]
};

export default umba;
