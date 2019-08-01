import React from 'react';
import { Link } from "react-router-dom";
import { Pane, Button, Text, Heading } from 'evergreen-ui'

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
      <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={600}>Left Aligned</Heading>
        </Pane>
        <Pane>
          {/* Below you can see the marginRight property on a Button. */}
          <Button marginRight={16}>Button</Button>
          <Button appearance="primary">Primary Button</Button>
        </Pane>
      </Pane>
    </div>
  );
}

export default Navbar;
