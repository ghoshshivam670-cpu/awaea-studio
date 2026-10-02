import React from 'react';
import { Check, ArrowRight, Sparkles, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteData } from '../data/siteData';

export default function Pricing({ onOpenContact, onOpenAreYouSure }) {
  const handleSelectTier = (tier) => {
    if (onOpenAreYouSure && tier.tier === 'AUTOMATE') {
      onOpenAreYouSure(() => onOpenContact(tier.tier + ' Plan'));
    } else {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FF4D00', '#111111', '#1F8F5F']
      });
      onOpenContact(tier.tier + ' Plan');
    }
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border-2 border-dark rounded-full shadow-brutal text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Zap className="w-3.5 h-3.5 text-awara-orange" />
            <span>TRANSPARENT & NO BS PRICING</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-dark font-display leading-[0.95] mb-4">
            KITNA AWARA <br />
            <span className="text-awara-orange underline decoration-dark decoration-4">KARNA HAI?</span>
          </h2>
          <p className="text-base sm:text-xl text-dark/70 font-medium">
            Seedha hisaab. Zero hidden fees. Jo bola hai wahi deliver hoga on time.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {siteData.pricing.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.tier}
                className={`bg-white border-3 border-dark rounded-md p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'shadow-brutal-orange-lg lg:-translate-y-4 border-awara-orange ring-2 ring-awara-orange/20 bg-paper-light'
                    : 'shadow-brutal hover:shadow-brutal-lg'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-awara-orange text-white text-xs font-mono font-black uppercase tracking-widest px-4 py-1.5 rounded-full border-2 border-dark shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Top Tier Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="font-mono text-xs font-bold text-dark/50 uppercase tracking-widest block">
                        PLAN
                      </span>
                      <h3 className="text-3xl font-black uppercase tracking-tight text-dark font-display">
                        {plan.tier}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold bg-dark text-white px-2.5 py-1 rounded">
                      {plan.period}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="text-4xl sm:text-5xl font-black text-dark tracking-tight font-display">
                      {plan.price}
                    </div>
                    <p className="font-hand text-base sm:text-lg text-awara-orange font-bold mt-1">
                      "{plan.punchline}"
                    </p>
                  </div>

                  {/* Features Divider */}
                  <div className="w-full h-0.5 bg-dark/15 my-6"></div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-dark/85">
                        <div className="p-0.5 rounded bg-dark text-white shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA and footnote */}
                <div>
                  <button
                    onClick={() => handleSelectTier(plan)}
                    data-bhai-tip={isPopular ? "ye wala best hai 🚀" : "ye wala important hai ✨"}
                    className={`w-full py-4 text-base font-black tracking-wider uppercase font-display border-2 border-dark rounded-sm shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2 group cursor-pointer ${
                      isPopular
                        ? 'bg-awara-orange text-white hover:bg-awara-orange-light'
                        : 'bg-white text-dark hover:bg-dark hover:text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {plan.footnote && (
                    <p className="text-[11px] font-mono text-dark/50 text-center mt-3">
                      *{plan.footnote}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-14 text-center max-w-xl mx-auto">
          <p className="text-xs sm:text-sm font-mono text-dark/70 bg-white border border-dark/30 p-3 rounded shadow-sm">
            💡 <strong>Pro Tip:</strong> Agar samajh nahi aa raha kaunsa plan sahi hai, "Bhai, Baat Karein" pe click karo. Free mein scope outline kar denge.
          </p>
        </div>

      </div>
    </section>
  );
}
