import React from 'react'
import Feed from './Feed'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import {
  Pane,
  Button,
  Text,
  Heading,
} from 'evergreen-ui'

function Home() {
  const auth = false
  return(
    <div>
      <Navbar/>
      <h1>Home</h1>
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
