import React from 'react'
import { Pane, Button, Text, Heading, Icon, Avatar } from 'evergreen-ui'
import {Link} from 'react-router-dom'
import { timeDifferenceForDate } from '../Utils/TimeDif.js';

const commentWrapper = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '25px',

}
const commentBox = {
  marginLeft: '15px',
  // border: 'solid',
  // borderColor: '#b9b9b9',
  borderWidth: '0.5px',
  borderRadius: '3px',
  width: '90%',
}
const commentPane = {
  // borderTop: 'solid',
  // borderColor: '#b9b9b9',
  borderWidth: '0.5px',
  padding: '10px',
}
const commentToolbar = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f6f8fa',
  height: '20px',
  padding: '10px',

}

function Comment(props) {
  //var url = props.article.title.split(' ').join('-')
  const comment = props.comment
  const timeago = timeDifferenceForDate(comment.createdAt)
  console.log(comment)
  return(
    <Pane style={commentWrapper}>
      <Avatar name={comment.by} size={40} />
      <Pane elevation={1} style={commentBox}>
        <div style={commentToolbar}>
        <Link to={`/author/${comment.by}`}>
          <Text>
            {comment.by}
          </Text>
        </Link>
          <Text style={{marginLeft: '4px', marginBottom: '-2px'}}>
            commented {timeago}
          </Text>
        </div>
        <div style={commentPane}>
          <Text> Comment blha blah lah </Text>
        </div>
      </Pane>
    </Pane>
  )
}

export default Comment
