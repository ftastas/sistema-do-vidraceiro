import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Dados de demonstração para quando não há conexão com Supabase
export const demoData = {
  users: [
    {
      id: '1',
      email: 'admin@vidracaria.com',
      password: 'senha123',
      name: 'Administrador',
      role: 'admin'
    }
  ],
  
  orcamentos: [
    {
      id: 'ORC-2025-001',
      cliente: 'João Silva',
      data: '2025-01-05',
      valor: 1200.00,
      status: 'aprovado',
      produtos: ['Box de Vidro 1,5m x 2m', 'Porta de Vidro']
    }
  ],
  
  ordens: [
    {
      id: 'OS-001',
      cliente: 'João Silva',
      produto: 'Box de Vidro',
      status: 'em-aberto',
      prazo: '2025-01-10'
    }
  ],
  
  estoque: [
    {
      id: 1,
      nome: 'Vidro Temperado 10mm',
      quantidade: 25,
      minimo: 10,
      unidade: 'm²',
      valor: 85.00
    }
  ],
  
  financas: {
    receitas: 25400.00,
    despesas: 8200.00,
    lucro: 17200.00,
    margem: 67.7
  },
  
  caixa: {
    abertura: 500.00,
    entradas: 2450.00,
    saidas: 320.00,
    aberto: true
  }
};

// Função para verificar se está em modo demo
export const isDemoMode = () => {
  return !import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL === 'https://demo.supabase.co';
};

