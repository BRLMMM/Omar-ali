'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scroll animations: Use % instead of vw to scale perfectly with the contained text size
  const xTop = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const xBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const firstName = "OMAR";
  const lastName = "ALI";

  // Hover animation for individual letters (subtle, edgy, continuous jitter)
  const letterVariants = {
    initial: { y: 0, rotate: 0, scale: 1 },
    hover: { 
      y: [0, -2, 1, -1, 0], 
      rotate: [0, -1, 1, 0, 0],
      scale: [1, 1.02, 1],
      transition: { 
        duration: 0.8, 
        repeat: Infinity, 
        ease: "easeInOut" 
      } 
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] w-full bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >

      {/* 4 Corner Typographies - Fully Responsive */}
      <div className="absolute top-6 sm:top-8 left-4 sm:left-8 z-20">
        <span className="text-[9px] sm:text-xs md:text-sm font-mono tracking-widest text-[#CCFF00]">
          OMARALI.COM
        </span>
      </div>
      <div className="absolute top-6 sm:top-8 right-4 sm:right-8 z-20 text-right">
        <span className="text-[9px] sm:text-[10px] md:text-sm font-mono tracking-widest text-[#CCFF00]">
          VOL. 1 / 2026
        </span>
      </div>
      <div className="absolute bottom-20 sm:bottom-8 left-4 sm:left-8 z-20">
        <span className="text-[9px] sm:text-[10px] md:text-sm font-mono tracking-widest text-[#CCFF00]">
          P. 001
        </span>
      </div>
      <div className="absolute bottom-24 sm:bottom-8 right-6 sm:right-8 z-20 text-right">
        <span className="text-[9px] sm:text-[10px] md:text-sm font-mono tracking-widest text-[#CCFF00]">
          / CREATIVE DEVELOPER
        </span>
      </div>

      {/* Main Massive Typography - Optimized Blend Mode for Mobile */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center translate-y-[-5%] md:mix-blend-difference">
        
        {/* Top Text (First Name) */}
        <motion.div 
          style={{ x: xTop }}
          className="flex whitespace-nowrap mb-[-12vw] sm:mb-[-8vw] md:mb-[-4vw] will-change-transform"
        >
          {firstName.split('').map((letter, i) => (
            <motion.span
              key={`first-${i}`}
              variants={letterVariants}
              initial="initial"
              whileHover="hover"
              className="text-[45vw] md:text-[25vw] font-black leading-none text-[#F5F5F0] cursor-crosshair inline-block uppercase drop-shadow-xl md:drop-shadow-2xl will-change-transform"
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Bottom Text (Last Name) */}
        <motion.div 
          style={{ x: xBottom }}
          className="flex whitespace-nowrap will-change-transform"
        >
          {lastName.split('').map((letter, i) => (
            <motion.span
              key={`last-${i}`}
              variants={letterVariants}
              initial="initial"
              whileHover="hover"
              className="text-[45vw] md:text-[25vw] font-black leading-none text-[#CCFF00] cursor-crosshair inline-block uppercase drop-shadow-lg md:drop-shadow-[5px_5px_0px_#000] translate-z-0 will-change-transform"
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}