import React from 'react'
import { NavBar } from '@/components/NavBar'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <NavBar />
      <>
        {children}
      </>
    </main>
  );
};

export default Layout;
