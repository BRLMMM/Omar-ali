'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = {
  home: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ],
  archive: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/#contact' },
  ],
  project: [
    { name: 'Home', href: '/' },
    { name: 'Design', href: '#design' },
    { name: 'Development', href: '#development' },
    { name: 'System', href: '#system' },
    { name: 'Contact', href: '#contact' },
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Determine which nav items to show
  const currentItems = pathname === '/' 
    ? navItems.home 
    : pathname === '/projects' 
      ? navItems.archive 
      : navItems.project;

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[110] flex flex-col items-end gap-4 pointer-events-none">
      
      {/* The Smooth Menu Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-64 md:w-80 bg-black border-2 border-[#CCFF00] p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] pointer-events-auto origin-bottom-right mb-2"
          >
            {/* Header / Brand */}
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
              <span className="text-[#CCFF00] font-mono text-[10px] tracking-[0.3em] uppercase font-black italic">Navigation / HUB</span>
              <div className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
            </div>

            {/* Links List */}
            <div className="flex flex-col gap-4">
              {currentItems.map((item, i) => {
                const isAnchor = item.href.includes('#');
                
                const handleClick = (e: React.MouseEvent) => {
                  if (isAnchor && pathname === '/') {
                    e.preventDefault();
                    const targetId = item.href.split('#')[1];
                    const element = document.getElementById(targetId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      setIsOpen(false);
                    }
                  } else {
                    setIsOpen(false);
                  }
                };

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleClick}
                    className="group flex items-center justify-between text-2xl md:text-3xl font-black uppercase tracking-tighter text-white hover:text-[#CCFF00] transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[#CCFF00]/20 text-xs font-mono group-hover:text-[#CCFF00] transition-colors">{`0${i+1}`}</span>
                      {item.name}
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">&rarr;</span>
                  </Link>
                );
              })}
            </div>

            {/* Footer text in box */}
            <div className="mt-12 text-[8px] md:text-[10px] text-zinc-600 font-mono uppercase tracking-[0.2em] leading-relaxed">
              Omar Ali • Digital Partner <br />
              © {new Date().getFullYear()} ALL RIGHTS RESERVED
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="w-14 h-14 md:w-20 md:h-20 bg-black border-2 border-[#CCFF00] rounded-full flex items-center justify-center text-[#CCFF00] shadow-[0_0_40px_rgba(204,255,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 pointer-events-auto group relative overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
      >
         {/* Animated BG on hover */}
         <div className="absolute inset-0 bg-[#CCFF00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
         
         <div className="relative z-10">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="w-6 h-6 md:w-8 md:h-8 group-hover:text-black transition-colors" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="text-[10px] md:text-[12px] font-black group-hover:text-black transition-colors uppercase tracking-widest leading-none mt-1">Menu</span>
                  <div className="w-4 md:w-6 h-[2px] bg-[#CCFF00] group-hover:bg-black transition-colors" />
                </motion.div>
              )}
            </AnimatePresence>
         </div>
      </motion.button>

      {/* Screen Overlay when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[-1] pointer-events-auto"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
