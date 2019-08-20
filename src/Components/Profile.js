import React from 'react';
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
  width: '60%',
  justifyContent: 'center',
  alignItems: 'center'

}

const UserBox = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
}

const ProfileBox = {
  padding: '20px',
  width: '40%',
}

const TopProfile = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
}
const UserInfoBox = {
  marginLeft: '15px',
}
const biotext = {
  marginTop: '15px',
}

const Editbutton = {
  alignSelf: 'flex-start',
  marginLeft: 'auto',

}

function Profile() {
  return(
    <div>
      <Navbar/>
      <div style={TopProfile}>
        <div style={ProfileBox}>
          <div style={UserBox}>
            <Avatar name="Jeroen Ransijn" size={60} />
            <div style={UserInfoBox}>
              <Heading size={400}> Landon </Heading>
              <Heading size={200}>Joined: </Heading>
            </div>
            <div style={Editbutton}>
              <IconButton appearance="minimal" icon="edit" />
            </div>
          </div>
          <div style={biotext}>
            <Text size={500} > Bio... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            </Text>
          </div>
        </div>
        <div style={StatsArray}>
          {stats.map((stat, index) =>
            <StatBox index={index} value={stat.value} label={stat.label}/>
          )}
        </div>
      </div>

    </div>
  )
}

export default Profile
