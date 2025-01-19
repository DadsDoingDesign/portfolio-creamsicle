import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-sans antialiased bg-background-primary text-white">{children}</body>
    </html>
  );
}
