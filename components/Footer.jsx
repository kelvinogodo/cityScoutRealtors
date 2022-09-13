import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer>
      <div className="foot-container">
        <div className="foot">
          <div className="footer-header">
            <h2>quik links</h2>
            <span className="line"></span>
          </div>
          <Link href='/'>
            home
          </Link>
          <Link href='/service'>
            service
          </Link>
          <Link href='/blog'>
            blog
          </Link>
          <Link href='/contact'>
            contact
          </Link>
        </div>
        <div className="foot">
          <div className="footer-header">
            <h2>patners</h2>
            <span className="line"></span>
          </div>
          <p>tansian geospatial consult</p>
          <p>beloved architectural concept</p>
          <p>ebonyi real-estate org</p>
        </div>
        <div className="foot">
          <div className="footer-header">
            <h2>social platforms</h2>
            <span className="line"></span>
          </div>
          <Link href='/'>
            facebook
          </Link>
          <Link href='/'>
            whatsApp
          </Link>
          <Link href='/'>
            twitter
          </Link>
          <Link href='/'>
            email
          </Link>
        </div>
        <div className="foot">
          <div className="footer-header">
            <h2>newsletter</h2>
            <span className="line"></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, provident quas deserunt fuga voluptatem repellat.
          </p>
        </div>
      </div>   
    </footer>
  )
}

export default Footer