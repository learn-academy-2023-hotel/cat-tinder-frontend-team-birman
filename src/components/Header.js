import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import catLogo from "../assets/OhMyCatLogoText.png"
import cuddle from "../assets/Cuddle.png"
import '../App.css'

const Header = () => {
    return (
        <Nav
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
            <img
            src={cuddle}
            alt="Two Cats Cuddling"
            className="cuddle"
            />
            <span className='cuddle-text'>&nbsp;Cuddle Finder</span>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            to="/catnew" className="nav-link">
            New Mew
            </NavLink>
        </NavItem>
        </Nav>
    )
}

export default Header