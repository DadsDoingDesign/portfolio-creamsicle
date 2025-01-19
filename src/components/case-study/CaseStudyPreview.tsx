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
        return <p key={index} className="text-gray-600 text-lg mb-4">{block.content as string}</p>;
      case 'bullet-list':
        return (
          <ul key={index} className="list-disc list-inside text-gray-600 text-lg mb-4">
            {Array.isArray(block.content) && (block.content as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      case 'number-list':
        return (
          <ol key={index} className="list-decimal list-inside text-gray-600 text-lg mb-4">
            {Array.isArray(block.content) && (block.content as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );
      case 'stat':
        return <div key={index} className="text-2xl font-bold text-amber-400 mb-4">{block.content as string}</div>;
      case 'quote':
        return <blockquote key={index} className="border-l-4 border-amber-400 pl-4 text-gray-600 italic text-lg mb-4">{block.content as string}</blockquote>;
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
            <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{project.description}</p>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.categories.map((category, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => setIsViewingCaseStudy(true)}
              className="inline-flex items-center px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-500 transition-colors"
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
            className="relative h-full rounded-2xl overflow-hidden"
          >
            {project.frames[0].image && (
              <Image
                src={project.frames[0].image.src}
                alt={project.frames[0].image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* Case Study Content */}
      {isViewingCaseStudy && (
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto"
        >
          {project.frames.map((frame, index) => (
            <div key={index} className="mb-24 min-h-[calc(100vh-200px)] flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">{frame.title}</h2>
              {frame.subtitle && <h3 className="text-xl text-gray-600 mb-4">{frame.subtitle}</h3>}
              <div className="text-gray-600 text-lg">{renderContent(frame.content)}</div>
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
                    <p className="text-gray-600 text-sm mt-2 text-center">{frame.image.caption}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={onPrevious}
          disabled={isFirst}
          className={`p-2 rounded-full ${
            isFirst
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-100 transition-colors'
          }`}
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={onNext}
          disabled={isLast}
          className={`p-2 rounded-full ${
            isLast
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-100 transition-colors'
          }`}
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>

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
    </motion.div>
  );
};

export default CaseStudyPreview;
