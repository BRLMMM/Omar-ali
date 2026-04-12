'use client';

import { useState, useRef, useMemo, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projectsList, ProjectCategory, ProjectListing } from '@/data/projectsList';

import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'));
const FloatingWhatsApp = dynamic(() => import('@/components/FloatingWhatsApp'));

const CATEGORIES: ProjectCategory[] = ['ALL', 'SAAS', 'MOBILE', 'ECOMMERCE', 'EDITORIAL'];

// A helper to only get the main project image
function getFlattenedAssets(projects: ProjectListing[]) {
  const flattened: { project: ProjectListing; src: string; isMain: boolean; titleId: string }[] = [];

  projects.forEach((proj) => {
    // Only add the Main Background Image for each project
    flattened.push({ project: proj, src: proj.bgImage, isMain: true, titleId: `${proj.id}-main` });
  });

  return flattened;
}

export default function ProjectsArchivePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yUpSlow = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -400]);
  const yBg = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 200]);

  // Only one image per project
  const allImages = useMemo(() => getFlattenedAssets(projectsList), []);

  // Desktop: Centered and Lower position for the main card
  const scatterPositions = [
    { top: '40vh', leftClass: 'left-[10vw] md:left-[30vw]', widthClass: 'w-[80vw] md:w-[40vw]', aspect: '16/9', parallax: yUpSlow },
  ];

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[#CCFF00] selection:text-black font-mono overflow-x-hidden">

      <CustomCursor />
      <FloatingWhatsApp />
      <div className="fixed inset-0 pointer-events-none z-50 noise-overlay" />

      {/* Floating Navigation / Filters */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center z-[100] mix-blend-difference pointer-events-none gap-4">
        <Link href="/" className="pointer-events-auto text-[#E8E6E1] text-sm md:text-xl font-black tracking-widest hover:text-[#CCFF00] transition-colors">
          [ SEYAQ. ]
        </Link>
      </nav>

      {/* Fixed Centerpiece Typography with Parallax */}
      <motion.div 
        style={{ y: yBg }}
        className="fixed top-0 left-0 w-full h-screen pointer-events-none flex items-center justify-center z-10 overflow-hidden"
      >
        <h1
          className="text-[12vw] md:text-[14vw] leading-none tracking-tighter text-zinc-900 uppercase select-none opacity-20 text-center"
          style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", letterSpacing: '-0.05em' }}
        >
          MY ARCHIVE.
        </h1>
      </motion.div>

      {/* Main Card Container */}
      <section ref={containerRef} className="relative w-full h-[250vh] z-20 pointer-events-none mt-[10vh]">

        {allImages.map((item, index) => {
          const isVisible = activeCategory === 'ALL' || item.project.type === activeCategory;
          const pos = scatterPositions[0]; // Use the centered position

          return (
            <motion.div
              key={item.titleId}
              style={{
                position: 'absolute',
                top: pos.top,
                aspectRatio: pos.aspect,
                y: pos.parallax,
                opacity: isVisible ? 1 : 0.05,
                transition: 'opacity 0.8s'
              }}
              className={`pointer-events-auto group z-20 ${pos.leftClass} ${pos.widthClass}`}
            >
              <div className="relative w-full h-full flex flex-col">

                {/* The Image Link */}
                <Link href={item.project.link} className="relative block w-full h-full z-20 overflow-hidden bg-zinc-900 shadow-2xl border-2 border-[#CCFF00]/40 transition-all duration-500">
                  <Image
                    src={item.src}
                    alt={item.project.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-[1500ms] group-hover:scale-105 opacity-100"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </Link>

                {/* Project Labels */}
                <div className="mt-6 flex flex-col gap-2 z-40 transform group-hover:translate-x-2 transition-transform duration-500">
                  <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight" style={{ fontFamily: "'Impact', sans-serif" }}>
                    {item.project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-[#CCFF00] font-mono text-[10px] md:text-xs tracking-[0.2em] bg-[#CCFF00]/10 px-3 py-1.5 rounded-sm uppercase">
                      {item.project.type}
                    </span>
                    <span className="text-zinc-500 font-mono text-[10px] md:text-xs tracking-widest uppercase">
                      // {item.project.category}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}

      </section>

    </main>
  );
}
