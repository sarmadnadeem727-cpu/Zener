import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const HeroPanel: React.FC = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0a192f]">
            {/* Background: Animated World Map Grid (Simplified for now) */}
            <div className="absolute inset-0 corporate-grid opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-transparent to-[#0a192f] z-0" />

            {/* Moving Node Lines */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-[1px] bg-[#64ffda]"
                        style={{ top: `${20 + i * 15}%`, left: '-10%', right: '-10%' }}
                        animate={{ opacity: [0, 0.5, 0], scaleX: [0.8, 1, 0.8] }}
                        transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center space-x-2 text-[#64ffda] font-mono text-sm tracking-widest mb-4">
                        <span className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse" />
                        <span>SYSTEM ONLINE</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] leading-tight mb-6">
                        Digital Supply <br />
                        Chains. <span className="text-[#64ffda]">Simplified.</span>
                    </h1>

                    <p className="text-[#8892b0] text-lg mb-8 max-w-lg leading-relaxed">
                        ZENER integrates ERP systems, BI tools, and intelligent workflows to transform operations into real-time decision systems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors rounded text-sm font-bold tracking-widest uppercase flex items-center justify-center group">
                            Explore System
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-[#112240] text-white hover:bg-[#1d3557] transition-colors rounded text-sm font-bold tracking-widest uppercase">
                            Request Audit
                        </button>
                    </div>
                </motion.div>

                {/* Visual Content - Abstract Globe/Network */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden md:flex items-center justify-center relative"
                >
                    <div className="w-[400px] h-[400px] rounded-full border border-[#64ffda]/20 relative flex items-center justify-center animate-[spin_60s_linear_infinite]">
                        <div className="absolute inset-4 rounded-full border border-[#64ffda]/10 border-dashed" />
                        <div className="absolute inset-12 rounded-full border border-[#64ffda]/10" />

                        {/* Floating Nodes */}
                        {[0, 90, 180, 270].map((deg, i) => (
                            <div
                                key={i}
                                className="absolute w-3 h-3 bg-[#64ffda] rounded-full shadow-[0_0_10px_#64ffda]"
                                style={{ transform: `rotate(${deg}deg) translate(200px) rotate(-${deg}deg)` }}
                            />
                        ))}
                    </div>

                    {/* Central Core */}
                    <div className="absolute w-32 h-32 bg-[#112240] rounded-full border border-[#64ffda] flex items-center justify-center shadow-2xl z-10">
                        <span className="text-2xl font-bold text-white tracking-tighter">ZENER</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll/Swipe Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#8892b0]/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-xs uppercase tracking-widest mb-2">Swipe / Scroll</span>
                <ChevronRight size={24} className="rotate-90" />
            </motion.div>
        </div>
    );
};

export default HeroPanel;
