import React from 'react'
import ArticleBlock from './ArticleBlock'

const data = [
  {
    title: "Article title - could be long",
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
        <ArticleBlock key={index} article={article} index={index + 1}/>
      )}
    </div>
  )
}

export default Feed