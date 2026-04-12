import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Omar Ali | Digital Partner & Full-Stack Architect',
  description: 'Digital Partner & Full-Stack Engineer. I architect custom systems, scalable e-commerce, and high-performance websites that drive real business growth.',
  keywords: ['Full-Stack Developer', 'Systems Architect', 'Digital Partner', 'E-commerce Developer', 'Next.js', 'Custom ERP', 'Seyaq Agency', 'UI/UX Design', 'Web Development'],
  authors: [{ name: 'Omar Ali' }],
  openGraph: {
    title: 'Omar Ali | Digital Partner & Full-Stack Architect',
    description: 'Digital Partner & Full-Stack Engineer. I architect custom systems, scalable e-commerce, and high-performance websites that drive real business growth.',
    type: 'website',
    images: [
      {
        url: '/icon.png', // Using the PNG version for social previews (WhatsApp/FB/Twitter)
        width: 1200,
        height: 630,
        alt: 'Omar Ali | Digital Partner & Full-Stack Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Ali | Digital Partner & Full-Stack Architect',
    description: 'Digital Partner & Full-Stack Engineer. I architect custom systems, scalable e-commerce, and high-performance websites that drive real business growth.',
    images: ['/icon.png'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png' },
    ],
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
        <GoogleAnalytics gaId="G-N1NK0CWKFD" />
      </body>
    </html>
  );
}