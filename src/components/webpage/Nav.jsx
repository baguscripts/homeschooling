import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const[isMobile, setIsMobile]=useState(false);
  return (
    <nav className='navbar'>
      <h3 className='logo flex-1'>Logo</h3>
      <ul 
      onClick={()=> setIsMobile(false)}
      className={isMobile ? 'nav-links-mobile' : 'nav-links'} >
        <Link to='/' className='home1' >
        <li>Home</li>
        </Link>
        <Link to='/about' className='about' >
        <li>about</li>
        </Link>
        <Link to='/skills' className='skills' >
        <li>skills</li>
        </Link>
        <Link to='/contact' className='contact' >
        <li>contact</li>
        </Link>
        <Link to='/signup' className='signup1' >
        <li>Sign Up</li>
        </Link>
      </ul> 
      <button className='mobile-menu-icon'
      onClick={()=>setIsMobile(!isMobile)}>
        {isMobile ? <i className='fas fa-times'></i> : <i className='fas fas-bar'></i>}
      </button>
    </nav>
  )
}

export default Nav