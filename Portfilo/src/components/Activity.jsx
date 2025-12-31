import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TCPC, codeherway, shesolves, wintercup } from '../assets';
import { Reveal } from '../utils';

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

  // Activity data
  const activities = [
    {
      img: TCPC,
      title: 'TCPC',
      location: 'Hotel ElMouradi Club Kantaoui, Sousse, Tunisia',
      date: '24 & 25 June 2023',
      description: 'The Tunisian Collegiate Programming Contest (TCPC) is a qualifying round for the Arab & Africa Competition',
    },
    {
      img: wintercup,
      title: 'WinterCup',
      location: 'National Institute of Applied Science and Technology (INSAT)',
      date: '19 February 2023',
      description: 'Advanced Competitive Programming contest Organized by ACM_INSAT',
    },
    {
      img: shesolves,
      title: 'SheSolves',
      location: 'National Institute of Applied Science and Technology (INSAT)',
      date: '15 December 2022',
      description: 'SheSolves is an event organized by INSAT ACM Student Chapter and IEEE WIE INSAT Student Affinity Group as an opportunity for women to code.',
    },
    {
      img: codeherway,
      title: 'Code Her Ways',
      location: 'Higher Institute of Computer Science (ISI Ariana)',
      date: '29 April 2023',
      description: 'Competitive programming contest for girls organized by Freeways, IEEE CS Chapter ISI SB and IEEE WIE ISI SB',
    },
  ];

  return (
    <div id="Activity" className="scroll-mt-20 max-w-6xl mx-auto mb-10">
      <div className="w-full rounded-t-md p-2">
        <Reveal>
          <p className="text-2xl md:text-5xl xl:text-6xl text-white font-extrabold mb-5">
            Activities<span className="text-main1">.</span>
          </p>
        </Reveal>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial="hidden"
            animate={mainControls}
            className="w-full sm:w-[48%] lg:w-[45%] xl:w-[30%] bg-gray-300 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg"
          >
            <motion.div animate={slideControls} className="relative overflow-hidden">
              <img
                src={activity.img}
                alt={activity.title}
                className="w-full h-48 sm:h-56 md:h-48 lg:h-56 xl:h-60 object-cover"
              />
              <a className="absolute top-4 left-4 bg-primary text-main1 rounded-xl py-1 px-3" href="">
                {activity.title}
              </a>
            </motion.div>

            <div className="p-4">
              <div className="flex flex-col sm:flex-row sm:justify-between mb-3 gap-2 sm:gap-0">
                <small className="text-white flex items-center gap-1">
                  <i className="far fa-location-dot text-main1"></i>
                  {activity.location}
                </small>
                <small className="text-white flex items-center gap-1">
                  <i className="far fa-calendar-alt text-main1"></i>
                  {activity.date}
                </small>
              </div>
              <p className="text-white">{activity.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
