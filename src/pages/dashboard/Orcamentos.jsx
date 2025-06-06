import { useState } from 'react';
import { Plus, Search, Filter, Eye, Edit, Trash2, FileText } from 'lucide-react';

const Orcamentos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');
  
  const orcamentos = [
    {
      id: 'ORC-2025-001',
      cliente: 'João Silva',
      data: '2025-01-05',
      valor: 1200.00,
      status: 'aprovado',
      produtos: ['Box de Vidro 1,5m x 2m', 'Porta de Vidro']
    },
    {
      id: 'ORC-2025-002',
      cliente: 'Maria Oliveira',
      data: '2025-01-04',
      valor: 850.00,
      status: 'pendente',
      produtos: ['Espelho 2m²']
    },
    {
      id: 'ORC-2025-003',
      cliente: 'Carlos Santos',
      data: '2025-01-03',
      valor: 1500.00,
      status: 'rejeitado',
      produtos: ['Janela Temperada 3m x 1,5m']
    },
    {
      id: 'ORC-2025-004',
      cliente: 'Ana Pereira',
      data: '2025-01-02',
      valor: 2100.00,
      status: 'aprovado',
      produtos: ['Porta de Vidro Temperado', 'Fechadura']
    },
  ];
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'aprovado':
        return 'bg-green-100 text-green-700';
      case 'pendente':
        return 'bg-yellow-100 text-yellow-700';
      case 'rejeitado':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  
  const filteredOrcamentos = orcamentos.filter(orc => {
    const matchesSearch = orc.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         orc.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'todos' || orc.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-glass-800">Orçamentos</h1>
          <p className="text-glass-600">Gerencie todos os orçamentos da sua vidraçaria</p>
        </div>
        <button className="mt-4 sm:mt-0 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all hover-lift flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Novo Orçamento
        </button>
      </div>
      
      {/* Filtros */}
      <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-glass-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por cliente ou ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-glass-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="sm:w-48">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-glass-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="todos">Todos os Status</option>
              <option value="pendente">Pendente</option>
              <option value="aprovado">Aprovado</option>
              <option value="rejeitado">Rejeitado</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Lista de Orçamentos */}
      <div className="bg-white rounded-xl shadow-sm border border-glass-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-glass-50">
              <tr>
                <th className="text-left py-4 px-6 text-glass-700 font-medium">ID</th>
                <th className="text-left py-4 px-6 text-glass-700 font-medium">Cliente</th>
                <th className="text-left py-4 px-6 text-glass-700 font-medium">Data</th>
                <th className="text-left py-4 px-6 text-glass-700 font-medium">Valor</th>
                <th className="text-left py-4 px-6 text-glass-700 font-medium">Status</th>
                <th className="text-left py-4 px-6 text-glass-700 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrcamentos.map((orcamento, index) => (
                <tr key={orcamento.id} className="border-b border-glass-100 hover:bg-glass-50 transition-all">
                  <td className="py-4 px-6">
                    <span className="font-medium text-glass-800">{orcamento.id}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-glass-800">{orcamento.cliente}</div>
                      <div className="text-sm text-glass-500">
                        {orcamento.produtos.slice(0, 2).join(', ')}
                        {orcamento.produtos.length > 2 && '...'}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-glass-600">
                    {new Date(orcamento.data).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-glass-800">
                      R$ {orcamento.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(orcamento.status)}`}>
                      {orcamento.status.charAt(0).toUpperCase() + orcamento.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-glass-400 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-all">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-glass-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-glass-400 hover:text-green-500 hover:bg-green-50 rounded-lg transition-all">
                        <FileText className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-glass-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredOrcamentos.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-glass-300 mx-auto mb-4" />
            <h3 className="text-glass-500 font-medium">Nenhum orçamento encontrado</h3>
            <p className="text-glass-400 text-sm">Tente ajustar os filtros ou criar um novo orçamento</p>
          </div>
        )}
      </div>
      
      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-glass-500 text-sm">Total de Orçamentos</p>
              <p className="text-2xl font-bold text-glass-800">{orcamentos.length}</p>
            </div>
            <div className="p-3 bg-primary-100 rounded-lg">
              <FileText className="w-6 h-6 text-primary-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-glass-500 text-sm">Valor Total</p>
              <p className="text-2xl font-bold text-glass-800">
                R$ {orcamentos.reduce((sum, orc) => sum + orc.valor, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-glass-500 text-sm">Taxa de Aprovação</p>
              <p className="text-2xl font-bold text-glass-800">
                {Math.round((orcamentos.filter(o => o.status === 'aprovado').length / orcamentos.length) * 100)}%
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orcamentos;

