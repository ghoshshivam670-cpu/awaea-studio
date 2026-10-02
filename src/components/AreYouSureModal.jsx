import React, { useState } from 'react';
import { HelpCircle, X, Check, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AreYouSureModal({ isOpen, onClose, onProceed }) {
  const [outcome, setOutcome] = useState(null); // null, 'manual', 'yes'

  if (!isOpen) return null;

  const handleManual = () => {
    setOutcome('manual');
  };

  const handleYes = () => {
    setOutcome('yes');
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF4D00', '#111111', '#1F8F5F']
    });
    setTimeout(() => {
      onProceed();
      onClose();
      setOutcome(null);
    }, 1200);
  };

  const handleClose = () => {
    setOutcome(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-paper border-4 border-dark rounded-lg p-6 max-w-sm w-full shadow-brutal-xl relative animate-in zoom-in-95 duration-150 text-center">
        
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1.5 bg-white hover:bg-dark hover:text-white border-2 border-dark rounded text-xs transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {!outcome ? (
          <div>
            <div className="w-12 h-12 bg-yellow-300 border-2 border-dark rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm text-xl font-bold">
              🤔
            </div>

            <h3 className="text-3xl font-black uppercase text-dark font-display mb-2">
              ARE YOU SURE?
            </h3>
            <p className="text-xs sm:text-sm text-dark/70 font-medium mb-6">
              Sach mein business automate karna hai ya Excel mein hi zindagi bitani hai?
            </p>

            <div className="space-y-2.5">
              <button
                onClick={handleYes}
                className="w-full py-3.5 bg-awara-orange hover:bg-awara-orange-light text-white font-black text-sm uppercase tracking-wider font-display border-2 border-dark rounded shadow-brutal flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <span>YES, BHAI (AUTOMATE KARO) →</span>
              </button>

              <button
                onClick={handleManual}
                className="w-full py-2.5 bg-white hover:bg-gray-100 text-dark/80 font-bold text-xs uppercase font-mono border-2 border-dark rounded transition-all"
              >
                NAH, MAIN MANUAL HI KARUNGA
              </button>
            </div>
          </div>
        ) : outcome === 'manual' ? (
          <div className="py-4 space-y-4">
            <div className="text-4xl">💀</div>
            <h4 className="text-2xl font-black uppercase text-dark font-display">
              RESPECT. 💀
            </h4>
            <div className="p-3 bg-white border-2 border-dark rounded text-sm font-bold text-dark/90 font-mono">
              "See you in 47 Excel sheets."
            </div>
            <p className="text-xs text-dark/60">
              Jab ungliyan thak jayein, tab wapas aa jana.
            </p>
            <button
              onClick={() => setOutcome(null)}
              className="px-5 py-2 bg-dark text-white font-mono text-xs uppercase font-bold rounded border border-dark hover:bg-awara-orange transition-colors"
            >
              Okay, I Changed My Mind 🔄
            </button>
          </div>
        ) : (
          <div className="py-4 space-y-4">
            <div className="text-4xl">🚀</div>
            <h4 className="text-2xl font-black uppercase text-dark font-display">
              GOOD DECISION. ⚡
            </h4>
            <p className="text-xs font-mono text-awara-orange font-bold">
              Opening Factory Dispatch Blueprint...
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
