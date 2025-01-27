import Image from 'next/image';
import { CaseStudyFrame } from '@/types/case-study';

interface FrameProps {
  frame: CaseStudyFrame;
  isFirstFrame?: boolean;
  className?: string;
}

export default function Frame({ frame, isFirstFrame, className = '' }: FrameProps) {
  const { content, image, title, layout = 'full-width' } = frame;

  const renderContent = () => (
    <div className={`w-full space-y-10 ${className}`}>
      {isFirstFrame ? (
        <h1 className="text-4xl font-bold text-white">{title}</h1>
      ) : (
        <h2 className="text-4xl font-bold text-white">{title}</h2>
      )}
      
      <div className="space-y-16">
        {content.sections?.map((section, index) => (
          <div key={index} className="space-y-4">
            {section.heading && (
              <h3 className="text-xl font-semibold text-orange-400">
                {section.heading}
              </h3>
            )}
            {section.text && (
              <p className="text-lg text-gray-300">{section.text}</p>
            )}
          </div>
        ))}

        {content.bulletPoints && (
          <div className="space-y-4">
            <span className="text-amber-400">
              <h3 className="text-base font-medium">
                {content.sections?.find(s => s.subtitle)?.subtitle}
              </h3>
            </span>
            <ul className="list-disc list-inside space-y-2">
              {content.bulletPoints.map((point, index) => (
                <li key={index} className="text-lg text-gray-300">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 h-full">
          {content.sections.map((section, index) => (
            <div key={index} className="flex flex-col justify-between h-full space-y-4">
              {section.heading && (
                <h3 className="text-xl font-semibold text-orange-400">
                  {section.heading}
                </h3>
              )}
              {section.text && (
                <p className="text-lg text-gray-300">{section.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`h-full w-full flex flex-col ${className}`}>
      {renderContent()}
    </div>
  );
}
