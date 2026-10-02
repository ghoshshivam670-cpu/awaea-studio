import React from 'react';
import { Flame, Briefcase } from 'lucide-react';
import { useVibe } from '../context/VibeContext';

export default function VibeSwitcher({ compact = false }) {
  const { vibe, setVibe } = useVibe();

  return (
    <div
      role="group"
      aria-label="Vibe selector"
      className="inline-flex items-center p-1 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-2 border-dark rounded-full shadow-brutal text-xs font-mono font-bold select-none"
    >
      <button
        type="button"
        onClick={() => setVibe('casual')}
        aria-pressed={vibe === 'casual'}
        className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
          vibe === 'casual'
            ? 'bg-awara-orange text-white shadow-sm scale-105'
            : 'text-dark/70 hover:text-dark'
        }`}
      >
        <Flame className="w-3.5 h-3.5" />
        <span className={compact ? 'hidden sm:inline' : ''}>Casual 🔥</span>
      </button>

      <button
        type="button"
        onClick={() => setVibe('professional')}
        aria-pressed={vibe === 'professional'}
        className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
          vibe === 'professional'
            ? 'bg-dark text-white shadow-sm scale-105'
            : 'text-dark/70 hover:text-dark'
        }`}
      >
        <Briefcase className="w-3.5 h-3.5" />
        <span className={compact ? 'hidden sm:inline' : ''}>Professional 💼</span>
      </button>
    </div>
  );
}
