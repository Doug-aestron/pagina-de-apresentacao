import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
