import React from 'react'

const Container = ({children} : {children : React.ReactNode}) => {
  return (
    <section className='container mx-auto px-4'>
        {children}
    </section>
  )
}

export default Container