import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext(null);

export const SidebarProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState('hide');

  const toggleSidebar = () => {
    setSidebar((prev) => (prev === 'hide' ? 'show' : 'hide'));
  };

  return (
    <SidebarContext.Provider value={{ sidebar, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebar must be used inside a SidebarProvider');
  }

  return context;
};
