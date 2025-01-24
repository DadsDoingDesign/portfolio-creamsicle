'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { AnimatedGradient } from '@/components/background/AnimatedGradient';
import { metadata } from './metadata';
import AnimatedBody from '@/components/layout/AnimatedBody';
import LoadingLogo from '@/components/layout/LoadingLogo';
import AnimatedContainer from '@/components/layout/AnimatedContainer';
import Navigation from '@/components/navigation/Navigation';
import { usePathname, useRouter } from 'next/navigation';

export { metadata };

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
          <AnimatedContainer>
            <div className="w-full h-full min-h-0">
              <Navigation 
                isViewingCaseStudy={isViewingCaseStudy} 
                onBack={() => router.back()} 
              />
              {children}
            </div>
          </AnimatedContainer>
        </AnimatedBody>
      </body>
    </html>
  );
}
