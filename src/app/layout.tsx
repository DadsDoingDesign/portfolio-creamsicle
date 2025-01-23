'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation/Navigation';
import { motion } from 'framer-motion';
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
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            background: [
              'linear-gradient(180deg, rgb(251 146 60) 0%, rgb(251 191 36) 100%)',
              'linear-gradient(180deg, rgb(251 146 60) 0%, rgb(251 146 60) 100%)',
              'linear-gradient(180deg, rgb(251 146 60) 0%, rgb(251 191 36) 100%)',
              'linear-gradient(180deg, rgb(251 191 36) 0%, rgb(251 191 36) 100%)',
              'linear-gradient(180deg, rgb(251 146 60) 0%, rgb(251 191 36) 100%)'
            ]
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            repeat: Infinity
          }}
        />
        <main className="h-full w-full rounded-2xl bg-background-inverse-primary p-4 md:p-6 lg:p-8 overflow-hidden">
          <div className="w-full flex-none">
            <Navigation />
          </div>
          <div className="flex-1 h-full w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
