import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Search, 
  Bell, 
  User, 
  ChevronDown, 
  LogOut, 
  Settings,
  Menu,
  X
} from 'lucide-react';

const Header = ({ toggleMobileSidebar }) => {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const notifications = [
    {
      id: 1,
      title: 'Novo orçamento',
      message: 'Cliente João Silva solicitou um orçamento',
      time: '5 min atrás',
      read: false,
    },
    {
      id: 2,
      title: 'Estoque baixo',
      message: 'Vidro temperado 10mm está com estoque baixo',
      time: '1 hora atrás',
      read: false,
    },
    {
      id: 3,
      title: 'Pagamento recebido',
      message: 'Pagamento de R$ 1.500,00 confirmado',
      time: '3 horas atrás',
      read: true,
    },
  ];
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Pesquisando por:', searchQuery);
  };
  
  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };
  
  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-glass-200 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileSidebar}
          className="p-2 rounded-lg text-glass-500 hover:bg-glass-100 md:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md">
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-glass-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Pesquisar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-glass-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-glass-50"
              />
            </div>
          </form>
        </div>
        
        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-full hover:bg-glass-100 relative"
            >
              <Bell className="w-5 h-5 text-glass-600" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>
            
            {/* Notifications dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-glass-200 z-50 animate-scale-in origin-top-right">
                <div className="p-3 border-b border-glass-200">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Notificações</h3>
                    <button className="text-xs text-primary-500 hover:text-primary-600">
                      Marcar todas como lidas
                    </button>
                  </div>
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id}
                      className={`p-3 border-b border-glass-100 hover:bg-glass-50 cursor-pointer ${
                        !notification.read ? 'bg-primary-50' : ''
                      }`}
                    >
                      <div className="flex items-start">
                        <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                          !notification.read ? 'bg-primary-500' : 'bg-glass-300'
                        }`} />
                        <div className="ml-3">
                          <p className="font-medium text-sm">{notification.title}</p>
                          <p className="text-glass-600 text-xs mt-1">{notification.message}</p>
                          <p className="text-glass-400 text-xs mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-3 border-t border-glass-200">
                  <button className="w-full text-center text-primary-500 text-sm hover:text-primary-600">
                    Ver todas
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* User menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 p-1 rounded-full hover:bg-glass-100"
            >
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-medium">
                {user?.name?.charAt(0) || 'A'}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium">{user?.name || 'Administrador'}</p>
                <p className="text-xs text-glass-500">{user?.email || 'admin@vidracaria.com'}</p>
              </div>
              <ChevronDown className="w-4 h-4 text-glass-400 hidden md:block" />
            </button>
            
            {/* User dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-glass-200 z-50 animate-scale-in origin-top-right">
                <div className="p-3 border-b border-glass-200">
                  <p className="font-medium text-sm">{user?.name || 'Administrador'}</p>
                  <p className="text-glass-500 text-xs">{user?.email || 'admin@vidracaria.com'}</p>
                </div>
                
                <div className="p-1">
                  <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-glass-50 text-left">
                    <User className="w-4 h-4 text-glass-500" />
                    <span className="text-sm">Perfil</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-glass-50 text-left">
                    <Settings className="w-4 h-4 text-glass-500" />
                    <span className="text-sm">Configurações</span>
                  </button>
                  
                  <button 
                    onClick={handleLogout}
                    className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-red-50 text-left"
                  >
                    <LogOut className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-red-500">Sair</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile search */}
      <div className="md:hidden px-4 pb-3">
        <form onSubmit={handleSearch} className="w-full">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-glass-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Pesquisar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-glass-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-glass-50"
            />
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;

