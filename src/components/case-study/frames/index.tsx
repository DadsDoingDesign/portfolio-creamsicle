import { motion } from 'framer-motion';
import Image from 'next/image';
import { CaseStudyFrame, ContentSection, BulletPointHeader } from '@/types/case-study';
import { Project } from '@/lib/data';

// Type guard functions
function isContentSection(section: ContentSection | BulletPointHeader): section is ContentSection {
  return 'heading' in section;
}

function isBulletPointHeader(section: ContentSection | BulletPointHeader): section is BulletPointHeader {
  return !('heading' in section);
}

interface FrameProps {
  frame: CaseStudyFrame;
  onNext?: () => void;
  onPrev?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  nextCaseStudy?: Project | null;
  className?: string;
}

export default function Frame({ 
  frame, 
  onNext, 
  onPrev, 
  isFirst = false, 
  isLast = false,
  nextCaseStudy,
  className = '' 
}: FrameProps) {
  const { content, image, title, layout = 'full-width' } = frame;

  const renderContent = () => (
    <div className={`w-full space-y-10 relative min-h-[600px] ${className}`}>
      {isFirst ? (
        <h1 className="text-4xl font-bold text-white">{title}</h1>
      ) : (
        <h2 className="text-4xl font-bold text-white">{title}</h2>
      )}
      
      <div className="space-y-16">
        {content.sections?.filter(isContentSection).map((section, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-400">
              {section.heading}
            </h3>
            <p className="text-lg text-gray-300">{section.text}</p>
          </div>
        ))}

        {content.bulletPoints && (
          <div className="absolute bottom-0 left-0 right-0 space-y-4">
            {content.sections?.find(isBulletPointHeader) && (
              <h3 className="text-base font-medium text-amber-400">
                {(content.sections.find(isBulletPointHeader) as BulletPointHeader).subtitle}
              </h3>
            )}
            <ul className="list-none space-y-2">
              {content.bulletPoints.map((point, index) => (
                <li key={index} className="text-lg text-gray-300 flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        {(content.team || content.timeline) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.team && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-400">Team</h3>
                <ul className="space-y-2">
                  {content.team.map((member, index) => (
                    <li key={index} className={member.highlight ? "text-amber-400" : "text-gray-300"}>
                      {member.role}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content.timeline && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-400">Timeline</h3>
                <ul className="space-y-2">
                  {content.timeline.map((item, index) => (
                    <li key={index} className="text-gray-300">
                      <span className="text-amber-400">{item.phase}:</span> {item.activity}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  if (layout === 'three-column' && content.sections) {
    return (
      <div className="w-full h-full space-y-8 col-span-full">
        <h2 className="text-4xl font-bold text-white">{title}</h2>
        <div className="min-h-0 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
            {content.sections.filter(isContentSection).map((section, index) => (
              <div key={index} className="flex flex-col space-y-4">
                <h3 className="text-xl font-semibold text-orange-400">
                  {section.heading}
                </h3>
                <p className="text-lg text-gray-300">{section.text}</p>
              </div>
            ))}
          </div>

          {content.bulletPoints && (
            <div className="mt-8">
              {content.sections?.find(isBulletPointHeader) && (
                <h3 className="text-base font-medium text-amber-400 mb-4">
                  {(content.sections.find(isBulletPointHeader) as BulletPointHeader).subtitle}
                </h3>
              )}
              <ul className="list-disc list-inside space-y-2">
                {content.bulletPoints.map((point, index) => (
                  <li key={index} className="text-lg text-gray-300">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`h-full w-full flex flex-col ${className}`}>
      {renderContent()}
      <div className="mt-12 flex justify-between items-center">
        {!isFirst && onPrev && (
          <button
            onClick={onPrev}
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Previous
          </button>
        )}

        {!isLast && onNext && (
          <button
            onClick={onNext}
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors ml-auto"
          >
            Next
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        )}

        {isLast && nextCaseStudy && (
          <button
            onClick={onNext}
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors ml-auto"
          >
            Next Case Study: {nextCaseStudy.title}
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
