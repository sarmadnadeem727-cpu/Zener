import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ExternalLink, Globe, Layers } from 'lucide-react';

export const holdingsGroup = [
  {
    name: "ZENER SCM",
    category: "Digital SCM & Infrastructure",
    url: "/",
    isCurrent: true,
    description: "ERP integration, live telemetry & operational backbone",
    badge: "Core System"
  },
  {
    name: "Spice Chain",
    category: "Commodity Operating System",
    url: "https://spicechain.vercel.app/",
    isCurrent: false,
    description: "Global Operating System for Spices & Trade Traceability",
    badge: "Active Node"
  },
  {
    name: "Mahwar (محور)",
    category: "Finance & SCM Intelligence Terminal",
    url: "https://mahwar.vercel.app/",
    isCurrent: false,
    description: "GCC Capital Markets, 48 analytics engines & logistics terminal",
    badge: "Active Terminal"
  },
  {
    name: "Street Slipp",
    category: "D2C Streetwear & Lifestyle",
    url: "https://streetslipp.store/",
    isCurrent: false,
    description: "Premium urban lifestyle commerce & direct fulfillment",
    badge: "Active Store"
  }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setEcosystemOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'DISCOVER', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled
        ? 'bg-zener-dark/95 backdrop-blur-md border-zener-border shadow-2xl py-3.5'
        : 'bg-zener-dark/40 backdrop-blur-sm border-white/5 py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand with official Zener logo */}
        <Link to="/" className="flex items-center space-x-3 group relative z-50">
          <div className="relative">
            <div className="w-10 h-10 rounded-md bg-zener-navy/95 border border-zener-cyan/50 p-1 flex items-center justify-center shadow-[0_0_16px_rgba(100,255,218,0.25)] group-hover:border-zener-cyan group-hover:shadow-[0_0_22px_rgba(100,255,218,0.45)] transition-all duration-300 overflow-hidden">
              <img
                src="/zener-logo.jpg"
                alt="ZENER Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-xl tracking-[0.2em] text-white group-hover:text-zener-cyan transition-colors duration-300">
              ZENER
            </span>
            <span className="text-[8px] font-mono tracking-[0.25em] text-zener-cyan/90 uppercase -mt-0.5">
              Holdings Group
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative group py-2"
            >
              <span className={`text-[11px] font-bold tracking-[0.2em] transition-colors duration-300 ${pathname === link.path ? 'text-zener-cyan' : 'text-zener-text-muted group-hover:text-white'
                }`}>
                {link.name}
              </span>
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-zener-cyan transition-all duration-300 group-hover:w-full ${pathname === link.path ? 'w-full' : ''
                }`}></span>
            </Link>
          ))}

          {/* Holdings Ecosystem Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setEcosystemOpen(!ecosystemOpen)}
              onMouseEnter={() => setEcosystemOpen(true)}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded border text-[11px] font-bold tracking-[0.18em] transition-all duration-300 ${ecosystemOpen
                ? 'border-zener-cyan text-zener-cyan bg-zener-cyan/10'
                : 'border-zener-border text-zener-text/90 hover:border-zener-cyan/60 hover:text-white bg-zener-navy/40'
                }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zener-cyan animate-pulse"></span>
              <span>HOLDINGS GROUP</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${ecosystemOpen ? 'rotate-180 text-zener-cyan' : 'text-zener-text-muted'}`} />
            </button>

            {/* Dropdown Flyout */}
            <AnimatePresence>
              {ecosystemOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  onMouseLeave={() => setEcosystemOpen(false)}
                  className="absolute right-0 mt-3 w-80 bg-zener-dark/95 backdrop-blur-xl border border-zener-border/80 rounded-lg shadow-2xl p-3 space-y-1.5 z-50"
                >
                  <div className="px-3 py-2 border-b border-zener-border/40 flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-zener-text-muted uppercase">Zener Holdings Portfolio</span>
                    <span className="text-[9px] font-mono text-zener-cyan px-1.5 py-0.5 rounded bg-zener-cyan/10 border border-zener-cyan/30">4 SISTER NODES</span>
                  </div>

                  {holdingsGroup.map((group) => {
                    const Content = (
                      <div className="flex items-start justify-between w-full">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-bold text-white group-hover/item:text-zener-cyan transition-colors">
                              {group.name}
                            </span>
                            {group.isCurrent && (
                              <span className="text-[9px] font-mono text-zener-cyan bg-zener-cyan/15 px-1.5 py-0.5 rounded border border-zener-cyan/30">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-zener-text-muted mt-0.5 line-clamp-1">
                            {group.description}
                          </p>
                        </div>
                        {!group.isCurrent && (
                          <ExternalLink size={13} className="text-zener-text-muted group-hover/item:text-zener-cyan shrink-0 ml-2 mt-1 transition-colors" />
                        )}
                      </div>
                    );

                    return group.isCurrent ? (
                      <Link
                        key={group.name}
                        to="/"
                        onClick={() => setEcosystemOpen(false)}
                        className="group/item flex items-center p-2.5 rounded-md bg-zener-navy/60 border border-zener-cyan/30 hover:bg-zener-navy transition-all"
                      >
                        {Content}
                      </Link>
                    ) : (
                      <a
                        key={group.name}
                        href={group.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setEcosystemOpen(false)}
                        className="group/item flex items-center p-2.5 rounded-md hover:bg-zener-navy/60 border border-transparent hover:border-zener-border/80 transition-all"
                      >
                        {Content}
                      </a>
                    );
                  })}

                  <div className="pt-2 border-t border-zener-border/30 px-3 py-1 text-center">
                    <span className="text-[9px] font-mono text-zener-text-muted">
                      ZENER HOLDINGS · UNIFIED GLOBAL NETWORK
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/system"
            className="ml-2 px-5 py-2 border border-zener-cyan/40 text-zener-cyan text-[10px] font-bold tracking-[0.2em] hover:bg-zener-cyan hover:text-zener-dark transition-all duration-300 uppercase shadow-[0_0_12px_rgba(100,255,218,0.15)]"
          >
            System Access
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-zener-dark z-40 flex flex-col justify-center px-8 border-l border-zener-border overflow-y-auto py-20"
            >
              <div className="space-y-6 mb-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-2xl font-bold tracking-widest text-white hover:text-zener-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Holdings Ecosystem */}
              <div className="pt-6 border-t border-zener-border/60">
                <span className="text-[11px] font-mono tracking-widest text-zener-cyan uppercase block mb-4">
                  Zener Holdings Ecosystem
                </span>
                <div className="space-y-3">
                  {holdingsGroup.map((group) => (
                    group.isCurrent ? (
                      <Link
                        key={group.name}
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between p-3 rounded bg-zener-navy/60 border border-zener-cyan/30 text-white"
                      >
                        <div>
                          <div className="font-bold text-sm text-zener-cyan">{group.name} (This Site)</div>
                          <div className="text-xs text-zener-text-muted">{group.category}</div>
                        </div>
                      </Link>
                    ) : (
                      <a
                        key={group.name}
                        href={group.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded bg-zener-navy/30 border border-zener-border/50 text-white hover:border-zener-cyan/50 transition-colors"
                      >
                        <div>
                          <div className="font-bold text-sm">{group.name}</div>
                          <div className="text-xs text-zener-text-muted">{group.category}</div>
                        </div>
                        <ExternalLink size={16} className="text-zener-cyan" />
                      </a>
                    )
                  ))}
                </div>
              </div>

              <Link
                to="/system"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 px-6 py-3 border border-zener-cyan text-zener-cyan font-bold tracking-widest uppercase text-center"
              >
                System Access
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
