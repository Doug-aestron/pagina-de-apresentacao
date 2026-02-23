# 📊 Painel Administrativo de Leads

## Como Acessar

Acesse o painel através da URL:
```
http://localhost:3000/painel
```

Ou em produção:
```
https://seu-dominio.com/painel
```

## 🎯 Funcionalidades

### 1. **Dashboard com Estatísticas**
- Total de leads capturados
- Leads novos (não contatados)
- Leads já contatados
- Leads convertidos

### 2. **Filtros Avançados**
- **Busca global**: Pesquise por nome, email, empresa ou telefone
- **Filtro por status**: 
  - Novo (azul)
  - Contatado (amarelo)
  - Qualificado (roxo)
  - Convertido (verde)
  - Arquivado (cinza)

### 3. **Gestão de Leads**
- **Visualizar detalhes**: Clique no ícone de olho para ver todas as informações
- **Alterar status**: Selecione diretamente na tabela
- **Excluir lead**: Remova leads indesejados ou duplicados

### 4. **Exportação**
- Exporte todos os leads filtrados para **CSV**
- Útil para importar em CRM, planilhas ou outras ferramentas

## 📋 Informações Capturadas

Cada lead contém:
- ✅ Nome completo
- ✅ E-mail
- ✅ Telefone/WhatsApp
- ✅ Nome da empresa
- ✅ Tipo de empresa
- ✅ Principais desafios selecionados
- ✅ Observações adicionais
- ✅ Data e hora do contato
- ✅ Status atual

## 💾 Armazenamento

Os dados são salvos automaticamente no **localStorage** do navegador quando um lead preenche o formulário na landing page.

### Importante:
- Os dados ficam salvos localmente no navegador
- Se limpar o cache do navegador, os dados serão perdidos
- Exporte regularmente para CSV como backup
- Para produção, considere integrar com um banco de dados

## 🎨 Design Independente

O painel foi desenvolvido com **estilos inline** completamente separados da landing page:
- ✅ Mudanças na landing page NÃO afetam o painel
- ✅ Mudanças no painel NÃO afetam a landing page
- ✅ Cores e design próprios
- ✅ Totalmente responsivo

## 🔐 Segurança (Recomendações para Produção)

Para uso em produção, adicione:
1. **Autenticação**: Login com senha para acessar `/painel`
2. **Backend**: API para salvar leads em banco de dados
3. **HTTPS**: Sempre use conexão segura
4. **Backup automático**: Envie leads por email ou para um servidor

## 🚀 Próximos Passos Sugeridos

1. Adicionar autenticação (login/senha)
2. Integrar com banco de dados (Firebase, Supabase, etc)
3. Enviar notificações por email quando novo lead chegar
4. Adicionar gráficos de conversão
5. Histórico de interações com cada lead

## 📞 Contato

Desenvolvido por: Aestron
Email: aestron26@gmail.com
WhatsApp: (81) 99393-2240
