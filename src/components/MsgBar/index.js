import React from "react";
import "./style.css";

function MsgBar(props) {
  return <div className="msgbar">{props.msg}<h1 className="score">SCORE: {props.score}</h1></div>;
}

export default MsgBar;
