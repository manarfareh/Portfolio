import React, {useState} from 'react'
import {navLinks} from '../constants'
import {AnimatePresence, motion} from 'framer-motion'
import {close, menu} from '../assets'
const pathVariants = {
  hidden : {
    opacity : 0,
    pathLength : 0
  },
  visible : {
    opacity : 1,
    pathLength : 1,
    transition : {
      duration : 1.5,
      ease : 'easeInOut'
    }
  }
}

const meuVariants = {
  hidden : {
    opacity : 0,
    x:'50vw'
  },
  visible : {
    opacity : 1,
    x:0,
    transition : {
      duration : 0.2,
      ease : 'linear'
    }
  },
  exit : {
    opacity : 0,
    x:'50vw'
  }
}


const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className="w-screen fixed z-30 navbar  px-2 py-4">
      <div className="max-w-4xl mx-auto  ">
        <div className="flex items-center justify-between">

          <div className="hidden md:block">
            <ul className='list-none hidden sm:flex flex-row space-x-10  ml-40 text-2xl font-light overflow-hidden px-auto'>
              {navLinks.map((link) => (
                <motion.li 
                  key={link.id} 
                  initial={{ y: 70 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className='inline-block'
                >
                  <a href={`#${link.id}`} className='hover:text-main1 text-white'>{link.title}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          {/* mobile nav bar menu */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle) } />
          <AnimatePresence>
            {toggle && (
              <motion.div 
              variants={meuVariants} 
              initial='hidden' 
              exit='exit'
              animate={toggle ? 'visible' : 'hidden'}
              className='flex p-6 black-gradient absolute top-20 right-0 mx-2 my-2 min-w-[140px] z-50 rounded-lg bg-black text-main1'
              >
                <ul className='list-none flex justify-end items-start flex-col gap-4'>
                  {navLinks.map((link) => (
                    <li key={link.id} className='hover:text-white text-xl font-extralight cursor-pointer' onClick = {() => { 
                      setToggle(!toggle)
                      }}>
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar