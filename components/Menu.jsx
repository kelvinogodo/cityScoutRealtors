import React from 'react'
import Link from 'next/link'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'
import {FaBlog} from 'react-icons/fa'
import {GoSettings} from 'react-icons/go'
import {MdOutlineContactPage} from 'react-icons/md'
import {VscQuestion} from 'react-icons/vsc'
const Menu = ({links,showMenu}) => {
  const switchIcon = (key)=> {
    switch(key){
    case 'home' :
    return(
      <AiOutlineHome />
    )
    break;
    case 'about' :
    return(
      <VscQuestion />
    )
    break;
    case 'service' :
    return(
      <GoSettings />
    )
    break;
    case 'contact' :
    return(
      <MdOutlineContactPage />
    )
    break;
    case 'blog' :
    return(
      <FaBlog />
    )
    break;
    default : ''
    break;
  }}
  return (
    <>
        <aside className={`menu-bar ${showMenu && 'grow'} `}>
            {links.map ((link,index) =>(
              <div className='menu-link-container' key={index}>
                {switchIcon(link)}
                <Link href={link == 'home' ? '/' : `/${link}`} key={index}>{link}</Link>
                <MdKeyboardArrowRight />
              </div>
            ))}
        </aside>
        
    </>
  )
}

export default Menu