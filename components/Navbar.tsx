'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';

/**
 * Componente Navbar - Barra de navegação flutuante com glassmorphism
 * Aparece após scroll e permite navegação rápida entre seções
 * Design moderno e profissional com logo da empresa
 */
export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { id: 'diferenciais', label: 'Diferenciais' },
    { id: 'solucao', label: 'Solução' },
    { id: 'comparativo', label: 'Comparativo' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'funcionalidades', label: 'Funcionalidades' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'cta', label: 'Proposta' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Logo size="small" />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50/50 rounded-lg transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollToSection('cta')}
            className="bg-gradient-to-r from-primary-700 to-primary-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300"
          >
            Começar Agora
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
