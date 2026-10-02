import React, { useState, useEffect } from 'react';
import { ArrowRight, Flame, Briefcase, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useVibe } from '../context/VibeContext';

export default function GardaIntro({ onComplete }) {
  const { setVibe } = useVibe();
  const [stage, setStage] = useState(0); // 0: "AB GARDA UDEGA", 1: "AWARA FACTORY", 2: "BUILD. AUTOMATE.", 3: Vibe Choice, 4: Exit
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if already played in this browser session
    const hasPlayed = sessionStorage.getItem('awara_garda_intro_played');
    if (hasPlayed) {
      setVisible(false);
      if (onComplete) onComplete();
      return;
    }

    // Stage 0 -> 1: 1000ms ("AWARA FACTORY")
    const t1 = setTimeout(() => {
      setStage(1);
    }, 1000);

    // Stage 1 -> 2: 2000ms ("BUILD. AUTOMATE. GO AWARA.")
    const t2 = setTimeout(() => {
      setStage(2);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FF4D00', '#111111', '#FFFFFF', '#FFD700']
      });
    }, 2000);

    // Stage 2 -> 3: 3100ms (TRANSITION TO VIBE CHOICE SCREEN)
    const t3 = setTimeout(() => {
      setStage(3);
    }, 3100);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        // Jump directly into the website
        selectVibeAndFinish('casual');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Safety fallback: if user stays on screen for 10s, auto-enter site
    const autoEnter = setTimeout(() => {
      selectVibeAndFinish('casual');
    }, 10000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(autoEnter);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const selectVibeAndFinish = (selectedVibe = 'casual') => {
    setVibe(selectedVibe);
    sessionStorage.setItem('awara_garda_intro_played', 'true');

    try {
      confetti({
        particleCount: selectedVibe === 'casual' ? 90 : 50,
        spread: 70,
        origin: { y: 0.5 },
        colors: selectedVibe === 'casual' ? ['#FF4D00', '#FFD700', '#111111'] : ['#1F8F5F', '#3B82F6', '#111111']
      });
    } catch (e) {
      // quiet fail
    }

    setStage(4);
    setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-dark text-paper flex flex-col items-center justify-center p-4 sm:p-6 select-none overflow-hidden transition-all duration-500 ${
        stage === 4 ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background Grid & Scanlines */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>
      
      {/* Ambient Radial Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-awara-orange/15 blur-3xl pointer-events-none animate-pulse-slow"></div>

      {/* Direct Skip button available at all times */}
      <button
        onClick={() => selectVibeAndFinish('casual')}
        className="absolute top-5 right-5 sm:top-6 sm:right-6 px-3.5 py-1.5 bg-awara-orange text-white hover:bg-awara-orange-light border-2 border-dark rounded font-mono text-xs uppercase tracking-widest transition-all shadow-brutal flex items-center gap-1.5 cursor-pointer z-30 active:translate-y-1"
        title="Direct Website Pe Jao"
      >
        <span>SKIP TO WEBSITE →</span>
      </button>

      {/* ════════════ STAGES 0, 1, 2: ANIMATION SEQUENCE ════════════ */}
      {stage < 3 && (
        <>
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/20 rounded-full font-mono text-xs text-yellow-300 font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-awara-orange animate-ping"></span>
            <span>AWARA_TRANSMISSION // INITIALIZING</span>
          </div>

          <div className="max-w-4xl w-full text-center min-h-[220px] flex items-center justify-center">
            {/* Phase 0: "AB GARDA UDEGA BHAIYA." */}
            {stage === 0 && (
              <div className="animate-in zoom-in-90 fade-in duration-300">
                <div className="inline-block p-1 bg-yellow-300 text-dark font-mono text-xs font-black uppercase px-3 py-1 rounded border border-dark mb-4 shadow-sm">
                  ⚡ PHASE 01 // IMPACT
                </div>
                <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white font-display leading-none drop-shadow-lg">
                  "AB GARDA <br />
                  <span className="text-awara-orange underline decoration-yellow-300 decoration-4 sm:decoration-8">
                    UDEGA BHAIYA."
                  </span>
                </h1>
              </div>
            )}

            {/* Phase 1: "AWARA FACTORY" Logo */}
            {stage === 1 && (
              <div className="animate-in zoom-in-95 fade-in duration-300 flex flex-col items-center">
                <div className="inline-block p-1 bg-awara-orange text-white font-mono text-xs font-black uppercase px-3 py-1 rounded border border-white/30 mb-4 shadow-sm">
                  🏭 THE DIGITAL FACTORY
                </div>
                <div className="bg-white p-3 rounded-lg border-4 border-white mb-3 shadow-brutal-white max-w-[280px] sm:max-w-[340px]">
                  <img
                    src="/awara-logo.png"
                    alt="Awara Factory"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            )}

            {/* Phase 2: "BUILD. AUTOMATE. GO AWARA." */}
            {stage === 2 && (
              <div className="animate-in zoom-in-90 fade-in duration-300">
                <div className="inline-block p-1 bg-green-400 text-dark font-mono text-xs font-black uppercase px-3 py-1 rounded border border-dark mb-4 shadow-sm">
                  🚀 THE MISSION
                </div>
                <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black uppercase tracking-wider text-paper font-display leading-tight">
                  <span className="text-white">BUILD.</span>{' '}
                  <span className="text-awara-orange">AUTOMATE.</span> <br />
                  <span className="text-yellow-300 underline decoration-white decoration-4">GO AWARA.</span>
                </h2>
                <p className="font-hand text-xl sm:text-2xl text-paper/80 mt-4">
                  "Boring kaam system ko de do."
                </p>
              </div>
            )}
          </div>

          {/* Loading Progress Bar */}
          <div className="mt-12 max-w-xs w-full">
            <div className="flex justify-between text-[11px] font-mono text-paper/50 mb-1.5">
              <span>INITIALIZING AWARA SYSTEM</span>
              <span>{stage === 0 ? '33%' : stage === 1 ? '66%' : '100%'}</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden border border-white/20">
              <div
                className="bg-awara-orange h-full transition-all duration-700 ease-out"
                style={{ width: stage === 0 ? '33%' : stage === 1 ? '66%' : '100%' }}
              ></div>
            </div>
          </div>
        </>
      )}

      {/* ════════════ STAGE 3: CHOOSE VIBE (CASUAL VS PROFESSIONAL) ════════════ */}
      {stage === 3 && (
        <div className="max-w-4xl w-full text-center animate-in zoom-in-95 fade-in duration-400 relative z-20">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/20 rounded-full font-mono text-xs text-yellow-300 font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4 text-awara-orange" />
            <span>KAISE DEKHNA PASAND KAROGE? // CHOOSE YOUR VIBE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-display mb-3">
            SELECT WEBSITE <span className="text-awara-orange underline decoration-white decoration-4">VIBE</span>
          </h2>
          <p className="text-sm sm:text-base text-paper/70 font-medium max-w-lg mx-auto mb-8 sm:mb-10">
            Aapki choice ke hisab se poora website design, copy aur interactive experience adapt ho jaayega.
          </p>

          {/* Dual Choice Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-3xl mx-auto text-left">
            {/* OPTION 1: CASUAL VIBE */}
            <div
              onClick={() => selectVibeAndFinish('casual')}
              className="group relative bg-white text-dark border-3 border-dark rounded-xl p-6 sm:p-7 shadow-brutal-orange hover:shadow-brutal-orange-lg hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="absolute -top-3 right-4 bg-awara-orange text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-dark shadow-sm">
                POPULAR 🔥
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 border-2 border-dark flex items-center justify-center text-awara-orange group-hover:bg-awara-orange group-hover:text-white transition-colors">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-dark/50 uppercase tracking-widest block">
                      OPTION 01
                    </span>
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-dark">
                      Casual Vibe 🔥
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-dark/80">
                    <CheckCircle2 className="w-4 h-4 text-awara-orange shrink-0" />
                    <span>Desi + Gen-Z + Startup Hustle</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-dark/80">
                    <CheckCircle2 className="w-4 h-4 text-awara-orange shrink-0" />
                    <span>Unfiltered Hinglish copy & street stickers</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-dark/80">
                    <CheckCircle2 className="w-4 h-4 text-awara-orange shrink-0" />
                    <span>"Bhai, ye manual kaam kyun kar raha hai?"</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-dark/15 flex items-center justify-between">
                <span className="font-hand font-bold text-sm text-awara-orange">
                  Full Awara Energy ⚡
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-dark group-hover:bg-awara-orange text-white text-xs font-mono font-bold uppercase rounded transition-colors">
                  <span>Enter Casual</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>

            {/* OPTION 2: PROFESSIONAL VIBE */}
            <div
              onClick={() => selectVibeAndFinish('professional')}
              className="group relative bg-[#1E242B] text-white border-2 border-white/20 hover:border-awara-orange rounded-xl p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="absolute -top-3 right-4 bg-emerald-500 text-dark text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-dark shadow-sm">
                ENTERPRISE 💼
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-dark transition-colors">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-white/50 uppercase tracking-widest block">
                      OPTION 02
                    </span>
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white">
                      Professional Vibe 💼
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-white/80">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Clean Minimalist Tech Studio</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-white/80">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Executive Polish, ROI & English focus</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-white/80">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Enterprise workflows & SLA reliability</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                <span className="font-mono text-xs text-emerald-400 font-bold">
                  Corporate Architecture 🛡️
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 group-hover:bg-emerald-500 group-hover:text-dark text-white text-xs font-mono font-bold uppercase rounded border border-white/20 transition-colors">
                  <span>Enter Pro</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-paper/40 font-mono text-xs">
            * Aap website par aage jaakar bhi kabhi bhi upar navbar se vibe switch kar sakte ho.
          </p>
        </div>
      )}
    </div>
  );
}
