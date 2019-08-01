import React from 'react'
import ArticleBlock from './ArticleBlock'

const data = [
  {
    title: "Article title - could be long",
    author: 'Landon',
    createdAt: '3 hours ago',
    commentsCount: '2',
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                                 Lorem ipsum dolor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid                                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },

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
