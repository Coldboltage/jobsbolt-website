import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>


  )
}

export default MainLayout