import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Função para criar o cliente Supabase de forma segura
function createSupabaseClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === '' || supabaseAnonKey === '') {
    console.warn('⚠️ Supabase credentials not configured. Database operations will fail.');
    return null;
  }
  
  try {
    return createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.error('❌ Failed to create Supabase client:', error);
    return null;
  }
}

export const supabase = createSupabaseClient();

// Helper para verificar se o Supabase está configurado
export function isSupabaseConfigured(): boolean {
  return supabase !== null;
}

// Tipos para o Lead
export interface Lead {
  id?: string;
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  tipo_empresa: string;
  desafios: string[];
  outros_desafios?: string;
  data_contato: string;
  status: 'novo' | 'contatado' | 'qualificado' | 'convertido' | 'arquivado';
  created_at?: string;
}
