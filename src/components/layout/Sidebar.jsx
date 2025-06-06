import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  DollarSign, 
  ClipboardList, 
  Package, 
  Calculator,
  Settings,
  ChevronLeft,
  ChevronRight,
  BarChart3
} from 'lucide-react';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  
  const menuItems = [
    { 
      icon: Home, 
      label: 'Dashboard', 
      path: '/dashboard',
      color: 'text-primary-500'
    },
    { 
      icon: FileText, 
      label: 'Orçamentos', 
      path: '/dashboard/orcamentos',
      color: 'text-blue-500'
    },
    { 
      icon: DollarSign, 
      label: 'Finanças', 
      path: '/dashboard/financas',
      color: 'text-green-500'
    },
    { 
      icon: ClipboardList, 
      label: 'Ordem de Serviços', 
      path: '/dashboard/ordens-servico',
      color: 'text-orange-500'
    },
    { 
      icon: Package, 
      label: 'Estoque', 
      path: '/dashboard/estoque',
      color: 'text-purple-500'
    },
    { 
      icon: Calculator, 
      label: 'Caixa', 
      path: '/dashboard/caixa',
      color: 'text-emerald-500'
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`
      fixed left-0 top-0 h-full bg-gradient-to-b from-glass-900 via-glass-800 to-glass-900
      border-r border-glass-700/50 backdrop-blur-xl
      transition-all duration-300 ease-in-out z-50
      ${isCollapsed ? 'w-16' : 'w-64'}
      shadow-2xl shadow-black/20
    `}>
      {/* Header da Sidebar */}
      <div className="flex items-center justify-between p-4 border-b border-glass-700/50">
        {!isCollapsed && (
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">Vidraçaria</h1>
              <p className="text-glass-400 text-xs">Sistema Pro</p>
            </div>
          </div>
        )}
        
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg bg-glass-800/50 hover:bg-glass-700/50 
                     text-glass-400 hover:text-white transition-all duration-200
                     hover-lift"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                group flex items-center space-x-3 p-3 rounded-xl
                transition-all duration-200 hover-lift
                animate-slide-in-left
                ${active 
                  ? 'bg-gradient-to-r from-primary-500/20 to-primary-600/10 border border-primary-500/30 text-primary-400' 
                  : 'hover:bg-glass-800/50 text-glass-400 hover:text-white'
                }
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`
                p-2 rounded-lg transition-all duration-200
                ${active 
                  ? 'bg-primary-500/20 text-primary-400' 
                  : 'bg-glass-800/30 group-hover:bg-glass-700/50'
                }
              `}>
                <Icon className={`w-5 h-5 ${active ? item.color : ''}`} />
              </div>
              
              {!isCollapsed && (
                <span className="font-medium whitespace-nowrap">
                  {item.label}
                </span>
              )}
              
              {active && (
                <div className="ml-auto w-2 h-2 bg-primary-500 rounded-full animate-glow" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="absolute bottom-4 left-4 right-4 animate-fade-in">
          <Link
            to="/dashboard/configuracoes"
            className="flex items-center space-x-3 p-3 rounded-xl
                       text-glass-400 hover:text-white hover:bg-glass-800/50
                       transition-all duration-200 hover-lift"
          >
            <div className="p-2 rounded-lg bg-glass-800/30">
              <Settings className="w-5 h-5" />
            </div>
            <span className="font-medium">Configurações</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

