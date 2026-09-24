import React, { useState } from 'react';
import { motion } from 'framer-motion';

const steps = ["Discover", "Design", "Integrate", "Intelligent", "Optimize"];

const FrameworkPanel: React.FC = () => {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a192f] p-6 text-center">

            <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#ccd6f6] mb-4">ZENER Digital Framework</h2>
                <p className="text-[#8892b0]">A structured approach to supply chain autonomy.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-4 max-w-6xl w-full">
                {steps.map((step, i) => (
                    <React.Fragment key={i}>
                        {/* Connector Line */}
                        {i > 0 && (
                            <div className="hidden md:block w-16 h-[2px] bg-[#233554] relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-[#64ffda]"
                                    initial={{ x: '-100%' }}
                                    whileInView={{ x: '100%' }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                />
                            </div>
                        )}

                        {/* Step Node */}
                        <motion.div
                            className={`w-36 h-36 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all duration-300 relative group ${hoveredStep === i ? 'border-[#64ffda] bg-[#112240] scale-110 shadow-[0_0_20px_rgba(100,255,218,0.2)]' : 'border-[#233554] bg-[#0a192f]'
                                }`}
                            onMouseEnter={() => setHoveredStep(i)}
                            onMouseLeave={() => setHoveredStep(null)}
                            whileHover={{ y: -5 }}
                        >
                            <span className={`font-bold ${hoveredStep === i ? 'text-[#64ffda]' : 'text-[#8892b0]'}`}>
                                {step}
                            </span>

                            {/* Hover Details */}
                            {hoveredStep === i && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute top-full mt-4 w-48 text-xs text-[#8892b0] bg-[#112240] p-3 rounded border border-[#64ffda]/20 z-10"
                                >
                                    Detailed workflow analysis and digital mapping for stage {i + 1}.
                                </motion.div>
                            )}
                        </motion.div>
                    </React.Fragment>
                ))}
            </div>

        </div>
    );
};

export default FrameworkPanel;
