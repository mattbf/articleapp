import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import {
  Pane,
  Button,
  Text,
  Heading,
  Avatar,
  TextInput
} from 'evergreen-ui'

const center = {

}

function Article(props) {
  const article = props.location.state.props.article
  return(
    <div style={center}>
      <Navbar/>
      <Pane padding={15} background="tint1" >
        <Heading size={500} marginBottom={20} >Article info {article.title} {article.author}</Heading>
      </Pane>
      <Pane padding={15} >
        <Heading size={500} marginBottom={20} >Body</Heading>
      </Pane>
      <Pane padding={15} background="tint1" >
        <Heading size={500} marginBottom={20} >Comments</Heading>
      </Pane>
    </div>
  )
}

export default Article
