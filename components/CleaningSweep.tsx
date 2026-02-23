'use client';

import React, { useEffect, useState } from 'react';

/**
 * Componente CleaningSweep - Efeito de "limpeza" passando pela tela
 * Cria barras de luz que atravessam a página periodicamente
 * Simula movimento de limpeza tecnológica
 */
export default function CleaningSweep() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {show && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div 
            className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent"
            style={{
              animation: 'sweep 3s ease-in-out',
              filter: 'blur(20px)',
            }}
          />
        </div>
      )}
      
      <style jsx>{`
        @keyframes sweep {
          0% {
            left: -200px;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            left: calc(100% + 200px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
