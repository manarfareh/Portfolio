import React from 'react'
import { Hero,Activity} from '../components'
import {Skills, Contact, Projects} from '../containers'

const Body = ({mainColor, setMainColor}) => {
  
  return (
    <>
      <Hero 
        mainColor={mainColor}
        setMainColor={setMainColor}
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