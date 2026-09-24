import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EnterZenerScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
    const gridOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 0.4]);

    return (
        <section ref={containerRef} className="h-screen w-full bg-[#050814] relative flex items-center justify-center overflow-hidden z-30">

            {/* Dynamic Grid */}
            <motion.div
                style={{ opacity: gridOpacity }}
                className="absolute inset-0 bg-[linear-gradient(rgba(0,163,193,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,163,193,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
            />

            {/* Scanning Beam */}
            <motion.div
                initial={{ x: '-150%', opacity: 0 }}
                whileInView={{ x: '150%', opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-0 bottom-0 w-[200px] bg-gradient-to-r from-transparent via-[#00A3C1]/20 to-transparent skew-x-[-20deg] blur-md pointer-events-none z-0"
            />

            {/* Hard Beam Line */}
            <motion.div
                initial={{ left: '0%' }}
                whileInView={{ left: '100%' }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-0 bottom-0 w-[2px] bg-[#00F0FF] shadow-[0_0_20px_#00F0FF] z-10 opacity-50"
            />

            {/* Logo Container */}
            <motion.div
                style={{ scale, opacity }}
                className="relative z-20 text-center"
            >
                <div className="relative inline-block">
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 pb-2">
                        ZENER
                    </h1>
                    {/* Logo Reflection/Glow */}
                    <div className="absolute -inset-4 bg-[#00A3C1]/20 blur-2xl -z-10 rounded-full opacity-50" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <div className="h-px w-24 mx-auto bg-[#00A3C1] my-4 shadow-[0_0_10px_#00A3C1]" />
                    <p className="text-[#00A3C1] font-mono text-sm tracking-[0.3em] uppercase">
                        Digital SCM Solutions
                    </p>
                </motion.div>
            </motion.div>

        </section>
    );
};

export default EnterZenerScene;
