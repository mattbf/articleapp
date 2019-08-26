import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { HashLink as SectionLink } from 'react-router-hash-link';
import Navbar from './Navbar'
import Comments from './Comments'
import ArticleEditor from './ArticleEditor.js';
import { timeDifferenceForDate } from '../Utils/TimeDif.js';
import CreateNav from './CreateNav.js';
import { Route, Redirect } from 'react-router'
import {PrettyUrl} from '../Utils/PrettyUrl'
import axios from 'axios'

import {
  Pane,
  Button,
  Text,
  Heading,
  Avatar,
  TextInput,
  Spinner
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

const isLoading = false


function CreateArticle() {
  const [title, setTitle] = useState(' ')
  const [articleInfo, setArticleInfo] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [fetch, setFetch] = useState({
    isLoading: false,
    isError: false,
    error: null
  })

  function Publish() {
    setFetch({
      isLoading: true,
      isError: false,
      error: null
    })
    axios.post('http://localhost:4000/articles/add')
    axios({
      method: 'post',
      url: 'http://localhost:4000/articles/add',
      data:{
      	title: title,
      	author: "Not an author",
      	body: articleInfo,
      	slug: title ? PrettyUrl(title) : ''
      }
    })
      .then(response => {
        console.log(response)
        setFetch({
          isLoading: false,
          isError: false,
          error: null
        })
        setIsSuccess(true)
      })
      .catch(function(error) {
        setFetch({
          isLoading: false,
          isError: true,
          error: error
        })
        console.log(error);
      })
  }
  function onEdit(content) {
    setArticleInfo(content)
    console.log(articleInfo)
  }
  return(
    <div>
      <CreateNav publish={Publish}/>
      <div style={TitleBox}>
        <Heading marginBottom="10px" size={700}> Article Title </Heading>
        <TextInput
          onChange={e => setTitle(e.target.value)}
          value={title}
          width="100%"
        />
      </div>
      <div style={ArticleWrapper}>
        <Route path="/new" render={() => (
          isSuccess ? (
            <Redirect to="/"/>
          ) : (
            <div>
            {
              fetch.isError ?
              <Pane background="redTint"style={paper} display="flex" alignItems="center" justifyContent="center" style={{height: '50px'}}>
                <div style={{color: "#BF0E08"}}> Error: {fetch.error.message} </div>
              </Pane>
              :
              null
            }

            <div>
              {!fetch.isLoading ?
                <Pane elevation={1} style={paper}>
                  <ArticleEditor onEdit={onEdit}/>
                </Pane>
                :
                <Pane style={paper} display="flex" alignItems="center" justifyContent="center" height={400}>
                  <Spinner />
                </Pane>
              }
            </div>
          </div>
          )
        )}/>

      </div>
    </div>
  )
}

export default CreateArticle
