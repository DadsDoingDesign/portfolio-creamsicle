import { CaseStudy } from '@/types/case-study';

export const umba: CaseStudy = {
  id: 'umba',
  title: 'Umba',
  description: 'Using analytics to incentivize user behavior',
  previewImage: '/case-studies/umba/preview.png',
  categories: ['Product Strategy', 'Analytics', 'UX Design'],
  className: 'case-study-container',
  frames: [
    {
      type: 'intro',
      title: 'Umba',
      className: 'case-study-frame case-study-frame--intro',
      content: {
        sections: [
          {
            heading: "What's the issue?",
            text: "With a stricter approval target on the lending algorithim, many new and existing users were getting declined for loan applications. This lead to most new users dropping off shortly after the loan decline. I was tasked with finding a way to reduce this dropoff.",
            className: 'case-study-section'
          },
          {
            heading: "What was my impact?",
            text: "40% increase in the # of users retained after loan decline.",
            className: 'case-study-section'
          }
        ],
        team: [
          { role: "Product Designer", highlight: true, className: 'case-study-team-member case-study-team-member--highlight' },
          { role: "Product Manager", className: 'case-study-team-member' },
          { role: "2 Engineers", className: 'case-study-team-member' },
          { role: "Data Analyst", className: 'case-study-team-member' },
          { role: "QA Analyst", className: 'case-study-team-member' }
        ],
        timeline: [
          { phase: "Week 1", activity: "Design", className: 'case-study-timeline-item' },
          { phase: "Week 2", activity: "Develop", className: 'case-study-timeline-item' },
          { phase: "Week 3", activity: "QA & Launch", className: 'case-study-timeline-item' }
        ],
        className: 'case-study-content'
      },
      layout: 'right-image',
      layoutClassName: 'case-study-layout--right-image',
      image: {
        src: '/case-studies/umba/umba_image_frame_1.png',
        alt: 'Umba mobile app interface showing user balance and transaction details',
        className: 'case-study-image'
      }
    },
    {
      type: 'problem',
      title: "I got declined... Now what?",
      className: 'case-study-frame case-study-frame--research',
      content: {
        sections: [
          {
            heading: "So why should I stay?",
            text: "The current loan decline flow forces users out of the app, with little context on what they can do to become qualified for a loan.",
            className: 'case-study-section'
          },
          {
            heading: "What was the negative impact?",
            text: "We see 70% of users deleting the app after a loan decline.",
            className: 'case-study-section'
          }
        ],
        bulletPoints: [
          "Graphic is frustrating to users",
          "Users rarely have a second account",
          "Unclear what to do to qualify"
        ],
        className: 'case-study-content'
      },
      layout: 'left-image',
      layoutClassName: 'case-study-layout--left-image',
      image: {
        src: '/case-studies/umba/umba_image_frame_2.png',
        alt: 'Umba loan decline screen showing user feedback',
        className: 'case-study-image'
      }
    },
    {
      type: 'solution',
      title: "Creating alignment between the users, business, and product",
      className: 'case-study-frame case-study-frame--solution',
      layout: 'three-column',
      layoutClassName: 'case-study-layout--three-column',
      content: {
        sections: [
          {
            heading: "What's important to users",
            text: "Have a clear path for how to get a loan.",
            className: 'case-study-section'
          },
          {
            heading: "What's important to the business",
            text: "Curbing risky loans through the ML based algorithm.",
            className: 'case-study-section'
          },
          {
            heading: "What's important for the product",
            text: "Build and keep trust with users through reliable service.",
            className: 'case-study-section'
          }
        ],
        bulletPoints: [
          "Users voice there concerns in reviews, to customer support, and during interviews",
          "The business metrics are set during leadership meetings to align with investors",
          "Product works cross team to determine what is indicative of a good experience"
        ],
        className: 'case-study-content'
      }
    },
    {
      type: 'research',
      title: "Testing user motivations",
      className: 'case-study-frame case-study-frame--research',
      layout: 'right-image',
      layoutClassName: 'case-study-layout--right-image',
      content: {
        sections: [
          {
            heading: "What are people willing to do?",
            text: "With a fake door test we were able to see what users were most inclined to interact with when if came to growing their loan eligibility.",
            className: 'case-study-section'
          },
          {
            heading: "What were the results",
            text: "We see 20% of users completed other feature flows such as bill pay & buying airtime.",
            className: 'case-study-section'
          }
        ],
        bulletPoints: [
          "Users are interested in becoming eligible",
          "Not all users engage with the same features",
          "We need more incentive to retain more users"
        ],
        className: 'case-study-content'
      },
      image: {
        src: '/case-studies/umba/umba_image_frame_4.png',
        alt: 'Testing user motivations and interactions',
        className: 'case-study-image'
      }
    },
    {
      type: 'research',
      title: "Looking at the data",
      className: 'case-study-frame case-study-frame--research',
      layout: 'left-image',
      layoutClassName: 'case-study-layout--left-image',
      content: {
        sections: [
          {
            heading: "Some surprises are good!",
            text: "Our data analyst showed the team that more than half the users were clicking into the rewards tab after loan decline.",
            className: 'case-study-section'
          },
          {
            heading: "But we were dropping the ball",
            text: "The current 'rewards' tab was nothing more than analytics on most likely empty data. No wonder users deleted the app afterwards.",
            className: 'case-study-section'
          }
        ],
        bulletPoints: [
          "We have a clear user incentive",
          "We can utilize organic movement",
          "The rewards tab is a blank slate"
        ],
        className: 'case-study-content'
      },
      image: {
        src: '/case-studies/umba/umba_image_frame_5.png',
        alt: 'Data analysis and insights',
        className: 'case-study-image'
      }
    },
    {
      type: 'solution',
      title: "Leveraging organic movement",
      className: 'case-study-frame case-study-frame--solution',
      layout: 'right-image',
      layoutClassName: 'case-study-layout--right-image',
      content: {
        sections: [
          {
            heading: "Combining our learnings",
            text: "We know users are open to trying other features to grow their loan eligibility. We also know users are organically moving to the rewards tab in hopes of some money.",
            className: 'case-study-section'
          },
          {
            heading: "Creating a symbiotic system",
            text: "Using the incentive of monetary rewards, I developed a First Time User Experience that exposes users to all features within Umba.",
            className: 'case-study-section'
          }
        ],
        bulletPoints: [
          "Creates user habits around banking features",
          "Leaves the users with a positive experience",
          "Give users a head start to grow eligibility"
        ],
        className: 'case-study-content'
      },
      image: {
        src: '/case-studies/umba/umba_image_frame_6.png',
        alt: 'New user experience and rewards system',
        className: 'case-study-image'
      }
    },
    {
      type: 'impact',
      title: "The results",
      className: 'case-study-frame case-study-frame--impact',
      layout: 'three-column',
      layoutClassName: 'case-study-layout--three-column',
      content: {
        sections: [
          {
            heading: "Retention",
            text: "We see a 40% increase in users who keep the app after loan decline.",
            className: 'case-study-section'
          },
          {
            heading: "Feature adoption",
            text: "Users who complete the rewards program are 3x more likely to use other features.",
            className: 'case-study-section'
          },
          {
            heading: "Loan approval",
            text: "Users who complete the rewards program are 2x more likely to get approved for a loan.",
            className: 'case-study-section'
          }
        ],
        className: 'case-study-content'
      }
    }
  ]
};

export default umba;
