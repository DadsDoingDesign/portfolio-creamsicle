'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CaseStudyProps {
  title: string;
  description: string;
  role: string;
  duration: string;
  technologies: string[];
  images: string[];
  content: {
    heading: string;
    text: string;
    image?: string;
  }[];
}

export const CaseStudy = ({
  title,
  description,
  role,
  duration,
  technologies,
  images,
  content,
}: CaseStudyProps) => {
  return (
    <article className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4"
      >
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">{description}</p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Role</h3>
              <p className="text-lg">{role}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Duration</h3>
              <p className="text-lg">{duration}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Hero Images */}
        <div className="grid grid-cols-2 gap-8 mb-16">
          {images.slice(0, 2).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              <Image src={image} alt={`${title} preview ${index + 1}`} fill className="object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Content Sections */}
        {content.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl">{section.text}</p>
            {section.image && (
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.heading}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </motion.section>
        ))}
      </motion.div>
    </article>
  );
};

export default CaseStudy;
