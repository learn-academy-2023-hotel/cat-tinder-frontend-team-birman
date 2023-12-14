import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

const CatIndex = ({ cats }) => {
  return (
    <div className="cards-index">
      <div className="cards-index-margin">
      {cats?.map((cat, index) => {
        return (
          <div className="cards-index-container" key={index}>
            <img alt="cat profile" src={cat.image} className="index-image"/>
            <h2>{cat.name}, {cat.age}</h2>
              <NavLink to={`/catshow/${cat.id}`} className="index-nav-link">
                <Button>Find Out More</Button>
              </NavLink>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default CatIndex;
