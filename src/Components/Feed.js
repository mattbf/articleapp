import React, {useEffect, useState} from 'react'
import ArticleBlock from './ArticleBlock'
import axios from 'axios'

const data = [
  {
    title: "Article title - could be long",
    author: 'Landon',
    createdAt: new Date().toString(),
    commentsCount: '2',
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                                 Lorem ipsum dolor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid                                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ",
    comments: [
      {
        comment: "Nice Article! Very Interesting!",
        by: 'Landon',
        createdAt: new Date(),
      },
      {
        comment: "Nice Article! Very Interesting!",
        by: 'Landon',
        createdAt: new Date(),
      },
      {
        comment: "Nice Article! Very Interesting!",
        by: 'Landon',
        createdAt: new Date(),
      },
    ]
  },
  {
    title: "article title -- could be long",
    author: 'Landon',
    createdAt: new Date().toString(),
    commentsCount: '2'
  },
  {
    title: "article title-could be long",
    author: 'Landon',
    createdAt: new Date().toString(),
    commentsCount: '2'
  },
  {
    title: "article title could be long",
    author: 'Landon',
    createdAt: new Date().toString(),
    commentsCount: '2'
  },
  {
    title: "article title - could be long",
    author: 'Landon',
    createdAt: new Date().toString(),
    commentsCount: '2'
  },
  {
    title: "article title - could be long",
    author: 'Landon',
    createdAt: new Date().toString(),
    commentsCount: '2'
  },

]

function Feed() {
  const articleCount = data.length
  const [feed, setFeed] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/articles/')
        .then(response => {
            setFeed(response.data);
            //console.log(articles)
        })
        .catch(function (error){
            console.log(error);
        })
  })

  return (
    <div>
      {feed.map((article, index) =>
        <ArticleBlock key={article._id} article={article} index={index + 1} number={articleCount - index}/>
      )}
    </div>
  )
}

export default Feed
