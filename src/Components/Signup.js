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
  const [login, setLogin] = useState({
    username: '',
    email: '',
    password: ''
  })
  const updateField = (e) => {
    setLogin({...login, [e.target.name]: e.target.value})
  }
  const [fetch, setFetch] = useState({
    isLoading: false,
    isError: false,
    error: null
  })
  return(
    <div style={center}>
      <Pane padding={15} background="tint1" display="flex" flexDirection="column" alignItems="center">
        <Heading size={500} marginBottom={20} >Sing up to start discussing Articles!</Heading>
        <TextInput
          name="username"
          type="text"
          placeholder="username"
          marginBottom="15px"
          width="100%"
          value={login.username}
          onChange={updateField}
        />
        <TextInput
          name="email"
          type="email"
          placeholder="email"
          marginBottom="15px"
          width="100%"
          value={login.email}
          onChange={updateField}
        />
        <TextInput
          name="password"
          type="password"
          placeholder="password"
          marginBottom="15px"
          width="100%"
          value={login.password}
          onChange={updateField}
        />
        <Button
          width='100%'
          appearance="primary"
          style={{display: 'flex', justifyContent: 'center'}}
        >
          {fetch.isLoading ?
            <Spinner size={16} style={{color: '#FFFFFF'}}/>
            :
            "Login"
          }
        </Button>
        {fetch.isError ?
          <div>
            <Text color="#EC4C47" size={300}> {fetch.error.message}</Text>
          </div>
          :
          null
        }
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
