import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OpeningScene: React.FC = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const sequence = async () => {
            // Step 0: Initial silent boot
            await new Promise(r => setTimeout(r, 1000));
            setStep(1); // "Initializing..."

            await new Promise(r => setTimeout(r, 2000));
            setStep(2); // "Supply Chains Operational"

            await new Promise(r => setTimeout(r, 2500));
            setStep(3); // "But Not Intelligent" (Glitch)
        };
        sequence();
    }, []);

    const glitchVariants = {
        hidden: { opacity: 0, skew: 0 },
        visible: {
            opacity: 1,
            skew: [0, -10, 10, -5, 5, 0],
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    };

    return (
        <section className="h-screen w-full flex flex-col items-center justify-center bg-[#050814] relative overflow-hidden z-50">
            {/* Background Scanlines */}
            <div className="scanline" />
            <div className="vignette" />

            <AnimatePresence mode='wait'>
                {step === 1 && (
                    <motion.div
                        key="init"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        className="text-[#00A3C1] font-mono text-sm tracking-widest"
                    >
                        INITIALIZING DIGITAL INTELLIGENCE...
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="operational"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-white text-3xl md:text-5xl font-light tracking-tight"
                    >
                        Supply Chains Are <span className="text-[#00A3C1]">Operational</span>.
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="intelligent"
                        initial="hidden"
                        animate="visible"
                        variants={glitchVariants}
                        className="relative z-10"
                    >
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter">
                            BUT NOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3C1] to-[#00F0FF] text-glow">INTELLIGENT</span>.
                        </h1>
                        <motion.div
                            className="absolute -inset-1 bg-[#00A3C1] opacity-20 blur-xl"
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Subtle Grid Floor */}
            <div
                className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-[#00A3C1]/5 to-transparent"
                style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d'
                }}
            >
                {/* CSS Grid simulated via background size/image could go here, keeping it simple for now */}
            </div>
        </section>
    );
};

export default OpeningScene;
