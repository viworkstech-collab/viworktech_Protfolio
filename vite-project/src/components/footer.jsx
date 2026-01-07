import React from 'react';
import "./footer.css";
import logo from '../assets/Viworktech-logos/Viwork-tech-logo-purple-removebg-preview.png';


export default function Footer() {

  return (
      <>
       <div className='Footer-Container'>

        <div className='Footer-Grid'>

          <div className='Footer-Section1'>

            <div className='Company-Content'>
              <img src={logo} className='Footer-Viworktech-img'></img>
              <h2 className='Footer-Header'>ViWork Tech</h2>
            </div>
            

            <div className='Footer-Brief'>
              <p className='Footer-Brief-Paragraph'>Making workflow automation accessible for everyone, everywhere.</p>
            </div>

            <div className='Social-Media-Handle'>
              <div className='Social-Media-Box'>IN</div>
              <div className='Social-Media-Box'>LI</div>
              <div className='Social-Media-Box'>X</div>
            </div>
          </div>

          <div className='Footer-Section2'>
            
              <h4 className='Header-Product'>Product</h4>
            

            <ul className='Footer-List-Container'>
              <li className='Footer-List-Links'><a href="#">Features</a></li>
              <li className='Footer-List-Links'><a href="#">Pricing</a></li>
              <li className='Footer-List-Links'><a href="#">Integrations</a></li>
              <li className='Footer-List-Links'><a href="#">Changelog</a></li>
            </ul>

          </div>

          <div className='Footer-Section3'>
           
              <h4 className='Header-Product'>Company</h4>
            

            <ul className='Footer-List-Container'>
              <li className='Footer-List-Links'><a href="#">About Us</a></li>
              <li className='Footer-List-Links'><a href="#">Careers</a></li>
              <li className='Footer-List-Links'><a href="#">Blog</a></li>
              <li className='Footer-List-Links'><a href="#">Contact</a></li>
            </ul>

          </div>

          <div className='Footer-Section4'>
              <h4 className='Header-Product'>Legal</h4>
            

            <ul className='Footer-List-Container'>
              <li className='Footer-List-Links'><a href="#">Privacy</a></li>
              <li className='Footer-List-Links'><a href="#">Terms</a></li>
              <li className='Footer-List-Links'><a href="#">Security</a></li>
            </ul>

          </div>



        </div>
         
       </div>
      </>
     
  );
}