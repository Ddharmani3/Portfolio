import React from 'react'
import Insta from './Svgs/insta'
import Github from './Svgs/github'
import Linkedin from './Svgs/linkedin'

function navbar() {
    return (
        <div className='cont'>
            <nav className='navbar'>
        <img src="/dlogo.png"className='logo' alt="logo" />
                
                
                <ul className='navul'>
                    <li className='navli'>Home</li>
                    <li className='navli'>About</li>
                    <li className='navli'>Skills</li>
                    <li className='navli'>Projects</li>
                    <li className='navli'>Contact</li>
                </ul>

                {/* <ul className='navul'>
                    <li className='navli'> <NavLink exact to="/" className="navroute"> Home </NavLink> </li>
                    <li className='navli'> <NavLink exact to="/about" className="navroute"> About </NavLink> </li>
                    <li className='navli'> <NavLink exact to="/skills" className="navroute"> Skills </NavLink> </li>
                    <li className='navli'> <NavLink exact to="/projects" className="navroute"> Projects </NavLink> </li>
                    <li className='navli'> <NavLink exact to="/contact" className="navroute"> Contact </NavLink> </li>
                </ul> */}

             <ul className='social'>
                <li><a className='soclogos' rel="noreferrer" target="_blank" href="https://github.com/Ddharmani3"> <Github/> </a></li>
                <li><a className='soclogos' rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/hardik-dharmani-001230228"> <Linkedin/> </a></li>
                <li><a className='soclogos' rel="noreferrer" target="_blank" href="https://www.instagram.com/ddharmani3/"> <Insta/></a></li>
             </ul>
            </nav>
        </div>
    )
}

export default navbar