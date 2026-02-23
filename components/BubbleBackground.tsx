'use client';

import React, { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
}

/**
 * Componente BubbleBackground - Cria bolhas flutuantes animadas
 * Simula bolhas de sabão subindo, remetendo à limpeza
 * Efeito sutil e elegante para o fundo da página
 */
export default function BubbleBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const newBubbles: Bubble[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bottom-0 rounded-full bg-gradient-to-br from-blue-200/20 to-cyan-200/10 backdrop-blur-sm border border-white/20"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animation: `float ${bubble.duration}s ease-in-out ${bubble.delay}s infinite`,
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(-50vh) translateX(20px) scale(1);
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100vh) translateX(-20px) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
