import React from 'react'
import {Aboutjson, Hero,Activity} from '../components'
import {Skills, Contact, Projects} from '../containers'

const Body = ({mainColor, setMainColor}) => {
  
  return (
    <>
      <Hero 
        mainColor={mainColor}
        setMainColor={setMainColor}
      />
      <Aboutjson
        mainColor={mainColor}
      />
      <Skills 
        mainColor={mainColor}
      />
      <Projects
        mainColor={mainColor}
      />
      <Activity 
        mainColor={mainColor}
        setMainColor={setMainColor}
      />
      <Contact 
        mainColor={mainColor}
      />
    </>
    )
}

export default Body