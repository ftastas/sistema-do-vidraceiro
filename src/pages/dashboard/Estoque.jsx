import { useState } from 'react';
import { Package, AlertTriangle, Plus, Search } from 'lucide-react';

const Estoque = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const produtos = [
    { id: 1, nome: 'Vidro Temperado 10mm', quantidade: 25, minimo: 10, unidade: 'm²', valor: 85.00 },
    { id: 2, nome: 'Vidro Comum 6mm', quantidade: 45, minimo: 20, unidade: 'm²', valor: 35.00 },
    { id: 3, nome: 'Espelho 4mm', quantidade: 8, minimo: 15, unidade: 'm²', valor: 65.00 },
    { id: 4, nome: 'Perfil de Alumínio', quantidade: 120, minimo: 50, unidade: 'mt', valor: 25.00 },
    { id: 5, nome: 'Borracha de Vedação', quantidade: 200, minimo: 100, unidade: 'mt', valor: 8.50 },
  ];
  
  const filteredProdutos = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const produtosBaixoEstoque = produtos.filter(p => p.quantidade <= p.minimo);
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-glass-800">Estoque</h1>
          <p className="text-glass-600">Controle de produtos e materiais</p>
        </div>
        <button className="mt-4 sm:mt-0 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all hover-lift flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Novo Produto
        </button>
      </div>
      
      {/* Alertas */}
      {produtosBaixoEstoque.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
            <span className="text-yellow-800 font-medium">
              {produtosBaixoEstoque.length} produto(s) com estoque baixo
            </span>
          </div>
        </div>
      )}
      
      {/* Busca */}
      <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-glass-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-glass-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>
      
      {/* Lista de Produtos */}
      <div className="bg-white rounded-xl shadow-sm border border-glass-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-glass-50">
              <tr>
                <th className="text-left py-4 px-6 text-glass-700 font-medium">Produto</th>
                <th className="text-left py-4 px-6 text-glass-700 font-medium">Quantidade</th>
                <th className="text-left py-4 px-6 text-glass-700 font-medium">Unidade</th>
                <th className="text-left py-4 px-6 text-glass-700 font-medium">Valor Unit.</th>
                <th className="text-left py-4 px-6 text-glass-700 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredProdutos.map((produto) => (
                <tr key={produto.id} className="border-b border-glass-100 hover:bg-glass-50 transition-all">
                  <td className="py-4 px-6">
                    <span className="font-medium text-glass-800">{produto.nome}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`font-medium ${
                      produto.quantidade <= produto.minimo ? 'text-red-600' : 'text-glass-800'
                    }`}>
                      {produto.quantidade}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-glass-600">{produto.unidade}</td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-glass-800">
                      R$ {produto.valor.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    {produto.quantidade <= produto.minimo ? (
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700 flex items-center w-fit">
                        <AlertTriangle className="w-4 h-4 mr-1" />
                        Baixo
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                        Normal
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-glass-500 text-sm">Total de Produtos</p>
              <p className="text-2xl font-bold text-glass-800">{produtos.length}</p>
            </div>
            <Package className="w-8 h-8 text-primary-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-glass-500 text-sm">Valor Total</p>
              <p className="text-2xl font-bold text-glass-800">
                R$ {produtos.reduce((sum, p) => sum + (p.quantidade * p.valor), 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <Package className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-glass-500 text-sm">Alertas</p>
              <p className="text-2xl font-bold text-glass-800">{produtosBaixoEstoque.length}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estoque;

