'use client';

import { ReactNode } from 'react';
import Navigation from '../case-study/Navigation';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: ReactNode;
  isViewingCaseStudy: boolean;
  onBack: () => void;
}

export default function MainLayout({ children, isViewingCaseStudy, onBack }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen bg-neutral-900">
      {/* Fixed Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-sm"
      >
        <Navigation
          isViewingCaseStudy={isViewingCaseStudy}
          onBack={onBack}
          className="mx-auto max-w-7xl"
        />
      </motion.header>

      {/* Main Content Area */}
      <main className="relative min-h-screen pt-24">
        {children}
      </main>
    </div>
  );
}
