import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as random from 'maath/random/dist/maath-random.esm';
import SnapSection from '../layout/SnapSection';

// --- Three.js Background Component ---
const NetworkBackground = () => {
    const ref = useRef<any>();
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#64ffda"
                    size={0.003} // Very subtle size
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6} // Reduced opacity for subtlety
                />
            </Points>
        </group>
    );
};

// --- Hero Section Component ---
const HeroSection: React.FC = () => {
    return (
        <SnapSection className="relative bg-zener-dark">
            {/* Live Background Video Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-110"
                >
                    <source src="/herotab-video.mp4" type="video/mp4" />
                    <source src="/herotab video.MP4" type="video/mp4" />
                </video>

                {/* High-Tech Gradient Overlays for Readability & Depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-zener-dark/95 via-zener-dark/75 to-zener-dark/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-zener-dark via-transparent to-zener-dark/70" />
                <div className="absolute inset-0 bg-zener-dark/20 backdrop-blur-[0.5px]" />
            </div>

            {/* Subtle Interactive Three.js Particle Overlay floating above video */}
            <div className="absolute inset-0 z-[1] opacity-25 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <NetworkBackground />
                </Canvas>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col items-start justify-center max-w-7xl mx-auto px-6 w-full h-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-zener-navy/95 border border-zener-cyan/60 p-1.5 flex items-center justify-center shadow-[0_0_22px_rgba(100,255,218,0.35)]">
                            <img src="/logo.png" alt="ZENER" className="w-full h-full object-contain rounded" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-mono font-bold tracking-[0.25em] text-zener-cyan uppercase">ZENER HOLDINGS</span>
                            <span className="text-[10px] font-mono tracking-widest text-zener-text-muted">ENTERPRISE SCM &amp; INFRASTRUCTURE</span>
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">
                        ZENER
                        <span className="block text-2xl md:text-3xl font-light text-zener-text-muted tracking-[0.2em] mt-2">
                            DIGITAL SUPPLY CHAIN INFRASTRUCTURE
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <p className="text-xl md:text-2xl text-zener-text/80 mb-2 font-light">
                        We Integrate ERP Systems.
                    </p>
                    <p className="text-xl md:text-2xl text-zener-text/80 mb-2 font-light">
                        We Enable BI Intelligence.
                    </p>
                    <p className="text-xl md:text-2xl text-zener-text/80 mb-10 font-light">
                        We Engineer Operational Clarity.
                    </p>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="group relative px-8 py-4 border border-zener-cyan/50 text-zener-cyan font-bold tracking-widest uppercase text-sm hover:bg-zener-cyan hover:text-zener-dark transition-all duration-300 overflow-hidden"
                >
                    <span className="relative z-10">Explore the System</span>
                    <div className="absolute inset-0 bg-zener-cyan/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>
            </div>

            {/* Decorative Grid Lines - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zener-cyan/20 to-transparent"></div>
        </SnapSection>
    );
};

export default HeroSection;
