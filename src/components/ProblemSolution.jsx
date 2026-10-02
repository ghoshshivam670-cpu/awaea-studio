import React, { useState } from 'react';
import { ArrowRight, AlertCircle, Wrench, CheckCircle, Sparkles, MessageCircleWarning, UserX, Copy, Zap } from 'lucide-react';
import { siteData } from '../data/siteData';
import ManualModeToggle from './ManualModeToggle';
import { useVibe } from '../context/VibeContext';

export default function ProblemSolution({ onTriggerStamp }) {
  const [selectedPipeline, setSelectedPipeline] = useState(0);
  const { content, isProfessional } = useVibe();
  const psData = content.problemSolution;

  const pipelines = psData.pipelines.map((item) => ({
    id: item.id,
    badge: item.badge,
    problem: {
      title: item.problemTitle,
      desc: item.problemDesc,
      tag: psData.problemTag
    },
    jugaad: {
      title: item.solutionTitle,
      desc: item.solutionDesc,
      tag: psData.solutionTag
    },
    result: {
      title: item.resultTitle,
      desc: item.resultDesc,
      tag: psData.resultTag
    }
  }));

  return (
    <section id="problem-solution" className="py-24 sm:py-32 bg-paper-dark/60 border-y-3 border-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-awara-orange text-white border-2 border-dark rounded-full shadow-brutal text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>{psData.badge}</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-dark font-display leading-[0.95] mb-4">
            {psData.title1} <br />
            <span className="text-awara-orange underline decoration-dark decoration-4">{psData.title2}</span>
          </h2>
          <p className="text-base sm:text-xl text-dark/70 font-medium">
            {psData.sub}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {pipelines.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedPipeline(idx)}
              className={`px-4 py-2.5 rounded border-2 border-dark font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                selectedPipeline === idx
                  ? 'bg-dark text-white shadow-brutal translate-x-0.5 translate-y-0.5'
                  : 'bg-white text-dark hover:bg-paper-light shadow-sm'
              }`}
            >
              <span>{p.id}.</span>
              <span>{p.badge}</span>
            </button>
          ))}
        </div>

        {/* Active Pipeline 3-Step Card */}
        {(() => {
          const current = pipelines[selectedPipeline];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
              {/* STEP 1: PROBLEM */}
              <div className="bg-white border-3 border-dark rounded-md p-6 sm:p-8 shadow-brutal flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-red-500 text-white font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-wider border-b border-l border-dark">
                  {current.problem.tag}
                </div>
                <div>
                  <div className="w-12 h-12 rounded bg-red-100 border-2 border-dark flex items-center justify-center text-red-600 mb-6">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-dark uppercase mb-3 leading-snug">
                    "{current.problem.title}"
                  </h3>
                  <p className="text-sm text-dark/70 font-medium leading-relaxed">
                    {current.problem.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-dark/15 mt-6 flex items-center justify-between text-xs font-mono text-red-600 font-bold">
                  <span>STATUS: LOSS OF TIME & REVENUE</span>
                  <span className="text-lg">❌</span>
                </div>
              </div>

              {/* STEP 2: JUGAAD */}
              <div className="bg-paper-light border-3 border-dark rounded-md p-6 sm:p-8 shadow-brutal flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-awara-orange text-white font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-wider border-b border-l border-dark">
                  {current.jugaad.tag}
                </div>
                <div>
                  <div className="w-12 h-12 rounded bg-orange-100 border-2 border-dark flex items-center justify-center text-awara-orange mb-6">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-dark uppercase mb-3 leading-snug">
                    "{current.jugaad.title}"
                  </h3>
                  <p className="text-sm text-dark/70 font-medium leading-relaxed">
                    {current.jugaad.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-dark/15 mt-6 flex items-center justify-between text-xs font-mono text-awara-orange font-bold">
                  <span>STATUS: SYSTEM ARCHITECTURE DEPLOYED</span>
                  <span className="text-lg">⚙️</span>
                </div>
              </div>

              {/* STEP 3: RESULT */}
              <div className="bg-green-50 border-3 border-dark rounded-md p-6 sm:p-8 shadow-brutal-green flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-awara-green text-white font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-wider border-b border-l border-dark">
                  {current.result.tag}
                </div>
                <div>
                  <div className="w-12 h-12 rounded bg-green-200 border-2 border-dark flex items-center justify-center text-awara-green mb-6">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-dark uppercase mb-3 leading-snug text-awara-green">
                    "{current.result.title}"
                  </h3>
                  <p className="text-sm text-dark/80 font-medium leading-relaxed">
                    {current.result.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-dark/15 mt-6 flex items-center justify-between text-xs font-mono text-awara-green font-bold">
                  <span>STATUS: 100% AUTOMATED & PEACE</span>
                  <span className="text-lg">✅</span>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Interactive Manual Mode Switch Panel */}
        <div className="mt-14 max-w-5xl mx-auto">
          <ManualModeToggle onTriggerStamp={onTriggerStamp} />
        </div>

        {/* Floating microquote */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-white border-2 border-dark px-4 py-2 rounded-full shadow-brutal font-hand text-base sm:text-lg text-dark">
            👉 "Jugaad, but scalable & bulletproof."
          </div>
        </div>
      </div>
    </section>
  );
}
