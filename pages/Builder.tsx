import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Check, ArrowRight } from 'lucide-react';

const Builder: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#0a192f] text-white pt-24 pb-12 px-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-3xl mx-auto"
            >
                <h1 className="text-4xl font-bold mb-2">Solution Builder</h1>
                <p className="text-[#8892b0] mb-8">Configure your digital supply chain architecture.</p>

                <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="bg-[#112240] p-6 rounded-xl border border-[#233554]">
                        <h3 className="text-xl font-bold mb-4">1. Select Integration Points</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {['SAP S/4HANA', 'Oracle NetSuite', 'Salesforce', 'Custom ERP'].map(opt => (
                                <label key={opt} className="flex items-center space-x-3 p-3 bg-[#0a192f] rounded border border-[#233554] cursor-pointer hover:border-[#64ffda]">
                                    <input type="checkbox" className="accent-[#64ffda]" />
                                    <span>{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-[#112240] p-6 rounded-xl border border-[#233554]">
                        <h3 className="text-xl font-bold mb-4">2. Core Modules</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {['Inventory Optimization', 'Demand Planning', 'Logistics Tracking', 'Supplier Portal'].map(opt => (
                                <label key={opt} className="flex items-center space-x-3 p-3 bg-[#0a192f] rounded border border-[#233554] cursor-pointer hover:border-[#64ffda]">
                                    <input type="checkbox" className="accent-[#64ffda]" />
                                    <span>{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <button className="w-full py-4 bg-[#64ffda] text-[#0a192f] font-bold text-lg rounded hover:bg-[#64ffda]/90 transition-colors flex items-center justify-center">
                        Generate Architecture Proposal <ArrowRight className="ml-2" />
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Builder;
