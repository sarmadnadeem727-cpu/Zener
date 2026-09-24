import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroScene: React.FC = () => {
    return (
        <section className="h-screen w-full relative flex items-center justify-center bg-[#0a192f] overflow-hidden">

            {/* Background: Animated Global Map (Stylized) */}
            <div className="absolute inset-0 z-0 opacity-40">
                <svg width="100%" height="100%" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
                    {/* Abstract Continents (Simplified Polygons) */}
                    <path d="M100,100 Q200,50 300,100 T500,120 T700,80 T900,150 V400 H100 Z" fill="none" stroke="#112240" strokeWidth="2" />

                    {/* Routes */}
                    <motion.path
                        d="M200,200 Q400,100 600,250 T800,200"
                        fill="none"
                        stroke="#233554"
                        strokeWidth="1"
                    />
                    <motion.path
                        d="M200,200 Q400,100 600,250 T800,200"
                        fill="none"
                        stroke="#64ffda"
                        strokeWidth="2"
                        strokeDasharray="10 100"
                        animate={{ strokeDashoffset: -110 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Nodes */}
                    <circle cx="200" cy="200" r="3" fill="#64ffda">
                        <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="600" cy="250" r="3" fill="#64ffda">
                        <animate attributeName="r" values="3;6;3" dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0.5;1" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="800" cy="200" r="3" fill="#64ffda">
                        <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center space-x-2 border border-[#64ffda]/30 rounded-full px-4 py-1 mb-8 bg-[#0a192f]/50 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse" />
                        <span className="text-[#64ffda] text-xs font-mono tracking-widest uppercase">Global Systems Online</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-none">
                        Digital Supply Chains. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-[#00b4d8]">Built For Intelligence.</span>
                    </h1>

                    <p className="text-[#8892b0] text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        ZENER integrates ERP systems, BI tools, and intelligent workflows to transform operations into <span className="text-white font-medium">real-time decision engines</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/system">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-10 py-5 bg-[#64ffda] text-[#0a192f] font-bold text-lg tracking-widest uppercase rounded-sm overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    Explore The System <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                            </motion.button>
                        </Link>

                        <Link to="/builder">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-10 py-5 bg-transparent border border-[#64ffda] text-[#64ffda] font-bold text-lg tracking-widest uppercase rounded-sm overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    Build a Smarter Supply Chain
                                </span>
                                <div className="absolute inset-0 bg-[#64ffda] opacity-0 group-hover:opacity-10 transition-opacity" />
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
                animate={{ opacity: [0.5, 1, 0.5], y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-[#8892b0] text-xs uppercase tracking-widest mb-2">Scroll to Initialize</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#64ffda] to-transparent" />
            </motion.div>

        </section>
    );
};

export default HeroScene;
