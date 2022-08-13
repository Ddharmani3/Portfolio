import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Icons from './Svgs/sicons'


function skills() {
   
    Aos.init();
  return (
    <div className="skills">
        <div></div>
        <div data-scroll="true" data-scroll-speed="2" data-scroll-delay="1" data-aos="slide-right" className="skilltext">
            <h1 className='skillth1'>Skills</h1>
            
        </div>
        <div className="iconb">
            <Icons/>
        </div>
    </div>
   
  )
}

export default skills