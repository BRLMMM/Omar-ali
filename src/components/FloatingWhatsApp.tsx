'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  // Read WhatsApp number from Environment Variables
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "20100000000"; 
  const message = encodeURIComponent("Hello Omar, I'd like to discuss a project with you.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      /* 
        Neo-brutalist styling:
        - Pill shaped (rounded-full) with explicit horizontal padding
        - Hard offset shadow shadow-[4px_4px_0_0_#CCFF00]
        - Mechanical press effect on hover (shadow compresses, button shifts +4px)
      */
      className="fixed bottom-5 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-2 md:gap-4 h-10 md:h-16 px-4 md:px-8 bg-[#050505] text-[#CCFF00] rounded-full border-2 border-[#CCFF00] shadow-[4px_4px_0_0_#CCFF00] hover:shadow-[0px_0px_0_0_#CCFF00] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
    >
      {/* Text Label */}
      <span className="font-mono text-xs md:text-sm font-black tracking-[0.2em] uppercase mt-0.5" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
        LET'S CHAT
      </span>
      
      {/* Separator */}
      <div className="w-[2px] h-6 bg-[#CCFF00] opacity-50" />
      
      {/* Animated Icon */}
      <motion.div 
        animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
        transition={{ duration: 0.5, delay: 2, repeat: Infinity, repeatDelay: 5 }}
      >
        <FaWhatsapp className="w-4 h-4 md:w-7 md:h-7 group-hover:scale-125 transition-transform duration-300" />
      </motion.div>
    </motion.a>
  );
}
