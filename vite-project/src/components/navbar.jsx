import React from 'react';
import "./navbar.css";
import logo from '../assets/Viworktech-logos/Viwork-tech-logo-purple-removebg-preview.png';
import { Link } from 'react-router-dom';


export default function Navbar() {

  return (
      <div className='Nav-bar'>

        <div className='Navbar-Section-Left'>
          <img src={logo} className='Viworktech-logo' />
          <p className='Viworktech-Name'>ViWork Tech</p>
        </div>

        <div className='Navbar-Section-Middle'>
          <Link to="/Home" className='Link-container'>Home</Link>
          <Link to="vite-project/src/pages/AboutUs.jsx" className='Link-container'>About Us</Link>
          <Link to="/ContactUs" className='Link-container'>Contact</Link>
          <Link to="/Feature" className='Link-container'>Feature</Link>
        </div>

        <div className='Navbar-Section-Right'>
          <Link to="/ContactUs">
            <button className='Contact-Us-btn'>Contact Us</button>
          </ Link>
        </div>


      </div>
  );
}