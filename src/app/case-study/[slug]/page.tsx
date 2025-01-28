import { CaseStudy } from '@/components/case-study/CaseStudy';
import { notFound } from 'next/navigation';
import * as caseStudies from '@/lib/case-studies';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const studies = Object.values(caseStudies);
  return studies.map((study) => ({
    slug: study.id,
  }));
}

export default function CaseStudyPage({ params }: Props) {
  const studies = Object.values(caseStudies);
  const project = studies.find((study) => study.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-20">
      <CaseStudy {...project} />
    </article>
  );
}
