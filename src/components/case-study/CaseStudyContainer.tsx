'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Project } from '@/lib/data';
import { CaseStudyFrame } from '@/types/case-study';
import Frame from './frames';

interface CaseStudyContainerProps {
  project: Project;
  frames: CaseStudyFrame[];
  isOpen: boolean;
  onClose: () => void;
  onViewCaseStudy?: (viewing: boolean) => void;
}

export default function CaseStudyContainer({
  project,
  frames,
  isOpen,
  onClose,
  onViewCaseStudy
}: CaseStudyContainerProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!isOpen) {
      setIsReading(false);
      setCurrentFrame(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isReading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = frameRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setCurrentFrame(index);
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      }
    );

    frameRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isReading]);

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

  const scrollToFrame = (index: number) => {
    frameRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-neutral-900"
        >
          <div className="h-full">
            <div className="sticky top-0 z-10 bg-neutral-900/80 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <button
                  onClick={handleBack}
                  className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="sr-only">Back</span>
                  ←
                </button>
                {isReading && (
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => scrollToFrame(Math.max(0, currentFrame - 1))}
                      disabled={currentFrame === 0}
                      className="p-2 rounded-full hover:bg-white/10 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
                    >
                      ←
                    </button>
                    <span className="text-white/60 text-sm">
                      {currentFrame + 1} / {frames.length}
                    </span>
                    <button
                      onClick={() => scrollToFrame(Math.min(frames.length - 1, currentFrame + 1))}
                      disabled={currentFrame === frames.length - 1}
                      className="p-2 rounded-full hover:bg-white/10 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
                    >
                      →
                    </button>
                  </div>
                )}
              </div>
            </div>

            <motion.div
              ref={containerRef}
              className="h-[calc(100vh-64px)] overflow-y-auto"
              initial={false}
              animate={isReading ? {
                maxWidth: '100%',
                padding: '2rem',
              } : {
                maxWidth: '800px',
                padding: '4rem 2rem',
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {!isReading ? (
                <div className="space-y-8">
                  <h1 className="text-4xl font-bold text-white">{project.title}</h1>
                  <p className="text-lg text-white/80">{project.description}</p>
                  <button
                    onClick={handleReadCaseStudy}
                    className="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors"
                  >
                    Read Case Study
                  </button>
                </div>
              ) : (
                <div className="space-y-32">
                  {frames.map((frame, index) => (
                    <div
                      key={index}
                      ref={el => frameRefs.current[index] = el}
                      className="min-h-[calc(100vh-128px)] flex items-center"
                    >
                      <Frame frame={frame} />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
