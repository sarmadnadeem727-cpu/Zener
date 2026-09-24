import React, { ReactNode } from 'react';

interface SnapContainerProps {
    children: ReactNode;
}

const SnapContainer: React.FC<SnapContainerProps> = ({ children }) => {
    return (
        <div className="w-full bg-zener-dark md:snap-container md:h-screen md:overflow-y-auto overflow-x-hidden scroll-smooth">
            {children}
        </div>
    );
};

export default SnapContainer;
