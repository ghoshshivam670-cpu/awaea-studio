import React, { useState } from 'react';
import { HelpCircle, X, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BholuButton({ onOpenAwaraAi }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAskBholu = () => {
    setIsOpen(false);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FF4D00', '#111111', '#FFD700']
    });
    if (onOpenAwaraAi) {
      onOpenAwaraAi('Bhai, ye kaam automate ho sakta hai kya?');
    }
  };

  return (
    <>
      {/* The Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-yellow-300 hover:bg-yellow-400 text-dark font-mono text-xs font-bold uppercase tracking-wider border-2 border-dark rounded shadow-brutal hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer group"
        title="Unexpected Bholu Button"
      >
        <span className="text-sm">🙋‍♂️</span>
        <span>BHOLU KO PUCHHO</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Bholu Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-paper border-4 border-dark rounded-lg p-6 max-w-sm w-full shadow-brutal-xl relative animate-in zoom-in-95 duration-150">
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1.5 bg-white hover:bg-dark hover:text-white border-2 border-dark rounded text-xs transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 text-awara-orange text-xs font-mono font-bold uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EASTER EGG // CHARACTER 001</span>
            </div>

            <h3 className="text-3xl font-black uppercase text-dark font-display mb-3">
              BHOLU KAUN? 🧐
            </h3>

            {/* Description */}
            <div className="bg-white border-2 border-dark rounded p-4 mb-5 shadow-sm space-y-2">
              <p className="text-xs text-dark/70 font-medium">
                Jo har Indian business mein ek hi sawaal poochta hai:
              </p>
              <div className="p-2.5 bg-paper-light border-l-3 border-awara-orange rounded font-bold text-dark text-sm sm:text-base font-display">
                "Bhai, ye kaam automate ho sakta hai kya?"
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleAskBholu}
              className="w-full py-3 bg-awara-orange hover:bg-awara-orange-light text-white font-black text-sm uppercase tracking-wider font-display border-2 border-dark rounded shadow-brutal flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <span>PUCHH KE DEKH →</span>
              <MessageSquare className="w-4 h-4" />
            </button>

            <div className="text-center mt-3">
              <span className="text-[10px] font-mono text-dark/50">
                (Opens Awara Ai with Bholu's prompt)
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
