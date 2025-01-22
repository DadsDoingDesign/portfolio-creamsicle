'use client';

import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { CaseStudy as CaseStudyType, CaseStudyFrame } from '@/types/case-study';
import { IntroFrame, MetricsFrame, ContentFrame } from './frames';
import { useState } from 'react';

const frameVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const CaseStudy = ({ title, description, frames }: CaseStudyType) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  const renderFrame = (frame: CaseStudyFrame) => {
    const props = { frame };
    
    switch (frame.type) {
      case 'intro':
        return <IntroFrame {...props} />;
      case 'metrics':
        return <MetricsFrame {...props} />;
      default:
        return <ContentFrame {...props} />;
    }
  };

  const nextFrame = () => {
    if (currentFrame < frames.length - 1) {
      setCurrentFrame(currentFrame + 1);
    }
  };

  return (
    <article className="min-h-screen bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back
          </Link>
          {currentFrame < frames.length - 1 && (
            <button
              onClick={nextFrame}
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              {frames[currentFrame + 1]?.title} →
            </button>
          )}
        </div>

        {/* Frame Container */}
        <div className="relative">
          <motion.div
            key={currentFrame}
            variants={frameVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
            className="min-h-[600px]"
          >
            {renderFrame(frames[currentFrame])}
          </motion.div>
        </div>
      </div>
    </article>
  );
};
