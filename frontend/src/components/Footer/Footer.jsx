import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id ='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ex adipisci consequatur hic corporis unde eligendi animi, consectetur tempora in laboriosam obcaecati asperiores officia aliquid? Enim culpa sequi excepturi repellat commodi magnam debitis fugiat!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-628-529-4872</li>
                    <li>contact@tanish.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 © tanish-xyz.com - All Copyright Reserved.
        </p>
      
    </div>
  )
}

export default Footer
