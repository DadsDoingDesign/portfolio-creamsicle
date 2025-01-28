'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, ArrowTopRightOnSquareIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { NavigationContainer } from '@/components/layout/containers';
import clsx from 'clsx';

interface NavigationProps {
  isViewingCaseStudy?: boolean;
  onBack?: () => void;
  className?: string;
}

const Navigation = ({ className = '', isViewingCaseStudy = false, onBack }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'GitHub', href: 'https://github.com/yourusername', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', external: true },
    { label: 'Bluesky', href: 'https://bsky.app/profile/yourusername', external: true },
    { label: 'Art', href: 'https://yourartsite.com', external: true },
  ];

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <NavigationContainer>
      <motion.div 
        layout
        initial={{ opacity: 1 }}
        className={clsx(
          'layout-navigation',
          className
        )}
      >
        {isViewingCaseStudy ? (
          <button
            onClick={onBack}
            className="button--nav-back"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 12H4M4 12l8-8M4 12l8 8" />
            </svg>
            Back
          </button>
        ) : (
          <button onClick={handleLogoClick} className="button--nav-menu">
            <Image
              src="\dendenlogo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </button>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="label-large accent-secondary hover:text-amber-500 transition-colors flex items-center gap-1"
              >
                {item.label}
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/DenisDukhvalov_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="DenisDukhvalov_Resume.pdf"
              className="button button--primary"
            >
              Resume
            </a>
            {/* TODO: Future enhancement - Replace mailto with a modal/popup contact form
              Implementation options:
              1. Use state to control modal visibility: const [isContactModalOpen, setIsContactModalOpen] = useState(false)
              2. Create a ContactForm component with form validation and email sending functionality
              3. Add modal/dialog component using headlessui/react or similar for accessibility
              4. Handle form submission through a serverless function or API route
            */}
            <a
              href="mailto:denis.dukhvalov@gmail.com"
              className="button button--primary-outline"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="button--nav-menu md:hidden"
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden"
            >
              <div className="flex flex-col items-center gap-4 py-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label-large accent-secondary hover:text-amber-500 transition-colors flex items-center gap-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </NavigationContainer>
  );
};

export default Navigation;
