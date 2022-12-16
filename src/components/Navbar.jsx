import React from 'react'
import logo from "../assets/logo.png"
import "../style/navbar.css"

function Navbar() {
  return (
    <>
        <div className="navbar">
            <img src={logo} alt="company logo"/>
            <div className='searchDiv' >
                <input className='search' type="search" placeholder=" 🔍 Search for a movie" />
            </div>
        </div>
        <div className="rectangle"></div>
    </>
   
  )
}

export default Navbar