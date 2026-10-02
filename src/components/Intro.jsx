import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, Zap, RefreshCw, Cpu, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useVibe } from '../context/VibeContext';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const containerRef = useRef(null);
  const { content } = useVibe();

  const defaultIcons = [Layers, RefreshCw, Cpu, Zap];
  const defaultColors = ['hover:bg-yellow-300', 'hover:bg-blue-300', 'hover:bg-awara-orange hover:text-white', 'hover:bg-green-300'];

  const words = content.intro.words.map((item, idx) => ({
    ...item,
    icon: defaultIcons[idx] || Layers,
    color: defaultColors[idx] || 'hover:bg-yellow-300'
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.intro-word-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-dark text-paper relative overflow-hidden border-y-4 border-dark">
      {/* Background subtle noise and tech accents */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>

      {/* Floating badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-awara-orange text-white text-xs font-mono font-bold tracking-wider uppercase rounded-sm border border-white/20 mb-4 shadow-brutal-white">
            <span>{content.intro.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-paper leading-[1.05] mb-6 font-display">
            {content.intro.heading}
          </h2>

          <p className="text-lg sm:text-xl text-paper/80 font-medium leading-relaxed">
            {content.intro.desc}
          </p>
        </div>

        {/* 4 HUGE WORDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {words.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className={`intro-word-card bg-paper-light text-dark p-6 sm:p-8 border-3 border-dark rounded-md shadow-brutal-white hover:shadow-brutal-orange transition-all duration-300 group cursor-default flex flex-col justify-between min-h-[260px] ${item.color}`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs font-bold text-dark/60 tracking-widest">
                      0{idx + 1} // {item.label || item.hindi}
                    </span>
                    <Icon className="w-5 h-5 text-dark transition-transform group-hover:rotate-12 group-hover:scale-110" />
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tight font-display mb-3 text-dark">
                    {item.text}
                  </h3>
                </div>

                <div className="pt-4 border-t-2 border-dark/20 flex items-center justify-between">
                  <p className="text-xs sm:text-sm font-semibold text-dark/80 font-mono">
                    {item.desc}
                  </p>
                  <ArrowUpRight className="w-4 h-4 text-dark shrink-0 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Micro quote below */}
        <div className="mt-14 text-center">
          <span className="font-hand text-xl sm:text-2xl text-paper/90 bg-dark/60 border border-white/20 px-5 py-2 rounded-full inline-block transform rotate-1 shadow-sm">
            "Ctrl+C Ctrl+V ko retirement do. Business system se chalao."
          </span>
        </div>
      </div>
    </section>
  );
}
