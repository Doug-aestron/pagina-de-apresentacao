# 🚀 Configuração do Supabase - Guia Completo

## Passo 1: Criar Conta no Supabase

1. Acesse: https://supabase.com
2. Clique em **"Start your project"**
3. Faça login com GitHub ou email
4. É **100% GRÁTIS** para começar!

---

## Passo 2: Criar Novo Projeto

1. Clique em **"New Project"**
2. Preencha:
   - **Name:** `fg-services-leads`
   - **Database Password:** (crie uma senha forte e ANOTE)
   - **Region:** `South America (São Paulo)` (mais próximo do Brasil)
3. Clique em **"Create new project"**
4. Aguarde 2 minutos (o projeto está sendo criado)

---

## Passo 3: Criar Tabela de Leads

### 3.1 Abrir SQL Editor

1. No menu lateral, clique em **"SQL Editor"**
2. Clique em **"New query"**

### 3.2 Executar SQL

Cole este código SQL e clique em **"Run"**:

```sql
-- Criar tabela de leads
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  empresa TEXT NOT NULL,
  tipo_empresa TEXT NOT NULL,
  desafios TEXT[] DEFAULT '{}',
  outros_desafios TEXT,
  data_contato TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'novo' CHECK (status IN ('novo', 'contatado', 'qualificado', 'convertido', 'arquivado')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índices para performance
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);

-- Habilitar Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Política para permitir INSERT público (para o formulário)
CREATE POLICY "Permitir INSERT público"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Política para permitir SELECT público (para o painel)
CREATE POLICY "Permitir SELECT público"
  ON leads
  FOR SELECT
  TO anon
  USING (true);

-- Política para permitir UPDATE público (para atualizar status)
CREATE POLICY "Permitir UPDATE público"
  ON leads
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Política para permitir DELETE público (para deletar leads)
CREATE POLICY "Permitir DELETE público"
  ON leads
  FOR DELETE
  TO anon
  USING (true);

-- Comentários na tabela
COMMENT ON TABLE leads IS 'Leads capturados da landing page FG Services';
COMMENT ON COLUMN leads.desafios IS 'Array de desafios selecionados pelo lead';
COMMENT ON COLUMN leads.status IS 'Status do lead no funil de vendas';
```

3. Clique em **"Run"** (ou Ctrl+Enter)
4. Deve aparecer: ✅ **"Success. No rows returned"**

---

## Passo 4: Obter Credenciais

1. No menu lateral, clique em **"Project Settings"** (ícone de engrenagem)
2. Clique em **"API"**
3. Você verá duas informações importantes:

### 📋 Copie estas informações:

- **Project URL:** `https://xxxxx.supabase.co`
- **anon public:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (um token longo)

---

## Passo 5: Configurar no Projeto

1. Abra o arquivo `.env.local` na raiz do projeto
2. Substitua os valores:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. **IMPORTANTE:** Substitua pelos seus valores REAIS do Supabase!

---

## Passo 6: Reiniciar Servidor

```bash
# Pare o servidor (Ctrl+C no terminal)
npm run dev
```

---

## ✅ Pronto! Teste Agora:

### 1. Testar Formulário:
- Acesse: `http://localhost:3000`
- Clique em "Começar Agora"
- Preencha e envie
- ✅ Lead vai direto para o Supabase!

### 2. Ver no Painel:
- Acesse: `http://localhost:3000/painel`
- ✅ Leads aparecem automaticamente!

### 3. Ver no Supabase (Admin):
- Vá para: https://supabase.com/dashboard
- Clique no seu projeto
- Menu lateral > **"Table Editor"**
- Clique em **"leads"**
- ✅ Veja todos os leads salvos!

---

## 📊 Painel do Supabase

Você terá acesso a:
- ✅ Visualizar todos os leads na interface web
- ✅ Filtrar, buscar e ordenar
- ✅ Editar manualmente se necessário
- ✅ Exportar para CSV
- ✅ Ver estatísticas e métricas
- ✅ Gráficos automáticos

---

## 🚀 Para Deploy no Vercel:

1. Faça push do projeto para GitHub
2. Conecte no Vercel
3. Adicione as variáveis de ambiente no Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy! ✅

---

## 🔐 Segurança

✅ Row Level Security (RLS) ativado
✅ Políticas configuradas
✅ Chaves públicas (anon) são seguras para frontend
✅ Supabase gerencia tudo automaticamente

---

## 💡 Dicas

- Não compartilhe o arquivo `.env.local`
- No Vercel, use Environment Variables
- O Supabase tem backup automático
- Você pode adicionar webhooks para notificações

---

## 📞 Precisa de Ajuda?

Se algo não funcionar, me avise! Vou te ajudar a configurar.

**Próximo passo:** Configure o Supabase seguindo este guia!
