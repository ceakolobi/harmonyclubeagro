import React from 'react';

interface HarmonyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
}

export const HarmonyLogo: React.FC<HarmonyLogoProps> = ({ 
  className = "", 
  size = 'md',
  isDark = false 
}) => {
  const svgSize = size === 'sm' ? 28 : size === 'lg' ? 44 : 36;
  const textClass = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base';

  return (
    <div className={`flex items-center gap-2.5 select-none cursor-pointer ${className}`}>
      <svg width={svgSize} height={svgSize} viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g fill="#CC6B1A">
          {[0, 90, 180, 270].map((angle) => (
            <g key={angle} transform={`rotate(${angle}, 50, 50)`}>
              <path d="M52,22 C58,12 76,10 84,20 C92,30 86,46 76,50 C66,54 56,46 54,36 C52,28 50,24 52,22Z" />
              <circle cx="84" cy="20" r="5.5" />
            </g>
          ))}
        </g>
      </svg>
      <span className={`font-light tracking-widest leading-none ${textClass}`}>
        <span className="text-white">Harmony</span>
        <span className="text-white/50">|AGRO</span>
      </span>
    </div>
  );
};
