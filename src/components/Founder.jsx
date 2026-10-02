import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Terminal, Sparkles, Coffee, Code2, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useVibe } from '../context/VibeContext';

gsap.registerPlugin(ScrollTrigger);

export default function Founder({ onOpenContact }) {
  const { content, isProfessional } = useVibe();
  const fData = content.founder;
  const sectionRef = useRef(null);
  const [terminalText, setTerminalText] = useState('');
  const fullTerminalText = isProfessional
    ? 'SHIVAM.SYSTEMS --role=FOUNDER_ENGINEER --sla=99.98% --architecture=DEPLOYED'
    : 'SHIVAM.EXE --status=BUILDING --automation=ALWAYS --coffee=REQUIRED';

  useEffect(() => {
    let current = 0;
    const typingInterval = setInterval(() => {
      setTerminalText(fullTerminalText.slice(0, current));
      current++;
      if (current > fullTerminalText.length) {
        clearInterval(typingInterval);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [fullTerminalText]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.founder-portrait-box', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
      gsap.from('.founder-sticker', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        scale: 0,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5,
        ease: 'back.out(2)'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCtaClick = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FF4D00', '#111111', '#FFFFFF']
    });
    onOpenContact('Founder Direct');
  };

  return (
    <section id="founder" ref={sectionRef} className="py-24 sm:py-32 bg-paper-dark/40 border-y-3 border-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Opening Eyebrow */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-2 border-dark rounded-full shadow-brutal text-xs sm:text-sm font-mono font-bold tracking-wider text-dark mb-4">
            <span>{fData.badge}</span>
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-dark font-display leading-none">
            {fData.heading1} <span className="text-awara-orange underline decoration-dark decoration-4">{fData.heading2}</span>
          </h2>
        </div>

        {/* 2-Column Founder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left: Shivam Portrait + Stickers */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="founder-portrait-box relative max-w-[360px] sm:max-w-[400px] w-full">
              
              {/* Main Portrait Frame */}
              <div className="bg-white p-3 sm:p-4 border-4 border-dark rounded-lg shadow-brutal-xl relative z-10">
                <div className="relative overflow-hidden rounded border-2 border-dark bg-awara-orange">
                  <img
                    src="/shivam-founder.jpg"
                    alt="Shivam — Founder of Awara Factory"
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Overlay subtle badge */}
                  <div className="absolute bottom-2 left-2 bg-dark/85 backdrop-blur-sm text-white px-2.5 py-1 rounded font-mono text-[11px] border border-white/20 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-awara-green animate-ping"></span>
                    <span>SHIVAM // {isProfessional ? 'FOUNDER & ARCHITECT' : 'FOUNDER'}</span>
                  </div>
                </div>

                {/* Handwritten note below picture */}
                <div className="pt-3 flex justify-between items-center px-1">
                  <span className="font-hand text-dark font-bold text-base sm:text-lg">
                    {fData.note}
                  </span>
                  <span className="font-mono text-[11px] text-dark/50">
                    AW-FAC-001
                  </span>
                </div>
              </div>

              {/* Floating Sticker 1 - Top Right */}
              <div className="founder-sticker absolute -top-4 -right-4 z-20 rotate-6 hidden sm:block">
                <div className={`sticker border-2 text-xs sm:text-sm px-3 py-1 shadow-brutal ${
                  isProfessional ? 'bg-[#1E242B] text-white border-white/20 font-mono' : 'bg-yellow-300 text-dark border-dark'
                }`}>
                  <span>{fData.sticker1}</span>
                </div>
              </div>

              {/* Floating Sticker 2 - Bottom Left */}
              <div className="founder-sticker absolute -bottom-4 -left-4 z-20 -rotate-6 hidden sm:block">
                <div className="sticker bg-awara-orange text-white border-2 border-dark text-xs sm:text-sm px-3 py-1 shadow-brutal">
                  <span>{fData.sticker2}</span>
                </div>
              </div>

              {/* Floating Sticker 3 - Mid Right */}
              <div className="founder-sticker absolute top-1/2 -right-6 z-20 rotate-3 hidden md:block">
                <div className="sticker bg-red-100 text-red-700 border-2 border-dark text-xs px-2.5 py-1 shadow-brutal">
                  <span>{fData.sticker3}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Founder Copy + System Card + CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Story Card */}
            <div className="bg-white border-3 border-dark rounded-md p-6 sm:p-8 shadow-brutal relative">
              <div className="space-y-4 text-base sm:text-lg text-dark/90 leading-relaxed font-medium">
                <p className="font-extrabold text-2xl text-dark">
                  {fData.title}
                </p>

                <p>
                  {fData.intro}
                </p>

                <div className="p-3.5 bg-paper-light border-l-4 border-awara-orange rounded font-bold text-dark text-lg sm:text-xl font-display">
                  {fData.quote}
                </div>

                <p className="text-sm sm:text-base leading-relaxed">
                  {fData.story}
                </p>
              </div>

              {/* Signature */}
              <div className="pt-6 mt-6 border-t-2 border-dark/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-black text-xl text-dark uppercase tracking-tight font-display">
                    — Shivam
                  </div>
                  <div className="text-xs font-mono font-bold text-awara-orange">
                    Founder @ Awara Factory
                  </div>
                </div>
                <div className="font-mono text-xs text-dark/50 bg-paper px-2.5 py-1 rounded border border-dark/20">
                  BUILDER • AUTOMATOR • NO JARGON
                </div>
              </div>
            </div>

            {/* Fake System Card SHIVAM.EXE */}
            <div className="bg-dark text-paper border-3 border-dark rounded-md p-5 shadow-brutal font-mono text-xs sm:text-sm">
              <div className="flex items-center justify-between border-b border-paper/20 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-awara-orange" />
                  <span className="font-bold text-paper tracking-wider">SYSTEM://SHIVAM.EXE</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-awara-green">
                  <span className="w-2 h-2 rounded-full bg-awara-green animate-pulse"></span>
                  <span>ONLINE</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-white/5 p-2 rounded border border-white/10">
                  <span className="text-paper/50 block text-[10px] uppercase">STATUS</span>
                  <span className="text-white font-bold">BUILDING...</span>
                </div>
                <div className="bg-white/5 p-2 rounded border border-white/10">
                  <span className="text-paper/50 block text-[10px] uppercase">COFFEE</span>
                  <span className="text-yellow-400 font-bold">REQUIRED ☕</span>
                </div>
                <div className="bg-white/5 p-2 rounded border border-white/10">
                  <span className="text-paper/50 block text-[10px] uppercase">IDEAS</span>
                  <span className="text-awara-orange font-bold">TOO MANY</span>
                </div>
                <div className="bg-white/5 p-2 rounded border border-white/10">
                  <span className="text-paper/50 block text-[10px] uppercase">AUTOMATION</span>
                  <span className="text-awara-green font-bold">ALWAYS ⚡</span>
                </div>
                <div className="bg-white/5 p-2 rounded border border-white/10 col-span-2 sm:col-span-2">
                  <span className="text-paper/50 block text-[10px] uppercase">SLEEP</span>
                  <span className="text-paper/80 font-bold">maybe later 😴</span>
                </div>
              </div>
            </div>

            {/* Final CTA Strip */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p className="font-bold text-dark text-base sm:text-lg">
                {isProfessional
                  ? <>"Ready to scale your business operations? <span className="text-awara-orange">Let's build your automated architecture."</span></>
                  : <>"Anyway... enough about me. <span className="text-awara-orange">Let's make your business Awara."</span></>
                }
              </p>
              <button
                onClick={handleCtaClick}
                className="w-full sm:w-auto px-8 py-3.5 bg-awara-orange text-white font-black text-base uppercase tracking-wider font-display border-2 border-dark shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all rounded-sm flex items-center justify-center gap-2 shrink-0 active:scale-95"
              >
                <span>{isProfessional ? 'START ARCHITECTURE' : "LET'S BUILD"}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
