'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Project } from '@/lib/data';
import { CaseStudyFrame } from '@/types/case-study';
import Frame from './frames';
import Navigation from '@/components/navigation/Navigation';

interface CaseStudyContainerProps {
  project: Project;
  frames: CaseStudyFrame[];
  isOpen: boolean;
  onClose: () => void;
  onViewCaseStudy?: (viewing: boolean) => void;
}

const CaseStudyContainer: React.FC<CaseStudyContainerProps> = ({
  project,
  frames,
  isOpen,
  onClose,
  onViewCaseStudy
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

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

  const handleReadCaseStudy = () => {
    setIsReading(true);
    onViewCaseStudy?.(true);
  };

  const handleBack = () => {
    if (isReading) {
      setIsReading(false);
      onViewCaseStudy?.(false);
    } else {
      onClose();
    }
  };

  return (
    <motion.div className="h-full w-full">
      {isOpen && (
        <div className="w-full h-full grid grid-rows-[auto_1fr_auto]">
          <Navigation isViewingCaseStudy={isReading} onBack={handleBack} />
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={isReading ? 'content' : 'preview'}
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isReading ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFrame}
                    className="w-full h-full grid grid-cols-1 md:grid-cols-[minmax(0,400px)_1fr] xl:grid-cols-[minmax(0,400px)_repeat(2,1fr)] gap-8 overflow-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Frame 
                      frame={frames[currentFrame]} 
                      isFirstFrame={currentFrame === 0}
                      className={frames[currentFrame].layout === 'three-column' ? 'col-span-full' : ''}
                    />
                    {frames[currentFrame].image && frames[currentFrame].layout !== 'three-column' && (
                      <div className="col-span-1 md:col-span-1 xl:col-start-2 xl:col-span-2">
                        <Image
                          src={frames[currentFrame].image.src}
                          alt={frames[currentFrame].image.alt}
                          width={1920}
                          height={1080}
                          className="w-auto h-auto max-h-[80%] object-contain"
                          priority={currentFrame === 0}
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              ) : (
                <div className="h-full w-full flex items-center">
                  <div className="w-full grid grid-cols-1 md:grid-cols-[minmax(0,400px)_1fr] gap-20 items-center">
                    <div className="w-full space-y-8">
                      <h1 className="text-4xl font-bold text-white">{project.title}</h1>
                      <p className="text-lg text-gray-300">{project.description}</p>
                      {frames[0]?.content?.sections?.[0] && (
                        <p className="text-gray-300">{frames[0].content.sections[0].text}</p>
                      )}
                      <button
                        onClick={handleReadCaseStudy}
                        className="w-fit px-6 py-3 border-2 border-amber-400 text-amber-400 rounded-lg hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-colors"
                      >
                        Read Case Study
                      </button>
                    </div>
                    {frames[0]?.image && (
                      <div className="flex items-center justify-center w-full">
                        <Image
                          src={frames[0].image.src}
                          alt={frames[0].image.alt}
                          width={1920}
                          height={1080}
                          className="max-h-[400px] sm:max-h-[600px] md:max-h-[700px] lg:max-h-[800px] w-auto h-auto object-contain"
                          priority
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="w-full py-4 flex justify-between items-center">
            {isReading && (
              <>
                {currentFrame > 0 && (
                  <button 
                    onClick={() => setCurrentFrame(prev => prev - 1)}
                    className="text-amber-400 hover:text-amber-500 transition-colors"
                  >
                    Previous section
                  </button>
                )}
                {currentFrame < frames.length - 1 && (
                  <button
                    onClick={() => setCurrentFrame(prev => prev + 1)}
                    className="flex flex-col items-end text-amber-400 hover:text-amber-500 transition-colors ml-auto"
                  >
                    <h2 className="font-medium">{frames[currentFrame + 1]?.title}</h2>
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CaseStudyContainer;
