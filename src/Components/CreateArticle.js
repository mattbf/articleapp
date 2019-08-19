import React from 'react';
import { Link } from "react-router-dom";
import { HashLink as SectionLink } from 'react-router-hash-link';
import Navbar from './Navbar'
import Comments from './Comments'
import { timeDifferenceForDate } from '../Utils/TimeDif.js';
import {
  Pane,
  Button,
  Text,
  Heading,
  Avatar,
  TextInput
} from 'evergreen-ui'


function CreateArticle() {
  return(
    <div>
      New article
    </div>
  )
}

export default CreateArticle
