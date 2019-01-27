import React from "react";
import "./style.css";

function MsgBar(props) {
  return (
    <div className="msgbar">
    <div>Clicky Game</div>
    <div>{props.msg}</div>
      <div>
          SCORE: {props.score} | TOP SCORE: {props.highScore} 
      </div>
    </div>
  )
}


export default MsgBar;
