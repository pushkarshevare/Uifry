import React from 'react'
import './style.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navbar">
            <div className="left-side">
                <div className="logo">
                    <img src='/images/logo.png' /> <h2>uifry</h2>
                </div>
                <div className="links">
                    <ul>
                        <li><span>Home</span></li>
                        <li>About Us</li>
                        <li>Pricing</li>
                        <li>Features</li>
                    </ul>
                </div>
            </div>
            <div className="right-side">
                <button>Download</button>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
