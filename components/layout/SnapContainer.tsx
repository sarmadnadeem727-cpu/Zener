import React, { ReactNode } from 'react';

interface SnapContainerProps {
    children: ReactNode;
}

const SnapContainer: React.FC<SnapContainerProps> = ({ children }) => {
    return (
        <div className="snap-container h-screen w-full bg-zener-dark overflow-y-scroll overflow-x-hidden scroll-smooth">
            {children}
        </div>
    );
};

export default SnapContainer;
