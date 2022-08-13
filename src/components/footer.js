import React from 'react'

function footer() {
  return (
    <div className="footer">
      <div className="line"></div>
      <div className="fcontent">
        <div className="fproj">
            <h2>Projects</h2>
          <ul className='projlist'>
            <li>Portfolio</li>
            <li>News App</li>
            <li>Chat App</li>
          </ul>
        </div>
        <div className="fsocial">
            <h2 style={{"marginLeft":"10px"}}>Connect</h2>
          <ul className='soclist'>
            <li className='socioli'> <a rel="noreferrer"  target="_blank" href="https://www.linkedin.com/in/hardik-dharmani-001230228"> <img width={"32px"} src="linkedinlogo.png" alt="" /> Linkedin </a> </li>
            <li className='socioli'> <a href="https://github.com/Ddharmani3" rel="noreferrer" target="_blank"  > <img width={"32px"} src="githublogo.png" alt="" />Github </a> </li>
            <li className='socioli'> <a rel="noreferrer"  target="_blank" href="https://www.instagram.com/ddharmani3/"> <img width={"32px"} src="instalogo.png" alt="" /> Instagram </a> </li>
            <li className='socioli'> <a rel="noreferrer" target="_blank" href="https://www.instagram.com/ddharmani3/"> <img width={"30px"} src="gmaillogo.png" alt="" /> Gmail </a> </li>
          </ul>
        </div>
        
      </div>
      <div className="love">
        <p>Made with   &    by Hardik Dharmani</p>
      </div>
    </div>
  )
}

export default footer