import React from 'react';
import { motion } from 'framer-motion';

const FinalImpactScene: React.FC = () => {
    return (
        <section className="h-[80vh] bg-[#050814] relative flex flex-col items-center justify-center text-center overflow-hidden">

            {/* Background Pulse */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[80vw] h-[80vw] bg-[#00A3C1] rounded-full filter blur-[100px] opacity-10 animate-pulse" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 p-8"
            >
                <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
                    Build The <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3C1] to-[#00F0FF]">Intelligent Supply Chain</span>.
                </h2>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-12 py-6 bg-transparent overflow-hidden rounded-full"
                >
                    <div className="absolute inset-0 w-full h-full bg-[#00A3C1] opacity-20 group-hover:opacity-30 transition-opacity" />
                    <div className="absolute inset-0 w-full h-full border border-[#00A3C1] rounded-full blur-[2px] opacity-50" />
                    <div className="absolute inset-0 w-full h-full border border-white/20 rounded-full" />

                    <span className="relative text-white font-bold text-lg tracking-widest uppercase z-10">Start The Transformation</span>

                    {/* Button Shine Effect */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                </motion.button>
            </motion.div>
        </section>
    );
};

export default FinalImpactScene;
