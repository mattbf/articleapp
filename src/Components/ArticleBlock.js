import React from 'react'
import { Pane, Button, Text, Heading } from 'evergreen-ui'
import {Link} from 'react-router-dom'

function ArticleBlock(props) {
  return(
    <Link
      to={{
        pathname: `/article/${props.article.title}`,
        state: {props},
      }}
      style={{textDecoration: 'none'}}
    >
      <Pane display="flex" padding={16} background="tint2" borderRadius={3} margin={10} position='relative'>
        <Heading size={100} marginRight={10} position='absolute' left={5} top={3}>{props.index}</Heading>
        <Pane flex={1} alignItems="top" display="flex">

          <Pane marginLeft={10}>
            <Heading size={600} >{props.article.title}</Heading>
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
    </Link>
  )
}

export default ArticleBlock
