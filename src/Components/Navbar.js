import React from 'react';
import { Link } from "react-router-dom";
import {
  Pane,
  Button,
  Text,
  Heading,
  Avatar
} from 'evergreen-ui'

const logoBlock = {
  display: 'flex',
  flexDirection: 'row',
}

//className="logoBlock"

function Navbar() {
  const auth = false
  return (
    <div>
      <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
        <Pane flex={1} alignItems="center" display="flex">
          <Link to='/' style={{marginRight: '12px'}}>
            <Heading size={600}>Articles</Heading>
          </Link>
          <Link to='/' style={{marginRight: '6px'}}>
            <Text size={300}>Home</Text>
          </Link>
          <Link to='/testing' style={{marginRight: '6px'}}>
            <Text size={300}>Test</Text>
          </Link>
        </Pane>
        <Pane>
          {/* Below you can see the marginRight property on a Button. */}
           {auth ?
            <Pane display="flex" alignItems="center">
              <Avatar name="Jeroen Ransijn" size={30} marginRight={5} />
              <Text size={400}> User name </Text>
            </Pane>
            :
            <Button appearance="primary">Login</Button>
          }


        </Pane>
      </Pane>
    </div>
  );
}

export default Navbar;
