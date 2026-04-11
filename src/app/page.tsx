import HeroSection from '@/components/HeroSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TechStackSection from '@/components/TechStackSection';
import SeyaqServicesMerged from '@/components/SeyaqServicesMerged';
import ProjectsSection from '@/components/ProjectsSection';
import ContactFooter from '@/components/ContactFooter';

import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

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