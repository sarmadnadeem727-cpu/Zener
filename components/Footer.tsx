import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Globe, ExternalLink, Network } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05081A] text-white py-16 px-6 border-t border-[#00A3C1]/15">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-md bg-[#0a192f] border border-[#00A3C1]/50 p-1 flex items-center justify-center shadow-[0_0_14px_rgba(0,163,193,0.3)] group-hover:border-[#00A3C1] transition-all duration-300">
                <img
                  src="/zener-logo.jpg"
                  alt="ZENER Logo"
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-xl tracking-[0.2em] text-white group-hover:text-[#64ffda] transition-colors">
                  ZENER
                </span>
                <span className="text-[8px] font-mono tracking-[0.22em] text-[#00A3C1] uppercase">
                  A Zener Holdings Enterprise
                </span>
              </div>
            </Link>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed font-light">
              Architecting the digital foundation of global supply chains. A proud division of <strong className="text-white font-medium">Zener Holdings</strong>, connecting enterprise logistics, commodities, finance, and consumer commerce.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-zener-navy/60 border border-[#00A3C1]/30 text-[11px] font-mono text-[#64ffda]">
              <Network size={13} className="text-[#64ffda]" />
              <span>4 Connected Global Sister Platforms</span>
            </div>
          </div>

          {/* Holdings Ecosystem Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-[#00A3C1] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda]"></span>
              Holdings Group
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-white flex items-center justify-between group">
                  <span className="group-hover:text-[#64ffda] transition-colors">ZENER (SCM)</span>
                  <span className="text-[9px] font-mono text-[#64ffda] bg-[#64ffda]/10 px-1.5 py-0.5 rounded border border-[#64ffda]/20">Active</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://spicechain.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center justify-between group transition-colors"
                >
                  <span className="group-hover:text-[#64ffda] transition-colors">Spice Chain</span>
                  <ExternalLink size={12} className="text-gray-500 group-hover:text-[#64ffda] transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://mahwar.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center justify-between group transition-colors"
                >
                  <span className="group-hover:text-[#64ffda] transition-colors">Mahwar (محور)</span>
                  <ExternalLink size={12} className="text-gray-500 group-hover:text-[#64ffda] transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://streetslipp.store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center justify-between group transition-colors"
                >
                  <span className="group-hover:text-[#64ffda] transition-colors">Street Slipp</span>
                  <ExternalLink size={12} className="text-gray-500 group-hover:text-[#64ffda] transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          {/* SCM System Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-[#00A3C1]">Solutions</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">ERP Integration</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">BI & Analytics</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Inventory Planning</Link></li>
              <li><Link to="/system" className="hover:text-white transition-colors">Control Center</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-[#00A3C1]">Corporate</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/contact" className="hover:text-white transition-colors">Executive Inquiry</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Partnership Office</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Global Support</Link></li>
              <li><Link to="/builder" className="hover:text-white transition-colors">Architecture Studio</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Network Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Zener Holdings Ltd. All rights reserved. SCM & Infrastructure Division.</p>
          <div className="flex items-center space-x-6">
            <span className="text-gray-500 font-mono text-[11px]">PARENT: ZENER HOLDINGS</span>
            <span className="text-gray-600">|</span>
            <a href="#" className="flex items-center space-x-1.5 hover:text-[#64ffda] transition-colors">
              <Linkedin size={14} />
              <span>Corporate</span>
            </a>
            <a href="https://spicechain.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 hover:text-[#64ffda] transition-colors">
              <Globe size={14} />
              <span>Ecosystem Mesh</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
