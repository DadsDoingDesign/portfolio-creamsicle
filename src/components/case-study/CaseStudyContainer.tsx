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

  const getNextFrameTitle = () => {
    if (currentFrame < frames.length - 1) {
      const nextFrame = frames[currentFrame + 1];
      return nextFrame.title;
    }
    return null;
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {!isReading ? (
        <div className="w-full h-full flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 max-w-md h-full flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-6 text-white">{project.title}</h1>
            <p className="text-lg text-gray-300 mb-8">{project.description}</p>
            {frames[0]?.content.sections?.[0] && (
              <p className="text-gray-300 mb-8">{frames[0].content.sections[0].text}</p>
            )}
            <button
              onClick={handleReadCaseStudy}
              className="px-6 py-3 border-2 border-amber-400 text-amber-400 rounded-lg hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-colors"
            >
              Read Case Study
            </button>
          </div>
          {frames[0]?.image && (
            <div className="flex-1 w-full h-full relative">
              <Image
                src={frames[0].image.src}
                alt={frames[0].image.alt}
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="h-full">
          <div className="sticky top-0 z-10 bg-neutral-900/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <button
                onClick={handleBack}
                className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
              >
                <span className="sr-only">Back</span>
                ←
              </button>
            </div>
          </div>

          <div
            ref={containerRef}
            className="h-[calc(100vh-64px)] overflow-y-auto snap-y snap-mandatory"
          >
            <div className="space-y-32 py-12">
              {frames.map((frame, index) => (
                <div
                  key={index}
                  ref={(el) => { frameRefs.current[index] = el; }}
                  className="min-h-[calc(100vh-128px)] snap-start"
                >
                  <Frame frame={frame} isFirstFrame={index === 0} />
                </div>
              ))}
            </div>
          </div>

          {getNextFrameTitle() && (
            <div className="fixed bottom-0 left-0 right-0 bg-neutral-900/80 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <span className="text-white/60">Next</span>
                <h2 className="text-white font-medium">{getNextFrameTitle()}</h2>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
