import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET - Buscar todos os leads
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erro ao buscar leads:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ leads: data || [] }, { status: 200 });
  } catch (error: any) {
    console.error('Erro no GET /api/leads:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Criar novo lead
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validação básica
    if (!body.nome || !body.email || !body.telefone || !body.empresa) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      );
    }

    const lead = {
      nome: body.nome,
      email: body.email,
      telefone: body.telefone,
      empresa: body.empresa,
      tipo_empresa: body.tipoEmpresa || body.tipo_empresa,
      desafios: body.desafios || [],
      outros_desafios: body.outrosDesafios || body.outros_desafios || '',
      data_contato: new Date().toISOString(),
      status: 'novo' as const,
    };

    const { data, error } = await supabase
      .from('leads')
      .insert([lead])
      .select()
      .single();

    if (error) {
      console.error('Erro ao criar lead:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('✅ Lead criado com sucesso:', data);
    return NextResponse.json({ lead: data }, { status: 201 });
  } catch (error: any) {
    console.error('Erro no POST /api/leads:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PATCH - Atualizar status do lead
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: 'ID e status são obrigatórios' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('leads')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Erro ao atualizar lead:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ lead: data }, { status: 200 });
  } catch (error: any) {
    console.error('Erro no PATCH /api/leads:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE - Deletar lead
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID é obrigatório' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('leads')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Erro ao deletar lead:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Lead deletado com sucesso' }, { status: 200 });
  } catch (error: any) {
    console.error('Erro no DELETE /api/leads:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
