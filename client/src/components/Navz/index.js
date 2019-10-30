import React from 'react';
import { Link } from "react-router-dom";

function Navz() {

  const navStyle = {
    color: "white"
  }

  return(
    <div>
      <nav>
        <ul className="nav-links">

          <Link style={navStyle} to="/register-form">
            <li>To register-form</li>
          </Link>

          <Link style={navStyle} to="/login">
            <li>To login</li>
          </Link>

        </ul>
      </nav>
    </div>
  );
}

export default Navz;
