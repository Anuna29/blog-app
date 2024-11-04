import React from 'react'
import './Footer.css'
import { Link } from'react-router-dom'  

export const Footer = () => {
  return (
    <div id='footer-container' className='container'>
      <div id='footer-above'>
        <div id='footer-about'>
          <h4>About</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <div id='footer-contact-info'>
              <p>
                <b>Email :</b> info@jstemplate.net
              </p>
              <p>
                <b>Phone :</b> 880 123 456 789
              </p>
          </div>
          </div>
        <div id='footer-middle'>
        <Link to="/" style={{ textDecoration: "none", color:"#3b3c4a"}}>Home</Link>
        <Link to="/blogs" style={{ textDecoration: "none", color:"#3b3c4a"}}>Blog</Link>
        <Link to="/contact-us" style={{ textDecoration: "none", color:"#3b3c4a"}}>Contact</Link>
        </div>
        <div id='footer-icons'></div>
      </div>
      <div id='footer-below'>
        <div id='footer-logo'></div>
        <div id='footer-below-right'></div>
      </div> 
    </div>
  )
}
