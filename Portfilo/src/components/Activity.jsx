import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TCPC,codeherway,shesolves, wintercup,} from '../assets'
import {Reveal} from '../utils'

const Activity = () => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const [isInView, setIsInView] = useInView({ once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start('visible');
      mainControls.start('visible');
    } else {
      slideControls.start('hidden');
      mainControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div id='Activity' className='scroll-mt-20 max-w-6xl mx-auto gap-20 mb-10 grid'>
        <div className=' w-full rounded-t-md p-2'>
        <Reveal>
          <p className='text-2xl md:text-5xl xl:text-6xl text-white font-extrabold mb-5'>Activities<span className='text-main1'>.</span></p>
        </Reveal>
      </div>
        <div className='flex gap-10 '> 
      <div className="col-lg-4 w-50  wow slideInUp w-full aspect-video   rounded-xl bg-opacity-10 backdrop-filter backdrop-blur-lg bg-gray-300" data-wow-delay="0.3s">
        <motion.div ref={ref} initial="hidden" animate={mainControls} className="blog-item bg-light rounded overflow-hidden">
          <motion.div animate={slideControls} className="blog-img position-relative overflow-hidden">
            <img className="manar" src={TCPC} alt="" /><br/>
            <a className="position-absolute  start-0 bg-primary text-main1 rounded-end mt-5 py-2 px-4" href="">
             TCPC
            </a>
          </motion.div>
          <div className="p-4">
            <div className="d-flex mb-3">
              <small className="me-3 text-white">
                <i className="far fa-location-dot fa-solid text-main1 text-primary me-2"></i>Hotel ElMouradi Club Kantaoui, Sousse, Tunisia
              </small>
              <small className="me-3 text-white">
                <i className="far text-main1 fa-calendar-alt text-primary me-2"></i>24&25 June 2023
              </small>
            </div>
            <p className="text-white">The Tunisian Collegiate Programming Contest (TCPC) is a qualifying round for the Arab & Africa Competition</p>
           
          </div>
        </motion.div>
      </div>
      <div className="col-lg-4 wow slideInUp w-full aspect-video relative o rounded-xl bg-opacity-10 backdrop-filter backdrop-blur-lg bg-gray-300" data-wow-delay="0.3s">
        <motion.div ref={ref} initial="hidden" animate={mainControls} className="blog-item bg-light rounded overflow-hidden">
          <motion.div animate={slideControls} className="blog-img position-relative overflow-hidden">
            <img className="manar h-50 overflow-hidden" src={wintercup} alt="" /><br/>
            <a className="position-absolute top-0 start-0 bg-primary text-main1 rounded-end mt-5 py-2 px-4" href="">
              WinterCup
            </a>
          </motion.div>
          <div className="p-4">
            <div className="d-flex mb-3">
              <small className="me-3 text-white">
                <i className="far  fa-location-dot fa-solid text-main1 text-primary me-2"></i>National Institute of Applied Science and Technology (INSAT)
              </small>
              <small className="me-3 text-white">
                <i className="far text-main1 fa-calendar-alt text-primary me-2"></i>19 February 2023
              </small>
            </div>
            <p className="text-white">Advanced Competitive Programming contest Organized by ACM_INSAT</p>
           
          </div>
        </motion.div>
      </div>
      </div>
      <div className='flex  gap-10'>
      <div className="col-lg-4 wow slideInUp w-full aspect-video relative  rounded-xl bg-opacity-10 backdrop-filter backdrop-blur-lg bg-gray-300" data-wow-delay="0.3s">
        <motion.div ref={ref} initial="hidden" animate={mainControls} className="blog-item bg-light rounded overflow-hidden">
          <motion.div animate={slideControls} className="blog-img position-relative overflow-hidden">
            <img className="manar " src={shesolves} alt="" /><br/>
            <a className="position-absolute top-0 start-0 bg-primary text-main1 rounded-end mt-5 py-2 px-4" href="">
              SheSolves
            </a>
          </motion.div>
          <div className="p-4">
            <div className="d-flex mb-3">
              <small className="me-3 text-white">
                <i className="far  fa-location-dot fa-solid text-main1 text-primary me-2"></i>National Institute of Applied Science and Technology (INSAT)
              </small>
              <small className="me-3 text-white">
                <i className="far text-main1 fa-calendar-alt text-primary me-2"></i>15 december 2022
              </small>
            </div>
            <p className="text-white">SheSolves is an event organized by INSAT ACM Student Chapter and IEEE WIE INSAT Student Affinity Group as an opportunity for women to code.</p>
           
          </div>
        </motion.div>
      </div>
      <div className="col-lg-4 wow slideInUp w-full aspect-video relative overflow-hidden rounded-xl bg-opacity-10 backdrop-filter backdrop-blur-lg bg-gray-300" data-wow-delay="0.3s">
        <motion.div ref={ref} initial="hidden" animate={mainControls} className="blog-item bg-light rounded overflow-hidden">
          <motion.div animate={slideControls} className="blog-img position-relative overflow-hidden">
            <img className="manar" src={codeherway} alt="" /><br/>
            <a className="position-absolute top-0 start-0 bg-primary text-main1 rounded-end mt-5 py-2 px-4" href="">
              Code Her Ways
            </a>
          </motion.div>
          <div className="p-4">
            <div className="d-flex mb-3">
              <small className="me-3 text-white">
                <i className="far f fa-location-dot fa-solid text-main1 text-primary me-2"></i> Higher Institute of Computer Science (ISI Ariana)
              </small>
              <small className="me-3 text-white">
                <i className="far text-main1 fa-calendar-alt text-primary me-2"></i>29 April 2023
              </small>
            </div>
            <p className="text-white">competitive programming contest for girls organized by Freeways, IEEE CS Chapter ISI SB and IEEE WIE ISI SB</p>
           
          </div>
        </motion.div>
      </div>
      
      </div>
      {/* Repeat the above structure for the other two columns */}
    </div>
  );
};

export default Activity;
