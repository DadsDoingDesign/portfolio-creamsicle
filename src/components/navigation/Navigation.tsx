'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface NavigationProps {
  isViewingCaseStudy?: boolean;
  onBack?: () => void;
}

export default function Navigation({ isViewingCaseStudy, onBack }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full flex items-center justify-between gap-auto"
    >
      <div className="flex items-center gap-8">
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
          <Image
            src="/dendenlogo.svg"
            alt="Denden Logo"
            width={40}
            height={40}
            className="w-auto h-8"
          />
        )}
        {/* Navigation links hidden until content is ready */}
      </div>

      <div className="flex items-center gap-6">
        <Link 
          href="https://github.com/DadsDoingDesign" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-content-inverse-primary hover:text-amber-500 transition-colors flex items-center gap-1"
        >
          GitHub
          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
        </Link>
        <Link 
          href="https://www.linkedin.com/in/denisdukhvalov/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-content-inverse-primary hover:text-amber-500 transition-colors flex items-center gap-1"
        >
          LinkedIn
          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
        </Link>
        <Link 
          href="https://bsky.app/profile/dadsdoingdesign.bsky.social" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-content-inverse-primary hover:text-amber-500 transition-colors flex items-center gap-1"
        >
          Bluesky
          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
        </Link>
        <Link 
          href="https://www.artstation.com/dadsdoingdesign" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-content-inverse-primary hover:text-amber-500 transition-colors flex items-center gap-1"
        >
          Art
          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
        </Link>
        <button 
          className="text-sm font-medium px-3 py-1.5 bg-orange-400 text-black rounded-lg hover:bg-orange-500 transition-colors"
        >
          Download Resume
        </button>
        <button 
          className="text-sm font-medium px-3 py-1.5 border border-orange-400 text-orange-400 rounded-lg hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-colors"
        >
          Contact
        </button>
      </div>
    </motion.nav>
  );
}
