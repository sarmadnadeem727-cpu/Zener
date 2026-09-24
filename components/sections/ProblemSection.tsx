import React from 'react';
import { motion } from 'framer-motion';
import { Database, Truck, BarChart3, Box, Layers, Server } from 'lucide-react';
import SnapSection from '../layout/SnapSection';

const ProblemSection: React.FC = () => {
    const nodes = [
        { id: 1, icon: Database, label: "ERP Core", start: { x: -300, y: -200, rotate: -15 }, end: { x: 0, y: -100, rotate: 0 } },
        { id: 2, icon: Truck, label: "Logistics", start: { x: 350, y: -150, rotate: 20 }, end: { x: 150, y: 0, rotate: 0 } },
        { id: 3, icon: Box, label: "Inventory", start: { x: -250, y: 200, rotate: -10 }, end: { x: -150, y: 0, rotate: 0 } },
        { id: 4, icon: BarChart3, label: "Analytics", start: { x: 300, y: 250, rotate: 15 }, end: { x: 0, y: 100, rotate: 0 } },
    ];

    return (
        <SnapSection className="bg-zener-dark relative">
            <div className="absolute inset-x-0 top-0 h-px bg-current opacity-10 text-zener-cyan" />

            <div className="max-w-7xl mx-auto w-full h-full flex flex-col md:flex-row items-center justify-between px-6 relative z-10">

                {/* Text Area */}
                <div className="md:w-1/2 mb-12 md:mb-0 z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Supply Chains Are <br />
                            <span className="text-zener-text-muted">Fragmented.</span>
                        </h2>
                        <p className="text-xl text-zener-text-muted font-light max-w-md mb-8">
                            Disconnected systems create blind spots, delays, and inefficiencies. Data silos prevent real-time decision making.
                        </p>

                        <div className="h-px w-24 bg-zener-cyan/50 mb-8" />

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            <h3 className="text-2xl text-white font-semibold mb-2">ZENER Unifies.</h3>
                            <p className="text-lg text-zener-text-muted font-light">
                                We architect the operational backbone that brings every node into perfect alignment.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Visual Area */}
                <div className="md:w-1/2 h-[380px] sm:h-[450px] md:h-[500px] w-full relative flex items-center justify-center scale-75 sm:scale-90 md:scale-100 origin-center">
                    {/* Center Grid Line (implied backbone) */}
                    <motion.div
                        className="absolute top-0 bottom-0 w-px bg-zener-cyan/20"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />

                    {/* Horizontal Grid Line */}
                    <motion.div
                        className="absolute left-0 right-0 h-px bg-zener-cyan/20"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />

                    {nodes.map((node, index) => (
                        <motion.div
                            key={node.id}
                            className="absolute flex flex-col items-center justify-center"
                            initial={{
                                x: node.start.x,
                                y: node.start.y,
                                rotate: node.start.rotate,
                                opacity: 0
                            }}
                            whileInView={{
                                x: node.end.x,
                                y: node.end.y,
                                rotate: node.end.rotate,
                                opacity: 1
                            }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{
                                duration: 1.2,
                                ease: [0.16, 1, 0.3, 1], // Apple-style damping
                                delay: index * 0.1
                            }}
                        >
                            <div className="w-20 h-20 bg-zener-navy border border-zener-border rounded-xl flex items-center justify-center mb-3 shadow-lg z-10 relative group">
                                <node.icon className="text-zener-cyan w-8 h-8" strokeWidth={1.5} />

                                {/* Connection Line to Center (only visible when aligned) */}
                                <motion.div
                                    className="absolute z-[-1] bg-zener-cyan/30"
                                    style={{
                                        width: '2px',
                                        height: '100px', // simplified geometry for demo
                                        top: '50%',
                                        left: '50%',
                                        transformOrigin: 'top left',
                                    }}
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 0 }} // Keep simple for now, maybe add connection lines later
                                />
                            </div>
                            <span className="text-sm font-mono text-zener-cyan uppercase tracking-wider bg-zener-dark/80 px-2 rounded">
                                {node.label}
                            </span>
                        </motion.div>
                    ))}

                    {/* Central Unification Node (Appears after alignment) */}
                    <motion.div
                        className="absolute z-0 w-64 h-64 border border-zener-cyan/10 rounded-full flex items-center justify-center"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                    >
                        <div className="w-48 h-48 border border-zener-cyan/20 rounded-full animate-pulse-slow" />
                    </motion.div>

                </div>
            </div>
        </SnapSection>
    );
};

export default ProblemSection;
