import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div className="main">
    <div></div><div className="grid-container">{props.children}</div><div></div>
    </div>
  );
}

export default Wrapper;
