import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageCircle, ArrowRight, CheckCircle2, User, RefreshCw, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useVibe } from '../context/VibeContext';

export default function AwaraAiChatbot({ isOpen, setIsOpen, initialMessage }) {
  const { isProfessional } = useVibe();

  const casualGreeting = 'Namaste! 👋 Main Awara Ai hoon.\n\nWebsite chahiye, WhatsApp automate karna hai, ya koi boring kaam machine ko dena hai?';
  const proGreeting = 'Hello! 👋 I am the Awara Ai Systems Assistant.\n\nAre you looking to engineer a high-conversion web platform, automate customer communications via WhatsApp Cloud API, or eliminate operational workflow bottlenecks?';

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: isProfessional ? proGreeting : casualGreeting,
      time: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', business: '', phone: '', note: '' });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const messagesEndRef = useRef(null);

  // Update greeting when vibe changes
  useEffect(() => {
    setMessages([
      {
        id: 1,
        sender: 'bot',
        text: isProfessional ? proGreeting : casualGreeting,
        time: 'Just now'
      }
    ]);
  }, [isProfessional]);

  const quickOptions = isProfessional
    ? [
        { label: '🌐 Web Architecture', query: 'I am looking for a modern, high-conversion web architecture.' },
        { label: '🤖 AI Assistant', query: 'I want to integrate a custom-trained AI assistant for my business.' },
        { label: '💬 WhatsApp Cloud API', query: 'How can we deploy official WhatsApp Cloud API workflows?' },
        { label: '⚙️ Workflow Automation', query: 'How can n8n eliminate repetitive multi-platform data entry?' },
        { label: '💰 Service Pricing', query: 'What are the standard architecture pricing tiers?' }
      ]
    : [
        { label: '🌐 Website chahiye', query: 'Mujhe ek fast & modern website chahiye.' },
        { label: '🤖 AI Chatbot', query: 'Mujhe apne business ke liye AI Chatbot banana hai.' },
        { label: '💬 WhatsApp Automation', query: 'WhatsApp automation kaise kaam karega?' },
        { label: '⚙️ n8n Automation', query: 'n8n se meri manual data entry band ho sakti hai?' },
        { label: '💰 Pricing batao', query: 'Awara Factory ke pricing plans kya hain?' }
      ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showLeadForm]);

  useEffect(() => {
    if (initialMessage) {
      handleUserSend(initialMessage);
    }
  }, [initialMessage]);

  const generateBotReply = (userQuery) => {
    const q = userQuery.toLowerCase();

    if (q.includes('restaurant') || q.includes('food') || q.includes('cafe')) {
      return `Bhai, simple website se kaam chal jayega…\nbut hum thoda aur Awara kar sakte hain. 😎\n\nWebsite + WhatsApp enquiry + menu + live table booking flow bana sakte hain.\n\nStarting ₹14,999 se.\n\nKya aapka restaurant already online hai? Ya fresh banana hai?`;
    }
    if (q.includes('clinic') || q.includes('doctor') || q.includes('hospital')) {
      return `Doctor sahab ke liye bulletproof system ready hai! 🩺\n\nPatient slot book karega → instant WhatsApp token & reminder chala jayega → 80% no-shows khatam.\n\nReceptionist ka 3 ghanta roz bachega!`;
    }
    if (q.includes('real estate') || q.includes('property') || q.includes('builder')) {
      return `Real estate mein speed hi sab kuch hai! 🏢\n\nJaise hi brochure download karega user → AI bot WhatsApp pe number verify karke 30 seconds mein sales agent ko ping kar dega. Lead kabhi cold nahi hogi!`;
    }
    if (q.includes('website')) {
      return `Bhai, hamari websites sirf sundar nahi hoti — super fast (React + Vite), mobile-first aur high-converting hoti hain.\n\nStarter Plan ₹14,999 mein 5-page responsive site + WhatsApp integration ready ho jati hai 4-7 din mein! 🔥`;
    }
    if (q.includes('ai') || q.includes('chatbot') || q.includes('bot')) {
      return `Main khud ek AI Chatbot hoon! 🤖\nHum aisa custom bot banate hain jo aapke business policies aur pricing ko learn karke 24/7 client se naturally baat kare aur direct leads capture kare.\n\nRaat ke 2 baje bhi customer ko reply milega!`;
    }
    if (q.includes('whatsapp')) {
      return `Official WhatsApp Cloud API flows setup karte hain bhai! 💬\n\nAutomated instant reply, catalog browsing, payment link delivery aur CRM sync. Sab bina single manual phone tap ke.`;
    }
    if (q.includes('n8n') || q.includes('workflow') || q.includes('manual') || q.includes('copy')) {
      return `n8n hamara secret weapon hai! ⚙️\n\nAapke saare apps (Sheets, WhatsApp, CRM, Slack, Stripe) aapas mein connect ho jate hain. 'Ctrl+C Ctrl+V' ko permanent retirement de do!`;
    }
    if (q.includes('pricing') || q.includes('cost') || q.includes('paisa') || q.includes('kitna')) {
      return `Zero hidden charges! 💰\n\n1. STARTER: ₹14,999 (5-page website + WhatsApp form)\n2. GROWTH: ₹29,999 (Website + AI Bot + WhatsApp + Email + n8n)\n3. AUTOMATE: ₹59,999+ (Custom full enterprise pipelines)\n\nKonsa plan explore karna hai?`;
    }

    return `Samajh gaya bhai! Ye problem 100% automate ho sakti hai. ⚡\n\nHum custom workflow aur website connect karke ise autopilot pe daal sakte hain.\n\nNeeche 'Get Awara\\'d' pe click karke 2 details daalo, Shivam seedha blueprint send karega!`;
  };

  const handleUserSend = (text) => {
    if (!text.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: 'Just now'
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateBotReply(text);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: reply,
          time: 'Just now'
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setLeadSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#FF4D00', '#111111', '#1F8F5F', '#FFD700']
    });

    const textMsg = `Bhai Shivam!%20Awara%20AI%20se%20lead%20aayi%20hai!%20Naam:%20${encodeURIComponent(leadData.name)}.%20Business:%20${encodeURIComponent(leadData.business)}.%20Phone:%20${encodeURIComponent(leadData.phone)}.%20Need:%20${encodeURIComponent(leadData.note || 'Full Automation')}`;

    setTimeout(() => {
      window.open(`https://wa.me/917432934247?text=${textMsg}`, '_blank');
    }, 1200);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 bg-white hover:bg-paper-light border-3 border-dark p-2 sm:pr-5 rounded-full shadow-brutal-orange-lg hover:shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all focus:outline-none"
            aria-label="Open Awara Ai Chatbot"
          >
            {/* Animated avatar pulse */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-awara-orange border-2 border-dark flex items-center justify-center text-white font-display font-black text-xl shadow-inner">
                <Bot className="w-6 h-6 animate-wiggle" />
              </div>
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-awara-green border-2 border-dark rounded-full animate-ping"></span>
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-awara-green border-2 border-dark rounded-full"></span>
            </div>

            {/* Label */}
            <div className="text-left hidden sm:block">
              <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-awara-orange uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-awara-orange"></span>
                <span>AWARA Ai • ONLINE</span>
              </div>
              <div className="text-xs font-black text-dark font-display uppercase tracking-tight">
                {isProfessional ? '"How can we scale your operations?"' : '"Bhai, kya automate karna hai?"'}
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Expanded Live Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[420px] max-h-[85vh] h-[640px] bg-paper border-4 border-dark rounded-xl shadow-brutal-xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-200">
          
          {/* Header */}
          <div className="bg-dark text-white p-4 border-b-3 border-dark flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-awara-orange border-2 border-white flex items-center justify-center text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-awara-green border-2 border-dark rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-black text-base uppercase tracking-wide">
                    AWARA Ai
                  </h3>
                  <span className="px-1.5 py-0.2 bg-awara-orange text-white text-[9px] font-mono font-bold rounded">
                    DEMO BOT
                  </span>
                </div>
                <p className="text-[11px] font-mono text-paper/70">
                  "Boring kaam machine ko de do."
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 bg-white/10 hover:bg-awara-orange text-white rounded border border-white/20 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-grid-pattern">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-awara-orange border border-dark text-white flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] p-3.5 rounded-lg border-2 border-dark text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-line ${
                    m.sender === 'user'
                      ? 'bg-awara-orange text-white shadow-sm rounded-tr-none'
                      : 'bg-white text-dark shadow-brutal rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>

                {m.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-dark text-white border border-dark flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs font-mono text-dark/70 bg-white border border-dark/30 px-3 py-2 rounded-full w-max shadow-sm">
                <span className="w-2 h-2 rounded-full bg-awara-orange animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-awara-orange animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-2 h-2 rounded-full bg-awara-orange animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                <span>Awara Ai is thinking...</span>
              </div>
            )}

            {/* Quick Action Chips */}
            {!showLeadForm && messages.length < 5 && (
              <div className="pt-2">
                <span className="text-[10px] font-mono font-bold text-dark/60 block mb-2 uppercase">
                  ⚡ Quick Prompts:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickOptions.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleUserSend(opt.query)}
                      className="px-2.5 py-1 bg-white hover:bg-awara-orange hover:text-white border border-dark text-[11px] font-bold text-dark rounded-full transition-colors shadow-sm text-left"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* In-Chat Mini Lead Form Mode */}
            {showLeadForm && (
              <div className="bg-white border-3 border-dark rounded-md p-4 shadow-brutal-orange animate-in zoom-in-95 duration-150 my-2">
                {!leadSubmitted ? (
                  <form onSubmit={handleLeadSubmit} className="space-y-2.5">
                    <div className="flex items-center justify-between border-b border-dark/15 pb-2 mb-2">
                      <span className="font-display font-black text-xs uppercase text-dark">
                        🔥 GET AWARA'D — INSTANT PIPELINE
                      </span>
                      <span className="text-[10px] font-mono text-awara-orange font-bold">
                        FAST PASS
                      </span>
                    </div>

                    <input
                      type="text"
                      required
                      placeholder="Aapka Naam"
                      value={leadData.name}
                      onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                      className="w-full px-3 py-1.5 bg-paper border border-dark rounded text-xs font-medium text-dark focus:outline-none focus:ring-1 focus:ring-awara-orange"
                    />

                    <input
                      type="text"
                      placeholder="Business / Company"
                      value={leadData.business}
                      onChange={(e) => setLeadData({ ...leadData, business: e.target.value })}
                      className="w-full px-3 py-1.5 bg-paper border border-dark rounded text-xs font-medium text-dark focus:outline-none focus:ring-1 focus:ring-awara-orange"
                    />

                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Number"
                      value={leadData.phone}
                      onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                      className="w-full px-3 py-1.5 bg-paper border border-dark rounded text-xs font-medium text-dark focus:outline-none focus:ring-1 focus:ring-awara-orange"
                    />

                    <textarea
                      rows={2}
                      placeholder="Kya automate karna hai? (e.g. WhatsApp leads, website)"
                      value={leadData.note}
                      onChange={(e) => setLeadData({ ...leadData, note: e.target.value })}
                      className="w-full px-3 py-1.5 bg-paper border border-dark rounded text-xs font-medium text-dark focus:outline-none focus:ring-1 focus:ring-awara-orange resize-none"
                    ></textarea>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-awara-orange hover:bg-awara-orange-light text-white font-black text-xs uppercase tracking-wider font-display border-2 border-dark rounded shadow-brutal flex items-center justify-center gap-2 active:scale-98"
                    >
                      <span>Chal bhai, factory mein daalte hain →</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-4 space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-awara-green mx-auto" />
                    <p className="font-bold text-xs text-dark">
                      Redirecting to WhatsApp with pre-filled specs...
                    </p>
                  </div>
                )}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Trigger for Lead Form */}
          {!showLeadForm && (
            <div className="px-4 py-2 bg-yellow-300 border-t-2 border-dark flex items-center justify-between text-xs">
              <span className="font-bold text-dark font-hand text-sm">
                Ready to automate your business?
              </span>
              <button
                onClick={() => setShowLeadForm(true)}
                className="px-3 py-1 bg-dark text-white font-mono font-bold text-[11px] rounded uppercase hover:bg-awara-orange transition-colors flex items-center gap-1"
              >
                <span>Get Awara'd</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* Input Bar */}
          <div className="p-3 bg-white border-t-3 border-dark">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUserSend(inputValue);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Poocho bhai... (e.g. restaurant website, WhatsApp bot)"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-3.5 py-2.5 bg-paper border-2 border-dark rounded text-xs sm:text-sm font-medium text-dark focus:outline-none focus:ring-2 focus:ring-awara-orange"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2.5 bg-dark hover:bg-awara-orange text-white rounded border-2 border-dark transition-colors disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
}
