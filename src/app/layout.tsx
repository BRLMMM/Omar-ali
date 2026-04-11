import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Omar Ali | Full-Stack Developer & AI Specialist',
  description: 'Computer Science student specializing in AI at Zewail City. Founder of SEYAQ. Building intelligent digital experiences.',
  keywords: ['Full-Stack Developer', 'AI', 'Web Development', 'Next.js', 'React', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Omar Ali' }],
  openGraph: {
    title: 'Omar Ali | Full-Stack Developer & AI Specialist',
    description: 'Computer Science student specializing in AI at Zewail City. Founder of SEYAQ.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className={`${spaceGrotesk.className} bg-[#050505] text-white antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}