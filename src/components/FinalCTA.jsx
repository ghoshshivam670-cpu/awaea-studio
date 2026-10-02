import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteData } from '../data/siteData';
import { useVibe } from '../context/VibeContext';

export default function FinalCTA({ onOpenContact, onOpenAreYouSure }) {
  const { content, isProfessional } = useVibe();

  const handlePrimaryClick = () => {
    if (onOpenAreYouSure) {
      onOpenAreYouSure(() => onOpenContact('Final CTA'));
    } else {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.8 },
        colors: ['#FF4D00', '#111111', '#1F8F5F', '#FFD700']
      });
      onOpenContact('Final CTA');
    }
  };

  return (
    <section className="py-24 sm:py-36 bg-awara-orange text-white relative overflow-hidden border-t-4 border-dark">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-dark text-white border-2 border-white/40 rounded-full shadow-brutal text-xs sm:text-sm font-mono font-bold tracking-widest uppercase mb-6">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span>{content.finalCta.eyebrow}</span>
        </div>

        {/* Enormous Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tight text-white font-display leading-[0.92] mb-8 drop-shadow-sm">
          {content.finalCta.heading1} <br />
          <span className="text-dark bg-yellow-300 px-3 sm:px-6 inline-block transform -rotate-1 border-3 border-dark shadow-brutal mt-2">
            {content.finalCta.headingHighlight}
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl sm:text-3xl font-bold text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed">
          {content.finalCta.quote}
        </p>

        {/* Action Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <button
            onClick={handlePrimaryClick}
            data-bhai-tip="haan bhai, click kar 🔥"
            className="cta-pulse w-full sm:w-auto px-10 py-5 bg-dark hover:bg-black text-white font-black text-lg sm:text-xl uppercase tracking-wider font-display border-3 border-white shadow-brutal-white hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all rounded-sm flex items-center justify-center gap-3 group cursor-pointer"
          >
            <span>{content.finalCta.primaryBtn}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <a
            href={siteData.brand.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-bhai-tip="direct WhatsApp pe aao 💬"
            className="w-full sm:w-auto px-9 py-5 bg-white hover:bg-paper-light text-dark font-black text-lg uppercase tracking-wider font-display border-3 border-dark shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all rounded-sm flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-6 h-6 text-awara-green" />
            <span>{content.finalCta.whatsappBtn}</span>
          </a>
        </div>

        {/* Brand Stamp */}
        <div className="pt-8 border-t-2 border-white/20 max-w-xl mx-auto">
          <div className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            AWARA FACTORY
          </div>
          <div className="font-mono text-sm sm:text-base font-bold text-dark tracking-widest mt-1">
            {content.tagline}
          </div>
          <div className="font-hand text-xl text-yellow-200 mt-2">
            {content.finalCta.handNote}
          </div>
        </div>

      </div>
    </section>
  );
}
