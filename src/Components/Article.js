import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import { HashLink as SectionLink } from 'react-router-hash-link';
import Navbar from './Navbar'
import Comments from './Comments'
import { timeDifferenceForDate } from '../Utils/TimeDif.js';
import { PrettyUrl } from '../Utils/PrettyUrl.js';
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
  const slug = PrettyUrl(props.match.params.title)
  console.log(slug)
  //const id = props.id
  const [fetch, setFetch] = useState({
    isLoading: false,
    isError: false,
    error: null
  })
  const [article, setArticle] = useState({
    data: [],
    timeago: '',
    commentsCount: 0
  })
  useEffect(() => {
    setFetch({
      isLoading: true,
      isError: false,
      error: null
    })
    const url = `http://localhost:4000/articles/${slug}`
    console.log(url)
    axios.get(url)
        .then(response => {
            setArticle({
              data: response.data,
              timeago: timeDifferenceForDate(response.data.createdAt),
              commentsCount: response.data.comments ? response.data.comments.length : 0
            });
            setFetch({
              isLoading: false,
              isError: false,
              error: null
            })
            console.log(response.data)
        })
        .catch(function (error){
          setFetch({
            isLoading: false,
            isError: true,
            error: {
              error: error,
              code: error.message.substring(error.message.length - 3, error.message.length)
            }
          })
            console.log(error);

        })
  }, [])

  function ShowData() {
    console.log(article)
    //console.log(url)
  }
  console.log(props)
  //const url = props.url
  // var timeago = timeDifferenceForDate(article.createdAt)
  // const commentsCount = article.comments.length
  return(
    <div>
      <Navbar/>
      {fetch.isError ?
        // fetch.error.statuscode == 401 ?
        fetch.error.code == 401 ?
        <div>Not logged in</div>
        :
        <div>Error: {fetch.error.error.message}</div>
        :
        <div>
          <Pane padding={15} background="#F7F9FD" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Pane display="flex" alignItems="center" marginBottom={10}>
              <Heading size={200} marginRight={5}>Posted by </Heading>
              <Link to={`/author/${article.data.author}`}>
                <Heading size={200} marginRight={5}>{article.data.author} |</Heading>
              </Link>
              <Heading size={200} marginRight={5}>{article.data.timeago} |</Heading>
              <SectionLink
                to={{
                  pathname: `/article/${article.data.title}#comments`,
                  state: {props},
                }}
              >
                <Text size={300} marginRight={3}>{article.commentsCount} comments</Text>
              </SectionLink>
            </Pane>
            <Heading size={800} marginBottom={20} textAlign='center' >{article.data.title}</Heading>
          </Pane>
          <Pane padding={15} background='#F7F9FD'>
            <Pane background="#FFFFFF" padding={24} marginBottom={16}>
              <Text>{article.data.body}</Text>
            </Pane>
          </Pane>
          <Pane padding={15} background="#F7F9FD" paddingLeft={20} >
            <Heading size={700} marginBottom={20} >Comments</Heading>
            {article.commentsCount == 0 ?
              <div> No Comments yet</div>
              :
              <Comments comments={article.data.comments} />
            }
          </Pane>
        </div>
      }
      <Button onClick={ShowData}> Show data </Button>
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
