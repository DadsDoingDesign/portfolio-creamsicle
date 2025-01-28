import { motion } from 'framer-motion';
import Image from 'next/image';
import { CaseStudyFrame, ContentSection, BulletPointHeader } from '@/types/case-study';
import { FrameContainer, ContentContainer } from '@/components/layout/containers';

// Type guard functions
function isContentSection(section: ContentSection | BulletPointHeader): section is ContentSection {
  return 'heading' in section;
}

function isBulletPointHeader(section: ContentSection | BulletPointHeader): section is BulletPointHeader {
  return !('heading' in section);
}

interface FrameProps {
  frame: CaseStudyFrame;
  isFirstFrame?: boolean;
  isVisible?: boolean;
  className?: string;
}

export default function Frame({ frame, isFirstFrame, isVisible = true, className = '' }: FrameProps) {
  const { content, image, title, layout = 'full-width' } = frame;

  const renderContent = () => (
    <FrameContainer className={`w-full space-y-10 ${className}`}>
      {isFirstFrame ? (
        <h1 className="text-4xl font-bold">{title}</h1>
      ) : (
        <h2 className="text-4xl font-bold">{title}</h2>
      )}
      
      <ContentContainer className="space-y-16">
        {content.sections?.filter(isContentSection).map((section, index) => (
          <div key={index} className="space-y-4">
            <h3 className="accent-primary text-xl font-semibold">
              {section.heading}
            </h3>
            <p className="text-lg text-gray-300">{section.text}</p>
          </div>
        ))}

        {content.bulletPoints && (
          <div className="space-y-4">
            {content.sections?.find(isBulletPointHeader) && (
              <h3 className="accent-secondary text-base font-medium">
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
      </ContentContainer>
    </FrameContainer>
  );

  const renderImage = () => (
    image && (
      <div className="relative w-full h-full">
        <Image
          src={image.src}
          alt={image.alt}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority={isFirstFrame}
        />
      </div>
    )
  );

  if (!isVisible) return null;

  switch (layout) {
    case 'full-width':
      return (
        <div className="w-full">
          {renderContent()}
          {renderImage()}
        </div>
      );
    case 'left-image':
      return (
        <div className="w-full grid grid-cols-2 gap-8">
          {renderImage()}
          {renderContent()}
        </div>
      );
    case 'right-image':
      return (
        <div className="w-full grid grid-cols-2 gap-8">
          {renderContent()}
          {renderImage()}
        </div>
      );
    case 'three-column':
      return (
        <div className="w-full grid grid-cols-3 gap-8">
          {renderContent()}
          {renderImage()}
        </div>
      );
    default:
      return renderContent();
  }
}
