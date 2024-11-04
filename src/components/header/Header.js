import React from 'react'
import "./Header.css"
import { HeaderLogo, SearchBarLogo } from '../../assets'
import { Link } from'react-router-dom'

export const Header = () => {
  return (
    <div id="header-container">
      <div id="header-container-left">
        <Link to="/">
          <HeaderLogo />
        </Link>
      </div>
      <div id='header-container-middle'>
        <Link to="/" style={{ textDecoration: "none", color:"#3b3c4a"}}>Home</Link>
        <Link to="/blogs" style={{ textDecoration: "none", color:"#3b3c4a"}}>Blog</Link>
        <Link to="/contact-us" style={{ textDecoration: "none", color:"#3b3c4a"}}>Contact</Link>
      </div>
      <div className='search-container'>
        <input type='text' className='search-input' placeholder='Search'/>
        <div className='search-icon'>
          <SearchBarLogo />
        </div>
      </div>
    </div>
  )
}
