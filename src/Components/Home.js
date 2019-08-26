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
import { useSimpleState } from 'use-simple-state';
//import { logIn } from '../Store';

//axios.defaults.crossdomain = true,

function Home() {
  // const [state, dispatch] = useSimpleState();
  // const user = state.user
  // const auth = state.isAuth
  // const logIn = () => ({ type: 'LOG_IN' });
  //console.log(state)
  // useEffect(() => {
  //   dispatch(logIn())
  // }, [])
  const [user, setUser] = useState({})
  const [fetch, setFetch] = useState({
    isLoading: false,
    isError: false,
    error: null
  })
  useEffect(() => {
    axios.get('http://localhost:4000/user/auth')
      .then(response => {
        setUser(response.data);
        console.log(response)
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
  const auth = user.username ? true : false
  return(
    <div>
      <Navbar user={user} auth={auth}/> //user={user.username} auth={auth}
      <Feed/>
    </div>
  )
}

export default Home

// <Pane flex={1} alignItems="center" display="flex">
//   <Link to='/login' style={{marginTop: '-2px'}}>
//     <Text size={500} marginRight={3}>Login</Text>
//   </Link>
//   <Text size={500}>to view articles</Text>
// </Pane>

// {
//     method: 'GET',
//     url: 'http://localhost:4000/user/auth/',
//     withCredentials: true,
//     crossdomain: true,
//   })
