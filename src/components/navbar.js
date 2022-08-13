import React from 'react'
import Insta from './Svgs/insta'
import Github from './Svgs/github'
import Linkedin from './Svgs/linkedin'

function navbar() {
    return (
        <div className='cont'>
            <nav className='navbar'>
                
                {/* <img src="" alt="logo" className='logo' /> */}
                
                <ul className='navul'>
                    <li className='navli'>Home</li>
                    <li className='navli'>About</li>
                    <li className='navli'>Portfolio</li>
                    <li className='navli'>Contact</li>
                </ul>

             <ul className='social'>
                <li><a className='soclogos' target="_blank" href="https://github.com/Ddharmani3"> <Github/> </a></li>
                <li><a className='soclogos' target="_blank" href="https://www.linkedin.com/in/hardik-dharmani-001230228"> <Linkedin/> </a></li>
                <li><a className='soclogos' target="_blank" href="https://www.instagram.com/ddharmani3/"> <Insta/></a></li>
             </ul>
            </nav>
        </div>
    )
}

export default navbar