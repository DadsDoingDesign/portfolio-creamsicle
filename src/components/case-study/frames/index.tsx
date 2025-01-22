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
        <h3 className="text-xl font-semibold mb-4">Team</h3>
        <ul className="space-y-2">
          {team.map((member, index) => (
            <li 
              key={index}
              className={`${member.highlight ? 'text-amber-400' : 'text-gray-400'}`}
            >
              {member.role}
            </li>
          ))}
        </ul>
      </div>
    )}
    {timeline && (
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-4">Timeline</h3>
        <ul className="space-y-2">
          {timeline.map((phase, index) => (
            <li key={index} className="text-gray-400">
              {phase.phase}: {phase.activity}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const ContentSection = ({ heading, text }: { heading: string; text: string }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">{heading}</h3>
    <p className="text-gray-400">{text}</p>
  </div>
);

const IntroFrame = ({ frame }: FrameProps) => (
  <div className="flex flex-col md:flex-row gap-8">
    <div className="w-full md:w-[400px] space-y-10">
      <h1 className="text-4xl font-bold">{frame.title}</h1>
      <div className="space-y-6">
        {frame.content.sections?.map((section, index) => (
          <ContentSection key={index} heading={section.heading} text={section.text} />
        ))}
      </div>
      {(frame.content.team || frame.content.timeline) && (
        <TeamTimeline team={frame.content.team} timeline={frame.content.timeline} />
      )}
    </div>
    {frame.image && (
      <div className="flex-1 relative min-h-[600px]">
        <Image
          src={frame.image.src}
          alt={frame.image.alt}
          fill
          className="object-contain"
        />
      </div>
    )}
  </div>
);

const ContentFrame = ({ frame }: FrameProps) => (
  <div className="flex flex-col md:flex-row gap-8">
    <div className="w-full md:w-[400px] space-y-10">
      <div>
        <h2 className="text-3xl font-bold mb-2">{frame.title}</h2>
        {frame.subtitle && (
          <h3 className="text-xl text-gray-400">{frame.subtitle}</h3>
        )}
      </div>
      <div className="space-y-6">
        {frame.content.sections?.map((section, index) => (
          <ContentSection key={index} heading={section.heading} text={section.text} />
        ))}
        {frame.content.bulletPoints && (
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            {frame.content.bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
    {frame.image && (
      <div className="flex-1 relative min-h-[600px]">
        <Image
          src={frame.image.src}
          alt={frame.image.alt}
          fill
          className="object-contain"
        />
      </div>
    )}
  </div>
);

export default function Frame({ frame }: FrameProps) {
  if (frame.type === 'intro') {
    return <IntroFrame frame={frame} />;
  }
  return <ContentFrame frame={frame} />;
}
