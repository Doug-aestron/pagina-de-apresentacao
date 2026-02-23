'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  invert?: boolean;
  className?: string;
}

/**
 * Componente Logo - Exibe a logo da empresa
 * Se a logo não existir, mostra um placeholder elegante
 * Suporta diferentes tamanhos e inversão de cor
 */
export default function Logo({ size = 'medium', invert = false, className = '' }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  const sizes = {
    small: { width: 200, height: 200 },
    medium: { width: 100, height: 100 },
    large: { width: 120, height: 120 },
  };

  const { width, height } = sizes[size];

  if (imageError) {
    return (
      <div 
        className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-cyan-600 ${invert ? 'brightness-200' : ''} ${className}`}
        style={{ width, height }}
      >
        <span className="text-white font-bold" style={{ fontSize: width / 3 }}>
          PGI
        </span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <Image
        src={siteConfig.logo}
        alt="Logo"
        fill
        className={`object-contain ${invert ? 'brightness-0 invert' : ''}`}
        onError={() => setImageError(true)}
        priority={size === 'large'}
      />
    </div>
  );
}
