import Image from 'next/image';
import { CaseStudyFrame, TeamMember, Timeline } from '@/types/case-study';

interface FrameProps {
  frame: CaseStudyFrame;
}

const TeamTimeline = ({ 
  team, 
  timeline 
}: { 
  team?: TeamMember[], 
  timeline?: Timeline[] 
}) => (
  <div className="flex flex-col md:flex-row gap-8 mt-6">
    {team && (
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-4 text-orange-400">Team</h3>
        <ul className="space-y-2">
          {team.map((member, index) => (
            <li 
              key={index}
              className={`${member.highlight ? 'text-orange-400' : 'text-gray-300'}`}
            >
              {member.role}
            </li>
          ))}
        </ul>
      </div>
    )}
    {timeline && (
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-4 text-white">Timeline</h3>
        <ul className="space-y-4">
          {timeline.map((phase, index) => (
            <li key={index} className="text-gray-300">
              <span className="font-medium text-white">{phase.phase}:</span> {phase.activity}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const ContentSection = ({ heading, text }: { heading: string; text: string }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-semibold mb-3 text-white">{heading}</h3>
    <p className="text-gray-300 leading-relaxed">{text}</p>
  </div>
);

const IntroFrame = ({ frame }: FrameProps) => {
  const { content, image } = frame;
  
  return (
    <div className="flex flex-col md:flex-row gap-12 items-start">
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl font-bold mb-6 text-white">{frame.title}</h2>
        {frame.subtitle && (
          <h3 className="text-xl text-orange-400 mb-4">{frame.subtitle}</h3>
        )}
        {content.sections?.map((section, index) => (
          <ContentSection key={index} {...section} />
        ))}
        <TeamTimeline team={content.team} timeline={content.timeline} />
      </div>
      {image && (
        <div className="flex-1">
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

const ContentFrame = ({ frame }: FrameProps) => {
  const { content, image } = frame;
  
  return (
    <div className={`flex flex-col ${frame.layout === 'right-image' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-start`}>
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl font-bold mb-6 text-white">{frame.title}</h2>
        {frame.subtitle && (
          <h3 className="text-xl text-orange-400 mb-4">{frame.subtitle}</h3>
        )}
        {content.sections?.map((section, index) => (
          <ContentSection key={index} {...section} />
        ))}
        {content.bulletPoints && (
          <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
            {content.bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
      {image && (
        <div className="flex-1">
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

const Frame = ({ frame }: FrameProps) => {
  if (frame.type === 'intro') {
    return <IntroFrame frame={frame} />;
  }
  return <ContentFrame frame={frame} />;
};

export default Frame;
