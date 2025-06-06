import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Package, 
  FileText,
  Calendar,
  Clock,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

// Dados simulados
const revenueData = [
  { name: 'Jan', value: 12500 },
  { name: 'Fev', value: 15000 },
  { name: 'Mar', value: 18000 },
  { name: 'Abr', value: 16000 },
  { name: 'Mai', value: 21000 },
  { name: 'Jun', value: 19500 },
];

const productData = [
  { name: 'Vidro Temperado', value: 35 },
  { name: 'Espelhos', value: 25 },
  { name: 'Box', value: 20 },
  { name: 'Janelas', value: 15 },
  { name: 'Outros', value: 5 },
];

const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe'];

const recentOrders = [
  { id: 'OS-2025-001', client: 'João Silva', product: 'Box de Vidro', value: 'R$ 1.200,00', status: 'Em produção' },
  { id: 'OS-2025-002', client: 'Maria Oliveira', product: 'Espelho 2m²', value: 'R$ 850,00', status: 'Entregue' },
  { id: 'OS-2025-003', client: 'Carlos Santos', product: 'Janela Temperada', value: 'R$ 1.500,00', status: 'Em aberto' },
  { id: 'OS-2025-004', client: 'Ana Pereira', product: 'Porta de Vidro', value: 'R$ 2.100,00', status: 'Em produção' },
];

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simular carregamento de dados
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Componente de Card de Métrica
  const MetricCard = ({ title, value, icon, trend, trendValue, color, loading }) => {
    const Icon = icon;
    const trendIcon = trend === 'up' ? ArrowUpRight : ArrowDownRight;
    const trendColor = trend === 'up' ? 'text-green-500' : 'text-red-500';
    
    return (
      <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6 hover-lift transition-all">
        {loading ? (
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-glass-200 rounded w-1/3"></div>
            <div className="h-8 bg-glass-200 rounded w-1/2"></div>
            <div className="h-4 bg-glass-200 rounded w-1/4"></div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <span className="text-glass-500 font-medium">{title}</span>
              <div className={`p-2 rounded-lg ${color}`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-glass-800">{value}</h3>
            </div>
            <div className="flex items-center">
              <div className={`flex items-center ${trendColor}`}>
                <trendIcon className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">{trendValue}</span>
              </div>
              <span className="text-glass-500 text-sm ml-2">vs. mês anterior</span>
            </div>
          </>
        )}
      </div>
    );
  };
  
  // Componente de Card de Gráfico
  const ChartCard = ({ title, children, loading }) => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6 hover-lift transition-all h-full">
        {loading ? (
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-glass-200 rounded w-1/3"></div>
            <div className="h-64 bg-glass-200 rounded w-full"></div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium text-glass-700">{title}</h3>
              <button className="text-glass-400 hover:text-glass-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            <div className="h-64">
              {children}
            </div>
          </>
        )}
      </div>
    );
  };
  
  // Componente de Card de Tabela
  const TableCard = ({ title, data, loading }) => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6 hover-lift transition-all">
        {loading ? (
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-glass-200 rounded w-1/3"></div>
            <div className="h-64 bg-glass-200 rounded w-full"></div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium text-glass-700">{title}</h3>
              <button className="text-primary-500 hover:text-primary-600 text-sm font-medium flex items-center">
                Ver todos
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-glass-200">
                    <th className="text-left py-3 px-2 text-glass-500 font-medium text-sm">ID</th>
                    <th className="text-left py-3 px-2 text-glass-500 font-medium text-sm">Cliente</th>
                    <th className="text-left py-3 px-2 text-glass-500 font-medium text-sm">Produto</th>
                    <th className="text-left py-3 px-2 text-glass-500 font-medium text-sm">Valor</th>
                    <th className="text-left py-3 px-2 text-glass-500 font-medium text-sm">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id} className="border-b border-glass-100 hover:bg-glass-50">
                      <td className="py-3 px-2 text-glass-800 font-medium">{item.id}</td>
                      <td className="py-3 px-2 text-glass-600">{item.client}</td>
                      <td className="py-3 px-2 text-glass-600">{item.product}</td>
                      <td className="py-3 px-2 text-glass-800 font-medium">{item.value}</td>
                      <td className="py-3 px-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === 'Entregue' ? 'bg-green-100 text-green-700' :
                          item.status === 'Em produção' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    );
  };
  
  // Componente de Card de Agenda
  const CalendarCard = ({ title, loading }) => {
    const today = new Date();
    const events = [
      { time: '09:00', title: 'Entrega - Cliente João Silva', type: 'delivery' },
      { time: '11:30', title: 'Instalação - Box de Vidro', type: 'installation' },
      { time: '14:00', title: 'Orçamento - Maria Oliveira', type: 'quote' },
      { time: '16:30', title: 'Medição - Carlos Santos', type: 'measurement' },
    ];
    
    return (
      <div className="bg-white rounded-xl shadow-sm border border-glass-100 p-6 hover-lift transition-all h-full">
        {loading ? (
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-glass-200 rounded w-1/3"></div>
            <div className="h-64 bg-glass-200 rounded w-full"></div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium text-glass-700">{title}</h3>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-primary-500" />
                <span className="text-glass-600 text-sm font-medium">
                  {today.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}
                </span>
              </div>
            </div>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-glass-50 transition-all">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="text-glass-800 font-medium">{event.time}</span>
                      <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                        event.type === 'delivery' ? 'bg-green-100 text-green-700' :
                        event.type === 'installation' ? 'bg-blue-100 text-blue-700' :
                        event.type === 'quote' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {event.type === 'delivery' ? 'Entrega' :
                         event.type === 'installation' ? 'Instalação' :
                         event.type === 'quote' ? 'Orçamento' : 'Medição'}
                      </span>
                    </div>
                    <p className="text-glass-600 text-sm mt-1">{event.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-2xl font-bold text-glass-800">Dashboard</h1>
        <p className="text-glass-600">Bem-vindo ao seu painel de controle</p>
      </div>
      
      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Faturamento Mensal" 
          value="R$ 19.500,00" 
          icon={DollarSign} 
          trend="up" 
          trendValue="12.5%" 
          color="bg-primary-500"
          loading={loading}
        />
        <MetricCard 
          title="Novos Clientes" 
          value="24" 
          icon={Users} 
          trend="up" 
          trendValue="8.2%" 
          color="bg-blue-500"
          loading={loading}
        />
        <MetricCard 
          title="Orçamentos" 
          value="38" 
          icon={FileText} 
          trend="up" 
          trendValue="5.3%" 
          color="bg-green-500"
          loading={loading}
        />
        <MetricCard 
          title="Produtos em Estoque" 
          value="152" 
          icon={Package} 
          trend="down" 
          trendValue="3.1%" 
          color="bg-purple-500"
          loading={loading}
        />
      </div>
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Faturamento (Últimos 6 meses)" loading={loading}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis 
                stroke="#94a3b8" 
                tickFormatter={(value) => `R$ ${value.toLocaleString()}`}
              />
              <Tooltip 
                formatter={(value) => [`R$ ${value.toLocaleString()}`, 'Faturamento']}
                labelFormatter={(label) => `Mês: ${label}`}
                contentStyle={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#3b82f6" 
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
        
        <ChartCard title="Vendas por Produto" loading={loading}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={productData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {productData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Porcentagem']}
                contentStyle={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      
      {/* Tabela e Agenda */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TableCard 
            title="Ordens de Serviço Recentes" 
            data={recentOrders}
            loading={loading}
          />
        </div>
        <div>
          <CalendarCard 
            title="Agenda de Hoje" 
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

