import React from 'react';
import { Link } from "react-router-dom";

function Navz() {

  return(
    <div>
      <nav>
        <ul className="nav-links">

          <Link to="/register-form">
            <li>To register-form</li>
          </Link>

          <Link to="/login">
            <li>To login</li>
          </Link>

        </ul>
      </nav>
    </div>
  );
}

export default Navz;
