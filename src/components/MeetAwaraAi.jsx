import React, { useState } from 'react';
import { Bot, Sparkles, Send, ArrowRight, User, CheckCircle2, MessageSquare, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MeetAwaraAi({ onOpenFloatingBot }) {
  const [activeDemoQuery, setActiveDemoQuery] = useState('restaurant');

  const scenarios = {
    restaurant: {
      label: '🍔 Restaurant Automation',
      userQuery: 'Mujhe restaurant ke liye website chahiye.',
      botResponse: `Bhai, simple website se kaam chal jayega…
but hum thoda aur Awara kar sakte hain. 😎

Website + WhatsApp enquiry + menu + booking flow bana sakte hain.

Starting ₹14,999 se.

Kya aapka restaurant already online hai?`,
      features: ['Live Table Reservation', 'WhatsApp QR Menu', 'Automated Confirmation']
    },
    clinic: {
      label: '🩺 Clinic & Hospital',
      userQuery: 'Clinic ke patient appointments automate ho sakte hain?',
      botResponse: `100% Doctor sahab! 🩺

Patient website pe time slot select karega → system WhatsApp pe instant confirmation token bhej dega + appointment se 2 ghante pehle reminder ping.

No-shows 80% down, receptionist free!`,
      features: ['Automated Slot Booking', 'Reminder Broadcasts', 'Doctor Calendar Sync']
    },
    realestate: {
      label: '🏢 Real Estate Pipeline',
      userQuery: 'Real estate leads bohot drop ho rahi hain.',
      botResponse: `Bhai, property buyers ko 5 minute mein response chahiye hota hai! ⏱️

Jaise hi form bhara gaya → AI bot WhatsApp pe instant floorplan bhejega + sales agent ko phone pe instant lead details ping karega.

Hot lead instantly locked!`,
      features: ['Instant WhatsApp Brochure', 'Lead Qualification Bot', 'Sales Team Alerts']
    },
    n8n: {
      label: '⚙️ Manual Data Entry Kill',
      userQuery: 'Same data roz Google Sheet aur CRM mein paste karna padta hai.',
      botResponse: `Bhai, ye manual kaam kyun kar raha hai? 😭

n8n workflow laga dete hain:
Customer Form → Google Sheets → CRM → Slack Alert → Welcome Email.

Ek baar submit hua, baaki 100% automatic!`,
      features: ['Zero Zapier Paywalls', '2-Way Data Sync', 'Instant Error Retries']
    }
  };

  const handleTryBot = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FF4D00', '#111111', '#1F8F5F']
    });
    onOpenFloatingBot(scenarios[activeDemoQuery].userQuery);
  };

  return (
    <section className="py-24 sm:py-32 bg-paper-light border-y-3 border-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-awara-orange text-white border-2 border-dark rounded-full shadow-brutal text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIVE INTELLIGENCE SHOWCASE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-dark font-display leading-[0.95] mb-4">
            MEET <span className="text-awara-orange underline decoration-dark decoration-4">AWARA Ai.</span>
          </h2>
          <p className="text-lg sm:text-2xl text-dark/80 font-bold max-w-xl mx-auto">
            "Website dekhne se better hai, isse baat kar lo."
          </p>
        </div>

        {/* Interactive Chat Window Container */}
        <div className="max-w-4xl mx-auto bg-white border-4 border-dark rounded-xl shadow-brutal-xl overflow-hidden">
          
          {/* Top Window Bar */}
          <div className="bg-dark text-paper p-4 sm:p-5 border-b-3 border-dark flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-red-400 border border-dark"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-dark"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-green-400 border border-dark"></span>
              </div>
              <div className="flex items-center gap-2 ml-2">
                <Bot className="w-5 h-5 text-awara-orange" />
                <span className="font-mono text-xs sm:text-sm font-bold tracking-wide">
                  AWARA_AI_ENGINE // LIVE PREVIEW
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-awara-green">
              <span className="w-2 h-2 rounded-full bg-awara-green animate-ping"></span>
              <span>24/7 ONLINE • ZERO DELAY</span>
            </div>
          </div>

          {/* Scenario Selector Tabs */}
          <div className="bg-paper border-b-2 border-dark p-3 flex flex-wrap gap-2 justify-center sm:justify-start">
            {Object.keys(scenarios).map((key) => (
              <button
                key={key}
                onClick={() => setActiveDemoQuery(key)}
                className={`px-3 sm:px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider border-2 border-dark transition-all ${
                  activeDemoQuery === key
                    ? 'bg-awara-orange text-white shadow-sm translate-y-0.5'
                    : 'bg-white text-dark hover:bg-paper-light'
                }`}
              >
                {scenarios[key].label}
              </button>
            ))}
          </div>

          {/* Live Chat Content Area */}
          <div className="p-6 sm:p-8 bg-paper/40 space-y-6 min-h-[300px]">
            
            {/* User Message Bubble */}
            <div className="flex items-start justify-end gap-3">
              <div className="bg-awara-orange text-white p-4 rounded-xl rounded-tr-none border-2 border-dark shadow-brutal max-w-lg text-sm sm:text-base font-bold">
                <p>"{scenarios[activeDemoQuery].userQuery}"</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-dark text-white border-2 border-dark flex items-center justify-center shrink-0">
                <User className="w-5 h-5" />
              </div>
            </div>

            {/* Bot Response Bubble */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-awara-orange text-white border-2 border-dark flex items-center justify-center shrink-0 mt-1 shadow-sm">
                <Bot className="w-5 h-5" />
              </div>

              <div className="bg-white text-dark p-5 rounded-xl rounded-tl-none border-3 border-dark shadow-brutal max-w-xl space-y-3">
                <div className="flex items-center gap-2 border-b border-dark/10 pb-2">
                  <span className="font-display font-black text-xs uppercase text-awara-orange">
                    AWARA Ai AGENT
                  </span>
                  <span className="text-[10px] font-mono text-dark/40 font-bold">
                    [PROCESSED IN 0.2s]
                  </span>
                </div>

                <p className="text-sm sm:text-base font-medium text-dark whitespace-pre-line leading-relaxed">
                  {scenarios[activeDemoQuery].botResponse}
                </p>

                {/* Micro Feature Tags */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {scenarios[activeDemoQuery].features.map((feat, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 border border-dark/30 rounded text-[11px] font-mono font-bold text-awara-green"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Callout & Direct Try Button */}
          <div className="bg-paper-light border-t-3 border-dark p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="font-display font-black text-lg text-dark uppercase tracking-tight">
                Aisa AI Bot Aapke Business Ke Liye Bhi Ban Sakta Hai
              </div>
              <p className="text-xs font-mono text-dark/70">
                Trained specifically on your products, services, Hindi/English & WhatsApp.
              </p>
            </div>

            <button
              onClick={handleTryBot}
              className="w-full sm:w-auto px-7 py-3.5 bg-awara-orange hover:bg-awara-orange-light text-white font-black text-sm uppercase tracking-wider font-display border-2 border-dark rounded-sm shadow-brutal hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
            >
              <span>TRY AWARA Ai LIVE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
