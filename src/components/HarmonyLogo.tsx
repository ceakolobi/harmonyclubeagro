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
  // Map size to height
  const height = size === 'sm' ? 'h-6' : size === 'lg' ? 'h-10' : 'h-8';

  return (
    <div className={`flex items-center select-none group cursor-pointer ${className}`}>
      <img 
        src="/assets/logo-harmony-agro.png" 
        alt="Harmony AGRO" 
        className={`${height} w-auto object-contain`}
      />
    </div>
  );
};
