import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Zap, X } from 'lucide-react';

export default function SystemAnnotations() {
  const [activeAnnotation, setActiveAnnotation] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let timer1, timer2;

    const handleScroll = () => {
      if (dismissed) return;
      const scrollPos = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = scrollPos / (docHeight || 1);

      if (scrollRatio > 0.15 && scrollRatio < 0.35) {
        if (activeAnnotation?.id !== 'manual') {
          setActiveAnnotation({ id: 'manual', phase: 1, text: 'MANUAL WORK DETECTED. 🔍' });
          clearTimeout(timer1);
          timer1 = setTimeout(() => {
            setActiveAnnotation({ id: 'manual', phase: 2, text: 'RELAX. AWARA FACTORY IS ON IT. ⚡' });
          }, 2400);
        }
      } else if (scrollRatio >= 0.35 && scrollRatio < 0.6) {
        if (activeAnnotation?.id !== 'scanning') {
          setActiveAnnotation({ id: 'scanning', phase: 1, text: 'SCANNING BOTTLENECKS... 📡' });
          clearTimeout(timer2);
          timer2 = setTimeout(() => {
            setActiveAnnotation({ id: 'scanning', phase: 2, text: 'YEP. THIS CAN BE AUTOMATED. ✅' });
          }, 2400);
        }
      } else if (scrollRatio >= 0.6 && scrollRatio < 0.85) {
        if (activeAnnotation?.id !== 'pricing') {
          setActiveAnnotation({ id: 'pricing', phase: 1, text: 'THIS PART LOOKS EXPENSIVE? 💸' });
          clearTimeout(timer1);
          timer1 = setTimeout(() => {
            setActiveAnnotation({ id: 'pricing', phase: 2, text: 'IT DOESN\'T HAVE TO BE. (STARTER ₹14,999) 🤝' });
          }, 2400);
        }
      } else {
        setActiveAnnotation(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [dismissed, activeAnnotation?.id]);

  if (!activeAnnotation || dismissed) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-200 hidden sm:block">
      <div className="bg-dark text-paper border-2 border-white/40 rounded px-3 py-2 shadow-brutal-white font-mono text-xs flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="w-2 h-2 rounded-full bg-awara-orange animate-ping shrink-0"></span>
          <span className="font-bold tracking-tight text-yellow-300 truncate">
            {activeAnnotation.text}
          </span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-paper/50 hover:text-white transition-colors"
          aria-label="Dismiss system HUD"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
