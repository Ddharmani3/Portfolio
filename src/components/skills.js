import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Icons from './Svgs/sicons'
import './skills.css'


function skills() {
   
    Aos.init();
  return (
    <div className="skills">
        <div className='trails'>
                <div className='trails' data-aos-anchor="#trail4"  data-aos="zoom-in-left" id="trail1"><img src="trail.png" alt="" /></div>
                <div className='trails' data-aos-anchor="#trail4"  data-aos="zoom-in-right" id="trail2"><img src="trail.png" alt="" /></div>
                <div className='trails' data-aos-anchor="#trail4"  data-aos="zoom-in-left" id="trail3"><img src="trail.png" alt="" /></div>
                <div className='trails' data-aos="zoom-in-right" id="trail4"><img src="trail.png" alt="" /></div>
                <div className='trails' data-aos-anchor="#trail4" data-aos="zoom-in-down" id="trail5"><img src="trail.png" alt="" /></div>
        </div>
        <div  data-aos-delay="200" data-aos="fade-up" className="skilltext">
            <p className='skillth1'>Skills</p>
        </div>
        <div className="iconb">
            <Icons/>
        </div>
    </div>
   
  )
}

export default skills