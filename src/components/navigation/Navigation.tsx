'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full bg-background/primary"
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo and Left-aligned menu items */}
        <div className="flex items-center gap-8">
          <Image
            src="/dendenlogo.svg"
            alt="Denden Logo"
            width={40}
            height={40}
            className="w-auto h-8"
          />
          <Link 
            href="/case-studies"
            className="label-tiny text-white hover:text-amber-500 transition-colors flex items-center gap-1"
          >
            Case Studies
            <ChevronDownIcon className="w-4 h-4" />
          </Link>
          <Link 
            href="/visual-explorations"
            className="label-tiny text-white hover:text-amber-500 transition-colors flex items-center gap-1"
          >
            Visual Explorations
            <ChevronDownIcon className="w-4 h-4" />
          </Link>
          <Link 
            href="/about"
            className="label-tiny text-white hover:text-amber-500 transition-colors flex items-center gap-1"
          >
            About
            <ChevronDownIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Right-aligned items */}
        <div className="flex items-center gap-6">
          <Link 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="label-tiny text-white hover:text-amber-500 transition-colors flex items-center gap-1"
          >
            GitHub
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </Link>
          <Link 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="label-tiny text-white hover:text-amber-500 transition-colors flex items-center gap-1"
          >
            LinkedIn
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </Link>
          <button 
            className="inline-flex items-center label-tiny px-3 py-1.5 bg-orange-400 text-black rounded-lg hover:bg-orange-500 transition-colors"
          >
            Download Resume
          </button>
          <button 
            className="inline-flex items-center label-tiny px-3 py-1.5 border border-orange-400 text-orange-400 rounded-lg hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
