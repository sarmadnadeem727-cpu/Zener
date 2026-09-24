import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SnapSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const SnapSection: React.FC<SnapSectionProps> = ({ children, className = '', id }) => {
    return (
        <section id={id} className={`snap-section min-h-screen md:h-screen w-full relative overflow-visible md:overflow-hidden bg-zener-dark flex flex-col items-center justify-center py-16 md:py-0 ${className}`}>
            {children}
        </section>
    );
};

export default SnapSection;
