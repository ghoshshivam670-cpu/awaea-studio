import React from 'react';
import { Cog, Zap, Sparkles, ArrowRight } from 'lucide-react';

export default function Marquee() {
  const phrase = [
    { text: 'BUILD.', color: 'text-dark' },
    { text: 'AUTOMATE.', color: 'text-awara-orange' },
    { text: 'GO AWARA.', color: 'text-dark' },
    { text: 'BUILD.', color: 'text-awara-orange' },
    { text: 'AUTOMATE.', color: 'text-dark' },
    { text: 'GO AWARA.', color: 'text-awara-orange' },
  ];

  return (
    <div className="w-full bg-yellow-300 border-y-4 border-dark py-4 overflow-hidden select-none group relative pause-on-hover shadow-brutal">
      <div className="flex w-max marquee-content animate-marquee">
        {/* Sequence 1 */}
        <div className="flex items-center gap-6 shrink-0 pr-6">
          {phrase.map((item, idx) => (
            <React.Fragment key={`p1-${idx}`}>
              <span className={`text-2xl sm:text-4xl font-black uppercase tracking-tight font-display ${item.color}`}>
                {item.text}
              </span>
              <Cog className="w-5 h-5 text-dark animate-spin" style={{ animationDuration: '6s' }} />
            </React.Fragment>
          ))}
        </div>

        {/* Sequence 2 (Duplicate for continuous loop) */}
        <div className="flex items-center gap-6 shrink-0 pr-6" aria-hidden="true">
          {phrase.map((item, idx) => (
            <React.Fragment key={`p2-${idx}`}>
              <span className={`text-2xl sm:text-4xl font-black uppercase tracking-tight font-display ${item.color}`}>
                {item.text}
              </span>
              <Cog className="w-5 h-5 text-dark animate-spin" style={{ animationDuration: '6s' }} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
