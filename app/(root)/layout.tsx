
import { NavBar } from '@/components/NavBar'
import React from 'react'

const Layout = ({children} : Readonly < {children : React.ReactNode}>) => {
  return (
    <main className='container mx-auto px-4'>
      <NavBar/>
      {children}
    </main>
  )
}

export default Layout