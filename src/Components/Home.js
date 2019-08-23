import React, {useEffect, useState} from 'react'
import Feed from './Feed'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import axios from 'axios'
import {
  Pane,
  Button,
  Text,
  Heading,
} from 'evergreen-ui'

function Home() {
  const [user, setUser] = useState({})
  const [fetch, setFetch] = useState({
    isLoading: false,
    isError: false,
    error: null
  })
  useEffect(() => {
    axios.get('http://localhost:4000/user/auth/')
      .then(response => {
        setUser(response.data);
        setFetch({
          isLoading: false,
          isError: false,
          error: null
        })
      })
      .catch(function(error) {
        setFetch({
          isLoading: false,
          isError: true,
          error: error
        })
        console.log(error);
      })
  }, [])
  const auth = user.auth ? true : false
  return(
    <div>
      <Navbar user={user.username} auth={auth}/>
      { auth ?
        <Feed/>
        :
        <Pane flex={1} alignItems="center" display="flex">
          <Link to='/login' style={{marginTop: '-2px'}}>
            <Text size={500} marginRight={3}>Login</Text>
          </Link>
          <Text size={500}>to view articles</Text>
        </Pane>
      }
    </div>
  )
}

export default Home
