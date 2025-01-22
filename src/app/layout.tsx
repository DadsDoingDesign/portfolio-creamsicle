import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation/Navigation';

export const metadata: Metadata = {
  title: "Denis Dukhvalov - Portfolio",
  description: "Early Stage Product Designer with previous experience in Ecommerce Category Management & Business Operations. My process takes time to really understand how you business operates, and where design thinking can make impacts to get the business to the next stage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="font-sans antialiased h-full gradient-animate p-4 md:p-6 lg:p-8">
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
