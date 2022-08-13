import React from 'react'
import Insta from './Svgs/insta'

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
                <li><a target="_blank" href="https://www.instagram.com/ddharmani3/"> <Insta/></a></li>
             </ul>
            </nav>
        </div>
    )
}

export default navbar