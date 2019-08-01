import React from 'react';
import { Link, withRouter } from "react-router-dom";
import {
  Pane,
  Button,
  Text,
  Heading,
  Avatar,
  BackButton
} from 'evergreen-ui'

const logoBlock = {
  display: 'flex',
  flexDirection: 'row',
}

//className="logoBlock"

function Navbar(props) {
  const auth = false
  const { match, location, history } = props
  console.log(location)
  console.log(match)
  const path = match.path
  const isArticle = path == '/article/:title' ? true : false

  return (
    <div>
      <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
        <Pane flex={1} alignItems="center" display="flex">
        { isArticle ?
          <BackButton is={Link} to="/"/>
          :
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
        }
        </Pane>
        <Pane>
          {/* Below you can see the marginRight property on a Button. */}
           {auth ?
            <Pane display="flex" alignItems="center">
              <Avatar name="Jeroen Ransijn" size={30} marginRight={5} />
              <Text size={400}> User name </Text>
            </Pane>
            :
            <Button is={Link} to="/login" appearance="primary">Login</Button>
          }


        </Pane>
      </Pane>
    </div>
  );
}

export default withRouter(Navbar)
