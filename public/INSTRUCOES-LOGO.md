# Instruções para Adicionar a Logo FG Services

## 📁 Onde colocar o arquivo da logo

Coloque o arquivo `logo-fg.png` nesta pasta:

```
c:\Users\user\Documents\landing page\public\logo-fg.png
```

## 📐 Especificações Recomendadas

### Formato do Arquivo
- **Formato:** PNG com fundo transparente (recomendado)
- **Alternativas:** JPG, SVG, WebP

### Dimensões
- **Tamanho ideal:** 512x512 pixels (proporção 1:1)
- **Mínimo:** 256x256 pixels
- **Máximo:** 1024x1024 pixels

### Otimização
- Comprimir a imagem para web (recomendado < 100KB)
- Usar PNG-8 se possível (menor tamanho)
- Remover metadados desnecessários

## 📍 Onde a Logo Aparece

A logo da FG Services aparecerá em **3 locais** na landing page:

### 1. Hero Section (Topo da página)
- Tamanho: 160x160px (desktop) / 128x128px (mobile)
- Posição: Centro, acima do título principal
- Efeito: Drop shadow 2xl, animação de entrada

### 2. Navbar (Barra de navegação flutuante)
- Tamanho: 40x40px
- Posição: Canto superior esquerdo
- Aparece quando o usuário rola a página para baixo
- Clicável: retorna ao topo da página

### 3. Footer (Rodapé)
- Tamanho: 64x64px
- Posição: Centro, acima do nome da empresa
- Efeito: Invertida para branco (já que fundo é escuro)
- Opacidade reduzida (70%) com hover para 100%

## 🎨 Dicas de Design

### Se a logo tiver fundo colorido:
- Exporte uma versão com fundo transparente
- A página usa fundo branco/claro, logo escura ficará melhor

### Se a logo for muito horizontal/vertical:
- Ajuste as dimensões no código (largura/altura)
- Mantenha as proporções originais

### Cores recomendadas para a logo:
- Azul escuro (#0159a0) - cor principal do site
- Cinza escuro (#1f2937)
- Preto (#000000)
- Ou mantenha as cores originais da marca

## 🔧 Personalizando

Se precisar ajustar o tamanho ou posição da logo, edite os arquivos:

- `app/page.tsx` - Hero section e Footer
- `components/Navbar.tsx` - Barra de navegação

Procure por `<Image src="/logo-fg.png"` e ajuste os valores de `width` e `height`.

## ✅ Depois de adicionar a logo

1. Salve o arquivo `logo-fg.png` na pasta `public`
2. O Next.js detectará automaticamente
3. Atualize o navegador (F5)
4. A logo aparecerá nos 3 locais mencionados

Se a logo não aparecer:
- Verifique se o nome do arquivo está correto: `logo-fg.png`
- Certifique-se que está na pasta `public` (raiz do projeto)
- Limpe o cache do navegador (Ctrl+Shift+R)
- Reinicie o servidor de desenvolvimento se necessário
