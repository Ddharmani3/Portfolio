import React from 'react'
import Github from './Svgs/github'
import "./footer.css"
import Resume from './Svgs/resume'

function footer() {
  return (
    <div className="footer">
      <div className="line"></div>
      <div className="fcontent">
        <div className="fproj">
            <h2 style={{"color":"rgb(0 199 255)"}}>Projects</h2>
          <ul className='projlistf'>
            <li>Portfolio</li>
            <li>News App</li>
            <li>Chat App</li>
          </ul>
        </div>
        <div className="fsocial">
            <h2 style={{"marginLeft":"-1px","color":"rgb(0 199 255)"}}>Connect</h2>
          <ul className='soclist'>
            <li className='socioli'> <a rel="noreferrer"  target="_blank" href="https://www.linkedin.com/in/hardik-dharmani-001230228"> <img width={"24px"} src="linkedinlogo.png" alt="" /> Linkedin </a> </li>
            <li className='socioli'> <a href="https://github.com/Ddharmani3" rel="noreferrer" target="_blank"  > <img width={"24px"} src="githublogo.png" alt="" />Github </a> </li>
            <li className='socioli'> <a rel="noreferrer"  target="_blank" href="https://www.instagram.com/ddharmani3/"> <img width={"24px"} src="instalogo.png" alt="" /> Instagram </a> </li>
            <li className='socioli'> <a rel="noreferrer" target="_blank" href="mailto:ddharmani99@gmail.com"> <img width={"24px"} src="gmaillogo.png" alt="" /> Gmail </a> </li>
          </ul>
        </div>
    
    <div className="boxesgr">

          <div > <a className="gitsource" target="_blank" rel="noreferrer" href="https://github.com/Ddharmani3/Portfolio"><Github color="rgb(0 199 255)"/> <h3>View Source Code</h3></a></div>
          <div > <a className="gitsource resgs" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1X1mKFSg3mUZGsC13JVl-P53yizbkoGUk/view?usp=sharing"><Resume size="1.7rem" color="rgb(0 199 255)"/> <h3>Resume</h3></a></div>
    </div>
        
        
      </div>
      <div className="love">
        <p style={{"fontSize":"25px"}}>Made with <img src="Reactlogo.png" width={"26px"} alt="" /> and <img src="hearticon.png" width={"24px"} alt="" /> </p>
        <p style={{"marginLeft":"45px","fontSize":"15px"}}> by Hardik Dharmani</p>
      </div>
    </div>
  )
}

export default footer