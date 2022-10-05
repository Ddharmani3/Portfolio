import React from 'react'
import Insta from './Svgs/insta'
import Github from './Svgs/github'
import Linkedin from './Svgs/linkedin'
// import {NavHashLink} from 'react-router-dom'
import { BrowserRouter/* ,Route,Routes */ } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './navbar.css'
import Resume from './Svgs/resume';

function navbar() {
    return (
        <div className='cont'>
            <BrowserRouter>
            <nav className='navbar'>
            <NavHashLink smooth  exact to="#home"  className='logo'><img src="dlogo.png" height={"30px"} alt="logo" />  </NavHashLink>
    

                <ul className='navul'>
                    
                    <li className='navli'> <NavHashLink smooth  exact to="#home" className="navroute"> Home </NavHashLink> </li>
                    <li className='navli'> <NavHashLink smooth  exact to="#about" className="navroute"> About </NavHashLink> </li>
                    <li className='navli'> <NavHashLink smooth  exact to="#skills" className="navroute"> Skills </NavHashLink> </li>
                    <li className='navli'> <NavHashLink smooth  exact to="#projects" className="navroute"> Projects </NavHashLink> </li>
                    <li className='navli'> <NavHashLink smooth  exact to="#contact" className="navroute"> Contact </NavHashLink> </li>
                </ul>

             <ul className='social'>
                <li><a className='soclogos' rel="noreferrer" target="_blank" href="https://github.com/Ddharmani3"> <Github color="white"/> </a></li>
                <li><a className='soclogos' rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/hardik-dharmani-001230228"> <Linkedin/> </a></li>
                <li><a className='soclogos' rel="noreferrer" target="_blank" href="https://www.instagram.com/ddharmani3/"> <Insta/></a></li>
                <li><div> <a className="resume" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1X1mKFSg3mUZGsC13JVl-P53yizbkoGUk/view?usp=sharing"><Resume /> <h3>Resume</h3></a></div></li>
             </ul>
            </nav>
                </BrowserRouter>
        </div>
    )
}

export default navbar
