import React from 'react'
import Link from 'next/link'
const Menu = ({links,showMenu}) => {
  return (
    <>
        
        <aside className={`menu-bar ${showMenu && 'grow'} `}>
            {links.map ((link,index) =>(
                <Link href={link == 'home' ? '/' : `${link}`} key={index}>{link}</Link>
            ))}
        </aside>
        
    </>
  )
}

export default Menu