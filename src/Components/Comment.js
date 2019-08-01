import React from 'react'
import { Pane, Button, Text, Heading, Icon, } from 'evergreen-ui'
import {Link} from 'react-router-dom'

function Comment(props) {
  //var url = props.article.title.split(' ').join('-')
  const comment = props.comment
  console.log(comment)
  return(
    <Pane background='tint2'>
      <Text> Comment {comment.by} </Text>
    </Pane>
  )
}

export default Comment
