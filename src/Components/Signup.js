import React from 'react';
import { Link } from "react-router-dom";
import {
  Pane,
  Button,
  Text,
  Heading,
  Avatar,
  TextInput
} from 'evergreen-ui'

const center = {
  width: '100%',
  maxWidth: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '25px'
}

function Signup() {
  return(
    <div style={center}>
      <Pane padding={15} background="tint1" display="flex" flexDirection="column" alignItems="center">
        <Heading size={500} marginBottom={20} >Sing up to start discussing Articles!</Heading>
        <TextInput
          name="text-input-name"
          placeholder="username"
          marginBottom="15px"
          width="100%"
        />
        <TextInput
          name="text-input-name"
          placeholder="email"
          marginBottom="15px"
          width="100%"
        />
        <TextInput
          name="text-input-name"
          placeholder="password"
          marginBottom="15px"
          width="100%"
        />
        <Button
          width='100%'
          appearance="primary"
          style={{display: 'flex', justifyContent: 'center'}}
        >
        Login
        </Button>
        <Pane flex={1} alignItems="center" display="flex" marginTop={15}>
          <Text size={300}>Already have an account?</Text>
          <Link to='/login' style={{marginTop: '-4px', marginLeft: '4px'}}>
            <Text size={300} marginRight={3}>Sign in here</Text>
          </Link>
        </Pane>
      </Pane>

    </div>
  )
}

export default Signup
