'use client';

import { motion } from 'framer-motion';
import { ProblemStatementBlock } from '@/types/project';

export default function ProblemBlock({ data }: { data: ProblemStatementBlock }) {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        
        {/* Left Side: Dramatic Title & Impact Graph */}
        <div className="md:col-span-5 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-500 font-mono text-sm tracking-[0.3em] uppercase">THE CHALLENGE</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-[0.02em]"
              style={{ fontFamily: "'Impact', sans-serif" }}
            >
              {data.title}
            </motion.h2>
          </div>

          {/* Animated Crashing Graph */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative w-full h-48 md:h-64 bg-gradient-to-b from-red-950/20 to-transparent border border-red-500/10 rounded-[2rem] overflow-hidden flex flex-col justify-end p-6 md:p-8"
          >
            {/* The SVG Graph */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="crashGradient" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
                   <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Crashing Area */}
              <motion.path 
                 d="M 0 10 Q 15 15 30 40 T 60 70 T 100 90 L 100 100 L 0 100 Z"
                 fill="url(#crashGradient)"
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ duration: 1 }}
              />
              {/* Grid Lines */}
              <path d="M 0 25 L 100 25 M 0 50 L 100 50 M 0 75 L 100 75" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2 2" />
              {/* Crashing Line */}
              <motion.path 
                 d="M 0 10 Q 15 15 30 40 T 60 70 T 100 90"
                 fill="none" stroke="#ef4444" strokeWidth="2"
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
              />
              {/* Data Loss Point */}
              <motion.circle 
                 cx="100" cy="90" r="3" fill="#ef4444"
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 transition={{ delay: 2.5, type: "spring" }}
              />
              <motion.circle 
                 cx="100" cy="90" r="8" fill="#ef4444"
                 className="opacity-30"
                 animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                 transition={{ duration: 2, repeat: Infinity }}
              />
            </svg>
            
            <div className="relative z-10">
              <span className="text-red-500 font-mono text-3xl md:text-5xl font-black uppercase tracking-tighter drop-shadow-lg">
                {data.trendLabel || 'LOSS TREND'}
              </span>
              <div className="h-1 w-8 bg-red-500/50 mt-1" />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Description */}
        <div className="md:col-span-7 flex flex-col gap-10 justify-center pb-8 border-l border-white/5 pl-0 md:pl-12">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-lg md:text-2xl text-zinc-300 font-light leading-[1.8] flex flex-col gap-6"
           >
             {/* Splitting the text randomly by sentences if it's long, or just showing the raw string if not */}
             {data.problem.split('. ').map((sentence, index, arr) => (
                <p key={index} className="opacity-90 hover:opacity-100 transition-opacity">
                   {sentence}{index !== arr.length - 1 ? '.' : ''}
                </p>
             ))}
           </motion.div>
           
           {data.impact && (
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="p-8 md:p-10 bg-red-950/30 border border-red-500/20 rounded-[2rem] relative overflow-hidden group"
             >
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] rounded-full group-hover:bg-red-500/20 transition-all duration-700" />
               <div className="relative z-10">
                  <span className="flex items-center gap-2 text-red-500 font-mono text-xs tracking-widest uppercase mb-4">
                     <span className="text-lg">⚠</span> CRITICAL BUSINESS IMPACT
                  </span>
                  <p className="text-red-100/90 text-lg md:text-xl leading-relaxed italic border-l-2 border-red-500/30 pl-4">
                     "{data.impact}"
                  </p>
               </div>
             </motion.div>
           )}
        </div>
        
      </div>
    </section>
  );
}
