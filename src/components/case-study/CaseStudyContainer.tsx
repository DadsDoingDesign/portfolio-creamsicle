'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/lib/data';
import { CaseStudyFrame } from '@/types/case-study';
import Frame from './frames';
import { apploi } from '@/lib/case-studies/apploi';
import { toProject } from '@/lib/utils/case-study';

interface CaseStudyContainerProps {
  project: Project;
}

export default function CaseStudyContainer({ project }: CaseStudyContainerProps) {
  const [isReading, setIsReading] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const frames = project.frames;

  const handleScroll = useCallback(() => {
    if (!isScrolling) {
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 150);
    }
  }, [isScrolling]);

  const handleReadCaseStudy = useCallback(() => {
    setIsReading(true);
  }, []);

  const handleBack = useCallback(() => {
    if (isReading) {
      setIsReading(false);
      setCurrentFrame(0);
    }
  }, [isReading]);

  const handleFrameChange = useCallback((index: number) => {
    setCurrentFrame(index);
  }, []);

  const isLastFrame = currentFrame === frames.length - 1;
  const nextCaseStudy = isLastFrame ? toProject(apploi) : null;

  return (
    <div className="relative min-h-screen bg-neutral-900 pt-24">
      <div className="mx-auto max-w-7xl px-4">
        {!isReading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative py-12"
          >
            <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-lg text-gray-300 mb-8">{project.description}</p>
            <button
              onClick={handleReadCaseStudy}
              className="px-6 py-3 bg-amber-400 text-black rounded-lg hover:bg-amber-300 transition-colors"
            >
              Read Case Study
            </button>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`frame-${currentFrame}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-12"
            >
              <Frame
                frame={frames[currentFrame]}
                onNext={() => handleFrameChange(currentFrame + 1)}
                onPrev={() => handleFrameChange(currentFrame - 1)}
                isFirst={currentFrame === 0}
                isLast={isLastFrame}
                nextCaseStudy={nextCaseStudy}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
