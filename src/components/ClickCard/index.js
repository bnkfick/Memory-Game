import React from "react";
import "./style.css";


function ClickCard(props) {

  return (
      <figure>
        <img alt={props.name} onClick={() => props.handleClick(props.id)} src={props.image} />
      </figure>
  );
}

export default ClickCard;
