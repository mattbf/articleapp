import React from 'react'
import ArticleBlock from './ArticleBlock'

const data = [
  {
    title: "article title - could be long",
    author: 'Landon',
    createdAt: '3 hours ago',
    commentsCount: '2'
  },
  {
    title: "article title - could be long",
    author: 'Landon',
    createdAt: '3 hours ago',
    commentsCount: '2'
  }
]

function Feed() {
  return (
    <div>
      {data.map((article, index) =>
        <ArticleBlock key={index} article={article}/>
      )}
    </div>
  )
}

export default Feed
