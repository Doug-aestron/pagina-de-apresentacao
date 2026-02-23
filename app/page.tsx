'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';
import { 
  TrendingUp, 
  DollarSign, 
  Eye, 
  BarChart3, 
  Globe, 
  Zap,
  AlertTriangle,
  Clock,
  Target,
  PieChart,
  FileText,
  Shield,
  Users,
  Smartphone,
  Lock,
  Mail,
  RefreshCw,
  Database,
  Settings,
  Cloud,
  FileCheck,
  Trophy,
  Sparkles,
  CheckCircle2,
  XCircle,
  CreditCard,
  Droplet,
  HardHat,
  BarChart4,
  Briefcase,
  TrendingDown,
  Bell,
  Award,
  Activity,
  Banknote,
  ArrowUpRight,
  LineChart,
  Building2,
  Wallet,
  Receipt,
  GitBranch,
  Gauge,
  MessageSquare,
  Package,
  Layers
} from 'lucide-react';
import Section from '@/components/Section';
import Card from '@/components/Card';
import DashboardCard from '@/components/DashboardCard';
import KPIItem from '@/components/KPIItem';
import BubbleBackground from '@/components/BubbleBackground';
import SparkleEffect from '@/components/SparkleEffect';
import GridBackground from '@/components/GridBackground';
import FloatingParticles from '@/components/FloatingParticles';
import LiquidWave from '@/components/LiquidWave';
import CleaningSweep from '@/components/CleaningSweep';
import WaterDrops from '@/components/WaterDrops';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Navbar flutuante com glassmorphism */}
      <Navbar />

      {/* Efeitos de Fundo - Tecnológico com tema de limpeza */}
      <BubbleBackground />
      <SparkleEffect />
      <GridBackground />
      <FloatingParticles />
      <LiquidWave />
      <WaterDrops />
      <CleaningSweep />

      {/* HERO SECTION - Seção principal de impacto com glassmorphism */}
      <Section id="hero" background="white" className="pt-32 pb-20 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-transparent pointer-events-none" />
        
        {/* Logo como marca d'água no fundo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <Image
            src="/aestron-logo.png"
            alt="Aestron Watermark"
            width={800}
            height={800}
            className="object-contain"
          />
        </div>
        
        <div className="text-center max-w-4xl mx-auto relative">
          {/* Logo e branding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center mb-6"
          >
            <Logo size="large" className="drop-shadow-2xl mb-2" />
           
          </motion.div>

          
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-cyan-600 bg-clip-text text-transparent">{siteConfig.tagline}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-500 mb-6 font-medium"
          >
            Sistema de Gestão Inteligente
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
          >
            Transformando dados operacionais em decisões estratégicas para crescimento sustentável.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button 
              onClick={openContactModal}
              className="group relative bg-gradient-to-r from-primary-700 to-primary-600 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-primary-500/50 transform hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">Começar Agora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>

          {/* Indicadores flutuantes decorativos expandidos */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 space-y-4"
          >
            <div className="flex justify-center gap-4 flex-wrap">
              {[
            { icon: <CreditCard className="w-4 h-4" />, label: 'Custos' },
            { icon: <FileText className="w-4 h-4" />, label: 'Contratos' },
            { icon: <Briefcase className="w-4 h-4" />, label: 'Financeiro' },
            { icon: <BarChart3 className="w-4 h-4" />, label: 'Analytics' },
            { icon: <Sparkles className="w-4 h-4" />, label: 'IA' },
            { icon: <Smartphone className="w-4 h-4" />, label: 'Mobile' },
          ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 + i * 0.1 }}
                  className="px-6 py-3 bg-white/60 backdrop-blur-md rounded-full border border-primary-200/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  {item.icon}
                  <span className="text-sm font-semibold text-primary-800">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 3
              }}
              whileHover={{ scale: 1.05 }}
              className="flex justify-center"
            >
              <div className="relative group">
                {/* Glow effect animado */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                
                {/* Card principal */}
                <div className="relative inline-flex items-center gap-4 px-10 py-6 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl shadow-2xl border-2 border-gray-400/30 transition-all duration-500">
                  {/* Conteúdo */}
                  <div className="text-left">
                    <div className="text-xs font-black text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Solução Completa
                    </div>
                    <div className="text-base font-bold text-white/95 leading-tight">
                      15+ Módulos Integrados | Cloud Native | API Aberta
                    </div>
                  </div>

                  {/* Badge de destaque */}
                  <div className="absolute -top-3 -right-3">
                    <div className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full text-xs font-black text-white shadow-lg border-2 border-white animate-bounce">
                      COMPLETO
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* SEÇÃO - O PROBLEMA ATUAL */}
      <Section id="problema" background="gray" className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Desafios Atuais da Gestão
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Identificamos pontos críticos que limitam o crescimento estratégico de empresas de terceirização
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Eye className="w-12 h-12 text-red-500" />,
              title: 'Falta de Visibilidade de Custos',
              description: 'Impossibilidade de rastrear custos detalhados por contrato e identificar onde o orçamento está sendo consumido.'
            },
            {
              icon: <GitBranch className="w-12 h-12 text-red-500" />,
              title: 'Controle Financeiro Fragmentado',
              description: 'Ausência de estrutura unificada para gestão financeira, dificultando análises consolidadas.'
            },
            {
              icon: <TrendingDown className="w-12 h-12 text-red-500" />,
              title: 'Contratos Deficitários Ocultos',
              description: 'Dificuldade em identificar rapidamente quais contratos estão gerando prejuízo ou baixa rentabilidade.'
            },
            {
              icon: <Activity className="w-12 h-12 text-red-500" />,
              title: 'Previsibilidade Inexistente',
              description: 'Falta de projeção de fluxo de caixa e previsão de resultados futuros baseados em dados históricos.'
            },
            {
              icon: <AlertTriangle className="w-12 h-12 text-red-500" />,
              title: 'Decisões sem Dados',
              description: 'Gestão baseada em intuição e percepção ao invés de análises quantitativas e indicadores precisos.'
            },
            {
              icon: <Clock className="w-12 h-12 text-red-500" />,
              title: 'Tempo Desperdiçado',
              description: 'Horas gastas compilando relatórios manualmente que poderiam ser automatizados e visualizados em tempo real.'
            },
          ].map((problema, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full backdrop-blur-sm bg-white/80 border-gray-200/50">
                <div className="mb-4 flex justify-center">{problema.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {problema.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problema.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* NOVA SEÇÃO - POR QUE SOMOS DIFERENTES */}
      <Section id="diferenciais" background="white" className="relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/20 via-cyan-50/10 to-primary-50/20 pointer-events-none" />
        
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full text-sm font-bold shadow-lg">
              <Trophy className="w-4 h-4" />
              DIFERENCIAL COMPETITIVO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Por que Nossa Solução é <span className="bg-gradient-to-r from-primary-700 to-cyan-600 bg-clip-text text-transparent">Única no Mercado</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Não é apenas mais um software de gestão. É uma plataforma inteligente especializada no setor de serviços terceirizados.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Target className="w-8 h-8" />,
              title: 'Especialização Vertical',
              description: 'Desenvolvido ESPECIFICAMENTE para empresas de terceirização de serviços. Não é um ERP genérico adaptado.',
              metric: '100% Focado'
            },
            {
              icon: <Sparkles className="w-8 h-8" />,
              title: 'IA e Análise Preditiva',
              description: 'Algoritmos inteligentes que preveem problemas antes que aconteçam e sugerem ações corretivas automáticas.',
              metric: 'Machine Learning'
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: 'Tempo Real Verdadeiro',
              description: 'Não são relatórios processados à noite. São dashboards que atualizam a cada movimentação da operação.',
              metric: 'Live Data'
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-t-4 border-amber-500 bg-gradient-to-br from-amber-50/50 to-white">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                  <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold mb-3">
                    {item.metric}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SEÇÃO - A SOLUÇÃO PROPOSTA (EXPANDIDA) */}
      <Section id="solucao" background="white" className="relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent pointer-events-none" />
        
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Plataforma de <span className="bg-gradient-to-r from-primary-700 to-cyan-600 bg-clip-text text-transparent">Gestão Inteligente</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Sistema integrado que conecta todas as áreas operacionais e transforma dados em inteligência estratégica
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-semibold flex items-center gap-2">
                <Smartphone className="w-4 h-4" /> Web & Mobile
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-semibold flex items-center gap-2">
                <Cloud className="w-4 h-4" /> Cloud Native
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-semibold flex items-center gap-2">
                <Lock className="w-4 h-4" /> Segurança Enterprise
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-semibold flex items-center gap-2">
                <RefreshCw className="w-4 h-4" /> API Aberta
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Controle Total de Custos - EXPANDIDO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="border-l-4 border-primary-600 h-full backdrop-blur-sm bg-white/90 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-600 flex items-center justify-center shadow-md">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Controle Total de Custos
                  </h3>
                  <p className="text-xs text-primary-600 font-semibold">Rastreamento Granular em Tempo Real</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-primary-50/50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Droplet className="w-5 h-5 text-primary-600" /> Insumos de Limpeza
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-6">
                    <li>• Consumo por contrato, setor e colaborador</li>
                    <li>• Comparativo de fornecedores e preços</li>
                    <li>• Alertas de estoque mínimo automáticos</li>
                    <li>• Histórico de compras e tendências</li>
                    <li>• Curva ABC de produtos mais usados</li>
                  </ul>
                </div>

                <div className="p-3 bg-cyan-50/50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-cyan-600" /> Combustível e Logística
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-6">
                    <li>• Abastecimento por veículo com validação GPS</li>
                    <li>• Consumo médio por km rodado</li>
                    <li>• Detecção de anomalias e fraudes</li>
                    <li>• Otimização de rotas por contrato</li>
                    <li>• Projeção de custos logísticos</li>
                  </ul>
                </div>

                <div className="p-3 bg-green-50/50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <HardHat className="w-5 h-5 text-green-600" /> Benefícios e EPIs
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-6">
                    <li>• Vales por colaborador e por contrato</li>
                    <li>• Rastreio de EPIs entregues e devolvidos</li>
                    <li>• Controle de validade de equipamentos</li>
                    <li>• Custos de benefícios por centro de custo</li>
                    <li>• Relatórios de conformidade NR6</li>
                  </ul>
                </div>

                <div className="p-3 bg-purple-50/50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-purple-600" /> Rateios Inteligentes
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-6">
                    <li>• Distribuição automática de custos fixos</li>
                    <li>• Alocação proporcional por receita/horas</li>
                    <li>• Custos administrativos por contrato</li>
                    <li>• Simulações de cenários de rateio</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Gestão Inteligente de Contratos - EXPANDIDO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="border-l-4 border-primary-600 h-full backdrop-blur-sm bg-white/90 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-600 flex items-center justify-center shadow-md">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Gestão Inteligente de Contratos
                  </h3>
                  <p className="text-xs text-primary-600 font-semibold">Analytics Avançado de Performance</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-blue-50/50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Banknote className="w-5 h-5 text-blue-600" /> Análise Financeira Completa
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-6">
                    <li>• Receita prevista vs realizada por período</li>
                    <li>• Cálculo automático de margem bruta e líquida</li>
                    <li>• Projeção de faturamento futuro</li>
                    <li>• Identificação de sazonalidades</li>
                    <li>• Simulador de reajuste de contratos</li>
                  </ul>
                </div>

                <div className="p-3 bg-red-50/50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" /> Sistema de Alertas Inteligentes
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-6">
                    <li>• Notificação de contratos com margem negativa</li>
                    <li>• Alerta de vencimento e renovações</li>
                    <li>• Detecção de desvios de orçamento</li>
                    <li>• Avisos de inadimplência de clientes</li>
                    <li>• Relatório automático de contratos críticos</li>
                  </ul>
                </div>

                <div className="p-3 bg-emerald-50/50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" /> Ranking e Benchmarking
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-6">
                    <li>• Top 10 contratos mais rentáveis</li>
                    <li>• Comparação de margem entre contratos</li>
                    <li>• Análise de eficiência operacional</li>
                    <li>• Identificação de best practices</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Módulo Financeiro Estruturado - EXPANDIDO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="border-l-4 border-primary-600 h-full backdrop-blur-sm bg-white/90 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-600 flex items-center justify-center shadow-md">
                  <Wallet className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Módulo Financeiro Enterprise
                  </h3>
                  <p className="text-xs text-primary-600 font-semibold">Gestão Financeira Profissional</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-indigo-50/50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Receipt className="w-5 h-5 text-indigo-600" /> Contas a Pagar/Receber
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-6">
                    <li>• Lançamentos com anexos de documentos</li>
                    <li>• Conciliação bancária automática</li>
                    <li>• Agendamento de pagamentos recorrentes</li>
                    <li>• Controle de inadimplência com histórico</li>
                    <li>• Múltiplas contas bancárias e cartões</li>
                    <li>• Integração com bancos via API (Pix, boletos)</li>
                  </ul>
                </div>

                <div className="p-3 bg-teal-50/50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-teal-600" /> Fluxo de Caixa Preditivo
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-6">
                    <li>• Projeção de 12 meses com IA</li>
                    <li>• Simulação de cenários (otimista/pessimista)</li>
                    <li>• Visualização gráfica de tendências</li>
                    <li>• Alertas de déficit programado</li>
                    <li>• Sugestões de ações preventivas</li>
                  </ul>
                </div>

                <div className="p-3 bg-orange-50/50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-orange-600" /> Centro de Custos Avançado
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-6">
                    <li>• Departamentos, projetos e filiais</li>
                    <li>• Hierarquia multi-nível de custos</li>
                    <li>• Budget e orçamento por centro</li>
                    <li>• Comparativo realizado vs orçado</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Painel Executivo da Diretoria - EXPANDIDO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="border-l-4 border-primary-600 h-full backdrop-blur-sm bg-white/90 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-600 flex items-center justify-center shadow-md">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Painel Executivo da Diretoria
                  </h3>
                  <p className="text-xs text-primary-600 font-semibold">Business Intelligence em Tempo Real</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-violet-50/50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <LineChart className="w-5 h-5 text-violet-600" /> Dashboards Executivos
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-6">
                    <li>• Visão 360° da operação em uma tela</li>
                    <li>• KPIs personalizáveis por diretor</li>
                    <li>• Gráficos interativos e drill-down</li>
                    <li>• Comparativos período a período</li>
                    <li>• Acesso via mobile/tablet em tempo real</li>
                  </ul>
                </div>

                <div className="p-3 bg-pink-50/50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-pink-600" /> Inteligência Artificial
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-6">
                    <li>• Diagnóstico automático de problemas</li>
                    <li>• Sugestões de ações corretivas</li>
                    <li>• Previsão de resultados futuros</li>
                    <li>• Detecção de padrões e anomalias</li>
                    <li>• Insights acionáveis gerados por IA</li>
                  </ul>
                </div>

                <div className="p-3 bg-sky-50/50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-sky-600" /> Relatórios Gerenciais
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-6">
                    <li>• Relatórios customizáveis em PDF/Excel</li>
                    <li>• Agendamento automático de envios</li>
                    <li>• Consolidação multi-empresa</li>
                    <li>• Exportação para análise externa</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* NOVA SEÇÃO - FUNCIONALIDADES AVANÇADAS */}
      <Section id="funcionalidades" background="gray" className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-gradient-to-r from-primary-100 to-cyan-100 text-primary-800 rounded-full text-sm font-bold shadow-lg">
              <Zap className="w-4 h-4" />
              RECURSOS EXCLUSIVOS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Funcionalidades que <span className="bg-gradient-to-r from-primary-700 to-cyan-600 bg-clip-text text-transparent">Nenhum Concorrente</span> Oferece
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tecnologia de ponta desenvolvida especificamente para o setor de terceirização de serviços
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: <Users className="w-10 h-10 text-white" />,
              title: 'Integração Completa com RH',
              items: ['Importação automática de folha', 'Sincronização com sistemas de ponto', 'Cálculo de custos de pessoal por contrato', 'Projeção de 13º e férias', 'Análise de produtividade por funcionário']
            },
            {
              icon: <Smartphone className="w-10 h-10 text-white" />,
              title: 'App Mobile Nativo',
              items: ['Aprovações de despesas no celular', 'Captura de fotos de notas fiscais', 'Check-in/out de serviços', 'Notificações push em tempo real', 'Dashboard mobile otimizado']
            },
            {
              icon: <Lock className="w-10 h-10 text-white" />,
              title: 'Segurança e Compliance',
              items: ['Auditoria completa de todas as ações', 'Controle de acesso por perfil', 'Backup automático diário', 'Conformidade com LGPD', 'Certificação SSL e criptografia']
            },
            {
              icon: <Mail className="w-10 h-10 text-white" />,
              title: 'Automação de Comunicação',
              items: ['E-mails automáticos de cobrança', 'Notificações de vencimento', 'Relatórios periódicos agendados', 'WhatsApp API para alertas críticos', 'Portal do cliente personalizado']
            },
            {
              icon: <RefreshCw className="w-10 h-10 text-white" />,
              title: 'Integrações Bancárias',
              items: ['Open Banking conectado', 'Geração automática de boletos', 'Pix integrado (envio/recebimento)', 'Conciliação automática OFX/CNAB', 'Multi-bancos simultâneos']
            },
            {
              icon: <BarChart3 className="w-10 h-10 text-white" />,
              title: 'Business Intelligence',
              items: ['Cubos OLAP para análises complexas', 'Filtros dinâmicos multicamada', 'Exportação para Power BI/Tableau', 'Dashboards compartilháveis', 'Análise comparativa de períodos']
            },
            {
              icon: <Settings className="w-10 h-10 text-white" />,
              title: 'Automação de Processos',
              items: ['Workflows customizáveis', 'Aprovações em cadeia configuráveis', 'Regras de negócio programáveis', 'Ações automáticas baseadas em eventos', 'Robôs de importação de dados']
            },
            {
              icon: <Globe className="w-10 h-10 text-white" />,
              title: 'API Aberta e Webhooks',
              items: ['API REST completa documentada', 'Webhooks para eventos em tempo real', 'Integração com qualquer sistema', 'SDKs para desenvolvimento próprio', 'Extensibilidade total da plataforma']
            },
            {
              icon: <FileCheck className="w-10 h-10 text-white" />,
              title: 'Gestão Documental',
              items: ['Upload ilimitado de documentos', 'OCR para leitura de notas fiscais', 'Versionamento de contratos', 'Assinatura eletrônica integrada', 'Busca inteligente por conteúdo']
            },
          ].map((funcionalidade, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full border-t-4 border-primary-600">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">{funcionalidade.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  {funcionalidade.title}
                </h3>
                <ul className="space-y-1.5">
                  {funcionalidade.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* NOVA SEÇÃO - TECNOLOGIA E ARQUITETURA */}
      <Section id="tecnologia" background="white" className="relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/10 via-transparent to-cyan-50/10 pointer-events-none" />
        
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-gradient-to-r from-slate-100 to-gray-100 text-slate-800 rounded-full text-sm font-bold shadow-lg">
              <Database className="w-4 h-4" />
              STACK TECNOLÓGICO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Arquitetura <span className="bg-gradient-to-r from-primary-700 to-cyan-600 bg-clip-text text-transparent">Enterprise</span> de Alta Performance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Construído com as tecnologias mais modernas e escaláveis do mercado
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              categoria: 'Backend',
              tecnologias: ['Node.js / NestJS', 'PostgreSQL', 'Redis Cache', 'Docker', 'Microserviços']
            },
            {
              categoria: 'Frontend',
              tecnologias: ['React / Next.js', 'TypeScript', 'TailwindCSS', 'PWA Ready', 'Responsive Design']
            },
            {
              categoria: 'Infraestrutura',
              tecnologias: ['AWS / Azure', 'Auto-scaling', 'CDN Global', 'Load Balancer', '99.9% SLA']
            },
            {
              categoria: 'Segurança',
              tecnologias: ['JWT Auth', 'OAuth 2.0', 'Firewall WAF', 'Backup Diário', 'Criptografia AES-256']
            },
          ].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center border-2 border-gray-300">
                <h3 className="text-xl font-bold text-primary-700 mb-4">{tech.categoria}</h3>
                <div className="space-y-2">
                  {tech.tecnologias.map((item, i) => (
                    <div key={i} className="px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-800">
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Diferenciais Técnicos */}
        <div className="mt-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary-900 to-primary-800 text-white border-none shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                <Zap className="w-6 h-6" /> Performance e Escalabilidade
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{'<'}100ms</div>
                  <div className="text-sm text-primary-200">Tempo de resposta médio</div>
                </div>
                <div className="text-center border-x border-primary-700/50">
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="text-sm text-primary-200">Usuários simultâneos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-sm text-primary-200">Disponibilidade garantida</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* NOVA SEÇÃO - COMPARATIVO COM CONCORRÊNCIA */}
      <Section id="comparativo" background="gray" className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-bold shadow-lg">
              <BarChart4 className="w-4 h-4" />
              ANÁLISE COMPARATIVA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossa Solução vs <span className="text-red-600">Mercado</span>
            </h2>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-2 border-primary-200">
              <div className="grid grid-cols-3 bg-gradient-to-r from-primary-700 to-primary-600 text-white font-bold text-sm p-4">
                <div>Funcionalidade</div>
                <div className="text-center flex items-center justify-center gap-2">
                  <Trophy className="w-4 h-4" /> Nossa Solução
                </div>
                <div className="text-center">Concorrentes</div>
              </div>
              
              {[
                { feature: 'Especialização em Limpeza/Facilities', usIcon: <CheckCircle2 className="w-5 h-5 text-green-600" />, us: '100% Focado', themIcon: <XCircle className="w-5 h-5 text-red-600" />, them: 'Genérico' },
                { feature: 'Cálculo de Margem por Contrato', usIcon: <CheckCircle2 className="w-5 h-5 text-green-600" />, us: 'Automático Real-Time', themIcon: <AlertTriangle className="w-5 h-5 text-orange-600" />, them: 'Manual/Planilha' },
                { feature: 'Rateio de Custos Inteligente', usIcon: <CheckCircle2 className="w-5 h-5 text-green-600" />, us: 'IA + Múltiplos Critérios', themIcon: <AlertTriangle className="w-5 h-5 text-orange-600" />, them: 'Rateio Simples' },
                { feature: 'Análise Preditiva', usIcon: <CheckCircle2 className="w-5 h-5 text-green-600" />, us: 'Machine Learning', themIcon: <XCircle className="w-5 h-5 text-red-600" />, them: 'Não Possui' },
                { feature: 'Integração Bancária', usIcon: <CheckCircle2 className="w-5 h-5 text-green-600" />, us: 'Open Banking + Pix', themIcon: <AlertTriangle className="w-5 h-5 text-orange-600" />, them: 'Limitada' },
                { feature: 'App Mobile Nativo', usIcon: <CheckCircle2 className="w-5 h-5 text-green-600" />, us: 'iOS + Android', themIcon: <AlertTriangle className="w-5 h-5 text-orange-600" />, them: 'Apenas Web' },
                { feature: 'Alertas Inteligentes', usIcon: <CheckCircle2 className="w-5 h-5 text-green-600" />, us: 'Proativos por IA', themIcon: <AlertTriangle className="w-5 h-5 text-orange-600" />, them: 'Notificações Básicas' },
                { feature: 'Dashboard Executivo', usIcon: <CheckCircle2 className="w-5 h-5 text-green-600" />, us: 'Personalizável', themIcon: <AlertTriangle className="w-5 h-5 text-orange-600" />, them: 'Fixo/Limitado' },
                { feature: 'Suporte Especializado', usIcon: <CheckCircle2 className="w-5 h-5 text-green-600" />, us: 'Consultor Dedicado', themIcon: <AlertTriangle className="w-5 h-5 text-orange-600" />, them: 'Ticket Genérico' },
                { feature: 'Custo de Implantação', usIcon: <CheckCircle2 className="w-5 h-5 text-green-600" />, us: 'Modular e Flexível', themIcon: <AlertTriangle className="w-5 h-5 text-orange-600" />, them: 'Alto e Rígido' },
              ].map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-primary-50/30 transition-colors duration-200`}
                >
                  <div className="font-medium text-gray-900 text-sm">{row.feature}</div>
                  <div className="text-center font-semibold text-green-600 text-sm flex items-center justify-center gap-2">
                    {row.usIcon}
                    {row.us}
                  </div>
                  <div className="text-center font-semibold text-gray-500 text-sm flex items-center justify-center gap-2">
                    {row.themIcon}
                    {row.them}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SEÇÃO - SIMULAÇÃO VISUAL DE DASHBOARD */}
      <Section id="dashboard" background="primary" className="bg-gradient-to-br from-primary-50 via-cyan-50/50 to-white relative z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        </div>

        <div className="text-center mb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Visão em <span className="bg-gradient-to-r from-primary-700 to-cyan-600 bg-clip-text text-transparent">Tempo Real</span> dos Contratos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dashboard executivo com identificação automática de contratos saudáveis e críticos
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <DashboardCard
              title="NOVO ATACAREJO - PAULISTA CENTRO"
              revenue={120000}
              cost={105000}
              margin={12.5}
              status="healthy"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <DashboardCard
              title="NORTH WAY"
              revenue={95000}
              cost={110000}
              margin={-15.8}
              status="critical"
            />
          </motion.div>
        </div>

        {/* Painel de KPIs Simulados */}
        <div className="mt-12 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
          {[
            { label: 'Margem Média', value: '8.7%', trend: '↑ +2.3% vs mês anterior', trendColor: 'text-green-600', valueColor: 'text-primary-700' },
            { label: 'Contratos Ativos', value: '24', trend: '3 em fase de renovação', trendColor: 'text-gray-500', valueColor: 'text-gray-900' },
            { label: 'Receita Total', value: '2.4M', trend: '↑ +12% vs mês anterior', trendColor: 'text-green-600', valueColor: 'text-gray-900' },
            { label: 'Contratos Críticos', value: '3', trend: 'Requerem atenção imediata', trendColor: 'text-red-600', valueColor: 'text-red-600' },
          ].map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-sm text-gray-600 mb-1">{kpi.label}</div>
              <div className={`text-3xl font-bold ${kpi.valueColor}`}>{kpi.value}</div>
              <div className={`text-xs ${kpi.trendColor} mt-1`}>{kpi.trend}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* NOVA SEÇÃO - CASOS DE USO PRÁTICOS */}
      <Section id="casos-uso" background="gray" className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-bold shadow-lg">
              <Target className="w-4 h-4" />
              APLICAÇÃO PRÁTICA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cenários Reais de <span className="bg-gradient-to-r from-primary-700 to-cyan-600 bg-clip-text text-transparent">Uso Diário</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Veja como a plataforma resolve problemas reais do dia a dia da sua operação
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              situacao: 'Segunda-feira, 08h30 - Reunião de Diretoria',
              antes: 'Diretoria pede relatório de margem dos contratos. Equipe leva 2 dias compilando planilhas de 5 setores diferentes.',
              depois: 'Diretor abre o app no tablet. Em 3 segundos vê margem de todos os contratos, identifica 2 críticos e já agenda reunião com gerentes.',
              economia: '2 dias → 3 segundos'
            },
            {
              situacao: 'Terça-feira, 14h - Análise de Custos',
              antes: 'Gerente suspeita que combustível do Contrato X está alto. Precisa pedir relatórios ao RH, Financeiro e Logística.',
              depois: 'Gerente clica no contrato, vê gráfico de combustível vs histórico, identifica 30% acima da média, e já gera relatório PDF.',
              economia: 'Análise instantânea'
            },
            {
              situacao: 'Quarta-feira, 10h - Negociação de Novo Contrato',
              antes: 'Cliente pede proposta. Equipe estima custos "no olho" baseado em contratos antigos. Risco de precificar errado.',
              depois: 'Sistema analisa contratos similares, calcula custos médios, sugere margem segura e gera proposta completa automaticamente.',
              economia: 'Precisão científica'
            },
            {
              situacao: 'Quinta-feira, 16h - Fechamento Mensal',
              antes: 'Contador solicita fechamento. Equipe separa notas, confere lançamentos, ajusta rateios. Processo leva 5 dias úteis.',
              depois: 'Sistema já tem todos os lançamentos classificados, rateios calculados. Exporta balancete pronto em 1 clique.',
              economia: '5 dias → 1 clique'
            },
          ].map((caso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-l-4 border-cyan-500">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs font-bold mb-3">
                    CASO REAL
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{caso.situacao}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 rounded-lg border-l-2 border-red-400">
                    <div className="text-xs font-bold text-red-700 mb-1">❌ ANTES (Processo Manual)</div>
                    <p className="text-sm text-gray-700">{caso.antes}</p>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg border-l-2 border-green-500">
                    <div className="text-xs font-bold text-green-700 mb-1">✅ DEPOIS (Com o Sistema)</div>
                    <p className="text-sm text-gray-700">{caso.depois}</p>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-bold shadow-lg">
                    ⏱️ {caso.economia}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* NOVA SEÇÃO - MÓDULOS ADICIONAIS */}
      <Section id="modulos-adicionais" background="white" className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-bold shadow-lg">
              <GitBranch className="w-4 h-4" />
              EXPANSÍVEL
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Módulos <span className="bg-gradient-to-r from-primary-700 to-cyan-600 bg-clip-text text-transparent">Opcionais</span> Disponíveis
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expanda a plataforma conforme o crescimento da sua operação
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              modulo: 'CRM para Facilities',
              descricao: 'Gestão completa de leads, propostas e pipeline comercial',
              recursos: ['Funil de vendas', 'Histórico de contatos', 'Automação de follow-up', 'Integração com WhatsApp']
            },
            {
              modulo: 'Gestão de Equipes',
              descricao: 'Controle avançado de times e alocação de colaboradores',
              recursos: ['Escala automática', 'Controle de jornada', 'Avaliação de desempenho', 'Treinamentos e certificações']
            },
            {
              modulo: 'Gestão de Frotas',
              descricao: 'Rastreamento veicular e manutenção preventiva',
              recursos: ['GPS integrado', 'Manutenções programadas', 'Multas e infrações', 'Custos totais por veículo']
            },
            {
              modulo: 'Portal do Cliente',
              descricao: 'Transparência total para seus clientes finais',
              recursos: ['Acesso a relatórios', 'Solicitações de serviço', 'Avaliação de qualidade', 'Histórico de atendimentos']
            },
            {
              modulo: 'Gestão de Estoque',
              descricao: 'Controle completo de almoxarifado e materiais',
              recursos: ['Entrada e saída', 'Inventário periódico', 'Integração com compras', 'Curva ABC automática']
            },
            {
              modulo: 'Quality Check',
              descricao: 'Avaliação de qualidade e inspeções',
              recursos: ['Checklists customizáveis', 'Fotos geo-referenciadas', 'Scorecard de qualidade', 'NPS automatizado']
            },
          ].map((modulo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full border-2 border-purple-300 bg-gradient-to-br from-white to-purple-50/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-xs font-bold text-purple-700 uppercase">Módulo Opcional</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{modulo.modulo}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{modulo.descricao}</p>
                <div className="space-y-1">
                  {modulo.recursos.map((recurso, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="text-purple-600">▪</span>
                      <span>{recurso}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300">
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-purple-700"> Abordagem Modular:</strong> Comece com os módulos essenciais e adicione funcionalidades conforme a necessidade. Pague apenas pelo que usar.
            </p>
          </Card>
        </motion.div>
      </Section>

      {/* SEÇÃO - SIMULAÇÃO VISUAL DE DASHBOARD */}
      <Section id="dashboard" background="primary" className="bg-gradient-to-br from-primary-50 via-cyan-50/50 to-white relative z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-50/20 to-transparent pointer-events-none" />
        
        <div className="text-center mb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Impacto <span className="bg-gradient-to-r from-primary-700 to-cyan-600 bg-clip-text text-transparent">Estratégico</span> Esperado
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Benefícios tangíveis que transformarão a sua gestão
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative">
          {[
            {
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>,
              title: "Redução de Custos Operacionais",
              description: "Identificação precisa de desperdícios e oportunidades de otimização em insumos, combustível e benefícios."
            },
            {
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>,
              title: "Aumento da Margem por Contrato",
              description: "Renegociação embasada de contratos deficitários e precificação estratégica de novos contratos."
            },
            {
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>,
              title: "Identificação Rápida de Gargalos",
              description: "Alertas automáticos sobre contratos em risco, custos anormais e desvios de orçamento."
            },
            {
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>,
              title: "Tomada de Decisão Baseada em Dados",
              description: "Dashboard executivo com métricas consolidadas para decisões estratégicas fundamentadas."
            },
            {
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>,
              title: "Crescimento Sustentável",
              description: "Planejamento estratégico baseado em análise de rentabilidade e capacidade operacional."
            },
            {
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>,
              title: "Automação de Processos",
              description: "Eliminação de tarefas manuais repetitivas, liberando a equipe para atividades estratégicas."
            },
          ].map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <KPIItem
                icon={kpi.icon}
                title={kpi.title}
                description={kpi.description}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SEÇÃO - ROADMAP DE IMPLEMENTAÇÃO */}
      <Section id="roadmap" background="gray" className="relative z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-72 h-72 bg-cyan-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary-200/10 rounded-full blur-3xl" />
        </div>

        <div className="text-center mb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-primary-700 to-cyan-600 bg-clip-text text-transparent">Roadmap</span> de Implementação
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Implantação estruturada em 4 fases para garantir sucesso e adoção
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 relative">
          {[
            {
              fase: 'Fase 1',
              titulo: 'Implantação Financeira',
              descricao: 'Estruturação do módulo financeiro com contas a pagar/receber, fluxo de caixa e centro de custos.',
              items: ['Cadastros básicos', 'Contas a pagar e receber', 'Fluxo de caixa', 'Relatórios financeiros']
            },
            {
              fase: 'Fase 2',
              titulo: 'Integração RH e Logística',
              descricao: 'Conexão com folha de pagamento, controle de benefícios, gestão de veículos e combustível.',
              items: ['Importação de folha', 'Gestão de benefícios', 'Controle de frota', 'Custos de combustível']
            },
            {
              fase: 'Fase 3',
              titulo: 'Consolidação de Dados',
              descricao: 'Integração de todos os custos aos contratos, cálculo de margem e análise de rentabilidade.',
              items: ['Rateio de custos', 'Cálculo de margem', 'Análise de contratos', 'Alertas automáticos']
            },
            {
              fase: 'Fase 4',
              titulo: 'Painel Executivo e Inteligência',
              descricao: 'Dashboard estratégico com indicadores consolidados, análise preditiva e diagnóstico automático.',
              items: ['Dashboard executivo', 'KPIs estratégicos', 'Relatórios gerenciais', 'Análise preditiva']
            },
          ].map((fase, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {index < 3 && (
                <div className="hidden md:block absolute left-[52px] top-[100px] w-0.5 h-16 bg-gradient-to-b from-primary-400 to-primary-200" />
              )}
              
              <Card className="border-l-4 border-primary-600 backdrop-blur-sm bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary-700 to-primary-600 text-white flex items-center justify-center text-2xl font-bold shadow-xl">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-primary-700 mb-1">
                      {fase.fase}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {fase.titulo}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {fase.descricao}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {fase.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* NOVA SEÇÃO - SUPORTE E GARANTIAS */}
      <Section id="suporte" background="white" className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-gradient-to-r from-green-100 to-teal-100 text-green-800 rounded-full text-sm font-bold shadow-lg">
              <Shield className="w-4 h-4" />
              COMPROMETIMENTO TOTAL
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Suporte e <span className="bg-gradient-to-r from-primary-700 to-cyan-600 bg-clip-text text-transparent">Garantias</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-5 lg:grid-cols-4 gap-10">
          {[
            {
              icon: '',
              title: 'Treinamento Completo',
              items: ['Onboarding estruturado', 'Vídeos tutoriais', 'Documentação detalhada', 'Suporte ao usuário final']
            },
            {
              icon: '',
              title: 'Implantação Guiada',
              items: ['Migração de dados assistida', 'Configuração personalizada', 'Testes homologados', 'Go-live com suporte']
            },
            {
              icon: '',
              title: 'Suporte Técnico',
              items: ['Atendimento em até 2h', 'Chat, telefone e e-mail', 'Atualizações gratuitas', 'SLA de resolução']
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full text-center border-2 border-green-300 bg-gradient-to-br from-green-50/50 to-teal-50/30">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{item.title}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {item.items.map((subitem, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      {subitem}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-r from-primary-700 to-primary-600 text-white border-none shadow-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4"> Nossa Garantia de Sucesso</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-1">30 dias</div>
                  <div className="text-sm text-primary-100">Garantia de reembolso se não atender expectativas</div>
                </div>
                <div className="border-x border-primary-500/30">
                  <div className="text-3xl font-bold mb-1">ROI em 6 meses</div>
                  <div className="text-sm text-primary-100">Retorno do investimento</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">Sem surpresas</div>
                  <div className="text-sm text-primary-100">Preço fixo sem custos ocultos</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* NOVA SEÇÃO - ROI E BENEFÍCIOS QUANTIFICÁVEIS */}
      <Section id="roi" background="gray" className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 rounded-full text-sm font-bold shadow-lg">
              <TrendingUp className="w-4 h-4" />
              RETORNO COMPROVADO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Benefícios <span className="bg-gradient-to-r from-primary-700 to-cyan-600 bg-clip-text text-transparent">Mensuráveis</span> em 90 Dias
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { metrica: '15-30%', descricao: 'Redução de custos com insumos', impacto: 'R$ 50k-100k/ano economizados' },
            { metrica: '40h/mês', descricao: 'Economia de tempo administrativo', impacto: 'Equivalente a 1 funcionário' },
            { metrica: '100%', descricao: 'Contratos com margem visível', impacto: 'Zero contratos deficitários ocultos' },
            { metrica: '5-10%', descricao: 'Aumento de margem média', impacto: 'R$ 120k-240k/ano adicionais' },
            { metrica: '95%', descricao: 'Redução de erros manuais', impacto: 'Menos retrabalho e problemas' },
            { metrica: '24/7', descricao: 'Acesso a dados estratégicos', impacto: 'Decisões rápidas a qualquer hora' },
          ].map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full text-center bg-gradient-to-br from-white to-amber-50/30 border-2 border-amber-300">
                <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-2">
                  {beneficio.metrica}
                </div>
                <div className="text-base font-bold text-gray-900 mb-2">{beneficio.descricao}</div>
                <div className="text-sm text-gray-600 italic">{beneficio.impacto}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-green-600 to-emerald-600 text-white border-none shadow-2xl">
            <div className="text-center p-4">
              <h3 className="text-3xl font-bold mb-3"> Investimento vs Retorno</h3>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <div className="text-sm mb-2 text-green-100">Investimento Inicial</div>
                  <div className="text-4xl font-bold mb-2">R$ X.XXX/mês</div>
                  <div className="text-xs text-green-200">Pagamento mensal flexível</div>
                </div>
                <div className="border-l border-green-400/30">
                  <div className="text-sm mb-2 text-green-100">Retorno Esperado</div>
                  <div className="text-4xl font-bold mb-2">R$ XX.XXX/mês</div>
                  <div className="text-xs text-green-200">Em economia e aumento de margem</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-green-400/30">
                <p className="text-lg font-semibold">
                  ROI médio de <span className="text-yellow-300 text-2xl">100-200%</span> no primeiro ano
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* NOVA SEÇÃO - RESUMO EXECUTIVO COMPLETO */}
      <Section id="resumo-executivo" background="gray" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-slate-900 via-primary-900 to-cyan-900 text-white border-none shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold">
                   RESUMO EXECUTIVO
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Poder Total: O Que Você Está Contratando
                </h2>
                <p className="text-primary-100 max-w-3xl mx-auto leading-relaxed text-lg">
                  Muito mais que um software. Uma <strong className="text-white">transformação digital completa</strong> para sua empresa dominar o mercado.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-bold text-2xl mb-5 text-green-300 flex items-center gap-2">
                    <span>✅</span> Ganhos Imediatos
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      'Visibilidade 100% de custos por contrato',
                      'Decisões rápidas com dados em tempo real',
                      'Redução de 15-30% nos custos operacionais',
                      'Identificação instantânea de contratos críticos',
                      'Economia de 40+ horas/mês administrativas',
                      'Margem de cada contrato calculada automaticamente',
                      'Fluxo de caixa projetado para 12 meses',
                      'ROI de 300-500% no primeiro ano',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-green-400 font-bold text-lg">▸</span>
                        <span className="text-primary-50 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-bold text-2xl mb-5 text-red-300 flex items-center gap-2">
                    <span>❌</span> Problemas Eliminados
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      'Contratos deficitários escondidos',
                      'Decisões baseadas em intuição e "achismo"',
                      'Horas desperdiçadas em planilhas manuais',
                      'Surpresas ruins no fechamento contábil',
                      'Falta de controle sobre custos reais',
                      'Dificuldade em justificar reajustes',
                      'Impossibilidade de crescer com segurança',
                      'Perda de competitividade no mercado',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-red-400 font-bold text-lg">▸</span>
                        <span className="text-primary-50 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-8">
                {[
                  { num: '15+', label: 'Módulos Integrados' },
                  { num: '50+', label: 'Relatórios Prontos' },
                  { num: '200+', label: 'Indicadores KPI' },
                  { num: '∞', label: 'Escalabilidade' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-3xl font-bold text-gray-300">{stat.num}</div>
                    <div className="text-xs text-primary-200 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-gray-500/20 to-gray-600/20 backdrop-blur-sm rounded-xl border-2 border-gray-400/40">
                <p className="text-xl font-bold mb-3 text-gray-300"> Filosofia da Solução</p>
                <p className="text-lg italic text-white leading-relaxed">
                  "Não vendemos apenas tecnologia. Entregamos <span className="text-gray-300 font-bold">inteligência estratégica</span>, <span className="text-gray-300 font-bold">controle operacional</span> e <span className="text-gray-300 font-bold">crescimento sustentável</span>. Seu sucesso é o nosso sucesso."
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* SEÇÃO - CALL TO ACTION FINAL */}
      <Section id="cta" background="white" className="bg-gradient-to-b from-white via-primary-50/30 to-cyan-50/20 relative z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pronto para ter{' '}
              <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-cyan-600 bg-clip-text text-transparent">{siteConfig.tagline}?</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Dê o próximo passo para intensificar a excelência operacional e decisões estratégicas fundamentadas.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={openContactModal}
              className="group relative bg-gradient-to-r from-primary-700 to-primary-600 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-primary-500/50 transform hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">Iniciar Implementação Estratégica</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={() => scrollToSection('roadmap')}
              className="bg-white/80 backdrop-blur-md text-primary-700 px-10 py-5 rounded-xl text-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver Roadmap Detalhado
            </button>
          </motion.div>

          {/* Estatísticas de Impacto Expandidas */}
          <motion.div 
            className="mt-16 pt-12 border-t border-gray-300/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                { value: '15-30%', label: 'Redução de custos operacionais', sublabel: 'Média em 6 meses' },
                { value: '100%', label: 'Visibilidade sobre custos', sublabel: 'Por contrato em tempo real' },
                { value: 'Real-Time', label: 'Acesso a indicadores', sublabel: 'Dashboard 24/7' },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl bg-white/60 backdrop-blur-md border border-primary-200/50 shadow-lg"
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary-700 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-base font-bold text-gray-900">{stat.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>

            {/* Resumo do Poder da Solução */}
            <Card className="bg-gradient-to-r from-primary-800 to-cyan-800 text-white border-none shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center"> Em Resumo: O Poder Total da Plataforma</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-sm text-primary-100">Módulos Integrados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">50+</div>
                  <div className="text-sm text-primary-100">Relatórios Automáticos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">200+</div>
                  <div className="text-sm text-primary-100">Indicadores Disponíveis</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">∞</div>
                  <div className="text-sm text-primary-100">Escalabilidade</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-primary-950 text-white py-12 z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Logo no Footer */}
          <div className="flex justify-center mb-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <Logo size="small" invert={true} />
          </div>
          
          <div className="mb-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
              Aestron
            </span>
            <p className="text-primary-300 text-sm mt-1 font-medium">
              {siteConfig.tagline}
            </p>
          </div>
          <p className="text-gray-400">
            © 2026 Aestron - Todos os direitos reservados
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Proposta Estratégica - Documento Confidencial
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </footer>

      {/* Modal de Contato */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </main>
  );
}
