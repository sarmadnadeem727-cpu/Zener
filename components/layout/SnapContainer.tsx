import React, { ReactNode } from 'react';

interface SnapContainerProps {
    children: ReactNode;
}

const SnapContainer: React.FC<SnapContainerProps> = ({ children }) => {
    return (
        <div className="snap-container min-h-screen md:h-screen w-full bg-zener-dark overflow-y-auto overflow-x-hidden scroll-smooth">
            {children}
        </div>
    );
};

export default SnapContainer;
