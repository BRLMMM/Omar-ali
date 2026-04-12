'use client';

import { motion } from 'framer-motion';
import { ProjectData } from '@/types/project';
import BlockRenderer from '@/components/project-blocks/BlockRenderer';
import Image from 'next/image';
import ContactFooter from '@/components/ContactFooter';
import Link from 'next/link';
import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

interface ProjectDetailClientProps {
  project: ProjectData;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <main className="relative w-full min-h-[100dvh] bg-[#050505] text-white selection:bg-[#CCFF00] selection:text-black">
      
      <CustomCursor />
      <FloatingWhatsApp />

      <div className="fixed inset-0 pointer-events-none z-50 noise-overlay" />
      
      <div className="relative z-10 bg-[#050505] w-full pb-2 md:pb-0">
        
        <section className="relative w-full h-[80vh] flex items-end pb-24 px-6 md:px-24">
           <div className="absolute inset-0 z-0 opacity-90">
              <Image 
                src={project.heroImage} 
                alt={project.title} 
                fill 
                className="object-cover mix-blend-luminosity grayscale" 
                priority 
                sizes="100vw" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
           </div>
           
           <div className="relative z-10 flex flex-col gap-4 max-w-4xl">
              <div className="flex items-center gap-4 text-[#CCFF00] font-mono text-xs tracking-[0.3em] uppercase">
                 <span>{project.category}</span>
                 <span>/</span>
                 <span>{project.year}</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]" style={{ fontFamily: "'Impact', sans-serif" }}>
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 font-light mt-4 max-w-2xl">
                {project.summary}
              </p>

              {project.websiteUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  <Link 
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#CCFF00] text-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.2)]"
                  >
                    Visit Live Site
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </Link>
                </motion.div>
              )}
           </div>
        </section>

        <div className="px-6 md:px-24 max-w-[100rem] mx-auto pb-16">
          <BlockRenderer blocks={project.blocks} />
        </div>
      </div>

      <div className="sticky bottom-0 left-0 w-full h-[100dvh] z-0">
        <ContactFooter />
      </div>

    </main>
  );
}
