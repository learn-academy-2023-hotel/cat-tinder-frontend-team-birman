import React from "react";
import "../App.css";
import OMCLogo from "../assets/OhMyCatHome.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-background">
      <img src={OMCLogo} alt="Oh My Cat Logo" />
      <div className="home-text">
        <h4>Join in on the kitten kaboodle</h4>
        <h4>
          by making a&nbsp;
          <NavLink to="/catnew" className="home-link">
            New Mew
          </NavLink>{" "}
          profile.
        </h4>
        <br />
        <h4>Find new matches by searching</h4>
        <h4>
          in the&nbsp;
          <NavLink to="/catindex" className="home-link">
            Cuddle Finder!
          </NavLink>
        </h4>
      </div>
    </div>
  );
};

export default Home;
