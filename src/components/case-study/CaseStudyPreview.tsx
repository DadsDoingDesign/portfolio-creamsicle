'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import { Project } from '@/lib/data';
import { ContentBlock } from '@/lib/case-studies/apploi';

interface CaseStudyPreviewProps {
  project: Project;
  isFirst?: boolean;
  isLast?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  isViewingCaseStudy?: boolean;
  onViewCaseStudy?: (viewing: boolean) => void;
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

export default function CaseStudyPreview({ 
  project, 
  isFirst = false, 
  isLast = false,
  onPrevious = () => {},
  onNext = () => {},
  isViewingCaseStudy = false,
  onViewCaseStudy = () => {},
}: CaseStudyPreviewProps) {
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
    <div className="w-full h-full">
      <AnimatePresence mode="wait">
        {!isViewingCaseStudy ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex flex-col"
          >
            <div className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 gap-8 md:gap-16 h-full">
              {/* Project Info */}
              <div className="w-full md:w-[clamp(300px,25vw,400px)] flex flex-col mt-8 md:mt-0 shrink-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-bold mb-6 text-white leading-tight">{project.title}</h1>
                  
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.categories.map((category, index) => (
                      <span key={index} className="text-amber-400 text-[clamp(1rem,1.5vw,1.125rem)]">
                        {category}
                        {index < project.categories.length - 1 && (
                          <span className="mx-2 text-amber-400">•</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-white/80 mb-8 leading-relaxed">{project.description}</p>

                  {/* CTA */}
                  <button
                    onClick={() => {
                      onViewCaseStudy(true);
                    }}
                    className="inline-flex items-center px-6 py-3 border border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-black transition-colors text-[clamp(1rem,1.2vw,1.125rem)]"
                  >
                    Read Case Study
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="ml-2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </button>
                </motion.div>
              </div>

              {/* Preview Image */}
              <div className="w-full md:flex-1 h-full flex items-center justify-center min-h-[300px] md:min-h-[600px] max-w-[1200px] max-h-[1200px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={project.previewImage}
                    alt={`${project.title} Preview`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 70vw"
                    priority
                  />
                </motion.div>
              </div>
            </div>

            {/* Navigation Arrows */}
            {!isViewingCaseStudy && (
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-[64px]">
                <button
                  onClick={onPrevious}
                  className={`pointer-events-auto text-content-inverse-primary hover:text-amber-400 transition-colors ${
                    isFirst ? 'opacity-0' : 'opacity-100'
                  }`}
                  disabled={isFirst}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={onNext}
                  className={`pointer-events-auto text-content-inverse-primary hover:text-amber-400 transition-colors ${
                    isLast ? 'opacity-0' : 'opacity-100'
                  }`}
                  disabled={isLast}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="case-study"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            {/* Case Study Content */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="h-full overflow-y-auto px-6 md:px-20 py-20 scroll-smooth"
            >
              {/* Hero Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[300px] md:h-[600px] mb-16 max-h-[1200px]"
              >
                <Image
                  src={project.previewImage}
                  alt={`${project.title} Preview`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 75vw"
                  priority
                />
              </motion.div>

              {project.frames.map((frame, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="mb-24 min-h-[calc(100vh-200px)] flex flex-col justify-center max-w-7xl mx-auto"
                >
                  <h2 className="text-3xl font-bold mb-4 text-white">{frame.title}</h2>
                  {frame.subtitle && <h3 className="text-xl text-white/80 mb-4">{frame.subtitle}</h3>}
                  <div className="text-white/80 text-lg">{renderContent(frame.content)}</div>
                  {frame.image && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                      className="mt-8 relative h-[400px] max-h-[1200px]"
                    >
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
                    </motion.div>
                  )}
                </motion.div>
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
      </AnimatePresence>
    </div>
  );
};
