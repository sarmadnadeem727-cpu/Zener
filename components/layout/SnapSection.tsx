import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SnapSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const SnapSection: React.FC<SnapSectionProps> = ({ children, className = '', id }) => {
    return (
        <div id={id} className={`snap-section h-screen w-full relative overflow-hidden bg-zener-dark flex flex-col items-center justify-center ${className}`}>
            {children}
        </div>
    );
};

export default SnapSection;
