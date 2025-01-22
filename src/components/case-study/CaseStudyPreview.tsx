'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState, useRef, KeyboardEvent } from 'react';
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-neutral-900"
        >
          <div className="min-h-screen w-full max-w-7xl px-4 py-8 mx-auto">
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={onClose}
                className="flex items-center text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Back
              </button>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentFrame(Math.max(0, currentFrame - 1))}
                  disabled={currentFrame === 0}
                  className="p-2 rounded-full hover:bg-white/10 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
                >
                  <ArrowLeftIcon className="w-5 h-5 text-white/80" />
                </button>
                <button
                  onClick={() => setCurrentFrame(Math.min(frames.length - 1, currentFrame + 1))}
                  disabled={currentFrame === frames.length - 1}
                  className="p-2 rounded-full hover:bg-white/10 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
                >
                  <ArrowRightIcon className="w-5 h-5 text-white/80" />
                </button>
              </div>
            </div>
            
            <div className="space-y-8">
              {renderContent(frames[currentFrame], currentFrame)}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
