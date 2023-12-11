import React from 'react'
import { NavLink } from 'react-router-dom'
import catLogo from "../assets/OhMyCatLogo.png"

const Footer = () => {
    return (
        <div>
         Oh My Cat &copy; 2023 created by <a href="https://www.linkedin.com/in/alexander-d-nguyen" target="_blank">Alex Nguyen</a> and <a href="https://www.linkedin.com/in/jdpinkard" target="_blank">Justin Pinkard</a>
         <NavLink
            to="/"
            >
            <img
            src={catLogo}
            alt="Cat Tinder logo with outline of cat"
            className="cat-logo"
            />
            </NavLink>
        </div>
    )
}

export default Footer