import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import Comments from './Comments'
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
  const comments = article.comments
  return(
    <div style={center}>
      <Navbar/>
      <Pane padding={15} background="#F7F9FD" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Pane display="flex" alignItems="center" marginBottom={10}>
          <Heading size={200} marginRight={5}>Posted by </Heading>
          <Link to={`/author/${article.author}`}>
            <Heading size={200} marginRight={5}>{article.author} |</Heading>
          </Link>
          <Heading size={200} marginRight={5}>{article.createdAt} |</Heading>
          <Link>
            <Heading size={200} marginRight={5}> {article.commentsCount} comments</Heading>
          </Link>
        </Pane>
        <Heading size={800} marginBottom={20} textAlign='center' >{article.title}</Heading>
      </Pane>
      <Pane padding={15} background='#F7F9FD'>
        <Pane background="#FFFFFF" padding={24} marginBottom={16}>
          <Text>{article.body}</Text>
        </Pane>
      </Pane>
      <Pane padding={15} background="#F7F9FD" paddingLeft={20} >
        <Heading size={700} marginBottom={20} >Comments</Heading>
        <Comments comments={article.comments} />
      </Pane>
    </div>
  )
}

export default Article
