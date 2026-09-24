import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, ShieldCheck, Cpu, Globe2, ShoppingBag, Database, TrendingUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SnapSection from '../layout/SnapSection';

interface GroupCompany {
  id: string;
  name: string;
  subtitle: string;
  domain: string;
  category: string;
  url: string;
  isExternal: boolean;
  status: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  accentColor: string;
  glowColor: string;
  icon: React.ComponentType<{ className?: string }>;
  logoImage?: string;
}

const companies: GroupCompany[] = [
  {
    id: "zener",
    name: "ZENER",
    subtitle: "Digital SCM Solutions",
    domain: "zener.holdings",
    category: "ENTERPRISE SCM INFRASTRUCTURE",
    url: "/services",
    isExternal: false,
    status: "CORE SYSTEM · ACTIVE",
    description: "Architecting the mission-critical digital backbone for global supply chains. Enterprise ERP unification (SAP, Oracle, Dynamics), BI telemetry, and automated operational clarity.",
    metrics: [
      { label: "Data Pipeline", value: "Real-Time" },
      { label: "Integrations", value: "SAP / Oracle" },
      { label: "Core Node", value: "Operational" }
    ],
    tags: ["ERP Unification", "BI Analytics", "SCM Core"],
    accentColor: "border-zener-cyan text-zener-cyan",
    glowColor: "rgba(100, 255, 218, 0.2)",
    icon: Database,
    logoImage: "/zener-logo.jpg"
  },
  {
    id: "spicechain",
    name: "Spice Chain",
    subtitle: "Global Spice Operating System",
    domain: "spicechain.vercel.app",
    category: "COMMODITY SUPPLY CHAIN TECH",
    url: "https://spicechain.vercel.app/",
    isExternal: true,
    status: "DEPLOYMENT · VERIFIED",
    description: "The Global Operating System for Spices. Modernizing agricultural commodities through end-to-end traceability, verified trade corridors, and real-time market transparency.",
    metrics: [
      { label: "Trade Corridors", value: "Global" },
      { label: "Traceability", value: "Batch-Level" },
      { label: "Platform", value: "Live Web" }
    ],
    tags: ["Commodity Trade", "Food Traceability", "Smart Contracts"],
    accentColor: "border-amber-400 text-amber-400",
    glowColor: "rgba(251, 191, 36, 0.2)",
    icon: Globe2
  },
  {
    id: "mahwar",
    name: "Mahwar (محور)",
    subtitle: "Finance & Supply Chain Terminal",
    domain: "mahwar.vercel.app",
    category: "FINANCIAL & LOGISTICS INTELLIGENCE",
    url: "https://mahwar.vercel.app/",
    isExternal: true,
    status: "TERMINAL v6.0 · ACTIVE",
    description: "The axis where capital meets logistics. Bilingual institutional analytics terminal for GCC markets with 48 specialized engines: DCF, LBO, AAOIFI Shariah screening, and cash conversion models.",
    metrics: [
      { label: "Engines", value: "48 Specialized" },
      { label: "Markets", value: "GCC & Global" },
      { label: "Screening", value: "AAOIFI Compliant" }
    ],
    tags: ["GCC Capital Markets", "LBO / DCF", "Supply Analytics"],
    accentColor: "border-emerald-400 text-emerald-400",
    glowColor: "rgba(52, 211, 153, 0.2)",
    icon: TrendingUp
  },
  {
    id: "streetslipp",
    name: "Street Slipp",
    subtitle: "D2C Streetwear & Footwear",
    domain: "streetslipp.store",
    category: "CONSUMER COMMERCE & LIFESTYLE",
    url: "https://streetslipp.store/",
    isExternal: true,
    status: "STORE FRONT · LIVE",
    description: "The Only Vibe That Matters. High-velocity direct-to-consumer apparel and urban lifestyle brand powered by agile just-in-time manufacturing and next-generation retail fulfillment.",
    metrics: [
      { label: "Distribution", value: "Direct-to-Consumer" },
      { label: "Fulfillment", value: "Agile SCM" },
      { label: "Catalog", value: "Premium Street" }
    ],
    tags: ["Lifestyle Brand", "D2C Retail", "Fast Logistics"],
    accentColor: "border-cyan-400 text-cyan-300",
    glowColor: "rgba(34, 211, 238, 0.2)",
    icon: ShoppingBag
  }
];

const HoldingsEcosystemSection: React.FC = () => {
  return (
    <SnapSection className="bg-zener-dark relative overflow-hidden py-16">
      {/* Background Ambience */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 30%, rgba(100, 255, 218, 0.15), transparent 70%),
                            linear-gradient(to right, rgba(100, 255, 218, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(100, 255, 218, 0.05) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 48px 48px, 48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 my-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zener-navy/80 border border-zener-cyan/30 text-xs font-mono text-zener-cyan tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(100,255,218,0.15)]"
          >
            <Sparkles size={13} className="text-zener-cyan" />
            <span>ZENER HOLDINGS · CONGLOMERATE ECOSYSTEM</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3"
          >
            Four Companies. <span className="text-zener-cyan">One Connected Future.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zener-text-muted text-sm md:text-base leading-relaxed"
          >
            Under the strategic leadership of <strong>Zener Holdings</strong>, our specialized groups bridge enterprise infrastructure, global agricultural trade, high-finance analytics, and modern consumer commerce.
          </motion.p>
        </div>

        {/* 4 Subsidiary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {companies.map((company, index) => {
            const Icon = company.icon;

            return (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-zener-navy/40 backdrop-blur-md border border-zener-border hover:border-zener-cyan/60 rounded-xl p-5 flex flex-col justify-between transition-all duration-300 relative group shadow-lg overflow-hidden"
                style={{
                  boxShadow: `0 10px 30px -15px ${company.glowColor}`
                }}
              >
                {/* Top Glowing Edge on hover */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${company.glowColor}, transparent)` }}
                />

                <div>
                  {/* Card Header & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      {company.logoImage ? (
                        <div className="w-8 h-8 rounded bg-zener-navy border border-zener-cyan/40 p-0.5 flex items-center justify-center overflow-hidden shrink-0 shadow-[0_0_10px_rgba(100,255,218,0.2)]">
                          <img src={company.logoImage} alt={company.name} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded bg-zener-dark/80 border border-white/10 flex items-center justify-center shrink-0">
                          <Icon className={`w-4 h-4 ${company.accentColor.split(' ')[1]}`} />
                        </div>
                      )}
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-zener-cyan transition-colors">
                          {company.name}
                        </h3>
                        <span className="text-[9px] font-mono text-zener-text-muted block">
                          {company.domain}
                        </span>
                      </div>
                    </div>

                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-zener-dark/90 border border-white/10 text-zener-text-muted shrink-0">
                      {company.status.split('·')[0].trim()}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="mb-3">
                    <span className="text-[9px] font-mono tracking-widest text-zener-cyan/90 uppercase bg-zener-cyan/10 px-2 py-0.5 rounded border border-zener-cyan/20">
                      {company.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zener-text-muted leading-relaxed mb-4 line-clamp-3">
                    {company.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-1.5 py-2 px-2.5 rounded bg-zener-dark/60 border border-white/5 mb-4">
                    {company.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-[8px] font-mono text-gray-500 uppercase">{metric.label}</div>
                        <div className="text-[10px] font-mono font-semibold text-white truncate">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-2 border-t border-white/5">
                  {company.isExternal ? (
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded bg-zener-navy hover:bg-zener-cyan hover:text-zener-dark text-white text-xs font-semibold tracking-wider transition-all duration-300 flex items-center justify-between group/btn border border-white/10 hover:border-zener-cyan"
                    >
                      <span>Visit {company.name}</span>
                      <ExternalLink size={13} className="text-zener-cyan group-hover/btn:text-zener-dark group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      to={company.url}
                      className="w-full py-2 px-3 rounded bg-zener-cyan text-zener-dark hover:bg-white text-xs font-bold tracking-wider transition-all duration-300 flex items-center justify-between group/btn"
                    >
                      <span>Explore SCM Solutions</span>
                      <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Connectivity Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-zener-navy/50 border border-zener-cyan/25 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur shadow-xl"
        >
          <div className="flex items-center space-x-3 text-left">
            <div className="w-9 h-9 rounded-full bg-zener-cyan/15 border border-zener-cyan/40 flex items-center justify-center shrink-0">
              <Cpu className="w-4 h-4 text-zener-cyan animate-pulse" />
            </div>
            <div>
              <div className="text-white text-xs md:text-sm font-bold flex items-center gap-2">
                <span>Unified Holdings Network Synchronization</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zener-cyan animate-ping"></span>
              </div>
              <p className="text-[11px] text-zener-text-muted">
                Zener SCM integrates enterprise data flows, feeding intelligence to Mahwar, Spice Chain, and Street Slipp.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://spicechain.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-zener-cyan hover:underline flex items-center gap-1 px-2.5 py-1 rounded bg-zener-dark/70 border border-zener-cyan/20"
            >
              SpiceChain ↗
            </a>
            <a
              href="https://mahwar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-emerald-400 hover:underline flex items-center gap-1 px-2.5 py-1 rounded bg-zener-dark/70 border border-emerald-500/20"
            >
              Mahwar ↗
            </a>
            <a
              href="https://streetslipp.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-cyan-300 hover:underline flex items-center gap-1 px-2.5 py-1 rounded bg-zener-dark/70 border border-cyan-500/20"
            >
              StreetSlipp ↗
            </a>
          </div>
        </motion.div>

      </div>
    </SnapSection>
  );
};

export default HoldingsEcosystemSection;
