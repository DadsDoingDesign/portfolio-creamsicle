import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation/Navigation';
import { AnimatedGradient } from '@/components/background/AnimatedGradient';
import { metadata } from './metadata';
import AnimatedBody from '@/components/layout/AnimatedBody';
import LoadingLogo from '@/components/layout/LoadingLogo';
import AnimatedContainer from '@/components/layout/AnimatedContainer';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="h-full">
        <LoadingLogo />
        <AnimatedBody>
          <AnimatedGradient />
          <AnimatedContainer>
            <div className="w-full flex-none">
              <Navigation />
            </div>
            <div className="w-full h-full min-h-0">
              {children}
            </div>
          </AnimatedContainer>
        </AnimatedBody>
      </body>
    </html>
  );
}
