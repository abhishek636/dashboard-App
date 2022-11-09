


import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
        <Link to="/" className="h1"><img
        src="/dash.png"
        alt="dash"
        ></img>Dashboard</Link>
        <input
            placeholder="Search Documentation..."

        ></input>
    </div>
    
  );
}

export default Header;