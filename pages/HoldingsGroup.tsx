import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, ArrowRight, ShieldCheck, Cpu, Globe2, 
  ShoppingBag, Database, TrendingUp, Sparkles, Building2, 
  CheckCircle2, Network, ChevronRight, Layers, Award, BarChart3
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';

interface GroupEntity {
  id: string;
  name: string;
  nativeName?: string;
  role: string;
  domain: string;
  category: string;
  url: string;
  isExternal: boolean;
  statusBadge: string;
  tagline: string;
  description: string;
  capabilities: string[];
  metrics: { label: string; value: string }[];
  accentBorder: string;
  glowColor: string;
  accentText: string;
  badgeBg: string;
  icon: React.ComponentType<{ className?: string }>;
  logo?: string;
}

const subsidiaries: GroupEntity[] = [
  {
    id: "zener-scm",
    name: "ZENER",
    role: "Digital Supply Chain & Enterprise Infrastructure",
    domain: "zener.holdings",
    category: "ENTERPRISE SCM TECH",
    url: "/",
    isExternal: false,
    statusBadge: "CORE OPERATING ENTITY",
    tagline: "Architecting the digital foundation of modern supply chains",
    description: "The technological cornerstone of Zener Holdings. Unifying disparate ERP environments (SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics) into a high-throughput, real-time operational backbone with automated decision intelligence.",
    capabilities: [
      "Universal ERP Connectors & System Interconnect",
      "Real-Time BI Telemetry & Control Center",
      "Predictive Inventory & Replenishment Logic",
      "High-Availability Cloud Architecture"
    ],
    metrics: [
      { label: "Architecture", value: "Cloud Native" },
      { label: "Integrations", value: "SAP / Oracle" },
      { label: "Telemetry", value: "Sub-second" }
    ],
    accentBorder: "border-zener-cyan",
    glowColor: "rgba(100, 255, 218, 0.25)",
    accentText: "text-zener-cyan",
    badgeBg: "bg-zener-cyan/10 border-zener-cyan/30 text-zener-cyan",
    icon: Database,
    logo: "/logo.png"
  },
  {
    id: "spice-chain",
    name: "Spice Chain",
    role: "Global Commodity Operating System",
    domain: "spicechain.vercel.app",
    category: "AGRI & COMMODITY TRADE",
    url: "https://spicechain.vercel.app/",
    isExternal: true,
    statusBadge: "VERIFIED ACTIVE NODE",
    tagline: "The Global Operating System for Spices & Food Trade",
    description: "Modernizing the multi-billion dollar international spice and agricultural commodity trade. Provides farm-to-port traceability, verifiable quality compliance, transparent spot contracts, and intelligent logistics orchestration.",
    capabilities: [
      "Farm-to-Port Batch Traceability",
      "Global Trade Corridor Optimization",
      "Live Commodity Market Transparency",
      "Quality Certification & Compliance"
    ],
    metrics: [
      { label: "Coverage", value: "Global Corridors" },
      { label: "Traceability", value: "Batch-Level" },
      { label: "Deployment", value: "Vercel Cloud" }
    ],
    accentBorder: "border-amber-400",
    glowColor: "rgba(251, 191, 36, 0.25)",
    accentText: "text-amber-400",
    badgeBg: "bg-amber-400/10 border-amber-400/30 text-amber-400",
    icon: Globe2
  },
  {
    id: "mahwar",
    name: "Mahwar",
    nativeName: "محور",
    role: "Finance & SCM Intelligence Terminal",
    domain: "mahwar.vercel.app",
    category: "FINTECH & CAPITAL ANALYTICS",
    url: "https://mahwar.vercel.app/",
    isExternal: true,
    statusBadge: "TERMINAL v6.0 ACTIVE",
    tagline: "The axis where capital meets logistics in GCC markets",
    description: "An institutional Bloomberg-style command terminal built specifically for GCC capital markets and corporate logistics. Integrates 48 computation engines including DCF, LBO, AAOIFI Shariah screening, and cash conversion models.",
    capabilities: [
      "48 Financial & Supply Chain Analytics Engines",
      "Full Bilingual Terminal (English & Arabic RTL)",
      "AAOIFI Shariah Compliance Screener",
      "Audited PDF & XLSX Financial Exports"
    ],
    metrics: [
      { label: "Engines", value: "48 Specialized" },
      { label: "Currencies", value: "7 GCC Covered" },
      { label: "Modelling", value: "Institutional" }
    ],
    accentBorder: "border-emerald-400",
    glowColor: "rgba(52, 211, 153, 0.25)",
    accentText: "text-emerald-400",
    badgeBg: "bg-emerald-400/10 border-emerald-400/30 text-emerald-400",
    icon: TrendingUp
  },
  {
    id: "street-slipp",
    name: "Street Slipp",
    role: "Direct-to-Consumer Urban Apparel & Footwear",
    domain: "streetslipp.store",
    category: "D2C RETAIL & LIFESTYLE",
    url: "https://streetslipp.store/",
    isExternal: true,
    statusBadge: "LIVE GLOBAL STORE",
    tagline: "The Only Vibe That Matters · Urban Lifestyle Commerce",
    description: "High-energy direct-to-consumer streetwear and slide footwear brand. Backed by Zener Holdings agile supply chains, on-demand inventory pipelines, and synchronized international consumer delivery.",
    capabilities: [
      "Agile Just-In-Time Footwear Production",
      "High-Velocity Consumer E-Commerce",
      "Direct Global Fulfillment Infrastructure",
      "Trend-Driven Streetwear Drops"
    ],
    metrics: [
      { label: "Model", value: "Direct-to-Consumer" },
      { label: "Fulfillment", value: "Agile Pipeline" },
      { label: "Channel", value: "Global Digital" }
    ],
    accentBorder: "border-cyan-400",
    glowColor: "rgba(34, 211, 238, 0.25)",
    accentText: "text-cyan-300",
    badgeBg: "bg-cyan-400/10 border-cyan-400/30 text-cyan-300",
    icon: ShoppingBag
  }
];

const HoldingsGroup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredSubsidiaries = activeTab === "all" 
    ? subsidiaries 
    : subsidiaries.filter(s => s.id === activeTab);

  return (
    <PageLayout>
      <div className="bg-zener-dark min-h-screen text-white pt-24 pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Subtle Background Mesh */}
        <div 
          className="absolute inset-0 z-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 20%, rgba(100, 255, 218, 0.18), transparent 70%),
                              linear-gradient(to right, rgba(100, 255, 218, 0.04) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(100, 255, 218, 0.04) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 40px 40px, 40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Holdings Hero Section */}
          <div className="text-center max-w-4xl mx-auto pt-6 pb-12 sm:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zener-navy/90 border border-zener-cyan/40 text-xs font-mono text-zener-cyan tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(100,255,218,0.2)]"
            >
              <Sparkles size={13} className="text-zener-cyan" />
              <span>PARENT CONGLOMERATE HEADQUARTERS</span>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zener-navy border-2 border-zener-cyan/60 p-2.5 flex items-center justify-center shadow-[0_0_30px_rgba(100,255,218,0.35)]">
                <img src="/logo.png" alt="Zener Holdings Logo" className="w-full h-full object-contain" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6"
            >
              ZENER <span className="text-zener-cyan">HOLDINGS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl text-zener-text-muted leading-relaxed font-light max-w-3xl mx-auto mb-8"
            >
              Zener Holdings is a strategic parent conglomerate uniting mission-critical enterprise supply chain technology, global agricultural commodity networks, bilingual financial intelligence, and modern direct-to-consumer commerce.
            </motion.p>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-xl bg-zener-navy/50 border border-zener-border/80 backdrop-blur max-w-3xl mx-auto"
            >
              <div className="text-center p-2">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white">4</div>
                <div className="text-[10px] sm:text-xs font-mono text-zener-text-muted uppercase">Specialized Groups</div>
              </div>
              <div className="text-center p-2 border-l border-white/10">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-zener-cyan">48+</div>
                <div className="text-[10px] sm:text-xs font-mono text-zener-text-muted uppercase">Analytics Engines</div>
              </div>
              <div className="text-center p-2 border-l border-white/10">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-amber-400">100%</div>
                <div className="text-[10px] sm:text-xs font-mono text-zener-text-muted uppercase">Traceable SCM</div>
              </div>
              <div className="text-center p-2 border-l border-white/10">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400">Live</div>
                <div className="text-[10px] sm:text-xs font-mono text-zener-text-muted uppercase">Network Mesh</div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Filter Tabs for Mobile & Desktop */}
          <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-zener-cyan text-zener-dark font-bold shadow-[0_0_15px_rgba(100,255,218,0.3)]"
                  : "bg-zener-navy/60 text-zener-text-muted border border-zener-border hover:text-white"
              }`}
            >
              All Portfolio (4)
            </button>
            {subsidiaries.map(sub => (
              <button
                key={sub.id}
                onClick={() => setActiveTab(sub.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === sub.id
                    ? "bg-zener-cyan text-zener-dark font-bold shadow-[0_0_15px_rgba(100,255,218,0.3)]"
                    : "bg-zener-navy/60 text-zener-text-muted border border-zener-border hover:text-white"
                }`}
              >
                {sub.name}
              </button>
            ))}
          </div>

          {/* Group Companies Detailed Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredSubsidiaries.map((sub, index) => {
              const Icon = sub.icon;

              return (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-zener-navy/40 backdrop-blur-md border ${sub.accentBorder}/50 hover:${sub.accentBorder} rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group shadow-2xl overflow-hidden`}
                  style={{
                    boxShadow: `0 15px 35px -15px ${sub.glowColor}`
                  }}
                >
                  {/* Subtle top color stripe */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ background: `linear-gradient(90deg, transparent, ${sub.glowColor}, transparent)` }}
                  />

                  <div>
                    {/* Header: Logo, Name & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-3">
                        {sub.logo ? (
                          <div className="w-12 h-12 rounded-xl bg-zener-navy border border-zener-cyan/50 p-1 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(100,255,218,0.25)]">
                            <img src={sub.logo} alt={sub.name} className="w-full h-full object-contain rounded" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-zener-dark border border-white/10 flex items-center justify-center shrink-0">
                            <Icon className={`w-6 h-6 ${sub.accentText}`} />
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-zener-cyan transition-colors">
                              {sub.name}
                            </h2>
                            {sub.nativeName && (
                              <span className="text-sm font-serif text-emerald-400 font-normal">
                                ({sub.nativeName})
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-mono text-zener-text-muted">
                            {sub.domain}
                          </span>
                        </div>
                      </div>

                      <span className={`text-[10px] font-mono px-3 py-1 rounded-full border ${sub.badgeBg}`}>
                        {sub.statusBadge}
                      </span>
                    </div>

                    {/* Tagline */}
                    <div className="mb-4">
                      <span className="text-xs font-mono uppercase tracking-widest text-zener-cyan/80 block mb-1">
                        {sub.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-white/90">
                        {sub.tagline}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zener-text-muted leading-relaxed mb-6 font-light">
                      {sub.description}
                    </p>

                    {/* Key Capabilities Bullet Points */}
                    <div className="space-y-2.5 mb-6">
                      <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                        Core Capabilities:
                      </span>
                      {sub.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-zener-text/90">
                          <CheckCircle2 size={14} className={`${sub.accentText} shrink-0 mt-0.5`} />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics Strip */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-lg bg-zener-dark/70 border border-white/5 mb-6">
                      {sub.metrics.map((m, i) => (
                        <div key={i} className="text-center">
                          <div className="text-[9px] font-mono text-gray-500 uppercase">{m.label}</div>
                          <div className="text-xs sm:text-sm font-mono font-bold text-white truncate">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Launch / Visit CTA */}
                  <div className="pt-4 border-t border-white/10">
                    {sub.isExternal ? (
                      <a
                        href={sub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-5 rounded-lg bg-zener-navy hover:bg-white text-white hover:text-zener-dark text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center justify-between border border-white/15 hover:border-white shadow-lg group/btn"
                      >
                        <span>Launch {sub.name} Platform</span>
                        <ExternalLink size={16} className={`${sub.accentText} group-hover/btn:text-zener-dark group-hover/btn:translate-x-1 transition-all`} />
                      </a>
                    ) : (
                      <Link
                        to={sub.url}
                        className="w-full py-3 px-5 rounded-lg bg-zener-cyan text-zener-dark hover:bg-white text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center justify-between shadow-[0_0_20px_rgba(100,255,218,0.3)] group/btn"
                      >
                        <span>Explore ZENER Digital SCM</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Cross-Group Synergy Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-zener-navy/50 border border-zener-border rounded-2xl p-6 sm:p-10 mb-16 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <Network size={22} className="text-zener-cyan" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Conglomerate Ecosystem Architecture</h3>
                <p className="text-xs sm:text-sm text-zener-text-muted">How Zener Holdings aligns Capital, Infrastructure, Commodities, and Commerce</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-zener-dark/80 border border-zener-border">
                <span className="text-[10px] font-mono text-zener-cyan uppercase block mb-1">Layer 1 · Backbone</span>
                <h4 className="font-bold text-white text-sm mb-2">ZENER SCM</h4>
                <p className="text-xs text-zener-text-muted">Universal ERP connectors, data pipelines, and telemetry feeding operations across all sister groups.</p>
              </div>

              <div className="p-4 rounded-xl bg-zener-dark/80 border border-zener-border">
                <span className="text-[10px] font-mono text-amber-400 uppercase block mb-1">Layer 2 · Commodities</span>
                <h4 className="font-bold text-white text-sm mb-2">Spice Chain</h4>
                <p className="text-xs text-zener-text-muted">Physical spice trade corridors, farm-to-port tracking, and certified supply integrity.</p>
              </div>

              <div className="p-4 rounded-xl bg-zener-dark/80 border border-zener-border">
                <span className="text-[10px] font-mono text-emerald-400 uppercase block mb-1">Layer 3 · Capital & Risk</span>
                <h4 className="font-bold text-white text-sm mb-2">Mahwar Terminal</h4>
                <p className="text-xs text-zener-text-muted">GCC financial screening, working-capital optimization, DCF modeling, and risk scoring.</p>
              </div>

              <div className="p-4 rounded-xl bg-zener-dark/80 border border-zener-border">
                <span className="text-[10px] font-mono text-cyan-300 uppercase block mb-1">Layer 4 · Consumer</span>
                <h4 className="font-bold text-white text-sm mb-2">Street Slipp</h4>
                <p className="text-xs text-zener-text-muted">Agile direct-to-consumer apparel and lifestyle retail backed by synchronized logistics.</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Holdings Corporate CTA */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-zener-navy/80 via-[#0f2342] to-zener-navy/80 border border-zener-cyan/30 max-w-3xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-3">Partner With Zener Holdings</h3>
            <p className="text-sm text-zener-text-muted max-w-lg mx-auto mb-6">
              Connect with our corporate executive team for joint ventures, strategic investments, or enterprise platform integrations across our portfolio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-zener-cyan text-zener-dark font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-all shadow-[0_0_15px_rgba(100,255,218,0.25)]"
              >
                Corporate Inquiries
              </Link>
              <Link
                to="/"
                className="w-full sm:w-auto px-8 py-3.5 bg-zener-dark border border-zener-cyan/40 text-zener-cyan font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-zener-navy transition-all"
              >
                Go to Zener SCM
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
};

export default HoldingsGroup;
