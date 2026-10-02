import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import MeetAwaraAi from './components/MeetAwaraAi';
import Intro from './components/Intro';
import Services from './components/Services';
import GoOnlineSection from './components/GoOnlineSection';
import ProblemSolution from './components/ProblemSolution';
import Process from './components/Process';
import Founder from './components/Founder';
import Industries from './components/Industries';
import Support from './components/Support';
import Portfolio from './components/Portfolio';
import WhyAwara from './components/WhyAwara';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import AwaraAiChatbot from './components/AwaraAiChatbot';
import FactoryStamp from './components/FactoryStamp';
import BhaiCursorTooltip from './components/BhaiCursorTooltip';
import SystemAnnotations from './components/SystemAnnotations';
import AreYouSureModal from './components/AreYouSureModal';
import AwaraEasterEgg from './components/AwaraEasterEgg';
import GardaIntro from './components/GardaIntro';
import ScrollReveal from './components/ScrollReveal';
import NewIdeaFlashPopup from './components/NewIdeaFlashPopup';
import RegionalLanguageSection from './components/RegionalLanguageSection';
import { VibeProvider, useVibe } from './context/VibeContext';
import { ThemeProvider } from './context/ThemeContext';

function MainApp() {
  const { vibe, isProfessional } = useVibe();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [prefillInterest, setPrefillInterest] = useState('');
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [botInitialMessage, setBotInitialMessage] = useState('');
  const [stampText, setStampText] = useState(null);
  const [areYouSureState, setAreYouSureState] = useState({ isOpen: false, onProceed: null });

  const handleOpenContact = (interest = '') => {
    setPrefillInterest(interest);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    setPrefillInterest('');
  };

  const handleOpenFloatingBot = (customPrompt = '') => {
    if (customPrompt) {
      setBotInitialMessage(customPrompt);
    }
    setIsBotOpen(true);
  };

  const triggerStamp = (text = "AWARA'D") => {
    setStampText(text);
  };

  const openAreYouSure = (proceedCallback) => {
    setAreYouSureState({
      isOpen: true,
      onProceed: proceedCallback
    });
  };

  const handleAreYouSureProceed = () => {
    if (areYouSureState.onProceed) {
      areYouSureState.onProceed();
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-paper dark:bg-[#0c0d0e] text-dark dark:text-[#F3F4F6] selection:bg-awara-orange selection:text-white relative font-sans transition-colors duration-300 vibe-${vibe}`}>
      
      {/* 44. Cinematic "AB GARDA UDEGA BHAIYA" Intro */}
      <GardaIntro />

      {/* Desktop Only Subtle Cursor Tooltip */}
      <BhaiCursorTooltip />

      {/* Scroll-Reactive HUD Micro-Annotations */}
      <SystemAnnotations />

      {/* Industrial Factory Rubber Stamp Animation Overlay */}
      <FactoryStamp
        stampText={stampText}
        onClear={() => setStampText(null)}
      />

      {/* Secret Konami Keyboard Easter Egg (type AWARA) */}
      <AwaraEasterEgg
        onOpenBot={handleOpenFloatingBot}
        onOpenContact={handleOpenContact}
        onTriggerStamp={triggerStamp}
      />

      {/* Are You Sure Smart CTA Interceptor Modal */}
      <AreYouSureModal
        isOpen={areYouSureState.isOpen}
        onClose={() => setAreYouSureState({ isOpen: false, onProceed: null })}
        onProceed={handleAreYouSureProceed}
      />

      {/* Sticky Top Navbar */}
      <Navbar onOpenContact={() => handleOpenContact('General Project')} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section + Control Room + Bholu Button */}
        <Hero
          onOpenContact={() => handleOpenContact('Hero CTA')}
          onOpenAwaraAi={handleOpenFloatingBot}
          onTriggerStamp={triggerStamp}
          onOpenAreYouSure={openAreYouSure}
        />

        {/* 2. Scrolling Marquee */}
        <Marquee />

        {/* 3. MEET AWARA AI — Live Intelligence Showcase */}
        <ScrollReveal>
          <MeetAwaraAi onOpenFloatingBot={handleOpenFloatingBot} />
        </ScrollReveal>

        {/* 4. Core Intro / Philosophy */}
        <ScrollReveal>
          <Intro />
        </ScrollReveal>

        {/* 5. Core Services Grid */}
        <ScrollReveal>
          <Services onOpenContact={handleOpenContact} />
        </ScrollReveal>

        {/* 5.5 GO ONLINE IN 7 DAYS — Unified Pricing */}
        <ScrollReveal>
          <GoOnlineSection onOpenContact={handleOpenContact} />
        </ScrollReveal>

        {/* 6. Problem → Jugaad → Result */}
        <ScrollReveal direction="left">
          <ProblemSolution onTriggerStamp={triggerStamp} />
        </ScrollReveal>

        {/* 7. How It Works / Process */}
        <ScrollReveal>
          <Process onOpenContact={handleOpenContact} />
        </ScrollReveal>

        {/* 8. Founder Section (Shivam) */}
        <ScrollReveal direction="right">
          <Founder onOpenContact={handleOpenContact} />
        </ScrollReveal>

        {/* 9. Who We Work With / Industries */}
        <ScrollReveal>
          <Industries onOpenContact={handleOpenContact} />
        </ScrollReveal>

        {/* 10. Monthly Support & Infrastructure */}
        <ScrollReveal>
          <Support onOpenContact={handleOpenContact} />
        </ScrollReveal>

        {/* 11. Demos & Work Portfolio */}
        <ScrollReveal>
          <Portfolio onOpenContact={handleOpenContact} />
        </ScrollReveal>

        {/* 12. Why Awara Factory vs Normal Agencies */}
        <ScrollReveal>
          <WhyAwara onOpenContact={handleOpenContact} />
        </ScrollReveal>

        {/* 12.5 BHARAT FIRST: Regional Language Compliance & Growth (8+ Indic Languages) */}
        <ScrollReveal>
          <RegionalLanguageSection onOpenContact={handleOpenContact} />
        </ScrollReveal>

        {/* 13. FAQ Accordion */}
        <ScrollReveal>
          <FAQ onOpenContact={handleOpenContact} />
        </ScrollReveal>

        {/* 14. Signature Scrolling Marquee */}
        <Marquee />

        {/* 15. Enormous Final CTA */}
        <ScrollReveal distance={80} duration={1}>
          <FinalCTA
            onOpenContact={handleOpenContact}
            onOpenAreYouSure={openAreYouSure}
          />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Live Awara AI Floating Widget */}
      <AwaraAiChatbot
        isOpen={isBotOpen}
        setIsOpen={setIsBotOpen}
        initialMessage={botInitialMessage}
      />

      {/* Page 1 Flashing "Naya Idea Hai?" Popup */}
      <NewIdeaFlashPopup />

      {/* Interactive Contact & Blueprint Lead Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        prefillInterest={prefillInterest}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <VibeProvider>
        <MainApp />
      </VibeProvider>
    </ThemeProvider>
  );
}
