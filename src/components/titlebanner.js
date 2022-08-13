import React from 'react'
import Dlogo from './Svgs/dlogo'

function titlebanner() {
  

  return (
   <div className="banner">

    <div className="tcont">
        <h1 className="hi">Hi, I'm</h1>
       <h1 className="name">Hardik Dharmani </h1>
       <div className="anitext">

        <h1 className="desc">
          <span id='words'>Full Stack Developer </span> </h1>
       </div>
        
    </div>
       <div className="logoban">
         <Dlogo/>
       </div>
   </div>
  )
}

export default titlebanner
