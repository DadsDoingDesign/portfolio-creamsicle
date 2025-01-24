'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, ArrowTopRightOnSquareIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

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

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.8, ease: "linear" }}
      className="w-full flex justify-between items-center pb-4 md:pb-6 lg:pb-10"
    >
      <div className="flex items-center gap-4">
        {/* Logo */}
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
          <button 
            onClick={handleLogoClick}
            className="relative w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Image
              src="/dendenlogo.svg"
              alt="DadsDoingDesign Logo"
              fill
              className="object-contain"
            />
          </button>
        )}
        {/* Navigation links hidden until content is ready */}
      </div>

      <div className="hidden md:flex items-center gap-6">
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/DadsDoingDesign" 
            target="_blank"
            className="text-content-inverse-primary hover:text-amber-400 transition-colors"
          >
            <Image src="/github.svg" alt="GitHub" width={24} height={24} />
          </Link>
          <Link 
            href="https://www.linkedin.com/" 
            target="_blank"
            className="text-content-inverse-primary hover:text-amber-400 transition-colors"
          >
            <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </Link>
          <Link 
            href="https://bsky.app/profile/dendendesign.bsky.social" 
            target="_blank"
            className="text-content-inverse-primary hover:text-amber-400 transition-colors"
          >
            <Image src="/bluesky.svg" alt="BlueSky" width={24} height={24} />
          </Link>
          <Link 
            href="https://bsky.app/profile/eatmeart.bsky.social" 
            target="_blank"
            className="text-content-inverse-primary hover:text-amber-400 transition-colors"
          >
            <Image src="/art.svg" alt="Art" width={24} height={24} />
          </Link>
        </div>
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

      {/* Mobile Menu Button */}
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="fixed inset-0 bg-background-primary z-50 md:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-amber-400 hover:text-amber-500 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

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
                href="https://www.linkedin.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-amber-400 transition-colors"
              >
                LinkedIn
              </Link>
              <Link 
                href="https://bsky.app/profile/dendendesign.bsky.social" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-amber-400 transition-colors"
              >
                Bluesky
              </Link>
              <Link 
                href="https://bsky.app/profile/eatmeart.bsky.social" 
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
