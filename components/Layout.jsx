import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import { useState } from 'react'
const Layout = ({children}) => {
  const [showMenu,setShowMenu] = useState(false)
  const toggleMenu = ()=>{
    setShowMenu(!showMenu)
  }
  const Links = ['home','service','about','contact','blog']
  return (
    <>
        <Header toggleMenu={toggleMenu}/>
        <Menu links={Links} showMenu={showMenu}/>
        {children}
        <Footer /> 
    </>
  )
}

export default Layout