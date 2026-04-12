'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const leftData = [
  { label: 'TECH', value: 'Tech Solutions • System Architecture • Web Apps' },
  { label: 'GROWTH', value: 'Business Development • Scaling Strategies' },
  { label: 'MARKET', value: 'Digital Marketing • Branding • Campaigns' },
  { label: 'MEDIA', value: 'Post-Production • Video Editing • Visual Creation' },
];

const rightData = [
  { label: 'SYSTEMS', value: 'Full-Stack Engineering • Custom ERPs • Node & Next.js' },
  { label: 'E-COMM', value: 'Shopify • WordPress • Conversion Rate Optimization' },
  { label: 'UI/UX', value: 'Frictionless User Journeys • Modern Brutalist Design' },
  { label: 'CONSULT', value: 'Fractional CTO • VPS Server Management • Tech Strategy' },
];

export default function SeyaqServicesMerged() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Offset ensures that scrolling exactly matches the container bounds
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Center colored bar height (acts like a scrollbar filling up)
  const coloredBarHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative md:h-[200dvh] w-full bg-[#050505] text-[#F5F5F0]">
      {/* Sticky container stays on screen on desktop. On mobile, it flows naturally. */}
      <div className="md:sticky md:top-0 md:h-[100dvh] w-full flex flex-col md:flex-row md:overflow-hidden">
        
        {/* Center vertical line track (side on mobile, center on desktop) */}
        <div className="absolute left-[16px] md:left-1/2 top-4 bottom-4 md:top-10 md:bottom-10 w-[2px] bg-zinc-800 z-50">
          {/* Animated colored bar growing downwards */}
          <motion.div 
            style={{ height: coloredBarHeight }}
            className="w-full bg-[#CCFF00] origin-top shadow-[0_0_15px_#CCFF00]"
          />
          {/* Circular thumb indicator at the end of the colored bar */}
          <motion.div 
            style={{ top: coloredBarHeight }}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-zinc-500 bg-[#050505] flex items-center justify-center z-50"
          >
            <div className="w-[5px] h-[5px] bg-[#CCFF00] shadow-[0_0_10px_#CCFF00] rounded-full" />
          </motion.div>
        </div>

        {/* LEFT PANEL: THE AGENCY FORCE */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-between py-16 md:py-32 px-10 md:pl-24 md:pr-16 z-10">
          <div className="mb-12 md:mb-20">
            <span className="text-[#CCFF00] font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-4 block">
              // SEYAQ CAPABILITIES
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-normal" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
              THE AGENCY<br />FORCE
            </h2>
            <p className="mt-8 text-zinc-400 text-sm md:text-base max-w-sm leading-relaxed font-light">
              As the Co-Founder & CTO of SEYAQ Agency, I lead a full-service digital powerhouse. We don&apos;t just build software; we engineer complete market dominance—combining robust tech solutions with aggressive business development and marketing strategies to scale your brand.
            </p>
          </div>

          <div className="flex flex-col w-full">
            {leftData.map((item, index) => (
              <motion.div 
                key={`left-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 15, backgroundColor: "rgba(255,255,255,0.02)" }}
                className="w-full py-6 border-b border-zinc-800 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-12 cursor-pointer group transition-colors duration-300 rounded-lg px-4 -mx-4"
              >
                <span className="text-[#CCFF00] font-mono text-xs tracking-widest uppercase w-20 group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
                <span className="text-zinc-300 font-mono text-sm sm:text-base tracking-wide flex-1 group-hover:text-white transition-colors duration-300">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL: YOUR DIGITAL PARTNER */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-between py-16 md:py-32 px-10 md:pr-24 md:pl-16 z-10 border-t md:border-t-0 border-zinc-900">
          <div className="mb-12 md:mb-20">
            <span className="text-[#CCFF00] font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-4 block">
              // MY SERVICES
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-normal" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
              YOUR DIGITAL<br />PARTNER
            </h2>
            <p className="mt-8 text-zinc-400 text-sm md:text-base max-w-sm leading-relaxed font-light">
              I bridge the gap between business objectives and technical execution. Whether you need a high-converting e-commerce storefront, a custom operational ERP, or fractional CTO guidance, I build the exact digital engine your business needs to operate flawlessly.
            </p>
          </div>

          <div className="flex flex-col w-full">
            {rightData.map((item, index) => (
              <motion.div 
                key={`right-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: -15, backgroundColor: "rgba(255,255,255,0.02)" }}
                className="w-full py-6 border-b border-zinc-800 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-12 cursor-pointer group transition-colors duration-300 rounded-lg px-4 -mx-4"
              >
                <span className="text-[#CCFF00] font-mono text-xs tracking-widest uppercase w-20 group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
                <span className="text-zinc-300 font-mono text-sm sm:text-base tracking-wide flex-1 group-hover:text-white transition-colors duration-300">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
