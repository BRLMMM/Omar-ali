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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://omali.ae'), // Set your production domain here
  title: 'Omar Ali | Digital Partner & Full-Stack Architect',
  description: 'Digital Partner & Full-Stack Engineer. I architect custom systems, scalable e-commerce, and high-performance websites that drive real business growth.',
  keywords: ['Full-Stack Developer', 'Systems Architect', 'Digital Partner', 'E-commerce Developer', 'Next.js', 'Custom ERP', 'Seyaq Agency', 'UI/UX Design', 'Web Development'],
  authors: [{ name: 'Omar Ali' }],
  openGraph: {
    title: 'Omar Ali | Digital Partner & Full-Stack Architect',
    description: 'Digital Partner & Full-Stack Engineer. I architect custom systems, scalable e-commerce, and high-performance websites that drive real business growth.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Ali | Digital Partner & Full-Stack Architect',
    description: 'Digital Partner & Full-Stack Engineer. I architect custom systems, scalable e-commerce, and high-performance websites that drive real business growth.',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} bg-[#050505] text-white antialiased`} suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}