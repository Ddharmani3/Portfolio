import React from 'react'
import Dlogo from './Svgs/dlogo'
import Aos from 'aos'
import "aos/dist/aos.css"
import './titlebanner.css'


function titlebanner() {
  Aos.init();

  return (
   <div  className="banner">

    <div className="tcont">
        <h1 className="hi">Hi, I'm</h1>
       <h1 className="name">Hardik <span><img src="dlogo.png" width={"28px"} style={{"marginLeft":"5px"}} alt="dlogo" /></span>harmani </h1>
       <div className="anitext">

        <h1 className="desc">
          <span id='words'>Full Stack Developer.</span> </h1>
       </div>
        
    </div>
       <div className="logoban">
        <img className='coder3' src="coder.png"  alt="coder" />
         <Dlogo width="25vw" view="0 0 235 309"/>
         
       </div>
   </div>
  )
}

export default titlebanner
