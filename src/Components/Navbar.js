import React from 'react';
import { Link, withRouter } from "react-router-dom";
import {
  Pane,
  Button,
  Text,
  Heading,
  Avatar,
  BackButton,
  Menu,
  Popover,
  toaster,
  Position,
  Box,
} from 'evergreen-ui'

const logoBlock = {
  display: 'flex',
  flexDirection: 'row',
}

const lightText = {
  color: '#FFFFFF'
}

const menuText = {
  textDecoration: 'none',
  color: '#000000',
  textColor: '#000000',
  '&:visited': {
    textColor: '#000000',
  }
}
//className="logoBlock"

function UserMenu() {
  return(
    <Popover
      position={Position.BOTTOM_RIGHT}
      content={
        <Menu>
          <Menu.Group>
            <Link to='/author/Landon' style={menuText}>
              <Menu.Item>
                Profile
              </Menu.Item>
            </Link>
            <Menu.Item
              onSelect={() => toaster.notify('Rename')}
              secondaryText=">"
              style={menuText}
            >
              Logout
            </Menu.Item>
          </Menu.Group>
        </Menu>
      }
    >
      <Button marginRight={16} appearance="minimal">
        <Pane display="flex" alignItems="center">
          <Avatar name="Jeroen Ransijn" size={30} marginRight={5} hashValue="id_124" />
          <Text size={400} style={lightText}> User name </Text>
        </Pane>
      </Button>
    </Popover>
  )
}

// <Pane display="flex" alignItems="center">
//   <Avatar name="Jeroen Ransijn" size={30} marginRight={5} hashValue="id_124" />
//   <Text size={400} style={lightText}> User name </Text>
// </Pane>

function Navbar(props) {
  const auth = true
  const { match, location, history } = props
  console.log(location)
  console.log(match)
  const path = match.path
  const isArticle = path == '/article/:title' ? true : false

  return (
    <div>
      <Pane display="flex" padding={16} background="#234361" borderRadius={3}>
        <Pane flex={1} alignItems="center" display="flex">
        { isArticle ?
          <BackButton is={Link} to="/"/>
          :
          <Pane flex={1} alignItems="center" display="flex">
            <Link to='/' style={{marginRight: '12px'}}>
              <Heading size={600} style={lightText}>Articles</Heading>
            </Link>
            <Link to='/' style={{marginRight: '6px'}}>
              <Text size={300} style={lightText}>Home</Text>
            </Link>
            <Link to='/testing' style={{marginRight: '6px'}}>
              <Text size={300} style={lightText}>Test</Text>
            </Link>
          </Pane>
        }
        </Pane>
        <Pane>
          {/* Below you can see the marginRight property on a Button. */}
           {auth ?
             <div>
               <Button is={Link} to="/login" appearance="primary">New Article</Button>
               <UserMenu/>
              </div>
            :
            <Button is={Link} to="/login" appearance="primary">Login</Button>
          }


        </Pane>
      </Pane>
    </div>
  );
}

export default withRouter(Navbar)
