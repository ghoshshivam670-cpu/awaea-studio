import React from 'react';
import { MessageSquare, Search, Code, Rocket, Sparkles, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useVibe } from '../context/VibeContext';

const stepIcons = [MessageSquare, Search, Code, Rocket];

export default function Process({ onOpenContact }) {
  const { content } = useVibe();
  const procData = content.process;

  return (
    <section id="process" className="py-24 sm:py-32 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-dark rounded-full shadow-brutal text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-awara-orange" />
            <span>{procData.badge}</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-dark font-display leading-[0.95] mb-4">
            {procData.title1} <br />
            <span className="text-awara-orange underline decoration-dark decoration-4">{procData.title2}</span>
          </h2>

          <p className="text-lg sm:text-xl text-dark/80 font-medium">
            {procData.sub}
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {(procData.steps || siteData.process).map((item, index) => {
            const IconComponent = stepIcons[index] || Rocket;
            return (
              <div
                key={item.step}
                className="bg-white border-3 border-dark rounded-md p-6 sm:p-7 shadow-brutal hover:shadow-brutal-orange transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative"
              >
                <div>
                  {/* Top Step Row */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-3xl font-black text-dark/20 group-hover:text-awara-orange transition-colors">
                      {item.step}
                    </span>
                    <div className="p-2.5 bg-paper rounded border border-dark group-hover:bg-dark group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="inline-block px-2 py-0.5 bg-paper-light border border-dark/30 rounded text-[10px] font-mono font-bold uppercase text-dark mb-3">
                    {item.badge}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-dark font-display mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-dark/70 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-6 border-t border-dark/15 mt-6 flex items-center justify-between font-mono text-xs font-bold text-dark/40 group-hover:text-dark transition-colors">
                  <span>STEP 0{index + 1} OF 04</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-awara-orange" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenContact('Process Inquiry')}
            className="px-8 py-4 bg-dark text-white font-extrabold text-sm sm:text-base uppercase tracking-widest font-mono border-2 border-dark rounded shadow-brutal hover:bg-awara-orange transition-colors inline-flex items-center gap-3"
          >
            <span>Step 01 Shuru Karein (Let's Talk)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
