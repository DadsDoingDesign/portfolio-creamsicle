'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface CaseStudyPreviewProps {
  project: {
    id: string;
    title: string;
    description: string;
    categories: string[];
    previewImage: string;
  };
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
  direction: 'left' | 'right';
}

export const CaseStudyPreview = ({
  project,
  onNext,
  onPrevious,
  isFirst,
  isLast,
  direction,
}: CaseStudyPreviewProps) => {
  return (
    <div className="flex-1 w-full h-full">
      <div className="relative w-full h-full px-20 pb-10 flex flex-col gap-10">
        {!isFirst && (
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
          className="w-full h-full flex gap-12 px-12"
        >
          {/* Left Content */}
          <div className="w-[400px] flex flex-col justify-center">
            <h2 className="text-white text-5xl font-bold mb-4">{project.title}</h2>
            <div className="flex items-center gap-2 mb-4">
              {project.categories.map((category, index) => (
                <span key={`${project.id}-${category}-${index}`}>
                  <span
                    className="text-amber-400 text-sm font-medium"
                  >
                    {category}
                  </span>
                  {index < project.categories.length - 1 && (
                    <span className="text-amber-400 text-sm px-2">•</span>
                  )}
                </span>
              ))}
            </div>
            <p className="text-white/80 text-xl mb-8 max-w-2xl">{project.description}</p>
            <div className="w-fit">
              <button className="inline-flex items-center gap-2 label-tiny px-3 py-1.5 border border-amber-400 text-amber-400 rounded-lg hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-colors">
                Read Case Studies
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
          </div>

          {/* Right Image */}
          <div className="flex-1 flex items-center justify-center">
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

        {!isLast && (
          <button
            onClick={onNext}
            className="pointer-events-auto p-4 text-white hover:text-amber-400 transition-colors absolute right-0 top-1/2 -translate-y-1/2"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CaseStudyPreview;
