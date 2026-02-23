// Configuração personalizável da landing page
// Use variáveis de ambiente para personalizar para cada cliente

export const siteConfig = {
  // Nome da empresa cliente
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Sua Empresa',
  
  // Nome curto (usado em alguns lugares)
  companyShortName: process.env.NEXT_PUBLIC_COMPANY_SHORT_NAME || 'Empresa',
  
  // Segmento de atuação
  segment: process.env.NEXT_PUBLIC_COMPANY_SEGMENT || 'terceirização de serviços de limpeza',
  
  // Logo (opcional - se não definir, usa placeholder)
  logo: process.env.NEXT_PUBLIC_COMPANY_LOGO || '/logo-fg.png',
  
  // Slogan/Tagline
  tagline: process.env.NEXT_PUBLIC_COMPANY_TAGLINE || 'Mais Poder, Mais Controle',
  
  // Título da página
  pageTitle: process.env.NEXT_PUBLIC_PAGE_TITLE || 'Plataforma de Gestão Inteligente',
  
  // Meta description
  metaDescription: process.env.NEXT_PUBLIC_META_DESCRIPTION || 'Plataforma de Gestão Inteligente para decisões estratégicas',
};

// Função helper para checar se está personalizado
export function isCustomized(): boolean {
  return !!process.env.NEXT_PUBLIC_COMPANY_NAME;
}

// Textos genéricos vs personalizados
export function getCompanyText(genericText: string, personalizedText: string): string {
  return isCustomized() ? personalizedText : genericText;
}
