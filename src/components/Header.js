import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import catLogo from "../assets/OhMyCatLogoText.png"
import newProfile from "../assets/CatNewProfileInverse.png"
import cuddle from "../assets/CuddleRev.png"
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
            <span className='header-text'>&nbsp;Cuddle</span><span className='galaxy'> Finder</span>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            to="/catnew" className="nav-link">
            <img 
            src={newProfile}
            alt="New Profile logo"
            className="cat-logo-icon"
            />
            <span className='galaxy'>&nbsp;New </span><span className='header-text'>Mew</span>
            </NavLink>
        </NavItem>
        </Nav>
    )
}

export default Header