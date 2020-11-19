import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import { bookQuery } from '../queries/books'

const Edit = props => {
  const bookId = parseInt(props.match.params.bookId, 10)
  const { data, loading } = useQuery(bookQuery, { variables: { bookId } })
  console.log(data)
  return (
    <div>
      <div>{loading && 'loading...'}</div>
      Edit view: {bookId}
    </div>
  )
}

export default Edit
