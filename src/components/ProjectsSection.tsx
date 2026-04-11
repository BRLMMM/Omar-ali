'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: "memoir",
    year: "2025",
    title: "MEMOIR",
    category: "A journal on design culture",
    description: "A personal journal exploring the intersections of music, architecture, and design — the frequencies that shape how we build and feel.",
    technologies: ["ASTRO", "GSAP", "TYPESCRIPT", "TAILWIND"],
    bgImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80",
    link: "#"
  },
  {
    id: "dentos",
    year: "2024",
    title: "DENTOS",
    category: "Dental ERP system",
    description: "Modular practice management suite: digital odontogram, patient records, scheduling, billing, and staff time tracking — all in one unified interface.",
    technologies: ["REACT", "NEXT.JS", "MONGODB", "NODE.JS", "TYPESCRIPT"],
    bgImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80",
    link: "#"
  },
  {
    id: "fashion",
    year: "2024",
    title: "FASHION",
    category: "E-Commerce platform",
    description: "The number one fashion platform in the region made with the best experts in the industry.",
    technologies: ["NEXT.JS", "TAILWIND", "STRIPE", "PRISMA"],
    bgImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80",
    link: "#"
  },
  {
    id: "gymfit",
    year: "2023",
    title: "GYMFIT",
    category: "Health & Fitness App",
    description: "Take care of your health with a virtual gym and stay fit with tracking features just in your hand.",
    technologies: ["REACT NATIVE", "NODE.JS", "REDIS", "EXPRESS"],
    bgImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&q=80",
    link: "#"
  }
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // We have 4 projects, so the container is 400vh tall to allow 4 viewports of scrolling.
  // We map the vertical scroll progress to horizontal translation.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Since there are 4 items, we need to slide the flex container by -75% of its width.
  // (0% = first item, -25% = second item, -50% = third item, -75% = fourth item)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} id="projects" className="relative h-[400dvh] w-full bg-[#050505] mt-16 md:mt-32">
      
      {/* Sticky container locks to the screen while scrolling through the 400dvh container */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center bg-[#0a0a0a]">
        
        {/* The horizontal scrolling track wrapper - Hardware accelerated */}
        <motion.div 
          style={{ x }} 
          className="flex h-full w-[400vw] will-change-transform"
        >
          
          {projects.map((project, index) => {
            return (
              <div 
                key={project.id} 
                className="group relative h-[100dvh] w-screen flex-shrink-0 flex items-center justify-center overflow-hidden"
              >
                {/* Background Image acts as a clickable link spanning the whole screen under the text */}
                <a href={project.link} className="absolute inset-0 z-0 block overflow-hidden">
                  <motion.div 
                    className="relative w-full h-full opacity-30 mix-blend-luminosity grayscale group-hover:opacity-40 transition-all duration-[1500ms] pointer-events-none"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="100vw"
                    />
                  </motion.div>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none" />
                
                {/* Removed local noise overlay to improve performance (Global noise overlay is used instead) */}

                {/* Top Left Metadata */}
                <div className="absolute top-8 md:top-12 left-6 md:left-12 z-20 overflow-hidden">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="text-[#CCFF00] font-mono text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase cursor-pointer"
                  >
                    {`0${index + 1} / 04 / STUFF I BUILT / P. ${604 + index}`}
                  </motion.div>
                </div>

                <a 
                  href={project.link}
                  className="absolute top-[40%] sm:top-1/2 -translate-y-1/2 z-10 w-full text-center hover:opacity-100 transition-opacity"
                >
                  <h2 
                    className="text-[30vw] md:text-[25vw] leading-[0.8] text-[#E8E6E1] group-hover:text-[#CCFF00] group-hover:scale-105 transition-all duration-700 uppercase tracking-tighter opacity-90 select-none mix-blend-plus-lighter drop-shadow-2xl"
                    style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
                  >
                    {project.title}
                  </h2>
                </a>

                {/* Bottom Left Content */}
                <div className="absolute bottom-10 md:bottom-16 left-6 md:left-12 max-w-[85%] sm:max-w-md md:max-w-xl z-20 flex flex-col gap-3 md:gap-6 pointer-events-none">
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-medium text-white font-serif tracking-wide drop-shadow-lg leading-tight">
                    {project.category}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm md:text-lg leading-relaxed max-w-xl line-clamp-3 md:line-clamp-none">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3 mt-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 md:px-4 py-1.5 md:py-2 bg-[#E8E6E1] text-black text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm shadow-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Right Links & Metadata */}
                <div className="hidden md:flex absolute bottom-16 right-12 flex-col items-end gap-3 z-20">
                  <span className="mb-6 text-zinc-600 font-mono text-xs tracking-widest">{project.year}</span>
                  <a 
                    href={project.link} 
                    className="text-[#CCFF00] font-mono text-xs tracking-[0.2em] uppercase hover:text-white hover:-translate-x-2 transition-all duration-300 border-b border-[#CCFF00]/30 hover:border-white pb-1"
                  >
                    VIEW PROJECT &rarr;
                  </a>
                  <a 
                    href={project.link} 
                    className="text-[#CCFF00] font-mono text-xs tracking-[0.2em] uppercase hover:text-white hover:-translate-x-2 transition-all duration-300 border-b border-[#CCFF00]/30 hover:border-white pb-1"
                  >
                    VISIT SITE /
                  </a>
                </div>

                {/* Mobile scroll indicator */}
                <div className="flex md:hidden absolute bottom-6 right-6 z-20 opacity-50">
                  <span className="text-white font-mono text-[9px] tracking-widest uppercase">
                    SCROLL ↓
                  </span>
                </div>

              </div>
            );
          })}
          
        </motion.div>
      </div>
    </section>
  );
}