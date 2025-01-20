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
    <html lang="en" className="h-full">
      <body className="font-sans antialiased min-h-screen gradient-animate">
        <main className="relative h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
