import React from 'react'
import { Pane, Button, Text, Heading, Icon, } from 'evergreen-ui'
import {Link} from 'react-router-dom'

// position: 'absolute',
// left: '5px',
// top: '3px',

const index = {
  display: 'flex',
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '8px',
}

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
        <Pane flex={1} alignItems="top" display="flex">
          <Pane>
            <Pane flex={1} alignItems="top" display="flex" flexDirection='row'>
              <div style={index}>
                <Icon icon="full-circle" size={16} color="#DDEBF7" />
                <Heading size={100} marginLeft={0}  position='absolute'>{props.index}</Heading>
              </div>
            <Heading size={600} >{props.article.title}</Heading>
            </Pane>
            <Pane flex={1} alignItems="center" display="flex" paddingLeft='24px'>
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
