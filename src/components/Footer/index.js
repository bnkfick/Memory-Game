import React from "react";
import "./style.css";


function Footer() {

  return (
     <div className="footer">A memory game built with React &mdash; UI in components, manage component state, respond to user events.
        <a href="https://github.com/bnkfick/"><i className="git-icon fab fa-github fa-2x" aria-hidden="true"></i></a>
        <a className="link" href="https://www.linkedin.com/in/barbara-fick-266110176/"><h3>Barbara Fick &copy; 
        { new Date().getFullYear() }</h3></a></div>
  );
}

export default Footer;
