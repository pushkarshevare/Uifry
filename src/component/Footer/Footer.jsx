import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="cols">
            <ul>
                <li>
                    <h2><img src='/images/logo.png' />uifry</h2>
                </li>
                <li>
                    <p><img src='/images/mail.png' /> Help@Frybix.Com</p>
                </li>
                <li>
                    <p><img src='/images/call.png' /> +1234 456 678 89</p>
                </li>
            </ul>
        </div>
        <div className="cols">
            <ul>
                <li>
                    <h2>Links</h2>
                </li>
                <li>
                    <p>Home</p>
                </li>
                <li>
                    <p>About Us</p>
                </li>
                <li>
                    <p>Bookings</p>
                </li>
                <li>
                    <p>Blog</p>
                </li>
            </ul>
        </div>
        <div className="cols">
            <ul>
                <li>
                    <h2>Legal</h2>
                </li>
                <li>
                    <p>Terms of Use</p>
                </li>
                <li>
                    <p>Privacy Policy</p>
                </li>
                <li>
                    <p>Cookie Policy</p>
                </li>
            </ul>
        </div>
        <div className="cols">
            <ul>
                <li>
                    <h2>Product</h2>
                </li>
                <li>
                    <p>Take Tour</p>
                </li>
                <li>
                    <p>Live Chat</p>
                </li>
                <li>
                    <p>Reviews</p>
                </li>
            </ul>
        </div>
        <div className="cols">
            <ul>
                <li>
                    <h2>Newsletter</h2>
                </li>
                <li>
                    <p>Stay Up To Date</p>
                </li>
                <li>
                    <input type="text" placeholder='Your Email' name="" id="" /><button>Subscribe</button>
                </li>
            </ul>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2022 Uifry.com All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
