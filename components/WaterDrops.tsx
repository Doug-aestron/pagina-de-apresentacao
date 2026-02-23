'use client';

import React, { useEffect, useState } from 'react';

interface Drop {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

/**
 * Componente WaterDrops - Gotas de água caindo sutilmente
 * Efeito visual que remete à limpeza e pureza
 * Gotas caem em posições aleatórias com timing variado
 */
export default function WaterDrops() {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    const newDrops: Drop[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 2 + 3,
      size: Math.random() * 4 + 2,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute top-0"
          style={{
            left: `${drop.x}%`,
            animation: `drop ${drop.duration}s linear ${drop.delay}s infinite`,
          }}
        >
          <div 
            className="rounded-full bg-gradient-to-b from-cyan-300/40 to-blue-400/20"
            style={{
              width: `${drop.size}px`,
              height: `${drop.size * 1.5}px`,
              filter: 'blur(1px)',
            }}
          />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes drop {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
