import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsCollapsed(true);
        setShowMobileSidebar(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-glass-50 via-white to-glass-100">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      )}
      
      {/* Mobile Sidebar */}
      {isMobile && (
        <>
          {/* Overlay */}
          {showMobileSidebar && (
            <div 
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setShowMobileSidebar(false)}
            />
          )}
          
          {/* Mobile Sidebar */}
          <div className={`
            fixed left-0 top-0 h-full z-50 transform transition-transform duration-300
            ${showMobileSidebar ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <Sidebar 
              isCollapsed={false} 
              setIsCollapsed={() => setShowMobileSidebar(false)} 
            />
          </div>
        </>
      )}
      
      {/* Main Content */}
      <div className={`
        transition-all duration-300 ease-in-out
        ${!isMobile ? (isCollapsed ? 'ml-16' : 'ml-64') : 'ml-0'}
      `}>
        <Header toggleMobileSidebar={toggleMobileSidebar} />
        
        <main className="p-4 md:p-6 animate-fade-in">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

