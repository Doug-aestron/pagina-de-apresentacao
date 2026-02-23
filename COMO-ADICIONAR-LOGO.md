# 🎨 Como Adicionar a Logo da FG Services

## 📂 Passo 1: Localize a pasta `public`

A pasta `public` está localizada na raiz do projeto:

```
c:\Users\user\Documents\landing page\public\
```

## 📥 Passo 2: Copie sua logo

Copie o arquivo `logo-fg.png` para dentro da pasta `public`:

```
c:\Users\user\Documents\landing page\public\logo-fg.png
```

### Arquivo Final:
```
landing-page/
└── public/
    └── logo-fg.png  ← SEU ARQUIVO AQUI
```

## ✅ Especificações da Logo

### Formato
- ✅ **PNG com fundo transparente** (recomendado)
- ✅ SVG (vetorial)
- ✅ JPG (se não tiver transparência)
- ✅ WebP

### Dimensões Ideais
- **Proporção:** 1:1 (quadrada) ou até 3:2
- **Tamanho:** 512x512 pixels
- **Peso:** Menos de 100KB (otimizado)

## 📍 Onde a Logo Aparece

### 1️⃣ Hero Section (Topo)
- **Tamanho exibido:** 160x160px (desktop) / 128x128px (mobile)
- **Posição:** Centro da página, logo acima do badge
- **Efeito:** Drop shadow grande, animação de entrada suave
- **Quando:** Aparece imediatamente ao carregar a página

### 2️⃣ Navbar (Barra de Navegação)
- **Tamanho exibido:** 40x40px
- **Posição:** Canto superior esquerdo
- **Comportamento:** Aparece quando você rola a página para baixo
- **Interação:** Clicável - volta ao topo ao clicar

### 3️⃣ Footer (Rodapé)
- **Tamanho exibido:** 40x40px
- **Posição:** Centro, acima do texto
- **Efeito:** Invertida para branco (fundo escuro), opacidade 70%
- **Hover:** Opacidade aumenta para 100%

## 🔄 O que acontece se eu não adicionar a logo?

Não se preocupe! Se você não adicionar `logo-fg.png`, o sistema automaticamente mostrará um **placeholder elegante** com as iniciais "FG" em um gradiente azul.

Isso garante que a página funcione perfeitamente mesmo sem a logo oficial.

## 🖼️ Logo Temporária

Enquanto você não adiciona a logo oficial, criamos um placeholder SVG:
- Arquivo: `public/placeholder-logo.svg`
- Pode ser usado temporariamente renomeando para `logo-fg.png`

## 🎨 Personalizando o Tamanho da Logo

Se sua logo tiver proporções diferentes (retangular, por exemplo), você pode ajustar:

### Edite o arquivo `components/Logo.tsx`:

```typescript
const sizes = {
  small: { width: 40, height: 40 },    // Navbar e Footer
  medium: { width: 128, height: 128 }, // Não usado atualmente
  large: { width: 160, height: 160 },  // Hero section
};
```

**Exemplo para logo horizontal (largura maior):**
```typescript
const sizes = {
  small: { width: 60, height: 40 },   
  medium: { width: 192, height: 128 },
  large: { width: 240, height: 160 }, 
};
```

## 🚀 Após Adicionar a Logo

1. ✅ Salve `logo-fg.png` na pasta `public`
2. ✅ O Next.js detecta automaticamente
3. ✅ Atualize o navegador (F5 ou Ctrl+R)
4. ✅ A logo aparecerá nos 3 locais!

## ❓ Resolução de Problemas

### A logo não aparece?
1. ✅ Verifique se o nome está correto: `logo-fg.png` (minúsculas)
2. ✅ Confirme que está na pasta `public` (raiz do projeto)
3. ✅ Limpe o cache: Ctrl+Shift+R (Chrome/Edge)
4. ✅ Reinicie o servidor de desenvolvimento

### A logo está cortada ou distorcida?
- O componente usa `object-contain` que mantém proporções
- Se ainda assim houver problemas, ajuste as dimensões em `Logo.tsx`

### A logo está muito grande ou pequena?
- Edite os valores em `components/Logo.tsx` (ver seção acima)
- Mantenha as proporções da logo original

## 💡 Dica Pro

Para melhor qualidade visual:
1. Exporte a logo em 2x ou 3x do tamanho de exibição
2. Exemplo: Para exibir 160x160px, use 480x480px
3. O Next.js otimizará automaticamente a imagem

---

**Precisa de ajuda?** Abra o arquivo `components/Logo.tsx` para ver o código da logo.
