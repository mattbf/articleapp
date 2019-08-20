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
  TextInput
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

function Profile() {
  return(
    <div>
      Profile
      {stats.map((stat, index) =>
        <StatBox index={index} value={stat.value} label={stat.label}/>
      )}

    </div>
  )
}

export default Profile
