import React from 'react';
import { ArrowUp, Instagram, Linkedin, MessageCircle, Mail, Coffee, Youtube } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { name: 'Services', href: '#services' },
    { name: 'Problem → Jugaad', href: '#problem-solution' },
    { name: 'Process', href: '#process' },
    { name: 'Founder', href: '#founder' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Work', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-dark text-paper border-t-4 border-dark pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-paper/15">
          
          {/* Col 1: Brand info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block bg-white p-2 rounded border-2 border-dark shadow-sm">
              <img
                src="/awara-logo.png"
                alt="Awara Factory Logo"
                className="h-10 w-auto object-contain"
              />
            </a>
            
            <p className="font-mono text-sm text-paper/70 max-w-sm font-medium">
              BUILD. AUTOMATE. GO AWARA. <br />
              Digital factory crafting high-conversion websites, WhatsApp API pipelines, AI agents and scalable n8n workflows for Indian businesses.
            </p>

            {/* Micro badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded font-mono text-xs text-awara-orange font-bold">
              <span>BHAI, YE AUTOMATIC HAI.</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-paper/50 mb-4">
              QUICK NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-paper/80 hover:text-awara-orange transition-colors uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-paper/50 mb-2">
              CONNECT WITH US
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={siteData.brand.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-awara-green text-paper rounded border border-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={siteData.brand.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-red-600 text-paper rounded border border-white/20 transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={siteData.brand.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-pink-600 text-paper rounded border border-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteData.brand.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-blue-600 text-paper rounded border border-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button
                onClick={() => onOpenContact('Footer Email')}
                className="p-3 bg-white/10 hover:bg-awara-orange text-paper rounded border border-white/20 transition-colors"
                aria-label="Email Enquiry"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenContact('Footer Kaam Shuru')}
                className="w-full py-2.5 bg-awara-orange text-white text-xs font-mono font-bold uppercase tracking-wider rounded border border-white/20 hover:bg-awara-orange-light transition-colors"
              >
                Bhai, Project Discuss Karein →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-paper/60">
          <div className="flex items-center gap-2">
            <Coffee className="w-4 h-4 text-awara-orange" />
            <span>Made with questionable amounts of coffee.</span>
          </div>

          <div>
            © {new Date().getFullYear()} Awara Factory. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                sessionStorage.removeItem('awara_garda_intro_played');
                window.location.reload();
              }}
              className="text-paper/40 hover:text-yellow-300 transition-colors flex items-center gap-1 text-[11px]"
              title="Replay Intro & Choose Vibe"
            >
              <span>🎬 Replay Intro & Vibe Choice</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white/10 hover:bg-awara-orange text-paper rounded border border-white/20 transition-colors flex items-center gap-1 text-xs"
              aria-label="Back to Top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
