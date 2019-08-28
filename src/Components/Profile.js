import React from 'react';
import useGlobal from '../GlobalState/Store/Store';
import { Link } from "react-router-dom";
import { HashLink as SectionLink } from 'react-router-hash-link';
import Navbar from './Navbar'
import StatBox from './StatBox'

import {
  Pane,
  Button,
  Text,
  Heading,
  Avatar,
  TextInput,
  IconButton
} from 'evergreen-ui'

const stats = [
  {
    label: "Articles",
    value: 102
  },
  {
    label: "Comments",
    value: 17
  },
]

const StatsArray = {
  display: 'flex',
  flexDirection: 'row',
  //width: '60%',
  //justifyContent: 'center',
  alignItems: 'flex-start',
  height: '100%',
  marginLeft: 'auto',
  marginBottom: '15px',

}

const UserBox = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginBottom: '15px',
}

const ProfileBox = {
  padding: '20px',
  width: '70%',

}

const TopProfile = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '300px',
}
const UserInfoBox = {
  marginLeft: '10px',
}
const biotext = {
  marginTop: '15px',
  marginBottom: '15px',
}

const Editbutton = {
  alignSelf: 'flex-end',
  marginLeft: '95%',
  marginTop: '15px',
}

function Profile(props) {
  const [globalState, globalActions] = useGlobal();
  const user = globalState.user
  const auth = globalState.isAuth
  const profileUser = props.match.params.username
  console.log(props.match.params.username)
  console.log(user.username)

  const isCurrentUser = profileUser === user.username ? true : false

  return(
    <div>
      <Navbar/>
      <div style={Editbutton}>
        {isCurrentUser ? <IconButton appearance="minimal" icon="edit" /> : null}
      </div>
      <div style={TopProfile}>
        <div style={ProfileBox}>
          <div style={UserBox}>
            <Avatar name="Jeroen Ransijn" size={60} />
            <div style={UserInfoBox}>
              <Heading size={600}> Landon </Heading>
              <Heading size={300}> Joined: </Heading>
            </div>
            <div style={StatsArray}>
              {stats.map((stat, index) =>
                <StatBox index={index} value={stat.value} label={stat.label}/>
              )}
            </div>
          </div>
          <div style={biotext}>
            <Text size={500} > Bio... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            </Text>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Profile
