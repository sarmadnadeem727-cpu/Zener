import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const ChaosScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Mouse parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse response
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth - 0.5);
        mouseY.set(clientY / innerHeight - 0.5);
    };

    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.8]);
    const blur = useTransform(scrollYProgress, [0.8, 1], ["0px", "10px"]);

    return (
        <section
            ref={containerRef}
            className="h-[150vh] relative z-40 bg-[#050814]"
            onMouseMove={handleMouseMove}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-1000">
                <motion.div
                    style={{ opacity, scale, filter: `blur(${blur})` }}
                    className="relative w-full h-full max-w-6xl mx-auto"
                >
                    {/* Floating Panels */}
                    <FloatingPanel
                        x={-20} y={-10} rotX={10} rotY={-10} delay={0}
                        mouseX={smoothX} mouseY={smoothY}
                        className="top-[20%] left-[10%] w-64 h-40 border-l-2 border-red-500/50"
                    >
                        <div className="text-red-400 font-mono text-xs p-2">ERROR: CONNECTION LOST</div>
                        <div className="w-full h-px bg-red-900/30 my-2" />
                        <div className="p-2 space-y-1">
                            <div className="h-1 w-2/3 bg-red-900/30 rounded" />
                            <div className="h-1 w-1/2 bg-red-900/30 rounded" />
                        </div>
                    </FloatingPanel>

                    <FloatingPanel
                        x={20} y={20} rotX={-5} rotY={5} delay={0.2}
                        mouseX={smoothX} mouseY={smoothY}
                        className="bottom-[20%] right-[10%] w-80 h-48 border-t-2 border-yellow-500/50"
                    >
                        <div className="text-yellow-400 font-mono text-xs p-2">WARNING: INVENTORY LOW</div>
                        <div className="grid grid-cols-3 gap-2 p-2 mt-2">
                            <div className="h-12 bg-yellow-900/10 border border-yellow-500/20" />
                            <div className="h-12 bg-yellow-900/10 border border-yellow-500/20" />
                            <div className="h-12 bg-yellow-900/10 border border-yellow-500/20" />
                        </div>
                    </FloatingPanel>

                    <FloatingPanel
                        x={0} y={0} rotX={0} rotY={0} delay={0.4} z={50}
                        mouseX={smoothX} mouseY={smoothY}
                        className="top-[40%] left-[35%] w-96 h-64 border border-[#00A3C1]/30 bg-[#0A0F2C]/80 backdrop-blur-md"
                    >
                        <div className="flex justify-between items-center p-3 border-b border-[#00A3C1]/20">
                            <span className="text-[#00A3C1] font-mono text-xs">MANUAL_OVERRIDE.exe</span>
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            </div>
                        </div>
                        <div className="p-4 font-mono text-xs text-[#94a3b8] space-y-2">
                            <p>{`> Initiating manual sync...`}</p>
                            <p>{`> Failed. Retry in 30s.`}</p>
                            <p className="text-red-400">{`> CRITICAL: Data fragmentation at 48%`}</p>
                            <p>{`> Waiting for operator...`}</p>
                        </div>
                    </FloatingPanel>

                    {/* Background Chaos Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white/20 rounded-full"
                                initial={{
                                    x: Math.random() * 100 + "%",
                                    y: Math.random() * 100 + "%"
                                }}
                                animate={{
                                    y: [null, Math.random() * -50],
                                    opacity: [0, 0.5, 0]
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2
                                }}
                            />
                        ))}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <h2 className="text-6xl md:text-8xl font-bold text-white/5 tracking-widest uppercase truncate">FRAGMENTATION</h2>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const FloatingPanel = ({ children, className, x, y, rotX, rotY, delay, mouseX, mouseY, z = 0 }: any) => {
    const transformX = useTransform(mouseX, [-0.5, 0.5], [x - 10, x + 10]);
    const transformY = useTransform(mouseY, [-0.5, 0.5], [y - 10, y + 10]);
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [rotX - 5, rotX + 5]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [rotY + 5, rotY - 5]);

    return (
        <motion.div
            style={{
                x: transformX,
                y: transformY,
                rotateX,
                rotateY,
                z
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay }}
            className={`absolute glass-panel shadow-2xl rounded-sm ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default ChaosScene;
