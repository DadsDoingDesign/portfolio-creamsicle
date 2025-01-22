'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CaseStudy as CaseStudyType, CaseStudyFrame } from '@/types/case-study';
import Frame from './frames';
import { useState } from 'react';

const frameVariants = {
  enter: {
    x: 1000,
    opacity: 0
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: {
    zIndex: 0,
    x: -1000,
    opacity: 0
  }
};

interface Props extends CaseStudyType {}

export const CaseStudy = ({ frames }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const frame = frames[currentIndex];
  const hasNext = currentIndex < frames.length - 1;

  const handleNext = () => {
    if (hasNext) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          key={currentIndex}
          variants={frameVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          <Frame frame={frame} />
        </motion.div>

        <div className="flex justify-between items-center p-8">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`text-amber-400 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:text-amber-300'}`}
          >
            ← Previous
          </button>
          {hasNext ? (
            <button
              onClick={handleNext}
              className="text-amber-400 hover:text-amber-300"
            >
              Next →
            </button>
          ) : (
            <Link href="/" className="text-amber-400 hover:text-amber-300">
              Back to Projects →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
