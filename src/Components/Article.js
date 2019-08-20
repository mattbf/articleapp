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
//import { Pane as SectionLink } from 'evergreen-ui'


function Article(props) {
  const article = props.location.state.props.article
  const url = props.url
  var timeago = timeDifferenceForDate(article.createdAt)
  return(
    <div>
      <Navbar/>
      <Pane padding={15} background="#F7F9FD" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Pane display="flex" alignItems="center" marginBottom={10}>
          <Heading size={200} marginRight={5}>Posted by </Heading>
          <Link to={`/author/${article.author}`}>
            <Heading size={200} marginRight={5}>{article.author} |</Heading>
          </Link>
          <Heading size={200} marginRight={5}>{timeago} |</Heading>
          <SectionLink
            to={{
              pathname: `/article/${url}#comments`,
              state: {props},
            }}
          >
            <Text size={300} marginRight={3}>{article.commentsCount} comments</Text>
          </SectionLink>
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


// <SectionLink
//   to={{
//     pathname: `/article/${url}#comments`,
//     state: {props},
//   }}
// >
//   <Text size={300} marginRight={3}>{article.commentsCount} comments</Text>
// </SectionLink>
