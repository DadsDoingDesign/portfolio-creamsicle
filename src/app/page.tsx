'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Hero } from '@/components/hero/Hero';
import CaseStudyPreview from '@/components/case-study/CaseStudyPreview';
import { projects } from '@/lib/data';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCaseStudies, setShowCaseStudies] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

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

  return (
    <div className="fixed inset-0 animate-gradient-xy bg-gradient-to-br from-orange-500 to-amber-500">
      <div 
        ref={containerRef} 
        className="relative h-full w-full bg-black/90 backdrop-blur-sm"
      >
        <AnimatePresence mode="wait">
          {!showCaseStudies ? (
            <Hero key="hero" onCaseStudiesClick={handleCaseStudiesClick} />
          ) : (
            <CaseStudyPreview
              key="case-studies"
              project={currentProject}
              onNext={handleNext}
              onPrevious={handlePrevious}
              isFirst={currentIndex === 0}
              isLast={currentIndex === projects.length - 1}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
