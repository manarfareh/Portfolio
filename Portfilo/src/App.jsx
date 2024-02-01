import React, {useState} from 'react'
import {Navbar, Body} from './containers'

const App = () => {
  const [mainColor , setMainColor] = useState('main1')
  return (
    <>
     
      <div className='overflow-x-hidden relative z-0'>
    
        <div className='overflow-x-hidden z-0 relative bg-bgdark'>
        <Navbar 
          mainColor={mainColor}
        />
          <Body
            mainColor={mainColor}
            setMainColor={setMainColor}
          />
        </div>
      </div>
    </>

  )
}

export default App