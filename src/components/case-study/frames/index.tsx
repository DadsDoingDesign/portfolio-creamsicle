import Image from 'next/image';
import { CaseStudyFrame, CaseStudyMetric, TeamMember, Timeline } from '@/types/case-study';

interface FrameProps {
  frame: CaseStudyFrame;
}

const MetricCard = ({ metric }: { metric: CaseStudyMetric }) => (
  <div className="bg-neutral-900 p-6 rounded-lg">
    <h3 className="mb-2">{metric.label}</h3>
    <p className="text-2xl font-bold mb-2">{metric.value}</p>
    <p className="text-gray-400">{metric.description}</p>
  </div>
);

const TeamTimeline = ({ 
  team, 
  timeline 
}: { 
  team?: TeamMember[], 
  timeline?: Timeline[] 
}) => (
  <div className="flex flex-col md:flex-row gap-8">
    {team && (
      <div className="flex-1">
        <h3 className="mb-4">Team</h3>
        <ul className="space-y-2">
          {team.map((member, index) => (
            <li 
              key={index}
              className={`${member.highlight ? 'text-orange-400' : 'text-gray-400'}`}
            >
              {member.role}
            </li>
          ))}
        </ul>
      </div>
    )}
    {timeline && (
      <div className="flex-1">
        <h3 className="mb-4">Timeline</h3>
        <ul className="space-y-2">
          {timeline.map((phase, index) => (
            <li key={index} className="text-gray-400">
              <span className="font-medium">{phase.phase}:</span> {phase.duration}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export const IntroFrame = ({ frame }: FrameProps) => (
  <div className="flex flex-col md:flex-row gap-12 p-8">
    <div className="flex-1 space-y-8">
      <h1 className="text-5xl font-bold">{frame.title}</h1>
      {frame.content.mainText && (
        <p className="text-xl text-gray-400">{frame.content.mainText}</p>
      )}
      <TeamTimeline 
        team={frame.content.team} 
        timeline={frame.content.timeline} 
      />
    </div>
    {frame.image && (
      <div className="flex-1">
        <div className="relative aspect-square">
          <Image
            src={frame.image.src}
            alt={frame.image.alt}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    )}
  </div>
);

export const MetricsFrame = ({ frame }: FrameProps) => (
  <div className="p-8 space-y-8">
    <h2 className="text-3xl font-bold text-center">{frame.title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {frame.content.metrics?.map((metric, index) => (
        <MetricCard key={index} metric={metric} />
      ))}
    </div>
    {frame.content.bulletPoints && (
      <div className="mt-12">
        <h3 className="mb-4">How did we set these metrics?</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          {frame.content.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export const ContentFrame = ({ frame }: FrameProps) => (
  <div className={`flex flex-col ${frame.layout === 'right-image' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 p-8`}>
    <div className="flex-1 space-y-6">
      <h2 className="text-3xl font-bold">{frame.title}</h2>
      {frame.subtitle && (
        <h3>{frame.subtitle}</h3>
      )}
      {frame.content.mainText && (
        <p className="text-gray-400">{frame.content.mainText}</p>
      )}
      {frame.content.bulletPoints && (
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          {frame.content.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
    {frame.image && (
      <div className="flex-1">
        <div className="relative aspect-square">
          <Image
            src={frame.image.src}
            alt={frame.image.alt}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    )}
  </div>
);
