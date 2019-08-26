import React from 'react'
import {
  Pane,
  Button,
  Text,
  Heading,
  Table,
} from 'evergreen-ui'

function ArticleTable(props) {
  const articles = props.articles
  return(
    <div>
    <Table>
      <Table.Head>
        <Table.SearchHeaderCell />
        <Table.TextHeaderCell>
          Last Activity
        </Table.TextHeaderCell>
        <Table.TextHeaderCell>
          ltv
        </Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={240}>
        {articles.map(article => (
          <Table.Row key={article._id} isSelectable onSelect={() => alert(article.title)}>
            <Table.TextCell>{article.author}</Table.TextCell>
            <Table.TextCell>{article.createdAt}</Table.TextCell>
            <Table.TextCell isNumber>
              10
            </Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
      </Table>
    </div>
  )
}

export default ArticleTable
