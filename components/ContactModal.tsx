'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, Building2, AlertCircle, CheckCircle2, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    tipoEmpresa: '',
    desafios: [] as string[],
    outrosDesafios: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const desafiosOptions = [
    'Falta de visibilidade de custos',
    'Controle financeiro fragmentado',
    'Contratos deficitários',
    'Dificuldade em análises estratégicas',
    'Processos manuais e planilhas',
    'Falta de integração entre áreas'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (desafio: string) => {
    setFormData(prev => ({
      ...prev,
      desafios: prev.desafios.includes(desafio)
        ? prev.desafios.filter(d => d !== desafio)
        : [...prev.desafios, desafio]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🚀 Iniciando envio do lead para API...');
    
    // Criar objeto do lead
    const leadData = {
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      empresa: formData.empresa,
      tipoEmpresa: formData.tipoEmpresa,
      desafios: formData.desafios,
      outrosDesafios: formData.outrosDesafios,
    };

    console.log('📝 Dados do lead:', leadData);

    try {
      // Enviar para API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar lead');
      }

      console.log('✅ Lead salvo com sucesso:', result.lead);
      
      // Mostrar mensagem de sucesso
      setIsSubmitted(true);

      // Resetar após 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          empresa: '',
          tipoEmpresa: '',
          desafios: [],
          outrosDesafios: ''
        });
        onClose();
      }, 3000);
    } catch (error: any) {
      console.error('❌ Erro ao enviar lead:', error);
      alert('Erro ao enviar solicitação. Por favor, tente novamente.\n\nErro: ' + error.message);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8"
            >
              {/* Header com gradiente */}
              <div className="bg-gradient-to-r from-primary-700 to-primary-600 px-6 py-6 text-white relative overflow-hidden">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="relative">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Solicitar Contato</h2>
                  <p className="text-primary-100 text-sm md:text-base">
                    Preencha os dados abaixo e nossa equipe entrará em contato em até 2 horas úteis
                  </p>
                </div>
              </div>

              {/* Conteúdo - Formulário ou Mensagem de Sucesso */}
              <div className="p-6">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nome */}
                    <div>
                      <label htmlFor="nome" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <User className="w-4 h-4" />
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                          <Mail className="w-4 h-4" />
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                          placeholder="seu@email.com"
                        />
                      </div>

                      {/* Telefone */}
                      <div>
                        <label htmlFor="telefone" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                          <Phone className="w-4 h-4" />
                          Telefone/WhatsApp *
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          required
                          value={formData.telefone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                          placeholder="(81) 99999-9999"
                        />
                      </div>
                    </div>

                    {/* Empresa */}
                    <div>
                      <label htmlFor="empresa" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <Building2 className="w-4 h-4" />
                        Nome da Empresa *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        required
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder="Nome da sua empresa"
                      />
                    </div>

                    {/* Tipo de Empresa */}
                    <div>
                      <label htmlFor="tipoEmpresa" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <Building2 className="w-4 h-4" />
                        Tipo de Empresa *
                      </label>
                      <select
                        id="tipoEmpresa"
                        name="tipoEmpresa"
                        required
                        value={formData.tipoEmpresa}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
                      >
                        <option value="">Selecione...</option>
                        <option value="Limpeza e Facilities">Limpeza e Facilities</option>
                        <option value="Terceirização de Serviços">Terceirização de Serviços</option>
                        <option value="Segurança Patrimonial">Segurança Patrimonial</option>
                        <option value="Manutenção Predial">Manutenção Predial</option>
                        <option value="Gestão de Condomínios">Gestão de Condomínios</option>
                        <option value="Outro Segmento">Outro Segmento</option>
                      </select>
                    </div>

                    {/* Desafios */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                        <AlertCircle className="w-4 h-4" />
                        Principais Desafios na Gestão (selecione todos que se aplicam)
                      </label>
                      <div className="space-y-2">
                        {desafiosOptions.map((desafio) => (
                          <label key={desafio} className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                            <input
                              type="checkbox"
                              checked={formData.desafios.includes(desafio)}
                              onChange={() => handleCheckboxChange(desafio)}
                              className="w-5 h-5 text-primary-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary-200"
                            />
                            <span className="text-sm text-gray-700">{desafio}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Outros Desafios */}
                    <div>
                      <label htmlFor="outrosDesafios" className="text-sm font-semibold text-gray-700 mb-2 block">
                        Outros desafios ou observações
                      </label>
                      <textarea
                        id="outrosDesafios"
                        name="outrosDesafios"
                        value={formData.outrosDesafios}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                        placeholder="Descreva outros desafios específicos da sua operação..."
                      />
                    </div>

                    {/* Botão Submit */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Solicitar Contato
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Solicitação Enviada com Sucesso!</h3>
                    <p className="text-gray-600 mb-4">
                      Recebemos seus dados e entraremos em contato em breve.
                    </p>
                    <p className="text-sm text-gray-500">
                      Tempo de resposta: até 2 horas úteis
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
