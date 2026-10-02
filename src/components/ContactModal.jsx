import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteData } from '../data/siteData';

export default function ContactModal({ isOpen, onClose, prefillInterest }) {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    'Custom Website',
    'AI Chatbot',
    'WhatsApp Automation',
    'Email Drip Setup',
    'n8n Workflows',
    'API & CRM Sync',
  ];

  useEffect(() => {
    if (prefillInterest) {
      if (availableServices.includes(prefillInterest)) {
        setSelectedServices([prefillInterest]);
      } else {
        setSelectedServices([prefillInterest]);
      }
    }
  }, [prefillInterest]);

  if (!isOpen) return null;

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF4D00', '#111111', '#1F8F5F', '#FFD700']
    });

    // Build WhatsApp URL with details
    const textMsg = `Bhai Shivam!%20Mera%20naam%20${encodeURIComponent(name || 'Friend')}%20hai.%20Business:%20${encodeURIComponent(businessName || 'My Business')}.%20Phone:%20${encodeURIComponent(phone || 'N/A')}.%20Mujhe%20ye%20services%20chahiye:%20${encodeURIComponent(selectedServices.join(', ') || prefillInterest || 'General Inquiry')}.%20Let's%20build!`;
    
    setTimeout(() => {
      window.open(`https://wa.me/917432934247?text=${textMsg}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/75 backdrop-blur-sm overflow-y-auto">
      <div className="bg-paper border-4 border-dark rounded-lg p-6 sm:p-8 max-w-xl w-full shadow-brutal-xl relative my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white hover:bg-dark hover:text-white border-2 border-dark rounded shadow-brutal transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-dark rounded-full text-xs font-mono font-bold text-awara-orange mb-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CHAL, BAAT KARTE HAIN</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-dark font-display leading-tight">
                BUSINESS KO AWARA BANAO ⚡
              </h3>
              <p className="text-xs sm:text-sm text-dark/70 font-medium mt-1">
                Details daalo, seedha WhatsApp pe blueprint discuss karte hain. Zero spam.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Service tags picker */}
              <div>
                <label className="block text-xs font-mono font-bold text-dark uppercase mb-2">
                  Kya Banwana Hai? (Select Services):
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableServices.map((srv) => {
                    const isSelected = selectedServices.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`px-3 py-1.5 rounded text-xs font-mono font-bold uppercase tracking-wider border-2 border-dark transition-all ${
                          isSelected
                            ? 'bg-awara-orange text-white shadow-sm -translate-y-0.5'
                            : 'bg-white text-dark hover:bg-paper-light'
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-mono font-bold text-dark uppercase mb-1">
                  Aapka Naam:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border-2 border-dark rounded text-sm font-medium text-dark focus:outline-none focus:ring-2 focus:ring-awara-orange shadow-inner"
                />
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-xs font-mono font-bold text-dark uppercase mb-1">
                  Business / Company Name:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chai Junction / Apex D2C"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border-2 border-dark rounded text-sm font-medium text-dark focus:outline-none focus:ring-2 focus:ring-awara-orange shadow-inner"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-mono font-bold text-dark uppercase mb-1">
                  WhatsApp Number:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border-2 border-dark rounded text-sm font-medium text-dark focus:outline-none focus:ring-2 focus:ring-awara-orange shadow-inner"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-awara-orange hover:bg-awara-orange-light text-white font-black text-base uppercase font-display tracking-wider border-2 border-dark rounded shadow-brutal flex items-center justify-center gap-2 transition-transform active:scale-98"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>DIRECT WHATSAPP PE MESSAGE BHEJO →</span>
                </button>
              </div>

              <div className="text-center">
                <span className="text-[11px] font-mono text-dark/60">
                  🔒 100% Privacy. Zero sales spam calls.
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 text-awara-green border-3 border-dark rounded-full flex items-center justify-center mx-auto shadow-brutal">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-3xl font-black uppercase text-dark font-display">
              BAAT PAKKI HAI! 🎉
            </h3>

            <p className="text-sm font-medium text-dark/80 max-w-sm mx-auto">
              Redirecting you to Shivam's direct WhatsApp chat right now...
            </p>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-dark text-white font-mono text-xs uppercase font-bold rounded border border-dark"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
