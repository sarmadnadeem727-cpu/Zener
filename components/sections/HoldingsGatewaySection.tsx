import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight, ExternalLink, Globe2, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react';
import SnapSection from '../layout/SnapSection';

const HoldingsGatewaySection: React.FC = () => {
  const sisterNodes = [
    {
      name: "Spice Chain",
      role: "Global Spice Operating System",
      category: "Commodities & Agri",
      url: "https://spicechain.vercel.app/",
      accent: "text-amber-400 border-amber-400/40",
      icon: Globe2
    },
    {
      name: "Mahwar (محور)",
      role: "GCC Financial & SCM Terminal",
      category: "FinTech & Analytics",
      url: "https://mahwar.vercel.app/",
      accent: "text-emerald-400 border-emerald-400/40",
      icon: TrendingUp
    },
    {
      name: "Street Slipp",
      role: "D2C Streetwear & Footwear",
      category: "Consumer Lifestyle",
      url: "https://streetslipp.store/",
      accent: "text-cyan-300 border-cyan-400/40",
      icon: ShoppingBag
    }
  ];

  return (
    <SnapSection className="bg-zener-navy relative overflow-hidden py-16">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #64ffda 1px, transparent 1px),
                            linear-gradient(to bottom, #64ffda 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zener-dark/80 border border-zener-cyan/30 text-xs font-mono text-zener-cyan tracking-widest uppercase mb-4"
        >
          <Building2 size={13} className="text-zener-cyan" />
          <span>PARENT CONGLOMERATE</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold text-white mb-4"
        >
          A <span className="text-zener-cyan">Zener Holdings</span> Enterprise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-zener-text-muted max-w-2xl mx-auto mb-8 font-light"
        >
          ZENER Digital SCM Solutions operates as the central infrastructure division of <strong>Zener Holdings</strong>, synchronizing alongside our specialized sister companies.
        </motion.p>

        {/* 3 Sister Nodes Preview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
          {sisterNodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <motion.a
                key={node.name}
                href={node.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -3 }}
                className="p-4 sm:p-5 rounded-xl bg-zener-dark/70 border border-zener-border hover:border-zener-cyan/50 backdrop-blur transition-all group block shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg bg-zener-navy border ${node.accent.split(' ')[1]}`}>
                    <Icon className={`w-4 h-4 ${node.accent.split(' ')[0]}`} />
                  </div>
                  <ExternalLink size={14} className="text-zener-text-muted group-hover:text-zener-cyan transition-colors" />
                </div>
                <div className="text-[10px] font-mono uppercase text-zener-text-muted mb-1">{node.category}</div>
                <div className="text-base font-bold text-white group-hover:text-zener-cyan transition-colors mb-1">{node.name}</div>
                <div className="text-xs text-zener-text-muted line-clamp-1">{node.role}</div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA to Dedicated Holdings Page */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="inline-block"
        >
          <Link
            to="/holdings"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-zener-cyan text-zener-dark font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_25px_rgba(100,255,218,0.3)] group"
          >
            <span>Explore Dedicated Holdings Group Portal</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </SnapSection>
  );
};

export default HoldingsGatewaySection;
