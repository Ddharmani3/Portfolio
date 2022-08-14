import React from 'react'
import './contact.css'

function contact() {
  return (
    <div className='contact'>
      <div className="connecttxt">
        <h2 style={{"color":"rgb(0 199 255)"}}>CONNECT WITH ME</h2>
        <form  className='form'  action="">
          {/* <label htmlFor="username">Your Name</label> */}
          <input className='inputcontact' id='username'placeholder="Your Name" type="text" />
          <input className='inputcontact' id='useremail'placeholder="Your Email" type="email" />
          <input className='inputcontact' id='subject'placeholder="I want to talk about" type="text" />
          <textarea  id="msgarea" cols="30" rows="10" placeholder='Write Your Message'></textarea>
          <input className='send' type="submit" value="Send" />
        </form>
      </div>
      <img className='conimg' width={"600px"} height="600px" src="connect.png" alt="" />
    </div>
  )
}

export default contact