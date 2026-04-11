'use client';

import React from 'react';

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  // Environment Variables for Contacts & Socials
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "omar@example.com";
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#";
  const tiktokUrl = process.env.NEXT_PUBLIC_TIKTOK_URL || "#";
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || "#";
  const formEndpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || "";

  return (
    <footer className="h-[100dvh] w-full bg-[#E8E6E1] text-black flex flex-col justify-between pt-12 pb-32 md:pt-16 md:pb-32 px-6 md:px-16 overflow-hidden">
      
      {/* Top / Center - Massive Typography */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 
          className="text-[22vw] sm:text-[25vw] leading-[0.8] text-center font-normal tracking-tight w-full hover:scale-105 transition-transform duration-700"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }} 
        >
          Contact
        </h2>
      </div>

      {/* Bottom - Form and Footer details */}
      <div className="w-full flex flex-col gap-12 md:gap-16">
        
        {/* Form Row */}
        <form 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-end"
          action={formEndpoint}
          method={formEndpoint ? "POST" : "GET"}
          onSubmit={(e) => {
            if (!formEndpoint) {
              e.preventDefault();
              alert("Backend integration pending. Please configure NEXT_PUBLIC_CONTACT_FORM_ENDPOINT");
            }
          }}
        >
          <div className="flex flex-col gap-2 w-full">
            <input 
              type="text" 
              className="bg-transparent border-b border-black/40 hover:border-black focus:border-black pb-2 px-1 text-sm md:text-base placeholder-black/60 focus:outline-none transition-colors" 
              placeholder="Your Name" 
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <input 
              type="email" 
              className="bg-transparent border-b border-black/40 hover:border-black focus:border-black pb-2 px-1 text-sm md:text-base placeholder-black/60 focus:outline-none transition-colors" 
              placeholder="Your Email" 
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <input 
              type="tel" 
              className="bg-transparent border-b border-black/40 hover:border-black focus:border-black pb-2 px-1 text-sm md:text-base placeholder-black/60 focus:outline-none transition-colors" 
              placeholder="Your Phone Number" 
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full md:w-auto flex-shrink-0 border-2 border-black bg-black text-[#CCFF00] px-8 py-3 md:py-4 rounded-full font-mono text-xs md:text-sm font-black uppercase tracking-[0.2em] shadow-[5px_5px_0_0_#CCFF00] hover:shadow-[0px_0px_0_0_#CCFF00] hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-200 focus:outline-none"
          >
            Submit
          </button>
        </form>

        {/* Details Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-xs md:text-sm font-mono gap-6 pt-6 border-t border-black/10">
          <p className="text-black/70">
            © {currentYear} All rights reserved for Omar Ali.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 uppercase font-bold">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black/50 transition-colors relative group">
              Instagram
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="hover:text-text-black/50 transition-colors relative group">
              TikTok
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black/50 transition-colors relative group">
              Facebook
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href={`mailto:${email}`} className="hover:text-black/50 transition-colors relative group">
              Email
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
