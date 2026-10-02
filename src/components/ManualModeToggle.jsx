import React, { useState } from 'react';
import { ToggleLeft, ToggleRight, Sparkles, AlertOctagon, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ManualModeToggle({ onTriggerStamp }) {
  const [isManual, setIsManual] = useState(false);

  const toggle = () => {
    const nextState = !isManual;
    setIsManual(nextState);
    if (!nextState && onTriggerStamp) {
      onTriggerStamp('AWARA\'D');
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FF4D00', '#111111', '#1F8F5F']
      });
    }
  };

  const manualPills = [
    { title: 'Customer Chat', desc: 'Reply khud karo raat ko bhi 😫', tag: 'SLOW' },
    { title: 'Lead Recording', desc: 'Lead khud save karo paper pe 📝', tag: 'DANGER' },
    { title: 'Follow-ups', desc: 'Follow-up yaad rakho dimaag mein 🧠', tag: 'MISSED' },
    { title: 'Data Management', desc: 'Excel khol lo bhai... again 📊', tag: 'TORTURE' },
  ];

  const automatedPills = [
    { title: 'Customer Chat', desc: 'AI REPLYING IN 3 SECONDS ⚡', tag: 'INSTANT' },
    { title: 'Lead Recording', desc: 'LEADS CAPTURED & SYNCED ✅', tag: 'AUTOPILOT' },
    { title: 'Follow-ups', desc: 'FOLLOW-UP AUTOMATED DRIP 🔥', tag: 'ZERO EFFORT' },
    { title: 'Data Management', desc: 'EXCEL: PERMANENTLY RETIRED 🌴', tag: 'PEACE' },
  ];

  const currentPills = isManual ? manualPills : automatedPills;

  return (
    <div className={`p-6 rounded-md border-3 border-dark transition-all duration-300 ${
      isManual ? 'bg-red-50 shadow-brutal' : 'bg-white shadow-brutal-orange'
    }`}>
      {/* Header & Switch */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-dark/15 pb-4 mb-5">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-dark/60 block">
            INTERACTIVE SIMULATION SWITCH
          </span>
          <h4 className="text-xl font-black uppercase text-dark font-display flex items-center gap-2">
            <span>OPERATING MODE:</span>
            <span className={isManual ? 'text-red-600' : 'text-awara-orange'}>
              {isManual ? 'MANUAL MODE (PAIN)' : 'AWARA MODE (AUTOPILOT)'}
            </span>
          </h4>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggle}
          className={`px-4 py-2 rounded-full font-mono text-xs font-black uppercase tracking-wider border-2 border-dark flex items-center gap-2 transition-all cursor-pointer shadow-sm ${
            isManual
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-dark text-white hover:bg-awara-orange'
          }`}
        >
          <span>MANUAL MODE:</span>
          <span className="underline font-bold">[{isManual ? 'ON' : 'OFF'}]</span>
          {isManual ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5 text-awara-green" />}
        </button>
      </div>

      {/* Dynamic 4 Pills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {currentPills.map((pill, idx) => (
          <div
            key={idx}
            className={`p-3.5 rounded border-2 border-dark transition-all ${
              isManual
                ? 'bg-white text-dark/90 border-red-300'
                : 'bg-paper-light text-dark shadow-sm'
            }`}
          >
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[11px] font-mono font-bold text-dark/50 uppercase">
                {pill.title}
              </span>
              <span className={`text-[10px] font-mono font-black px-1.5 py-0.2 rounded border ${
                isManual ? 'bg-red-100 text-red-700 border-red-300' : 'bg-green-100 text-awara-green border-green-300'
              }`}>
                {pill.tag}
              </span>
            </div>
            <p className="text-xs font-extrabold uppercase font-display leading-snug">
              {pill.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Micro message below */}
      <div className="mt-4 pt-3 border-t border-dark/10 flex items-center justify-between text-xs font-mono text-dark/60">
        <span>Click the switch to see what happens when you turn manual work OFF.</span>
        <span className="font-hand text-sm text-awara-orange font-bold hidden sm:inline">
          *No more manual tears.
        </span>
      </div>
    </div>
  );
}
