import { useState } from 'react';
import { TrendingUp, DollarSign, CreditCard, PiggyBank } from 'lucide-react';

const Financas = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-glass-800">Finanças</h1>
        <p className="text-glass-600">Controle financeiro da sua vidraçaria</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-glass-500 text-sm">Receitas</p>
              <p className="text-2xl font-bold text-green-600">R$ 25.400,00</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-glass-500 text-sm">Despesas</p>
              <p className="text-2xl font-bold text-red-600">R$ 8.200,00</p>
            </div>
            <CreditCard className="w-8 h-8 text-red-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-glass-500 text-sm">Lucro</p>
              <p className="text-2xl font-bold text-blue-600">R$ 17.200,00</p>
            </div>
            <DollarSign className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-glass-500 text-sm">Margem</p>
              <p className="text-2xl font-bold text-purple-600">67.7%</p>
            </div>
            <PiggyBank className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
        <h3 className="text-lg font-medium text-glass-800 mb-4">Lançamentos Recentes</h3>
        <div className="text-center py-12 text-glass-500">
          Funcionalidade em desenvolvimento...
        </div>
      </div>
    </div>
  );
};

export default Financas;

