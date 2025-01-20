'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  previewImage: string;
  slug: string;
}

interface HeroCarouselProps {
  projects: Project[];
}

export const HeroCarousel = ({ projects }: HeroCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const scale = useTransform(scrollXProgress, [0, 1], [1, 0.9]);

  return (
    <div className="h-screen pt-20 overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex space-x-8 p-12 overflow-x-scroll snap-x snap-mandatory"
        style={{ scale }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="min-w-[80vw] h-[70vh] snap-center relative group"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/case-study/${project.slug}`}>
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                  <p className="text-lg">{project.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroCarousel;
