import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layers, Building2, Wrench, Terminal, Mail } from 'lucide-react';

const MobileBottomNav: React.FC = () => {
  const { pathname } = useLocation();

  const navItems = [
    {
      name: "ZENER SCM",
      path: "/",
      icon: Layers,
      exact: true
    },
    {
      name: "Holdings",
      path: "/holdings",
      icon: Building2,
      badge: "Group"
    },
    {
      name: "Services",
      path: "/services",
      icon: Wrench
    },
    {
      name: "Control",
      path: "/system",
      icon: Terminal
    },
    {
      name: "Contact",
      path: "/contact",
      icon: Mail
    }
  ];

  return (
    <nav 
      aria-label="Mobile Navigation Bar" 
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-zener-dark/95 backdrop-blur-xl border-t border-zener-border/80 px-2 pt-2 pb-safe shadow-[0_-8px_25px_rgba(0,0,0,0.6)]"
    >
      <div className="grid grid-cols-5 items-center">
        {navItems.map((item) => {
          const isActive = item.exact 
            ? pathname === item.path 
            : pathname.startsWith(item.path);

          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1 transition-all duration-200 relative ${
                isActive 
                  ? 'text-zener-cyan' 
                  : 'text-zener-text-muted hover:text-white'
              }`}
            >
              {/* Active Glow Pill */}
              {isActive && (
                <span className="absolute -top-2 w-8 h-1 bg-zener-cyan rounded-full shadow-[0_0_8px_rgba(100,255,218,0.8)]" />
              )}

              <div className="relative">
                <Icon size={19} strokeWidth={isActive ? 2.2 : 1.8} />
                {item.badge && !isActive && (
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-zener-cyan animate-pulse" />
                )}
              </div>

              <span className={`text-[9px] font-mono tracking-wider mt-1 truncate max-w-[60px] ${
                isActive ? 'font-bold text-white' : 'font-normal'
              }`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
