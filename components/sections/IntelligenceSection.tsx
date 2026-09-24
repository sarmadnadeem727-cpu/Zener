import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, PieChart } from 'lucide-react';
import SnapSection from '../layout/SnapSection';

const IntelligenceSection: React.FC = () => {
    return (
        <SnapSection className="bg-gradient-to-b from-zener-navy to-zener-dark">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

                {/* Text Content */}
                <div className="lg:w-1/3 w-full">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-6"
                    >
                        Data Becomes <br />
                        <span className="text-zener-cyan">Intelligence.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-zener-text-muted text-sm sm:text-lg mb-4 sm:mb-8 font-light"
                    >
                        Raw data is noise. Processed data is insight. Zener transforms your supply chain metrics into a predictive intelligence layer.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-zener-cyan mb-4 lg:mb-0"
                    >
                        <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
                        <span>LIVE STREAM: ANALYTICS_V1</span>
                    </motion.div>
                </div>

                {/* Dashboard Visual */}
                <div className="lg:w-2/3 w-full bg-zener-glass border border-zener-border rounded-xl p-4 sm:p-6 relative overflow-hidden shadow-2xl">
                    {/* Dashboard Header */}
                    <div className="flex justify-between items-center border-b border-zener-border pb-4 mb-6">
                        <span className="text-xs font-mono text-zener-text-muted uppercase">System Overview</span>
                        <div className="flex space-x-2">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Chart 1: Predictive Curve */}
                        <div className="bg-zener-navy/50 p-4 rounded border border-zener-border">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-semibold text-white">Demand Forecast</h4>
                                <TrendingUp className="w-4 h-4 text-zener-cyan" />
                            </div>
                            <div className="h-32 flex items-end justify-between space-x-1">
                                {[30, 45, 40, 60, 55, 75, 80, 70, 90, 100].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                                        className="w-full bg-gradient-to-t from-zener-cyan/20 to-zener-cyan rounded-t-sm opacity-80"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Chart 2: Inventory Heatmap (Abstract) */}
                        <div className="bg-zener-navy/50 p-4 rounded border border-zener-border">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-semibold text-white">Inventory Heatmap</h4>
                                <PieChart className="w-4 h-4 text-zener-cyan" />
                            </div>
                            <div className="grid grid-cols-4 gap-2 h-32">
                                {Array.from({ length: 16 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: Math.random() * 0.8 + 0.2 }}
                                        transition={{ duration: 1, delay: i * 0.05 }}
                                        className="bg-zener-cyan rounded-sm"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Metrics */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        {['Efficiency', 'Latency', 'Uptime'].map((label, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 + (idx * 0.1) }}
                                className="text-center p-2 bg-zener-dark rounded"
                            >
                                <div className="text-zener-cyan text-lg font-bold font-mono">99.{8 + idx}%</div>
                                <div className="text-xs text-zener-text-muted uppercase">{label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </SnapSection>
    );
};

export default IntelligenceSection;
