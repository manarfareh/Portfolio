import React, { useEffect, useRef } from 'react';
import { AiFillMail } from 'react-icons/ai';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Reveal } from '../utils';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import these icons



const endVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
};

const Contact = () => {
  const mainControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  return (
    <section id="contact" className="contact">
      <div className="contact-overlap">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="contact-form-box">
                <h4>Say Hi</h4>
                <form action="" method="post">
                  <input placeholder="Name" type="text" name="name"  required />
                  <input
                    placeholder="Email address"
                    name="email"
                    type="email"
                    onBlur={(e) => e.target.setAttribute('value', e.target.value)}
                    required
                  />
                  <input placeholder="Mobile" type="tel" name="phone"  pattern="[0-9]{10}" required />
                  <div className="flex">
                    <textarea placeholder="Message" name="message" rows="1" required></textarea>
                  </div>
                  <button className='text-main1'
                    style={{
                      fontFamily: 'Kaushan Script, cursive',
                      cursor: 'pointer',
                      marginTop: '25px',
                      fontWeight: 500,
                      letterSpacing: '1px',
                      fontSize: '16px',
                      marginLeft: '200px'
                    }}
                    id="aaa"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="contact-details-box">
                <h2>Manar Fareh</h2>
                <p className="details">
                  <i className="fa fa-phone"></i> +1 438 454 2272
                </p>
                <div className="max-w-4xl mx-auto text-white font-light">
                  <motion.div
                    ref={ref}
                    variants={endVariant}
                    initial="hidden"
                    animate={mainControls}
                    className="flex flex-col justify-center w-full gap-3 font-[350px]"
                  >
                    <Reveal>
                      <a href="mailto:vikrampalani0107@gmail.com">
                        <div className="flex items-center justify-center w-fit m-auto text-main1 hover:text-white gap-2 text-xl">
                          <AiFillMail size="2.4rem" />
                          <p>farehmanar89@gmail.com</p>
                        </div>
                      </a>
                    </Reveal>
                  </motion.div>
                  <p className="social-icon flex">
                  <span >
                   <a href="https://www.facebook.com/fareh.manar/" className="sm-links" target="_blank" ><FaFacebook size={32}/></a>
                  </span>
                  <span >
                  <a href="https://www.linkedin.com/in/fareh-manar-a18b7027b/" className="sm-links" target="_blank" ><FaLinkedin size={32}/></a>
                  </span>
                  <span >
                  <a href="https://github.com/manarfareh" className="sm-links" target="_blank" ><FaGithub size={32}/></a>
                  </span>
                </p>
                <div style={{ borderTop: '1px dashed #ddd', width: '250px' }}></div>
                <p className='text-sm font-extralight text-white '>Developed with 💛 by <span className='text-yellow-300'>Manar</span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
