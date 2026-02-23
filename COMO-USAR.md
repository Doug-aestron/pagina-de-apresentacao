# 📖 Como Usar o Sistema Completo

## 🎯 O Que Foi Implementado

Você tem agora:
1. ✅ Landing Page profissional (`/`)
2. ✅ Formulário de captura de leads
3. ✅ Painel administrativo (`/painel`)
4. ✅ API REST para gerenciar leads
5. ✅ Integração com Supabase (banco de dados)

---

## ⚙️ PASSO 1: Configurar Supabase (OBRIGATÓRIO)

**Siga o arquivo:** `SETUP-SUPABASE.md`

Este é o passo mais importante! Sem isso, o sistema não vai funcionar.

**Tempo estimado:** 10 minutos

---

## 🚀 PASSO 2: Rodar o Projeto Localmente

### 1. Instalar dependências (se ainda não instalou):
```bash
npm install
```

### 2. Configurar `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui
```

### 3. Rodar o servidor:
```bash
npm run dev
```

### 4. Acessar:
- Landing Page: `http://localhost:3000`
- Painel Admin: `http://localhost:3000/painel`

---

## 📋 PASSO 3: Testar o Formulário

1. Acesse a landing page
2. Clique em **"Começar Agora"** ou **"Iniciar Implementação Estratégica"**
3. Preencha o formulário:
   - Nome completo
   - E-mail
   - Telefone
   - Nome da empresa
   - Tipo de empresa (selecione uma opção)
   - Marque os desafios que se aplicam
4. Clique em **"Solicitar Contato"**
5. ✅ Deve aparecer: "Solicitação Enviada com Sucesso!"

---

## 📊 PASSO 4: Ver os Leads no Painel

### Opção 1: Painel Web Personalizado
- Acesse: `http://localhost:3000/painel`
- Veja todos os leads em tempo real
- Filtre por status, busque por nome/email
- Atualize status, delete, exporte para CSV

### Opção 2: Painel do Supabase
- Acesse: https://supabase.com/dashboard
- Entre no seu projeto
- Menu: **"Table Editor"** > **"leads"**
- Veja todos os dados diretamente no banco

---

## 🌐 PASSO 5: Deploy no Vercel (Produção)

### 1. Preparar o código:
```bash
git init
git add .
git commit -m "Landing page FG Services com Supabase"
```

### 2. Criar repositório no GitHub:
- Acesse: https://github.com/new
- Crie um repositório **privado**
- Faça push do código:
```bash
git remote add origin https://github.com/seu-usuario/seu-repo.git
git push -u origin main
```

### 3. Deploy no Vercel:
1. Acesse: https://vercel.com
2. Clique em **"Add New Project"**
3. Importe seu repositório do GitHub
4. Em **"Environment Variables"**, adicione:
   - `NEXT_PUBLIC_SUPABASE_URL` = (sua URL)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (sua chave)
5. Clique em **"Deploy"**
6. ✅ Pronto! Seu site está no ar!

---

## 📱 URLs em Produção:

Após deploy, você terá:
- Landing Page: `https://seu-projeto.vercel.app`
- Painel Admin: `https://seu-projeto.vercel.app/painel`

---

## 🔐 Segurança do Painel (IMPORTANTE)

⚠️ **ATENÇÃO:** O painel está público! Qualquer pessoa com a URL pode acessar.

### Para Adicionar Senha (Recomendado):

Opções:
1. **Vercel Password Protection** (mais fácil)
   - No Vercel Dashboard > Settings > Password Protection
   - Ative e defina uma senha
   
2. **NextAuth.js** (mais robusto)
   - Adicione login com email/senha
   - Requer configuração adicional

---

## 📧 Notificações por E-mail (Opcional)

Para receber email quando um novo lead chegar:

1. No Supabase, vá em **"Database"** > **"Webhooks"**
2. Crie um webhook para INSERT na tabela `leads`
3. Use serviços como:
   - **Zapier** (fácil, sem código)
   - **n8n** (open-source)
   - **Resend** (API de email)

---

## 🎨 Personalização

### Alterar Logo:
- Coloque `logo-fg.png` em `/public/`
- Dimensões recomendadas: 200x200px

### Alterar Cores:
- Edite `tailwind.config.ts`
- Procure por `primary` e altere as cores

### Alterar Textos:
- Edite `app/page.tsx`
- Todos os textos estão no código

---

## 📊 Estrutura do Banco de Dados

Tabela: `leads`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | ID único automático |
| nome | TEXT | Nome completo do lead |
| email | TEXT | E-mail do lead |
| telefone | TEXT | Telefone/WhatsApp |
| empresa | TEXT | Nome da empresa |
| tipo_empresa | TEXT | Segmento da empresa |
| desafios | TEXT[] | Array de desafios selecionados |
| outros_desafios | TEXT | Observações adicionais |
| data_contato | TIMESTAMP | Data/hora do contato |
| status | TEXT | novo, contatado, qualificado, convertido, arquivado |
| created_at | TIMESTAMP | Data de criação no banco |
| updated_at | TIMESTAMP | Última atualização |

---

## 🆘 Problemas Comuns

### ❌ "Failed to fetch" ao enviar formulário
**Solução:** Verifique se o Supabase está configurado corretamente no `.env.local`

### ❌ Painel vazio
**Solução:** 
1. Verifique se a tabela `leads` foi criada
2. Clique em "Atualizar" no painel
3. Envie um novo teste do formulário

### ❌ Erro 500 na API
**Solução:**
1. Verifique as credenciais do Supabase
2. Confira se a tabela tem as colunas corretas
3. Veja os logs no console do navegador

---

## 📞 Suporte

- **Supabase Docs:** https://supabase.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs

---

## ✅ Checklist de Configuração

- [ ] Conta criada no Supabase
- [ ] Projeto criado no Supabase
- [ ] Tabela `leads` criada com SQL
- [ ] Credenciais copiadas
- [ ] `.env.local` configurado
- [ ] Servidor reiniciado (`npm run dev`)
- [ ] Formulário testado
- [ ] Lead apareceu no painel
- [ ] Lead apareceu no Supabase Table Editor

**Se todos os itens estão marcados, está tudo funcionando! 🎉**
