import React from 'react';
import { Link } from "react-router-dom";

const logoBlock = {
  display: 'flex',
  flexDirection: 'row',
}

//className="logoBlock"

function Navbar() {
  return (
    <div style={logoBlock}>
      <div style={logoBlock}>
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
