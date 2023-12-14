import React from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../App.css";
import Error from "../assets/404.png";

const NotFound = () => {
  return (
    <div className="not-background">
      <img src={Error} alt="404 Error" />
      <NavLink to="/">
        <Button>Home</Button>
      </NavLink>
    </div>
  );
};

export default NotFound;
