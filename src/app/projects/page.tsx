'use client';

import { useState, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projectsList, ProjectCategory, ProjectListing } from '@/data/projectsList';

import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const CATEGORIES: ProjectCategory[] = ['ALL', 'SAAS', 'MOBILE', 'ECOMMERCE', 'EDITORIAL'];

// A helper to flatten all project images into one massive scattered array
function getFlattenedAssets(projects: ProjectListing[]) {
  const flattened: { project: ProjectListing; src: string; isMain: boolean; titleId: string }[] = [];
  
  projects.forEach((proj, idx) => {
    // Main Background Image
    flattened.push({ project: proj, src: proj.bgImage, isMain: true, titleId: `${proj.id}-main` });
    
    // Additional Assets
    if (proj.assets) {
       proj.assets.forEach((asset, aIdx) => {
          flattened.push({ project: proj, src: asset, isMain: false, titleId: `${proj.id}-${aIdx}` });
       });
    }
  });
  
  return flattened;
}

export default function ProjectsArchivePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yUpFast = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yUpSlow = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yDownFast = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yDownSlow = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Flatten the images (Produces ~15-18 images)
  const allImages = useMemo(() => getFlattenedAssets(projectsList), []);

  // Pre-define 18 absolute coordinates scattered across a 300vh container.
  // We use responsive Tailwind classes for left/width to ensure mobile images are much larger and don't get completely clipped.
  const scatterPositions = [
    { top: '5vh', leftClass: 'left-[10vw] md:left-[10vw]', widthClass: 'w-[75vw] md:w-[30vw]', aspect: 'video', parallax: yUpSlow },
    { top: '15vh', leftClass: 'left-[25vw] md:left-[55vw]', widthClass: 'w-[65vw] md:w-[25vw]', aspect: '3/4', parallax: yDownSlow },
    { top: '40vh', leftClass: 'left-[5vw] md:left-[5vw]', widthClass: 'w-[55vw] md:w-[20vw]', aspect: 'square', parallax: yUpFast },
    { top: '60vh', leftClass: 'left-[15vw] md:left-[65vw]', widthClass: 'w-[80vw] md:w-[30vw]', aspect: 'video', parallax: yDownFast },
    { top: '90vh', leftClass: 'left-[10vw] md:left-[30vw]', widthClass: 'w-[85vw] md:w-[40vw]', aspect: '4/3', parallax: yUpSlow },
    { top: '120vh', leftClass: 'left-[20vw] md:left-[8vw]', widthClass: 'w-[50vw] md:w-[18vw]', aspect: 'square', parallax: yDownSlow },
    { top: '140vh', leftClass: 'left-[30vw] md:left-[70vw]', widthClass: 'w-[60vw] md:w-[22vw]', aspect: '3/4', parallax: yUpFast },
    { top: '170vh', leftClass: 'left-[5vw] md:left-[20vw]', widthClass: 'w-[70vw] md:w-[35vw]', aspect: 'video', parallax: yDownFast },
    { top: '200vh', leftClass: 'left-[15vw] md:left-[60vw]', widthClass: 'w-[65vw] md:w-[25vw]', aspect: 'square', parallax: yUpSlow },
    { top: '230vh', leftClass: 'left-[10vw] md:left-[10vw]', widthClass: 'w-[80vw] md:w-[45vw]', aspect: '4/3', parallax: yDownSlow },
    { top: '260vh', leftClass: 'left-[25vw] md:left-[65vw]', widthClass: 'w-[55vw] md:w-[20vw]', aspect: 'video', parallax: yUpFast },
    { top: '280vh', leftClass: 'left-[5vw] md:left-[30vw]', widthClass: 'w-[75vw] md:w-[30vw]', aspect: 'square', parallax: yDownFast },
    // Fallbacks just in case there are more images
    { top: '25vh', leftClass: 'left-[15vw] md:left-[35vw]', widthClass: 'w-[60vw] md:w-[20vw]', aspect: 'video', parallax: yUpFast },
    { top: '110vh', leftClass: 'left-[20vw] md:left-[45vw]', widthClass: 'w-[55vw] md:w-[22vw]', aspect: 'square', parallax: yDownFast },
    { top: '180vh', leftClass: 'left-[10vw] md:left-[40vw]', widthClass: 'w-[80vw] md:w-[28vw]', aspect: '3/4', parallax: yUpSlow },
    { top: '220vh', leftClass: 'left-[35vw] md:left-[5vw]', widthClass: 'w-[45vw] md:w-[15vw]', aspect: 'video', parallax: yDownSlow },
    { top: '290vh', leftClass: 'left-[15vw] md:left-[50vw]', widthClass: 'w-[65vw] md:w-[25vw]', aspect: '4/3', parallax: yUpFast },
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

         {/* Prominent Categories Array */}
         <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 pointer-events-auto">
            {CATEGORIES.map(cat => (
               <button 
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`relative text-xs md:text-sm font-bold tracking-[0.2em] transition-all duration-500 uppercase overflow-hidden group
                   ${activeCategory === cat ? 'text-[#050505] bg-[#CCFF00] px-4 py-2' : 'text-zinc-500 hover:text-white px-2 py-2'}
                 `}
               >
                 {cat}
               </button>
            ))}
         </div>
      </nav>

      {/* Fixed Centerpiece Typography (Behind the images) */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none flex items-center justify-center z-10 overflow-hidden">
         <h1 
           className="text-[12vw] md:text-[14vw] leading-none tracking-tighter text-zinc-800 uppercase select-none opacity-40 text-center"
           style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", letterSpacing: '-0.05em' }}
         >
           SEYAQSTUDIO.
         </h1>
      </div>

      {/* Massive Scattered Assets Container */}
      <section ref={containerRef} className="relative w-full h-[320vh] z-20 pointer-events-none mt-[10vh]">
         
         {allImages.map((item, index) => {
           const isVisible = activeCategory === 'ALL' || item.project.type === activeCategory;
           
           // Use modulo to safely wrap around if there are more images than positions
           const pos = scatterPositions[index % scatterPositions.length];
           
           const opacityStyle = isVisible ? 1 : 0.03;
           const filterStyle = isVisible ? 'none' : 'blur(5px) grayscale(100%)';

           return (
             <motion.div
               key={item.titleId}
               style={{ 
                 position: 'absolute', 
                 top: pos.top, 
                 aspectRatio: pos.aspect,
                 y: pos.parallax,
                 opacity: opacityStyle,
                 filter: filterStyle,
                 transition: 'opacity 0.8s, filter 0.8s'
               }}
               className={`pointer-events-auto group z-20 ${pos.leftClass} ${pos.widthClass}`}
             >
                <div className="relative w-full h-full flex flex-col">
                  
                  {/* The Image Link */}
                  <Link href={item.project.link} className={`relative block w-full h-full z-20 overflow-hidden bg-zinc-900 shadow-2xl ${item.isMain ? 'border-2 border-[#CCFF00]/20' : 'border border-white/5 opacity-80 group-hover:opacity-100'} transition-all duration-500`}>
                     <Image 
                       src={item.src} 
                       alt={item.project.title} 
                       fill 
                       className="object-cover transition-transform duration-[1500ms] group-hover:scale-110" 
                       sizes="(max-width: 768px) 100vw, 50vw"
                     />

                     {/* Overlay dark gradient */}
                     <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </Link>

                  {/* Project Labels (Visible on Hover for secondary images, or prominent) */}
                  <div className="mt-4 flex flex-col gap-1 z-40 transform group-hover:translate-x-2 transition-transform duration-500">
                     <h3 className="text-lg md:text-2xl font-black text-white uppercase tracking-tight" style={{ fontFamily: "'Impact', sans-serif" }}>
                        {item.project.title}
                     </h3>
                     <div className="flex items-center gap-2">
                        <span className="text-[#CCFF00] font-mono text-[8px] md:text-[10px] tracking-[0.2em] bg-[#CCFF00]/10 px-2 py-1 rounded-sm uppercase">
                           {item.project.type}
                        </span>
                        {item.isMain && (
                           <span className="text-zinc-400 font-mono text-[8px] md:text-[10px] tracking-widest uppercase truncate max-w-[60%]">
                              // {item.project.category}
                           </span>
                        )}
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
