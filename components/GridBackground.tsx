'use client';

import React from 'react';

/**
 * Componente GridBackground - Grid tecnológico de fundo
 * Cria uma grade sutil que remete a tecnologia e precisão
 * Efeito moderno e profissional
 */
export default function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(12, 140, 232, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(12, 140, 232, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
