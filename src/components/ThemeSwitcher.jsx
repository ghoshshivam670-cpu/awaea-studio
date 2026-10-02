import React from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher({ compact = false }) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const options = [
    { id: 'light', label: 'Light', icon: Sun },
    { id: 'dark', label: 'Dark', icon: Moon },
    { id: 'system', label: 'System', icon: Laptop },
  ];

  return (
    <div
      role="group"
      aria-label="Theme Switcher"
      className="inline-flex items-center p-1 bg-white/80 dark:bg-[#181B1F]/90 backdrop-blur-md border border-dark/20 dark:border-white/20 rounded-full shadow-sm"
    >
      {options.map((opt) => {
        const Icon = opt.icon;
        const isActive = theme === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setTheme(opt.id)}
            title={`Switch to ${opt.label} Theme`}
            aria-label={`${opt.label} Theme`}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold transition-all duration-200 ${
              isActive
                ? 'bg-awara-orange text-white shadow-sm scale-105'
                : 'text-dark/70 dark:text-gray-300 hover:text-awara-orange dark:hover:text-awara-orange'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {!compact && <span className="hidden sm:inline">{opt.label}</span>}
          </button>
        );
      })}
    </div>
  );
}
