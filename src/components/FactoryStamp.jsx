import React, { useEffect, useState } from 'react';

export default function FactoryStamp({ stampText, onClear }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (stampText) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClear) onClear();
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [stampText, onClear]);

  if (!visible || !stampText) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      <div className="transform -rotate-12 scale-110 sm:scale-125 animate-in zoom-in-50 duration-150">
        <div className="border-6 border-awara-orange text-awara-orange px-8 py-4 rounded-lg bg-paper/90 backdrop-blur-xs shadow-brutal-xl font-display font-black text-3xl sm:text-5xl uppercase tracking-widest text-center">
          <div>{stampText}</div>
          <div className="text-xs sm:text-sm font-mono tracking-normal text-dark mt-1 font-bold">
            ★ AWARA FACTORY CERTIFIED ★
          </div>
        </div>
      </div>
    </div>
  );
}
