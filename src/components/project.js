import React from 'react'
import './project.css'

function project() {
  return (
    <div className='projects'>
      <div className="title">
        <h1 className='projtit'>PROJECTS</h1>
        <div className="projlist">

        <div className="proj">
        <img src="proj1ss.png"id='proj2' alt="proj1ss" />
        <h3>Portfloio Website</h3>
        </div>
        <div className="proj" id='proj2'>
        <img src="proj1ss.png" alt="proj1ss" />
        <h3>Chat App</h3>
        </div>
        <div className="proj">
        <img src="proj1ss.png" id='proj3' alt="proj1ss" />
        <h3>News WebApp</h3>
        </div>
        </div>
      </div>
    </div>
  )
}

export default project