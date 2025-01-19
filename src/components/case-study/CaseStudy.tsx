'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Project } from '@/lib/data';
import { ContentBlock } from '@/lib/case-studies/apploi';

const renderContent = (content: ContentBlock[]) => {
  return content.map((block, index) => {
    switch (block.type) {
      case 'paragraph':
        return <p key={index} className="text-lg text-gray-600 mb-4">{block.content}</p>;
      case 'bullet-list':
        return (
          <ul key={index} className="list-disc list-inside text-gray-600 text-lg mb-4">
            {Array.isArray(block.content) && block.content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      case 'number-list':
        return (
          <ol key={index} className="list-decimal list-inside text-gray-600 text-lg mb-4">
            {Array.isArray(block.content) && block.content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );
      case 'stat':
        return <div key={index} className="text-2xl font-bold text-amber-400 mb-4">{block.content}</div>;
      case 'quote':
        return <blockquote key={index} className="border-l-4 border-amber-400 pl-4 text-gray-600 italic text-lg mb-4">{block.content}</blockquote>;
      default:
        return null;
    }
  });
};

export const CaseStudy = ({ title, description, categories, frames }: Project) => {
  return (
    <article className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-amber-400 hover:text-amber-500 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back
        </Link>

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">{description}</p>
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <span key={index} className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm">
                {category}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="space-y-24">
          {frames.map((frame, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <h2 className="text-3xl font-bold mb-4">{frame.title}</h2>
              {frame.subtitle && (
                <h3 className="text-xl text-gray-600 mb-6">{frame.subtitle}</h3>
              )}
              <div className="mb-8">
                {renderContent(frame.content)}
              </div>
              {frame.image && (
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src={frame.image.src}
                    alt={frame.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {frame.image.caption && (
                    <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-sm">
                      {frame.image.caption}
                    </p>
                  )}
                </div>
              )}
            </motion.section>
          ))}
        </div>
      </motion.div>
    </article>
  );
};
