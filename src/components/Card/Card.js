import React from "react";
import "./Card.css";

const Card = props => (

  // click functionality
  <div className="card"
    value={props.id} 
    onClick={() => props.onClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

  
  export default Card;
  