import React from "react";
import "./style.css";

function MsgBar(props) {
  
  return <div className="msgbar">Test your memory.  Don't click the same image more than once or your score will reset.<h1 className="score">SCORE: {props.score}</h1></div>;
}

export default MsgBar;
