import React, { useState } from 'react';
import { Radio, RefreshCw, Sparkles, Check } from 'lucide-react';

export default function AwaraTransmission() {
  const transmissions = [
    { text: "Customer ne message kiya.", sub: "System ne 0.5s mein reply kar diya." },
    { text: "Lead save ho gaya.", sub: "Google Sheet aur CRM dono sync ho gaye." },
    { text: "Follow-up bhi chala gaya.", sub: "Bina ek bhi manual email draft kiye." },
    { text: "Founder chai pee raha hai. ☕", sub: "Operations autopilot pe chal rahe hain." },
    { text: "Raat ke 3 baje booking conform hui.", sub: "AI agent ne payment link bhej diya." },
    { text: "4 ghante ka Excel copy-paste 2s mein khatam.", sub: "n8n workflow deployed." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false);

  const nextTransmission = () => {
    setClicked(true);
    setCurrentIndex((prev) => (prev + 1) % transmissions.length);
  };

  const current = transmissions[currentIndex];

  return (
    <div
      onClick={nextTransmission}
      className="bg-dark text-paper border-2 border-white/20 hover:border-awara-orange p-3.5 sm:p-4 rounded-md shadow-brutal-white transition-all cursor-pointer select-none group font-mono text-xs"
      title="Click for next Awara Transmission"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
        <div className="flex items-center gap-2 text-awara-orange font-bold">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>&gt; AWARA TRANSMISSION // 00{currentIndex + 1}</span>
        </div>
        <span className="text-[10px] text-paper/40 group-hover:text-awara-orange transition-colors flex items-center gap-1">
          <span>TAP TO INTERCEPT</span>
          <RefreshCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
        </span>
      </div>

      <div className="space-y-1">
        <p className="text-sm font-bold text-yellow-300">
          "{current.text}"
        </p>
        <p className="text-[11px] text-paper/70">
          {current.sub}
        </p>
      </div>

      <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-awara-green font-bold">
        <span>STATUS: DISPATCHED</span>
        <span className="text-white/80 font-hand text-xs">"THIS IS THE POINT." ⚡</span>
      </div>
    </div>
  );
}
