import React from 'react'
import { Nav, NavItem, Navbar } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import catLogo from "../assets/OhMyCatLogoText.png"
import '../App.css'

const Header = () => {
    return (
        <Nav
        justified
        // pills
        className='header'
        >
        <NavItem>
            <NavLink
            to="/"
            >
            <img
            src={catLogo}
            alt="Cat Tinder logo with outline of cat"
            className="cat-logo"
            />
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink 
            to="/catindex" className="nav-link">
            Pics of Cats
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            to="/catshow" className="nav-link">
            Purr Show
            </NavLink>
        </NavItem>
        </Nav>
    )
}

export default Header