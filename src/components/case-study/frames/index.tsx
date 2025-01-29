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
  const { content, image, title, layout = 'full-width', className: frameClassName = '', layoutClassName = '' } = frame;

  const renderContent = () => (
    <FrameContainer className={`w-full space-y-10 ${frameClassName} ${className}`}>
      {isFirstFrame ? (
        <h1 className="typography-title">{title}</h1>
      ) : (
        <h2 className="typography-title">{title}</h2>
      )}
      
      <ContentContainer className={`space-y-16 ${content.className || ''}`}>
        {content.sections?.filter(isContentSection).map((section, index) => (
          <div key={index} className={`space-y-4 ${section.className || ''}`}>
            <h3 className="typography-section-title typography-section-title--primary">
              {section.heading}
            </h3>
            <p className="typography-body">{section.text}</p>
          </div>
        ))}

        {content.bulletPoints && (
          <div className="space-y-4">
            {content.sections?.find(isBulletPointHeader) && (
              <h3 className="typography-section-title typography-section-title--secondary">
                {(content.sections.find(isBulletPointHeader) as BulletPointHeader).subtitle}
              </h3>
            )}
            <ul className="list-disc list-inside space-y-2">
              {content.bulletPoints.map((point, index) => (
                <li key={index} className={`typography-body ${typeof point === 'object' ? point.className || '' : ''}`}>
                  {typeof point === 'object' ? point.text : point}
                </li>
              ))}
            </ul>
          </div>
        )}

        {content.team && (
          <div className="case-study-team">
            {content.team.map((member, index) => (
              <div key={index} className={member.className || ''}>
                {member.role}
              </div>
            ))}
          </div>
        )}

        {content.timeline && (
          <div className="case-study-timeline">
            {content.timeline.map((item, index) => (
              <div key={index} className={item.className || ''}>
                <span className="font-semibold">{item.phase}:</span> {item.activity}
              </div>
            ))}
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
          className={`w-full h-full object-cover ${image.className || ''}`}
          priority={isFirstFrame}
        />
      </div>
    )
  );

  if (!isVisible) return null;

  switch (layout) {
    case 'full-width':
      return (
        <div className={`w-full ${layoutClassName}`}>
          {renderContent()}
          {renderImage()}
        </div>
      );
    case 'left-image':
      return (
        <div className={`w-full grid grid-cols-2 gap-8 ${layoutClassName}`}>
          {renderImage()}
          {renderContent()}
        </div>
      );
    case 'right-image':
      return (
        <div className={`w-full grid grid-cols-2 gap-8 ${layoutClassName}`}>
          {renderContent()}
          {renderImage()}
        </div>
      );
    case 'three-column':
      return (
        <div className={`w-full grid grid-cols-3 gap-8 ${layoutClassName}`}>
          {renderContent()}
          {renderImage()}
        </div>
      );
    default:
      return renderContent();
  }
}
