import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
    { title: "Supply Chain Strategy", desc: "Digital roadmap & blueprinting" },
    { title: "ERP Implementation", desc: "SAP / Oracle / Microsoft" },
    { title: "BI & Analytics", desc: "PowerBI / Tableau / Custom Dashboards" },
    { title: "Process Automation", desc: "RPA & Workflow Optimization" },
    { title: "Inventory Intelligence", desc: "AI-driven forecasting" },
    { title: "Change Management", desc: "User adoption & training" }
];

const ServicesScene: React.FC = () => {
    return (
        <section className="min-h-screen w-full bg-[#050814] py-24 px-4 relative flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,163,193,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,163,193,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                        Core <span className="text-[#00A3C1]">Capabilities</span>.
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        End-to-end digital transformation modules designed for scalability.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,163,193,0.1)" }}
                            className="glass-panel p-8 rounded-xl relative group overflow-hidden cursor-pointer"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00A3C1] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-[#00A3C1]/10 rounded-lg group-hover:bg-[#00A3C1]/20 transition-colors">
                                    <div className="w-8 h-8 bg-[#00A3C1] mask-icon" /> {/* Placeholder icon */}
                                </div>
                                <ArrowUpRight className="text-[#00A3C1] opacity-50 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00A3C1] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesScene;
