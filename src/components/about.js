import React from 'react'
import './about.css'
import { BrowserRouter/* ,Route,Routes */ } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

function about() {
  return (
    <div className='about'>
      <div className="gif">

      <img src="about.gif"  style={{"borderRadius":"23px"}} alt="about gif" />
      </div>
      <div className="abouttxt">
        <h1 >About Me</h1>
        <p className='abtp'>Hi There!👋
        <br />
        <br />
        I am Hardik Dharmani, A CSE Second Year Student at JIIT, Noida.
        <br />
        I am an Explorer and I Love To Learn Different Things. 
        <br />
        I have learned Fullstack development & Flutter development so far.
        <br />
        Languages I Use: Python, C/C++, Dart, Javascript.
        <br />
        Apart From CS I Love Movies🍿, Standups and Music 🎵.
        <br /><br /><br />
        You can checkout my <NavHashLink smooth  exact to="#skills" className="skilllink"> Skills Here.</NavHashLink>
        <br />
        <span>
          <img src="darrow.png" style={{"marginLeft":"240px"}} width={"32px"} alt="" />
          </span></p>
      </div>
    </div>
  )
}

export default about