import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import { HashLink as SectionLink } from 'react-router-hash-link';
import Navbar from './Navbar'
import Comments from './Comments'
import { timeDifferenceForDate } from '../Utils/TimeDif.js';
import { PrettyUrl } from '../Utils/PrettyUrl.js';

import { convertFromHTML, convertToHTML } from "draft-convert"
import { DraftailEditor, ENTITY_TYPE } from "draftail"
import LinkSource from './LinkSource.js'
import ViewOnlyEditor from './ViewOnlyEditor'

import { Editor, EditorState, ContentState, convertFromRaw, convertToRaw } from "draft-js";

import {
  Pane,
  Button,
  Text,
  Heading,
  Avatar,
  TextInput,
  toaster
} from 'evergreen-ui'
//import { Pane as SectionLink } from 'evergreen-ui'
import {CopyToClipboard} from 'react-copy-to-clipboard';

//get html and convert to content
const importerConfig = {
  htmlToEntity: (nodeName, node, createEntity) => {
    // a tags will become LINK entities, marked as mutable, with only the URL as data.
    if (nodeName === "a") {
      return createEntity(ENTITY_TYPE.LINK, "MUTABLE", { url: node.href })
    }

    if (nodeName === "img") {
      return createEntity(ENTITY_TYPE.IMAGE, "IMMUTABLE", {
        src: node.src,
      })
    }

    if (nodeName === "hr") {
      return createEntity(ENTITY_TYPE.HORIZONTAL_RULE, "IMMUTABLE", {})
    }

    return null
  },
  htmlToBlock: (nodeName) => {
    if (nodeName === "hr" || nodeName === "img") {
      // "atomic" blocks is how Draft.js structures block-level entities.
      return "atomic"
    }

    return null
  },
}

const fromHTML = (html) => convertToRaw(convertFromHTML(importerConfig)(html))

function Article(props) {
  const articleTitle = props.match.params.title
  const slug = PrettyUrl(articleTitle)
  const url = `http://localhost:4000/articles/${slug}`

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
  let editorState
  const sampleMarkup =
    '<b>Bold text</b>, <i>Italic text</i><br/ ><br />' +
    '<a href="http://www.facebook.com">Example link</a><br /><br/ >' +
    '<img src="image.png" height="112" width="200" />';
  const blocksFromHTML = convertFromHTML(sampleMarkup);
  const contentState = ContentState.createFromBlockArray(blocksFromHTML);
  editorState = EditorState.createWithContent(contentState);

  return(

    <div>
      <Navbar/>
      <div style={{width: '100%', display: 'flex', alignItems: 'flex-end' }}>
        <CopyToClipboard text={url}
          onCopy={() => toaster.notify('Article URL copied to clipboard')}>
          <Button style={{marginTop: '15px', marginLeft: 'auto'}} marginRight={12} iconAfter="link">Share</Button>
        </CopyToClipboard>
      </div>
      {fetch.isError ?
        // fetch.error.statuscode == 401 ?
        fetch.error.code == 401 ?
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', minHeight: '400px'}}>
          <Heading marginBottom={10} size={700}>Oops.. Looks like you're not logged in!</Heading>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
            <Link to={'/login'}>
              <Heading size={500} marginRight={5}>Login</Heading>
            </Link>
            <Heading size={500}>
            to enjoy the article {articleTitle}
            </Heading>
          </div>
        </div>
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
              <Heading size={200} marginRight={5}>{article.timeago} |</Heading>
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
              //<Text>{article.data.body}</Text>
              <Editor
                editorState={editorState}
              />
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
