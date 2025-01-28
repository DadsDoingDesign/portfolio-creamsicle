'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { Project } from '@/lib/data';
import { CaseStudyFrame, ContentSection, BulletPointHeader } from '@/types/case-study';
import Frame from './frames';
import Navigation from '@/components/navigation/Navigation';

// Type guard functions
function isContentSection(section: ContentSection | BulletPointHeader): section is ContentSection {
  return 'heading' in section;
}

interface CaseStudyContainerProps {
  project: Project;
  frames: CaseStudyFrame[];
  isOpen: boolean;
  onClose: () => void;
  onViewCaseStudy?: (viewing: boolean) => void;
  caseStudies: Project[];
}

const CaseStudyContainer: React.FC<CaseStudyContainerProps> = ({
  project,
  frames,
  isOpen,
  onClose,
  onViewCaseStudy,
  caseStudies
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [bottomNavAnimated, setBottomNavAnimated] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsReading(false);
      setCurrentFrame(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isReading) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;

      const scrollDown = e.deltaY > 0;
      
      if (scrollDown && currentFrame < frames.length - 1) {
        setIsScrolling(true);
        setCurrentFrame(prev => prev + 1);
        setTimeout(() => setIsScrolling(false), 500); // Debounce scroll
      } else if (!scrollDown && currentFrame > 0) {
        setIsScrolling(true);
        setCurrentFrame(prev => prev - 1);
        setTimeout(() => setIsScrolling(false), 500); // Debounce scroll
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isReading, currentFrame, frames.length, isScrolling]);

  const handleReadCaseStudy = useCallback(() => {
    setIsReading(true);
    onViewCaseStudy?.(true);
  }, [onViewCaseStudy]);

  const handleBack = useCallback(() => {
    if (isReading) {
      setIsReading(false);
      onViewCaseStudy?.(false);
    } else {
      onClose();
    }
  }, [isReading, onViewCaseStudy, onClose]);

  const isLastFrame = currentFrame === frames.length - 1;
  const nextCaseStudy = isLastFrame ? caseStudies.find(cs => cs.id === 'apploi') : null;

  return (
    <motion.div className="h-full w-full">
      {isOpen && (
        <div className="w-full h-full grid grid-rows-[auto_minmax(0,1fr)_auto]">
          <Navigation className="row-start-1" isViewingCaseStudy={isReading} onBack={handleBack} />
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={isReading ? 'content' : 'preview'}
              className="row-start-2 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.3,
                delay: isReading && !bottomNavAnimated ? 0.3 : 0 
              }}
            >
              {isReading ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFrame}
                    className="absolute inset-0 grid grid-cols-1 md:grid-cols-[minmax(0,400px)_1fr] xl:grid-cols-[minmax(0,400px)_repeat(2,1fr)] gap-8 px-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
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
              ) : (
                <div className="absolute inset-0 flex items-center px-40">
                  <div className="w-full grid grid-cols-1 md:grid-cols-[minmax(0,400px)_1fr] gap-20 items-center">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-4xl font-bold text-white">{frames[0].title}</h1>
                      {frames[0].content.sections?.find(isContentSection)?.text && (
                        <p className="text-gray-300">{frames[0].content.sections.find(isContentSection)?.text}</p>
                      )}
                      <button
                        onClick={handleReadCaseStudy}
                        className="text-amber-400 hover:text-background-primary transition-colors duration-200"
                      >
                        Read Case Study
                      </button>
                    </div>
                    {frames[0]?.image && (
                      <div className="flex items-center justify-center w-full">
                        <div className="relative max-h-[600px] w-full flex items-center justify-center">
                          <Image
                            src={frames[0].image.src}
                            alt={frames[0].image.alt}
                            width={1920}
                            height={1080}
                            className="w-auto h-auto max-w-full max-h-[600px] object-contain"
                            style={{ objectFit: 'contain' }}
                            priority
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
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
                      onClose();
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
      )}
    </motion.div>
  );
};

export default CaseStudyContainer;
