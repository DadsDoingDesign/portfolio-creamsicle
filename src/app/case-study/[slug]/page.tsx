import { CaseStudy } from '@/components/case-study/CaseStudy';
import { notFound } from 'next/navigation';
import { umba, apploi } from '@/lib/case-studies';
import { Project } from '@/lib/data';

interface Props {
  params: {
    slug: string;
  };
}

// Map of case studies for easy lookup
const caseStudyMap = {
  umba,
  apploi,
} as const;

export async function generateStaticParams() {
  return Object.keys(caseStudyMap).map((slug) => ({
    slug,
  }));
}

export default function CaseStudyPage({ params }: Props) {
  const project = caseStudyMap[params.slug as keyof typeof caseStudyMap];

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-20">
      <CaseStudy {...project} />
    </article>
  );
}
