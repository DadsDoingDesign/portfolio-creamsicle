'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from '@/components/hero/Hero';
import CaseStudyPreview from '@/components/case-study/CaseStudyPreview';
import { projects } from '@/lib/data';
import Navigation from '@/components/navigation/Navigation';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCaseStudies, setShowCaseStudies] = useState(false);
  const [isViewingCaseStudy, setIsViewingCaseStudy] = useState(false);
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
    <div className="fixed inset-0">
      <motion.div 
        ref={containerRef} 
        className="relative h-full w-full"
        animate={{
          padding: isViewingCaseStudy ? '0px' : '24px'  // 24px = p-6
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: isViewingCaseStudy ? 0 : 0.3
        }}
      >
        <motion.div 
          className={`h-full w-full flex flex-col px-20 py-10 gap-10 ${!isViewingCaseStudy ? 'bg-background-inverse-primary' : ''}`}
          animate={{
            borderRadius: isViewingCaseStudy ? '0px' : '16px',  // 16px = rounded-2xl
            backgroundColor: isViewingCaseStudy ? 'var(--background-primary)' : 'var(--background-inverse-primary)'
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: isViewingCaseStudy ? 0 : 0.3
          }}
        >
          <Navigation 
            isViewingCaseStudy={isViewingCaseStudy} 
            onBack={() => setIsViewingCaseStudy(false)} 
          />
          <div className="flex-1">
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
                  isViewingCaseStudy={isViewingCaseStudy}
                  onViewCaseStudy={(viewing: boolean) => setIsViewingCaseStudy(viewing)}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
