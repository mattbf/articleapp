import React from 'react'
import {
  Pane,
  Button,
  Text,
  Heading,
  Table,
} from 'evergreen-ui'

function UserTable(props) {
  const users = props.users
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
        {users.map(user => (
          <Table.Row key={user._id} isSelectable onSelect={() => alert(user.username)}>
            <Table.TextCell>{user.username}</Table.TextCell>
            <Table.TextCell>{user.createdAt}</Table.TextCell>
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

export default UserTable
