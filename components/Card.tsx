'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'danger' | 'success';
}

/**
 * Componente Card - Card genérico com sombra suave e efeitos visuais
 * Usado para exibir informações em blocos destacados
 * Suporta variantes para diferentes estados (padrão, perigo, sucesso)
 * Inclui efeitos de glassmorphism e animações sutis
 */
export default function Card({ 
  children, 
  className = '',
  variant = 'default'
}: CardProps) {
  const variants = {
    default: 'bg-white/80 border-gray-200/50 hover:border-primary-300',
    danger: 'bg-red-50/80 border-red-300/50 hover:border-red-400',
    success: 'bg-green-50/80 border-green-300/50 hover:border-green-400',
  };

  return (
    <div 
      className={`group relative rounded-xl border ${variants[variant]} backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 p-6 overflow-hidden ${className}`}
    >
      {/* Efeito de brilho sutil no hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 via-cyan-50/0 to-primary-50/0 group-hover:from-primary-50/20 group-hover:via-cyan-50/10 group-hover:to-primary-50/20 transition-all duration-500 pointer-events-none" />
      
      {/* Conteúdo do card */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
