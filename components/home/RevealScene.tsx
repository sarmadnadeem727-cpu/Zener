import React from 'react';
import { motion } from 'framer-motion';
import ZenerLogo from '../ui/ZenerLogo';

const RevealScene: React.FC = () => {
    return (
        <section className="h-screen w-full relative bg-[#0a192f] flex flex-col items-center justify-center overflow-hidden">

            {/* Grid Overlay appearing */}
            <motion.div
                className="absolute inset-0 corporate-grid opacity-0"
                whileInView={{ opacity: 0.15 }}
                transition={{ duration: 2 }}
            />

            {/* Background Radial Glow */}
            <motion.div
                className="absolute w-[800px] h-[800px] bg-[#00A3C1] rounded-full filter blur-[150px] opacity-0"
                whileInView={{ opacity: 0.1 }}
                transition={{ duration: 2, delay: 0.5 }}
            />

            <div className="relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-12"
                >
                    <span className="text-[#64ffda] font-mono tracking-[0.5em] text-sm uppercase">Secure Infrastructure</span>
                </motion.div>

                {/* New Immersive Logo */}
                <div className="w-[300px] md:w-[500px] h-[150px] relative">
                    <ZenerLogo />
                </div>

                <div className="mt-8 text-center space-y-2">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-widest"
                    >
                        ZENER
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="text-[#8892b0] text-xl tracking-wider"
                    >
                        Connected Intelligence
                    </motion.p>
                </div>
            </div>

        </section>
    );
};

export default RevealScene;
