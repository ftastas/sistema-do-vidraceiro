import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Eye, EyeOff, Mail, Lock, BarChart3 } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    const result = await login(email, password);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };
  
  const fillDemoCredentials = () => {
    setEmail('admin@vidracaria.com');
    setPassword('senha123');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-glass-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo e Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-4 shadow-lg">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-glass-800">Vidraçaria Pro</h1>
          <p className="text-glass-600 mt-2">Sistema de Gerenciamento Profissional</p>
        </div>
        
        {/* Card de Login */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 animate-scale-in">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-glass-800 mb-2">Entrar</h2>
            <p className="text-glass-600">Acesse sua conta para continuar</p>
          </div>
          
          {/* Demo Credentials */}
          <div className="mb-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
            <p className="text-sm text-primary-700 mb-2">
              <strong>Credenciais de demonstração:</strong>
            </p>
            <p className="text-xs text-primary-600 mb-2">
              Email: admin@vidracaria.com<br />
              Senha: senha123
            </p>
            <button
              type="button"
              onClick={fillDemoCredentials}
              className="text-xs text-primary-500 hover:text-primary-600 underline"
            >
              Preencher automaticamente
            </button>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-glass-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-glass-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-glass-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>
            
            {/* Senha */}
            <div>
              <label className="block text-sm font-medium text-glass-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-glass-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-glass-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Sua senha"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-glass-400 hover:text-glass-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            {/* Lembrar e Esqueci a senha */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-glass-300 text-primary-500 focus:ring-primary-500" />
                <span className="ml-2 text-sm text-glass-600">Lembrar de mim</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-primary-500 hover:text-primary-600">
                Esqueci a senha
              </Link>
            </div>
            
            {/* Botão de Login */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover-lift"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                  Entrando...
                </div>
              ) : (
                'Entrar'
              )}
            </button>
          </form>
          
          {/* Link para Registro */}
          <div className="mt-6 text-center">
            <p className="text-glass-600">
              Não tem uma conta?{' '}
              <Link to="/register" className="text-primary-500 hover:text-primary-600 font-medium">
                Criar conta
              </Link>
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-8 text-glass-500 text-sm">
          <p>&copy; 2025 Vidraçaria Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

