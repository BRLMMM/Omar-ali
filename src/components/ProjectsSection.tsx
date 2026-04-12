'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: "khatwa",
    year: "2026",
    title: "KHATWA",
    category: "OPERATIONAL ERP / CORPORATE WEBSITE",
    description: "A complete digital transformation for an educational consultancy. I engineered a high-converting web presence paired with a custom role-based ERP to automate complex student workflows and scale their operations.",
    technologies: ["NEXT.JS", "NODE.JS", "POSTGRESQL", "TAILWIND CSS"],
    bgImage: "/khatwa-study.png",
    link: "/projects/khatwa"
  }
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section ref={containerRef} id="projects" className="relative h-screen w-full bg-[#050505] mt-16 md:mt-32">
      {/* Container for the single featured project */}
      <div className="h-full w-full overflow-hidden flex items-center bg-[#0a0a0a]">
        <div className="flex h-full w-full">
          {projects.map((project, index) => (
            <ProjectCardDesktop key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Mobile-optimized project card with Intersection Observer for lazy animation
function ProjectCardMobile({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative h-[85vh] w-full flex-shrink-0 flex items-center justify-center overflow-hidden border-b border-white/10"
    >
      {/* Background Image */}
      <a href={project.link} className="absolute inset-0 z-0 block">
        <Image
          src={project.bgImage}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover opacity-40 transition-opacity duration-700"
          sizes="100vw"
        />
      </a>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-transparent pointer-events-none" />

      {/* Top Metadata - Simplified */}
      <div className="absolute top-6 left-6 z-20">
        <span className="text-[#CCFF00] font-mono text-[10px] tracking-[0.2em] uppercase">
          {`0${index + 1} / 01`}
        </span>
      </div>

      {/* Center Title - Smaller for mobile */}
      <a
        href={project.link}
        className="absolute top-[35%] sm:top-1/2 -translate-y-1/2 z-10 w-full text-center"
      >
        <h2
          className="text-[18vw] leading-[0.85] text-[#E8E6E1] uppercase tracking-tighter opacity-90 select-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          {project.title}
        </h2>
      </a>

      {/* Bottom Content - Simplified for mobile */}
      <div className="absolute bottom-8 left-6 right-6 z-20 flex flex-col gap-3">
        <h3 className="text-lg font-medium text-white font-serif leading-tight">
          {project.category}
        </h3>
        <p className="text-zinc-300 text-xs leading-relaxed line-clamp-2 drop-shadow-md">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-[#E8E6E1]/90 text-black text-[7px] font-bold tracking-[0.15em] uppercase rounded-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-zinc-700 text-white text-[7px] font-bold tracking-[0.15em] uppercase rounded-sm">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* New Mobile CTA Button */}
        <a 
          href={project.link}
          className="mt-4 w-full bg-[#CCFF00] text-black text-[10px] font-bold tracking-[0.2em] uppercase py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          VIEW CASE STUDY &rarr;
        </a>
      </div>
    </motion.div>
  );
}

function ProjectCardDesktop({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <div
      key={project.id}
      className="group relative h-[100dvh] w-screen flex-shrink-0 flex items-center justify-center overflow-hidden"
    >
      {/* Background Image acts as a clickable link spanning the whole screen under the text */}
      <a href={project.link} className="absolute inset-0 z-0 block overflow-hidden min-h-[100dvh]">
        <motion.div
          className="relative w-full h-full opacity-40 group-hover:opacity-60 transition-all duration-[1500ms] pointer-events-none"
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src={project.bgImage}
            alt={project.title}
            fill
            priority={index === 0}
            loading={index === 0 ? undefined : "lazy"}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </a>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-transparent pointer-events-none" />

      {/* Top Left Metadata */}
      <div className="absolute top-8 md:top-12 left-6 md:left-12 z-20 overflow-hidden">
        <motion.div
          whileHover={{ x: 10 }}
          className="text-[#CCFF00] font-mono text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase cursor-pointer"
        >
          {`0${index + 1} / 01 / STUFF I BUILT / P. ${604 + index}`}
        </motion.div>
      </div>

      <a
        href={project.link}
        className="absolute top-[45%] md:top-[55%] -translate-y-1/2 z-10 w-full text-center hover:opacity-100 transition-opacity"
      >
        <h2
          className="text-[25vw] md:text-[20vw] leading-[0.8] text-[#E8E6E1] group-hover:text-[#CCFF00] transition-all duration-700 uppercase tracking-tighter opacity-90 select-none mix-blend-plus-lighter drop-shadow-2xl"
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
        <p className="text-zinc-300 text-xs sm:text-sm md:text-lg leading-relaxed max-w-xl line-clamp-3 md:line-clamp-none drop-shadow-lg">
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
        
        {/* Prominent Desktop Button */}
        <div className="mt-8 flex pointer-events-auto">
          <a
            href={project.link}
            className="group/btn relative px-8 py-4 bg-[#CCFF00] text-black text-xs font-bold tracking-[0.3em] uppercase rounded-sm overflow-hidden flex items-center gap-4 hover:pr-12 transition-all duration-300"
          >
            <span>VIEW CASE STUDY</span>
            <span className="text-xl">&rarr;</span>
          </a>
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
    </div>
  );
}
