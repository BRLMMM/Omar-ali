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

      {/* Main Content wrapper with z-10 and dark background, scrolling over the sticky footer */}
      <div className="relative z-10 bg-[#050505] w-full pb-2 md:pb-0">
        <HeroSection />
        <WhyChooseUsSection />
        <TechStackSection />
        <SeyaqServicesMerged />
        <ProjectsSection />
      </div>

      {/* Revealed Footer Sticky Container */}
      <div className="sticky bottom-0 left-0 w-full h-[100dvh] z-0">
        <ContactFooter />
      </div>
    </main>
  );
}