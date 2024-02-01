import React from 'react';
import { Profilepic } from '../assets';
import { motion } from 'framer-motion';
import { Reveal } from '../utils';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Hero = ({ mainColor, setMainColor }) => {

  let textColor = `text-${mainColor}`;
  let hoverColor = `hover:text-${mainColor}`;
  let borderColor = `border-${mainColor} border-[1px]`;

  return (
    <div id="home" className="home">
      <video autoPlay loop id="video-background" muted playsInline>
        <source src="vdo.mp4" type="video/mp4" />
      </video>
      <div className="home-overlay">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <p><img src="images/shubham.jpg" alt="Shubham Pandey" className="img-responsive profile-img" /></p>
              <h1 className="name">Shubham Pandey</h1>
              <p className="deg">Full Stack Web Developer</p>
              <hr />
              <ul className="sm-screen-links">
                <li><a href="https://www.facebook.com/shubham.pandey.7543653" className="sm-links" target="_blank"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/me_Kautilya" className="sm-links" target="_blank"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/in/shubham-pandey-342759130/" className="sm-links" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://github.com/kautily/" className="sm-links" target="_blank"><i className="fa fa-github"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
