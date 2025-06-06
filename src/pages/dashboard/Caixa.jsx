import { useState } from 'react';
import { Calculator, DollarSign, CreditCard, TrendingUp } from 'lucide-react';

const Caixa = () => {
  const [caixaAberto, setCaixaAberto] = useState(true);
  const [valorAbertura] = useState(500.00);
  const [entradas] = useState(2450.00);
  const [saidas] = useState(320.00);
  
  const saldoAtual = valorAbertura + entradas - saidas;
  
  const movimentacoes = [
    { id: 1, tipo: 'entrada', descricao: 'Venda - João Silva', valor: 1200.00, hora: '09:30' },
    { id: 2, tipo: 'entrada', descricao: 'Venda - Maria Santos', valor: 850.00, hora: '11:15' },
    { id: 3, tipo: 'saida', descricao: 'Compra de material', valor: 200.00, hora: '14:20' },
    { id: 4, tipo: 'entrada', descricao: 'Venda - Carlos Lima', valor: 400.00, hora: '15:45' },
    { id: 5, tipo: 'saida', descricao: 'Combustível', valor: 120.00, hora: '16:30' },
  ];
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-glass-800">Caixa</h1>
          <p className="text-glass-600">Controle de movimentações diárias</p>
        </div>
        <div className="mt-4 sm:mt-0">
          {caixaAberto ? (
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-all hover-lift">
              Fechar Caixa
            </button>
          ) : (
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-all hover-lift">
              Abrir Caixa
            </button>
          )}
        </div>
      </div>
      
      {/* Status do Caixa */}
      <div className={`rounded-lg p-4 ${caixaAberto ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
        <div className="flex items-center">
          <Calculator className={`w-5 h-5 mr-2 ${caixaAberto ? 'text-green-600' : 'text-red-600'}`} />
          <span className={`font-medium ${caixaAberto ? 'text-green-800' : 'text-red-800'}`}>
            Caixa {caixaAberto ? 'Aberto' : 'Fechado'} - {new Date().toLocaleDateString('pt-BR')}
          </span>
        </div>
      </div>
      
      {/* Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-glass-500 text-sm">Abertura</p>
              <p className="text-2xl font-bold text-glass-800">
                R$ {valorAbertura.toFixed(2)}
              </p>
            </div>
            <Calculator className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-glass-500 text-sm">Entradas</p>
              <p className="text-2xl font-bold text-green-600">
                R$ {entradas.toFixed(2)}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-glass-500 text-sm">Saídas</p>
              <p className="text-2xl font-bold text-red-600">
                R$ {saidas.toFixed(2)}
              </p>
            </div>
            <CreditCard className="w-8 h-8 text-red-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-glass-500 text-sm">Saldo Atual</p>
              <p className="text-2xl font-bold text-primary-600">
                R$ {saldoAtual.toFixed(2)}
              </p>
            </div>
            <DollarSign className="w-8 h-8 text-primary-500" />
          </div>
        </div>
      </div>
      
      {/* Movimentações */}
      <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
        <h3 className="text-lg font-medium text-glass-800 mb-4">Movimentações do Dia</h3>
        
        <div className="space-y-3">
          {movimentacoes.map((mov) => (
            <div key={mov.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-glass-50 transition-all">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  mov.tipo === 'entrada' ? 'bg-green-500' : 'bg-red-500'
                }`} />
                <div>
                  <p className="font-medium text-glass-800">{mov.descricao}</p>
                  <p className="text-sm text-glass-500">{mov.hora}</p>
                </div>
              </div>
              <div className={`font-medium ${
                mov.tipo === 'entrada' ? 'text-green-600' : 'text-red-600'
              }`}>
                {mov.tipo === 'entrada' ? '+' : '-'} R$ {mov.valor.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        
        {movimentacoes.length === 0 && (
          <div className="text-center py-12 text-glass-500">
            <Calculator className="w-12 h-12 text-glass-300 mx-auto mb-4" />
            <p>Nenhuma movimentação registrada hoje</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Caixa;

