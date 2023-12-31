import React, { useState } from 'react'
import './Navbar.scss'
import {HiMenuAlt4,HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import pdf from '../../assets/Resume.pdf'

// import {images} from '../../constants'
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src="https://images.cooltext.com/5665493.png" alt="logo" />
        </div>

        <ul className='app__navbar-links'>
            {['home','about','work','skills','testimonial','contact'].map((item)=>{
                return <li className='app__flex p-text' key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            })}
            <li className='app__flex p-text' key="cv">
                    <div />
                    <a href={pdf} className="btn btn-cv" download>Download CV</a>
                </li>
        </ul>

        <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={()=>{
                setToggle(true)
            }} />

            {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'testimonial','contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li className='app__flex p-text' key="cv">
                    <div />
                    <a href={pdf} className="btn btn-cv" download>Download CV</a>
                </li>
            </ul>
          </motion.div>
        )}
        </div>
    </nav>
  )
}

export default Navbar