import React, { useState } from 'react';
import { Terminal, Cpu, Zap, CheckCircle2, Play, RefreshCw, AlertTriangle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ControlRoom({ onTriggerStamp }) {
  const [status, setStatus] = useState('IDLE'); // IDLE, BOOTING, SCANNING, DETECTING, READY, RUNNING
  const [logMessage, setLogMessage] = useState('FACTORY READY FOR DISPATCH.');
  const [jugaadLevel, setJugaadLevel] = useState(47);

  const startFactory = () => {
    if (status !== 'IDLE' && status !== 'RUNNING') return;
    
    setStatus('BOOTING');
    setLogMessage('BOOTING FACTORY CORE...');
    
    setTimeout(() => {
      setStatus('SCANNING');
      setLogMessage('SCANNING BUSINESS PIPELINES...');
    }, 900);

    setTimeout(() => {
      setStatus('DETECTING');
      setLogMessage('FINDING BORING WORK & EXCEL TRAPS...');
      setJugaadLevel(89);
    }, 1800);

    setTimeout(() => {
      setStatus('READY');
      setLogMessage('AUTOMATION ENGINE READY ⚡');
      setJugaadLevel(100);
    }, 2700);

    setTimeout(() => {
      setStatus('RUNNING');
      setLogMessage('THE FACTORY IS ON. 🚀 (ALL BORING WORK BLOCKED)');
      if (onTriggerStamp) {
        onTriggerStamp('FACTORY APPROVED');
      }
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#FF4D00', '#111111', '#1F8F5F']
      });
    }, 3600);
  };

  const resetFactory = () => {
    setStatus('IDLE');
    setLogMessage('FACTORY RESET TO STANDBY.');
    setJugaadLevel(47);
  };

  return (
    <div className="bg-white border-3 border-dark rounded-md p-5 sm:p-6 shadow-brutal font-mono text-xs sm:text-sm relative overflow-hidden group">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b-2 border-dark/20 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-awara-orange" />
          <span className="font-bold text-dark tracking-wider uppercase text-xs">
            AWARA FACTORY // CONTROL ROOM
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-bold">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              status === 'RUNNING'
                ? 'bg-awara-green animate-ping'
                : status === 'IDLE'
                ? 'bg-awara-orange'
                : 'bg-yellow-400 animate-pulse'
            }`}
          ></span>
          <span className={status === 'RUNNING' ? 'text-awara-green' : 'text-dark'}>
            {status === 'RUNNING' ? 'ONLINE' : status === 'IDLE' ? 'STANDBY' : 'PROCESSING'}
          </span>
        </div>
      </div>

      {/* Control Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
        <div className="bg-paper p-2.5 rounded border border-dark/30">
          <span className="text-[10px] text-dark/60 block uppercase font-bold">FACTORY</span>
          <span className="text-dark font-extrabold flex items-center gap-1 mt-0.5">
            <span className="w-2 h-2 rounded-full bg-awara-green"></span>
            {status === 'RUNNING' ? 'ACTIVE ⚡' : 'ONLINE'}
          </span>
        </div>

        <div className="bg-paper p-2.5 rounded border border-dark/30">
          <span className="text-[10px] text-dark/60 block uppercase font-bold">BORING WORK</span>
          <span className="text-red-600 font-extrabold flex items-center gap-1 mt-0.5">
            {status === 'RUNNING' ? 'BLOCKED 🚫' : 'DETECTED 👀'}
          </span>
        </div>

        <div className="bg-paper p-2.5 rounded border border-dark/30">
          <span className="text-[10px] text-dark/60 block uppercase font-bold">JUGAAD POWER</span>
          <span className="text-awara-orange font-extrabold mt-0.5 block">
            {jugaadLevel}%
          </span>
        </div>

        <div className="bg-paper p-2.5 rounded border border-dark/30">
          <span className="text-[10px] text-dark/60 block uppercase font-bold">AUTOMATION</span>
          <span className="text-dark font-extrabold mt-0.5 block">
            {status === 'RUNNING' ? '100% LIVE' : 'READY'}
          </span>
        </div>
      </div>

      {/* Live System Log Screen */}
      <div className="bg-dark text-paper p-3 rounded border border-dark mb-4 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="text-awara-orange font-bold">&gt;</span>
          <span className="truncate text-green-400 font-medium">{logMessage}</span>
        </div>
        {status !== 'IDLE' && status !== 'RUNNING' && (
          <RefreshCw className="w-3.5 h-3.5 text-awara-orange animate-spin shrink-0 ml-2" />
        )}
      </div>

      {/* Control Action Buttons */}
      <div className="flex items-center gap-3">
        {status !== 'RUNNING' ? (
          <button
            onClick={startFactory}
            disabled={status !== 'IDLE'}
            className="flex-1 py-3 bg-awara-orange hover:bg-awara-orange-light disabled:opacity-50 text-white font-black font-display text-xs uppercase tracking-wider border-2 border-dark rounded shadow-brutal active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>[ START FACTORY ]</span>
          </button>
        ) : (
          <div className="flex-1 flex gap-2">
            <div className="flex-1 py-3 bg-green-100 text-awara-green border-2 border-dark rounded font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>THE FACTORY IS ON</span>
            </div>
            <button
              onClick={resetFactory}
              className="px-3 py-3 bg-paper hover:bg-dark hover:text-white border-2 border-dark rounded text-xs font-mono font-bold transition-colors"
              title="Reset Panel"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Micro notice */}
      <div className="text-[10px] text-dark/40 font-mono text-center mt-2.5">
        *Purely interactive simulation panel. No actual business servers harmed.
      </div>
    </div>
  );
}
