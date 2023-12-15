import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import catLogo from "../assets/OhMyCatLogoText.png";
import newProfile from "../assets/CatNewProfileInverse.png";
import cuddle from "../assets/CuddleRev.png";
import "../App.css";

const Header = () => {
  return (
    <Nav className="header-container">
      <NavItem>
        <NavLink to="/">
          <img
            src={catLogo}
            alt="Cat Tinder logo with outline of cat"
            className="header-cat-logo-img"
          />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/catindex" className="header-nav-link">
          <img
            src={cuddle}
            alt="Two Cats Cuddling"
            className="header-cuddle-img"
          />
          <span className="header-text-mq">&nbsp;Cuddle</span>
          <span className="header-galaxy-mq">&nbsp;Finder</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/catnew" className="header-nav-link">
          <img
            src={newProfile}
            alt="New Profile logo"
            className="header-new-profile-img"
          />
          <span className="header-galaxy-mq">&nbsp;New</span>
          <span className="header-text-mq">&nbsp;Mew</span>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default Header;
