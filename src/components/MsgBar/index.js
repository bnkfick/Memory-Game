import React from "react";
import "./style.css";

function MsgBar(props) {
  return (
    <div className="msgbar">
      <div>Clicky Game</div>
      <div className="center">{props.msg}</div>
      <div className="right">
          SCORE: {props.score} | TOP SCORE: {props.highScore} 
      </div>
    </div>
  )
}


export default MsgBar;
