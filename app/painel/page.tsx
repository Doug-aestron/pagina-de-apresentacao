'use client';

import React, { useState, useEffect } from 'react';
import { Search, Download, Trash2, Eye, Calendar, Mail, Phone, Building2, AlertCircle, Filter, X, RefreshCw } from 'lucide-react';

interface Lead {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  tipo_empresa: string;
  desafios: string[];
  outros_desafios: string;
  data_contato: string;
  status: 'novo' | 'contatado' | 'qualificado' | 'convertido' | 'arquivado';
  created_at?: string;
}

export default function PainelContatos() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('todos');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  // Função para carregar leads da API
  const loadLeads = async () => {
    try {
      console.log('🔄 Carregando leads da API...');
      setIsLoading(true);
      
      const response = await fetch('/api/leads');
      const data = await response.json();

      if (response.ok) {
        console.log('✅ Leads carregados:', data.leads.length);
        setLeads(data.leads || []);
        setFilteredLeads(data.leads || []);
        setLastUpdate(new Date().toLocaleTimeString('pt-BR'));
      } else {
        console.error('❌ Erro na resposta:', data.error);
        alert('Erro ao carregar leads: ' + data.error);
      }
    } catch (error: any) {
      console.error('❌ Erro ao carregar leads:', error);
      alert('Erro ao conectar com o servidor: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Carregar leads ao montar
  useEffect(() => {
    loadLeads();
    
    // Atualizar a cada 10 segundos
    const interval = setInterval(() => {
      loadLeads();
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  // Filtrar leads
  useEffect(() => {
    let filtered = [...leads];

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter(lead =>
        lead.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.telefone.includes(searchTerm)
      );
    }

    // Filtro por status
    if (statusFilter !== 'todos') {
      filtered = filtered.filter(lead => lead.status === statusFilter);
    }

    setFilteredLeads(filtered);
  }, [searchTerm, statusFilter, leads]);

  const updateLeadStatus = async (leadId: string, newStatus: Lead['status']) => {
    try {
      const response = await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });

      if (response.ok) {
        await loadLeads();
      } else {
        const data = await response.json();
        alert('Erro ao atualizar status: ' + data.error);
      }
    } catch (error: any) {
      alert('Erro ao atualizar status: ' + error.message);
    }
  };

  const deleteLead = async (leadId: string) => {
    if (!confirm('Tem certeza que deseja excluir este lead?')) return;

    try {
      const response = await fetch(`/api/leads?id=${leadId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await loadLeads();
      } else {
        const data = await response.json();
        alert('Erro ao deletar lead: ' + data.error);
      }
    } catch (error: any) {
      alert('Erro ao deletar lead: ' + error.message);
    }
  };

  const exportToCSV = () => {
    const headers = ['Nome', 'Email', 'Telefone', 'Empresa', 'Tipo', 'Desafios', 'Observações', 'Data', 'Status'];
    const csvData = filteredLeads.map(lead => [
      lead.nome,
      lead.email,
      lead.telefone,
      lead.empresa,
      lead.tipo_empresa,
      lead.desafios.join('; '),
      lead.outros_desafios,
      new Date(lead.data_contato).toLocaleString('pt-BR'),
      lead.status
    ]);

    const csv = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `leads_fg_services_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const getStatusColor = (status: Lead['status']) => {
    const colors = {
      novo: 'bg-blue-100 text-blue-800 border-blue-300',
      contatado: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      qualificado: 'bg-purple-100 text-purple-800 border-purple-300',
      convertido: 'bg-green-100 text-green-800 border-green-300',
      arquivado: 'bg-gray-100 text-gray-800 border-gray-300'
    };
    return colors[status];
  };

  const getStatusLabel = (status: Lead['status']) => {
    const labels = {
      novo: 'Novo',
      contatado: 'Contatado',
      qualificado: 'Qualificado',
      convertido: 'Convertido',
      arquivado: 'Arquivado'
    };
    return labels[status];
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header Fixo */}
      <div style={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
        color: 'white',
        padding: '1.5rem 2rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Painel de Leads - FG Services
            </h1>
            <p style={{ opacity: 0.9, fontSize: '0.875rem' }}>
              Gerencie todos os contatos da landing page • <strong>{leads.length} leads</strong>
            </p>
          </div>
          {lastUpdate && (
            <div style={{ textAlign: 'right', fontSize: '0.75rem', opacity: 0.8 }}>
              <div>Última atualização:</div>
              <div style={{ fontWeight: '600' }}>{lastUpdate}</div>
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
        {/* Cards de Estatísticas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'Total de Leads', value: leads.length, color: '#3b82f6' },
            { label: 'Novos', value: leads.filter(l => l.status === 'novo').length, color: '#06b6d4' },
            { label: 'Contatados', value: leads.filter(l => l.status === 'contatado').length, color: '#f59e0b' },
            { label: 'Convertidos', value: leads.filter(l => l.status === 'convertido').length, color: '#10b981' }
          ].map((stat, i) => (
            <div key={i} style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '12px', 
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: `4px solid ${stat.color}`
            }}>
              <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>{stat.label}</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: stat.color }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Filtros e Ações */}
        <div style={{ 
          background: 'white', 
          padding: '1.5rem', 
          borderRadius: '12px', 
          marginBottom: '1.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Busca */}
            <div style={{ flex: '1 1 300px', position: 'relative' }}>
              <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', width: '20px', height: '20px' }} />
              <input
                type="text"
                placeholder="Buscar por nome, email, empresa ou telefone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            {/* Filtro de Status */}
            <div style={{ position: 'relative' }}>
              <Filter style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', width: '18px', height: '18px' }} />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                style={{
                  padding: '0.75rem 2rem 0.75rem 2.5rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  background: 'white',
                  cursor: 'pointer'
                }}
              >
                <option value="todos">Todos os Status</option>
                <option value="novo">Novos</option>
                <option value="contatado">Contatados</option>
                <option value="qualificado">Qualificados</option>
                <option value="convertido">Convertidos</option>
                <option value="arquivado">Arquivados</option>
              </select>
            </div>

            {/* Botão Atualizar */}
            <button
              onClick={loadLeads}
              disabled={isLoading}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: isLoading ? '#9ca3af' : '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.875rem',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => !isLoading && (e.currentTarget.style.background = '#2563eb')}
              onMouseLeave={(e) => !isLoading && (e.currentTarget.style.background = '#3b82f6')}
            >
              <RefreshCw style={{ width: '18px', height: '18px' }} className={isLoading ? 'animate-spin' : ''} />
              {isLoading ? 'Carregando...' : 'Atualizar'}
            </button>

            {/* Botão Exportar */}
            <button
              onClick={exportToCSV}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#059669'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#10b981'}
            >
              <Download style={{ width: '18px', height: '18px' }} />
              Exportar CSV
            </button>
          </div>
        </div>

        {/* Tabela de Leads */}
        <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          {isLoading ? (
            <div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#6b7280' }}>
              <RefreshCw style={{ width: '48px', height: '48px', margin: '0 auto 1rem', opacity: 0.5' }} className="animate-spin" />
              <p style={{ fontSize: '1.125rem', fontWeight: '600' }}>Carregando leads...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#6b7280' }}>
              <AlertCircle style={{ width: '48px', height: '48px', margin: '0 auto 1rem', opacity: 0.5 }} />
              <p style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Nenhum lead encontrado
              </p>
              <p style={{ fontSize: '0.875rem' }}>
                {searchTerm || statusFilter !== 'todos' 
                  ? 'Tente ajustar os filtros de busca' 
                  : 'Aguardando novos contatos da landing page'}
              </p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: '#f9fafb', borderBottom: '2px solid #e5e7eb' }}>
                  <tr>
                    <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '700', color: '#374151', textTransform: 'uppercase' }}>Nome</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '700', color: '#374151', textTransform: 'uppercase' }}>Empresa</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '700', color: '#374151', textTransform: 'uppercase' }}>Contato</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '700', color: '#374151', textTransform: 'uppercase' }}>Data</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '700', color: '#374151', textTransform: 'uppercase' }}>Status</th>
                    <th style={{ padding: '1rem', textAlign: 'center', fontSize: '0.75rem', fontWeight: '700', color: '#374151', textTransform: 'uppercase' }}>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr 
                      key={lead.id} 
                      style={{ 
                        borderBottom: '1px solid #e5e7eb',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                    >
                      <td style={{ padding: '1rem' }}>
                        <div style={{ fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>{lead.nome}</div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{lead.email}</div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>{lead.empresa}</div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{lead.tipo_empresa}</div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ fontSize: '0.875rem', color: '#374151' }}>{lead.telefone}</div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ fontSize: '0.875rem', color: '#374151' }}>
                          {new Date(lead.data_contato).toLocaleDateString('pt-BR')}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                          {new Date(lead.data_contato).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <select
                          value={lead.status}
                          onChange={(e) => updateLeadStatus(lead.id, e.target.value as Lead['status'])}
                          className={getStatusColor(lead.status)}
                          style={{
                            padding: '0.375rem 0.75rem',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            border: '1px solid',
                            cursor: 'pointer'
                          }}
                        >
                          <option value="novo">Novo</option>
                          <option value="contatado">Contatado</option>
                          <option value="qualificado">Qualificado</option>
                          <option value="convertido">Convertido</option>
                          <option value="arquivado">Arquivado</option>
                        </select>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                          <button
                            onClick={() => {
                              setSelectedLead(lead);
                              setShowDetailModal(true);
                            }}
                            style={{
                              padding: '0.5rem',
                              background: '#3b82f6',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#2563eb'}
                            onMouseLeave={(e) => e.currentTarget.style.background = '#3b82f6'}
                            title="Ver detalhes"
                          >
                            <Eye style={{ width: '16px', height: '16px' }} />
                          </button>
                          <button
                            onClick={() => deleteLead(lead.id)}
                            style={{
                              padding: '0.5rem',
                              background: '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#dc2626'}
                            onMouseLeave={(e) => e.currentTarget.style.background = '#ef4444'}
                            title="Excluir"
                          >
                            <Trash2 style={{ width: '16px', height: '16px' }} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal de Detalhes */}
      {showDetailModal && selectedLead && (
        <div 
          style={{ 
            position: 'fixed', 
            inset: 0, 
            background: 'rgba(0,0,0,0.5)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            zIndex: 100,
            padding: '1rem'
          }}
          onClick={() => setShowDetailModal(false)}
        >
          <div 
            style={{ 
              background: 'white', 
              borderRadius: '16px', 
              maxWidth: '600px', 
              width: '100%', 
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div style={{ 
              background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
              color: 'white',
              padding: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Detalhes do Lead</h2>
              <button
                onClick={() => setShowDetailModal(false)}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  color: 'white'
                }}
              >
                <X style={{ width: '20px', height: '20px' }} />
              </button>
            </div>

            {/* Conteúdo Modal */}
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {/* Informações Pessoais */}
                <div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    Informações Pessoais
                  </h3>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Mail style={{ width: '18px', height: '18px', color: '#6b7280' }} />
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Nome</div>
                        <div style={{ fontWeight: '600', color: '#111827' }}>{selectedLead.nome}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Mail style={{ width: '18px', height: '18px', color: '#6b7280' }} />
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>E-mail</div>
                        <div style={{ fontWeight: '600', color: '#111827' }}>{selectedLead.email}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Phone style={{ width: '18px', height: '18px', color: '#6b7280' }} />
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Telefone</div>
                        <div style={{ fontWeight: '600', color: '#111827' }}>{selectedLead.telefone}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informações da Empresa */}
                <div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    Informações da Empresa
                  </h3>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Building2 style={{ width: '18px', height: '18px', color: '#6b7280' }} />
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Empresa</div>
                        <div style={{ fontWeight: '600', color: '#111827' }}>{selectedLead.empresa}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Building2 style={{ width: '18px', height: '18px', color: '#6b7280' }} />
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Tipo de Empresa</div>
                        <div style={{ fontWeight: '600', color: '#111827' }}>{selectedLead.tipo_empresa}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desafios */}
                <div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    Principais Desafios
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedLead.desafios.map((desafio, i) => (
                      <span 
                        key={i}
                        style={{
                          padding: '0.5rem 1rem',
                          background: '#dbeafe',
                          color: '#1e40af',
                          borderRadius: '9999px',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}
                      >
                        {desafio}
                      </span>
                    ))}
                  </div>
                  {selectedLead.outros_desafios && (
                    <div style={{ marginTop: '1rem', padding: '1rem', background: '#f9fafb', borderRadius: '8px' }}>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem' }}>Observações Adicionais:</div>
                      <div style={{ fontSize: '0.875rem', color: '#374151' }}>{selectedLead.outros_desafios}</div>
                    </div>
                  )}
                </div>

                {/* Data */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Calendar style={{ width: '18px', height: '18px', color: '#6b7280' }} />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Data do Contato</div>
                      <div style={{ fontWeight: '600', color: '#111827' }}>
                        {new Date(selectedLead.data_contato).toLocaleString('pt-BR')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
