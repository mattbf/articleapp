import React from 'react'
import { Pane, Button, Text, Heading } from 'evergreen-ui'
import {Link} from 'react-router-dom'

function ArticleBlock(props) {
  return(
    <Pane display="flex" padding={16} background="tint2" borderRadius={3} margin={10}>
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={400} marginRight={10}>1.</Heading>
        <Pane >
          <Heading size={600}>{props.article.title}</Heading>
          <Pane flex={1} alignItems="center" display="flex">
            <Link to='/testing' style={{marginTop: '-4px'}}>
              <Text size={300} marginRight={3}>{props.article.author}</Text>
            </Link>
            <Text size={300}>posted {props.article.createdAt} | {props.article.commentsCount} comments</Text>
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
