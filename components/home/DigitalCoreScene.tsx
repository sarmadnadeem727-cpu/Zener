import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE for random

const ParticleSphere = (props: any) => {
    const ref = useRef<any>();

    // Generate random points on a sphere
    const spherePoints = useMemo(() => {
        const count = 3000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color();

        for (let i = 0; i < count; i++) {
            // Random point on sphere surface
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = 1.5; // radius

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Color gradient
            color.setHSL(0.5 + Math.random() * 0.1, 1, 0.5); // Cyan/Blue range
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return { positions, colors };
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={spherePoints.positions} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00A3C1"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
};

const DigitalCoreScene: React.FC = () => {
    return (
        <section className="h-screen w-full bg-[#050814] relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 4] }}>
                    {/* Ambient Light */}
                    <ambientLight intensity={0.5} />

                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <ParticleSphere />
                    </Float>

                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none z-10">
                <h2 className="text-white text-2xl font-bold tracking-[0.5em] uppercase mb-2">Digital Core</h2>
                <div className="flex justify-center space-x-8 text-[#00A3C1] text-xs font-mono">
                    <span>ERP INTEGRATION</span>
                    <span>BI INTELLIGENCE</span>
                    <span>WORKFLOW AUTOMATION</span>
                </div>
            </div>

            {/* Overlay Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#050814] pointer-events-none" />
        </section>
    );
};

export default DigitalCoreScene;
