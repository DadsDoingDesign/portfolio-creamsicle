import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation/Navigation';
import { AnimatedGradient } from '@/components/background/AnimatedGradient';
import { metadata } from './metadata';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="font-sans antialiased h-full p-4 md:p-6 lg:p-8">
        <AnimatedGradient />
        <main className="h-full w-full rounded-2xl bg-background-inverse-primary p-4 md:p-6 lg:p-8 overflow-hidden flex flex-col">
          <div className="w-full flex-none">
            <Navigation />
          </div>
          <div className="w-full h-full min-h-0">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
