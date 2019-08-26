import React, {useEffect, useState} from 'react'
import UserTable from './UserTable'
import ArticleTable from './ArticleTable'
import {
  Heading,
} from 'evergreen-ui'

const AdminWrapper = {
  display: 'flex',
  flexDirection: 'column'
}
const Content = {
  display: 'flex',
  flexDirection: 'column'
}

function Admin() {
  const [userData, setUserData] = useState([
    {
        "role": "user",
        "_id": "5d5ebef638b80631fcc601c9",
        "email": "firstuser@gmail.com",
        "username": "FirstUser",
        "password": "$2b$10$suFVmDm/1pFHYib/3E1Fl.j/8WCO6GseUxlGUkDD.cDWER2E40e1K",
        "__v": 0,
        "createdAt": "2019-08-26T17:12:42.897Z"
    },
    {
        "role": "user",
        "_id": "5d5efaf9154fde540c845e91",
        "email": "matthewbf8@gmail.com",
        "username": "MatthewBF",
        "password": "$2b$10$frSs0z/fIFx0hIKjehv.POVx7./w/dFQlg5xKSY1/qKfv/bOQqydW",
        "__v": 0,
        "createdAt": "2019-08-26T17:12:42.898Z"
    },
    {
        "role": "user",
        "_id": "5d5efc8f2787643b1cf3d4c5",
        "email": "admin@gmail.com",
        "username": "admin",
        "password": "$2b$10$6Ur74TSoKscFWh3NrNireuV9V9gGEiTKPbIKKu/.tYbEVk4n7/36e",
        "__v": 0,
        "createdAt": "2019-08-26T17:12:42.898Z"
    },
    {
        "role": "admin",
        "_id": "5d5efdc7db678230f4208ae3",
        "email": "adminuser@gmail.com",
        "username": "Admin",
        "password": "$2b$10$GOQeZu/wBbO40F8xRQ25QOwbtawBQHn9L1wUTXR96T1meibfXLgzi",
        "__v": 0,
        "createdAt": "2019-08-26T17:12:42.900Z"
    }
])
  const [allArticles, setAllArticles] = useState([
    {
        "_id": "5d5da2ae24e4e911e442b33d",
        "title": "Article posted using Postman",
        "author": "Matthew",
        "body": "Hello, this is the first article body posted in postman",
        "createdAt": "2019-08-21T19:59:42.753Z",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "5d5dab8b413770167c4e7091",
        "title": "Article1",
        "author": "Matthew",
        "body": "Hello, this is the second article body posted in postman",
        "createdAt": "2019-08-21T20:37:31.347Z",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "5d5dba1b4be807574076922a",
        "title": "Article3",
        "author": "Matthew",
        "body": "Hello, this is the second article body posted in postman",
        "slug": "Articlefind",
        "createdAt": "2019-08-21T21:39:39.797Z",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "5d5dbac54be807574076922b",
        "title": "titlesameasslug",
        "author": "Matthew",
        "body": "damn im stupid",
        "slug": "titlesameasslug",
        "createdAt": "2019-08-21T21:42:29.377Z",
        "comments": [
            {
                "date": "2019-08-22T13:51:31.906Z",
                "_id": "5d5e9de308ecb449cc514c1c",
                "body": "Hey my First comment!",
                "author": "Random Guy"
            },
            {
                "date": "2019-08-23T20:31:32.668Z",
                "_id": "5d604d24e830970ffc3c67ea",
                "body": "Hey my First comment!",
                "author": "Random Guy"
            }
        ],
        "__v": 2
    }
])
  const [fetch, setFetch] = useState({
    isLoading: false,
    isError: false,
    error: null
  })
  return(
    <div style={AdminWrapper}>
      <div style={Content}>
        {fetch.isLoading ?
          <div> Loading </div>
          :
          fetch.isError ?
          <div> Error: {fetch.error} </div>
          :
          userData.length == 0 || null ?
          <div> No Users </div>
          :
          <div>
            <Heading> Users </Heading>
            <UserTable users={userData}/>
          </div>
        }
      </div>
      <div style={Content}>
      {fetch.isLoading ?
        <div> Loading </div>
        :
        fetch.isError ?
        <div> Error: {fetch.error} </div>
        :
        allArticles.length == 0 || null ?
        <div> No Articles </div>
        :
          <div>
            <Heading> Articles </Heading>
            <ArticleTable articles={allArticles}/>
          </div>
      }
      </div>
    </div>
  )
}

export default Admin
