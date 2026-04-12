'use client';

import { motion } from 'framer-motion';
import type { InfrastructureBlock as InfrastructureBlockType } from '@/types/project';

export default function InfrastructureBlock({ data }: { data: InfrastructureBlockType }) {
  return (
    <section className="relative w-full py-20 md:py-32 border-t border-white/10 overflow-hidden">
      
      {/* Abstract Background SVG routing lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="none">
           <motion.path 
             d="M 10 50 Q 50 10 90 50 T 170 50"
             fill="none" stroke="#CCFF00" strokeWidth="2"
             initial={{ pathLength: 0 }}
             whileInView={{ pathLength: 1 }}
             transition={{ duration: 2, ease: "easeInOut" }}
           />
           <motion.path 
             d="M 30 80 Q 70 20 110 80 T 190 80"
             fill="none" stroke="#CCFF00" strokeWidth="1"
             initial={{ pathLength: 0 }}
             whileInView={{ pathLength: 1 }}
             transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
           />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col gap-24">
        
        {/* Top: Introduction & Animated Server Concept */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
              <span className="text-[#CCFF00] font-mono text-sm tracking-[0.3em] uppercase">DEPLOYMENT ARCHITECTURE</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white uppercase tracking-[0.02em]"
              style={{ fontFamily: "'Impact', sans-serif" }}
            >
              {data.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-xl font-light leading-relaxed mt-2"
            >
              {data.description}
            </motion.p>
          </div>

          {/* Animated SVG Concept Box: "Server Rack" */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative w-full aspect-[4/3] bg-zinc-900/40 rounded-[2rem] border border-[#CCFF00]/20 flex flex-col items-center justify-center p-8 shadow-2xl overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/10 via-transparent to-transparent pointer-events-none" />
             
             <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                   INFRASTRUCTURE TOPOLOGY
                </span>
             </div>
             
             {/* Server Rack Animation */}
             <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center z-10">
                <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                   
                   {/* Background Glow */}
                   <circle cx="100" cy="100" r="80" fill="url(#serverGlow)" />
                   <defs>
                     <radialGradient id="serverGlow" cx="50%" cy="50%" r="50%">
                       <stop offset="0%" stopColor="rgba(204, 255, 0, 0.15)" />
                       <stop offset="100%" stopColor="rgba(204, 255, 0, 0)" />
                     </radialGradient>
                   </defs>

                   {/* Server Blades Rack */}
                   <rect x="50" y="40" width="100" height="120" rx="4" fill="#050505" stroke="#CCFF00" strokeWidth="2" />
                   
                   {/* Blade 1 (Proxy/Nginx) */}
                   <rect x="55" y="50" width="90" height="20" rx="2" fill="#000" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                   <motion.circle cx="130" cy="60" r="3" fill="#10b981" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.5, repeat: Infinity }} />
                   <line x1="65" y1="60" x2="85" y2="60" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" />

                   {/* Blade 2 (Node/PM2) */}
                   <rect x="55" y="80" width="90" height="20" rx="2" fill="#000" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                   <motion.circle cx="130" cy="90" r="3" fill="#10b981" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} />
                   <line x1="65" y1="90" x2="105" y2="90" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" />

                   {/* Blade 3 (Database) */}
                   <rect x="55" y="110" width="90" height="20" rx="2" fill="#000" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                   <motion.circle cx="130" cy="120" r="3" fill="#10b981" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.5 }} />
                   <line x1="65" y1="120" x2="95" y2="120" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" />

                   {/* Uplink Data Stream */}
                   <path d="M 100 0 L 100 40" stroke="rgba(204, 255, 0, 0.5)" strokeWidth="2" strokeDasharray="4 4" />
                   <motion.circle cx="100" cy="0" r="4" fill="#CCFF00" animate={{ cy: [0, 40] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                   <motion.circle cx="100" cy="0" r="4" fill="#CCFF00" animate={{ cy: [0, 40] }} transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.5 }} />

                   {/* Shield Security Overlay */}
                   <motion.path 
                     d="M 30 100 Q 100 10 170 100 Q 100 190 30 100"
                     fill="none" stroke="rgba(204, 255, 0, 0.2)" strokeWidth="1"
                     animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                   />
                </svg>
             </div>
             
             <div className="absolute bottom-6 left-0 w-full flex justify-center z-20">
                <span className="px-4 py-2 bg-[#CCFF00]/10 backdrop-blur rounded-full text-[#CCFF00] font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                   DEPLOYMENT CLUSTER ALIVE
                </span>
             </div>
          </motion.div>
        </div>

        {/* Infrastructure Tools List */}
        {data.tools && data.tools.length > 0 && (
           <div className="flex flex-col gap-8 w-full mt-8">
              <h3 className="text-white font-mono text-xl uppercase tracking-widest border-b border-white/10 pb-4">// INFRASTRUCTURE TOOLKIT</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                 {data.tools.map((tool, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group p-8 rounded-3xl bg-zinc-900/50 border border-[#CCFF00]/10 hover:border-[#CCFF00]/50 transition-colors duration-300 relative overflow-hidden"
                    >
                       {/* Terminal-like header */}
                       <div className="flex items-center gap-2 mb-6 opacity-50">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                       </div>
                       <h4 className="text-[#CCFF00] font-mono text-lg font-bold mb-3">{tool.name}</h4>
                       <p className="text-zinc-400 font-light leading-relaxed">{tool.description}</p>
                    </motion.div>
                 ))}
              </div>
           </div>
        )}

        {/* Bottom: Metrics Visualizer Grid */}
        {data.metrics && data.metrics.length > 0 && (
          <div className="w-full mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {data.metrics.map((metric, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col justify-between h-56 p-8 rounded-3xl bg-zinc-900 border border-white/5 group hover:border-[#CCFF00]/50 overflow-hidden transition-colors"
                >
                    {/* Dynamic Background Graphs */}
                    <div className="absolute inset-x-0 bottom-0 h-32 opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                       
                       {/* Uptime Line Graph */}
                       {i === 0 && (
                          <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                             <defs>
                               <linearGradient id="uptGrad" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="0%" stopColor="#CCFF00" stopOpacity="0.5" />
                                 <stop offset="100%" stopColor="#CCFF00" stopOpacity="0" />
                               </linearGradient>
                             </defs>
                             <motion.path 
                               d="M 0 40 L 10 38 L 25 40 L 35 25 L 45 35 L 55 10 L 70 20 L 85 5 L 100 10 L 100 50 L 0 50 Z" 
                               fill="url(#uptGrad)"
                             />
                             <motion.path 
                               d="M 0 40 L 10 38 L 25 40 L 35 25 L 45 35 L 55 10 L 70 20 L 85 5 L 100 10" 
                               fill="none" stroke="#CCFF00" strokeWidth="1.5"
                               initial={{ pathLength: 0 }}
                               whileInView={{ pathLength: 1 }}
                               transition={{ duration: 1.5, ease: "easeOut" }}
                             />
                          </svg>
                       )}

                       {/* Backup Cycle Rings */}
                       {i === 1 && (
                         <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="xMidYMax meet">
                            <motion.circle cx="50" cy="50" r="40" fill="none" stroke="rgba(204,255,0,0.2)" strokeWidth="1" />
                            <motion.circle cx="50" cy="50" r="40" fill="none" stroke="#CCFF00" strokeWidth="2" strokeDasharray="60 200"
                                animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} style={{ originX: "50px", originY: "50px" }} />
                            <motion.circle cx="50" cy="50" r="25" fill="none" stroke="rgba(204,255,0,0.2)" strokeWidth="1" />
                            <motion.circle cx="50" cy="50" r="25" fill="none" stroke="#CCFF00" strokeWidth="2" strokeDasharray="30 100"
                                animate={{ rotate: -360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} style={{ originX: "50px", originY: "50px" }} />
                         </svg>
                       )}

                       {/* Latency Real-time Bars */}
                       {i === 2 && (
                         <div className="w-full h-full flex items-end justify-between gap-[2px] px-2 pb-2">
                            {[...Array(15)].map((_, j) => (
                              <motion.div 
                                key={j} 
                                className="w-full bg-[#CCFF00]/60 rounded-t-sm"
                                animate={{ height: [`${Math.random() * 20 + 10}%`, `${Math.random() * 80 + 20}%`, `${Math.random() * 20 + 10}%`] }}
                                transition={{ duration: 0.5 + Math.random(), repeat: Infinity, ease: "linear" }}
                              />
                            ))}
                         </div>
                       )}

                       {/* Hosting Node Web */}
                       {i === 3 && (
                          <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                             <path d="M 20 40 L 50 10 L 80 40 L 50 30 Z" fill="none" stroke="rgba(204,255,0,0.3)" strokeWidth="1" />
                             <motion.circle cx="20" cy="40" r="2" fill="#CCFF00" className="animate-ping" />
                             <motion.circle cx="50" cy="10" r="3" fill="#CCFF00" />
                             <motion.circle cx="80" cy="40" r="2" fill="#CCFF00" className="animate-ping" />
                             <motion.circle cx="50" cy="30" r="2" fill="#CCFF00" />
                             <motion.circle r="1.5" fill="#fff" animate={{ cx: [20, 50, 80], cy: [40, 10, 40] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                          </svg>
                       )}
                    </div>

                    {/* Text Content overlaying the graph */}
                    <div className="relative z-10 flex flex-col h-full justify-start">
                      <span className="text-4xl lg:text-5xl font-black text-white tracking-tighter" style={{ fontFamily: "'Impact', sans-serif" }}>
                        {metric.value}
                      </span>
                      <span className="text-[#CCFF00] font-mono text-xs tracking-widest uppercase mt-4">
                        {metric.label}
                      </span>
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
