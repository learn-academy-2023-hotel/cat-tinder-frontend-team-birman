import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import "../App.css";

const CatIndex = ({ cats }) => {
  return (
    <div className="index-outer-container">
      {cats?.map((cat, index) => {
        return (
          <div className="index-card-container" key={index}>
            <img alt="cat profile" src={cat.image} />
            <h2>
              {cat.name}, {cat.age}
            </h2>
            <NavLink to={`/catshow/${cat.id}`}>
              <Button>Find Out More</Button>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default CatIndex;
