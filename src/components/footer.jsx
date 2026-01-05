import React from 'react';
import logo from '../assets/Viworktech-logos/Viwork-tech-logo-purple-removebg-preview.png';
import "./footer.css";


export default function Footer() {

  return (
      <div className='Footer-Container'>
        <div className='Footer-Content-Container'>
          <div className='Footer-Section-1'>
              <div className='Company-Content'>
                <img src={logo} className='Viworktech-logo-footer' />
                <h2 className='Company-Name-Footer'>Viwork Tech</h2>
              </div>

              <div className='Company-brief-container'>
                <p className='Company-brief'>
                  Making workflow automation accessible for everyone, everywhere.
                </p>
              </div>
            
             <div className='Footer-SocialMedia-Content'>
               <div className='Social-Media-Box'>IN</div>
               <div className='Social-Media-Box'>LI</div>
               <div className='Social-Media-Box'>X</div>
             </div>
          </div>

          <div className='Footer-Section-2'>
            <div className='Section-2-content'>
              <h4 className='Title'>Product</h4>
              <ul className='Product-Links'>
                <li className='Product-Link'><a href="#">Features</a></li>
                <li className='Product-Link'><a href="#">Pricing</a></li>
                <li className='Product-Link'><a href="#">Integrations</a></li>
                <li className='Product-Link'><a href="#">Chanellog</a></li>
              </ul>
            </div>
            
          </div>
          
          <div className='Footer-Section-3'>
            <div className='Section-3-content'>
              <h4 className='Title'>Company</h4>
              <ul className='Company-Links'>
                <li className='Company-Link'><a href="#">About Us</a></li>
                <li className='Company-Link'><a href="#">Careers</a></li>
                <li className='Company-Link'><a href="#">Blog</a></li>
                <li className='Company-Link'><a href="#">Contact</a></li>
              </ul>
              
            </div>
            
          </div>

          <div className='Footer-Section-4'>
            <div className='Section-4-content'>
              <h4 className='Title'>Legal</h4>
              <ul className='Legal-Links'>
                <li className='Legal-Link'><a href="#">Privacy</a></li>
                <li className='Legal-Link'><a href="#">Terms</a></li>
                <li className='Legal-Link'><a href="#">Security</a></li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
  );
}