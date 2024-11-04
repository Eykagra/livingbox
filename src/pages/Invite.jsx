import React from 'react'
import logo from '../images/logo.png'
import '../styles/invite.css'

const Invite = () => {
  return (
    <>
    <div className="invite-navbar">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div>
            <p>Having Trouble?Get Help?</p>
        </div>
      </div>
    <div className='invite'>
      <div className="invite-box">
        <h1>Welcome to LivingBox</h1>
        <p>Enter the invited link that has been shared to you mail</p>
        <input type="text" placeholder='Write invite link...'/>
        <button>Go to homepage</button>
        <a href="#">Don't have invitation link? Contact us</a>
      </div>
    </div>
    </>
  )
}

export default Invite
