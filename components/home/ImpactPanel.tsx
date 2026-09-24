import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImpactPanel: React.FC = () => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-[#112240] p-6 text-center relative overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute inset-0 corporate-grid opacity-10" />
            <div className="absolute w-[600px] h-[600px] bg-[#64ffda] rounded-full filter blur-[200px] opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-8 leading-tight">
                    Build a Smarter <br />
                    <span className="text-[#64ffda]">Supply Chain.</span>
                </h2>

                <div className="flex justify-center">
                    <Link to="/builder">
                        <button className="bg-[#64ffda] text-[#0a192f] px-10 py-5 rounded font-bold uppercase tracking-widest text-lg hover:bg-[#64ffda]/90 transition-colors flex items-center shadow-lg shadow-[#64ffda]/20">
                            Start The Conversation
                            <ArrowRight className="ml-2" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ImpactPanel;
