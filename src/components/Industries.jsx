import React from 'react';
import { Stethoscope, Utensils, Building2, GraduationCap, Store, ShoppingBag, Rocket, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

const iconMap = {
  Stethoscope,
  Utensils,
  Building2,
  GraduationCap,
  Store,
  ShoppingBag,
  Rocket,
  Briefcase,
};

export default function Industries({ onOpenContact }) {
  return (
    <section className="py-24 sm:py-32 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border-2 border-dark rounded-full shadow-brutal text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-awara-orange" />
            <span>USE CASES ACROSS INDUSTRIES</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-dark font-display leading-[0.95] mb-4">
            KAUN KAUN <br />
            <span className="text-awara-orange underline decoration-dark decoration-4">AWARA HO SAKTA HAI?</span>
          </h2>
          <p className="text-base sm:text-xl text-dark/70 font-medium">
            Koi bhi business jisme customers aate hain aur repeat manual kaam hota hai. Real workflow automations that scale.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteData.industries.map((ind, idx) => {
            const IconComponent = iconMap[ind.icon] || Store;
            return (
              <div
                key={ind.title}
                className="bg-white border-3 border-dark rounded-md p-6 shadow-brutal hover:shadow-brutal-orange transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 cursor-pointer"
                onClick={() => onOpenContact(ind.title)}
              >
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <div className="p-3 bg-paper border-2 border-dark rounded group-hover:bg-awara-orange group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5 text-dark group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-mono text-xs font-bold text-dark/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-black uppercase tracking-tight text-dark font-display mb-3">
                    {ind.title}
                  </h3>

                  {/* Flow Pill */}
                  <div className="p-3 bg-paper-light border border-dark/20 rounded-sm mb-4">
                    <span className="text-[10px] font-mono uppercase font-bold text-awara-orange block mb-1">
                      AUTOMATED FLOW:
                    </span>
                    <p className="text-xs font-mono font-semibold text-dark/90 leading-tight">
                      {ind.flow}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-dark/15 flex items-center justify-between">
                  <span className="text-xs font-bold text-dark/70 font-hand text-sm">
                    {ind.benefit}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-awara-orange group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom micro notice */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-dark/60 uppercase tracking-wider">
            *Industry specific custom automation architecture engineered on request.
          </p>
        </div>

      </div>
    </section>
  );
}
