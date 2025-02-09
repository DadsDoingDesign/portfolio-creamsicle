import { Inter } from 'next/font/google';
import './globals.css';
import { AnimatedGradient } from '@/components/background/AnimatedGradient';
import { metadata } from './metadata';
import AnimatedBody from '@/components/layout/AnimatedBody';
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
        <AnimatedBody>
          <AnimatedGradient />
          <AnimatedContainer>
            <div className="w-full h-full min-h-0">
              {children}
            </div>
          </AnimatedContainer>
        </AnimatedBody>
      </body>
    </html>
  );
}
