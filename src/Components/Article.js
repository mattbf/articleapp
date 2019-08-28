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
//import ViewOnlyEditor from './ViewOnlyEditor'

import ArticleEditor from './ArticleEditor.js';
import ArticleViewer from './ArticleViewer.js';
import htmlToDraft from 'html-to-draftjs';

import { EditorState, ContentState, convertFromRaw, convertToRaw } from "draft-js";

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

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};
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

  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
    //EditorState.createWithContent(convertFromRaw(rawContentState))
  );

  const onChangeEditor = (editorState) => {
    setEditorState(editorState)
  }

  useEffect(() => {
    setFetch({
      isLoading: true,
      isError: false,
      error: null
    })

    console.log(url)
    axios.get(url)
        .then(response => {
            // console.log("fetched article")
            console.log(response.data)

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
            // setEditorState(
            //   EditorState.createWithContent(convertFromRaw(response.data))
            // )

            console.log(response.data.body[0])
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
          <Heading marginBottom={10} size={700}>"Oops.. Looks like you're not logged in!"</Heading>
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
              <ArticleViewer readOnly={false} editorState={editorState} onChange={onChangeEditor} initialContent={content}/>
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
    </div>
  )
}

export default Article

//{article.data}
// <Text>{article.data.body}</Text>

// <Editor editorState={editorState} readOnly={true} />
