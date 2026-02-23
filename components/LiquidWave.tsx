'use client';

import React from 'react';

/**
 * Componente LiquidWave - Ondas líquidas animadas
 * Simula movimento de água/líquido de limpeza
 * Efeito visual sofisticado e moderno
 */
export default function LiquidWave() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="liquid-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0c8ce8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#36a9f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7cc5fb" stopOpacity="0.2" />
          </linearGradient>
          
          <linearGradient id="liquid-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        
        <path
          fill="url(#liquid-gradient-1)"
          d="M0,200 C320,280 420,150 720,200 C1020,250 1140,180 1440,220 L1440,0 L0,0 Z"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
              M0,200 C320,280 420,150 720,200 C1020,250 1140,180 1440,220 L1440,0 L0,0 Z;
              M0,180 C320,150 420,280 720,180 C1020,130 1140,250 1440,200 L1440,0 L0,0 Z;
              M0,200 C320,280 420,150 720,200 C1020,250 1140,180 1440,220 L1440,0 L0,0 Z
            "
          />
        </path>
        
        <path
          fill="url(#liquid-gradient-2)"
          d="M0,400 C240,480 480,350 720,400 C960,450 1200,380 1440,420 L1440,800 L0,800 Z"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0,400 C240,480 480,350 720,400 C960,450 1200,380 1440,420 L1440,800 L0,800 Z;
              M0,420 C240,350 480,480 720,420 C960,370 1200,480 1440,400 L1440,800 L0,800 Z;
              M0,400 C240,480 480,350 720,400 C960,450 1200,380 1440,420 L1440,800 L0,800 Z
            "
          />
        </path>
      </svg>
    </div>
  );
}
