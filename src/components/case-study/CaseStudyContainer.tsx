'use client';

import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../lib/data';
import { CaseStudyFrame } from '../../types/case-study';
import Frame from './frames';
import Navigation from './Navigation';
import { isContentSection, isBulletPointHeader } from '../../lib/utils/type-guards';
import { apploi } from '../../lib/case-studies/apploi';
import { toProject } from '../../lib/utils/case-study';

interface CaseStudyContainerProps {
  project: Project;
}

export default function CaseStudyContainer({ project }: CaseStudyContainerProps) {
  const [isReading, setIsReading] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [bottomNavAnimated, setBottomNavAnimated] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const frames = project.frames;

  useEffect(() => {
    if (!isReading) return;

    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 150);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReading, isScrolling]);

  const handleReadCaseStudy = useCallback(() => {
    setIsReading(true);
  }, []);

  const handleBack = useCallback(() => {
    if (isReading) {
      setIsReading(false);
      setCurrentFrame(0);
    }
  }, [isReading]);

  const isLastFrame = currentFrame === frames.length - 1;
  // Convert apploi case study to Project type for next case study
  const nextCaseStudy = isLastFrame ? toProject(apploi) : null;

  return (
    <motion.div className="h-full w-full">
      <div className="w-full h-full grid grid-rows-[auto_minmax(0,1fr)_auto]">
        <Navigation className="row-start-1" isViewingCaseStudy={isReading} onBack={handleBack} />
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={isReading ? "reading" : "preview"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex items-center justify-center"
          >
            {!isReading ? (
              <div className="w-full grid grid-cols-1 md:grid-cols-[minmax(0,400px)_1fr] gap-20 items-center px-40">
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-bold text-white">{frames[0].title}</h1>
                  {frames[0].content.sections?.find(isContentSection)?.text && (
                    <p className="text-gray-300">{frames[0].content.sections.find(isContentSection)?.text}</p>
                  )}
                  <div className="flex">
                    <button
                      onClick={handleReadCaseStudy}
                      className="inline-flex px-4 py-2 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-background-primary transition-colors duration-200"
                    >
                      Read Case Study
                    </button>
                  </div>
                </div>
                <div className="relative aspect-video flex items-center justify-center">
                  <Image
                    src={project.previewImage}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    className="w-auto h-auto max-w-full max-h-[600px] object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFrame}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="w-full h-full flex items-center justify-center px-40"
                >
                  <Frame 
                    frame={frames[currentFrame]} 
                    isFirstFrame={currentFrame === 0}
                    className={frames[currentFrame].layout === 'three-column' ? 'col-span-full' : 'overflow-auto'}
                  />
                  {frames[currentFrame].image && frames[currentFrame].layout !== 'three-column' && (
                    <div className="col-span-1 md:col-span-1 xl:col-start-2 xl:col-span-2 flex items-center justify-center">
                      <div className="relative max-h-[600px] w-full flex items-center justify-center">
                        <Image
                          src={frames[currentFrame].image.src}
                          alt={frames[currentFrame].image.alt}
                          width={1920}
                          height={1080}
                          className="w-auto h-auto max-w-full max-h-[600px] object-contain"
                          style={{ objectFit: 'contain' }}
                          priority={currentFrame === 0}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isReading && (
            <motion.div 
              className="row-start-3 py-4 px-20 flex justify-between items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onAnimationComplete={() => {
                setBottomNavAnimated(true);
              }}
            >
              {currentFrame > 0 && (
                <button 
                  onClick={() => setCurrentFrame(prev => prev - 1)}
                  className="flex items-center gap-2 text-amber-400 hover:text-amber-500 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 19V5M5 12l7-7 7 7"/>
                  </svg>
                  Previous section
                </button>
              )}
              <div className="flex-1 mx-8 border-t border-amber-400" />
              {!isLastFrame && currentFrame < frames.length - 1 && (
                <button
                  onClick={() => setCurrentFrame(prev => prev + 1)}
                  className="flex items-center gap-2 text-amber-400 hover:text-amber-500 transition-colors"
                >
                  <h2 className="font-medium">{frames[currentFrame + 1]?.title}</h2>
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                  </svg>
                </button>
              )}
              {isLastFrame && nextCaseStudy && (
                <button
                  onClick={() => {
                    // Handle next case study navigation
                    handleBack();
                    // Add logic to navigate to next case study
                  }}
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-500 transition-colors"
                >
                  <span>Next Case Study: {nextCaseStudy.title}</span>
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
