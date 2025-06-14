
import { NavBar } from '@/components/NavBar'
import React from 'react'

const Layout = ({children} : Readonly < {children : React.ReactNode}>) => {
  return (
    <main className=''>
        <NavBar/>
      {children}
    </main>
  )
}

export default Layout