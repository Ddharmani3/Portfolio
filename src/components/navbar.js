import React from 'react'
import Insta from './Svgs/insta'
import Github from './Svgs/github'
import Linkedin from './Svgs/linkedin'
// import {NavHashLink} from 'react-router-dom'
import { BrowserRouter/* ,Route,Routes */ } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

function navbar() {
    return (
        <div className='cont'>
            <nav className='navbar'>
        <img src="dlogo.png"className='logo' alt="logo" />
                
                
                {/* <ul className='navul'>
                    <li className='navli'>Home</li>
                    <li className='navli'>About</li>
                    <li className='navli'>Skills</li>
                    <li className='navli'>Projects</li>
                    <li className='navli'>Contact</li>
                </ul> */}

                <BrowserRouter>
                <ul className='navul'>
                    
                    <li className='navli'> <NavHashLink smooth activeClassName='actroute' location={{pathname: document.location.pathname + document.location.hash}} exact to="#home" className="navroute"> Home </NavHashLink> </li>
                    <li className='navli'> <NavHashLink smooth  exact to="#about" className="navroute"> About </NavHashLink> </li>
                    <li className='navli'> <NavHashLink smooth  exact to="#skills" className="navroute"> Skills </NavHashLink> </li>
                    <li className='navli'> <NavHashLink smooth  exact to="#projects" className="navroute"> Projects </NavHashLink> </li>
                    <li className='navli'> <NavHashLink smooth  exact to="#contact" className="navroute"> Contact </NavHashLink> </li>
                </ul>
                </BrowserRouter>

             <ul className='social'>
                <li><a className='soclogos' rel="noreferrer" target="_blank" href="https://github.com/Ddharmani3"> <Github color="white"/> </a></li>
                <li><a className='soclogos' rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/hardik-dharmani-001230228"> <Linkedin/> </a></li>
                <li><a className='soclogos' rel="noreferrer" target="_blank" href="https://www.instagram.com/ddharmani3/"> <Insta/></a></li>
             </ul>
            </nav>
        </div>
    )
}

export default navbar
