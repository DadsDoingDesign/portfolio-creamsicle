'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { Project } from '@/lib/data';
import { CaseStudyFrame, ContentSection, BulletPointHeader } from '@/types/case-study';
import Frame from './frames';
import Navigation from '@/components/navigation/Navigation';
import TopNav from './TopNav';
import BottomNav from './BottomNav';

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

  const handleNext = useCallback(() => {
    if (currentFrame < frames.length - 1) {
      setCurrentFrame(prev => prev + 1);
    }
  }, [currentFrame, frames.length]);

  const handlePrev = useCallback(() => {
    if (currentFrame > 0) {
      setCurrentFrame(prev => prev - 1);
    }
  }, [currentFrame]);

  return (
    <motion.div className="h-full w-full">
      {isOpen && (
        <div className="w-full h-full grid grid-rows-[auto_minmax(0,1fr)_auto]">
          <Navigation className="row-start-1" isViewingCaseStudy={isReading} onBack={handleBack} />
          
          <div className="grid grid-rows-[auto_1fr_auto] h-full">
            {isReading && (
              <motion.div
                className="row-start-1 px-40 py-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TopNav onClose={handleBack} />
              </motion.div>
            )}
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={isReading ? "reading" : "preview"}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  y: 0
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: isReading && !bottomNavAnimated ? 0.3 : 0 
                }}
                className="relative w-full h-full flex items-center"
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

            {isReading && (
              <motion.div
                className="row-start-3 px-40 py-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: 0.3
                  }
                }}
                exit={{ opacity: 0, y: 20 }}
                onAnimationComplete={() => {
                  if (!bottomNavAnimated) {
                    setBottomNavAnimated(true);
                  }
                }}
              >
                <BottomNav
                  currentFrame={currentFrame}
                  totalFrames={frames.length}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
              </motion.div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CaseStudyContainer;
