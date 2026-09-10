import React from 'react';

interface SusepLogoProps {
  className?: string;
  variant?: 'full' | 'badge' | 'monochrome';
  lightText?: boolean;
}

export const SusepLogo: React.FC<SusepLogoProps> = ({ 
  className = "h-10", 
  variant = 'full',
  lightText = false 
}) => {
  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img 
        src="/assets/susep-cadastrada.png" 
        alt="Selo Oficial SUSEP - Associação Cadastrada" 
        className="h-full w-auto object-contain"
      />
    </div>
  );
};
