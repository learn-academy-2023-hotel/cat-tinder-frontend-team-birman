import React from "react";
import { NavLink } from "react-router-dom";
import catLogo from "../assets/OhMyCatLogoText.png";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <NavLink to="/">
        <img src={catLogo} alt="Cat Tinder logo" className="footer-cat-logo" />
      </NavLink>
      <p>
        &copy; 2023 by{" "}
        <a
          href="https://www.linkedin.com/in/alexander-d-nguyen"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          Alex&nbsp;N<span className="footer-last-name">guyen</span>
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/jdpinkard"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          Justin&nbsp;P<span className="footer-last-name">inkard</span>
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
