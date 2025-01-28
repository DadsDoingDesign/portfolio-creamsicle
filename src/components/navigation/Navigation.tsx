'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, ArrowTopRightOnSquareIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { NavigationContainer } from '@/components/layout/containers';

interface NavigationProps {
  isViewingCaseStudy?: boolean;
  onBack?: () => void;
  className?: string;
}

const Navigation = ({ className = '', isViewingCaseStudy = false, onBack }: NavigationProps) => {
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
    <NavigationContainer>
      <motion.div 
        layout
        initial={{ opacity: 1 }}
        className={`w-full flex justify-between items-center px-8 py-4 ${className}`}
      >
        {isViewingCaseStudy ? (
          <button
            onClick={onBack}
            className="flex items-center gap-2 accent-secondary hover:text-amber-500 transition-colors"
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
          <button onClick={handleLogoClick}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </button>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="label-large accent-secondary hover:text-amber-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="label-large accent-secondary hover:text-amber-500 transition-colors flex items-center gap-1"
          >
            GitHub
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Navigation */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6 accent-secondary" />
          ) : (
            <Bars3Icon className="w-6 h-6 accent-secondary" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-background-secondary py-4 px-8 flex flex-col gap-4 md:hidden"
            >
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="label-large accent-secondary hover:text-amber-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="label-large accent-secondary hover:text-amber-500 transition-colors flex items-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </NavigationContainer>
  );
};

export default Navigation;
