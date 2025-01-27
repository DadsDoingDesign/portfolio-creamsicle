'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from '@/components/hero/Hero';
import CaseStudyPreview from '@/components/case-study/CaseStudyPreview';
import { umba, toProject } from '@/lib/case-studies/umba';
import { apploi } from '@/lib/case-studies/apploi';

const caseStudies = [umba, apploi];
const projects = caseStudies.map(toProject);

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
      className="w-full h-full text-white"
    >
      <AnimatePresence mode="wait">
        {!showCaseStudies && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <div className="h-full w-full px-4">
              <Hero onCaseStudiesClick={() => setShowCaseStudies(true)} />
            </div>
          </motion.div>
        )}

        {showCaseStudies && (
          <motion.div
            key="case-studies"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <AnimatePresence mode="wait">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentIndex === index ? 1 : 0,
                    pointerEvents: currentIndex === index ? 'auto' : 'none'
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full"
                >
                  <CaseStudyPreview
                    project={toProject(project)}
                    frames={toProject(project).frames}
                    isOpen={true}
                    onClose={() => setSelectedProject(null)}
                    onViewCaseStudy={handleViewCaseStudy}
                    caseStudies={projects}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
