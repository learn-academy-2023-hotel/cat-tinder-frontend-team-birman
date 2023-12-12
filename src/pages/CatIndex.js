import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const CatIndex = ({ cats }) => {
  return (
    <div className="cards-index">
      <div className="cards-index-margin">
      {cats?.map((cat, index) => {
        return (
          <Card
            style={{
              width: "18rem",
              margin: 30,
            }}
            key={index}
          >
            <img alt="cat profile" src={cat.image} />
            <CardBody>
              <CardTitle tag="h5">{cat.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {cat.age}
              </CardSubtitle>

              <NavLink to={`/catshow/${cat.id}`} className="index-nav-link">
                <p className="black">Details</p>
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
      </div>
    </div>
  )
}

export default CatIndex;
