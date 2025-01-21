'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, ArrowTopRightOnSquareIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

interface NavigationProps {
  isViewingCaseStudy?: boolean;
  onBack?: () => void;
}

export default function Navigation({ isViewingCaseStudy, onBack }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

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

      <div className="hidden md:flex items-center gap-6">
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

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-amber-400 hover:text-amber-500 transition-colors"
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background-primary z-50 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl text-white hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Link 
                href="https://github.com/DadsDoingDesign" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-amber-400 transition-colors"
              >
                GitHub
              </Link>
              <Link 
                href="https://www.linkedin.com/in/denisdukhvalov/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-amber-400 transition-colors"
              >
                LinkedIn
              </Link>
              <Link 
                href="https://bsky.app/profile/dadsdoingdesign.bsky.social" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-amber-400 transition-colors"
              >
                Bluesky
              </Link>
              <Link 
                href="https://www.artstation.com/dadsdoingdesign" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-amber-400 transition-colors"
              >
                Art
              </Link>
              <button 
                className="text-2xl text-white hover:text-amber-400 transition-colors"
              >
                Download Resume
              </button>
              <button 
                className="text-2xl text-white hover:text-amber-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
