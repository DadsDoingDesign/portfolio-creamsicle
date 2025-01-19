'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import { Navigation } from '../navigation/Navigation';
import { Frame as CaseStudyFrame } from '../../lib/case-studies/apploi';

interface CaseStudyPreviewProps {
  project: {
    id: string;
    title: string;
    description: string;
    categories: string[];
    previewImage: string;
    frames: CaseStudyFrame[];
  };
  onNext?: () => void;
  onPrevious?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  direction?: 'left' | 'right';
}

export const CaseStudyPreview = ({
  project,
  onNext,
  onPrevious,
  isFirst,
  isLast,
  direction,
}: CaseStudyPreviewProps) => {
  const [isViewingCaseStudy, setIsViewingCaseStudy] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current || !isViewingCaseStudy) return;
    
    const { scrollTop, clientHeight, scrollHeight } = scrollContainerRef.current;
    const scrollProgress = scrollTop / (scrollHeight - clientHeight);
    const frameIndex = Math.floor(scrollProgress * (project.frames.length - 1));
    
    if (frameIndex !== currentFrame) {
      setCurrentFrame(frameIndex);
    }
  };

  const nextFrame = project.frames[currentFrame + 1];

  return (
    <motion.div 
      className={`flex-1 w-full h-full transition-all duration-300 ${isViewingCaseStudy ? 'fixed inset-0 z-50 bg-neutral-900' : ''}`}
    >
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50 pt-10 px-20">
        <Navigation 
          isViewingCaseStudy={isViewingCaseStudy} 
          onBack={() => setIsViewingCaseStudy(false)} 
        />
      </div>

      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className={`relative w-full h-full flex flex-col transition-all duration-300 ${
          isViewingCaseStudy ? 'overflow-y-auto' : 'px-20 pb-10'
        }`}
      >
        {!isFirst && !isViewingCaseStudy && (
          <button
            onClick={onPrevious}
            className="pointer-events-auto p-4 text-white hover:text-amber-400 transition-colors absolute left-0 top-1/2 -translate-y-1/2"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
        )}

        <motion.div
          key={project.id}
          initial={{ opacity: 0, x: direction === 'right' ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 'right' ? -100 : 100 }}
          transition={{ duration: 0.3 }}
          className={`w-full h-full flex gap-12 ${isViewingCaseStudy ? 'px-20 py-20 mt-20' : 'px-12 py-12'}`}
        >
          {/* Left Content */}
          <div className={`w-[400px] flex flex-col ${isViewingCaseStudy ? '' : 'justify-center'}`}>
            <div className="sticky top-32">
              <h2 className="text-white text-5xl font-bold mb-4">{project.title}</h2>
              <div className="flex items-center gap-2 mb-4">
                {project.categories.map((category, index) => (
                  <span key={`${project.id}-${category}-${index}`}>
                    <span className="text-amber-400 text-sm font-medium">
                      {category}
                    </span>
                    {index < project.categories.length - 1 && (
                      <span className="text-amber-400 text-sm px-2">•</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="text-white/80 text-xl mb-8 max-w-2xl">{project.description}</p>

              {isViewingCaseStudy && (
                <div className="w-[400px]">
                  {project.frames.map((frame, index) => (
                    <div key={index} className="mb-24 min-h-[calc(100vh-200px)] flex flex-col justify-center">
                      <h3 className="text-white text-3xl font-bold mb-4">{frame.title}</h3>
                      <p className="text-white/80 text-lg">{frame.content}</p>
                      {frame.image && (
                        <div className="mt-8 relative h-[400px]">
                          <Image
                            src={frame.image}
                            alt={frame.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {!isViewingCaseStudy && (
                <div className="w-fit">
                  <button
                    onClick={() => setIsViewingCaseStudy(true)}
                    className="inline-flex items-center gap-2 label-tiny px-3 py-1.5 border border-amber-400 text-amber-400 rounded-lg hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-colors"
                  >
                    Read Case Study
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="transform transition-transform"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Image */}
          <div className={`flex-1 flex ${isViewingCaseStudy ? 'items-start' : 'items-center'} justify-center`}>
            <div className="relative w-full h-[500px]">
              <Image
                src={project.previewImage}
                alt={`${project.title} Preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>

        {!isLast && !isViewingCaseStudy && (
          <button
            onClick={onNext}
            className="pointer-events-auto p-4 text-white hover:text-amber-400 transition-colors absolute right-0 top-1/2 -translate-y-1/2"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        )}

        {/* Bottom Navigation for Case Study */}
        {isViewingCaseStudy && nextFrame && (
          <div className="sticky bottom-0 left-0 right-0 bg-neutral-900 p-4">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-20">
              <div className="h-px flex-1 bg-amber-400/20" />
              <button
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const nextFrameElement = scrollContainerRef.current.children[currentFrame + 1];
                    nextFrameElement?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="ml-8 text-amber-400 hover:text-amber-500 transition-colors text-lg font-medium flex items-center gap-2"
              >
                Next: {nextFrame.title}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CaseStudyPreview;
