import React from 'react'
import { Pane, Button, Text, Heading } from 'evergreen-ui'

function ArticleBlock() {
  return(
    <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={400}>Left Aligned</Heading>
        <Heading size={600}>Left Aligned</Heading>
        <Text size={300}>The quick brown fox jumps over the lazy dog</Text>
      </Pane>
      <Pane>
        {/* Below you can see the marginRight property on a Button. */}
        <Button marginRight={16}>Button</Button>
        <Button appearance="primary">Primary Button</Button>
      </Pane>
    </Pane>
  )
}

export default ArticleBlock
