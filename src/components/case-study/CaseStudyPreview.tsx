'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import { Project } from '@/lib/data';
import { CaseStudyContent } from '@/types/case-study';
import { CaseStudyFrame } from '@/types/case-study';

interface CaseStudyPreviewProps {
  project: Project;
  isFirst?: boolean;
  isLast?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  isViewingCaseStudy?: boolean;
  onViewCaseStudy?: (viewing: boolean) => void;
}

interface Props {
  title: string;
  content: CaseStudyContent;
  index: number;
}

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const CaseStudyPreviewContent = ({ title, content, index }: Props) => {
  const elements: JSX.Element[] = [];

  if (content.sections && content.sections[0]) {
    elements.push(
      <p key="main-text" className="text-white/80 text-lg mb-4">
        {content.sections[0].text}
      </p>
    );
  }

  if (content.team) {
    elements.push(
      <div key="team" className="space-y-2">
        <h3 className="text-lg font-semibold text-amber-400">Team</h3>
        <ul className="list-none space-y-1">
          {content.team.map((member, i) => (
            <li
              key={i}
              className={member.highlight ? 'text-amber-400' : 'text-gray-400'}
            >
              {member.role}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (content.timeline) {
    elements.push(
      <div key="timeline" className="space-y-2">
        <h3 className="text-lg font-semibold text-amber-400">Timeline</h3>
        <ul className="list-none space-y-1">
          {content.timeline.map((phase, i) => (
            <li key={i} className="text-gray-400">
              {phase.phase}: {phase.activity}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={contentVariants}
      custom={index}
    >
      <h2 className="text-3xl font-bold">{title}</h2>
      {elements}
    </motion.div>
  );
};

const renderContent = (content: CaseStudyContent, index: number) => {
  return <CaseStudyPreviewContent title={content.title} content={content} index={index} />;
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
            <div className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center px-6 lg:px-20 md:px-10 gap-8 md:gap-16 h-full">
              {/* Project Info */}
              <div className="w-full md:w-[clamp(300px,30vw,500px)] flex flex-col mt-8 md:mt-0 shrink-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-bold mb-6 text-white leading-[1.1]">{project.title}</h1>
                  
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.categories.map((category, index) => (
                      <span key={index} className="text-amber-400 text-[clamp(0.875rem,1.2vw,1.25rem)]">
                        {category}
                        {index < project.categories.length - 1 && (
                          <span className="mx-2 text-amber-400">•</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <p className="text-[clamp(1rem,1.4vw,1.5rem)] text-white/80 mb-8 leading-relaxed">{project.description}</p>

                  {/* CTA */}
                  <button
                    onClick={() => {
                      onViewCaseStudy(true);
                    }}
                    className="inline-flex items-center px-6 py-3 border border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-black transition-colors text-[clamp(0.875rem,1.2vw,1.25rem)]"
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
              {project.frames.map((frame, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="mb-24 min-h-[calc(100vh-200px)] flex flex-col justify-center max-w-7xl mx-auto"
                >
                  {renderContent(frame.content, index)}
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
