import React from 'react';
import { XCircle, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import AwaraTransmission from './AwaraTransmission';
import { useVibe } from '../context/VibeContext';

export default function WhyAwara({ onOpenContact }) {
  const { content, isProfessional } = useVibe();

  const normalSteps = isProfessional
    ? [
        { text: 'Builds Isolated Website', sub: 'Templates copied with zero data pipelines or CRM connectivity' },
        { text: 'Invoices & Disappears', sub: 'Takes full payment with no ongoing performance SLAs or workflow maintenance' },
        { text: 'Zero System Integration', sub: 'Client left managing follow-ups, spreadsheets and leads manually' },
      ]
    : [
        { text: 'Website bana di.', sub: 'WordPress template download kiya, copy-paste maar diya' },
        { text: 'Payment le liya.', sub: 'Final invoice bhej ke 100% advance le liya' },
        { text: 'Bye. 👋', sub: 'Uske baad phone uthana band, zero system integration' },
      ];

  const awaraSteps = [
    { text: 'High-Converting Website', badge: 'Lightning React UI' },
    { text: 'AI Chatbot Agent', badge: 'Trained on your business' },
    { text: 'WhatsApp Cloud API', badge: 'Instant Lead Alerts & Broadcast' },
    { text: 'n8n Automation Workflows', badge: 'Sync Google Sheets & CRM' },
    { text: 'Automated Email Drips', badge: 'Zero manual follow-ups' },
    { text: 'Complete Digital System', badge: 'Full Business Autopilot' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-paper text-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-dark text-awara-orange border-2 border-dark rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{content.whyAwara.badge}</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-dark font-display leading-[0.95] mb-4">
            {content.whyAwara.heading1} <br />
            <span className="text-awara-orange underline decoration-dark decoration-4">{content.whyAwara.heading2}</span>
          </h2>
          <p className="text-base sm:text-xl text-dark/60 font-medium">
            {content.whyAwara.sub}
          </p>
        </div>

        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto mb-12">
          
          {/* Left: Normal Agency */}
          <div className="lg:col-span-5 bg-dark text-paper border-3 border-dark rounded-lg p-6 sm:p-8 shadow-brutal flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
                <span className="font-mono text-xs uppercase font-bold text-red-400">
                  {content.whyAwara.leftBadge}
                </span>
                <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded font-mono">
                  {isProfessional ? 'DISCONNECTED' : 'MANUAL'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase text-paper font-display mb-6">
                {content.whyAwara.leftTitle}
              </h3>

              <div className="space-y-6">
                {normalSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                    <div>
                      <div className="text-lg sm:text-xl font-black text-paper uppercase line-through text-paper/70">
                        "{step.text}"
                      </div>
                      <p className="text-xs text-paper/40 font-mono mt-0.5">
                        {step.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center font-mono text-xs text-red-400">
              {content.whyAwara.leftFooter}
            </div>
          </div>

          {/* Right: Awara Factory */}
          <div className="lg:col-span-7 bg-paper-light text-dark border-3 border-dark rounded-lg p-6 sm:p-8 shadow-brutal-orange-lg flex flex-col justify-between relative">
            <div className="absolute -top-3.5 right-6 bg-awara-orange text-white text-[11px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-dark">
              {content.whyAwara.rightBadge}
            </div>

            <div>
              <div className="flex items-center justify-between border-b-2 border-dark/15 pb-4 mb-6">
                <span className="font-mono text-xs uppercase font-bold text-awara-orange">
                  {isProfessional ? 'INTEGRATED PLATFORM' : 'THE CONNECTED SYSTEM'}
                </span>
                <span className="text-xs bg-awara-green text-white px-2 py-0.5 rounded font-mono font-bold">
                  {isProfessional ? 'ENTERPRISE' : 'AUTOPILOT'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase text-dark font-display mb-6">
                {content.whyAwara.rightTitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {awaraSteps.map((step, i) => (
                  <div key={i} className="p-3 bg-white border-2 border-dark rounded flex flex-col justify-between">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-awara-green shrink-0" />
                      <span className="font-black text-xs sm:text-sm uppercase text-dark">
                        {step.text}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-dark/60 font-bold">
                      {step.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t-2 border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-bold text-xs sm:text-sm text-dark">
                "{content.whyAwara.rightSub}"
              </p>
              <button
                onClick={() => onOpenContact('Awara vs Normal Agency')}
                data-bhai-tip="chal factory chala ⚡"
                className="w-full sm:w-auto px-5 py-2.5 bg-dark hover:bg-awara-orange text-white text-xs font-mono font-bold uppercase tracking-wider rounded border border-dark transition-colors shrink-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{content.whyAwara.rightCta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Easter Egg: Live Awara Transmission Terminal */}
        <div className="max-w-xl mx-auto">
          <AwaraTransmission />
        </div>

      </div>
    </section>
  );
}
