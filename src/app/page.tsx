'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/navigation/Navigation';
import { Hero } from '@/components/hero/Hero';
import { CaseStudyPreview } from '@/components/case-study/CaseStudyPreview';
import { projects } from '@/lib/data';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCaseStudies, setShowCaseStudies] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTime = Date.now();
    const scrollCooldown = 500; // ms between scroll actions

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
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
  }, [showCaseStudies, currentIndex, projects.length]);

  const handleCaseStudiesClick = () => {
    setShowCaseStudies(true);
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const currentProject = projects[currentIndex];
  
  // Map project technologies to categories for display
  const getCategories = (project: typeof projects[0]) => {
    return project.technologies.slice(0, 2).map(tech => {
      switch (tech) {
        case 'React':
          return 'Frontend Development';
        case 'Node.js':
          return 'Backend Development';
        default:
          return tech;
      }
    });
  };

  return (
    <div className="fixed inset-0 p-6 bg-gradient-to-b from-orange-400 to-amber-400">
      <div 
        ref={containerRef} 
        className="relative h-full w-full bg-background-primary rounded-2xl"
      >
        <div className="h-full flex flex-col px-20 py-10">
          <div>
            <Navigation />
          </div>
          <div className="flex-1 flex">
            <AnimatePresence mode="wait">
              {!showCaseStudies ? (
                <Hero key="hero" onCaseStudiesClick={handleCaseStudiesClick} />
              ) : (
                <CaseStudyPreview
                  key="case-study"
                  project={{
                    ...currentProject,
                    categories: getCategories(currentProject)
                  }}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                  isFirst={currentIndex === 0}
                  isLast={currentIndex === projects.length - 1}
                  direction="right"
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
