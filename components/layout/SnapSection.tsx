import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SnapSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const SnapSection: React.FC<SnapSectionProps> = ({ children, className = '', id }) => {
    return (
        <section id={id} className={`snap-section min-h-[100dvh] md:h-screen w-full relative overflow-visible md:overflow-hidden bg-zener-dark flex flex-col items-center justify-center pt-24 pb-20 md:py-0 px-4 sm:px-6 ${className}`}>
            {children}
        </section>
    );
};

export default SnapSection;
