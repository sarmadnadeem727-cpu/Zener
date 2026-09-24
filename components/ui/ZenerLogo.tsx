import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ZenerLogoProps {
    className?: string;
    animated?: boolean;
}

const ZenerLogo: React.FC<ZenerLogoProps> = ({ className = "w-full h-full", animated = true }) => {
    // Generate random nodes for the supply chain network
    const [nodes, setNodes] = useState<{ angle: number; distance: number; size: number }[]>([]);

    useEffect(() => {
        const newNodes = Array.from({ length: 6 }).map((_, i) => ({
            angle: (i * 60) + Math.random() * 20, // distribute roughly evenly
            distance: 45 + Math.random() * 10, // distance from center (percentage)
            size: 4 + Math.random() * 4
        }));
        setNodes(newNodes);
    }, []);

    return (
        <div className={`relative ${className} flex items-center justify-center`}>
            {/* Central Hub Container - ZENER Logo */}
            <motion.div
                className="relative z-20 w-3/4 h-3/4 flex items-center justify-center rounded-xl overflow-hidden bg-slate-900/50 backdrop-blur-sm border border-slate-700/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.02, borderColor: "rgba(0, 163, 193, 0.5)" }}
            >
                <img
                    src="/zener-logo-scm.jpg"
                    alt="Zener Supply Chain Hub"
                    className="w-full h-full object-contain p-2"
                />

                {/* Scanner/Laser Effect */}
                {animated && (
                    <motion.div
                        className="absolute w-full h-1 bg-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                        style={{ top: '0%' }}
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                    />
                )}
            </motion.div>

            {/* Orbiting Network System */}
            {animated && (
                <div className="absolute inset-0 pointer-events-none z-10">
                    {/* Orbital Rings */}
                    <motion.div
                        className="absolute inset-[10%] border border-cyan-500/10 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute inset-[2%] border border-blue-500/10 rounded-full border-dashed"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
                    />

                    {/* Nodes and Data Paths */}
                    {nodes.map((node, i) => (
                        <OrbitingNode key={i} angle={node.angle} distance={node.distance} size={node.size} delay={i * 0.5} />
                    ))}
                </div>
            )}

            {/* Global Ambience */}
            {animated && (
                <motion.div
                    className="absolute inset-0 bg-cyan-500/5 blur-3xl opacity-30 rounded-full z-0"
                    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            )}
        </div>
    );
};

// Sub-component for individual orbiting nodes and data packets
const OrbitingNode = ({ angle, distance, size, delay }: { angle: number, distance: number, size: number, delay: number }) => {
    return (
        <motion.div
            className="absolute top-1/2 left-1/2 w-0 h-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 30 + Math.random() * 20, ease: "linear", repeat: Infinity }}
            style={{ rotate: angle }} // Initial offset
        >
            {/* The Node itself */}
            <div
                className="absolute bg-slate-200 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                style={{
                    width: size,
                    height: size,
                    transform: `translateX(${distance * 2}px)` // Push out from center
                }}
            />

            {/* Data Packet traveling TO center */}
            <motion.div
                className="absolute h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_cyan]"
                style={{
                    width: '10px',
                    transformOrigin: 'left center'
                }}
                animate={{
                    x: [distance * 2, 0],
                    opacity: [1, 0, 0] // Fade out as it hits center
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeIn",
                    repeatDelay: Math.random() * 3
                }}
            />

            {/* Connecting Line (faint) */}
            <div
                className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent origin-left"
                style={{
                    width: `${distance * 2}px`,
                    transform: 'translateY(-50%)'
                }}
            />
        </motion.div>
    );
};

export default ZenerLogo;
