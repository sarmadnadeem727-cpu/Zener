
import React from 'react';

interface LogoProps {
  className?: string;
  hideText?: boolean;
  useImage?: boolean;
  subtitle?: string;
  imgClassName?: string;
}

const Logo: React.FC<LogoProps> = ({
  className = "h-10",
  hideText = false,
  useImage = true,
  subtitle = "HOLDINGS",
  imgClassName = "h-8 w-auto"
}) => {
  if (useImage) {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <div className="relative flex items-center justify-center p-1 rounded-md bg-zener-navy/90 border border-zener-cyan/40 shadow-[0_0_14px_rgba(100,255,218,0.25)] group-hover:border-zener-cyan transition-all duration-300">
          <img
            src="/logo.png"
            alt="ZENER Logo"
            className={`${imgClassName} object-contain rounded`}
          />
        </div>
        {!hideText && (
          <div className="flex flex-col">
            <span className="font-sans font-bold text-xl tracking-[0.2em] text-white transition-colors duration-300">
              ZENER
            </span>
            {subtitle && (
              <span className="text-[8px] font-mono tracking-[0.25em] text-zener-cyan/80 uppercase -mt-0.5">
                {subtitle}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
        <defs>
          <linearGradient id="blueLinkGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="40%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="greyLinkGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>
        </defs>

        <g stroke="#2563EB" strokeWidth="3" strokeLinecap="round">
          <line x1="20" y1="140" x2="60" y2="140" strokeWidth="6" />
          <line x1="40" y1="120" x2="90" y2="120" />
          <line x1="30" y1="100" x2="100" y2="100" />
          <line x1="50" y1="160" x2="80" y2="160" strokeWidth="5" />
          <circle cx="95" cy="120" r="3" fill="#2563EB" />
          <circle cx="105" cy="100" r="3" fill="#06B6D4" />
          <circle cx="85" cy="160" r="3" fill="#1E3A8A" />
        </g>

        <path d="M225 125 L260 150 C280 165, 310 165, 330 150 L350 130 C370 110, 370 80, 350 60 C330 45, 300 45, 280 60 L245 85" 
              stroke="url(#greyLinkGrad)" strokeWidth="22" strokeLinecap="round" fill="none" />
        <path d="M100 140 C80 130, 80 100, 100 80 L140 50 C160 35, 190 35, 210 50 L230 70 C250 90, 250 120, 230 140 L190 170 C170 185, 140 185, 120 170 L100 155" 
              stroke="url(#blueLinkGrad)" strokeWidth="22" strokeLinecap="round" fill="none" />
        <path d="M245 85 L215 110" 
              stroke="url(#greyLinkGrad)" strokeWidth="22" strokeLinecap="round" fill="none" />
      </svg>
      {!hideText && (
        <span className="font-logo text-2xl font-bold text-[#003366] mt-1 tracking-tight">ZENER</span>
      )}
    </div>
  );
};

export default Logo;
