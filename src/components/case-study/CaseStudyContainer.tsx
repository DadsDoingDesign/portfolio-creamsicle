'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
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
        threshold: 0.6,
        rootMargin: '-20% 0px'
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

  const handlePrevFrame = () => {
    if (currentFrame > 0) {
      setCurrentFrame(currentFrame - 1);
    }
  };

  const handleNextFrame = () => {
    if (currentFrame < frames.length - 1) {
      setCurrentFrame(currentFrame + 1);
    }
  };

  const getNextFrameTitle = () => {
    if (currentFrame < frames.length - 1) {
      const nextFrame = frames[currentFrame + 1];
      return nextFrame.title;
    }
    return null;
  };

  return (
    <>
      {!isReading ? (
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,400px)_1fr] gap-20 items-center">
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
            <div className="flex items-center justify-center max-h-[1000px] w-full">
              <Image
                src={frames[0].image.src}
                alt={frames[0].image.alt}
                width={1920}
                height={1080}
                className="max-h-[1000px] w-auto h-auto object-contain"
                priority
              />
            </div>
          )}
        </div>
      ) : (
        <div className="w-full h-full">
          <div
            ref={containerRef}
            className="h-[calc(100vh-64px)] overflow-y-auto snap-y snap-mandatory"
          >
            <div className="space-y-32 py-12">
              {frames.map((frame, index) => (
                <div
                  key={index}
                  ref={(el) => { frameRefs.current[index] = el; }}
                  className="snap-start grid grid-cols-1 md:grid-cols-[minmax(0,400px)_1fr] xl:grid-cols-[minmax(0,400px)_1fr_1fr] gap-8 w-full"
                >
                  <div className="space-y-6">
                    <Frame frame={frame} isFirstFrame={index === 0} />
                  </div>
                  {frame.image && (
                    <div className="col-span-1 xl:col-span-2 flex items-center justify-center">
                      <Image
                        src={frame.image.src}
                        alt={frame.image.alt}
                        width={1920}
                        height={1080}
                        className="max-h-[800px] w-auto h-auto object-contain"
                        priority={index === 0}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {(currentFrame > 0 || getNextFrameTitle()) && (
            <div className="bg-neutral-900/80 backdrop-blur-sm">
              <div className="w-full px-4 py-4 flex justify-between items-center">
                {currentFrame > 0 ? (
                  <button 
                    onClick={handlePrevFrame}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Previous section
                  </button>
                ) : (
                  <div /> {/* Empty div for spacing */}
                )}
                {getNextFrameTitle() && (
                  <button
                    onClick={handleNextFrame}
                    className="flex flex-col items-end text-white/80 hover:text-white transition-colors"
                  >
                    <span className="text-sm">Next</span>
                    <h2 className="font-medium">{getNextFrameTitle()}</h2>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
