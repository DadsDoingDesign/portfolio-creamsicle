'use client';

import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { CaseStudy as CaseStudyType, CaseStudyFrame } from '@/types/case-study';
import { IntroFrame, MetricsFrame, ContentFrame } from './frames';

const frameVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export const CaseStudy = ({ title, description, frames }: CaseStudyType) => {
  const renderFrame = (frame: CaseStudyFrame, index: number) => {
    const props = { frame, key: index };
    
    switch (frame.type) {
      case 'intro':
        return <IntroFrame {...props} />;
      case 'metrics':
        return <MetricsFrame {...props} />;
      default:
        return <ContentFrame {...props} />;
    }
  };

  return (
    <article className="min-h-screen pt-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Projects
        </Link>

        {/* Case Study Content */}
        <div className="space-y-24">
          {frames.map((frame, index) => (
            <motion.section
              key={index}
              variants={frameVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {renderFrame(frame, index)}
            </motion.section>
          ))}
        </div>
      </div>
    </article>
  );
};
