import React from 'react';
import { motion } from 'framer-motion';

const steps = ["DISCOVER", "DESIGN", "INTEGRATE", "INTELLIGENT", "OPTIMIZE"];

const FrameworkScene: React.FC = () => {
    return (
        <section className="min-h-screen py-24 w-full bg-[#0a192f] flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 corporate-grid opacity-5" />

            <div className="relative z-10 space-y-32">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ margin: "-20% 0px -20% 0px" }}
                        className="text-center"
                    >
                        <h2 className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#112240] opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default tracking-tighter">
                            {step}
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100px" }}
                            className="h-1 bg-[#64ffda] mx-auto mt-4"
                        />
                        <p className="text-[#8892b0] mt-4 max-w-md mx-auto">
                            Phase {i + 1}: Digital transformation of core processes.
                        </p>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default FrameworkScene;
