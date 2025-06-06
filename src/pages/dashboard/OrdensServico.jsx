import { useState } from 'react';
import { ClipboardList, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const OrdensServico = () => {
  const [activeTab, setActiveTab] = useState('em-aberto');
  
  const ordens = {
    'em-aberto': [
      { id: 'OS-001', cliente: 'João Silva', produto: 'Box de Vidro', prazo: '2025-01-10' },
      { id: 'OS-002', cliente: 'Maria Santos', produto: 'Espelho', prazo: '2025-01-12' },
    ],
    'em-producao': [
      { id: 'OS-003', cliente: 'Carlos Lima', produto: 'Janela', prazo: '2025-01-08' },
      { id: 'OS-004', cliente: 'Ana Costa', produto: 'Porta', prazo: '2025-01-09' },
    ],
    'entregue': [
      { id: 'OS-005', cliente: 'Pedro Oliveira', produto: 'Box', prazo: '2025-01-05' },
    ]
  };
  
  const tabs = [
    { id: 'em-aberto', label: 'Em Aberto', icon: AlertCircle, color: 'text-yellow-500' },
    { id: 'em-producao', label: 'Em Produção', icon: Clock, color: 'text-blue-500' },
    { id: 'entregue', label: 'Entregue', icon: CheckCircle, color: 'text-green-500' },
  ];
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-glass-800">Ordem de Serviços</h1>
        <p className="text-glass-600">Acompanhe o status de todas as ordens</p>
      </div>
      
      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
        <div className="flex space-x-1 bg-glass-100 rounded-lg p-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all ${
                  activeTab === tab.id
                    ? 'bg-white shadow-sm text-glass-800'
                    : 'text-glass-500 hover:text-glass-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${activeTab === tab.id ? tab.color : ''}`} />
                <span className="font-medium">{tab.label}</span>
                <span className="bg-glass-200 text-glass-600 text-xs px-2 py-0.5 rounded-full">
                  {ordens[tab.id].length}
                </span>
              </button>
            );
          })}
        </div>
        
        {/* Content */}
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ordens[activeTab].map((ordem) => (
              <div key={ordem.id} className="bg-glass-50 rounded-lg p-4 hover-lift transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-glass-800">{ordem.id}</span>
                  <span className="text-xs text-glass-500">{ordem.prazo}</span>
                </div>
                <h4 className="font-medium text-glass-700 mb-1">{ordem.cliente}</h4>
                <p className="text-glass-600 text-sm">{ordem.produto}</p>
              </div>
            ))}
          </div>
          
          {ordens[activeTab].length === 0 && (
            <div className="text-center py-12 text-glass-500">
              <ClipboardList className="w-12 h-12 text-glass-300 mx-auto mb-4" />
              <p>Nenhuma ordem encontrada nesta categoria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdensServico;

