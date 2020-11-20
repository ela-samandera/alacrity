import { useMutation, useQuery } from '@apollo/react-hooks'
import { Alert } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import BookForm from '../components/BookForm'
import { bookQuery, editBookMutation } from '../queries/books'

const Edit = props => {
  const [ success, setSuccess ] = useState()
  const bookId = parseInt(props.match.params.bookId, 10)
  const { data, loading: queryLoading, error: queryerror } = useQuery(bookQuery, {
    onError: e => { console.log(e) },
    variables: { bookId }
   })
  const [editBook, { data: editData, loading: editLoading, error: editError }] = useMutation(editBookMutation, {
    onError: e => { console.log(e) }
  })
  const loading = editLoading || queryLoading
  useEffect(() => {
    if (editData && editData.editBook) {
      setSuccess('Book was updated successfully.')
    }
  }, [editData])
  return (
    <div>
      {loading && <Alert variant='outlined' severity='info'>loading...</Alert>}
      {data && data.book && <BookForm
        bookValues={data.book}
        error={editError || queryerror}
        onSubmit={ values => { editBook({ variables: { ...values, bookId } }) }}
        success={success}
      />}
    </div>
  )
}

export default Edit
