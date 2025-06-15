import React from 'react'
import { NavBar } from '@/components/NavBar'
import { LiveProviderWrapper } from '@/components/LiveProviderWrapper'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <NavBar />
      <LiveProviderWrapper>
        {children}
      </LiveProviderWrapper>
    </main>
  );
};

export default Layout;
