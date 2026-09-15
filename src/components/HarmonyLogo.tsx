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
              <path d="M50,50 C45,32 52,15 65,14 C78,13 84,28 76,38 C68,48 55,52 50,50Z" />
            </g>
          ))}
          <circle cx="50" cy="50" r="5" />
        </g>
      </svg>
      <span className={`font-light tracking-widest leading-none ${textClass}`}>
        <span className={isDark ? 'text-gray-900' : 'text-white'}>Harmony</span>
        <span className={isDark ? 'text-gray-400' : 'text-white/50'}>|CLUBE</span>
      </span>
    </div>
  );
};
