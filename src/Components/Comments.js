import React from 'react'
import Comment from './Comment'

const data = [
  {
    title: "Article title - could be long",
    author: 'Landon',
    createdAt: '3 hours ago',
    commentsCount: '2',
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                                 Lorem ipsum dolor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid                                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
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
]

function Comments() {
  return (
    <div>
      {data.map((article, index) =>
        <Comment key={index} article={article} index={index + 1}/>
      )}
    </div>
  )
}

export default Comments
