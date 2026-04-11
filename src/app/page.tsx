import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';

// Dynamically import all below-the-fold and non-critical components to reduce initial JS payload
const WhyChooseUsSection = dynamic(() => import('@/components/WhyChooseUsSection'), { ssr: true });
const TechStackSection = dynamic(() => import('@/components/TechStackSection'), { ssr: true });
const SeyaqServicesMerged = dynamic(() => import('@/components/SeyaqServicesMerged'), { ssr: true });
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), { ssr: true });
const ContactFooter = dynamic(() => import('@/components/ContactFooter'), { ssr: true });

// UI Extras
const CustomCursor = dynamic(() => import('@/components/CustomCursor'));
const FloatingWhatsApp = dynamic(() => import('@/components/FloatingWhatsApp'));

export default function Home() {
  return (
    <main className="relative w-full min-h-[100dvh] bg-[#050505]">
      {/* Custom cursor & Floating WhatsApp */}
      <CustomCursor />
      <FloatingWhatsApp />

      {/* Noise overlay for texture */}
      <div className="fixed inset-0 pointer-events-none z-50 noise-overlay" />

      {/* Main Content Sections - Groups in z-10 to allow fixed footer reveal beneath */}
      <div className="relative z-10 bg-[#050505] w-full shadow-[0_50px_100px_rgba(0,0,0,1)]">
        <HeroSection />
        <WhyChooseUsSection />
        <TechStackSection />
        <SeyaqServicesMerged />
        <ProjectsSection />
      </div>

      {/* 
          Revealed Footer Container:
          This container determines the total scrollable area for the reveal.
          The Internal logic in ContactFooter will handle its own stickiness and parallax.
      */}
      <div className="relative z-0 w-full">
        <ContactFooter />
      </div>
    </main>
  );
}