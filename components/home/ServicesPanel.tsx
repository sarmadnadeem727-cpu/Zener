import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Database, BarChart3, Cpu, Layers, Zap } from 'lucide-react';

const services = [
    { title: "Strategy", icon: <Globe /> },
    { title: "Integration", icon: <Database /> },
    { title: "Analytics", icon: <BarChart3 /> },
    { title: "Automation", icon: <Cpu /> },
    { title: "Inventory", icon: <Layers /> },
    { title: "Change Mgmt", icon: <Zap /> }
];

const ServicesPanel: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a192f] p-6">
            <h2 className="text-3xl md:text-5xl font-bold text-[#ccd6f6] mb-12">Modular Capabilities</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
                {services.map((s, i) => (
                    <motion.div
                        key={i}
                        className="bg-[#112240] border border-[#233554] p-8 rounded-xl flex flex-col items-center justify-center cursor-pointer group hover:border-[#64ffda] hover:-translate-y-1 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                    >
                        <div className="mb-4 text-[#8892b0] group-hover:text-[#64ffda] group-hover:scale-110 transition-all duration-300">
                            {React.cloneElement(s.icon as any, { size: 32 })}
                        </div>
                        <h3 className="text-[#ccd6f6] font-bold group-hover:text-white">{s.title}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPanel;
