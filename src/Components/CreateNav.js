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

function UserMenu(props) {
  const user = props.user
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
              //secondaryText=">"
              style={menuText}
            >
              Logout
            </Menu.Item>
          </Menu.Group>
        </Menu>
      }
    >
      <Button marginRight={16} appearance="minimal" style={{border: 'none'}}>
        <Pane display="flex" alignItems="center">
          <Avatar name={user.username} size={30} marginRight={5} hashValue="id_124" />
          <Text size={400} style={lightText}> {user.username} </Text>
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
  const path = match.path
  const isArticle = path == '/article/:title' ? true : false
  const user = {
    username: 'Landon',
  }

  return (
    <div>
      <Pane display="flex" padding={16} background="#234361" borderRadius={3}>
        <Pane flex={1} alignItems="center" display="flex">
          <Button intent="danger" height={32} marginRight={16} iconBefore="cross">
            Cancel
          </Button>
        </Pane>
        <Pane>
          <Button is={Link} to="/login" appearance="primary">Publish Article</Button>
        </Pane>
      </Pane>
    </div>
  );
}

export default withRouter(Navbar)
