import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { HashLink as SectionLink } from 'react-router-hash-link';
import Navbar from './Navbar'
import Comments from './Comments'
import ArticleEditor from './ArticleEditor.js';
import { timeDifferenceForDate } from '../Utils/TimeDif.js';
import CreateNav from './CreateNav.js';
import {
  Pane,
  Button,
  Text,
  Heading,
  Avatar,
  TextInput,
} from 'evergreen-ui'

const ArticleWrapper = {
    minHeight: '90vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}
const paper = {
  backgroundColor: '#FFFFFF',
  width: '80%',
  minHeight: '80vh',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderRadius: '4px',
}
const TitleBox = {
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '25px',
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

function CreateArticle() {
  const [title, setTitle] = useState(' ')
  return(
    <div>
      <CreateNav/>
      <div style={TitleBox}>
        <Heading marginBottom="10px" size={700}> Article Title </Heading>
        <TextInput
          onChange={e => setTitle(e.target.value)}
          value={title}
          width="100%"
        />
      </div>
      <div style={ArticleWrapper}>
        <Pane elevation={1} style={paper}>
          <ArticleEditor/>
        </Pane>
      </div>
    </div>
  )
}

export default CreateArticle
