import { CaseStudy } from '@/components/case-study/CaseStudy';
import { Navigation } from '@/components/navigation/Navigation';
import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseStudyPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <CaseStudy {...project} />
    </main>
  );
}
