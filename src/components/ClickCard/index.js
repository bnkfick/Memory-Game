import React from "react";
import "./style.css";


function ClickCard(props) {

  return (
      <div className="grid-item">
        <img alt={props.name} onClick={() => props.handleClick(props.id)} src={props.image} />
      </div>
  );
}

export default ClickCard;
