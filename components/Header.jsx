import React from 'react'
import headerStyles from '../styles/headerStyle.module.css'
import Link from 'next/link'
const Header = ({toggleMenu}) => {
  return (
    <header className={headerStyles.header}>
        <div className={headerStyles.menu} onClick={toggleMenu}>
            <span className={headerStyles.menuline}>
            </span><span className={headerStyles.menuline}>
            </span><span className={headerStyles.menuline}></span>
        </div>
        <div className={headerStyles.logoContainer}>
            <img src="/logo.png" alt="" className={headerStyles.logo} />
            <p className={headerStyles.logoText}>city scout realtors</p>
        </div>
        <nav className={headerStyles.nav}>
            <ul>
                <li>
                    <Link href='/' className={headerStyles.link}>home</Link>
                </li>
                <li>
                    <Link href='/about' className={headerStyles.link}>about</Link>
                </li>
                <li>
                    <Link href='/service' className={headerStyles.link}>service</Link>
                </li>
            </ul>
        </nav>
        <div className={headerStyles.contactBtnContainer}>
            <Link href='/contact' className={headerStyles.contactBtn} >contact</Link>
        </div>
    </header>
  )
}

export default Header