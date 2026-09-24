import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, WifiOff, FileText, Clock } from 'lucide-react';

const problems = [
    { icon: <WifiOff />, text: "Disconnected Systems" },
    { icon: <FileText />, text: "Manual Reporting" },
    { icon: <AlertTriangle />, text: "No Real-Time Visibility" },
    { icon: <Clock />, text: "Delayed Decision-Making" }
];

const ProblemPanel: React.FC = () => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-[#0a192f] p-6">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

                {/* Left: Infographic */}
                <div className="relative h-[400px] bg-[#112240] rounded-lg border border-[#233554] p-8 flex flex-col justify-center">
                    <div className="absolute top-4 left-4 text-[#ef4444] font-mono text-xs tracking-widest flex items-center">
                        <span className="w-2 h-2 bg-[#ef4444] rounded-full mr-2 animate-pulse" />
                        CRITICAL ALERT
                    </div>

                    <div className="space-y-6">
                        {problems.map((prob, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center space-x-4 p-4 bg-[#0a192f] rounded border border-[#ef4444]/20"
                            >
                                <div className="text-[#ef4444]">{prob.icon}</div>
                                <span className="text-[#8892b0] font-mono">{prob.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: Text */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">
                        Most Supply Chains <br />
                        <span className="text-[#8892b0]">Operate Blind.</span>
                    </h2>
                    <p className="text-[#8892b0] text-lg leading-relaxed mb-8">
                        Fragmentation kills efficiency. Without a unified digital core, your operations are reactive, slow, and vulnerable to disruption.
                    </p>
                    <div className="h-px w-32 bg-[#ef4444]" />
                </div>
            </div>
        </div>
    );
};

export default ProblemPanel;
