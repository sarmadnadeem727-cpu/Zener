import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TransformationScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Structure Side (Left) -> fades in and expands
    const structureWidth = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
    const structureOpacity = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

    const connectLineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="h-[250vh] relative bg-[#050814]">
            <div className="sticky top-0 h-screen w-full flex overflow-hidden">

                {/* Background Grid */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(10,20,50,1)_1px,transparent_1px),linear-gradient(90deg,rgba(10,20,50,1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

                {/* Left Side: Structure (Expands) */}
                <motion.div
                    style={{ width: structureWidth }}
                    className="absolute left-0 top-0 bottom-0 bg-[#0A0F2C] border-r border-[#00A3C1]/30 overflow-hidden z-20 flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,163,193,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,163,193,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

                    <motion.div
                        style={{ opacity: structureOpacity }}
                        className="text-center relative z-10"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">INTELLIGENCE</h2>
                        <div className="grid grid-cols-4 gap-4 w-64 mx-auto mb-8">
                            {[...Array(16)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="w-full pt-[100%] bg-[#00A3C1]/20 border border-[#00A3C1] relative"
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-[8px] text-[#00A3C1] font-mono">OK</div>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-[#94a3b8]">Turning Chaos Into Clarity</p>
                    </motion.div>
                </motion.div>

                {/* Right Side: Chaos (Static but gets covered) */}
                <div className="absolute right-0 top-0 bottom-0 w-full flex items-center justify-center z-10">
                    <div className="relative text-center">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-500 mb-4 blur-[2px]">CHAOS</h2>

                        {/* Scattered Particles */}
                        <div className="relative w-64 h-64 mx-auto">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-red-500/50 rounded-full"
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        x: [0, Math.random() * 40 - 20],
                                        y: [0, Math.random() * 40 - 20],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "mirror"
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Center Divider / Scanner */}
                <motion.div
                    style={{ left: structureWidth }}
                    className="absolute top-0 bottom-0 w-[2px] bg-[#00F0FF] shadow-[0_0_50px_#00F0FF] z-30"
                />

                {/* Connecting Line Animation Triggered by Scroll */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[50vh] bg-transparent z-40">
                    <motion.div
                        style={{ height: connectLineHeight }}
                        className="w-full bg-[#00A3C1] shadow-[0_0_10px_#00A3C1]"
                    />
                </div>

            </div>
        </section>
    );
};

export default TransformationScene;
