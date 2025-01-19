'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import { Project } from '@/lib/data';
import { ContentBlock } from '@/lib/case-studies/apploi';

interface CaseStudyPreviewProps {
  project: Project;
  onNext?: () => void;
  onPrevious?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

const renderContent = (content: ContentBlock[]) => {
  return content.map((block, index) => {
    switch (block.type) {
      case 'paragraph':
        return <p key={index} className="text-white/80 text-lg mb-4">{block.content as string}</p>;
      case 'bullet-list':
        return (
          <ul key={index} className="list-disc list-inside text-white/80 text-lg mb-4">
            {Array.isArray(block.content) && (block.content as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      case 'number-list':
        return (
          <ol key={index} className="list-decimal list-inside text-white/80 text-lg mb-4">
            {Array.isArray(block.content) && (block.content as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );
      case 'stat':
        return <div key={index} className="text-2xl font-bold text-white mb-4">{block.content as string}</div>;
      case 'quote':
        return <blockquote key={index} className="border-l-4 border-white/20 pl-4 text-white/80 italic text-lg mb-4">{block.content as string}</blockquote>;
      default:
        return null;
    }
  });
};

export const CaseStudyPreview = ({
  project,
  onNext,
  onPrevious,
  isFirst,
  isLast,
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
    <div className={`w-full h-full transition-all duration-300 ${isViewingCaseStudy ? 'fixed inset-0 z-50 bg-background-primary' : 'relative'}`}>
      {!isViewingCaseStudy ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex flex-col"
        >
          <div className="flex-1 flex">
            {/* Project Info */}
            <div className="w-1/2 pr-8 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-5xl font-bold mb-6 text-white">{project.title}</h1>
                <p className="text-xl text-white/80 mb-8">{project.description}</p>
                
                {/* Categories */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-amber-400/10 text-amber-400 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => setIsViewingCaseStudy(true)}
                  className="inline-flex items-center px-6 py-3 border border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-black transition-colors"
                >
                  View Case Study
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
              </motion.div>
            </div>

            {/* Preview Image */}
            <div className="w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative h-[500px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={project.previewImage}
                  alt={`${project.title} Preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={onPrevious}
              disabled={isFirst}
              className={`p-2 rounded-full text-white ${
                isFirst
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:text-amber-400 transition-colors'
              }`}
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={onNext}
              disabled={isLast}
              className={`p-2 rounded-full text-white ${
                isLast
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:text-amber-400 transition-colors'
              }`}
            >
              <ArrowRightIcon className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full"
        >
          {/* Case Study Content */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="h-full overflow-y-auto px-20 py-20"
          >
            <button
              onClick={() => setIsViewingCaseStudy(false)}
              className="fixed top-10 left-10 text-white hover:text-amber-400 transition-colors"
            >
              <ArrowLeftIcon className="w-6 h-6" />
              Back
            </button>

            {project.frames.map((frame, index) => (
              <div key={index} className="mb-24 min-h-[calc(100vh-200px)] flex flex-col justify-center max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-white">{frame.title}</h2>
                {frame.subtitle && <h3 className="text-xl text-white/80 mb-4">{frame.subtitle}</h3>}
                <div className="text-white/80 text-lg">{renderContent(frame.content)}</div>
                {frame.image && (
                  <div className="mt-8 relative h-[400px]">
                    <Image
                      src={frame.image.src}
                      alt={frame.image.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {frame.image.caption && (
                      <p className="text-white/60 text-sm mt-2 text-center">{frame.image.caption}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Navigation for Case Study */}
          {nextFrame && (
            <div className="fixed bottom-0 left-0 right-0 bg-background-primary p-4">
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
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};
