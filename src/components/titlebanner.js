import React from 'react'
import Dlogo from './Svgs/dlogo'
import Aos from 'aos'
import "aos/dist/aos.css"
import './titlebanner.css'
import { NavHashLink } from 'react-router-hash-link';
import { TypeAnimation } from 'react-type-animation';



function titlebanner() {
  Aos.init();

  return (
    <>
      <div className="banner">
        <div className="bannercontent">

          <div className="tcont">
            <h1 className="hi">Hi, I'm</h1>
            <h1 className="name">Hardik <span><img src="dlogo.png" width={"28px"} style={{ "marginLeft": "5px" }} alt="dlogo" /></span>harmani </h1>
            <div className="anitext">

              <h1 className="desc">
                <div id='words'>
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer.', // Types 'One'
                      1000, // Waits 1s
                      'Explorer.', // Deletes 'One' and types 'Two'
                      2000, // Waits 2s
                      'Coder.', // Types 'Three' without deleting 'Two'
                      2000, // Waits 2s
                     
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                  />
                  </div> </h1>
            </div>

          </div>
          <div className="logoban" >
            <img className='coder3' src="3dcoder.png" alt="3dmodel" />
            <img className='ar3d' id='d31' src="3d1.png" alt="3dmodel" />
            <img className='ar3d' id='d32' src="3d2.png" alt="3dmodel" />
            <img className='ar3d' id='d33' src="3d3.png" alt="3dmodel" />
            <img className='ar3d' id='d34' src="3d4.png" alt="3dmodel" />
            <img className='ar3d' id='d35' src="3d5.png" alt="3dmodel" />


          </div>
        </div>
      </div>
      <div className="downarrowd">
        <NavHashLink smooth exact to="#about">
          <svg className='downsvg' x="0px" y="0px" viewBox="0 0 120.64 122.88" width={"2rem"} fill='white' xmlSpace="preserve"><g><path d="M54.03,108.91c-1.55,1.63-2.31,3.74-2.28,5.85c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12c1.58,1.5,3.6,2.23,5.61,2.2 c2.01-0.03,4.01-0.82,5.55-2.37c17.66-17.66,35.13-35.61,52.68-53.4c0.07-0.05,0.13-0.1,0.19-0.16c1.55-1.63,2.31-3.76,2.28-5.87 c-0.03-2.11-0.85-4.21-2.45-5.8l-0.27-0.26C100.43,37.47,82.98,19.87,65.46,2.36C63.93,0.82,61.93,0.03,59.92,0 c-2.01-0.03-4.03,0.7-5.61,2.21l-0.15,0.15c-1.57,1.58-2.38,3.66-2.41,5.76c-0.03,2.1,0.73,4.22,2.28,5.85l47.22,47.27 L54.03,108.91L54.03,108.91z M2.26,106.91c-1.54,1.62-2.29,3.73-2.26,5.83c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12 c1.57,1.5,3.6,2.23,5.61,2.21c2.01-0.03,4.02-0.82,5.55-2.37C31.01,101.2,48.87,84.2,66.39,67.12c0.07-0.05,0.14-0.11,0.21-0.17 c1.55-1.63,2.31-3.76,2.28-5.87c-0.03-2.11-0.85-4.21-2.45-5.8C48.94,38.33,31.36,21.44,13.83,4.51l-0.12-0.13 c-1.53-1.54-3.53-2.32-5.54-2.35C6.16,2,4.14,2.73,2.56,4.23L2.41,4.38C0.84,5.96,0.03,8.05,0,10.14c-0.03,2.1,0.73,4.22,2.28,5.85 l47.18,45.24L2.26,106.91L2.26,106.91z" /></g></svg>
        </NavHashLink>
      </div>

    </>
  )
}

export default titlebanner
