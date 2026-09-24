import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Warehouse, ShoppingCart, Truck } from 'lucide-react';

const nodes = [
    { id: 1, x: 20, y: 50, label: "Manufacturing", icon: <Factory />, data: { production: "98%", output: "12k Units", status: "Optimal" } },
    { id: 2, x: 50, y: 30, label: "Distribution Hub", icon: <Warehouse />, data: { capacity: "85%", rapid: "Active", status: "Processing" } },
    { id: 3, x: 80, y: 50, label: "Retail Partner", icon: <ShoppingCart />, data: { demand: "High", forecast: "+12%", status: "Stocked" } },
];

const InteractiveMapScene: React.FC = () => {
    const [activeNode, setActiveNode] = useState<number | null>(null);

    return (
        <section className="h-screen w-full relative bg-[#0a192f] flex items-center justify-center overflow-hidden">

            <div className="absolute top-10 w-full text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">End-to-End Visibility</h2>
                <p className="text-[#8892b0]">Interactive Digital Digital Twin</p>
            </div>

            {/* Map Container */}
            <div className="relative w-full max-w-5xl h-[60vh] bg-[#112240]/30 border border-[#233554] rounded-xl backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 corporate-grid opacity-20" />

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path d="M20% 50% Q 35% 20% 50% 30%" fill="none" stroke="#233554" strokeWidth="2" />
                    <path d="M50% 30% Q 65% 60% 80% 50%" fill="none" stroke="#233554" strokeWidth="2" />

                    {/* Animated Pulses */}
                    <motion.circle r="3" fill="#64ffda">
                        <animateMotion
                            path="M200,300 Q 350,120 500,180"
                            dur="3s"
                            repeatCount="indefinite"
                            calcMode="linear"
                        />
                    </motion.circle>
                </svg>

                {nodes.map((node) => (
                    <motion.div
                        key={node.id}
                        className={`absolute w-12 h-12 -ml-6 -mt-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300 z-10 ${activeNode === node.id ? 'bg-[#64ffda] border-white scale-125' : 'bg-[#0a192f] border-[#64ffda] hover:scale-110'
                            }`}
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        onClick={() => setActiveNode(node.id)}
                        whileHover={{ boxShadow: "0 0 20px rgba(100, 255, 218, 0.4)" }}
                    >
                        <div className={activeNode === node.id ? 'text-[#0a192f]' : 'text-[#64ffda]'}>
                            {React.cloneElement(node.icon as any, { size: 20 })}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Info Panel Overlay */}
            <AnimatePresence>
                {activeNode && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#112240] border border-[#64ffda] p-6 rounded-xl shadow-2xl z-20"
                    >
                        {nodes.filter(n => n.id === activeNode).map(n => (
                            <div key={n.id}>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{n.label}</h3>
                                        <div className="text-[#64ffda] text-xs font-mono">NODE_ID: {n.id}00X</div>
                                    </div>
                                    <button onClick={() => setActiveNode(null)} className="text-[#8892b0] hover:text-white">Close</button>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    {Object.entries(n.data).map(([key, value]) => (
                                        <div key={key} className="bg-[#0a192f] p-2 rounded border border-[#233554]">
                                            <div className="text-[#8892b0] text-[10px] uppercase tracking-wider">{key}</div>
                                            <div className="text-white font-bold">{value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default InteractiveMapScene;
