'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from '@/components/hero/Hero';
import { Project } from '@/lib/data';
import { projects } from '@/lib/case-studies';
import { CaseStudyPreview } from '@/components/case-study/CaseStudyPreview';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleBack = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <MainLayout 
      isViewingCaseStudy={!!selectedProject}
      onBack={handleBack}
    >
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <motion.div
            key="case-study"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full"
          >
            <CaseStudyPreview project={selectedProject} />
          </motion.div>
        ) : (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full"
          >
            <Hero 
              projects={projects} 
              onSelectProject={setSelectedProject}
              onCaseStudiesClick={() => {}}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
}
