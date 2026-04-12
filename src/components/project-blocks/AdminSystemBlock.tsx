'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ManagementSystemBlock } from '@/types/project';

// Simple helper to pick an SVG icon for Finance, Team, etc based on the string 'icon'
const ModuleIcon = ({ type }: { type?: string }) => {
  switch(type) {
    case 'crm':
      return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case 'workflows':
      return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
    case 'sales':
      return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M13 8H7M17 12H7"/></svg>;
    case 'scheduling':
      return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
    case 'analytics':
      return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 17l-6-6-4 4-5-5"/></svg>;
    case 'team':
      return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>;
    default:
      return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>;
  }
};

export default function AdminSystemBlock({ data }: { data: ManagementSystemBlock }) {
  return (
    <section id="system" className="relative w-full py-20 md:py-32 border-t border-white/10 overflow-hidden">
      
      <div className="flex flex-col gap-24">
        
        {/* Top: Introduction & Concept Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#CCFF00]" />
              <span className="text-[#CCFF00] font-mono text-sm tracking-[0.3em] uppercase">OPERATIONAL ERP</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-medium text-white tracking-[0.02em] leading-tight font-serif"
            >
              {data.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-xl font-light leading-relaxed mt-2 pl-6 border-l-2 border-[#CCFF00]/20"
            >
              {data.description}
            </motion.p>
          </div>

          {/* Animated SVG Concept Box: "Control Structure" */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative w-full aspect-[4/3] bg-zinc-900/40 rounded-[2rem] border border-[#10b981]/20 flex flex-col items-center justify-center p-8 shadow-2xl overflow-hidden"
          >
             {/* Background glow */}
             <div className="absolute inset-0 bg-gradient-to-tr from-[#10b981]/5 via-transparent to-transparent pointer-events-none" />
             
             <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                   MANAGEMENT ARCHITECTURE
                </span>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-500/50" />
                   <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                   <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse" />
                </div>
             </div>
             
             {/* The Animation */}
             <div className="relative w-full max-w-[300px] aspect-square z-10">
                <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                   {/* Central Shield/Core */}
                   <path d="M 100 80 L 130 95 L 100 140 L 70 95 Z" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="2" />
                   <circle cx="100" cy="105" r="5" fill="#10b981" className="animate-pulse" />
                   
                   {/* Orbiting Nodes (Modules UI representation) */}
                   <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ originX: "100px", originY: "105px" }}>
                      {/* Node 1 */}
                      <path d="M 100 40 L 100 80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 2" />
                      <circle cx="100" cy="30" r="10" fill="#050505" stroke="#10b981" strokeWidth="1.5" />
                      {/* Node 2 */}
                      <path d="M 40 140 L 75 118" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 2" />
                      <circle cx="35" cy="145" r="10" fill="#050505" stroke="#10b981" strokeWidth="1.5" />
                      {/* Node 3 */}
                      <path d="M 160 140 L 125 118" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 2" />
                      <circle cx="165" cy="145" r="10" fill="#050505" stroke="#10b981" strokeWidth="1.5" />
                   </motion.g>

                   {/* Scanning Laser Effect */}
                   <motion.line 
                     x1="0" y1="0" x2="200" y2="0" 
                     stroke="rgba(16, 185, 129, 0.3)" strokeWidth="4"
                     animate={{ y1: [0, 200, 0], y2: [0, 200, 0] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                   />
                </svg>
             </div>
             
             <div className="absolute bottom-6 left-0 w-full flex justify-center z-20">
                <span className="px-4 py-2 bg-black/60 backdrop-blur border border-[#10b981]/20 rounded-full text-[#10b981]/80 font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                   <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                   SECURE ADMIN ARCHITECTURE
                </span>
             </div>
          </motion.div>
        </div>

        {/* Modules Breakdown */}
        {data.modules && data.modules.length > 0 && (
          <div className="flex flex-col gap-8">
            <h3 className="text-white font-mono text-xl uppercase tracking-widest border-b border-white/10 pb-4">// CORE MODULES</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.modules.map((mod, i) => {
                // If we have 6 modules, make the last 2 expand to col-span-2 to fill the grid
                const isLastTwoOfSix = data.modules.length === 6 && i >= 4;
                
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:bg-[#CCFF00]/5 hover:border-[#CCFF00]/30 transition-all duration-300 flex flex-col gap-6 ${isLastTwoOfSix ? 'lg:col-span-2' : ''}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#CCFF00]">
                      <ModuleIcon type={mod.icon} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-3">{mod.name}</h4>
                      <p className="text-zinc-400 font-light leading-relaxed text-sm">{mod.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Screenshots Showcase (Staggered Layout) */}
        {data.screenshots && data.screenshots.length > 0 && (
          <div className="mt-12 w-full">
            <h3 className="text-white font-mono text-xl uppercase tracking-widest border-b border-white/10 pb-4 mb-12">// INTERFACE PREVIEWS</h3>
            <div className="flex flex-col gap-12 md:gap-24">
              {data.screenshots.map((shot, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${idx % 2 !== 0 ? 'md:items-end' : 'md:items-start'} gap-6 w-full`}
                >
                  <div className="relative w-full md:w-[80%] aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group">
                    <Image 
                      src={shot.src} 
                      alt={shot.caption} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505]/80 to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505]/80 to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#CCFF00]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                  <div className="px-4">
                     <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-1 block">Preview {idx + 1}</span>
                     <h4 className="text-2xl text-white font-serif">{shot.caption}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
