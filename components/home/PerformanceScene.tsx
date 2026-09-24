import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RandomGraph = () => {
    const [path, setPath] = useState("");

    useEffect(() => {
        const generatePath = () => {
            let d = "M0 50 ";
            let y = 50;
            for (let x = 0; x <= 100; x += 5) {
                y += (Math.random() - 0.5) * 20;
                y = Math.max(10, Math.min(90, y));
                d += `L${x} ${y} `;
            }
            setPath(d);
        };
        const interval = setInterval(generatePath, 1000);
        generatePath();
        return () => clearInterval(interval);
    }, []);

    return (
        <svg viewBox="0 0 100 100" className="w-full h-32 overflow-visible" preserveAspectRatio="none">
            <motion.path
                d={path}
                fill="none"
                stroke="#00A3C1"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, d: path }}
                transition={{ duration: 1, ease: "linear" }}
            />
            <motion.path
                d={path + " V100 H0 Z"}
                fill="url(#gradient)"
                stroke="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2, d: path + " V100 H0 Z" }}
            />
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00A3C1" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#00A3C1" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const PerformanceScene: React.FC = () => {
    return (
        <section className="min-h-screen bg-[#0A0F2C] relative flex flex-col items-center justify-center p-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">Real-Time <span className="text-green-400">Precision</span>.</h2>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 font-mono">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>SYSTEM ONLINE</span>
                    <span>::</span>
                    <span>LATENCY &lt; 20ms</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
                {["THROUGHPUT", "DEMAND FORECAST", "INVENTORY LEVEL", "NETWORK HEALTH"].map((label, i) => (
                    <motion.div
                        key={i}
                        className="bg-[#050814] border border-[#00A3C1]/20 rounded-lg p-4 relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-[#00A3C1] text-xs font-bold tracking-widest">{label}</h3>
                            <span className="text-white font-mono text-sm">9{8 + i}%</span>
                        </div>
                        <RandomGraph />

                        {/* Scanline overlay for card */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00A3C1]/5 to-transparent h-[10px] w-full animate-scanline pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PerformanceScene;
