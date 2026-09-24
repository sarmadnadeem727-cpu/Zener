import React, { ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface PageLayoutProps {
    children: ReactNode;
    showFooter?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, showFooter = true }) => {
    return (
        <div className="flex flex-col min-h-screen bg-zener-dark text-zener-text overflow-x-hidden selection:bg-zener-cyan selection:text-zener-dark">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            {showFooter && <Footer />}
        </div>
    );
};

export default PageLayout;
