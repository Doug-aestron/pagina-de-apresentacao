import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary';
}

/**
 * Componente Section - Container reutilizável para seções da página
 * Proporciona espaçamento consistente e variações de cor de fundo
 */
export default function Section({ 
  id, 
  children, 
  className = '', 
  background = 'white' 
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
  };

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
