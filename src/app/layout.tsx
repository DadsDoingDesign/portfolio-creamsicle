'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { AnimatedGradient } from '@/components/background/AnimatedGradient';
import AnimatedBody from '@/components/layout/AnimatedBody';
import LoadingLogo from '@/components/layout/LoadingLogo';
import Navigation from '@/components/navigation/Navigation';
import { usePathname, useRouter } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const isViewingCaseStudy = pathname.includes('/case-study/');

  return (
    <html lang="en" className="h-full w-full">
      <body className="h-full">
        <LoadingLogo />
        <AnimatedBody>
          <AnimatedGradient />
          <div className="w-full h-full min-h-0 bg-background-inverse-primary overflow-hidden flex flex-col p-8">
            <Navigation 
              isViewingCaseStudy={isViewingCaseStudy} 
              onBack={() => router.back()} 
            />
            {children}
          </div>
        </AnimatedBody>
      </body>
    </html>
  );
}
