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
    <div className="w-full max-w-6xl mx-auto">
      {!isReading ? (
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 text-white">{project.title}</h2>
            <p className="text-lg text-gray-300 mb-8">{project.description}</p>
            {frames[0]?.content.sections?.[0] && (
              <p className="text-gray-300 mb-8">{frames[0].content.sections[0].text}</p>
            )}
            <button
              onClick={handleReadCaseStudy}
              className="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors"
            >
              Read Case Study
            </button>
          </div>
          {frames[0]?.image && (
            <div className="flex-1">
              <Image
                src={frames[0].image.src}
                alt={frames[0].image.alt}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="sticky top-0 z-10 bg-neutral-900/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <button
                onClick={handleBack}
                className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
              >
                <span className="sr-only">Back</span>
                ←
              </button>
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
            </div>
          </div>

          <div
            ref={containerRef}
            className="h-[calc(100vh-64px)] overflow-y-auto"
          >
            <div className="space-y-32 py-12">
              {frames.map((frame, index) => (
                <div
                  key={index}
                  ref={(el) => { frameRefs.current[index] = el; }}
                  className="min-h-[calc(100vh-128px)] flex items-center"
                >
                  <Frame frame={frame} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
