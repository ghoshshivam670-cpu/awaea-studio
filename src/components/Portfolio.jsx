import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Portfolio({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-dark rounded-full shadow-brutal text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-awara-orange" />
              <span>PROVEN PROTOTYPES & BUILDS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-dark font-display leading-[0.95]">
              FACTORY SE <br />
              <span className="text-awara-orange underline decoration-dark decoration-4">NIKLA KYA?</span>
            </h2>
          </div>
          <div className="max-w-md">
            <span className="inline-block px-3 py-1 bg-yellow-300 border border-dark text-xs font-mono font-black uppercase rounded shadow-sm mb-2">
              ⚠️ 100% REAL DEMOS — NO FAKE CLIENT CLAIMS
            </span>
            <p className="text-dark/70 font-medium text-sm sm:text-base">
              Explore interactive blueprint builds tested and architected for high-conversion and zero manual stress.
            </p>
          </div>
        </div>

        {/* 4 Demo Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteData.demos.map((demo, idx) => (
            <div
              key={demo.id}
              className="bg-white border-3 border-dark rounded-md p-6 sm:p-8 shadow-brutal hover:shadow-brutal-orange transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Browser-like window header */}
                <div className="flex items-center justify-between border-b-2 border-dark/15 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400 border border-dark"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-400 border border-dark"></span>
                      <span className="w-3 h-3 rounded-full bg-green-400 border border-dark"></span>
                    </div>
                    <span className="font-mono text-xs font-bold text-dark/60 tracking-wider ml-2">
                      {demo.category}
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 bg-dark text-white font-mono text-[11px] font-bold rounded uppercase">
                    PROTOTYPE // 0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-dark font-display mb-6 group-hover:text-awara-orange transition-colors">
                  {demo.title}
                </h3>

                {/* 3 Pillars Breakdown */}
                <div className="space-y-4 mb-8">
                  {/* Build */}
                  <div className="p-3.5 bg-paper rounded border border-dark/20">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-dark mb-1">
                      <Layers className="w-4 h-4 text-blue-600" />
                      <span>THE BUILD:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-dark/80 font-medium">
                      {demo.build}
                    </p>
                  </div>

                  {/* Automation */}
                  <div className="p-3.5 bg-orange-50 rounded border border-dark/20">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-awara-orange mb-1">
                      <Cpu className="w-4 h-4 text-awara-orange" />
                      <span>THE AUTOMATION PIPELINE:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-dark/80 font-medium">
                      {demo.automation}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="p-3.5 bg-green-50 rounded border border-dark/20">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-awara-green mb-1">
                      <CheckCircle2 className="w-4 h-4 text-awara-green" />
                      <span>THE RESULT:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-dark/80 font-medium">
                      {demo.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t-2 border-dark flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-awara-orange bg-paper px-2.5 py-1 rounded border border-dark/30">
                  🎯 {demo.stats}
                </span>
                <button
                  onClick={() => onOpenContact(`Demo Project: ${demo.title}`)}
                  className="px-4 py-2 bg-dark hover:bg-awara-orange text-white font-mono text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-2"
                >
                  <span>Build Similar System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Prototype Request Box */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white border-3 border-dark p-6 rounded-md shadow-brutal">
            <span className="font-hand font-bold text-lg text-dark">
              "Aapke business ke liye live interactive demo walkthrough dekhna hai?"
            </span>
            <button
              onClick={() => onOpenContact('Request Live Architecture Demo')}
              className="px-6 py-2.5 bg-awara-orange hover:bg-awara-orange-light text-white font-bold text-sm tracking-wide uppercase font-display border-2 border-dark rounded shadow-sm transition-transform active:scale-95"
            >
              Request 15-Min Live Demo →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
