'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Navigation from '@/components/navigation/Navigation';
import { Project } from '@/lib/data';

interface HeroProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onCaseStudiesClick: () => void;
}

export const Hero = ({ projects, onSelectProject, onCaseStudiesClick }: HeroProps) => {
  return (
    <>
      <div className="w-full flex-none">
        <Navigation isViewingCaseStudy={false} />
      </div>
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
        
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8">
            Hi, I'm Deniz.
            <br />
            I design digital products
            <br />
            that solve real problems.
          </h1>
          <div className="space-y-6">
            {projects.map((project) => (
              <motion.button
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group flex items-center gap-4 text-2xl text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 20 }}
              >
                <ArrowRightIcon className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                {project.title}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
