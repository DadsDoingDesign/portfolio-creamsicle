'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Navigation from '@/components/navigation/Navigation';

interface HeroProps {
  onCaseStudiesClick: () => void;
}

export const Hero = ({ onCaseStudiesClick }: HeroProps) => {
  return (
    <div className="surface-hero">
      <nav className="surface-navigation">
        <Navigation isViewingCaseStudy={false} />
      </nav>
      
      <main className="layout-content layout-content--centered">
        <motion.h1 
          className="typography-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span 
            className="typography-tagline typography-tagline--primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Create better products
          </motion.span>
          <motion.span 
            className="typography-tagline typography-tagline--secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Grow your business
          </motion.span>
        </motion.h1>
        
        <motion.button
          onClick={onCaseStudiesClick}
          className="button button--secondary-outline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileTap={{ scale: 0.95 }}
        >
          View Case Studies
          <ArrowRightIcon className="w-5 h-5" />
        </motion.button>
      </main>
    </div>
  );
};

export default Hero;
