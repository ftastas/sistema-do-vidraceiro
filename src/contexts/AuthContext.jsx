import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Dados de demonstração
  const demoUser = {
    id: '1',
    name: 'Administrador',
    email: 'admin@vidracaria.com',
    role: 'admin',
    avatar: null,
    company: 'Vidraçaria Profissional',
  };

  useEffect(() => {
    // Simular verificação de autenticação
    const checkAuth = () => {
      const savedUser = localStorage.getItem('vidracaria_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      setLoading(false);
    };

    // Simular delay de carregamento
    setTimeout(checkAuth, 1000);
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      
      // Simular autenticação
      if (email === 'admin@vidracaria.com' && password === 'senha123') {
        setUser(demoUser);
        localStorage.setItem('vidracaria_user', JSON.stringify(demoUser));
        return { success: true };
      } else {
        throw new Error('Credenciais inválidas');
      }
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setLoading(true);
      
      // Simular registro
      const newUser = {
        ...demoUser,
        name: userData.name,
        email: userData.email,
      };
      
      setUser(newUser);
      localStorage.setItem('vidracaria_user', JSON.stringify(newUser));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('vidracaria_user');
  };

  const forgotPassword = async (email) => {
    try {
      setLoading(true);
      
      // Simular envio de email
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return { success: true, message: 'Email de recuperação enviado!' };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    forgotPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

