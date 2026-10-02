import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDown, Bot, MessageSquare, Mail, Workflow, Database, Globe, User, CheckCircle2, Zap, Play, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';
import BholuButton from './BholuButton';
import ControlRoom from './ControlRoom';
import { useVibe } from '../context/VibeContext';

export default function Hero({ onOpenContact, onOpenAwaraAi, onTriggerStamp, onOpenAreYouSure }) {
  const { content, isProfessional } = useVibe();
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const factoryRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  // Digital factory pipeline nodes
  const nodes = [
    { id: 'customer', label: 'CUSTOMER', sub: 'Lead In', icon: User, color: 'border-dark bg-white' },
    { id: 'website', label: 'WEBSITE', sub: 'High Conv.', icon: Globe, color: 'border-dark bg-white' },
    { id: 'ai', label: 'AI AGENT', sub: 'AI Thinking', icon: Bot, color: 'border-awara-orange bg-orange-50' },
    { id: 'whatsapp', label: 'WHATSAPP', sub: 'Instant Ping', icon: MessageSquare, color: 'border-awara-green bg-green-50' },
    { id: 'crm', label: 'CRM & SYNC', sub: 'Zero Loss', icon: Database, color: 'border-dark bg-white' },
    { id: 'email', label: 'EMAIL DRIP', sub: 'Follow-Up', icon: Mail, color: 'border-dark bg-white' },
    { id: 'n8n', label: 'n8n ENGINE', sub: 'Orchestration', icon: Workflow, color: 'border-awara-orange bg-orange-50' },
    { id: 'business', label: 'BUSINESS', sub: 'AUTOMATED ⚡', icon: CheckCircle2, color: 'border-dark bg-awara-orange text-white' },
  ];

  // Auto-cycle simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % nodes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [nodes.length]);

  // GSAP entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      });
      gsap.from('.hero-heading-line', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.2
      });
      gsap.from('.hero-desc', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5
      });
      gsap.from('.hero-cta-group', {
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        delay: 0.7
      });
      gsap.from('.factory-pipeline-box', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.8
      });
      gsap.from('.floating-sticker', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: 'back.out(2)',
        delay: 1.0
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handlePrimaryClick = () => {
    if (onOpenAreYouSure) {
      onOpenAreYouSure(() => onOpenContact('Hero CTA'));
    } else {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF4D00', '#111111', '#1F8F5F', '#FFD700']
      });
      onOpenContact();
    }
  };

  const runSimulation = () => {
    setIsSimulating(true);
    let step = 0;
    const simInterval = setInterval(() => {
      setActiveStep(step);
      step++;
      if (step >= nodes.length) {
        clearInterval(simInterval);
        setTimeout(() => setIsSimulating(false), 800);
      }
    }, 450);
  };

  return (
    <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Floating Sticker 1 - Top Left */}
      <div className="floating-sticker absolute top-24 left-4 sm:left-12 rotate-[-8deg] z-20 hidden md:block">
        <div className={`sticker border-2 font-hand text-sm px-3 py-1 shadow-brutal ${
          isProfessional
            ? 'bg-[#1E242B] text-emerald-400 border-white/20 font-mono text-xs'
            : 'bg-yellow-300 text-dark border-dark'
        }`}>
          <span>{content.hero.sticker1}</span>
        </div>
      </div>

      {/* Floating Sticker 2 - Top Right */}
      <div className="floating-sticker absolute top-28 right-6 sm:right-16 rotate-[6deg] z-20 hidden md:block">
        <div className={`sticker border-2 font-hand text-sm px-3 py-1 shadow-brutal ${
          isProfessional
            ? 'bg-[#1E242B] text-awara-orange border-white/20 font-mono text-xs'
            : 'bg-awara-orange text-white border-dark'
        }`}>
          <span>{content.hero.sticker2}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border-2 border-dark rounded-full shadow-brutal">
              <span className="w-2.5 h-2.5 rounded-full bg-awara-orange animate-ping"></span>
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-dark uppercase">
                {content.hero.eyebrow}
              </span>
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-dark text-white border-2 border-awara-orange rounded-full shadow-brutal hover:bg-awara-orange hover:text-dark transition-all text-xs sm:text-sm font-mono font-bold uppercase animate-pulse group"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span>💡 {isProfessional ? '7-DAY ENTERPRISE LAUNCH SYSTEM' : 'NAYA IDEA HAI? 7 DIN MEIN LIVE JAO'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-awara-orange group-hover:text-dark group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          {/* Main Headline */}
          <h1 ref={headlineRef} className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-dark uppercase leading-[0.95] mb-6 font-display">
            <span className="hero-heading-line block">{content.hero.heading1}</span>
            <span className="hero-heading-line block text-awara-orange drop-shadow-sm">
              {content.hero.heading2}
            </span>
          </h1>

          {/* Sub visual text */}
          <div className="mb-6">
            <span className="inline-block font-mono font-extrabold text-sm sm:text-lg tracking-widest uppercase bg-dark text-paper px-4 py-1.5 border border-dark rounded-sm transform -rotate-1 shadow-brutal">
              {content.tagline}
            </span>
          </div>

          {/* Supporting paragraph */}
          <p className="hero-desc text-lg sm:text-2xl text-dark/80 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
            {content.hero.desc}
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            <button
              onClick={handlePrimaryClick}
              data-bhai-tip="haan bhai, click kar 🔥"
              className="w-full sm:w-auto px-8 py-4 bg-awara-orange text-white font-black text-lg tracking-wider border-2 border-dark shadow-brutal-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all rounded-sm flex items-center justify-center gap-3 active:scale-95 group cursor-pointer"
            >
              <span>{content.hero.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#services"
              data-bhai-tip="dekho kya banta hai 👀"
              className="w-full sm:w-auto px-7 py-4 bg-white text-dark font-bold text-base tracking-wide border-2 border-dark shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all rounded-sm flex items-center justify-center gap-2"
            >
              <span>{content.hero.ctaSecondary}</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>

          {/* Tiny Status Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-dark/70 bg-paper-light border border-dark/30 px-3 py-1 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-awara-green"></span>
            <span>{content.hero.status}</span>
          </div>
        </div>

        {/* Digital Factory Interactive Pipeline */}
        <div className="factory-pipeline-box mt-16 max-w-6xl mx-auto">
          <div className="bg-white border-3 border-dark rounded-md p-5 sm:p-7 shadow-brutal-xl relative">
            {/* Header bar */}
            <div className="flex flex-wrap items-center justify-between border-b-2 border-dark/15 pb-4 mb-6 gap-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-red-400 border border-dark"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-dark"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-green-400 border border-dark"></span>
                </div>
                <span className="font-mono text-xs font-bold text-dark/70 tracking-wider ml-2">
                  LIVE DIGITAL PRODUCTION LINE // v2.0
                </span>
              </div>
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="px-3 py-1.5 bg-paper-light hover:bg-awara-orange hover:text-white border border-dark text-xs font-mono font-bold rounded flex items-center gap-1.5 transition-colors shadow-sm disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isSimulating ? 'TRANSMITTING PACKET...' : 'TEST PIPELINE ⚡'}</span>
              </button>
            </div>

            {/* Pipeline Nodes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative">
              {nodes.map((node, index) => {
                const IconComponent = node.icon;
                const isActive = activeStep === index;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveStep(index)}
                    className={`cursor-pointer border-2 rounded p-3 text-center transition-all duration-300 relative flex flex-col items-center justify-between min-h-[110px] ${
                      node.id === 'business'
                        ? isActive
                          ? 'bg-awara-orange text-white border-dark scale-105 shadow-brutal-orange'
                          : 'bg-dark text-white border-dark'
                        : isActive
                        ? 'border-awara-orange bg-orange-50 shadow-brutal-orange -translate-y-1'
                        : 'border-dark/60 bg-paper-light/70 hover:border-dark'
                    }`}
                  >
                    {/* Step indicator */}
                    <div className="w-full flex justify-between items-center text-[10px] font-mono text-dark/50 mb-1">
                      <span className={node.id === 'business' ? 'text-white/80' : ''}>0{index + 1}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-awara-orange animate-ping"></span>
                      )}
                    </div>

                    {/* Icon */}
                    <div className={`p-2 rounded-full mb-1 transition-transform ${isActive ? 'scale-110' : ''} ${
                      node.id === 'business' ? 'bg-white/20' : 'bg-white border border-dark/20'
                    }`}>
                      <IconComponent className={`w-4 h-4 ${
                        node.id === 'business'
                          ? 'text-white'
                          : isActive
                          ? 'text-awara-orange'
                          : 'text-dark'
                      }`} />
                    </div>

                    {/* Node title */}
                    <div className="w-full">
                      <div className={`text-xs font-bold uppercase tracking-tight leading-tight ${
                        node.id === 'business' ? 'text-white' : 'text-dark'
                      }`}>
                        {node.label}
                      </div>
                      <div className={`text-[10px] font-mono font-medium mt-0.5 ${
                        node.id === 'business'
                          ? 'text-white/80'
                          : isActive
                          ? 'text-awara-orange font-bold'
                          : 'text-dark/60'
                      }`}>
                        {node.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom active node status info */}
            <div className="mt-5 pt-4 border-t border-dark/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-dark/80 gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-awara-orange"></span>
                <span>
                  ACTIVE NODE: <strong className="text-dark font-bold">{nodes[activeStep].label}</strong> ({nodes[activeStep].sub})
                </span>
              </div>
              <div className="flex items-center gap-3">
                {isProfessional ? (
                  <button
                    onClick={() => onOpenAwaraAi('Enterprise Automation Architecture Inquiry')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-dark text-white rounded font-mono text-[11px] font-bold hover:bg-awara-orange transition-colors border border-dark cursor-pointer shadow-sm"
                  >
                    <Bot className="w-3.5 h-3.5 text-awara-orange" />
                    <span>Query Architecture Assistant →</span>
                  </button>
                ) : (
                  <BholuButton onOpenAwaraAi={onOpenAwaraAi} />
                )}
              </div>
            </div>
          </div>

          {/* Awara Factory Control Room Panel */}
          <div className="mt-6 max-w-4xl mx-auto">
            <ControlRoom onTriggerStamp={onTriggerStamp} />
          </div>
        </div>
      </div>
    </section>
  );
}
