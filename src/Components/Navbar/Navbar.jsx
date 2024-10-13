import React from 'react'
import NavbarCSs from '../Navbar/Navbar.css'

const Navbar = () => {
  return (
      <nav className='header'>
        <div className="header-container">
        <div className="logo-navbar">
          <h2> FOODIED</h2>
        </div>
        <div className="list-item-navbar">
            <ul>
              <li className='link'><a href="">Home</a></li>
              <li className='link'><a href="">Menu</a></li>
              <li className='link'><a href="">About Us</a></li>
              <li className='link'><a href="">Contact</a></li>
            </ul>
        </div>
          <div className="navbar-icon">
            <div className="search-icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="mail-icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
          </div>
        
        <div className="button-signup-navbar">
            Sign Up
        </div>
        </div>
      </nav>
  )
}

export default Navbar