import React from 'react'
import { NavLink } from 'react-router-dom'
import catLogo from "../assets/OhMyCatLogoText.png"

const Footer = () => {
    return (
        <div className='footer'>
          

                      <NavLink
            to="/"
            >
            <img
            src={catLogo}
            alt="Cat Tinder logo"
            className="footer-cat-logo"
            />
            </NavLink>
            <p>&copy; 2023 created by <a href="https://www.linkedin.com/in/alexander-d-nguyen" target="_blank" rel="noreferrer" className='foot-link'>Alex Nguyen</a> and <a href="https://www.linkedin.com/in/jdpinkard" target="_blank" rel="noreferrer" className='foot-link'>Justin Pinkard</a> </p>
        </div>
    )
}

export default Footer