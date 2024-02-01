import React from 'react'
import {BallCanvas} from '../components/canvas'
import {technologiesframeworks,Test, database, versioncontrolsystem,language} from '../constants'
import {Reveal} from '../utils'

const UpdatedBallCanvas = ({ icon }) => {
  return (
    <div
      style={{ backgroundColor: 'transparent' }}
      className='w-28 h-28 md:w-1/5 md:h-max rounded-full bg-main1 flex items-center justify-center'
    >
      {icon}
    </div>
  );
};

const Skills = () => {
  return (
    <div id='Skills' className='scroll-mt-20 max-w-4xl mx-auto my-20 px-5'>

      <Reveal>
        
        <p className='text-2xl md:text-5xl xl:text-6xl text-white font-extrabold mb-3'>Skills<span className='text-main1'>.</span></p>
        <br/>
      </Reveal>

      <div className='xl:mt-2'>
        <Reveal>
          <p className='text-base sm:text-xl lg:text-2xl text-white font-light'>Programming Languages :</p>
        </Reveal>
        <div className='flex flex-row  flex-wrap justify-center gap-5 sm:gap-0'>
          {language.map((technology) => (
            <div className='w-28 h-28 md:w-1/5 md:h-max' key={technology.name}>
              <BallCanvas icon={technology.icon} />
              <p className='text-xs mt-0 text-center text-white'>{technology.name}</p><br/><br/>
            </div>
            ))}
        </div>
      </div>

      <div className='xl:mt-2'>
        <Reveal>
          <p className='text-base sm:text-xl lg:text-2xl text-white font-light '>Technologies And Frameworks : </p>
        </Reveal>
        <div className='flex flex-row flex-wrap justify-center gap-5 sm:gap-0'>
        {technologiesframeworks.map((technology) => (
          <div className='w-28 h-28 md:w-1/6 md:h-max' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className='text-xs mt-0 text-center text-white'>{technology.name}</p><br/>
          </div>
        ))}
      </div>
      </div>

      <div className='xl:mt-2'>
        <Reveal>
          <p className='text-base sm:text-xl lg:text-2xl text-white font-light '>Database :</p>
        </Reveal>
        <div className='flex flex-row flex-wrap justify-center gap-5 sm:gap-0'>
        {database.map((technology) => (
          <div className='w-28 h-28 md:w-1/6 md:h-max' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className='text-xs mt-0 text-center text-white'>{technology.name}</p><br/>
          </div>
        ))}
      </div>
      </div>

      <div className='xl:mt-2'>
        <Reveal>
          <p className='text-base sm:text-xl lg:text-2xl text-white font-light '>Testing Tools :</p>
        </Reveal>
        <div className='flex flex-row flex-wrap justify-center gap-5 sm:gap-0'>
        {Test.map((technology) => (
          <div className='w-28 h-28 md:w-1/6 md:h-max' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className='text-xs mt-0 text-center text-white'>{technology.name}</p><br/>
          </div>
        ))}
      </div>
      </div>

      <div className='xl:mt-2'>
        <Reveal>
          <p className='text-base sm:text-xl lg:text-2xl text-white font-light '>Version Control System : </p>
        </Reveal>
        <div className='flex flex-row flex-wrap justify-center gap-5 sm:gap-0'>
        {versioncontrolsystem.map((technology) => (
          <div className='w-28 h-28 md:w-1/6 md:h-max' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className='text-xs mt-0 text-center text-white'>{technology.name}</p><br/>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Skills