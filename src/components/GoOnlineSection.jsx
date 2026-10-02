import React, { useState, useEffect } from 'react';
import {
  Globe, Smartphone, Bot, MessageSquare, Zap, Mail, ShoppingCart, Puzzle,
  ArrowRight, Clock, Sparkles, Rocket, CheckCircle2, Star, Package, Crown, Layers
} from 'lucide-react';

/* ══════════════════════════════════════════════
   INDIVIDUAL SERVICE PRICING — Market Standard
   ══════════════════════════════════════════════ */
const servicePricing = [
  {
    name: "LANDING PAGE",
    desc: "Single-page, high-conversion — perfect for launches & campaigns.",
    price: "₹4,999",
    timeline: "3–5 days",
    icon: "Rocket",
    features: ["Mobile-Responsive", "SEO Ready", "WhatsApp CTA", "Fast Load"],
    popular: false
  },
  {
    name: "BUSINESS WEBSITE",
    desc: "5-page professional website for your brand or business.",
    price: "₹14,999",
    timeline: "5–7 days",
    icon: "Globe",
    features: ["Up to 5 Pages", "Contact Forms", "Google Maps", "Mobile-First"],
    popular: true
  },
  {
    name: "E-COMMERCE STORE",
    desc: "Online store with product catalog, cart & payment gateway.",
    price: "₹29,999",
    timeline: "7–10 days",
    icon: "ShoppingCart",
    features: ["Product Catalog", "Payment Gateway", "Order Tracking", "Admin Panel"],
    popular: false
  },
  {
    name: "AI CHATBOT",
    desc: "Smart chatbot trained on your business — 24/7 auto-reply.",
    price: "₹9,999",
    timeline: "3–5 days",
    icon: "Bot",
    features: ["Custom Trained", "Lead Capture", "Multi-Language", "24/7 Active"],
    popular: false
  },
  {
    name: "WHATSAPP AUTOMATION",
    desc: "Auto-replies, lead capture & follow-ups via WhatsApp API.",
    price: "₹7,999",
    timeline: "3–4 days",
    icon: "MessageSquare",
    features: ["Auto-Reply", "Lead Alerts", "Broadcast", "Team Inbox"],
    popular: true
  },
  {
    name: "MOBILE APP",
    desc: "Cross-platform Android + iOS app — idea to Play Store.",
    price: "₹49,999",
    timeline: "15–25 days",
    icon: "Smartphone",
    features: ["Android + iOS", "UI/UX Design", "Push Notifications", "Store Launch"],
    popular: false
  },
  {
    name: "EMAIL AUTOMATION",
    desc: "Drip campaigns, follow-ups & nurture sequences on autopilot.",
    price: "₹5,999",
    timeline: "2–3 days",
    icon: "Mail",
    features: ["Drip Sequences", "Personalization", "Open Tracking", "Auto Follow-up"],
    popular: false
  },
  {
    name: "BUSINESS AUTOMATION",
    desc: "n8n workflows, API integrations & CRM pipelines.",
    price: "₹19,999",
    timeline: "5–7 days",
    icon: "Zap",
    features: ["n8n Workflows", "API Connect", "CRM Sync", "Multi-App"],
    popular: false
  }
];

/* ══════════════════════════════════════════════
   BUNDLED PROJECT PLANS
   ══════════════════════════════════════════════ */
const bundledPlans = [
  {
    tier: "STARTER",
    price: "₹14,999",
    period: "one-time",
    tagline: "Business ko online lao.",
    icon: "Package",
    popular: false,
    features: [
      "5-page responsive website",
      "Mobile-first modern design",
      "WhatsApp click-to-chat",
      "Lead & contact capture forms",
      "Basic SEO setup",
      "Google Maps integration",
      "7 days post-launch support"
    ]
  },
  {
    tier: "GROWTH",
    price: "₹29,999",
    period: "one-time",
    tagline: "Website ko kaam pe lagao.",
    icon: "Layers",
    popular: true,
    features: [
      "Everything in Starter",
      "8–10 page high-converting website",
      "AI Chatbot integration",
      "WhatsApp auto-reply & lead alert",
      "Email automation & drip sequence",
      "Basic n8n workflow pipeline",
      "Lead management / CRM connect",
      "Google Analytics & tracking setup",
      "15 days post-launch support"
    ]
  },
  {
    tier: "AUTOMATE",
    price: "₹59,999+",
    period: "custom scope",
    tagline: "Boring kaam machine ko de do.",
    icon: "Crown",
    popular: false,
    features: [
      "Fully custom web architecture",
      "Advanced custom-trained AI chatbot",
      "Full WhatsApp automation flows",
      "Multi-stage email automation",
      "Complex n8n workflow orchestrations",
      "Custom API & CRM integrations",
      "Multi-member lead routing",
      "Multi-channel automated follow-ups",
      "Advanced analytics dashboard",
      "30 days dedicated support"
    ]
  }
];

const iconComponents = {
  Rocket, Globe, ShoppingCart, Bot, MessageSquare, Smartphone, Mail, Zap,
  Package, Layers, Crown
};

export default function GoOnlineSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('services'); // 'services' | 'bundles'
  const { content, isProfessional } = useVibe();
  const goData = content.goOnline;

  return (
    <>

      {/* ══════ MAIN PRICING SECTION ══════ */}
      <section id="pricing" className="py-24 sm:py-32 bg-dark relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,77,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,0,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── Section Header ── */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-red-600/20 border-2 border-red-500 rounded-full mb-6 animate-pulse">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
              </span>
              <span className="text-red-400 text-xs font-mono font-bold uppercase tracking-widest">
                {goData.badge}
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white font-display leading-[0.95] mb-6">
              {goData.title1}<br />
              <span className="text-awara-orange">{goData.title2}</span>
            </h2>

            <p className="max-w-2xl mx-auto text-white/60 text-base sm:text-lg font-medium mb-4">
              {goData.sub}
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm font-mono">
              <Clock className="w-4 h-4 text-awara-orange" />
              <span>{goData.deliveryText}</span>
            </div>
          </div>

          {/* ── Tab Switcher ── */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/5 border-2 border-white/10 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('services')}
                className={`px-5 sm:px-8 py-2.5 rounded-md text-sm font-bold font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'services'
                    ? 'bg-awara-orange text-dark shadow-lg'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {goData.tabServices}
              </button>
              <button
                onClick={() => setActiveTab('bundles')}
                className={`px-5 sm:px-8 py-2.5 rounded-md text-sm font-bold font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'bundles'
                    ? 'bg-awara-orange text-dark shadow-lg'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {goData.tabBundles}
              </button>
            </div>
          </div>

          {/* ═══════════════════════════════════
              TAB 1: INDIVIDUAL SERVICE PRICING
              ═══════════════════════════════════ */}
          {activeTab === 'services' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
                {servicePricing.map((srv, idx) => {
                  const IconComp = iconComponents[srv.icon] || Globe;
                  return (
                    <div
                      key={idx}
                      onClick={() => onOpenContact(srv.name)}
                      className={`relative bg-white/5 backdrop-blur-sm border-2 rounded-lg p-5 flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:-translate-y-1 ${
                        srv.popular
                          ? 'border-awara-orange hover:bg-awara-orange/10 hover:shadow-lg hover:shadow-awara-orange/20'
                          : 'border-white/10 hover:border-awara-orange/50 hover:bg-white/10'
                      }`}
                    >
                      {srv.popular && (
                        <div className="absolute -top-2.5 right-3 flex items-center gap-1 bg-awara-orange text-dark px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase shimmer">
                          <Star className="w-3 h-3 fill-dark" />
                          POPULAR
                        </div>
                      )}

                      <div>
                        <div className="flex items-center gap-2.5 mb-3">
                          <div className="p-2 bg-awara-orange/10 border border-awara-orange/30 rounded-md group-hover:bg-awara-orange group-hover:border-awara-orange transition-colors">
                            <IconComp className="w-4 h-4 text-awara-orange group-hover:text-dark transition-colors" />
                          </div>
                          <h3 className="text-sm font-extrabold uppercase tracking-wide text-white font-display">
                            {srv.name}
                          </h3>
                        </div>

                        <p className="text-xs text-white/50 font-medium leading-relaxed mb-3">
                          {srv.desc}
                        </p>

                        <div className="space-y-1 mb-4">
                          {srv.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-[11px] font-mono text-white/60">
                              <CheckCircle2 className="w-3 h-3 text-awara-green shrink-0" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10">
                        <div className="flex items-end justify-between">
                          <div>
                            <span className="text-2xl font-black text-awara-orange font-display">{srv.price}</span>
                            <span className="text-[10px] text-white/40 font-mono ml-1">onwards</span>
                          </div>
                          <div className="flex items-center gap-1 text-[10px] text-white/40 font-mono">
                            <Clock className="w-3 h-3" />
                            {srv.timeline}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════
              TAB 2: BUNDLED PROJECT PLANS
              ═══════════════════════════════════ */}
          {activeTab === 'bundles' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8">
              {bundledPlans.map((plan, idx) => {
                const IconComp = iconComponents[plan.icon] || Package;
                return (
                  <div
                    key={idx}
                    onClick={() => onOpenContact(`${plan.tier} Plan`)}
                    className={`relative bg-white/5 backdrop-blur-sm border-2 rounded-xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:-translate-y-1 ${
                      plan.popular
                        ? 'border-awara-orange bg-awara-orange/5 hover:bg-awara-orange/10 hover:shadow-lg hover:shadow-awara-orange/20'
                        : 'border-white/10 hover:border-awara-orange/50 hover:bg-white/10'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-awara-orange text-dark px-4 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider shimmer">
                        <Star className="w-3.5 h-3.5 fill-dark" />
                        MOST POPULAR
                      </div>
                    )}

                    <div>
                      {/* Plan header */}
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">PLAN</span>
                        <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-white/50 rounded uppercase">
                          {plan.period}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-display mb-2">
                        {plan.tier}
                      </h3>

                      <div className="mb-3">
                        <span className="text-3xl sm:text-4xl font-black text-awara-orange font-display">{plan.price}</span>
                      </div>

                      <p className="text-sm font-hand font-bold text-awara-orange/80 mb-6 italic">
                        "{goData.bundles?.[idx]?.tagline || plan.tagline}"
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {(goData.bundles?.[idx]?.features || plan.features).map((f, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-white/70">
                            <CheckCircle2 className="w-4 h-4 text-awara-green shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      className={`w-full py-3 rounded-lg font-bold text-sm uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all ${
                        plan.popular
                          ? 'bg-awara-orange text-dark hover:bg-white'
                          : 'bg-white/10 text-white border border-white/20 hover:bg-awara-orange hover:text-dark hover:border-awara-orange'
                      }`}
                    >
                      {isProfessional ? `SELECT ${plan.tier}` : `${plan.tier} LO`}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* ── Custom Plan Card (always visible) ── */}
          <div className="bg-gradient-to-r from-awara-orange/10 via-awara-orange/5 to-awara-orange/10 border-2 border-dashed border-awara-orange/50 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-awara-orange rounded-lg shrink-0">
                <Puzzle className="w-6 h-6 text-dark" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-display mb-1">
                  {goData.customTitle}
                </h3>
                <p className="text-white/60 text-sm font-medium max-w-lg">
                  {goData.customDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Website + Chatbot", "App + Automation", "Full Digital Setup", "Custom Workflow"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/50 text-[10px] font-mono rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={() => onOpenContact('Custom Plan')}
              className="px-6 py-3 bg-awara-orange hover:bg-white text-dark font-extrabold text-sm uppercase tracking-wider font-mono border-2 border-awara-orange rounded-lg shadow-lg hover:shadow-awara-orange/30 transition-all shrink-0 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {goData.customCta}
            </button>
          </div>

          {/* ── Trust footer ── */}
          <p className="text-center mt-8 text-white/30 text-xs font-mono">
            {goData.trustFooter}
          </p>
        </div>
      </section>
    </>
  );
}
