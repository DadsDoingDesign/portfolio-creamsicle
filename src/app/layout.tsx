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
      <body className="font-sans antialiased min-h-screen gradient-animate p-40">
        <main className="h-full w-full rounded-2xl bg-background-inverse-primary">
          <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <Navigation />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
