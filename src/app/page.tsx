'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from '@/components/hero/Hero';
import CaseStudyPreview from '@/components/case-study/CaseStudyPreview';
import { umba } from '../lib/case-studies/umba';
import Navigation from '@/components/navigation/Navigation';

const projects = [umba];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCaseStudies, setShowCaseStudies] = useState(false);
  const [isViewingCaseStudy, setIsViewingCaseStudy] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastScrollTime = Date.now();
    const scrollCooldown = 500; // ms between scroll actions

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // If viewing case study content, don't handle horizontal scroll
      if (isViewingCaseStudy) return;
      
      const currentTime = Date.now();
      if (currentTime - lastScrollTime < scrollCooldown) {
        return;
      }
      lastScrollTime = currentTime;

      if (e.deltaY > 0) {
        // Scrolling down
        if (!showCaseStudies) {
          setShowCaseStudies(true);
        } else if (currentIndex < projects.length - 1) {
          setCurrentIndex(prev => prev + 1);
        }
      } else if (e.deltaY < 0) {
        // Scrolling up
        if (showCaseStudies) {
          if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
          } else {
            setShowCaseStudies(false);
          }
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [currentIndex, showCaseStudies, isViewingCaseStudy]);

  const handleViewCaseStudy = (viewing: boolean) => {
    setIsViewingCaseStudy(viewing);
  };

  return (
    <div 
      ref={containerRef} 
      className="h-screen overflow-hidden bg-neutral-900 text-white relative"
    >
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <Navigation isViewingCaseStudy={isViewingCaseStudy} />
      </div>

      <AnimatePresence mode="wait">
        {!showCaseStudies && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full container mx-auto px-6 py-20"
          >
            <Hero onCaseStudiesClick={() => setShowCaseStudies(true)} />
          </motion.div>
        )}

        {showCaseStudies && (
          <motion.div
            key="case-studies"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.5 }}
            className="h-full pt-20"
          >
            <div className="container mx-auto px-6">
              <div className="flex items-center justify-center h-full">
                <AnimatePresence mode="wait">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: '100%' }}
                      animate={{ 
                        opacity: currentIndex === index ? 1 : 0,
                        x: currentIndex === index ? 0 : '-100%',
                        pointerEvents: currentIndex === index ? 'auto' : 'none'
                      }}
                      exit={{ opacity: 0, x: '-100%' }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <CaseStudyPreview
                        project={project}
                        frames={project.frames}
                        isOpen={true}
                        onClose={() => setSelectedProject(null)}
                        onViewCaseStudy={handleViewCaseStudy}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
