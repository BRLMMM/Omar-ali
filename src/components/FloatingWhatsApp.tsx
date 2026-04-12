'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

// Validate WhatsApp number: must contain only digits and optional leading +
function sanitizePhoneNumber(number: string): string {
  const cleaned = number.replace(/[^\d+]/g, '');
  // If invalid, return default safe value
  if (!/^\+?\d{10,15}$/.test(cleaned)) {
    console.warn('Invalid WhatsApp number format, using default');
    return '20100000000';
  }
  return cleaned;
}

export default function FloatingWhatsApp() {
  const rawWhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "20100000000";
  const whatsappNumber = sanitizePhoneNumber(rawWhatsappNumber);
  const message = encodeURIComponent("Hello Omar, I'd like to discuss a project with you.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[100] w-14 h-14 md:w-20 md:h-20 bg-black border-2 border-[#CCFF00] rounded-full flex items-center justify-center text-[#CCFF00] shadow-[0_0_30px_rgba(204,255,0,0.2)] hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto group"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
    >
      <motion.div 
        animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
        transition={{ duration: 0.5, delay: 2, repeat: Infinity, repeatDelay: 5 }}
        className="relative z-10"
      >
        <FaWhatsapp className="w-7 h-7 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
      </motion.div>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-[#CCFF00]/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
}
