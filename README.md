# FG Services - Landing Page Executiva

## ⚡ INÍCIO RÁPIDO

**IMPORTANTE:** Para usar o sistema completo (formulário + painel), você precisa configurar o Supabase primeiro!

1. 📖 **Siga o guia:** `SETUP-SUPABASE.md` (10 minutos)
2. 🚀 **Execute:** `npm install && npm run dev`
3. ✅ **Acesse:** `http://localhost:3000`

---

## 📋 Objetivo da Página

Esta landing page executiva foi desenvolvida para apresentar a **Plataforma de Gestão Inteligente** à diretoria da **FG Services**, empresa especializada em terceirização de serviços de limpeza.

O objetivo é convencer a diretoria a fechar contrato para desenvolvimento de um sistema integrado de gestão com foco em:

- **Controle de custos detalhado por contrato**
- **Gestão inteligente de contratos**
- **Módulo financeiro estruturado**
- **Painel executivo estratégico**

## 🏗️ Estrutura do Projeto

```
landing-page/
├── app/
│   ├── layout.tsx          # Layout principal com metadata e fonte
│   ├── page.tsx            # Página principal com todas as seções e animações
│   └── globals.css         # Estilos globais, animações e configuração do Tailwind
├── components/
│   ├── Section.tsx         # Container reutilizável para seções
│   ├── Card.tsx            # Card genérico com glassmorphism e efeitos visuais
│   ├── DashboardCard.tsx   # Card específico para simulação de contratos com animações
│   ├── KPIItem.tsx         # Item de KPI/benefício com ícone e hover effects
│   ├── Navbar.tsx          # Barra de navegação flutuante com glassmorphism
│   ├── BubbleBackground.tsx     # Bolhas flutuantes animadas (tema limpeza)
│   ├── SparkleEffect.tsx        # Partículas brilhantes flutuantes
│   ├── GridBackground.tsx       # Grid tecnológico de fundo
│   ├── FloatingParticles.tsx    # Partículas de limpeza no ar
│   ├── LiquidWave.tsx           # Ondas líquidas animadas
│   ├── WaterDrops.tsx           # Gotas de água caindo
│   └── CleaningSweep.tsx        # Efeito de "limpeza" passando pela tela
├── package.json            # Dependências do projeto
├── tsconfig.json           # Configuração do TypeScript
├── tailwind.config.ts      # Configuração do TailwindCSS
├── postcss.config.js       # Configuração do PostCSS
├── next.config.js          # Configuração do Next.js
└── README.md               # Este arquivo

```

## 🎨 Estrutura da Landing Page

### 1. **Hero Section**
- Título impactante e subtítulo explicativo
- Botão de CTA principal
- Design limpo e centralizado

### 2. **Seção - O Problema Atual**
- 6 cards destacando os desafios atuais da gestão
- Problemas reais de visibilidade, controle e previsibilidade

### 3. **Seção - A Solução Proposta**
- 4 módulos principais da plataforma:
  - Controle Total de Custos
  - Gestão Inteligente de Contratos
  - Módulo Financeiro Estruturado
  - Painel Executivo da Diretoria

### 4. **Seção - Simulação Visual de Dashboard**
- Cards simulando contratos reais:
  - Hospital Central (saudável - margem positiva)
  - Shopping Norte (crítico - margem negativa)
- Mini KPIs com estatísticas consolidadas

### 5. **Seção - Impacto Estratégico**
- Lista de 6 benefícios tangíveis
- Ícones SVG para cada benefício
- Descrições claras do valor gerado

### 6. **Seção - Roadmap de Implementação**
- 4 fases de implantação estruturadas
- Detalhamento de cada fase com itens específicos
- Linha do tempo visual conectando as fases

### 7. **Call to Action Final**
- Pergunta estratégica para a diretoria
- Dois botões de ação (primário e secundário)
- Estatísticas de impacto esperado

## 🎨 Adicionar Logo da Empresa

Antes de rodar o projeto, adicione a logo da FG Services:

1. Coloque o arquivo `logo-fg.png` na pasta `public/`
2. Formato recomendado: PNG transparente, 512x512px
3. A logo aparecerá automaticamente em 3 locais:
   - Hero section (topo da página)
   - Navbar (barra de navegação flutuante)
   - Footer (rodapé)

**Caminho completo:** `c:\Users\user\Documents\landing page\public\logo-fg.png`

📄 Veja instruções detalhadas em: `public/INSTRUCOES-LOGO.md`

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn
- Logo da empresa (logo-fg.png) na pasta public

### Instalação

1. **Instalar dependências:**
```bash
npm install
```

2. **Adicionar a logo:**
   - Copie `logo-fg.png` para a pasta `public/`

3. **Iniciar servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Abrir no navegador:**
```
http://localhost:3000
```

### Build para Produção

```bash
# Gerar build otimizado
npm run build

# Rodar versão de produção
npm start
```

## 🎨 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior segurança
- **TailwindCSS** - Estilização utilitária responsiva
- **Framer Motion** - Animações suaves (opcional)

## 🔧 Personalização e Adaptação

### Adaptar para Outros Clientes

Esta landing page pode ser facilmente adaptada para outros clientes de consultoria ou desenvolvimento de software:

#### 1. **Alterar Informações da Empresa**

Em `app/page.tsx`, procure e substitua:
- **"FG Services"** → Nome do novo cliente
- **"terceirização de serviços de limpeza"** → Setor do novo cliente

#### 2. **Personalizar Problemas**

No array de problemas (seção "O Problema Atual"), adicione ou remova cards conforme necessário:

```typescript
{
  icon: '📊',
  title: 'Seu Problema Aqui',
  description: 'Descrição do problema específico do cliente.'
}
```

#### 3. **Ajustar Módulos da Solução**

Modifique os 4 cards da seção "A Solução Proposta" para refletir as funcionalidades específicas do sistema proposto.

#### 4. **Customizar Dados do Dashboard**

Altere os dados simulados nos componentes `DashboardCard`:

```typescript
<DashboardCard
  title="Seu Contrato/Projeto"
  revenue={150000}
  cost={130000}
  margin={13.3}
  status="healthy"
/>
```

#### 5. **Modificar Roadmap**

Ajuste as fases de implementação conforme o cronograma do projeto:

```typescript
{
  fase: 'Fase X',
  titulo: 'Nome da Fase',
  descricao: 'Descrição das atividades',
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4']
}
```

#### 6. **Personalizar Cores**

Em `tailwind.config.ts`, ajuste a paleta de cores primárias:

```typescript
primary: {
  700: '#SUA_COR_AQUI',  // Cor principal
  // ... outras tonalidades
}
```

### Cores Recomendadas por Setor

- **Tecnologia/Software:** Azul (#0070c6)
- **Finanças:** Verde escuro (#047857)
- **Saúde:** Azul claro (#0ea5e9)
- **Indústria:** Cinza azulado (#475569)
- **Consultoria:** Roxo (#7c3aed)

## 📱 Responsividade

O layout é totalmente responsivo e otimizado para:
- **Desktop** (1920px+)
- **Laptop** (1024px - 1920px)
- **Tablet** (768px - 1024px)
- **Mobile** (320px - 768px)

## 🎯 Boas Práticas Implementadas

✅ Componentização limpa e reutilizável  
✅ TypeScript para segurança de tipos  
✅ Design system consistente  
✅ Animações suaves e transições  
✅ Código comentado e documentado  
✅ Semantic HTML para acessibilidade  
✅ Performance otimizada com Next.js 14  

## ✨ Efeitos Visuais Tecnológicos Implementados

Esta landing page possui efeitos visuais sofisticados que remetem à limpeza e tecnologia:

### Efeitos de Fundo

1. **BubbleBackground** - Bolhas flutuantes que sobem suavemente
   - Simula bolhas de sabão
   - Movimento natural e elegante
   - Opacidade variável para sutileza

2. **SparkleEffect** - Partículas brilhantes piscando
   - Efeito de brilho e limpeza
   - Aparece e desaparece suavemente
   - Distribuição aleatória pela tela

3. **GridBackground** - Grade tecnológica sutil
   - Remete a precisão e tecnologia
   - Grid azul translúcido
   - Fundo fixo e discreto

4. **FloatingParticles** - Partículas de limpeza flutuando
   - Movimento tridimensional suave
   - Simula poeira sendo limpa
   - Velocidade variável

5. **LiquidWave** - Ondas líquidas animadas
   - SVG animado com gradientes
   - Movimento fluido contínuo
   - Duas camadas de ondas

6. **WaterDrops** - Gotas de água caindo
   - Simula gotas escorrendo
   - Tamanhos e velocidades variadas
   - Efeito sutil de água

7. **CleaningSweep** - Varredura de limpeza periódica
   - Barra de luz que atravessa a tela
   - Acontece a cada 15 segundos
   - Simula "limpeza" da interface

### Efeitos Interativos

- **Glassmorphism** - Efeito de vidro fosco nos cards
- **Hover animations** - Transformações suaves ao passar o mouse
- **Gradient text** - Textos com gradientes coloridos
- **Shadow glow** - Sombras que brilham nos elementos importantes
- **Scale transforms** - Elementos aumentam sutilmente no hover
- **Border animations** - Bordas que brilham e mudam de cor
- **Pulse effects** - Elementos pulsantes para chamar atenção

### Animações de Entrada

Utilizando **Framer Motion**:
- Fade in + slide up para títulos
- Stagger animation para listas de cards
- Parallax subtle em elementos de fundo
- Scroll-triggered animations (aparecem ao rolar)

## 📝 Notas de Desenvolvimento

- Os componentes foram criados pensando em **reutilização**
- Cada seção está isolada e pode ser movida ou removida facilmente
- Os dados do dashboard são **mockados** - em produção, conectar a APIs reais
- As cores seguem um **design system** baseado na paleta primary
- O layout é **mobile-first** e progressivamente aprimorado
- Todos os efeitos visuais são **otimizados para performance**
- Animações usam **CSS transforms** para melhor performance
- Efeitos de fundo são **pointer-events: none** para não interferir na interação

## 🎨 Identidade Visual

### Tom
- Executivo e profissional
- Minimalista com foco em conteúdo
- Cores sóbrias (azul escuro + cinza)

### Tipografia
- **Títulos:** Bold, grande, impactante
- **Subtítulos:** Semibold, médio
- **Corpo:** Regular, legível

### Elementos Visuais
- Cards com sombra suave
- Bordas arredondadas
- Gradientes sutis
- Indicadores de status coloridos

## 📞 Suporte

Para dúvidas sobre implementação ou customização, consulte a documentação oficial:
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Desenvolvido para apresentação executiva - FG Services 2026**
"# pagina-de-apresentacao" 
