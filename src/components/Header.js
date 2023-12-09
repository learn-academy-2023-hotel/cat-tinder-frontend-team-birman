import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import catLogo from "../assets/OhMyCatLogo.png"

const Header = () => {
    return (
        <Nav
        justified
        pills
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
            to="/catindex">
            Pics of Cats
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            to="/catshow"
            >
            Purr Show
            </NavLink>
        </NavItem>
        </Nav>
    )
}

export default Header