# 🚀 Guia de Deploy no Vercel

## Visão Geral

Este projeto Next.js contém:
- **Landing Page** (página principal): `https://seu-dominio.vercel.app/`
- **Painel Admin**: `https://seu-dominio.vercel.app/painel`

Ambas as páginas serão hospedadas no mesmo domínio Vercel.

---

## 📋 Pré-requisitos

Antes de fazer o deploy, você precisa:

1. ✅ Repositório GitHub configurado (já feito!)
   - Repositório: `https://github.com/Doug-aestron/pagina-de-apresentacao`
   
2. ✅ Supabase configurado
   - Projeto criado no [Supabase](https://supabase.com)
   - Tabela `leads` criada (veja `SETUP-SUPABASE.md`)
   - URL e Anon Key do Supabase em mãos

3. ✅ Conta no Vercel
   - Crie uma conta gratuita em [vercel.com](https://vercel.com)

---

## 🎯 Passo a Passo do Deploy

### **1. Criar Conta no Vercel**

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"**
4. Autorize o Vercel a acessar seus repositórios

### **2. Importar Projeto do GitHub**

1. No dashboard do Vercel, clique em **"Add New..."** → **"Project"**
2. Encontre o repositório **"pagina-de-apresentacao"**
3. Clique em **"Import"**

### **3. Configurar Variáveis de Ambiente**

⚠️ **IMPORTANTE:** Antes de fazer o deploy, você DEVE configurar as variáveis de ambiente!

Na página de configuração do projeto no Vercel:

1. Expanda a seção **"Environment Variables"**
2. Adicione as seguintes variáveis:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Cole a URL do seu projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Cole a Anon Key do seu projeto Supabase |

**Onde encontrar essas informações?**
- Acesse seu projeto no [Supabase Dashboard](https://supabase.com/dashboard)
- Vá em **Settings** → **API**
- Copie:
  - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
  - **anon public** (em API Keys) → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### **4. Configurações do Build (Padrão)**

O Vercel detecta automaticamente que é um projeto Next.js. As configurações padrão são:

- **Framework Preset:** Next.js
- **Build Command:** `next build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

✅ Mantenha essas configurações padrão (não precisa alterar nada).

### **5. Iniciar Deploy**

1. Clique em **"Deploy"**
2. Aguarde o build completar (leva ~2-5 minutos)
3. ✅ Deploy concluído!

---

## 🌐 URLs do Projeto

Após o deploy, você terá:

### **Landing Page (Página de Apresentação)**
```
https://seu-projeto.vercel.app/
```
Esta é a página que seus leads/clientes verão.

### **Painel Admin**
```
https://seu-projeto.vercel.app/painel
```
Esta é a página onde você gerencia os leads.

⚠️ **IMPORTANTE:** Guarde o link do painel admin em um lugar seguro! Qualquer pessoa com o link pode acessá-lo.

---

## 🔄 Atualizações Automáticas

O Vercel está conectado ao seu GitHub. Sempre que você fizer um `git push`, o Vercel vai:

1. ✅ Detectar automaticamente a mudança
2. ✅ Fazer o build do projeto
3. ✅ Fazer o deploy automático
4. ✅ Atualizar o site em produção

Exemplo:
```bash
# Faça suas alterações no código
git add .
git commit -m "Atualização do design"
git push

# Vercel fará o deploy automático! 🚀
```

---

## 🎨 Personalizar Domínio

Por padrão, seu projeto terá um domínio `.vercel.app`. Para usar um domínio personalizado:

1. No dashboard do Vercel, vá até o seu projeto
2. Clique em **"Settings"** → **"Domains"**
3. Adicione seu domínio personalizado (ex: `fgservices.com.br`)
4. Siga as instruções para configurar o DNS

---

## 🔧 Gerenciar Variáveis de Ambiente

Se precisar atualizar as variáveis de ambiente (ex: trocar de projeto Supabase):

1. No dashboard do Vercel, acesse seu projeto
2. Vá em **"Settings"** → **"Environment Variables"**
3. Edite ou adicione novas variáveis
4. Clique em **"Save"**
5. Faça um **"Redeploy"** para aplicar as mudanças:
   - Vá em **"Deployments"**
   - Clique no menu **"⋯"** do último deploy
   - Clique em **"Redeploy"**

---

## 📊 Monitoramento

O Vercel oferece métricas gratuitas:

- **Analytics:** Visualizações de página, visitantes únicos
- **Speed Insights:** Performance do site
- **Logs:** Logs de erros e requisições (em **"Logs"** ou **"Functions"**)

Acesse essas métricas no dashboard do seu projeto.

---

## ❗ Troubleshooting

### **Erro: "Environment variables not defined"**
- **Causa:** Variáveis de ambiente não foram configuradas
- **Solução:** Vá em Settings → Environment Variables e adicione as variáveis do Supabase

### **Erro: "Failed to load leads" no painel**
- **Causa:** Variáveis do Supabase incorretas ou RLS não configurado
- **Solução:**
  1. Verifique se as variáveis de ambiente estão corretas
  2. Confirme que a tabela `leads` existe no Supabase
  3. Verifique as políticas de RLS (veja `SETUP-SUPABASE.md`)

### **Build falhou**
- **Causa:** Erro de sintaxe ou dependência faltando
- **Solução:**
  1. Teste localmente com `npm run build`
  2. Corrija os erros
  3. Faça commit e push novamente

### **Página em branco ou erro 404**
- **Causa:** Rota não existe ou erro no código
- **Solução:** Verifique os logs no Vercel (Functions → View Function Logs)

---

## 🔒 Segurança do Painel Admin

⚠️ **ATENÇÃO:** O painel admin (`/painel`) está publicamente acessível!

### Recomendações de segurança:

1. **Não compartilhe o link do painel** publicamente
2. **Use um domínio separado** para o painel (ex: `admin.seudominio.com`)
3. **Considere adicionar autenticação** no futuro (Supabase Auth, NextAuth.js, etc.)
4. **Monitore os acessos** através dos logs do Vercel

### Para melhorar a segurança no futuro:

Adicione autenticação ao painel usando:
- **Supabase Auth** (autenticação com email/senha)
- **NextAuth.js** (autenticação com Google, GitHub, etc.)
- **Middleware do Next.js** (proteção de rotas)

---

## 📝 Checklist Final

Antes de compartilhar o link com seus clientes:

- [ ] Deploy concluído com sucesso
- [ ] Landing page (`/`) carregando corretamente
- [ ] Painel admin (`/painel`) carregando corretamente
- [ ] Teste o formulário de contato (enviar um lead de teste)
- [ ] Verifique se o lead aparece no painel
- [ ] Teste as funcionalidades do painel (status, filtros, exclusão)
- [ ] Logo da empresa (logo-fg.png) aparecendo corretamente
- [ ] Conteúdo revisado e sem erros de digitação
- [ ] Performance: página carrega rápido (< 3 segundos)

---

## 📞 Próximos Passos

1. ✅ Configure o Supabase (se ainda não fez)
2. ✅ Faça o deploy no Vercel
3. ✅ Teste todas as funcionalidades
4. ✅ Compartilhe o link da landing page com seus clientes
5. ✅ Monitore os leads chegando no painel!

---

## 🎉 Sucesso!

Seu projeto está no ar! 🚀

- **Landing Page:** Compartilhe com seus leads/clientes
- **Painel Admin:** Use para gerenciar contatos
- **Atualizações:** Automáticas via GitHub

Boa sorte com sua apresentação para a FG Services! 💼✨
