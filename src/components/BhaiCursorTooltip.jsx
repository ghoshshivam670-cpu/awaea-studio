import React, { useState, useEffect } from 'react';
import { useVibe } from '../context/VibeContext';

export default function BhaiCursorTooltip() {
  const { isProfessional } = useVibe();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [tipText, setTipText] = useState(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if target or parent has data-bhai-tip
      const target = e.target.closest('[data-bhai-tip]');
      if (target) {
        setTipText(target.getAttribute('data-bhai-tip'));
      } else {
        setTipText(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouch || !tipText || isProfessional) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-150"
      style={{
        left: `${pos.x + 14}px`,
        top: `${pos.y + 14}px`,
      }}
    >
      <div className="bg-dark text-white px-2.5 py-1 rounded border border-white/40 shadow-brutal font-hand text-xs sm:text-sm font-bold tracking-wide transform rotate-2 animate-in fade-in zoom-in-75 duration-100">
        <span>{tipText}</span>
      </div>
    </div>
  );
}
