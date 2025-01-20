import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation/Navigation';

export const metadata: Metadata = {
  title: "Denis Dukhvalov - Portfolio",
  description: "Portfolio website showcasing my work and experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="font-sans antialiased bg-black min-h-screen">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
