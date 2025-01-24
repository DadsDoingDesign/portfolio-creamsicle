'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface HeroProps {
  onCaseStudiesClick: () => void;
}

export const Hero = ({ onCaseStudiesClick }: HeroProps) => {
  return (
    <motion.div 
      className="h-full w-full flex flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="display-large mb-12">
        <motion.span 
          className="text-orange-400 block mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Create better products
        </motion.span>
        <motion.span 
          className="text-amber-400 block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Grow your business
        </motion.span>
      </h1>
      
      <motion.button
        onClick={onCaseStudiesClick}
        className="w-fit label-large px-6 py-3 border border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-black transition-all flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileTap={{ scale: 0.95 }}
      >
        See Case Studies
        <ArrowRightIcon className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};

export default Hero;
