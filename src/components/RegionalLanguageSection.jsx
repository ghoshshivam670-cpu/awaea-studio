import React from 'react';
import { Globe, ArrowRight, MessageSquare, CheckCircle2, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { useVibe } from '../context/VibeContext';

export default function RegionalLanguageSection({ onOpenContact }) {
  const { isProfessional } = useVibe();

  const regionalLanguages = [
    { name: 'Bengali', native: 'বাংলা', region: 'Kolkata & East India' },
    { name: 'Marathi', native: 'मराठी', region: 'Mumbai, Pune & Maharashtra' },
    { name: 'Gujarati', native: 'ગુજરાતી', region: 'Gujarat Trade & Commerce' },
    { name: 'Hindi', native: 'हिन्दी', region: 'North & Central Bharat' },
    { name: 'Tamil', native: 'தமிழ்', region: 'Tamil Nadu & Industrial Hubs' },
    { name: 'Odia', native: 'ଓଡ଼ିଆ', region: 'Odisha Digital & Retail' },
    { name: 'Assamese', native: 'অসমীয়া', region: 'Assam & North East Gateway' },
    { name: 'English', native: 'English', region: 'Pan-India & Global Corporates' },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Awara Factory! I want to showcase my business in my regional language.");
    window.open(`https://wa.me/917432934247?text=${message}`, '_blank');
  };

  return (
    <section id="regional-languages" className="py-20 sm:py-28 relative overflow-hidden bg-paper-light dark:bg-[#101214] border-t-2 border-b-2 border-dark dark:border-white/15 transition-colors duration-300">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 dark:opacity-10 pointer-events-none" />

      {/* Decorative Glow */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-awara-orange/10 dark:bg-awara-orange/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-80 h-80 bg-awara-green/10 dark:bg-awara-green/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-awara-orange/10 dark:bg-awara-orange/20 border border-awara-orange rounded-full text-awara-orange font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5 animate-spin-slow" />
            <span>{isProfessional ? 'BHARAT REGIONAL BUSINESS REACH' : 'DESI BHARAT FIRST 🇮🇳'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-dark dark:text-white uppercase tracking-tight leading-[1.1] mb-6">
            {isProfessional ? (
              <>
                We Can Showcase Your Business In Your <span className="text-awara-orange underline decoration-wavy decoration-2">Regional Language</span>
              </>
            ) : (
              <>
                Hum Aapke Business Ko Aapki <span className="text-awara-orange underline decoration-wavy decoration-2">Regional Language</span> Mein Showcase Kar Sakte Hain
              </>
            )}
          </h2>

          <p className="text-base sm:text-xl text-dark/80 dark:text-gray-300 leading-relaxed font-normal max-w-3xl mx-auto">
            {isProfessional
              ? 'Connect directly with millions of buyers across India. We build high-converting websites, sales pages, and WhatsApp business channels in Bengali, Marathi, Gujarati, Hindi, Tamil, Odia, Assamese, and English — so your customers trust and buy faster.'
              : '80% se zyada Indian customers apni mother tongue mein dekhna aur khareedna pasand karte hain. Hum aapke business ki website aur WhatsApp funnels aapki regional bhasha mein banate hain taaki local customers ka pura trust mile.'
            }
          </p>
        </div>

        {/* 8 Regional Language Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mb-14">
          {regionalLanguages.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#16181B] border-2 border-dark dark:border-white/20 p-4 rounded-xl shadow-brutal dark:shadow-brutal-lg hover:border-awara-orange hover:-translate-y-1 transition-all duration-200 text-center flex flex-col justify-center items-center"
            >
              <div className="text-2xl sm:text-3xl font-black text-dark dark:text-white mb-1">
                {item.native}
              </div>
              <div className="text-xs font-bold text-awara-orange uppercase tracking-wider">
                {item.name}
              </div>
              <div className="text-[10px] font-mono text-dark/60 dark:text-gray-400 mt-1 line-clamp-1">
                {item.region}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Core Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-[#16181B] border-2 border-dark dark:border-white/20 p-6 rounded-xl shadow-brutal">
            <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-awara-orange/20 border-2 border-dark dark:border-white/20 flex items-center justify-center text-awara-orange mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-extrabold text-dark dark:text-white uppercase mb-2">
              {isProfessional ? '3.4x Higher Buyer Trust' : 'Local Trust & Fast Orders'}
            </h4>
            <p className="text-xs sm:text-sm text-dark/70 dark:text-gray-400 leading-relaxed font-sans">
              {isProfessional
                ? 'Regional landing pages eliminate language barriers, driving significantly higher conversion and phone inquiries.'
                : 'Customer jab apni bhasha mein product dekhta hai to bina dare turant call ya order place karta hai.'
              }
            </p>
          </div>

          <div className="bg-white dark:bg-[#16181B] border-2 border-dark dark:border-white/20 p-6 rounded-xl shadow-brutal">
            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-awara-green/20 border-2 border-dark dark:border-white/20 flex items-center justify-center text-awara-green mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-extrabold text-dark dark:text-white uppercase mb-2">
              {isProfessional ? 'Vernacular Google SEO' : 'Regional Google Ranking'}
            </h4>
            <p className="text-xs sm:text-sm text-dark/70 dark:text-gray-400 leading-relaxed font-sans">
              {isProfessional
                ? 'Rank on Google for regional voice and text searches that old English-only agency websites completely miss.'
                : 'Google pe jab log local bhasha mein search karein, to aapka business sabse upar dikhega.'
              }
            </p>
          </div>

          <div className="bg-white dark:bg-[#16181B] border-2 border-dark dark:border-white/20 p-6 rounded-xl shadow-brutal">
            <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-400/20 border-2 border-dark dark:border-white/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-4">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-extrabold text-dark dark:text-white uppercase mb-2">
              {isProfessional ? 'WhatsApp Regional Automation' : 'WhatsApp Regional Support'}
            </h4>
            <p className="text-xs sm:text-sm text-dark/70 dark:text-gray-400 leading-relaxed font-sans">
              {isProfessional
                ? 'Automatic catalog sharing and instant inquiries in native languages directly over official WhatsApp API.'
                : 'WhatsApp par auto-catalog aur chat aapki regional bhasha mein set hoti hai jo 24 ghante chal sakti hai.'
              }
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => onOpenContact('Showcase Business in Regional Language')}
            className="px-7 py-4 bg-awara-orange text-white font-extrabold text-sm sm:text-base tracking-wide border-2 border-dark dark:border-white rounded-sm shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2 cursor-pointer active:bg-awara-orange-light"
          >
            <span>{isProfessional ? 'Showcase My Business in Regional Language' : 'Apne Business Ko Regional Language Mein Lao'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="px-6 py-4 bg-white dark:bg-[#1A1D20] text-dark dark:text-white font-bold text-sm sm:text-base border-2 border-dark dark:border-white/20 rounded-sm shadow-brutal flex items-center gap-2 hover:border-awara-green hover:text-awara-green transition-all cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-awara-green" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
