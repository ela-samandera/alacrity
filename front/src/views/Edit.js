import { useMutation, useQuery } from '@apollo/react-hooks'
import React from 'react'
import BookForm from '../components/BookForm'
import { bookQuery, editBookMutation } from '../queries/books'

const Edit = props => {
  const bookId = parseInt(props.match.params.bookId, 10)
  const { data, loading: queryLoading } = useQuery(bookQuery, { variables: { bookId } })
  const [editBook, { loading: editLoading }] = useMutation(editBookMutation)
  const loading = editLoading || queryLoading
  return (
    <div>
      <div>{loading && 'loading...'}</div>
      {data && data.book && <BookForm
        bookValues={data.book}
        onSubmit={ values => { editBook({ variables: { ...values, bookId } }) }}
      />}
    </div>
  )
}

export default Edit
