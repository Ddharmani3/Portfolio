import React from 'react'
import './project.css'

function project() {
  return (
    <div className='projects'>
      <div className="title">
        <h1 className='projtit'>PROJECTS</h1>
        <div className="projlist">

        <div className="proj" id='proj1'>
        <img src="proj1ss.png"   className="projimg" alt="proj1ss" />

        <div className="projdesc">
        <h3>Portfloio Website</h3>
        <p className='projtext'> Chat App named Whatsup That has general Chat room.
        <br /> It Has Signup and Login through firebase authentication.
        <br />
          It is Made with Flutter and Firebase. </p>
        </div>
        </div>


        <div className="proj" id='proj2' >
        <img src="proj2ss.png"  className="projimg" id='projimg2'  alt="proj2ss" />

        <div className="projdesc">
        <h3>Chat App</h3>
        <p className='projtext'> Chat App named Whatsup That has general Chat room.
        <br /> It Has Signup and Login through firebase authentication.
        <br />
          It is Made with Flutter and Firebase. </p>
        </div>
        </div>


        <div className="proj" id='proj3'>
        <img src="proj3ss.png"  className="projimg"   alt="proj3ss" />
        
        <div className="projdesc">
        <h3>News WebApp</h3>
        <p className='projtext'> Chat App named Whatsup That has general Chat room.
        <br /> It Has Signup and Login through firebase authentication.
        <br />
          It is Made with Flutter and Firebase. </p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default project