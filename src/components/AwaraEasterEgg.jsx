import React, { useState, useEffect } from 'react';
import { X, Sparkles, Terminal, ArrowRight, Zap, Flame, ShieldAlert } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AwaraEasterEgg({ onOpenBot, onOpenContact, onTriggerStamp }) {
  const [isOpen, setIsOpen] = useState(false);
  const [easterText, setEasterText] = useState(null);

  useEffect(() => {
    let keyBuffer = '';
    const secretCode = 'awara';

    const handleKeyDown = (e) => {
      // Ignore typing inside input or textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      keyBuffer += e.key.toLowerCase();
      if (keyBuffer.length > 10) {
        keyBuffer = keyBuffer.slice(-10);
      }

      if (keyBuffer.includes(secretCode)) {
        keyBuffer = '';
        setIsOpen(true);
        if (onTriggerStamp) onTriggerStamp('AWARA UNLOCKED');
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#FF4D00', '#111111', '#1F8F5F', '#FFD700']
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onTriggerStamp]);

  if (!isOpen) return null;

  const handleBuild = () => {
    setEasterText('Redirecting to website factory blueprint...');
    setTimeout(() => {
      setIsOpen(false);
      setEasterText(null);
      if (onOpenContact) onOpenContact('Easter Egg — Build Something');
    }, 1000);
  };

  const handleAutomate = () => {
    setEasterText('Opening Awara Ai automation engine...');
    setTimeout(() => {
      setIsOpen(false);
      setEasterText(null);
      if (onOpenBot) onOpenBot('Bhai, maine secret AWARA code unlock kiya hai. Let\'s automate!');
    }, 1000);
  };

  const handleBreak = () => {
    setEasterText('⚠️ Arre bhai kuch mat todo! Abhi abhi naya deploy kiya hai! 😂');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-dark text-paper border-4 border-awara-orange rounded-xl p-6 sm:p-8 max-w-lg w-full shadow-brutal-orange-lg relative font-mono text-center">
        
        {/* Close */}
        <button
          onClick={() => {
            setIsOpen(false);
            setEasterText(null);
          }}
          className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-awara-orange text-white rounded border border-white/20 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-awara-orange text-white rounded-full text-xs font-bold uppercase mb-4 shadow-sm">
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>SECRET KONAMI UNLOCKED</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-black uppercase text-white font-display mb-2">
          AWARA MODE UNLOCKED. 🔥
        </h3>

        {/* Progress Bar */}
        <div className="my-4 bg-white/10 p-3 rounded border border-white/20">
          <div className="flex justify-between text-xs text-yellow-300 font-bold mb-1">
            <span>AWARA MODE CAPACITY</span>
            <span>100%</span>
          </div>
          <div className="w-full bg-white/20 h-3 rounded overflow-hidden">
            <div className="bg-awara-orange h-full w-full animate-pulse"></div>
          </div>
        </div>

        <p className="text-sm sm:text-base font-bold text-paper/90 mb-6">
          "Ab kya karein bhai?"
        </p>

        {/* 3 Choices */}
        {!easterText ? (
          <div className="space-y-3">
            <button
              onClick={handleBuild}
              className="w-full py-3 bg-white hover:bg-yellow-300 text-dark font-black text-xs sm:text-sm uppercase tracking-wider font-display rounded border-2 border-dark transition-colors flex items-center justify-center gap-2"
            >
              <span>[ BUILD SOMETHING 🌐 ]</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleAutomate}
              className="w-full py-3 bg-awara-orange hover:bg-awara-orange-light text-white font-black text-xs sm:text-sm uppercase tracking-wider font-display rounded border-2 border-dark transition-colors flex items-center justify-center gap-2"
            >
              <span>[ AUTOMATE SOMETHING 🤖 ]</span>
              <Zap className="w-4 h-4" />
            </button>

            <button
              onClick={handleBreak}
              className="w-full py-2.5 bg-white/5 hover:bg-red-500 hover:text-white text-paper/70 font-bold text-xs uppercase tracking-wider rounded border border-white/20 transition-colors"
            >
              [ BREAK SOMETHING 💥 ]
            </button>
          </div>
        ) : (
          <div className="p-4 bg-white/10 rounded border border-white/20 text-yellow-300 text-sm font-bold animate-in fade-in">
            {easterText}
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-white/15 text-[11px] text-paper/50">
          Tip: You typed "AWARA" on keyboard. You are officially certified.
        </div>

      </div>
    </div>
  );
}
