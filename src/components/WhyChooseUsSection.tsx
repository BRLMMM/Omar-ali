'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const timelineData = [
  {
    id: "01",
    quote: "After the website launch, the client noticed an increase in traffic and demo request submissions. Visitors spent more time on the site, and the bounce rate decreased.",
    author: "Daria Naumova",
    role: "Product Manager, ValidSoft",
    stat: "400+",
    statLabel: "SATISFIED CLIENTS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    color: "#3b82f6"
  },
  {
    id: "02",
    quote: "The brand identity overhaul completely changed how our users perceive us. We have seen a 300% increase in user retention since the redesign.",
    author: "James Chen",
    role: "CEO, TechNova",
    stat: "300%",
    statLabel: "USER RETENTION",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    color: "#a855f7"
  },
  {
    id: "03",
    quote: "The web application they built handles thousands of concurrent users without breaking a sweat. Top-tier tech expertise.",
    author: "Sarah Jenkins",
    role: "CTO, Global Logistics",
    stat: "99.9%",
    statLabel: "UPTIME GUARANTEED",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    color: "#10b981"
  },
  {
    id: "04",
    quote: "Their AI integration optimized our internal workflows drastically. Tasks that used to take days are now automated and completed in seconds.",
    author: "Michael Roberts",
    role: "Director, FutureCorp",
    stat: "10x",
    statLabel: "FASTER WORKFLOWS",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    color: "#CCFF00"
  }
];

export default function WhyChooseUsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-24 md:py-32 px-6 sm:px-12 lg:px-24 w-full max-w-[100rem] mx-auto overflow-hidden bg-[#050505]"
    >
      <div className="flex flex-col gap-12 md:gap-20">
        
        {/* Header - Impact Minimalist */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-900 pb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-6xl md:text-8xl lg:text-9xl tracking-[0.02em] font-black text-white uppercase leading-[0.8]"
                style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
              >
                PROVEN<br />RESULTS
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4 max-w-sm"
            >
                <div className="w-12 h-[2px] bg-[#CCFF00]" />
                <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                  I don&apos;t just write code; I build business solutions. With 4 years of experience and a tech-agnostic approach, I deliver digital infrastructure designed to scale your operations and drive revenue.
                </p>
            </motion.div>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 md:auto-rows-[300px] lg:auto-rows-[350px]"
        >
          {/* Card 1: Systematized Growth (Khatwa Success) */}
          <motion.div 
            variants={cardVariants}
            className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-zinc-900/30 border border-white/5 hover:border-[#CCFF00]/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                   <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#CCFF00" stopOpacity="1" />
                      <stop offset="100%" stopColor="#CCFF00" stopOpacity="0" />
                   </radialGradient>
                </defs>
                <motion.path 
                   d="M 10 20 L 30 50 L 70 30 L 90 80 M 20 80 L 50 10 L 80 60"
                   fill="none" stroke="#CCFF00" strokeWidth="0.1" 
                   initial={{ pathLength: 0 }}
                   whileInView={{ pathLength: 1 }}
                   transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
                {[
                  {x: 10, y: 20}, {x: 30, y: 50}, {x: 70, y: 30}, {x: 90, y: 80},
                  {x: 20, y: 80}, {x: 50, y: 10}, {x: 80, y: 60}, {x: 40, y: 40}
                ].map((dot, i) => (
                  <motion.circle 
                    key={i} cx={dot.x} cy={dot.y} r="0.8" fill="url(#dotGradient)"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3 + i, repeat: Infinity }}
                  />
                ))}
              </svg>
            </div>

            <div className="absolute inset-0 z-0">
               <Image 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                 alt="Khatwa Success" 
                 fill 
                 className="object-cover opacity-10 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-20 group-hover:grayscale-0"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
            </div>
            
            <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-end gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                   <span className="text-[#CCFF00] font-mono text-sm tracking-[0.3em] uppercase">/ OPERATIONAL SCALING</span>
                   <div className="flex-1 h-[1px] bg-[#CCFF00]/20" />
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-white leading-none tracking-[0.02em] uppercase" style={{ fontFamily: "'Impact', sans-serif" }}>
                  SYSTEMATIZED GROWTH
                </h3>
              </div>
              <p className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl leading-relaxed italic">
                &ldquo;The custom website and management system completely transformed how we operate. It streamlined our internal processes so efficiently that we were finally able to confidently expand our team and scale the business.&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-4">
                 <div className="flex flex-col">
                    <span className="text-[#CCFF00] font-medium tracking-wide">— CEO, Khatwa Consultancy</span>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Market Expansion (Danbam Success) */}
          <motion.div 
            variants={cardVariants}
            className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-zinc-950 p-8 flex flex-col justify-between border border-white/5 hover:border-[#CCFF00]/40 transition-all duration-500"
          >
            <div className="absolute inset-x-0 bottom-0 top-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                <motion.path
                  d="M 0 35 Q 15 32, 30 20 T 60 25 T 100 5"
                  fill="none"
                  stroke="#CCFF00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                />
                <motion.circle 
                   cx="100" cy="5" r="3" fill="#CCFF00"
                   initial={{ scale: 0 }}
                   whileInView={{ scale: 1 }}
                   transition={{ delay: 3, type: "spring" }}
                />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                 <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">/ MARKET EXPANSION</span>
              </div>
              <div className="text-6xl md:text-7xl font-black text-white mt-1 tracking-tighter" style={{ fontFamily: "'Impact', sans-serif" }}>
                 150%
              </div>
            </div>
            
            <div className="relative z-10 mt-4">
               <p className="text-zinc-400 text-sm leading-snug">
                 <span className="text-white font-bold">SALES GROWTH.</span> Transitioned Danbam from offline to a fully digital storefront, unlocking a massive new online market share and boosting overall revenue by 150%.
               </p>
            </div>
          </motion.div>

          {/* Card 3: Infrastructure (VPS & Backend) */}
          <motion.div 
            variants={cardVariants}
            className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-zinc-950 p-8 flex flex-col justify-between border border-white/5 hover:border-[#10b981]/40 transition-all duration-500"
          >
            <div className="absolute inset-x-0 bottom-4 h-12 opacity-20 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
                <motion.path 
                  d="M 0 20 L 40 20 L 45 10 L 55 30 L 60 20 L 100 20 L 105 5 L 115 35 L 120 20 L 160 20 L 165 15 L 175 25 L 180 20 L 200 20"
                  fill="none" stroke="#10b981" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                 <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">/ INFRASTRUCTURE</span>
              </div>
              <div className="text-6xl md:text-7xl font-black text-[#10b981] mt-2 tracking-tighter" style={{ fontFamily: "'Impact', sans-serif" }}>
                 99.9%
              </div>
            </div>
            <p className="relative z-10 text-zinc-400 text-sm leading-snug">
               <span className="text-white font-bold">ROCK-SOLID UPTIME.</span> Expert VPS server management and resilient backend architecture. Your business systems stay online 24/7 without a single glitch.
            </p>
          </motion.div>

          {/* Card 4: Detailed Philosophy & Acceleration (Full Width) */}
          <motion.div 
            variants={cardVariants}
            className="md:col-span-12 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-[#CCFF00]/40 transition-all duration-1000 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1 flex flex-col gap-4">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-[#CCFF00]" />
                 <span className="text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase">CONVERSION OPTIMIZATION</span>
               </div>
               <h3 className="text-4xl md:text-6xl font-black text-white leading-none tracking-[0.02em] uppercase" style={{ fontFamily: "'Impact', sans-serif" }}>
                  DESIGNED TO CONVERT
               </h3>
               <p className="text-xl text-zinc-300 font-light max-w-xl italic">
                  &ldquo;A beautiful UI means nothing if it doesn&apos;t sell. I engineer frictionless user journeys, removing unnecessary steps to accelerate the path from the landing page directly to checkout.&rdquo;
               </p>
               <div className="text-[#CCFF00]/80 font-mono text-xs tracking-widest">— UI/UX Philosophy</div>
            </div>
            
            {/* Speed Accelerator Animation Side */}
            <div className="relative w-full md:w-1/3 h-48 md:h-64 bg-zinc-800/40 rounded-3xl overflow-hidden border border-white/5 flex items-center justify-center">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                   {isMounted && [...Array(25)].map((_, i) => (
                     <motion.div 
                       key={i} 
                       className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent"
                       style={{
                         top: `${Math.random() * 100}%`,
                         width: `${Math.random() * 40 + 20}%`,
                         left: "-100%",
                         opacity: Math.random() * 0.4 + 0.1,
                       }}
                       animate={{ x: ["0%", "500%"] }}
                       transition={{ 
                         duration: Math.random() * 0.4 + 0.2, 
                         repeat: Infinity, 
                         ease: "linear",
                         delay: Math.random() * 2 
                       }}
                     />
                   ))}
                </div>
                <div className="relative z-10 flex flex-col items-center">
                   <div className="text-[#CCFF00] font-mono text-7xl font-black italic tracking-tighter">10X</div>
                   <div className="text-white font-black text-xl tracking-tighter uppercase mt-2" style={{ fontFamily: "'Impact', sans-serif" }}>
                     FASTER CHECKOUTS
                   </div>
                   <div className="h-[1px] w-8 bg-[#CCFF00]/40 my-3" />
                   <span className="text-zinc-500 font-mono text-[9px] tracking-[0.5em] uppercase">OPTIMIZED USER FLOWS</span>
                </div>
            </div>
          </motion.div>


        </motion.div>

      </div>
    </section>
  );
}
