'use client';

import React from 'react';

interface DashboardCardProps {
  title: string;
  revenue: number;
  cost: number;
  margin: number;
  status: 'healthy' | 'critical';
}

/**
 * Componente DashboardCard - Simula visualização de um contrato
 * Exibe receita, custos e margem com indicador visual de status
 * Verde para contratos saudáveis, vermelho para contratos críticos
 * Com efeitos de glassmorphism e bordas brilhantes
 */
export default function DashboardCard({ 
  title, 
  revenue, 
  cost, 
  margin,
  status 
}: DashboardCardProps) {
  const isHealthy = status === 'healthy';
  const marginColor = isHealthy ? 'text-green-600' : 'text-red-600';
  const borderColor = isHealthy ? 'border-green-500' : 'border-red-500';
  const bgColor = isHealthy ? 'bg-gradient-to-br from-green-50/80 to-emerald-50/60' : 'bg-gradient-to-br from-red-50/80 to-rose-50/60';
  const badgeColor = isHealthy ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
  const badgeText = isHealthy ? '✓ Saudável' : '⚠ Crítico';
  const glowColor = isHealthy ? 'shadow-green-500/20' : 'shadow-red-500/20';

  return (
    <div className={`group relative rounded-2xl border-2 ${borderColor} ${bgColor} backdrop-blur-sm p-6 shadow-xl ${glowColor} transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] overflow-hidden`}>
      {/* Efeito de brilho animado na borda */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isHealthy ? 'bg-gradient-to-r from-green-400/20 via-emerald-400/30 to-green-400/20' : 'bg-gradient-to-r from-red-400/20 via-rose-400/30 to-red-400/20'}`} 
        style={{ 
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s infinite'
        }}
      />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${badgeColor} shadow-md`}>
            {badgeText}
          </span>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-gray-600 font-medium">Receita Mensal:</span>
            <span className="text-base font-bold text-gray-900">
              {revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-gray-600 font-medium">Custo Total:</span>
            <span className="text-base font-bold text-gray-900">
              {cost.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
          
          <div className="pt-4 border-t-2 border-gray-300/50">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-700">Margem:</span>
              <span className={`text-3xl font-bold ${marginColor} drop-shadow-md`}>
                {margin > 0 ? '+' : ''}{margin.toFixed(1)}%
              </span>
            </div>
          </div>
          
          {/* Barra visual de margem com animação */}
          <div className="w-full bg-gray-300 rounded-full h-3 mt-3 overflow-hidden shadow-inner">
            <div 
              className={`h-3 rounded-full transition-all duration-1000 ease-out ${isHealthy ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-rose-500'} shadow-lg`}
              style={{ 
                width: `${Math.min(Math.abs(margin) * 3, 100)}%`,
                boxShadow: isHealthy ? '0 0 10px rgba(34, 197, 94, 0.5)' : '0 0 10px rgba(239, 68, 68, 0.5)'
              }}
            />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
