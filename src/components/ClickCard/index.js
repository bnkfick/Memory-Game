import React from "react";
import "./style.css";

// In the 'FriendCard' component, trigger props.removeFriend and pass in the id of the friend to
// remove onClick of the friend delete button 


function ClickCard(props) {

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} onClick={ () => props.handleClick(props.id) } src={props.image} />
      </div>
      <div className="content">

      </div>
    </div>
  );
}

export default ClickCard;
