import React from 'react';
import { motion } from 'framer-motion';
import { Server, Settings, Cpu, ShieldCheck } from 'lucide-react';
import SnapSection from '../layout/SnapSection';

const InfrastructureSection: React.FC = () => {
    const modules = [
        { title: "Data Ingestion", icon: Server, desc: "Real-time pipeline" },
        { title: "Processing Core", icon: Cpu, desc: "AI-driven logic" },
        { title: "Security Layer", icon: ShieldCheck, desc: "Enterprise guard" },
        { title: "API Gateway", icon: Settings, desc: "Universal interconnect" }
    ];

    return (
        <SnapSection className="bg-zener-navy border-t border-zener-border">
            {/* Background Blueprint Grid */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(to right, #64ffda 1px, transparent 1px),
                                      linear-gradient(to bottom, #64ffda 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-white mb-4"
                    >
                        The Infrastructure Layer
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zener-text-muted text-xl max-w-2xl mx-auto"
                    >
                        We don't just patch systems. We build the fundamental digital architecture that powers your entire operation.
                    </motion.p>
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {modules.map((mod, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="bg-zener-dark/80 backdrop-blur border border-zener-border hover:border-zener-cyan/50 p-8 rounded-sm group transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Decorative framing */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zener-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zener-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zener-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zener-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <mod.icon className="w-10 h-10 text-zener-cyan mb-6" strokeWidth={1} />

                            <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
                            <p className="text-sm text-zener-text-muted font-mono">{mod.desc}</p>

                            {/* Connector Line Animation */}
                            <motion.div
                                className="absolute bottom-0 left-0 h-1 bg-zener-cyan"
                                initial={{ width: 0 }}
                                whileHover={{ width: '100%' }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Central Diagram / Schematic - Simplified representation */}
                <motion.div
                    className="mt-20 border-t border-zener-border pt-10 flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="flex items-center space-x-4 text-xs font-mono text-zener-cyan/50">
                        <span>SYS.ARCH.V2.4</span>
                        <span>//</span>
                        <span>STATUS: OPTIMAL</span>
                        <span>//</span>
                        <span>CORE: ACTIVE</span>
                    </div>
                </motion.div>

            </div>
        </SnapSection>
    );
};

export default InfrastructureSection;
