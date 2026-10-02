import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, X } from 'lucide-react';
import { useVibe } from '../context/VibeContext';

export default function NewIdeaFlashPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlashing, setIsFlashing] = useState(true);
  const { content, isProfessional } = useVibe();
  const popData = content.popup;

  useEffect(() => {
    // Show on Page 1 shortly after page loads (1.2s delay for maximum impact)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    // Stop intense flash glow after 6 seconds but keep card visible
    const flashTimer = setTimeout(() => {
      setIsFlashing(false);
    }, 7000);

    return () => {
      clearTimeout(timer);
      clearTimeout(flashTimer);
    };
  }, []);

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="New Idea Quick Launch"
      className="fixed bottom-24 sm:bottom-8 left-3 sm:left-6 z-[9990] animate-bounce-slow"
    >
      <div
        onClick={scrollToPricing}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && scrollToPricing()}
        className={`relative bg-dark text-paper border-3 border-awara-orange rounded-xl p-4 sm:p-5 shadow-brutal-orange max-w-[310px] sm:max-w-xs cursor-pointer group transition-all duration-300 ${
          isFlashing ? 'ring-4 ring-awara-orange/60 animate-pulse' : 'hover:scale-[1.02]'
        }`}
      >
        {/* Blinking LIVE flash beacon */}
        <div className="absolute -top-3 -right-2 flex items-center gap-1.5 bg-red-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          {isProfessional ? 'ACTIVE' : 'LIVE'}
        </div>

        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(false);
          }}
          className="absolute top-1.5 right-1.5 text-white/40 hover:text-white p-1 rounded transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="text-3xl sm:text-4xl animate-pulse select-none">
            💡
          </div>
          <div className="pr-2">
            <p className="text-white font-black text-sm sm:text-base leading-tight mb-1 font-display uppercase tracking-tight">
              {popData.title}
            </p>
            <p className="text-awara-orange font-bold text-xs sm:text-sm font-hand leading-snug">
              {popData.subtitle}
            </p>
            <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-dark bg-awara-orange px-3 py-1 rounded-sm uppercase tracking-wider group-hover:bg-white group-hover:text-dark transition-colors shadow-sm">
              <span>{popData.button}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
