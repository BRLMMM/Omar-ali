'use client';

import React, { useState, useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const QuestionBlock = ({ num, title, children }: any) => (
  <div className="flex flex-col md:flex-row gap-6 md:gap-16 border-b border-black/10 py-12 md:py-20 transition-colors hover:border-black/30">
    <div className="w-full md:w-1/3 flex flex-col gap-2">
      <span className="text-black/40 font-mono text-sm tracking-widest uppercase">0{num} //</span>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-black" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        {title}
      </h3>
    </div>
    <div className="w-full md:w-2/3">
      {children}
    </div>
  </div>
);

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  // Environment Variables for Socials
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#";
  const tiktokUrl = process.env.NEXT_PUBLIC_TIKTOK_URL || "#";
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || "#";
  const emailAddress = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "omar@example.com";

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    serviceType: [] as string[],
    timeline: '',
    projectOrigin: '',
    inspiration: '',
    source: '',
    details: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = ['System / Dashboard', 'Modern Website', 'UI/UX Design', 'Maintenance'];
  const timelines = ['As soon as possible', 'Within 1-2 months', 'No strict deadline'];
  const origins = ['Idea / Just starting out', 'Already launched', 'Scaling / Expanding'];
  const sources = ['LinkedIn', 'Twitter (X)', 'Google Search', 'Friend / Referral'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelection = (srv: string) => {
    setFormData(prev => {
      const currentServices = prev.serviceType;
      if (currentServices.includes(srv)) {
        return { ...prev, serviceType: currentServices.filter(s => s !== srv) };
      } else {
        return { ...prev, serviceType: [...currentServices, srv] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || formData.serviceType.length === 0) {
      setErrorMessage("Please complete your name, email, and select at least one service.");
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, serviceType: formData.serviceType.join(', ') }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      setFormData({ name: '', company: '', serviceType: [], timeline: '', projectOrigin: '', inspiration: '', source: '', details: '', email: '', phone: '' });
    } catch (error) {
      setErrorMessage("Failed to send message. Please reach out to me directly via email.");
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full h-auto overflow-hidden">
      <footer className="sticky top-0 w-full bg-[#E8E6E1] text-black pt-24 pb-32 md:pt-40 px-6 md:px-12 xl:px-24 border-t-2 border-black">
        <div className="flex flex-col">

      {/* Massive Title */}
      <h2 
        className="text-[12vw] sm:text-[15vw] leading-[0.8] font-normal tracking-tighter mb-16 md:mb-32 opacity-90 uppercase"
        style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '-0.02em' }}
      >
        START A PROJECT.
      </h2>

      {/* Minimalist Q&A Form */}
      <div className="w-full max-w-7xl relative pb-16">
        
        {submitStatus === 'success' ? (
          <div className="flex flex-col py-20 pb-40 md:py-40 items-start text-left gap-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 
              className="text-[15vw] leading-[0.8] font-normal tracking-tighter opacity-95 uppercase mb-4"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '-0.02em' }}
            >
              INBOXED.
            </h2>
            <div className="flex flex-col gap-6 max-w-2xl">
              <p className="text-2xl md:text-4xl font-normal tracking-tight leading-tight text-black/80">
                Your vision is now in our hands. <br className="hidden md:block" /> 
                We'll reach out to discuss the next steps within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitStatus('idle')}
                className="text-black font-mono text-sm tracking-widest uppercase border-b border-black pb-1 w-fit hover:opacity-50 transition-opacity mt-8"
              >
                ← Send another inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col w-full" noValidate>
            
            <QuestionBlock num="1" title="What's your name?">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe *"
                className="w-full bg-transparent text-2xl md:text-4xl lg:text-5xl font-light placeholder-black/20 outline-none pb-4 focus:pb-2 transition-all"
                required
              />
            </QuestionBlock>

            <QuestionBlock num="2" title="Which company do you represent?">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Seyaq Studio"
                className="w-full bg-transparent text-2xl md:text-4xl lg:text-5xl font-light placeholder-black/20 outline-none pb-4 focus:pb-2 transition-all"
              />
            </QuestionBlock>

            <QuestionBlock num="3" title="How can I help you? *">
              <div className="flex flex-wrap gap-4">
                {services.map(srv => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => handleSelection(srv)}
                    className={`px-6 py-4 rounded-full text-sm md:text-lg tracking-wide transition-all duration-300 border border-black/20 ${formData.serviceType.includes(srv) ? 'bg-[#CCFF00] border-[#CCFF00] font-medium shadow-sm' : 'hover:border-black/60 bg-transparent text-black/70'}`}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </QuestionBlock>

            <QuestionBlock num="4" title="Where is your business currently at?">
              <div className="flex flex-wrap gap-4">
                {origins.map(org => (
                  <button
                    key={org}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, projectOrigin: org }))}
                    className={`px-6 py-4 rounded-full text-sm md:text-lg tracking-wide transition-all duration-300 border border-black/20 ${formData.projectOrigin === org ? 'bg-[#CCFF00] border-[#CCFF00] font-medium shadow-sm' : 'hover:border-black/60 bg-transparent text-black/70'}`}
                  >
                    {org}
                  </button>
                ))}
              </div>
            </QuestionBlock>

            <QuestionBlock num="5" title="What's your timeline?">
              <div className="flex flex-wrap gap-4">
                {timelines.map(tml => (
                  <button
                    key={tml}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, timeline: tml }))}
                    className={`px-6 py-4 rounded-full text-sm md:text-lg tracking-wide transition-all duration-300 border border-black/20 ${formData.timeline === tml ? 'bg-[#CCFF00] border-[#CCFF00] font-medium shadow-sm' : 'hover:border-black/60 bg-transparent text-black/70'}`}
                  >
                    {tml}
                  </button>
                ))}
              </div>
            </QuestionBlock>

            <QuestionBlock num="6" title="Any websites you love? (Inspiration)">
              <input
                type="text"
                name="inspiration"
                value={formData.inspiration}
                onChange={handleChange}
                placeholder="Drop some links here..."
                className="w-full bg-transparent text-2xl md:text-4xl lg:text-5xl font-light placeholder-black/20 outline-none pb-4 focus:pb-2 transition-all"
              />
            </QuestionBlock>

            <QuestionBlock num="7" title="How did you hear about Seyaq?">
              <div className="flex flex-wrap gap-4">
                {sources.map(src => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, source: src }))}
                    className={`px-6 py-4 rounded-full text-sm md:text-lg tracking-wide transition-all duration-300 border border-black/20 ${formData.source === src ? 'bg-[#CCFF00] border-[#CCFF00] font-medium shadow-sm' : 'hover:border-black/60 bg-transparent text-black/70'}`}
                  >
                    {src}
                  </button>
                ))}
              </div>
            </QuestionBlock>

            <QuestionBlock num="8" title="Tell me about your project.">
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Goals, target audience, extra notes..."
                className="w-full bg-transparent text-xl md:text-3xl font-light placeholder-black/20 outline-none pb-4 focus:pb-2 transition-all resize-none min-h-[150px]"
              />
            </QuestionBlock>

            <QuestionBlock num="9" title="How can I reach you?">
              <div className="flex flex-col gap-12">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com *"
                  className="w-full bg-transparent text-xl md:text-3xl font-light placeholder-black/20 outline-none pb-4 border-b border-black/10 focus:border-black/40 transition-all"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+20 100 000 0000"
                  className="w-full bg-transparent text-xl md:text-3xl font-light placeholder-black/20 outline-none pb-4 focus:pb-2 transition-all"
                />
              </div>
            </QuestionBlock>

            <div className="w-full flex justify-start mt-16 md:mt-24">
              <div className="flex flex-col items-start gap-6 w-full md:w-auto">
                 {submitStatus === 'error' && (
                  <p className="text-red-500 text-sm md:text-lg font-mono tracking-widest uppercase">{errorMessage}</p>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto flex items-center justify-between gap-8 border-2 border-black bg-black text-[#CCFF00] px-12 py-6 md:py-8 rounded-full font-mono text-lg md:text-2xl font-black uppercase tracking-[0.2em] shadow-[10px_10px_0_0_#CCFF00] hover:shadow-[0px_0px_0_0_#CCFF00] hover:translate-x-[10px] hover:translate-y-[10px] transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <span className="mt-1">{isSubmitting ? 'SENDING...' : 'SEND INQUIRY'}</span>
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-4 border border-[#CCFF00]/50 rounded-full w-12 h-12 flex items-center justify-center text-3xl pb-2">
                    →
                  </span>
                </button>
              </div>
            </div>

          </form>
        )}
      </div>

      {/* Details Row - Footer */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-xs md:text-sm font-mono gap-6 pt-12 md:pt-20 border-t-2 border-black/10 z-20 mt-12 md:mt-32">
        <p className="text-black/60 font-bold tracking-widest">
          © {currentYear} ALL RIGHTS RESERVED FOR OMAR ALI.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 uppercase font-black tracking-widest text-black/80">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] hover:bg-black px-3 py-2 rounded-sm transition-all duration-300">Instagram</a>
          <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] hover:bg-black px-3 py-2 rounded-sm transition-all duration-300">TikTok</a>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] hover:bg-black px-3 py-2 rounded-sm transition-all duration-300">Facebook</a>
        </div>
      </div>

      </div>
    </footer>
  </div>
  );
}
