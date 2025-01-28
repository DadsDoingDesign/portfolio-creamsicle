'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Navigation from '@/components/navigation/Navigation';
import { HeroContainer, NavigationContainer, ContentContainer } from '@/components/layout/containers';

interface HeroProps {
  onCaseStudiesClick: () => void;
}

export const Hero = ({ onCaseStudiesClick }: HeroProps) => {
  return (
    <HeroContainer>
      <NavigationContainer>
        <Navigation isViewingCaseStudy={false} />
      </NavigationContainer>
      
      <ContentContainer className="flex-1 flex flex-col justify-center">
        <motion.h1 
          className="display-large mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span 
            className="accent-primary block mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Create better products
          </motion.span>
          <motion.span 
            className="accent-secondary block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Grow your business
          </motion.span>
        </motion.h1>
        
        <motion.button
          onClick={onCaseStudiesClick}
          className="w-fit label-large px-6 py-3 border accent-secondary-border accent-secondary accent-secondary-hover rounded-lg transition-all flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileTap={{ scale: 0.95 }}
        >
          See Case Studies
          <ArrowRightIcon className="w-5 h-5" />
        </motion.button>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero;
