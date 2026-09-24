import React, { useEffect, useRef, useState, useMemo } from 'react';
import Globe from 'react-globe.gl';
import { motion } from 'framer-motion';
import { Factory, Warehouse, ShoppingBag } from 'lucide-react';
import SnapSection from '../layout/SnapSection';

const GlobalMapSection: React.FC = () => {
    const globeEl = useRef<any>();
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);

        if (globeEl.current) {
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.5;
            globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });
        }

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mock Data
    const places = useMemo(() => [
        { lat: 40.7128, lng: -74.0060, label: "NY HQ", type: "hq" },
        { lat: 51.5074, lng: -0.1278, label: "London Hub", type: "warehouse" },
        { lat: 35.6762, lng: 139.6503, label: "Tokyo Mfg", type: "factory" },
        { lat: 1.3521, lng: 103.8198, label: "Singapore Dist", type: "distribution" },
        { lat: -33.8688, lng: 151.2093, label: "Sydney Retail", type: "retail" },
        { lat: 52.5200, lng: 13.4050, label: "Berlin R&D", type: "hq" },
        { lat: 19.0760, lng: 72.8777, label: "Mumbai Ops", type: "warehouse" }
    ], []);

    const arcs = useMemo(() => [
        { startLat: 40.7128, startLng: -74.0060, endLat: 51.5074, endLng: -0.1278 },
        { startLat: 51.5074, startLng: -0.1278, endLat: 35.6762, endLng: 139.6503 },
        { startLat: 35.6762, startLng: 139.6503, endLat: 1.3521, endLng: 103.8198 },
        { startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093 },
        { startLat: 40.7128, startLng: -74.0060, endLat: 52.5200, endLng: 13.4050 },
        { startLat: 52.5200, startLng: 13.4050, endLat: 19.0760, endLng: 72.8777 },
    ], []);

    return (
        <SnapSection className="bg-zener-dark relative overflow-hidden">

            {/* Background Globe */}
            <div className="absolute inset-0 cursor-move">
                <Globe
                    ref={globeEl}
                    width={dimensions.width}
                    height={dimensions.height}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

                    arcsData={arcs}
                    arcColor={() => "#64ffda"}
                    arcDashLength={0.4}
                    arcDashGap={4}
                    arcDashInitialGap={() => Math.random() * 5}
                    arcDashAnimateTime={2000}
                    arcStroke={0.5}

                    pointsData={places}
                    pointColor={() => "#ffffff"}
                    pointAltitude={0.05}
                    pointRadius={0.5}

                    labelsData={places}
                    labelLat={d => (d as any).lat}
                    labelLng={d => (d as any).lng}
                    labelText={d => (d as any).label}
                    labelSize={1.5}
                    labelDotRadius={0.5}
                    labelColor={() => "#64ffda"}
                    labelResolution={2}

                    atmosphereColor="#64ffda"
                    atmosphereAltitude={0.15}
                />
            </div>

            {/* Overlay UI */}
            <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-10 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-zener-glass border border-zener-border p-8 rounded-lg max-w-sm backdrop-blur-md pointer-events-auto"
                >
                    <h2 className="text-3xl font-bold text-white mb-2">Global Visibility</h2>
                    <p className="text-zener-text-muted mb-6">
                        Track every movement across your entire supply chain in real-time. From factory floor to final destination.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <Factory className="text-zener-cyan w-5 h-5" />
                            <div>
                                <div className="text-white text-sm font-bold">12 Active Manufacturing Hubs</div>
                                <div className="text-xs text-zener-text-muted">Operating at 94% Efficiency</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Warehouse className="text-zener-cyan w-5 h-5" />
                            <div>
                                <div className="text-white text-sm font-bold">28 Distribution Centers</div>
                                <div className="text-xs text-zener-text-muted">Inventory Level: Optimal</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <ShoppingBag className="text-zener-cyan w-5 h-5" />
                            <div>
                                <div className="text-white text-sm font-bold">Retail Integration</div>
                                <div className="text-xs text-zener-text-muted">Live POS Data Sync</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer Gradient for blend */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zener-dark to-transparent pointer-events-none" />

        </SnapSection>
    );
};

export default GlobalMapSection;
