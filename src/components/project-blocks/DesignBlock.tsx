'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { StrategyDesignBlock } from '@/types/project';

export default function DesignBlock({ data }: { data: StrategyDesignBlock }) {
  console.log("DesignBlock Data:", data);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.assets.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.assets.length - 1 : prev - 1));
  };

  return (
    <section ref={containerRef} className="relative w-full py-16 md:py-32 border-t border-white/10 overflow-hidden">
      <div className="flex flex-col gap-20">
        
        {/* Top Half: Strategy Text & Animated Concept */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Text & Solution */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-[#CCFF00]" />
                <span className="text-[#CCFF00] font-mono text-sm tracking-[0.3em] uppercase">STRATEGY & DESIGN</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-medium text-white font-serif tracking-[0.02em]"
              >
                {data.title}
              </motion.h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-xl font-light leading-relaxed border-l-2 border-white/10 pl-6"
            >
              {data.description}
            </motion.p>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="mt-4 flex flex-col gap-4"
            >
               <span className="text-white/50 font-mono text-xs uppercase tracking-widest">THE SOLUTION ARCHITECTURE</span>
               <p className="text-zinc-300 text-lg leading-relaxed">
                  {data.solutionText}
               </p>
                {data.websiteUrl && (
                  <Link 
                    href={data.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#CCFF00] text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.15)] mt-6 w-fit inline-flex items-center gap-2"
                  >
                    Visit Live Website
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </Link>
                )}
            </motion.div>
          </div>

          {/* Right: "Design is Engineering" Animated SVG Concept */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative w-full aspect-square md:aspect-[4/3] bg-zinc-900/40 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center overflow-hidden p-8"
          >
             <div className="absolute top-6 left-6 text-zinc-600 font-mono text-xs uppercase tracking-widest">
                VISUAL ENGINEERING
             </div>
             
             {/* The Blueprint Animation */}
             <div className="relative w-full max-w-[400px] aspect-square">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                   {/* Background Grid */}
                   <path d="M 10 0 L 10 100 M 30 0 L 30 100 M 50 0 L 50 100 M 70 0 L 70 100 M 90 0 L 90 100" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                   <path d="M 0 10 L 100 10 M 0 30 L 100 30 M 0 50 L 100 50 M 0 70 L 100 70 M 0 90 L 100 90" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                   
                   {/* Drawing the Wireframe container */}
                   <motion.rect 
                     x="10" y="10" width="80" height="80" rx="4"
                     fill="none" stroke="#CCFF00" strokeWidth="1" strokeDasharray="5 5"
                     initial={{ pathLength: 0, opacity: 0 }}
                     whileInView={{ pathLength: 1, opacity: 0.3 }}
                     transition={{ duration: 2, ease: "easeInOut" }}
                   />

                   {/* Drawing the Header Block */}
                   <motion.rect 
                     x="15" y="15" width="70" height="15" rx="2"
                     fill="none" stroke="white" strokeWidth="0.5"
                     initial={{ pathLength: 0 }}
                     whileInView={{ pathLength: 1 }}
                     transition={{ duration: 1.5, delay: 1 }}
                   />
                   
                   {/* Drawing the Sidebar Block */}
                   <motion.rect 
                     x="15" y="35" width="20" height="50" rx="2"
                     fill="none" stroke="white" strokeWidth="0.5"
                     initial={{ pathLength: 0 }}
                     whileInView={{ pathLength: 1 }}
                     transition={{ duration: 1.5, delay: 1.5 }}
                   />

                   {/* Drawing the Main Content Block */}
                   <motion.rect 
                     x="40" y="35" width="45" height="30" rx="2"
                     fill="none" stroke="white" strokeWidth="0.5"
                     initial={{ pathLength: 0 }}
                     whileInView={{ pathLength: 1 }}
                     transition={{ duration: 1.5, delay: 2 }}
                   />

                   {/* Drawing the "Conversion" Button/CTA */}
                   <motion.rect 
                     x="40" y="70" width="45" height="15" rx="2"
                     fill="rgba(204, 255, 0, 0.1)" stroke="#CCFF00" strokeWidth="1.5"
                     initial={{ scaleX: 0, originX: 0 }}
                     whileInView={{ scaleX: 1 }}
                     transition={{ duration: 1, delay: 3, type: "spring" }}
                   />

                   {/* Pulsing Target nodes */}
                   {[
                     {cx: 15, cy: 15}, {cx: 85, cy: 15}, {cx: 15, cy: 85}, {cx: 85, cy: 85},
                     {cx: 40, cy: 70}, {cx: 85, cy: 70}, {cx: 40, cy: 85}, {cx: 85, cy: 85}
                   ].map((node, i) => (
                     <motion.circle 
                       key={i} cx={node.cx} cy={node.cy} r="1" fill="#CCFF00"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: [1, 2, 1] }}
                       transition={{ duration: 2, delay: 3.5 + (i * 0.1), repeat: Infinity, repeatDelay: 3 }}
                     />
                   ))}

                   {/* Connecting Line (Logic flow) */}
                   <motion.path 
                     d="M 25 60 L 35 60 L 35 77 L 40 77"
                     fill="none" stroke="#CCFF00" strokeWidth="0.5"
                     initial={{ pathLength: 0 }}
                     whileInView={{ pathLength: 1 }}
                     transition={{ duration: 1, delay: 4 }}
                   />
                </svg>

                {/* Final Glowing overlay to show "Resolution" */}
                <motion.div 
                   className="absolute inset-0 bg-gradient-to-tr from-[#CCFF00]/10 via-transparent to-transparent rounded-lg blur-md"
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ duration: 2, delay: 4.5 }}
                />
             </div>
             
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 5 }}
               className="absolute bottom-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-[#CCFF00]/20"
             >
                <span className="text-[#CCFF00] font-mono text-[10px] tracking-widest uppercase">
                   DESIGN = CONVERSION ARCHITECTURE
                </span>
             </motion.div>
          </motion.div>
        </div>

        {/* Bottom Half: Interactive Mockups Slider */}
        {data.assets && data.assets.length > 0 && (
          <div className="w-full relative aspect-[4/5] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl group">
            
            {/* Slider Track */}
            <div 
               className="w-full h-full flex" 
               style={{ 
                 transform: `translateX(-${currentIndex * 100}%)`, 
                 transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' 
               }}
            >
              {data.assets.map((asset, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 relative flex items-center justify-center overflow-hidden">
                  
                  {/* Dynamic Blurred Backdrop to fill empty space (Great for phone mockups) */}
                  <div className="absolute inset-0 opacity-30 blur-2xl pointer-events-none scale-110">
                    <Image 
                      src={asset.src} 
                      alt="backdrop" 
                      fill 
                      className="object-cover" 
                    />
                  </div>

                  {/* Main Mockup Image (Shrink-to-fit so border-radius works perfectly) */}
                  <div className="relative w-full h-full max-w-[95%] md:max-w-[85%] max-h-[95%] md:max-h-[85%] z-10 flex items-center justify-center p-2 md:p-4 mb-16 md:mb-0">
                    <img 
                      src={asset.src} 
                      alt={asset.alt} 
                      className="max-w-full max-h-full rounded-2xl md:rounded-[2rem] drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] object-contain" 
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Bottom shadow for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none z-10" />
                  
                  {/* Captions fixed to the bottom left of the slide */}
                  {asset.caption && (
                    <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 z-20 max-w-lg">
                      <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest block mb-1 opacity-80 backdrop-blur-sm bg-black/20 px-2 py-1 rounded inline-block">
                        {asset.alt}
                      </span>
                      <h3 className="text-xl md:text-3xl font-medium text-white drop-shadow-md">
                        {asset.caption}
                      </h3>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Controls (Vertically centered to avoid text overlap on mobile) */}
            {data.assets.length > 1 && (
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full px-4 md:px-6 z-30 flex justify-between pointer-events-none">
                 <button 
                   onClick={prevSlide}
                   className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-colors focus:outline-none"
                   aria-label="Previous image"
                 >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 </button>
                 <button 
                   onClick={nextSlide}
                   className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-colors focus:outline-none"
                   aria-label="Next image"
                 >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                 </button>
              </div>
            )}

            {/* Top Indicators */}
            {data.assets.length > 1 && (
              <div className="absolute top-6 right-8 z-30 flex gap-2">
                 {data.assets.map((_, i) => (
                    <button 
                       key={i} 
                       onClick={() => setCurrentIndex(i)}
                       className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[#CCFF00] w-12' : 'bg-white/30 w-4 hover:bg-white/60'}`}
                       aria-label={`Go to slide ${i + 1}`}
                    />
                 ))}
              </div>
            )}
            
          </div>
        )}
        
      </div>
    </section>
  );
}
