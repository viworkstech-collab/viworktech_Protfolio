import React, { useState } from 'react';
import "./navbar.css";
import logo from '../assets/Viworktech-logos/Viwork-tech-logo-purple-removebg-preview.png';
import { Link } from 'react-router-dom';
import menuIcon from '../assets/Viworktech-logos/menu.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='Nav-bar'>

        <div className='Navbar-Section-Left'>
          <img src={logo} className='Viworktech-logo' />
          <p className='Viworktech-Name'>ViWork Tech</p>
        </div>

      <div className='Navbar-Section-Middle'>
          <div className='desktop-links'>
            <Link to="/Home" className='Link-container'>Home</Link>
            <Link to="vite-project/src/pages/AboutUs.jsx" className='Link-container'>About Us</Link>
            <Link to="/ContactUs" className='Link-container'>Contact</Link>
            <Link to="/Feature" className='Link-container'>Feature</Link>
            </div>
          
        

        <div className='mobile-menu'>
          <img src={menuIcon} className='menu-icon' onClick={toggleMenu}  />
          {isMenuOpen && (
            <div className='dropdown-menu'>
              <Link to="/Home" className='Link-container' onClick={toggleMenu}>Home</Link>
              <Link to="vite-project/src/pages/AboutUs.jsx" className='Link-container' onClick={toggleMenu}>About Us</Link>
              <Link to="/ContactUs" className='Link-container' onClick={toggleMenu}>Contact</Link>
              <Link to="/Feature" className='Link-container' onClick={toggleMenu}>Feature</Link>
              <Link to="/ContactUs" onClick={toggleMenu}>
                <button className='Contact-Us-btn'>Contact Us</button>
              </Link>
            </div>
          )}
        </div>
      </div>

        <div className='Navbar-Section-Right'>
          <Link to="/ContactUs">
            <button className='Contact-Us-btn'>Contact Us</button>
          </ Link>
        </div>


    </div>
  );
}