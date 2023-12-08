import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <Nav
        justified
        pills
        >
        <NavItem>
            <NavLink
            active
            to="/"
            >
            Home
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/catindex">
            Pics of Cats
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            disabled
            to="/catshow"
            >
            Purr Show
            </NavLink>
        </NavItem>
        </Nav>
    )
}

export default Header