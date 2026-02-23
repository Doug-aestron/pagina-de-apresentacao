# 🎨 Guia de Personalização para Outras Empresas

Este guia explica como personalizar a landing page para diferentes empresas clientes.

---

## 📋 Visão Geral

A landing page agora é **100% personalizável** através de **variáveis de ambiente**. Você pode:

- ✅ Usar a **mesma base de código** para múltiplas empresas
- ✅ Fazer **deploys separados** no Vercel com configurações diferentes
- ✅ Ter uma **versão genérica** (sem nome de empresa específico)
- ✅ Personalizar **nome, logo, slogan e segmento** de cada cliente

---

## 🎯 Como Funciona

### **Arquivo de Configuração:** `lib/config.ts`

Este arquivo lê as variáveis de ambiente e fornece valores padrão caso não estejam definidas:

```typescript
export const siteConfig = {
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Sua Empresa',
  companyShortName: process.env.NEXT_PUBLIC_COMPANY_SHORT_NAME || 'Empresa',
  segment: process.env.NEXT_PUBLIC_COMPANY_SEGMENT || 'terceirização de serviços',
  logo: process.env.NEXT_PUBLIC_COMPANY_LOGO || '/logo-fg.png',
  tagline: process.env.NEXT_PUBLIC_COMPANY_TAGLINE || 'Mais Poder, Mais Controle',
  pageTitle: process.env.NEXT_PUBLIC_PAGE_TITLE || 'Plataforma de Gestão Inteligente',
  metaDescription: process.env.NEXT_PUBLIC_META_DESCRIPTION || 'Plataforma de Gestão Inteligente',
};
```

---

## 🚀 Deploy para FG Services (Atual)

### **Variáveis no Vercel:**

```env
NEXT_PUBLIC_COMPANY_NAME=FG Services
NEXT_PUBLIC_COMPANY_SHORT_NAME=FG
NEXT_PUBLIC_COMPANY_SEGMENT=terceirização de serviços de limpeza
NEXT_PUBLIC_COMPANY_LOGO=/logo-fg.png
NEXT_PUBLIC_COMPANY_TAGLINE=Mais Poder, Mais Controle
NEXT_PUBLIC_PAGE_TITLE=FG Services - Plataforma de Gestão Inteligente
NEXT_PUBLIC_META_DESCRIPTION=Plataforma de Gestão Inteligente desenvolvida para a FG Services

# Supabase (mesmo banco para todos, separado por empresa)
NEXT_PUBLIC_SUPABASE_URL=https://sua-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui
```

**URL:** `fgservices.vercel.app`

---

## 🏢 Deploy para Outra Empresa (Exemplo: CleanTech)

### **1. Crie um novo projeto no Vercel**

- Importe o **mesmo repositório** do GitHub
- Dê um nome diferente: `cleantech-landing`

### **2. Configure as variáveis de ambiente:**

```env
NEXT_PUBLIC_COMPANY_NAME=CleanTech Serviços
NEXT_PUBLIC_COMPANY_SHORT_NAME=CleanTech
NEXT_PUBLIC_COMPANY_SEGMENT=terceirização de limpeza empresarial
NEXT_PUBLIC_COMPANY_LOGO=/logo-cleantech.png
NEXT_PUBLIC_COMPANY_TAGLINE=Gestão Eficiente, Resultados Reais
NEXT_PUBLIC_PAGE_TITLE=CleanTech - Plataforma de Gestão Inteligente
NEXT_PUBLIC_META_DESCRIPTION=Plataforma de Gestão Inteligente desenvolvida para a CleanTech Serviços

# Mesmo Supabase (banco compartilhado)
NEXT_PUBLIC_SUPABASE_URL=https://sua-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui
```

### **3. Adicione a logo da empresa:**

- Coloque a logo em `public/logo-cleantech.png` no repositório
- Ou faça upload diretamente no Vercel

**URL:** `cleantech-landing.vercel.app`

---

## 🌐 Deploy Genérico (Sem Nome de Empresa)

Para uma versão genérica que serve qualquer empresa:

### **Variáveis no Vercel:**

```env
# NÃO DEFINA as variáveis de personalização!
# Ou deixe valores genéricos:

NEXT_PUBLIC_COMPANY_NAME=Sua Empresa
NEXT_PUBLIC_COMPANY_TAGLINE=Mais Poder, Mais Controle
NEXT_PUBLIC_PAGE_TITLE=Plataforma de Gestão Inteligente
NEXT_PUBLIC_META_DESCRIPTION=Plataforma de Gestão Inteligente para empresas de terceirização

# Apenas Supabase
NEXT_PUBLIC_SUPABASE_URL=https://sua-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui
```

**URL:** `gestao-inteligente.vercel.app`

---

## 📊 Múltiplas Empresas no Mesmo Banco Supabase

Você pode usar o **mesmo banco Supabase** para todas as empresas. Os leads serão diferenciados por origem (URL/domínio).

### **Opcional: Adicionar coluna de identificação**

Se quiser separar os leads por empresa no banco:

```sql
-- Adicionar coluna 'origem' na tabela leads
ALTER TABLE leads ADD COLUMN origem TEXT DEFAULT 'site';
```

Depois, modifique `app/api/leads/route.ts` para incluir o nome da empresa:

```typescript
const lead = {
  // ... outros campos
  origem: process.env.NEXT_PUBLIC_COMPANY_SHORT_NAME || 'generico',
};
```

Assim, no painel você verá:
- Leads da FG Services: `origem: "FG"`
- Leads da CleanTech: `origem: "CleanTech"`
- Leads genéricos: `origem: "generico"`

---

## 🎨 Personalizando a Logo

### **Para FG Services:**
```env
NEXT_PUBLIC_COMPANY_LOGO=/logo-fg.png
```

### **Para CleanTech:**
```env
NEXT_PUBLIC_COMPANY_LOGO=/logo-cleantech.png
```

### **Para versão genérica:**
```env
# Não defina, ou use um placeholder
NEXT_PUBLIC_COMPANY_LOGO=/logo-placeholder.png
```

As logos devem estar na pasta `public/` do projeto.

---

## 🔄 Workflow Recomendado

### **Cenário 1: Cliente novo com proposta personalizada**

1. Crie um novo projeto no Vercel
2. Configure as variáveis com o nome do cliente
3. Adicione a logo do cliente no `public/`
4. Deploy! A página estará personalizada

### **Cenário 2: Proposta genérica para vários prospects**

1. Use o deploy genérico (sem nome de empresa)
2. Compartilhe o link único para todos os prospects
3. Quando um prospect se tornar cliente, crie um deploy personalizado

### **Cenário 3: Teste local com empresa diferente**

Edite o `.env.local` localmente:

```env
NEXT_PUBLIC_COMPANY_NAME=Teste Empresa LTDA
NEXT_PUBLIC_COMPANY_TAGLINE=Seu Slogan Aqui
```

Execute `npm run dev` e veja as mudanças!

---

## ✅ Checklist de Personalização

Ao criar um deploy para novo cliente:

- [ ] Nome da empresa configurado (`NEXT_PUBLIC_COMPANY_NAME`)
- [ ] Nome curto configurado (`NEXT_PUBLIC_COMPANY_SHORT_NAME`)
- [ ] Segmento de atuação configurado (`NEXT_PUBLIC_COMPANY_SEGMENT`)
- [ ] Logo adicionada na pasta `public/` e referenciada
- [ ] Slogan/Tagline personalizado (`NEXT_PUBLIC_COMPANY_TAGLINE`)
- [ ] Título da página personalizado (`NEXT_PUBLIC_PAGE_TITLE`)
- [ ] Meta description personalizada (`NEXT_PUBLIC_META_DESCRIPTION`)
- [ ] Supabase configurado (`NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
- [ ] Deploy testado e funcionando
- [ ] Formulário de contato testado
- [ ] Painel de leads acessível e funcional

---

## 🎯 Exemplos Práticos

### **Exemplo 1: Empresa de Limpeza Hospitalar**

```env
NEXT_PUBLIC_COMPANY_NAME=MedClean Hospitalar
NEXT_PUBLIC_COMPANY_SHORT_NAME=MedClean
NEXT_PUBLIC_COMPANY_SEGMENT=limpeza e higienização hospitalar
NEXT_PUBLIC_COMPANY_LOGO=/logo-medclean.png
NEXT_PUBLIC_COMPANY_TAGLINE=Higiene Certificada, Saúde Garantida
NEXT_PUBLIC_PAGE_TITLE=MedClean - Gestão Hospitalar Inteligente
NEXT_PUBLIC_META_DESCRIPTION=Sistema de gestão para empresas de limpeza hospitalar
```

### **Exemplo 2: Empresa de Facilities**

```env
NEXT_PUBLIC_COMPANY_NAME=FacilitiesPro
NEXT_PUBLIC_COMPANY_SHORT_NAME=FP
NEXT_PUBLIC_COMPANY_SEGMENT=gestão de facilities e infraestrutura
NEXT_PUBLIC_COMPANY_LOGO=/logo-facilitiespro.png
NEXT_PUBLIC_COMPANY_TAGLINE=Facilities Sob Controle
NEXT_PUBLIC_PAGE_TITLE=FacilitiesPro - Gestão Inteligente
NEXT_PUBLIC_META_DESCRIPTION=Plataforma completa para gestão de facilities
```

### **Exemplo 3: Empresa de Terceirização Geral**

```env
NEXT_PUBLIC_COMPANY_NAME=TotalServiços
NEXT_PUBLIC_COMPANY_SHORT_NAME=TS
NEXT_PUBLIC_COMPANY_SEGMENT=terceirização de serviços diversos
NEXT_PUBLIC_COMPANY_LOGO=/logo-totalservicos.png
NEXT_PUBLIC_COMPANY_TAGLINE=Todos os Serviços, Um Só Controle
NEXT_PUBLIC_PAGE_TITLE=TotalServiços - Plataforma de Gestão
NEXT_PUBLIC_META_DESCRIPTION=Sistema de gestão para empresas de terceirização
```

---

## 🔧 Troubleshooting

### **Problema: Ainda aparece "FG Services"**

**Solução:** Verifique se as variáveis de ambiente estão configuradas corretamente no Vercel. Após alterar, faça um **Redeploy**.

### **Problema: Logo não aparece**

**Solução:** 
1. Verifique se o arquivo está em `public/logo-xxxx.png`
2. Confirme o caminho na variável: `NEXT_PUBLIC_COMPANY_LOGO=/logo-xxxx.png`
3. Faça um novo deploy

### **Problema: Título genérico no navegador**

**Solução:** Configure `NEXT_PUBLIC_PAGE_TITLE` e faça redeploy. O título vem do `app/layout.tsx` que lê essa variável.

---

## 🎉 Resumo

Com este sistema de personalização:

1. **Um único código** → Múltiplos clientes
2. **Configuração via ambiente** → Fácil personalização
3. **Deploy independente** → Cada cliente tem sua URL
4. **Banco compartilhado** → Gerenciamento centralizado
5. **Marca própria** → Cada cliente vê sua empresa

Agora você pode **escalar** suas propostas comerciais sem duplicar código! 🚀
