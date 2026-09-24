import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart2, Server, Globe, Database, Cpu, AlertCircle, CheckCircle } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';

const SystemDemo: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(timer);
    }, []);

    const kpiCards = [
        { label: "Global Latency", value: "24ms", trend: "-1.2%", status: "optimal" },
        { label: "Active Nodes", value: "8,432", trend: "+12", status: "optimal" },
        { label: "Data Throughput", value: "1.2 TB/s", trend: "+5.4%", status: "optimal" },
        { label: "Sync Status", value: "99.99%", trend: "Stable", status: "optimal" },
    ];

    return (
        <PageLayout showFooter={false}>
            <div className="bg-zener-dark min-h-screen text-white pt-24 px-6 pb-6 overflow-hidden">
                {/* Header / Status Bar */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-zener-border pb-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-md bg-zener-navy border border-zener-cyan/60 p-1 flex items-center justify-center shadow-[0_0_14px_rgba(100,255,218,0.3)] shrink-0">
                            <img src="/zener-logo.jpg" alt="ZENER Logo" className="w-full h-full object-contain rounded" />
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold tracking-wider flex items-center gap-2">
                                ZENER<span className="font-light text-zener-text-muted">_CONTROL_CENTER</span>
                            </h1>
                            <span className="text-[9px] font-mono text-zener-cyan tracking-widest block uppercase">
                                Zener Holdings Operational Backbone · Synchronized Mesh
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zener-text-muted">
                        <span className="px-2 py-1 rounded bg-zener-navy/60 border border-zener-border">SYS_ID: 00-AA-99</span>
                        <span className="px-2 py-1 rounded bg-zener-navy/60 border border-zener-border">{currentTime}</span>
                        <div className="flex items-center space-x-2 px-2.5 py-1 rounded bg-zener-cyan/10 border border-zener-cyan/30">
                            <span className="w-2 h-2 rounded-full bg-zener-cyan animate-pulse"></span>
                            <span className="text-zener-cyan font-bold">HOLDINGS MESH LIVE</span>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-6 h-[calc(100vh-180px)]">

                    {/* Left Column: KPI & Metrics (3 cols) */}
                    <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
                        {kpiCards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-zener-navy/50 border border-zener-border p-5 rounded-sm hover:border-zener-cyan/50 transition-colors group"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs text-zener-text-muted uppercase tracking-widest">{card.label}</span>
                                    <CheckCircle className="w-4 h-4 text-zener-cyan opacity-50 group-hover:opacity-100" />
                                </div>
                                <div className="text-2xl font-mono font-bold text-white mb-1">{card.value}</div>
                                <div className="text-xs text-zener-cyan">{card.trend}</div>
                            </motion.div>
                        ))}

                        {/* System Health Log */}
                        <div className="flex-grow bg-zener-navy/30 border border-zener-border p-4 rounded-sm font-mono text-xs overflow-y-auto custom-scrollbar">
                            <div className="text-zener-text-muted mb-4 uppercase tracking-widest border-b border-zener-border pb-2">Event Log</div>
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="mb-2 flex space-x-2 opacity-70 hover:opacity-100 transition-opacity">
                                    <span className="text-zener-cyan">[14:02:{10 + i}]</span>
                                    <span className="text-white">Node_0{i}_Sync_Complete</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center Column: Main Visualization (6 cols) */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
                        {/* Map View */}
                        <div className="flex-grow bg-black/40 border border-zener-border rounded-sm relative overflow-hidden group">
                            {/* Grid Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                            <div className="absolute top-4 left-4 z-10">
                                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                                    <Globe className="w-4 h-4 text-zener-cyan" />
                                    GLOBAL LOGISTICS VIEW
                                </h3>
                            </div>

                            {/* Abstract Map Elements */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 border border-zener-cyan/20 rounded-full animate-spin-slow opacity-30" />
                                <div className="absolute w-48 h-48 border border-zener-cyan/40 rounded-full animate-reverse-spin opacity-40 ml-12" />
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-zener-cyan font-mono text-sm tracking-[0.2em] bg-zener-dark/80 px-4 py-1">REAL-TIME TRACKING ACTIVE</span>
                            </div>
                        </div>

                        {/* Bottom Timeline / Data Flow */}
                        <div className="h-48 bg-zener-navy/30 border border-zener-border rounded-sm p-4">
                            <h3 className="text-xs text-zener-text-muted uppercase mb-4 flex items-center gap-2">
                                <BarChart2 className="w-3 h-3" />
                                Analytics Stream
                            </h3>
                            <div className="flex items-end justify-between h-32 space-x-1">
                                {[...Array(40)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: '10%' }}
                                        animate={{ height: `${Math.random() * 80 + 10}%` }}
                                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                                        className="flex-1 bg-zener-cyan/30 hover:bg-zener-cyan transition-colors rounded-t-sm"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Database & Inventory (3 cols) */}
                    <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
                        <div className="bg-zener-navy/50 border border-zener-border p-5 rounded-sm">
                            <h3 className="text-xs text-zener-cyan uppercase mb-4 flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    <Server className="w-3 h-3 text-zener-cyan" />
                                    Holdings Mesh
                                </span>
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zener-cyan/10 border border-zener-cyan/30 text-zener-cyan">4 NODES</span>
                            </h3>
                            <div className="space-y-2.5">
                                {[
                                    { name: 'ZENER_SCM_CORE', status: 'PRIMARY', url: '/', external: false, color: 'text-zener-cyan' },
                                    { name: 'SPICE_CHAIN_NODE', status: 'ONLINE ↗', url: 'https://spicechain.vercel.app/', external: true, color: 'text-amber-400' },
                                    { name: 'MAHWAR_TERMINAL', status: 'ACTIVE ↗', url: 'https://mahwar.vercel.app/', external: true, color: 'text-emerald-400' },
                                    { name: 'STREET_SLIPP_POS', status: 'LIVE ↗', url: 'https://streetslipp.store/', external: true, color: 'text-cyan-300' },
                                ].map((node, i) => (
                                    node.external ? (
                                        <a
                                            key={i}
                                            href={node.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex justify-between items-center text-xs font-mono border-b border-zener-border/40 pb-2 last:border-0 hover:bg-zener-dark/70 transition-all p-1.5 rounded group"
                                        >
                                            <span className="text-white group-hover:text-zener-cyan transition-colors">{node.name}</span>
                                            <span className={`${node.color} text-[10px] font-bold`}>{node.status}</span>
                                        </a>
                                    ) : (
                                        <div
                                            key={i}
                                            className="flex justify-between items-center text-xs font-mono border-b border-zener-border/40 pb-2 last:border-0 bg-zener-cyan/5 p-1.5 rounded"
                                        >
                                            <span className="text-white font-bold">{node.name}</span>
                                            <span className="text-zener-cyan text-[10px] font-bold">{node.status}</span>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>

                        <div className="flex-grow bg-zener-navy/30 border border-zener-border p-5 rounded-sm">
                            <h3 className="text-xs text-zener-text-muted uppercase mb-4 flex items-center gap-2">
                                <Cpu className="w-3 h-3 text-zener-cyan" />
                                Processing Core
                            </h3>
                            <div className="grid grid-cols-2 gap-2 text-center">
                                <div className="bg-zener-dark p-3 rounded border border-zener-border/50">
                                    <div className="text-xs text-zener-text-muted mb-1">CPU Load</div>
                                    <div className="text-zener-cyan font-bold">42%</div>
                                </div>
                                <div className="bg-zener-dark p-3 rounded border border-zener-border/50">
                                    <div className="text-xs text-zener-text-muted mb-1">Memory</div>
                                    <div className="text-zener-cyan font-bold">6.2GB</div>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-center">
                                <div className="w-32 h-32 rounded-full border-t-2 border-zener-cyan animate-spin"></div>
                            </div>
                            <div className="text-center mt-4 text-xs font-mono text-zener-text-muted">
                                Optimizing Routes...
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    );
};

export default SystemDemo;
