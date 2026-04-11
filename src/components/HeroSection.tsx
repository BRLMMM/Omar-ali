'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
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

  // Disable expensive scroll animations on mobile for better performance
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  // Only apply transforms on desktop
  const xTop = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "50%"]);
  const xBottom = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "-50%"]);

  const firstName = "OMAR";
  const lastName = "ALI";

  // Simplified hover animation for mobile, full animation for desktop
  const letterVariants = {
    initial: { y: 0, rotate: 0, scale: 1 },
    hover: {
      y: isMobile ? [0] : [0, -2, 1, -1, 0],
      rotate: isMobile ? [0] : [0, -1, 1, 0, 0],
      scale: isMobile ? [1] : [1, 1.02, 1],
      transition: {
        duration: isMobile ? 0 : 0.8,
        repeat: isMobile ? 0 : Infinity,
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

      {/* Main Massive Typography - Simplified for Mobile */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center translate-y-[-5%] md:mix-blend-difference">

        {/* Top Text (First Name) - CSS-only hover on mobile */}
        <motion.div
          style={{ x: xTop }}
          className="flex whitespace-nowrap mb-[-12vw] sm:mb-[-8vw] md:mb-[-4vw]"
        >
          {firstName.split('').map((letter, i) => (
            <motion.span
              key={`first-${i}`}
              variants={letterVariants}
              initial="initial"
              whileHover="hover"
              className="text-[45vw] md:text-[25vw] font-black leading-none text-[#F5F5F0] cursor-crosshair inline-block uppercase drop-shadow-xl md:drop-shadow-2xl"
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Bottom Text (Last Name) - CSS-only hover on mobile */}
        <motion.div
          style={{ x: xBottom }}
          className="flex whitespace-nowrap"
        >
          {lastName.split('').map((letter, i) => (
            <motion.span
              key={`last-${i}`}
              variants={letterVariants}
              initial="initial"
              whileHover="hover"
              className="text-[45vw] md:text-[25vw] font-black leading-none text-[#CCFF00] cursor-crosshair inline-block uppercase drop-shadow-lg md:drop-shadow-[5px_5px_0px_#000]"
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
