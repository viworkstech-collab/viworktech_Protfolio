import React from 'react'; 
import "./Home.css";
import Image from "../assets/Viworktech-logos/home3d.jpg";
import Button from "../components/Button";



function Home() {
  return (
    <div>

      <div className="hom">
        <div className="homleft">
          <div className="tagline">VIWORK TECH..</div>
          <h1>
            <b>Build Smarter</b> <br />
            <span><b>With Viwork Tech</b></span>
          </h1>
          <p>
            A modern SaaS platform designed to help teams
            streamline workflows and improve productivity.<br></br>
            Viwork Tech is a SaaS platform focused on building
            scalable and user-friendly digital solutions for businesses.
          </p><br></br>
          <Button text="Get in touch!" />
        </div>
        <div className="homright">
          <img src={Image} alt="3d" />
        </div>
        
      </div>




      <div className="services">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">Web Development</div>
          <div className="card">SaaS Platforms</div>
          <div className="card">UI/UX Design</div>
        </div>  
      </div>
    
{/* About */}

      <div className="contact">
        <h2>Contact Us</h2>
        <p>Let’s build something amazing together with ViworkTech.</p><br></br>
        <Button  text="Contact" />
      </div>


    </div>
  );
}

export default Home;