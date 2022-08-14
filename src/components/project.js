import React from 'react'
import './project.css'
import Github from './Svgs/github'

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
          <div > <a className="gitsourcep" target="_blank" rel="noreferrer" href="https://github.com/Ddharmani3/Portfolio"><Github color="rgb(0 199 255)"/> <h3>View Source Code</h3></a></div>
        
        </div>
        </div>


        <div className="proj" id='proj2' >
        <img src="proj2ss.png" id='projimg2'  alt="proj2ss" />

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
          <div > <a className="gitsourcep" target="_blank" rel="noreferrer" href="https://github.com/Ddharmani3/News-Monkey"><Github color="rgb(0 199 255)"/> <h3>View Source Code</h3></a></div>
        
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default project