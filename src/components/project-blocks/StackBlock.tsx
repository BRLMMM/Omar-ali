'use client';

import { motion } from 'framer-motion';
import { DevelopmentStackBlock } from '@/types/project';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma, SiPostgresql, SiMongodb } from 'react-icons/si';

// Helper to map string to actual React Icon
const getIcon = (name: string) => {
  const icons: { [key: string]: any } = {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker,
    SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma, SiPostgresql, SiMongodb
  };
  return icons[name] || FaReact; 
};

// Analytics Radial Gauge Component
const RadialGauge = ({ value, label, color = "#CCFF00", delay = 0 }: { value: number, label: string, color?: string, delay?: number }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;
  
  return (
    <div className="flex flex-col items-center gap-4">
       <div className="relative w-24 h-24 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90">
             <circle cx="48" cy="48" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
             <motion.circle 
               cx="48" cy="48" r={radius} fill="none" stroke={color} strokeWidth="4"
               strokeLinecap="round"
               strokeDasharray={circumference}
               initial={{ strokeDashoffset: circumference }}
               whileInView={{ strokeDashoffset }}
               viewport={{ once: true }}
               transition={{ duration: 2, ease: "easeOut", delay }}
             />
          </svg>
          <span className="text-white font-mono text-2xl font-black">{value}</span>
       </div>
       <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase text-center max-w-[100px] leading-tight">
         {label}
       </span>
    </div>
  );
};

export default function StackBlock({ data }: { data: DevelopmentStackBlock }) {
  return (
    <section className="relative w-full py-20 md:py-32 border-t border-white/10 overflow-hidden">
      
      <div className="relative z-10 flex flex-col gap-24">
        
        {/* Top: Architecture Breakdown & Animated Concept */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text & CTA Button */}
          <div className="lg:col-span-6 flex flex-col gap-8 items-start">
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#CCFF00]" />
              <span className="text-[#CCFF00] font-mono text-sm tracking-[0.3em] uppercase">SYSTEM ARCHITECTURE</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
              style={{ fontFamily: "'Impact', sans-serif" }}
            >
              {data.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-300 text-xl font-light leading-relaxed mt-2"
            >
              {data.architectureDescription}
            </motion.p>
            </div>

            {/* Move CTA directly under the text on the left side */}
            {data.websiteUrl && (
              <motion.a 
                href={data.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative inline-flex w-full lg:w-auto overflow-hidden rounded-full border border-[#CCFF00]/30 bg-transparent px-8 py-5 items-center justify-center gap-4 transition-all duration-300 hover:border-[#CCFF00] hover:shadow-[0_0_40px_-10px_#CCFF00] mt-4"
              >
                <span className="absolute inset-0 w-0 bg-[#CCFF00] transition-all duration-500 ease-out group-hover:w-full" />
                <span className="relative z-10 text-white group-hover:text-black font-mono text-sm tracking-widest uppercase font-bold transition-colors duration-300">
                  VIEW LIVE DEPLOYMENT
                </span>
                <div className="relative z-10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2 group-hover:text-black text-[#CCFF00]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </motion.a>
            )}
          </div>

          {/* RIGHT: Animated Concept Box (System Topology) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative w-full aspect-square md:aspect-[4/3] bg-zinc-900/40 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center overflow-hidden p-8 shadow-2xl"
          >
             <div className="absolute top-6 left-6 text-zinc-600 font-mono text-xs uppercase tracking-widest z-20">
                SYSTEM TOPOLOGY
             </div>
             
             {/* The Data Flow SVG Animation */}
             <div className="relative w-full max-w-[400px] aspect-[4/3] z-10">
                <svg viewBox="0 0 200 150" className="w-full h-full overflow-visible">
                   
                   {/* Background Base Grid */}
                   <path d="M 0 25 L 200 25 M 0 75 L 200 75 M 0 125 L 200 125" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                   <path d="M 50 0 L 50 150 M 100 0 L 100 150 M 150 0 L 150 150" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />

                   {/* Routing Lines (Client -> Gateway -> Microservices) */}
                   <path d="M 40 75 L 90 75" stroke="rgba(204,255,0,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
                   <path d="M 110 75 L 140 75 L 160 40" stroke="rgba(204,255,0,0.15)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                   <path d="M 110 75 L 160 75" stroke="rgba(204,255,0,0.15)" strokeWidth="1.5" fill="none" />
                   <path d="M 110 75 L 140 75 L 160 110" stroke="rgba(204,255,0,0.15)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />

                   {/* Pulsing Data Packets */}
                   <motion.circle r="2" fill="#CCFF00" animate={{ cx: [40, 90], cy: [75, 75], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
                   
                   {/* Data Packet to Top Server */}
                   <motion.circle r="2" fill="#CCFF00" animate={{ cx: [110, 140, 160], cy: [75, 75, 40], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1 }} />
                   {/* Data Packet to Mid Server */}
                   <motion.circle r="2" fill="#CCFF00" animate={{ cx: [110, 160], cy: [75, 75], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1.2 }} />
                   {/* Data Packet to Bottom Server */}
                   <motion.circle r="2" fill="#CCFF00" animate={{ cx: [110, 140, 160], cy: [75, 75, 110], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1.4 }} />

                   {/* Client Device Node */}
                   <rect x="15" y="60" width="25" height="30" rx="4" fill="#0a0a0a" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                   <rect x="20" y="65" width="15" height="2" fill="rgba(255,255,255,0.4)" rx="1" />
                   <rect x="20" y="72" width="10" height="2" fill="rgba(255,255,255,0.2)" rx="1" />
                   <rect x="20" y="78" width="12" height="2" fill="rgba(255,255,255,0.2)" rx="1" />

                   {/* Central API Gateway */}
                   <circle cx="100" cy="75" r="14" fill="#0a0a0a" stroke="#CCFF00" strokeWidth="1.5" />
                   <motion.circle cx="100" cy="75" r="4" fill="#CCFF00" animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                   <motion.circle cx="100" cy="75" r="14" fill="none" stroke="#CCFF00" animate={{ scale: [1, 1.6], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity }} />

                   {/* Microservices Nodes */}
                   <rect x="160" y="30" width="25" height="20" rx="3" fill="#0a0a0a" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                   <circle cx="178" cy="40" r="2" fill="#10b981" />
                   
                   <rect x="160" y="65" width="25" height="20" rx="3" fill="#0a0a0a" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                   <circle cx="178" cy="75" r="2" fill="#10b981" />
                   
                   <rect x="160" y="100" width="25" height="20" rx="3" fill="#0a0a0a" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                   <circle cx="178" cy="110" r="2" fill="#10b981" />
                   
                </svg>

                {/* Overlay Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#CCFF00]/10 rounded-full blur-[40px] pointer-events-none" />
             </div>
             
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="absolute bottom-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-[#CCFF00]/10"
             >
                <span className="text-[#CCFF00]/80 font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
                   REAL-TIME SYNCHRONIZATION
                </span>
             </motion.div>
          </motion.div>
        </div>

        {/* Middle: Expanded Tech Toolkit */}
        <div className="flex flex-col gap-8">
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="flex items-center gap-4"
          >
             <h3 className="text-white font-mono text-xl uppercase tracking-widest">// ENGINEERING TOOLKIT</h3>
             <div className="h-[1px] flex-1 bg-white/10" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.technologies.map((tech, i) => {
              const IconComponent = getIcon(tech.iconName);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-[#CCFF00]/30 hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-8"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/5 rounded-full blur-[40px] group-hover:bg-[#CCFF00]/10 transition-colors pointer-events-none" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg">
                    <IconComponent className="text-3xl text-zinc-400 group-hover:text-[#CCFF00] transition-colors duration-500" />
                  </div>
                  
                  <div className="flex flex-col gap-2 relative z-10">
                    <h4 className="text-white font-bold text-2xl tracking-tight">{tech.name}</h4>
                    <p className="text-zinc-400 leading-relaxed font-light">{tech.reason}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom: Lighthouse Analytics Engine */}
        {data.analytics && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-[#050505] border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
          >
            {/* Dark inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#CCFF00]/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-12">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5 pb-8">
                  <div>
                    <h3 className="text-white text-3xl font-serif font-medium">Performance Metrics</h3>
                    <p className="text-zinc-500 font-mono text-xs tracking-widest mt-2 uppercase">Core Web Vitals & Lighthouse Scores</p>
                  </div>
                  <div className="px-6 py-3 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
                     <span className="text-[#CCFF00] font-mono text-sm tracking-widest uppercase font-bold">
                        LOAD: {data.analytics.loadTime}
                     </span>
                  </div>
               </div>

               <div className="flex flex-wrap justify-center md:justify-between items-start gap-12 md:gap-6 px-4 md:px-12">
                  <RadialGauge value={data.analytics.performance} label="Performance" delay={0.1} color="#CCFF00" />
                  <RadialGauge value={data.analytics.accessibility} label="Accessibility" delay={0.3} color="#CCFF00" />
                  <RadialGauge value={data.analytics.bestPractices} label="Best Practices" delay={0.5} color="#CCFF00" />
                  <RadialGauge value={data.analytics.seo} label="SEO Rating" delay={0.7} color="#CCFF00" />
               </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
