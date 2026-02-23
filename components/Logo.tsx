'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  invert?: boolean;
  className?: string;
}

/**
 * Componente Logo - Exibe a logo da FG Services
 * Se a logo não existir, mostra um placeholder elegante
 * Suporta diferentes tamanhos e inversão de cor
 */
export default function Logo({ size = 'medium', invert = false, className = '' }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  const sizes = {
    small: { width: 40, height: 40 },
    medium: { width: 128, height: 128 },
    large: { width: 160, height: 160 },
  };

  const { width, height } = sizes[size];

  if (imageError) {
    return (
      <div 
        className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-cyan-600 ${invert ? 'brightness-200' : ''} ${className}`}
        style={{ width, height }}
      >
        <span className="text-white font-bold" style={{ fontSize: width / 3 }}>
          FG
        </span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <Image
        src="/logo-fg.png"
        alt="FG Services Logo"
        fill
        className={`object-contain ${invert ? 'brightness-0 invert' : ''}`}
        onError={() => setImageError(true)}
        priority={size === 'large'}
      />
    </div>
  );
}
