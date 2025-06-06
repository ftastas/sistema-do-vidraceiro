import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

// Layout
import DashboardLayout from './components/layout/DashboardLayout';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

// Dashboard Pages
import Dashboard from './pages/dashboard/Dashboard';
import Orcamentos from './pages/dashboard/Orcamentos';
import Financas from './pages/dashboard/Financas';
import OrdensServico from './pages/dashboard/OrdensServico';
import Estoque from './pages/dashboard/Estoque';
import Caixa from './pages/dashboard/Caixa';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      
      {/* Dashboard Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/orcamentos" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Orcamentos />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/financas" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Financas />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/ordens-servico" element={
        <ProtectedRoute>
          <DashboardLayout>
            <OrdensServico />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/estoque" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Estoque />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/caixa" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Caixa />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      {/* Redirect root to dashboard or login */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      
      {/* 404 - Not Found */}
      <Route path="*" element={
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold text-glass-800">404</h1>
          <p className="text-glass-600 mb-4">Página não encontrada</p>
          <a href="/dashboard" className="text-primary-500 hover:text-primary-600">
            Voltar para o Dashboard
          </a>
        </div>
      } />
    </Routes>
  );
}

export default App;

