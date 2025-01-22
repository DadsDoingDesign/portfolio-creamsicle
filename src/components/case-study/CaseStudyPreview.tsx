'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import { Project } from '@/lib/data';
import { CaseStudyContent, CaseStudyFrame } from '@/types/case-study';

interface CaseStudyPreviewProps {
  project: Project;
  frames: CaseStudyFrame[];
  isOpen: boolean;
  onClose: () => void;
  onViewCaseStudy?: (viewing: boolean) => void;
}

interface ContentProps {
  frame: CaseStudyFrame;
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

const CaseStudyPreviewContent = ({ frame, index }: ContentProps) => {
  const { content } = frame;
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
      <h2 className="text-3xl font-bold">{frame.title}</h2>
      {elements}
    </motion.div>
  );
};

const renderContent = (frame: CaseStudyFrame, index: number) => {
  return <CaseStudyPreviewContent frame={frame} index={index} />;
};

export default function CaseStudyPreview({ 
  project,
  frames,
  isOpen,
  onClose,
  onViewCaseStudy
}: CaseStudyPreviewProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (currentFrame < frames.length - 1) {
      setCurrentFrame(currentFrame + 1);
    }
  };

  const handlePrev = () => {
    if (currentFrame > 0) {
      setCurrentFrame(currentFrame - 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`}
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-neutral-950"
        onClick={onClose}
      />

      {/* Content */}
      <div 
        ref={containerRef}
        className="relative h-full overflow-y-auto"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className="container mx-auto px-4 py-8">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center mb-8"
          >
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Close
            </button>
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                disabled={currentFrame === 0}
                className={`p-2 rounded-full ${
                  currentFrame === 0
                    ? 'text-white/20 cursor-not-allowed'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                } transition-colors`}
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </button>
              <div className="text-white/60">
                {currentFrame + 1} / {frames.length}
              </div>
              <button
                onClick={handleNext}
                disabled={currentFrame === frames.length - 1}
                className={`p-2 rounded-full ${
                  currentFrame === frames.length - 1
                    ? 'text-white/20 cursor-not-allowed'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                } transition-colors`}
              >
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          {/* Frame Content */}
          {frames.map((frame, index) => (
            <div
              key={index}
              className={index === currentFrame ? 'block' : 'hidden'}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className="mb-24 min-h-[calc(100vh-200px)] flex flex-col justify-center max-w-7xl mx-auto"
              >
                {renderContent(frame, index)}
                {frame.image && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-8"
                  >
                    <Image
                      src={frame.image}
                      alt={frame.title}
                      width={1200}
                      height={675}
                      className="rounded-lg shadow-lg"
                    />
                  </motion.div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
