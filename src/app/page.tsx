'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from '@/components/hero/Hero';
import { Project } from '@/lib/data';
import { projects } from '@/lib/case-studies';
import CaseStudyPreview from '@/components/case-study/CaseStudyPreview';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewingCaseStudy, setIsViewingCaseStudy] = useState(false);

  const handleViewCaseStudy = useCallback((viewing: boolean) => {
    setIsViewingCaseStudy(viewing);
  }, []);

  const handleBack = useCallback(() => {
    if (isViewingCaseStudy) {
      setIsViewingCaseStudy(false);
    }
    setSelectedProject(null);
  }, [isViewingCaseStudy]);

  return (
    <MainLayout 
      isViewingCaseStudy={isViewingCaseStudy} 
      onBack={handleBack}
    >
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <AnimatePresence mode="wait">
          {!selectedProject && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-10"
            >
              <Hero projects={projects} onSelectProject={setSelectedProject} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Case Study Previews */}
        <div className="relative">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                  },
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
                style={{ pointerEvents: currentIndex === index ? 'auto' : 'none' }}
              >
                <CaseStudyPreview project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Selected Case Study */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-20 bg-neutral-900"
            >
              <CaseStudyPreview project={selectedProject} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MainLayout>
  );
}
