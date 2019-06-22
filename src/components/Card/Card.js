//sets up the reusable FriendCard component
import React from "react";
import "./Card.css";

//pass the image into each card so all 12 are rendered
const Card = props => (
  <div className="card" onClick={() => props.imageClick(props.id)}>
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>
  </div>
);

export default Card;