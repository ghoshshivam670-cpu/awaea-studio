import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useVibe } from '../context/VibeContext';

export default function FAQ({ onOpenContact }) {
  const [openIdx, setOpenIdx] = useState(0);
  const { content } = useVibe();
  const faqData = content.faqs;

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-paper relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border-2 border-dark rounded-full shadow-brutal text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-awara-orange" />
            <span>{faqData.badge}</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-dark font-display leading-[0.95] mb-4">
            {faqData.title1} <br />
            <span className="text-awara-orange underline decoration-dark decoration-4">{faqData.title2}</span>
          </h2>
          <p className="text-base sm:text-lg text-dark/70 font-medium">
            {faqData.sub}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {(faqData.items || siteData.faqs).map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white border-3 border-dark rounded-md transition-all duration-200 overflow-hidden ${
                  isOpen ? 'shadow-brutal-orange -translate-y-1' : 'shadow-brutal hover:shadow-brutal-lg'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-awara-orange">
                      0{idx + 1}.
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-dark tracking-tight uppercase font-display">
                      {faq.q}
                    </h3>
                  </div>

                  <div className={`p-1.5 rounded-full border-2 border-dark shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-awara-orange text-white rotate-180' : 'bg-paper text-dark'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-sm sm:text-base text-dark/80 font-medium leading-relaxed border-t border-dark/10">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Unanswered Questions CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm font-mono text-dark/70 mb-4">
            Koi aur sawaal reh gaya?
          </p>
          <button
            onClick={() => onOpenContact('FAQ Doubt')}
            className="px-6 py-3 bg-dark hover:bg-awara-orange text-white font-bold text-xs uppercase font-mono tracking-wider rounded border-2 border-dark shadow-brutal transition-colors inline-flex items-center gap-2"
          >
            <span>Direct WhatsApp pe Pooch Lo →</span>
          </button>
        </div>

      </div>
    </section>
  );
}
