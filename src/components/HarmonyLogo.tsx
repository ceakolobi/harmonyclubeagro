import React from 'react';

interface HarmonyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
}

/**
 * Logo Harmony: 4 arcos entrelaçados (Celtic knot) + 4 bolinhas nos cardeais.
 * Baseado no original logo_branca-agro.pdf — arcos com efeito over/under.
 *
 * Geometria (viewBox 0 0 100 100, centro 50,50):
 *   Raio do arco: 28 | Espessura (strokeWidth): 13 | Span de cada arco: ~110°
 *   Bolinhas: r=5 em (50,22) (78,50) (50,78) (22,50)
 *   Interlacing: TOP sobre RIGHT, RIGHT sobre BOTTOM, BOTTOM sobre LEFT, LEFT sobre TOP
 */
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
        <defs>
          {/* Máscaras para criar o efeito de entrelaçamento (over/under) */}
          {/* Arm1=TOP: ocultar extremo sup-esq (LEFT passa por cima do TOP ali) */}
          <mask id="hm1">
            <rect x="0" y="0" width="100" height="100" fill="white"/>
            <circle cx="30" cy="30" r="9" fill="black"/>
          </mask>
          {/* Arm2=RIGHT: ocultar extremo sup-dir (TOP passa por cima do RIGHT ali) */}
          <mask id="hm2">
            <rect x="0" y="0" width="100" height="100" fill="white"/>
            <circle cx="70" cy="30" r="9" fill="black"/>
          </mask>
          {/* Arm3=BOTTOM: ocultar extremo inf-dir (RIGHT passa por cima do BOTTOM ali) */}
          <mask id="hm3">
            <rect x="0" y="0" width="100" height="100" fill="white"/>
            <circle cx="70" cy="70" r="9" fill="black"/>
          </mask>
          {/* Arm4=LEFT: ocultar extremo inf-esq (BOTTOM passa por cima do LEFT ali) */}
          <mask id="hm4">
            <rect x="0" y="0" width="100" height="100" fill="white"/>
            <circle cx="30" cy="70" r="9" fill="black"/>
          </mask>
        </defs>

        <g fill="none" stroke="#CC6B1A" strokeWidth="13" strokeLinecap="round">
          {/* TOP arm: de (27,34) → (73,34) passando por (50,22) */}
          <path d="M27,34 A28,28 0 0,1 73,34" mask="url(#hm1)"/>
          {/* RIGHT arm: de (66,27) → (66,73) passando por (78,50) */}
          <path d="M66,27 A28,28 0 0,1 66,73" mask="url(#hm2)"/>
          {/* BOTTOM arm: de (73,66) → (27,66) passando por (50,78) */}
          <path d="M73,66 A28,28 0 0,1 27,66" mask="url(#hm3)"/>
          {/* LEFT arm: de (34,73) → (34,27) passando por (22,50) */}
          <path d="M34,73 A28,28 0 0,1 34,27" mask="url(#hm4)"/>
        </g>

        {/* 4 bolinhas nos cardeais — ficam por cima dos arcos */}
        <g fill="#CC6B1A">
          <circle cx="50" cy="22" r="5.5"/>
          <circle cx="78" cy="50" r="5.5"/>
          <circle cx="50" cy="78" r="5.5"/>
          <circle cx="22" cy="50" r="5.5"/>
        </g>
      </svg>

      <span className={`font-light tracking-widest leading-none ${textClass}`}>
        <span className={isDark ? 'text-gray-900' : 'text-white'}>Harmony</span>
        <span className={isDark ? 'text-gray-400' : 'text-white/50'}>|CLUBE</span>
      </span>
    </div>
  );
};
