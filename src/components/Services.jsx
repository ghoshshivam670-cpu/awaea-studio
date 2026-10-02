import React, { useState } from 'react';
import { Layout, Bot, MessageSquare, Mail, Zap, Smartphone, Puzzle, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useVibe } from '../context/VibeContext';

const iconMap = {
  Layout: Layout,
  Smartphone: Smartphone,
  Bot: Bot,
  MessageSquare: MessageSquare,
  Zap: Zap,
  Mail: Mail,
  Puzzle: Puzzle
};

export default function Services({ onOpenContact }) {
  const [activeCard, setActiveCard] = useState(null);
  const { content } = useVibe();

  return (
    <section id="services" className="py-24 sm:py-32 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-dark rounded-full shadow-brutal text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-awara-orange" />
              <span>{content.services.eyebrow}</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-dark font-display leading-[0.95]">
              {content.services.title1} <br />
              <span className="text-awara-orange underline decoration-dark decoration-4">{content.services.title2}</span>
            </h2>
          </div>
          <p className="max-w-md text-dark/70 font-medium text-base sm:text-lg">
            {content.services.sub}
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {(content.services.items || siteData.services).map((srv, idx) => {
            const rawService = siteData.services[idx] || srv;
            const IconComponent = iconMap[rawService.icon] || Layout;
            const isHovered = activeCard === srv.id;

            return (
              <div
                key={srv.id}
                onMouseEnter={() => setActiveCard(srv.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`card-glow bg-white border-3 border-dark rounded-md p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 ease-out relative group cursor-pointer ${
                  isHovered
                    ? 'shadow-brutal-orange -translate-y-2 border-awara-orange scale-[1.02]'
                    : 'shadow-brutal hover:shadow-brutal-lg'
                }`}
                onClick={() => onOpenContact(srv.name)}
              >
                {/* Top Bar with ID and Tag */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl sm:text-2xl font-black font-mono text-dark/30 group-hover:text-awara-orange transition-colors">
                      {srv.id}
                    </span>
                    <span className="px-2 py-0.5 bg-paper border border-dark text-[10px] font-mono font-bold text-dark rounded uppercase">
                      {srv.tag}
                    </span>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-2.5 bg-paper border-2 border-dark rounded-md group-hover:bg-awara-orange group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5 text-dark group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-dark font-display leading-tight">
                      {srv.name}
                    </h3>
                  </div>

                  {/* Short Highlight Copy */}
                  <p className="text-sm sm:text-base font-bold text-dark/90 mb-2 leading-snug">
                    "{srv.shortDesc}"
                  </p>

                  {/* Details */}
                  <p className="text-xs text-dark/70 font-medium leading-relaxed mb-4">
                    {srv.details}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-1 pt-2 border-t border-dark/15 mb-4">
                    {srv.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-dark/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-awara-green shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer with Microcopy & Action */}
                <div className="pt-4 border-t-2 border-dark flex items-center justify-between">
                  <span className="font-hand font-bold text-sm text-awara-orange group-hover:text-dark transition-colors">
                    {srv.microcopy}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold font-mono uppercase bg-dark text-white px-3 py-1.5 rounded-sm group-hover:bg-awara-orange transition-colors">
                    <span>Build</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 bg-paper-light border-3 border-dark rounded-md shadow-brutal flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💡</span>
            <p className="font-bold text-sm sm:text-base text-dark">
              {content.services.customCardSub}
            </p>
          </div>
          <button
            onClick={() => onOpenContact('Custom Automation')}
            className="px-5 py-2.5 bg-dark hover:bg-awara-orange text-white font-bold text-xs uppercase tracking-wider font-mono border-2 border-dark rounded shadow-sm shrink-0 transition-colors"
          >
            {content.services.customCardTitle}
          </button>
        </div>
      </div>
    </section>
  );
}
