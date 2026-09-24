import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle, Truck, Package } from 'lucide-react';

const incidents = [
    { id: 1, x: 20, y: 30, type: 'delay', label: 'Port Delay (Long Beach)' },
    { id: 2, x: 70, y: 60, type: 'stock', label: 'Low Inventory (Dallas)' },
];

const RealityScene: React.FC = () => {
    const [resolvedIncidents, setResolvedIncidents] = useState<number[]>([]);

    const handleResolve = (id: number) => {
        if (!resolvedIncidents.includes(id)) {
            setResolvedIncidents([...resolvedIncidents, id]);
        }
    };

    return (
        <section className="h-screen w-full relative bg-[#050b14] flex flex-col items-center justify-center overflow-hidden">

            {/* Background Map Grid */}
            <div className="absolute inset-0 corporate-grid opacity-10" />

            <div className="relative z-10 w-full max-w-6xl px-6 grid md:grid-cols-3 gap-8 h-[60vh]">

                {/* Control Panel (Left) */}
                <div className="md:col-span-1 flex flex-col justify-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-2">Command Center</h2>
                        <p className="text-[#8892b0]">
                            Experience real-time resolution. <br /> Click on <span className="text-red-400 font-bold">Alerts</span> to see ZENER optimize flow.
                        </p>
                    </motion.div>

                    <div className="bg-[#112240] border border-[#233554] rounded-xl p-4 space-y-4">
                        <div className="text-[#64ffda] text-xs font-mono tracking-widest uppercase mb-2">System Status</div>
                        {incidents.map(inc => {
                            const isResolved = resolvedIncidents.includes(inc.id);
                            return (
                                <div key={inc.id} className="flex items-center justify-between bg-[#0a192f] p-3 rounded border border-[#233554]">
                                    <div className="flex items-center space-x-2">
                                        {isResolved ? <CheckCircle size={16} className="text-green-400" /> : <AlertTriangle size={16} className="text-red-400 animate-pulse" />}
                                        <span className={`text-sm ${isResolved ? 'text-gray-400' : 'text-white'}`}>{inc.label}</span>
                                    </div>
                                    <span className="text-xs font-mono text-[#8892b0]">{isResolved ? 'RESOLVED' : 'CRITICAL'}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Interactive Map (Right/Center) */}
                <div className="md:col-span-2 relative bg-[#0a192f]/50 border border-[#233554] rounded-xl overflow-hidden shadow-2xl">
                    {/* Map lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                        <path d="M100 100 Q 400 50 700 300" stroke="#233554" strokeWidth="2" fill="none" />
                        <path d="M700 300 Q 500 500 200 400" stroke="#233554" strokeWidth="2" fill="none" />
                    </svg>

                    {incidents.map((inc) => {
                        const isResolved = resolvedIncidents.includes(inc.id);
                        return (
                            <motion.div
                                key={inc.id}
                                className={`absolute cursor-pointer flex flex-col items-center group`}
                                style={{ left: `${inc.x}%`, top: `${inc.y}%` }}
                                onClick={() => handleResolve(inc.id)}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                            >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors duration-500 shadow-lg ${isResolved ? 'bg-green-500/20 border-green-500 text-green-500' : 'bg-red-500/20 border-red-500 text-red-500 animate-pulse'
                                    }`}>
                                    {isResolved ? <CheckCircle /> : <AlertTriangle />}
                                </div>

                                {/* Hover Label */}
                                <div className="mt-2 bg-[#112240] px-3 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#64ffda]/30">
                                    {isResolved ? 'Route Optimized' : 'Click to Optimize'}
                                </div>

                                {/* Reroute Animation */}
                                <AnimatePresence>
                                    {isResolved && (
                                        <motion.div
                                            className="absolute top-1/2 left-1/2 w-[200px] h-[2px] bg-green-400 origin-left"
                                            initial={{ scaleX: 0, opacity: 1, rotate: Math.random() * 360 }}
                                            animate={{ scaleX: 1, opacity: 0 }}
                                            transition={{ duration: 1 }}
                                        />
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}

                    {/* Moving Supply Chain Elements (trucks/packets) */}
                    <motion.div
                        className="absolute text-[#64ffda]"
                        animate={{ offsetDistance: "100%" }}
                        style={{ offsetPath: 'path("M100 100 Q 400 50 700 300")' }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    >
                        <Truck size={16} />
                    </motion.div>
                </div>

            </div>

        </section>
    );
};

export default RealityScene;
