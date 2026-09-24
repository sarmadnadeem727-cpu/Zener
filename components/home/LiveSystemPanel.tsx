import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, Activity } from 'lucide-react';

const LiveSystemPanel: React.FC = () => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-[#0a192f] p-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">

                {/* Text */}
                <div>
                    <div className="flex items-center space-x-2 text-[#64ffda] font-mono text-xs tracking-widest mb-4">
                        <Activity size={16} />
                        <span>LIVE MONITORING</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">
                        Control. Visibility. <br /> Precision.
                    </h2>
                    <p className="text-[#8892b0] text-lg">
                        Turn manual spreadsheets into live, pulse-checked dashboards. Make decisions based on what is happening now, not last week.
                    </p>
                </div>

                {/* Dashboard Mock */}
                <div className="bg-[#112240] border border-[#233554] rounded-xl p-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#64ffda] opacity-50" />

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-[#0a192f] p-4 rounded border border-[#233554]">
                            <div className="text-[#8892b0] text-xs">ORDER FULFILLMENT</div>
                            <div className="text-[#64ffda] text-2xl font-bold">98.5%</div>
                            <div className="w-full bg-[#233554] h-1 mt-2 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-[#64ffda]"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '98.5%' }}
                                    transition={{ duration: 1.5 }}
                                />
                            </div>
                        </div>
                        <div className="bg-[#0a192f] p-4 rounded border border-[#233554]">
                            <div className="text-[#8892b0] text-xs">INVENTORY HEALTH</div>
                            <div className="text-white text-2xl font-bold">Optimal</div>
                            <div className="flex space-x-1 mt-2">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-xs text-green-500">Stable</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-40 bg-[#0a192f] rounded border border-[#233554] p-4 flex items-end space-x-2 relative">
                        {[40, 60, 45, 70, 85, 60, 75, 50, 65, 90].map((h, i) => (
                            <motion.div
                                key={i}
                                className="flex-1 bg-[#64ffda]/20 hover:bg-[#64ffda] transition-colors rounded-t cursor-pointer"
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ delay: i * 0.1 }}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LiveSystemPanel;
