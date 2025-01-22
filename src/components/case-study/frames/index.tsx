import Image from 'next/image';
import { CaseStudyFrame } from '@/types/case-study';

interface FrameProps {
  frame: CaseStudyFrame;
  isFirstFrame?: boolean;
}

export default function Frame({ frame, isFirstFrame }: FrameProps) {
  const { content, image, title } = frame;

  return (
    <div className="h-full w-full px-6 py-24 flex flex-col md:flex-row gap-24">
      <div className="w-[400px] flex flex-col gap-10">
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
                <p className="text-gray-300">{section.text}</p>
              )}
            </div>
          ))}

          {content.bulletPoints && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-400">Key Points</h3>
              <ul className="space-y-2">
                {content.bulletPoints.map((point, index) => (
                  <li key={index} className="text-gray-300">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

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
      </div>

      {image && (
        <div className="flex-1 relative h-[800px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
    </div>
  );
}
