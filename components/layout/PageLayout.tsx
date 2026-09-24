import React, { ReactNode } from 'react';

interface PageLayoutProps {
    children: ReactNode;
    showFooter?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className="w-full min-h-screen bg-zener-dark text-zener-text overflow-x-hidden selection:bg-zener-cyan selection:text-zener-dark">
            {children}
        </div>
    );
};

export default PageLayout;
