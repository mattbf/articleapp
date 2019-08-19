import React from 'react'
import { Pane, Button, Text, Heading, Icon, Pill } from 'evergreen-ui'
import {Link} from 'react-router-dom'
import { timeDifferenceForDate } from '../Utils/TimeDif.js';

// position: 'absolute',
// left: '5px',
// top: '3px',
const articleLink = {
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
    color: '#1070CA'
  }
}

function ArticleBlock(props) {
  var url = props.article.title.split(' ').join('-')
  var timeago = timeDifferenceForDate(props.article.createdAt)
  var authorLink = `/author/${props.article.author}`
  return(
      <Pane display="flex" padding={16} background="#FFFFFF" borderRadius={3} margin={10} position='relative'>
        <Pane flex={1} alignItems="top" display="flex">
          <Pane>
            <Pane flex={1} alignItems="top" display="flex" flexDirection='row'>
              <Pill display="inline-flex" color="blue" marginTop={5} marginRight={8}>{props.index}</Pill>
            <Pane flex={1} alignItems="center" display="flex" flexDirection='column'>
              <Link
                to={{
                  pathname: `/article/${url}`,
                  state: {props},
                }}
                style={articleLink}
              >
                <Heading style={articleLink} size={600} >{props.article.title}</Heading>
              </Link>
              <Pane flex={1} alignItems="center" display="flex">
                <Text size={300} marginRight={3}>Posted by </Text>
                <Link to={authorLink} style={{marginTop: '-4px'}}>
                  <Text size={300} marginRight={3}>{props.article.author}</Text>
                </Link>
                <Text size={300} marginRight={3}> | </Text>
                <Text size={300}>  {timeago} | {props.article.commentsCount} comments</Text>
              </Pane>
            </Pane>
            </Pane>

          </Pane>
        </Pane>
        <Pane>
          {/* Below you can see the marginRight property on a Button. */}
        </Pane>
      </Pane>
  )
}

export default ArticleBlock
