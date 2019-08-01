import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="logoBlock">
        <img src='' />
        <Link to='/'>
          <div className="navHeading">
            Articles
          </div>
        </Link>
      </div>
      <Link to='/test'>
        <div className="navHeading">
          test page
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
