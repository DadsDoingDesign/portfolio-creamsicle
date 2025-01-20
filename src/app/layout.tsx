import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
    <html lang="en" className="scroll-smooth dark h-full">
      <body className="font-sans antialiased h-full bg-gradient-to-br from-orange-400 to-amber-400">
        {children}
      </body>
    </html>
  );
}
