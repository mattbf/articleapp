import React from 'react'
import { Pane, Button, Text, Heading, Icon, Avatar } from 'evergreen-ui'
import {Link} from 'react-router-dom'
import { timeDifferenceForDate } from '../Utils/TimeDif.js';
import CommentsEditor from './CommentsEditor.js';

const commentWrapper = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '5px',

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
  const state = props.editorState
  const onChange = props.onChange
  const user = props.user
  return(
    <Pane style={commentWrapper}>
      <Avatar name={user.username} size={40} />
      <Pane elevation={1} style={commentBox}>
        <div style={commentToolbar}>
          <Text style={{marginRight: '4px', marginBottom: '-2px'}}>
            Add a comment as
          </Text>
          <Link to={`/author/${user.username}`}>
            <Text>
              {user.username}
            </Text>
          </Link>
        </div>
        <div style={commentPane}>
          <CommentsEditor editorState={state} onChange={onChange}/>
        </div>
      </Pane>
    </Pane>
  )
}

export default Comment
