import React from 'react'
import { Pane, Button, Text, Heading, Icon, } from 'evergreen-ui'
import {Link} from 'react-router-dom'

function Comment(props) {
  var url = props.article.title.split(' ').join('-')
  return(
    <Pane background='tint2'>
      <Text> Comments </Text>
    </Pane>
  )
}

export default Comment
