import React from 'react';
import { ShieldCheck, ArrowRight, Info, Wrench } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Support({ onOpenContact }) {
  return (
    <section className="py-20 sm:py-24 bg-paper-dark/30 border-t-3 border-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border-2 border-dark rounded-full shadow-brutal text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-awara-green" />
            <span>MONTHLY RETENTION & CARE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-dark font-display leading-[0.95] mb-4">
            SYSTEM BAN GAYA. <br />
            <span className="text-awara-orange underline decoration-dark decoration-4">AB SAMBHALENGE BHI.</span>
          </h2>
          <p className="text-base sm:text-lg text-dark/70 font-medium">
            Deploy hone ke baad bhi 24/7 security, updates aur pipeline maintenance hum handle karte hain.
          </p>
        </div>

        {/* 3 Monthly Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {siteData.monthlySupport.map((sup, idx) => (
            <div
              key={sup.title}
              className="bg-white border-3 border-dark rounded-md p-6 sm:p-7 shadow-brutal flex flex-col justify-between hover:shadow-brutal-lg transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs font-bold text-dark/40 uppercase">
                    OPTION 0{idx + 1}
                  </span>
                  <Wrench className="w-4 h-4 text-awara-orange" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-dark font-display mb-2">
                  {sup.title}
                </h3>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-dark font-display">
                    {sup.price}
                  </span>
                  <span className="text-xs font-mono text-dark/60 font-bold">
                    {sup.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-dark/70 font-medium leading-relaxed mb-6">
                  {sup.desc}
                </p>
              </div>

              <button
                onClick={() => onOpenContact(sup.title)}
                className="w-full py-3 bg-paper-light hover:bg-dark hover:text-white text-dark font-bold text-xs uppercase font-mono tracking-wider border-2 border-dark rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>CHOOSE {sup.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Mandatory Transparency Note */}
        <div className="bg-white border-2 border-dark/40 rounded-md p-5 flex items-start gap-3.5 shadow-sm max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-awara-orange shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-dark/80 font-medium leading-relaxed">
            <strong>Important Note on Infrastructure:</strong> Third-party charges such as API usage, WhatsApp Meta platform charges, AI model tokens, domain hosting, and email providers are billed separately where applicable directly to your accounts. Zero hidden markups.
          </p>
        </div>

      </div>
    </section>
  );
}
