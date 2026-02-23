'use client';

import React from 'react';

interface KPIItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * Componente KPIItem - Exibe um item de benefício ou impacto
 * Usado nas seções de impacto estratégico e benefícios
 * Com efeitos visuais sofisticados e animações
 */
export default function KPIItem({ icon, title, description }: KPIItemProps) {
  return (
    <div className="flex gap-5 items-start group p-4 rounded-xl hover:bg-white/60 backdrop-blur-sm transition-all duration-300">
      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-cyan-100 flex items-center justify-center text-primary-700 group-hover:from-primary-200 group-hover:to-cyan-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md group-hover:shadow-lg">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
