import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useVibe } from '../context/VibeContext';
import VibeSwitcher from './VibeSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar({ onOpenContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { content, isProfessional } = useVibe();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: isProfessional ? 'Capabilities' : 'Services', href: '#services' },
    { name: isProfessional ? 'Regional Growth' : 'Bharat Reach 🇮🇳', href: '#regional-languages' },
    { name: isProfessional ? 'Transformation' : 'Problem → Jugaad', href: '#problem-solution' },
    { name: 'Process', href: '#process' },
    { name: 'Founder', href: '#founder' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Work', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-paper/95 backdrop-blur-md border-b-2 border-dark shadow-brutal py-2.5'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-awara-orange rounded-md shrink-0">
              <img
                src="/awara-logo.png"
                alt="Awara Factory Logo"
                className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-dark/90 hover:text-awara-orange text-xs xl:text-sm uppercase tracking-wider transition-colors duration-200 relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-awara-orange transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Right Group: Theme + Vibe Switcher + CTA */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Theme Switcher (System / Dark / Light) */}
              <div className="hidden sm:block">
                <ThemeSwitcher compact={true} />
              </div>

              {/* Quick Vibe Switcher */}
              <div className="hidden md:block">
                <VibeSwitcher compact={true} />
              </div>

              <div className="hidden 2xl:flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-[#1C1F23] border border-dark dark:border-white/20 rounded-full text-[11px] font-mono shadow-sm">
                <span className="w-2 h-2 rounded-full bg-awara-green animate-ping"></span>
                <span className="font-semibold text-dark dark:text-gray-100">{isProfessional ? 'ONLINE' : 'SHIPPING RN'}</span>
              </div>

              <button
                onClick={onOpenContact}
                data-bhai-tip="isko daba 👀"
                className="px-3.5 sm:px-5 py-2 sm:py-2.5 bg-awara-orange text-white font-bold text-xs sm:text-sm tracking-wide border-2 border-dark dark:border-white shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-1.5 sm:gap-2 rounded-sm active:bg-awara-orange-light cursor-pointer shrink-0"
              >
                <span>{content.navCta}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 bg-white dark:bg-[#1E2226] border-2 border-dark dark:border-white/20 shadow-brutal rounded-sm focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-5 h-5 text-dark dark:text-white" /> : <Menu className="w-5 h-5 text-dark dark:text-white" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-paper-dark/95 dark:bg-[#0E1012]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto pt-24">
          <div className="flex flex-col space-y-4">
            {/* Vibe selection */}
            <div className="flex items-center justify-between border-b border-dark/15 dark:border-white/10 pb-3">
              <div className="flex items-center gap-2 text-awara-orange font-mono text-xs uppercase tracking-widest font-bold">
                <Sparkles className="w-4 h-4" />
                <span>VIBE</span>
              </div>
              <VibeSwitcher />
            </div>

            {/* Theme row */}
            <div className="flex items-center justify-between border-b border-dark/15 dark:border-white/10 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-dark/70 dark:text-gray-300 font-bold">
                THEME MODE
              </span>
              <ThemeSwitcher compact={true} />
            </div>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl sm:text-3xl font-extrabold text-dark hover:text-awara-orange transition-colors flex items-center justify-between border-b border-dark/15 pb-2"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-dark/40">0{idx + 1}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 pt-6 border-t-2 border-dark flex flex-col gap-4">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenContact();
              }}
              className="w-full py-4 bg-awara-orange text-white font-extrabold text-base tracking-wider border-2 border-dark shadow-brutal flex items-center justify-center gap-3 rounded-sm active:translate-y-1"
            >
              <span>KAAM SHURU KAREIN</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href={siteData.brand.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-white text-dark font-bold text-sm tracking-wide border-2 border-dark shadow-brutal flex items-center justify-center gap-2 rounded-sm"
            >
              <MessageCircle className="w-5 h-5 text-awara-green" />
              <span>Direct WhatsApp Chat</span>
            </a>
            <div className="text-center">
              <span className="font-hand text-dark/60 text-sm">"Boring kaam system ko de do."</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
