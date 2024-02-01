import React from 'react';
import './style.css';
import vdo from '../assets/vdo.mp4';
import manar from '../assets/manar.jpg';
import '@fortawesome/fontawesome-free/css/all.css';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'; 
import {leetcode,codeforces} from '../assets'
const Hero = () => {
  return (
    <div id="home"   className='home overflow-x-hidden relative z-0'>
      <video autoPlay loop id="video-background" muted playsInline>
        <source src={vdo} type="video/mp4" />
      </video>
      <div className="home-overlay ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <p><img src={manar} alt="Shubham Pandey" className=" profile-img h-80 w-80" /></p>
              <h1 className="name " style={{fontSize: '60px'}} >Manar Fareh</h1>
              <p className="deg" style={{fontSize: '25px'}} >Full Stack Developer</p>
              <hr /><br/>
              <ul className="sm-screen-links">
                <li><a href="https://www.facebook.com/fareh.manar/" className="sm-links" target="_blank" >
                <FaFacebook size={42} style={{
                      border: '2px solid #fff',
                      color: '#fff',
                      transition: '0.4s',
                      fontSize: '20px',
                      boxShadow: '0px 0px 20px 5px #ffffff69',
                      borderRadius: '50%',
                    }} />
                  </a></li>
                <li><a href="https://www.linkedin.com/in/fareh-manar-a18b7027b/" className="sm-links" target="_blank" style={{}}>
                  <FaLinkedin size={42} style={{
                      border: '2px solid #fff',
                      color: '#fff',
                      transition: '0.4s',
                      fontSize: '20px',
                      boxShadow: '0px 0px 20px 5px #ffffff69',
                      borderRadius: '50%',
                    }} />
                  </a></li>
                <li><a href="https://github.com/manarfareh" className="sm-links" target="_blank">
                  <FaGithub size={42} style={{
                      border: '2px solid #fff',
                      color: '#fff',
                      transition: '0.4s',
                      fontSize: '20px',
                      boxShadow: '0px 0px 20px 5px #ffffff69',
                      borderRadius: '50%',
                    }} />
                  </a></li>
                  <li> <a href="https://codeforces.com/profile/farehmanar" className="sm-links" target="_blank">
                    <img
                      src={codeforces}
                      alt="Codeforces"
                      className="icon-image" 
                      style={{
                        border: '2px solid #fff',
                        color: '#fff',
                        width: '42px',
                        height: '42px',
                        transition: '0.4s',
                        fontSize: '5px',
                        boxShadow: '0px 0px 20px 5px #ffffff69',
                        borderRadius: '50%',
                     }}
                   />
                 </a></li>
                 <li> <a href="https://leetcode.com/farehmanar89/" className="sm-links" target="_blank">
                    <img
                      src={leetcode}
                      size={12}
                      alt="Codeforces"
                      className="icon-image" 
                      style={{
                        width: '42px',
                        height: '42px',
                        border: '2px solid #fff',
                        color: '#fff',
                        transition: '0.4s',
                        fontSize: '1px',
                        boxShadow: '0px 0px 5px 5px #ffffff69',
                        borderRadius: '50%',
                     }}
                   />
                 </a></li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
