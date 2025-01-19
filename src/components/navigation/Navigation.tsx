'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface NavigationProps {
  isViewingCaseStudy?: boolean;
  onBack?: () => void;
}

export const Navigation = ({ isViewingCaseStudy, onBack }: NavigationProps) => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-background/primary"
    >
      {isViewingCaseStudy ? (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-amber-400 hover:text-amber-500 transition-colors"
        >
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
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      ) : (
        <Link 
          href="/"
          className="text-2xl font-bold text-white hover:text-amber-400 transition-colors"
        >
          DadsDoingDesign
        </Link>
      )}

      <div className="flex items-center space-x-6">
        <Link 
          href="https://github.com/DadsDoingDesign" 
          target="_blank"
          className="text-white/80 hover:text-amber-400 transition-colors"
        >
          GitHub
        </Link>
        <Link 
          href="https://twitter.com/DadsDoingDesign" 
          target="_blank"
          className="text-white/80 hover:text-amber-400 transition-colors"
        >
          Twitter
        </Link>
        <Link 
          href="https://bsky.app/profile/dadsdoingdesign.bsky.social" 
          target="_blank"
          className="text-white/80 hover:text-amber-400 transition-colors"
        >
          Bluesky
        </Link>
        <Link 
          href="https://www.artstation.com/dadsdoingdesign" 
          target="_blank"
          className="text-white/80 hover:text-amber-400 transition-colors"
        >
          Art
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navigation;
