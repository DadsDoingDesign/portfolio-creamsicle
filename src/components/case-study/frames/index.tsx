import Image from 'next/image';
import { CaseStudyFrame } from '@/types/case-study';

interface FrameProps {
  frame: CaseStudyFrame;
  isFirstFrame?: boolean;
}

export default function Frame({ frame, isFirstFrame }: FrameProps) {
  const { content, image } = frame;

  return (
    <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row gap-24">
      <div className="w-[400px] flex flex-col gap-10">
        {isFirstFrame ? (
          <h1 className="text-4xl font-bold text-white">{content.title}</h1>
        ) : (
          <h2 className="text-4xl font-bold text-white">{content.title}</h2>
        )}
        
        <div className="space-y-16">
          {content.sections?.map((section, index) => (
            <div key={index} className="space-y-4">
              {section.title && (
                <h3 className="text-xl font-semibold text-orange-400">
                  {section.title}
                </h3>
              )}
              {section.text && (
                <p className="text-gray-300">{section.text}</p>
              )}
              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.highlights && (
                <div className="space-y-1">
                  {section.highlights.map((highlight, highlightIndex) => (
                    <p
                      key={highlightIndex}
                      className={highlightIndex === 0 ? "text-amber-400" : "text-gray-300"}
                    >
                      {highlight}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
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
