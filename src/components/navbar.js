import React from 'react'
import Insta from './Svgs/insta'
import Github from './Svgs/github'
import Linkedin from './Svgs/linkedin'
// import {HashLink} from 'react-router-dom'
import { BrowserRouter/* ,Route,Routes */ } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function navbar() {
    return (
        <div className='cont'>
            <nav className='navbar'>
        <img src="/dlogo.png"className='logo' alt="logo" />
                
                
                {/* <ul className='navul'>
                    <li className='navli'>Home</li>
                    <li className='navli'>About</li>
                    <li className='navli'>Skills</li>
                    <li className='navli'>Projects</li>
                    <li className='navli'>Contact</li>
                </ul> */}

                <BrowserRouter>
                <ul className='navul'>
                    
                    <li className='navli'> <HashLink smooth exact to="#home" className="navroute"> Home </HashLink> </li>
                    <li className='navli'> <HashLink smooth exact to="#about" className="navroute"> About </HashLink> </li>
                    <li className='navli'> <HashLink smooth exact to="#skills" className="navroute"> Skills </HashLink> </li>
                    <li className='navli'> <HashLink smooth exact to="#projects" className="navroute"> Projects </HashLink> </li>
                    <li className='navli'> <HashLink smooth exact to="#contact" className="navroute"> Contact </HashLink> </li>
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